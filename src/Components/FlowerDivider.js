import React from "react";
import styled, { keyframes } from "styled-components";

/* 三朵會轉的花，用來分隔首頁的段落。原本是直接寫在 home.js 裡的一段 div，
   同一條 path 貼了三次；要在第二個地方用就會變成貼六次，所以抽出來 ——
   跟 About 的波浪抽成 WaveDivider 是同一個理由。

   中間那朵實心、兩側描邊，是原本就定好的節奏，不是隨手挑的。 */

const PETALS =
  "M12 2.5c4 0 1.7 6.2 1.7 6.2s3.7-5.4 6-2.5-3.7 5.3-3.7 5.3 6.5-.6 5.6 3c-.8 3.7-6.5.4-6.5.4s4.7 4.7 1.2 6.4c-3.6 1.6-4.3-4.9-4.3-4.9s-.8 6.5-4.3 4.9c-3.4-1.7 1.2-6.4 1.2-6.4s-5.7 3.7-6.5-.4c-1-4 5.6-3 5.6-3s-6-2-3.7-5.3c2.2-3.3 5.9 2.5 5.9 2.5S8 2.5 12 2.5Z";

const ACCENT = "#2A96B7";

/* 純裝飾，沒有任何內容 —— aria-hidden 讓讀螢幕的人不必聽三個沒有名字的圖形 */
const FlowerDivider = () => (
  <Divider aria-hidden="true">
    <Flower viewBox="0 0 24 24">
      <path d={PETALS} />
    </Flower>
    <Flower viewBox="0 0 24 24" $solid>
      <path d={PETALS} />
    </Flower>
    <Flower viewBox="0 0 24 24">
      <path d={PETALS} />
    </Flower>
  </Divider>
);

const Divider = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  /* 壓在像素轉場那層之上，跟原本寫在 style 裡的值一樣 */
  z-index: 999;
  padding: 4rem;
  box-sizing: border-box;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Flower = styled.svg`
  width: 60px;
  height: 60px;
  fill: ${({ $solid }) => ($solid ? ACCENT : "none")};
  stroke: ${ACCENT};
  stroke-width: 0.6;
  animation: ${rotate} 8s linear infinite;

  /* 一直轉的東西對前庭敏感的人是負擔，而這裡的訊息是「段落換了」，
     靜止的三朵花一樣說得完 */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export default FlowerDivider;
