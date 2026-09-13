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

const SLICES = [
  // 依序放入輸出的切片，例如：
  // { src: "/bemyhooman/01.webp", fallback: "/bemyhooman/01.jpg" },
];

/* 設計稿的畫布寬度。圖片用 max-width 鎖在這個數字，
   超寬螢幕才不會把切片拉伸到超過原生解析度而糊掉。 */
const DESIGN_WIDTH = 1280;

const Container = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #ffffff;
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
const Slices = styled.div`
  width: 100%;
  max-width: ${DESIGN_WIDTH}px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  img + img {
    margin-top: -0.5px;
  }
`;

const Pending = styled.div`
  width: 100%;
  max-width: ${DESIGN_WIDTH}px;
  box-sizing: border-box;
  padding: 18vh 24px;
  text-align: center;
  color: #7a8184;
  font-size: 1rem;
  line-height: 1.7;
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
      {SLICES.length > 0 ? (
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
                /* 第一張要立刻出現，其餘等捲到再載 */
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </picture>
          ))}
        </Slices>
      ) : (
        <Pending>內容準備中。</Pending>
      )}

      <BackLink href="/work">← Back to work</BackLink>
    </Container>
  );
};

export default BeMyHooman;
