import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";

/* 跑馬燈。參考 Motto®（wearemotto.com）的做法：不做成一條彩色橫幅，
   而是讓字直接坐在頁面底色上，兩行反向疊起來，字與字之間夾一個會自轉的記號。

   借的是結構，不是語彙 —— 字體沿用 hero 那句「Creativity is the greatest
   Rebellion」的襯線，記號用 banner-deco 上那組橘色火花，顏色用內文色。

   捲動時會加速、捲動方向翻轉時跑馬燈也跟著翻 —— 這是 Motto 的招牌手感。
   react-fast-marquee 做不到（它是固定時長的 CSS 動畫，速度與方向都不能中途改），
   所以這裡自己用 rAF 推 transform。 */

/* ---- 共用的捲動狀態 ----
   兩行各自跑自己的 rAF，但捲動速度只需要算一次，所以放在模組層。 */
let scrollSign = 1; // 最後一次捲動的方向：1 往下、-1 往上
let boostPeak = 0; // 最近一次捲動當下的加成（px/s）
let boostTime = 0; // 那一刻的時間戳
let lastY = 0;
let subscribers = 0;

const BOOST_PER_PX = 3; // 一次捲動事件每移動 1px 增加的速度
const BOOST_MAX = 400; // 加成上限：基礎速度 80，所以最快約 6 倍
const BOOST_HALF_LIFE = 180; // 毫秒：加成衰減到一半所需的時間
/* 字級只在這裡定義一次：Unit 用它排字，Block 也要用同一個值當 em 基準，
   SecondRow 的負 margin 才會跟著字級縮放。兩邊寫死同一串很容易改到只剩一邊。 */
const FLUID_SIZE = "clamp(36px, 4.5vw, 84px)";

const BASE_SPIN = 40; // 火花的基礎轉速（度/秒）＝ 原本 CSS 動畫的 9 秒一圈

/* 用「峰值 + 時間戳」而不是每幀去乘衰減係數：兩行各自跑自己的 rAF，
   每幀乘一次的話會被衰減兩次，而且哪一行負責衰減也會變成隱性相依。
   這樣算是無狀態的，誰問都拿到同一個值。 */
const boostAt = (now) =>
  boostPeak <= 0
    ? 0
    : boostPeak * Math.pow(0.5, (now - boostTime) / BOOST_HALF_LIFE);

const handleScroll = () => {
  const y = window.scrollY;
  const dy = y - lastY;
  lastY = y;
  if (dy === 0) return;
  const now = performance.now();
  scrollSign = dy > 0 ? 1 : -1;
  boostPeak = Math.min(BOOST_MAX, boostAt(now) + Math.abs(dy) * BOOST_PER_PX);
  boostTime = now;
};

const subscribeScroll = () => {
  if (subscribers === 0) {
    lastY = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
  }
  subscribers += 1;
  return () => {
    subscribers -= 1;
    if (subscribers === 0) window.removeEventListener("scroll", handleScroll);
  };
};

/* 跑馬燈的星星。用 <img> 而不是內嵌 SVG：這個圖形的路徑資料有 10.8 KB，
   而它在兩行跑馬燈裡會出現十幾份、還每一幀都在轉 —— 內嵌等於讓瀏覽器
   每幀重畫十幾條複雜路徑。當成圖片只會光柵化一次，旋轉交給合成器。
   顏色（#D8984E）已經畫在檔案裡。 */
const Spark = ({ className }) => (
  <img className={className} src="/marquee-star.svg" alt="" aria-hidden="true" />
);

/* 句子裡被挑出來的那個字，換成 Luxurious Script，維持小寫。

   字距必須是 0：小寫是連筆的，一拉開字距筆畫就斷了。

   字級的倍率是「看起來一樣大」而不是「數字一樣大」：書寫體的墨色高度遠小於
   字級，1em 直接排會比旁邊的襯線矮一截。1.55em 剛好讓它的上緣對齊襯線的
   大寫高度 —— 比襯線大一點點是靠字體本身的個性，不是靠字級撐出來的。 */
/* 顏色跟著整行走，不另外指定 —— 這個字已經靠字體與字級在做區分了，
   再加一個顏色是第三個訊號，重複標記反而像沒決定好。 */
const Accent = styled.span`
  font-family: "Luxurious Script", cursive;
  font-size: 1.55em;
  text-transform: none;
  letter-spacing: 0;
  line-height: 1;
  padding: 0 0.06em; /* 書寫體的起筆與收筆會往外伸，不留一點會黏到前後的字 */
`;

const Unit = styled.span`
  /* 用 inline-block 而不是 flex：一行裡有兩種字級，inline 佈局才會按基線對齊。
     flex 只能對齊盒子的上下緣，書寫體會浮起來。 */
  display: inline-block;
  white-space: nowrap;

  /* 與 hero 引言同一支襯線，維持原本的大小寫 —— 句子照常讀，
     被挑出來的那個字靠字體與字級做區分，不靠全大寫。 */
  font-family: serif;
  font-size: ${FLUID_SIZE};

  /* 行高由 Accent 決定：行框必須裝得下比較高的那個字，
     否則 Viewport 的 overflow: hidden 會把筆畫切掉。 */
  line-height: 1.95;
  letter-spacing: 0.005em;

  /* 句子用灰藍而不是內文墨色。跑馬燈是氛圍，下面的「Voice(s) of Trust」
     才是內容 —— 兩者同色的話，字級兩倍又疊兩行的跑馬燈會壓過它要引導你
     去看的標題，階層是反的。這支灰偏藍，跟 #2A96B7 同一個溫度。
     對比 3.54:1 —— 大字的門檻是 3:1，再淡下去就不合格了，這裡已經是底線。 */
  color: #7a8184;

  img {
    /* 28 × 26 的非正方形，寬高照原始比例給，等比才不會被壓扁 */
    width: 0.56em;
    height: 0.52em;
    margin: 0 0.3em;
    vertical-align: -0.04em;
    /* 轉動角度由 rAF 寫進 --spark-rot，跟著跑馬燈一起加速、一起翻面。
       原本是固定 9s 一圈的 CSS 動畫，捲動時整行在衝、只有它慢慢轉，
       看起來是兩套不相干的動作。 */
    transform: rotate(var(--spark-rot, 0deg));
  }
`;

const Viewport = styled.div`
  overflow: hidden;
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  will-change: transform;
`;

/* 兩行之間要靠負 margin 拉近，不能只靠行高。

   行高被 Accent 綁死了，所以每一行的盒子上下各多出一截空氣。負 margin 把
   第二行往上拉，讓「墨色之間」的距離回到正常的行距 —— 兩行各自裁切自己的
   內容，重疊不會互相切到。 */
const SecondRow = styled.div`
  margin-top: -0.62em;
`;

/* 色塊拿掉之後，上下留白就是它跟前後區塊的分隔 —— 這段 padding 不是裝飾，
   是原本那條橫幅在做的事。上緣可以另外加大（work 頁接在作品列表後面，
   需要比首頁更多的距離）。 */
const Block = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  /* em 的基準要跟字一樣，SecondRow 的負 margin 才會跟著字級縮放 */
  font-size: ${FLUID_SIZE};
  padding: ${({ $gapTop }) => $gapTop || "6vh"} 0 6vh;

  @media (max-width: 820px) {
    padding: ${({ $gapTopSm }) => $gapTopSm || "5vh"} 0 5vh;
  }
`;

const Line = ({ text, accent }) => (
  <Unit>
    {text}
    {accent ? (
      <>
        {" "}
        <Accent>{accent}</Accent>
      </>
    ) : null}
    <Spark />
  </Unit>
);

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Row = ({ text, accent, dir, speed }) => {
  const viewRef = useRef(null);
  const trackRef = useRef(null);
  const [copies, setCopies] = useState(2);

  /* 要鋪幾份才填得滿：量完一份的寬度再決定。少一份就會露出接縫。 */
  useLayoutEffect(() => {
    const view = viewRef.current;
    const track = trackRef.current;
    if (!view || !track) return undefined;

    const measure = () => {
      const unit = track.firstElementChild;
      if (!unit) return;
      const w = unit.getBoundingClientRect().width;
      if (!w) return;
      setCopies(Math.max(2, Math.ceil(view.getBoundingClientRect().width / w) + 1));
    };

    measure();
    /* 字體載入完寬度會變 —— 沒有這一步，接縫會在 webfont 換上去之後跑出來 */
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(view);
    return () => ro.disconnect();
  }, [text, accent]);

  useEffect(() => {
    const view = viewRef.current;
    const track = trackRef.current;
    if (!view || !track) return undefined;

    if (prefersReduced()) {
      track.style.transform = "translate3d(0,0,0)";
      return undefined;
    }

    const unsubscribe = subscribeScroll();

    let raf = 0;
    let last = 0;
    let offset = 0;
    let rot = 0;
    let visible = true;

    /* 捲出畫面就不要再推 —— 看不到的東西沒必要每幀重算 */
    const io =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(
            ([e]) => {
              visible = e.isIntersecting;
            },
            { rootMargin: "120px" },
          );
    if (io) io.observe(view);

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      const dt = last ? Math.min(now - last, 50) : 16;
      last = now;

      if (!visible) return;

      const unit = track.firstElementChild;
      const unitW = unit ? unit.getBoundingClientRect().width : 0;
      if (!unitW) return;

      /* 方向 = 這一行的基礎方向 × 捲動方向。往上捲的時候整組翻面。 */
      const dirSign = dir * scrollSign;
      /* 同一個倍率同時餵給位移與轉動，火花的轉速就永遠等於這一行的速度比例 */
      const factor = (speed + boostAt(now)) / speed;

      const v = speed * factor * dirSign;
      offset = (((offset + (v * dt) / 1000) % unitW) + unitW) % unitW;
      track.style.transform = `translate3d(${-offset}px,0,0)`;

      rot = (rot + (BASE_SPIN * factor * dirSign * dt) / 1000) % 360;
      track.style.setProperty("--spark-rot", `${rot}deg`);
    };

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      if (io) io.disconnect();
      unsubscribe();
    };
  }, [dir, speed]);

  return (
    <Viewport ref={viewRef}>
      <Track ref={trackRef}>
        {Array.from({ length: copies }, (_, i) => (
          <Line key={i} text={text} accent={accent} />
        ))}
      </Track>
    </Viewport>
  );
};

/* 兩行反向（上行往右、下行往左），照 Motto 的排法。

   這不只是裝飾：色塊拿掉之後，單獨一行的字沒有足夠的量體去當區塊之間的
   分隔，讀起來像一行漂在灰底上的孤字。兩行疊起來才重得起來。 */
const TextMarquee = ({
  text,
  accent,
  speed = 80,
  gapTop,
  gapTopSm,
  className,
}) => (
  <Block className={className} $gapTop={gapTop} $gapTopSm={gapTopSm}>
    <Row text={text} accent={accent} speed={speed} dir={-1} />
    <SecondRow>
      <Row text={text} accent={accent} speed={speed} dir={1} />
    </SecondRow>
  </Block>
);

export default TextMarquee;
