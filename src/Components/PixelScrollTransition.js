import React, { useEffect, useRef, useCallback } from "react";

/**
 * 捲動驅動的像素格轉場。
 *
 * 把畫面切成 pixelSize 的方格，每格依「方向 × 圖樣」算出一個 0~1 的門檻值，
 * 捲動進度掃過門檻時該格才翻色。剛翻過去的一小段（accentShare 寬的帶狀）
 * 先短暫顯示 accent 色，形成掃過去的彩色波前。
 *
 * mode:
 *   "section"  轉場佔一段自己的捲動距離（scrollHeight），期間由一層固定的
 *              滿版畫布蓋住視窗，所以下一段內容不會在擦除途中從底部冒出來。
 *              進度離開 0~1 區間就整張清空：colorA 等於上一段底色、
 *              colorB 等於下一段底色，兩端的切換都看不出接縫。
 *              下一段內容緊接在區塊之後，不會有多餘的空白尾巴。
 *   "inline"   轉場是一個跟著頁面捲動的實體區塊，畫布就是區塊本身。
 *              進度依「區塊穿越視窗的行程」計算：區塊頂端進入視窗底部時為 0，
 *              區塊底端離開視窗頂端時為 1。上方接深色區、下方接淺色區，
 *              畫面上永遠是「深 → 擦到一半的馬賽克 → 淺」，不會有硬邊界。
 *   "cover"    畫布貼齊父層（會被父層的 overflow 裁切），單向擦除。
 *   "viewport" 畫布固定滿版，不受任何容器裁切，並且是兩段式：
 *              前半段用馬賽克蓋滿畫面，後半段用同一道波揭開，露出底下的內容。
 *
 * 門檻圖只在尺寸改變時重算，每一幀只做繪製。
 */

const EASINGS = {
  linear: (t) => t,
  "ease-in": (t) => t * t,
  "ease-out": (t) => 1 - (1 - t) * (1 - t),
  "ease-in-out": (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
  "expo-out": (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
};

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

/* 固定種子的亂數：門檻圖每次重算都要一樣，否則捲動時會變成雜訊閃爍 */
function makeRandom(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function directionValue(direction, nx, ny) {
  switch (direction) {
    case "top-bottom":
      return ny;
    case "bottom-top":
      return 1 - ny;
    case "left-right":
      return nx;
    case "right-left":
      return 1 - nx;
    /* 垂直的中央往外擴散：中間的門檻最低（最早翻），越靠上下緣越晚翻。
       用途是讓畫布的上下緣不要出現「整排翻好翻滿」的直線 —— 邊緣的格子
       拖到最後才動，波前在那裡是稀疏的，看起來就不會被切齊。
       （center-out 是放射狀的，橫向也會受影響；這個只吃垂直方向。） */
    case "edges-last-y":
      return Math.abs(ny * 2 - 1);
    case "center-out":
      return Math.min(1, Math.hypot(nx - 0.5, ny - 0.5) / 0.7071);
    case "center-in":
      return 1 - Math.min(1, Math.hypot(nx - 0.5, ny - 0.5) / 0.7071);
    default:
      return ny;
  }
}

function patternValue(pattern, x, y, nx, ny, rnd) {
  switch (pattern) {
    case "random":
      return rnd();
    case "checker":
      return (x + y) % 2 === 0 ? 0.25 : 0.75;
    case "diagonal":
      return (nx + ny) / 2;
    case "wave":
      return 0.5 + 0.5 * Math.sin(nx * Math.PI * 4 + ny * Math.PI * 2);
    case "spiral": {
      const a = Math.atan2(ny - 0.5, nx - 0.5);
      const r = Math.hypot(nx - 0.5, ny - 0.5);
      return (((a / (Math.PI * 2) + 0.5 + r * 2) % 1) + 1) % 1;
    }
    case "radial":
      return Math.min(1, Math.hypot(nx - 0.5, ny - 0.5) / 0.7071);
    default:
      return rnd();
  }
}

const PixelScrollTransition = ({
  mode = "viewport",
  colorA = "transparent",
  colorB = "#f2f2f2",
  direction = "bottom-top",
  pattern = "random",
  patternIntensity = 0.4,
  easing = "linear",
  pixelSize = 28,
  gap = 0,
  endAt = 1,
  accentShare = 0.14,
  accentColors = ["#2A96B7", "#F7883D", "#59656C", "#D8984E"],
  scrollInfluence = 1,
  scrollRange = null, // null = 用被追蹤元素的高度
  scrollHeight = "200vh", // section 模式：區塊的總捲動高度
  height = "70vh", // inline 模式：區塊本身的高度
  zIndex = 9000, // 導覽列是 9998，要留在它下面
  seed = 20260101,
  className,
  style,
}) => {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);
  const gridRef = useRef(null);
  const rafRef = useRef(0);

  const isViewport = mode === "viewport";
  const isSection = mode === "section";
  const isInline = mode === "inline";

  const buildGrid = useCallback(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    /* viewport 模式畫布滿版但進度跟著父層算；section 模式畫布是釘住的那一格，
       進度跟著整個區塊（host）算。 */
    const track = isViewport ? host.parentElement : host;
    if (!track) return;

    const w = isSection || isViewport ? window.innerWidth : host.clientWidth;
    const h = isSection || isViewport ? window.innerHeight : host.clientHeight;
    const vh = window.innerHeight;
    if (!w || !h) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";

    /* 讓格子剛好整除容器：以 pixelSize 為目標值取最接近的行列數，
       再回推每格的實際寬高。這樣邊緣不會出現被切一半的格子，
       也不需要讓畫布溢出容器（避免撐出捲軸）。 */
    const target = pixelSize + gap;
    const cols = Math.max(1, Math.round(w / target));
    const rows = Math.max(1, Math.round(h / target));
    const stepX = w / cols;
    const stepY = h / rows;
    const n = cols * rows;

    const rnd = makeRandom(seed);
    const thresholds = new Float32Array(n);
    const accents = new Uint8Array(n);

    let min = Infinity;
    let max = -Infinity;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const i = y * cols + x;
        const nx = cols > 1 ? x / (cols - 1) : 0;
        const ny = rows > 1 ? y / (rows - 1) : 0;
        const t =
          (1 - patternIntensity) * directionValue(direction, nx, ny) +
          patternIntensity * patternValue(pattern, x, y, nx, ny, rnd);
        thresholds[i] = t;
        accents[i] = Math.floor(rnd() * 255);
        if (t < min) min = t;
        if (t > max) max = t;
      }
    }
    const span = max - min || 1;
    for (let i = 0; i < n; i++) thresholds[i] = (thresholds[i] - min) / span;

    /* sticky / fixed 元素的 getBoundingClientRect().top 會被釘住，
       不能用來推文件座標。offsetTop 鏈是版面位置，不受影響。 */
    let docTop = 0;
    for (let el = track; el; el = el.offsetParent) docTop += el.offsetTop;
    /* section：整段高度就是擦除距離（畫布是固定覆蓋層，不佔版面）
       inline：行程＝區塊高 + 視窗高（從進入視窗底部到離開視窗頂端），
               起點也要往前移一個視窗高。 */
    const range =
      scrollRange || (isInline ? h + vh : track.offsetHeight) || 1;
    if (isInline) docTop -= vh;

    gridRef.current = { cols, rows, stepX, stepY, thresholds, accents, dpr, w, h, docTop, range };
  }, [
    isViewport,
    isSection,
    isInline,
    direction,
    pattern,
    patternIntensity,
    pixelSize,
    gap,
    seed,
    scrollRange,
  ]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const grid = gridRef.current;
    if (!canvas || !grid) return;

    const ctx = canvas.getContext("2d");
    const { cols, rows, stepX, stepY, thresholds, accents, dpr, docTop, range } = grid;

    const raw = clamp01((window.scrollY - docTop) / range);
    const shaped = scrollInfluence === 1 ? raw : Math.pow(raw, scrollInfluence);
    const eased = (EASINGS[easing] || EASINGS.linear)(shaped);
    const p = clamp01(endAt > 0 ? eased / endAt : eased);

    /* 波前要能超衝到 1 + accentShare，否則最後一條 accent 帶洗不掉 */
    const overshoot = 1 + accentShare;
    let coverFront;
    let revealFront;
    if (isViewport) {
      // 前半段蓋滿、後半段揭開
      coverFront = clamp01(p / 0.5) * overshoot;
      revealFront = p <= 0.5 ? 0 : clamp01((p - 0.5) / 0.5) * overshoot;
    } else {
      coverFront = p * overshoot;
      revealFront = 0;
    }

    const opaqueA = colorA !== "transparent" && colorA !== "none";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, grid.w, grid.h);

    /* section 模式的畫布是固定覆蓋層：離開轉場區間就整張清空，
       讓上一段（p<=0）或下一段（p>=1）的真實內容露出來。 */
    if (isSection && (p <= 0 || p >= 1)) return;

    /* colorA 是實心色時先整片鋪底，翻過的格子再蓋上去。
       這樣進度 0 也一定是完整的 colorA，不會有殘缺。 */
    if (opaqueA) {
      ctx.fillStyle = colorA;
      ctx.fillRect(0, 0, grid.w, grid.h);
    }

    /* 還沒有任何格子翻色就到此為止。門檻最小值正好是 0，
       不先擋掉的話那一格容易因邊界比較提前亮起來。 */
    if (coverFront <= 0) return;
    const cellW = stepX - gap;
    const cellH = stepY - gap;
    const accentCount = accentColors.length;
    const revealing = revealFront > 0;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const i = y * cols + x;
        const t = thresholds[i];
        let fill;
        if (revealing && t <= revealFront - accentShare) {
          continue; // 已經揭開，讓底下的內容露出來
        } else if (revealing && t <= revealFront) {
          fill = accentCount ? accentColors[accents[i] % accentCount] : colorB;
        } else if (t <= coverFront - accentShare) {
          fill = colorB;
        } else if (t < coverFront) {
          fill = accentCount ? accentColors[accents[i] % accentCount] : colorB;
        } else {
          continue; // 尚未翻色：底已經鋪好（或 colorA 透明，讓底下露出來）
        }
        ctx.fillStyle = fill;
        ctx.fillRect(
          Math.floor(x * stepX),
          Math.floor(y * stepY),
          Math.ceil(cellW),
          Math.ceil(cellH)
        );
      }
    }
  }, [
    isViewport,
    isSection,
    colorA,
    colorB,
    easing,
    endAt,
    accentShare,
    accentColors,
    scrollInfluence,
    gap,
  ]);

  useEffect(() => {
    buildGrid();
    draw();

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        draw();
      });
    };
    const onResize = () => {
      buildGrid();
      draw();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(onResize);
    const observed =
      isSection || isInline
        ? hostRef.current
        : hostRef.current && hostRef.current.parentElement;
    if (observed) ro.observe(observed);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [buildGrid, draw, isSection, isInline]);

  if (isInline) {
    return (
      <div
        ref={hostRef}
        className={className}
        style={{ width: "100%", height, lineHeight: 0, ...style }}
        aria-hidden="true"
      >
        <canvas ref={canvasRef} style={{ display: "block" }} />
      </div>
    );
  }

  if (isSection) {
    return (
      <div
        ref={hostRef}
        className={className}
        style={{ width: "100%", height: scrollHeight, ...style }}
        aria-hidden="true"
      >
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex,
            overflow: "hidden",
          }}
        >
          <canvas ref={canvasRef} style={{ display: "block" }} />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={hostRef}
      className={className}
      style={
        isViewport
          ? {
              position: "fixed",
              inset: 0,
              pointerEvents: "none",
              zIndex,
              ...style,
            }
          : { position: "absolute", inset: 0, pointerEvents: "none", ...style }
      }
      aria-hidden="true"
    >
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
};

export default PixelScrollTransition;
