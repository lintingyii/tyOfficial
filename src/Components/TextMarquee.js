import React from "react";
import Marquee from "react-fast-marquee";
import styled, { keyframes, css } from "styled-components";

/* 跑馬燈。參考 Motto®（wearemotto.com）的做法：不做成一條彩色橫幅，
   而是讓一行超大的字直接坐在頁面底色上，字與字之間夾一個會自轉的記號當節奏。

   借的是結構，不是語彙 —— 字體沿用 hero 那句「Creativity is the greatest
   Rebellion」的襯線，記號用 banner-deco 上那組橘色火花，顏色用內文色，
   所以它讀起來仍然是這個站自己的東西。 */

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

/* 四角火花，形狀取自 banner-deco 上的那組裝飾。 */
const Spark = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
    <path
      fill="currentColor"
      d="M50 0c3 26.5 23.5 47 50 50-26.5 3-47 23.5-50 50-3-26.5-23.5-47-50-50C26.5 47 47 26.5 50 0z"
    />
  </svg>
);

const reduceMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* 句子裡被挑出來的那個字，換成 Luxurious Script，維持小寫。

   字距必須是 0：小寫是連筆的，一拉開字距筆畫就斷了。

   字級的倍率是「看起來一樣大」而不是「數字一樣大」：書寫體的墨色高度遠小於
   字級，1em 直接排會比旁邊的襯線矮一截。小寫的墨色又比大寫更矮，所以這裡的
   倍率比全大寫版本高。 */
const Accent = styled.span`
  font-family: "Luxurious Script", cursive;
  font-size: 1.7em;
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
  font-size: clamp(24px, 4.5vw, 84px);
  line-height: 1.95;
  letter-spacing: 0.005em;
  color: #2a3133;

  svg {
    width: 0.52em;
    height: 0.52em;
    margin: 0 0.3em;
    vertical-align: -0.04em;
    color: #d8984e;
    animation: ${spin} 9s linear infinite;
    ${reduceMotion}
  }
`;

/* 色塊拿掉之後，上下留白就是它跟前後區塊的分隔 —— 這段 padding 不是裝飾，
   是原本那條橫幅在做的事。上緣可以另外加大（work 頁接在作品列表後面，
   需要比首頁更多的距離），所以用 prop 而不是外層覆寫 padding 簡寫。 */
const Block = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  padding: ${({ $gapTop }) => $gapTop || "6vh"} 0 6vh;

  @media (max-width: 820px) {
    padding: ${({ $gapTopSm }) => $gapTopSm || "5vh"} 0 5vh;
  }
`;

const TextMarquee = ({
  text,
  accent,
  speed = 80,
  gapTop,
  gapTopSm,
  className,
}) => (
  <Block className={className} $gapTop={gapTop} $gapTopSm={gapTopSm}>
    <Marquee speed={speed} autoFill gradient={false}>
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
    </Marquee>
  </Block>
);

export default TextMarquee;
