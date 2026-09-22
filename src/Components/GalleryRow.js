import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

/* Gallery 的分排數學與卡片，抽出來給 Gallery 頁與首頁的入口 strip 共用。

   原本這些常數寫死在 gallery.js 裡，首頁要排出同一種節奏就得抄一份 ——
   而 ROW_RATIO 與 GAP_RATIO 是一組互相牽動的值（gap 的係數變了，滿排的
   ratio 預算也要跟著變），抄一份等於埋一個會分岔的地雷。共用之後常數
   只剩這一處。 */

/* 一排固定三張。交給 flex-wrap 自己決定一排放幾張的話，排法會隨每張圖的
   比例和視窗寬度浮動；要的是穩定的三欄節奏，所以在 render 前就先把清單
   切成每三個一組，由標記決定換行，不是由寬度決定。 */
export const ROW_SIZE = 3;

/* 一排的 ratio 預算。Gallery 每一排的總和都是 3.62，那不是巧合而是等高的
   條件：滿排的高度是「可用寬度 ÷ 該排 ratio 總和」，總和一致排與排才等高。

   張數不同的排不能共用同一個數。可用寬度要扣掉 gap，三張的排扣兩條、兩張
   的排只扣一條 —— 兩張的排因此寬了一條 gap，ratio 總和也得按比例加上去，
   高度才會跟三張的排對齊（3.62 → 3.70）。GAP_RATIO 是下面 rowMetrics 裡
   --gap 對 --col-w 的係數，兩者同源。

   視窗寬超過 1440px 後 --gap 會定在 24px 不再跟著長，這個補償就會有誤差，
   不過 2560px 下也只差 1% 左右，看不出來。 */
export const ROW_RATIO = 3.62;
export const GAP_RATIO = 0.0208;
export const rowBudget = (n) =>
  (ROW_RATIO * (1 - GAP_RATIO * (n - 1))) / (1 - GAP_RATIO * 2);

/* 一排要不要把整排寬度分完，看的是 ratio 有沒有湊滿預算，不是湊滿三張：
   張數不足但 ratio 剛好湊滿的排（例如 0.79 + 2.91）也要分完，它的高度才會
   跟別排一樣。三張的排照舊一律分完，就算總和不是 3.62 —— 那種排只是高度
   跟別排不同，不該因此變成靠左排。
   浮點數相加有尾差（1 + 0.6 + 2.02 不會剛好是 3.62），所以比容差不比相等。 */
export const fillsRow = (row) =>
  row.length === ROW_SIZE ||
  Math.abs(
    row.reduce((sum, item) => sum + item.ratio, 0) - rowBudget(row.length)
  ) < 0.02;

/* 換行的兩個條件：這排已經三張了，或下一張標了 startsRow 要自己起一排。
   原本只有前者 —— 但固定每三個切一組會把「這張不要跟前面併排」的指定壓掉，
   而那正是 ratio 湊不進任何一排的圖唯一的去處。順序仍然只由陣列決定。 */
export const chunkRows = (items) =>
  items.reduce((rows, item) => {
    const row = rows[rows.length - 1];
    if (!row || row.length === ROW_SIZE || item.startsRow) rows.push([item]);
    else row.push(item);
    return rows;
  }, []);

/* 排版需要的兩個尺寸，給容器用。容器自己決定內容欄多寬，並把同一個值寫進
   --col-w —— CSS 沒辦法用百分比寬去換算高度，所以寬度要再用視窗單位給一次。

   窄畫面是整個版面等比縮小：gap 與 row-h 如果留成固定 px，就只有它們不縮，
   手機上會變成縫隙和未滿排的圖相對過大。改成容器寬度的固定比例後，整個
   版面是同一個倍率的縮放。min() 讓它在更寬的螢幕上停在原尺寸。 */
export const rowMetrics = css`
  --gap: min(24px, calc(var(--col-w) * ${GAP_RATIO}));
  /* 未滿排那排的基準高。滿排的高度是「可用寬度 ÷ 該排 ratio 總和」，未滿排
     沒有這條式子可用（它的寬度不是分配來的），所以這裡照滿排的條件算一次：
     可用寬度扣掉兩條 gap 再除以 ROW_RATIO，未滿的那排就跟滿排等高。 */
  --row-h: calc((var(--col-w) - 2 * var(--gap)) / ${ROW_RATIO});
`;

export const Row = styled.div`
  display: flex;
  gap: var(--gap);
`;

export const Tile = styled.div`
  /* 湊滿預算的排：basis 給 0、grow 給 ratio，整排的可用寬度就按 ratio 分配。
     寬 ∝ ratio 而高 = 寬 ÷ ratio，所以同排自動等高，且剛好填滿整排。

     沒湊滿的排：不能用同一招 —— basis 0 ＋ grow 會把剩下的一兩張拉成整排寬。
     改回用基準高換算寬度（寬 = 基準高 × ratio）並關掉 grow，這排就維持
     基準高、靠左排，不會被撐開。

     min-width: 0 讓很窄的卡片可以被壓縮，不會把排撐出容器。 */
  flex: ${({ $full }) =>
    $full ? "var(--r) 1 0" : "0 0 calc(var(--row-h) * var(--r))"};
  min-width: 0;
`;

export const Frame = styled.span`
  display: block;
  /* 給疊在上面的那層（首頁 strip 的馬賽克）定位用；Gallery 頁沒有疊任何
     東西，這個值對那邊沒有影響。 */
  position: relative;
  width: 100%;
  aspect-ratio: var(--r);
  overflow: hidden;
  border-radius: 8px;
  /* 跟頁面同色，不是更深一階的灰 —— 透明背景的作品（例如去背的 PNG）
     透出來的就是這一層，色差一階就會讓那張圖看起來是一塊獨立的灰卡。
     代價是圖載入前那格跟頁面同色、看不出有東西要出現；縮圖夠小，划算。 */
  background-color: #f2f2f2;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

/* 在 render 當下讀，不是在模組載入時 —— 使用者中途改系統設定也會跟上 */
const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* 一件作品的畫面。影片與圖片的差別只在這裡，兩邊的頁面不必各自判斷一次。
   影片靜音循環，但 prefers-reduced-motion 下不自動播、改成給控制項，
   讓使用者自己決定要不要動。 */
export const Media = ({ item, onReady }) => {
  const reduce = prefersReduced();
  const ref = useRef(null);

  /* 從快取來的檔案，load 事件在 handler 掛上去之前就已經發生過了 ——
     只等事件的話那些情況永遠等不到。掛好之後直接問它現在的狀態。 */
  useEffect(() => {
    const el = ref.current;
    if (!el || !onReady) return;
    const already = item.video
      ? el.readyState >= 2
      : el.complete && el.naturalWidth > 0;
    if (already) onReady(item.src);
  }, [item.src, item.video, onReady]);

  /* 載不出來也要回報 —— 否則蓋在上面的那層會一直留著，
     變成一塊永遠不會揭開的方格。 */
  const ready = () => onReady && onReady(item.src);

  return item.video ? (
    <video
      ref={ref}
      onLoadedData={ready}
      onError={ready}
      src={item.src}
      aria-label={item.title}
      muted
      loop
      playsInline
      autoPlay={!reduce}
      controls={reduce}
      preload="metadata"
    />
  ) : (
    <img
      ref={ref}
      onLoad={ready}
      onError={ready}
      src={item.src}
      alt={item.title}
      loading="lazy"
    />
  );
};
