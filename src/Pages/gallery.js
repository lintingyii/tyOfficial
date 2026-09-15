import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

/* 視覺作品的陳列頁。跟 Work 的差別是這裡不談流程、不談結果 —— 一張圖就是
   一件作品，所以版面上只有圖，說明退到 hover 與燈箱裡。

   ⚠️ 要新增作品就只改下面這個陣列：檔案放進 public/gallery/，src 寫
   "/gallery/檔名"。順序就是畫面上的順序（新的放前面）。
   ratio 是「寬 / 高」，用來在圖片載入前先把格子撐開，避免捲動時整排跳動 ——
   照著原圖的比例填，1 就是正方形。 */
const ITEMS = [];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(-1);

  const close = useCallback(() => setLightbox(-1), []);
  const step = useCallback(
    (d) => setLightbox((i) => (i < 0 ? i : (i + d + ITEMS.length) % ITEMS.length)),
    [],
  );

  /* 燈箱開著的時候鎖住背景捲動，並接管方向鍵與 Esc */
  useEffect(() => {
    if (lightbox < 0) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, step]);

  return (
    <Div>
      {/* 開場刻意不跟 Work 一樣。深色 hero ＋ 像素轉場是首頁與 Work 的規格，
          那是「這是一個大段落」的訊號；Gallery 是看圖的地方，同一套開場會讓
          兩者在階層上變成平輩，而且要捲過將近兩個畫面才看得到第一張圖。
          這裡跟 About 同一個層級：淺底直接進內容，標題靠左對齊網格的左邊界 ——
          是一份索引的樣子，不是一張海報。 */}
      <Masthead>
        <Title>Gallery</Title>
        <Lede>
          Posters, key visuals and type studies — the visual work that lives
          outside a case study.
        </Lede>
      </Masthead>

      <Grid>
        {ITEMS.map((item, i) => (
          <Tile
            key={item.src}
            type="button"
            onClick={() => setLightbox(i)}
            aria-label={`Open ${item.title}`}
          >
            <Frame style={{ aspectRatio: item.ratio || 1 }}>
              <img src={item.src} alt={item.title} loading="lazy" />
            </Frame>
            <Caption>
              <strong>{item.title}</strong>
              {item.year ? <span>{item.year}</span> : null}
            </Caption>
          </Tile>
        ))}
      </Grid>

      {lightbox >= 0 ? (
        <Lightbox onClick={close} role="dialog" aria-modal="true">
          <LightboxImage
            src={ITEMS[lightbox].src}
            alt={ITEMS[lightbox].title}
            onClick={(e) => e.stopPropagation()}
          />
          <LightboxCaption>
            {ITEMS[lightbox].title}
            {ITEMS[lightbox].year ? ` — ${ITEMS[lightbox].year}` : ""}
          </LightboxCaption>
          <Close type="button" onClick={close} aria-label="Close">
            ×
          </Close>
        </Lightbox>
      ) : null}
    </Div>
  );
};

const Div = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

/* 跟 About 同一組上留白 —— 這兩頁是同一個層級，開場的節奏要一致。
   480px 以下不留：導覽列在手機上是浮在畫面底部的，頂端沒有東西要閃。 */
const Masthead = styled.header`
  /* 左右邊界跟 Work 同一條規則：內容欄固定佔視窗 80%（800px 以下 90%），
     不設 max-width —— 留白跟著視窗縮放，而不是在寬螢幕上定住。 */
  width: 80%;
  box-sizing: border-box;
  /* vh 要有下限：導覽列高 58px，捲動收合後還會再往下讓出 16px，
     螢幕矮的時候純 vh 會讓標題鑽到膠囊底下。 */
  padding: max(13vh, 122px) 0 0;

  @media (max-width: 1024px) {
    padding-top: max(8vh, 114px);
  }
  @media (max-width: 912px) {
    padding-top: max(6vh, 106px);
  }
  @media (max-width: 800px) {
    width: 90%;
  }
  /* 手機的導覽列浮在畫面底部，頂端不必讓位 */
  @media (max-width: 480px) {
    padding-top: 32px;
  }
`;

/* Work 的標題是 9rem 置中，像一張海報。這裡刻意小一截又靠左，
   讓它讀起來是網格的抬頭而不是另一個開場。 */
const Title = styled.h1`
  margin: 0;
  color: #2a3133;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: clamp(40px, 4.4vw, 68px);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.01em;
`;

const Lede = styled.p`
  color: #59656c;
  font-size: 16px;
  line-height: 1.7;
  max-width: 34em;
  margin: 16px 0 0;
`;

/* 直排瀑布流：作品的比例不一致，固定的方格會把直式的圖裁掉或留一堆空白。
   columns 讓每一欄各自堆疊，圖片維持原比例。 */
const Grid = styled.div`
  width: 80%; /* 與 Masthead、Work 的內容欄同寬，三者左右邊界對齊 */
  box-sizing: border-box;
  padding: 56px 0 120px;
  columns: 3;
  column-gap: 24px;

  @media (max-width: 1024px) {
    columns: 2;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 620px) {
    columns: 1;
    padding: 40px 0 80px;
  }
`;

const Frame = styled.span`
  display: block;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  background-color: #e6e6e6; /* 圖片載入前的底色，免得整片空白 */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }
`;

const Caption = styled.span`
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: 10px;
  font-size: 14px;
  color: #59656c;
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 0.25s ease, transform 0.25s ease;

  strong {
    font-weight: 600;
    color: #2a3133;
  }

  /* 沒有 hover 的裝置看不到滑過的狀態，說明就直接留著 */
  @media (hover: none), (pointer: coarse) {
    opacity: 1;
    transform: none;
  }
`;

const Tile = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  text-align: left;
  cursor: pointer;
  /* break-inside 是 columns 版面的必要條件，少了它一張圖會被拆到兩欄 */
  break-inside: avoid;
  margin-bottom: 24px;

  @media (hover: hover) and (pointer: fine) {
    &:hover ${Frame} img {
      transform: scale(1.03);
    }
    &:hover ${Caption} {
      opacity: 1;
      transform: none;
    }
  }

  &:focus-visible {
    outline: 2px solid #2a96b7;
    outline-offset: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    ${Frame} img,
    ${Caption} {
      transition: none;
    }
  }
`;

const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background-color: rgba(42, 49, 51, 0.94);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 6vh 5vw;
`;

const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
`;

const LightboxCaption = styled.p`
  margin: 0;
  color: #d9dedf;
  font-size: 14px;
`;

const Close = styled.button`
  position: absolute;
  top: 24px;
  right: 28px;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 50%;
  background: none;
  color: #f2f2f2;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;

  &:hover {
    background-color: rgba(242, 242, 242, 0.12);
  }
`;

export default Gallery;
