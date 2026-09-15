import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import PixelScrollTransition from "../Components/PixelScrollTransition";

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
      <Header>
        <HeaderInner>
          <HeadingBlock>
            <Heading>
            <span
              style={{
                fontFamily: "'Kaisei Decol', serif",
                fontStyle: "italic",
                fontSize: "24px",
                lineHeight: "1",
              }}
            >
              Selected
            </span>
            <div>
              Graphic
              <span style={{ fontFamily: "'Kaisei Decol', serif", fontStyle: "italic" }}>
                (s)
              </span>
            </div>
            </Heading>
            <Lede>
              Posters, key visuals and type studies — the visual work that lives
              outside a case study.
            </Lede>
          </HeadingBlock>
        </HeaderInner>
      </Header>

      <TransitionGap $dark />

      {/* 跟 Work 頁同一組轉場參數，深色 hero 擦成淺色內容 */}
      <PixelScrollTransition
        mode="inline"
        height="70vh"
        colorA="#2A3133"
        colorB="#f2f2f2"
        direction="bottom-top"
        pattern="random"
        patternIntensity={0.45}
        easing="linear"
        pixelSize={28}
        endAt={1}
        accentShare={0.14}
        accentColors={["#2A96B7", "#D8984E", "#59656C"]}
      />

      <TransitionGap />

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

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 85vh;
  background-color: #2a3133;
  position: relative;

  @media (max-width: 820px) {
    min-height: 70vh;
  }
`;

/* 跟 Work 的 hero 一樣：上下留白刻意不對稱，把整組內容往下推，
   免得被頂端的固定導覽列蓋住之後看起來偏高。 */
const HeaderInner = styled.div`
  width: 100%;
  padding: 32vh 0 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;

  @media (max-width: 648px) {
    align-items: flex-start;
    padding: 26vh 24px 16vh;
  }
`;

/* 標題與說明要對同一條左邊界 —— 兩個各自置中的話，說明會因為比較短
   而往右縮，看起來像沒對齊。整組置中，組內靠左。 */
const HeadingBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Heading = styled.div`
  color: #f2f2f2;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 9rem;
  line-height: 1;
  font-weight: 700;
  display: flex;
  flex-direction: column;

  @media (max-width: 1440px) {
    font-size: 8rem;
  }
  @media (max-width: 772px) {
    font-size: 7rem;
  }
  @media (max-width: 648px) {
    font-size: 5rem;
  }
  @media (max-width: 480px) {
    font-size: 64px;
  }
`;

const Lede = styled.p`
  color: #a9b1b4;
  font-size: 16px;
  line-height: 1.7;
  max-width: 34em;
  margin: 24px 0 0;

  @media (max-width: 648px) {
    margin-top: 16px;
  }
`;

const TransitionGap = styled.div`
  width: 100%;
  height: 12vh;
  background-color: ${({ $dark }) => ($dark ? "#2a3133" : "#f2f2f2")};

  @media (max-width: 820px) {
    height: 6vh;
  }
`;

/* 直排瀑布流：作品的比例不一致，固定的方格會把直式的圖裁掉或留一堆空白。
   columns 讓每一欄各自堆疊，圖片維持原比例。 */
const Grid = styled.div`
  width: 100%;
  max-width: 1280px;
  /* 沒有全站的 border-box reset，左右 padding 會加在 max-width 之外 */
  box-sizing: border-box;
  padding: 0 40px 120px;
  columns: 3;
  column-gap: 24px;

  @media (max-width: 1024px) {
    columns: 2;
  }
  @media (max-width: 620px) {
    columns: 1;
    padding: 0 24px 80px;
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
