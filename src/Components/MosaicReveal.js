import React, { useMemo } from "react";
import styled, { css } from "styled-components";

/* 馬賽克溶解：一層方格蓋在內容上，各自依延遲退場，露出底下的東西。

   門檻圖原本是 home.js 裡 FlipCard 的區域變數，strip 也要用同一種散開方式，
   所以把產生器搬到這裡。兩邊共用的是「哪一格什麼時候動」這件事 —— 方塊本身
   的長相各自決定：FlipCard 的格子在收起來時是常駐可見的卡片正面，這裡的
   格子只在揭開前存在。 */

const COLS = 12;
const ROWS = 8;
export const SPREAD = 420; // 最早與最晚的格子相差多久（ms）
const ACCENT_SHARE = 0.14; // 有多少比例的格子會先閃一下再消失

/* 固定種子的亂數：每一塊的圖樣不同，但重新 render 不會變 */
export const cellPattern = (seed, cols = COLS, rows = ROWS) => {
  let x = seed;
  const rand = () => {
    x = (x * 1664525 + 1013904223) % 4294967296;
    return x / 4294967296;
  };
  return Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    /* 由左上往右下擴散，再加一點亂數讓邊界不是一條直線 */
    const sweep = (col / (cols - 1)) * 0.5 + (row / (rows - 1)) * 0.5;
    return {
      t: Math.min(1, sweep * 0.65 + rand() * 0.35),
      accent: rand() < ACCENT_SHARE,
    };
  });
};

/* 站上像素轉場用的同一組 accent 色，波前才跟頁面其他地方是同一種語言 */
const ACCENTS = ["#2A96B7", "#F7883D", "#59656C", "#D8984E"];

/* open 轉 true 之後這一層就退場。父層要有 position（這裡是 absolute 疊上去）。 */
const MosaicReveal = ({ seed, open, cover = "#f2f2f2" }) => {
  const cells = useMemo(() => cellPattern(seed), [seed]);

  return (
    <Cells aria-hidden="true">
      {cells.map((c, i) => (
        <Cell
          key={i}
          $open={open}
          $accent={c.accent}
          $cover={cover}
          $accentColor={ACCENTS[i % ACCENTS.length]}
          style={{
            /* 兩個延遲對應 transition 裡的 opacity 與 background-color：
               accent 的格子先變色、再晚 120ms 才開始淡出，那一拍就是波前。
               不是 accent 的格子沒有變色這一段，兩個延遲同值。 */
            transitionDelay: `${c.t * SPREAD + (c.accent ? 120 : 0)}ms, ${
              c.t * SPREAD
            }ms`,
          }}
        />
      ))}
    </Cells>
  );
};

const Cells = styled.span`
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(${COLS}, 1fr);
  grid-template-rows: repeat(${ROWS}, 1fr);
  pointer-events: none;
`;

const Cell = styled.span`
  background-color: ${({ $cover }) => $cover};
  /* 相鄰格子的邊界會落在小數像素上，抗鋸齒之後會透出底下的圖、整片看起來
     像畫了格線。往外描 1px 同色把接縫蓋掉（超出的部分由 Frame 的
     overflow: hidden 裁掉）。 */
  box-shadow: 0 0 0 1px ${({ $cover }) => $cover};
  opacity: 1;
  transition:
    opacity 0.16s linear,
    background-color 0.12s linear;

  ${({ $open, $accent, $accentColor }) =>
    $open &&
    css`
      opacity: 0;
      ${$accent &&
      css`
        background-color: ${$accentColor};
        box-shadow: 0 0 0 1px ${$accentColor};
      `}
    `}

  /* 前庭敏感的人不要一道掃過去的波：整層一起退，時間也短一點 */
  @media (prefers-reduced-motion: reduce) {
    transition-delay: 0ms !important;
    transition-duration: 0.25s;
  }
`;

export default MosaicReveal;
