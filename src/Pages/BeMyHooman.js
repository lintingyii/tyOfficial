import React, { useEffect } from "react";
import styled from "styled-components";

/* 案例頁。沿用站上既有案例（MangoOnTree / MegaBank / PufferVerse）的做法：
   整份設計稿輸出成圖片、寬度 100% 直接鋪滿，RWD 就由「寬度百分比 + 等比高度」
   自然成立，不需要另外寫斷點。

   跟舊的那幾頁差在一點：圖片切成多張而不是一張。
   舊案例是單張 90 MP / 15 MB 的 JPG（mangoontree 3456×26637、megabank
   2734×32768），遠超過 iOS Safari 約 16 MP 的解碼上限 —— 超過的圖會被自動
   降採樣，在 iPhone 上就是糊的，而且一次要載 15 MB。
   切片之後每張都在上限以下，也能靠 loading="lazy" 只載看得到的那幾張。

   這頁是獨立頁：網址在 /be-my-hooman、不掛在 /work 底下，也不套官網的
   導覽列與 footer（見 App.js 的 BARE_ROUTES）。底色與間距都刻意中性，
   實際的視覺由設計稿的圖自己決定。 */

/* 設計稿 1280×17549.68，從 Figma 以 2x 輸出 —— 實際拿到 2390×32768，
   因為 Figma 的單邊上限是 32768px，超過就等比縮，所以有效倍率是 1.87x。
   再切成 8 張 2390×4096（各 9.8 MP）。 */
/* 每一片的原生尺寸。32768 剛好是 8 × 4096，所以每片都一樣高。 */
const SLICE_W = 2390;
const SLICE_H = 4096;

const SLICES = [
  { src: "/be-my-hooman/01.webp", fallback: "/be-my-hooman/01.jpg" },
  { src: "/be-my-hooman/02.webp", fallback: "/be-my-hooman/02.jpg" },
  { src: "/be-my-hooman/03.webp", fallback: "/be-my-hooman/03.jpg" },
  { src: "/be-my-hooman/04.webp", fallback: "/be-my-hooman/04.jpg" },
  { src: "/be-my-hooman/05.webp", fallback: "/be-my-hooman/05.jpg" },
  { src: "/be-my-hooman/06.webp", fallback: "/be-my-hooman/06.jpg" },
  { src: "/be-my-hooman/07.webp", fallback: "/be-my-hooman/07.jpg" },
  { src: "/be-my-hooman/08.webp", fallback: "/be-my-hooman/08.jpg" },
];

const Container = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #fbfbfb; /* 與設計稿左側側欄同色，接縫看不出來 */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

/* 切片之間不能有任何縫：display block 去掉行內元素的基線空隙，
   負 0.5px 的 margin 吃掉小數寬度造成的接縫（縮放後每張的高度不一定是整數）。 */
/* 滿版鋪滿，不鎖 max-width —— 跟站上其他案例頁一致，寬螢幕上左右也不會
   出現色帶（設計稿左側是 #FBFBFB 的側欄、右側是薄荷色，鎖寬的話兩邊
   會露出不同顏色的底，很難挑到一個不突兀的底色）。 */
const Slices = styled.div`
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  img + img {
    margin-top: -0.5px;
  }
`;


/* 回到作品集的路。刻意做得很輕 —— 這頁沒有導覽列，需要一個出口，
   但它不該變成頁面的視覺重點。 */
const BackLink = styled.a`
  font-family: inherit;
  font-size: 0.9rem;
  color: #7a8184;
  text-decoration: none;
  padding: 10px 16px;
  margin: 4rem 0 5rem;
  border-radius: 50px;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #2a3133;
    background-color: #f2f2f2;
  }

  &:focus-visible {
    outline: 2px solid #2a3133;
    outline-offset: 2px;
  }
`;

export const BeMyHooman = () => {
  /* 獨立頁，標題不跟著官網走 */
  useEffect(() => {
    const previous = document.title;
    document.title = "Be my hooman";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <Container>
      <Slices>
        {SLICES.map((slice, i) => (
          <picture key={slice.src}>
            {slice.fallback ? (
              <source srcSet={slice.src} type="image/webp" />
            ) : null}
            <img
              src={slice.fallback || slice.src}
              alt={
                i === 0
                  ? "Be my hooman — case study"
                  : "" /* 只有第一張需要描述，其餘是同一份文件的續頁 */
              }
              /* 尺寸一定要寫出來：lazy 的圖在載入前沒有內在尺寸，
                 沒有 width/height 瀏覽器就不會替它保留高度 —— 整份文件會先
                 塌成只剩第一張的長度，捲到哪裡才長到哪裡，捲軸一路亂跳。
                 有這兩個屬性，瀏覽器會先用 aspect-ratio 把版位撐好。 */
              width={SLICE_W}
              height={SLICE_H}
              /* 第一張要立刻出現，其餘等捲到再載 */
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </picture>
        ))}
      </Slices>

      <BackLink href="/work">← Back to work</BackLink>
    </Container>
  );
};

export default BeMyHooman;
