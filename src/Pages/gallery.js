import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

/* 視覺作品的陳列頁。跟 Work 的差別是這裡不談流程、不談結果 —— 一張圖就是
   一件作品，所以版面上只有圖：沒有標題、沒有 hover 狀態，點下去就是看大圖。

   ⚠️ 要新增作品就只改下面這個陣列：檔案放進 public/gallery/，src 寫
   "/gallery/檔名"。順序就是畫面上的順序（新的放前面）。

   title 不會顯示在畫面上，它是給 alt 與 aria-label 用的 —— 讀螢幕的人要靠
   它才知道這是什麼，所以還是要填。

   ratio（寬 ÷ 高）是必填，不是可有可無的最佳化 —— 版面就是靠它排的：
   同一列的每張卡片等高，寬度按各自的 ratio 分配。填錯會讓那一列的高度跟
   實際內容對不上。1 是正方形。
   video: true 的項目會用 <video> 靜音循環播放。 */
const ITEMS = [
  {
    src: "/gallery/tulip.mp4",
    title: "Tulip",
    ratio: 1, // 原始尺寸 2160 × 2160
    video: true,
  },
];

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Gallery = () => {
  const [lightbox, setLightbox] = useState(-1);
  /* 在 render 當下讀，不是在模組載入時 —— 使用者中途改系統設定也會跟上 */
  const reduce = prefersReduced();

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
        <Title>
          <Star aria-hidden="true" />
          Gallery
        </Title>
      </Masthead>

      <Grid>
        {ITEMS.map((item, i) => (
          <Tile
            key={item.src}
            type="button"
            onClick={() => setLightbox(i)}
            aria-label={`Open ${item.title}`}
            /* --r 同時餵給 flex-grow、flex-basis 與 aspect-ratio，
               一個值決定這張卡片在列裡佔多寬 */
            style={{ "--r": item.ratio }}
          >
            <Frame>
              {item.video ? (
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  autoPlay={!reduce}
                  controls={reduce}
                  preload="metadata"
                />
              ) : (
                <img src={item.src} alt={item.title} loading="lazy" />
              )}
            </Frame>
          </Tile>
        ))}
      </Grid>

      {lightbox >= 0 ? (
        <Lightbox onClick={close} role="dialog" aria-modal="true">
          {ITEMS[lightbox].video ? (
            <LightboxMedia
              as="video"
              src={ITEMS[lightbox].src}
              muted
              loop
              playsInline
              autoPlay
              controls
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <LightboxMedia
              src={ITEMS[lightbox].src}
              alt={ITEMS[lightbox].title}
              onClick={(e) => e.stopPropagation()}
            />
          )}
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
/* footer 的裝飾是三顆手繪星星，不是一顆 —— 跑馬燈用的那顆只是其中之一。
   title-stars.svg 就是從 footer-deco.svg 裁出那三顆、收成緊邊界的版本。
   顏色一樣用遮罩處理：原檔把 #DBDBDB 畫死在裡面，取形狀、顏色交給 CSS。
   比例 657:616 幾乎是正方形，所以寬高給同值不會變形。 */
const Star = styled.span`
  flex: none;
  width: 1em;
  height: 0.94em;
  background-color: #2a96b7;
  -webkit-mask: url("/title-stars.svg") no-repeat center / contain;
  mask: url("/title-stars.svg") no-repeat center / contain;
`;

const Title = styled.h1`
  /* 星星在字的左邊、與字垂直置中 —— flex 才對得準，inline 的 vertical-align
     是對基線，字有降部（y）的時候會看起來偏低。 */
  display: flex;
  align-items: center;
  gap: 0.28em;
  margin: 0;
  color: #2a3133;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: clamp(36px, 3.6vw, 56px);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.01em;
`;

/* 齊行版面（每一列固定高度、卡片等比縮放）。

   做法是把 aspect ratio 同時餵給 flex-grow 和 flex-basis：一列裡的每張卡片
   都以同一個係數 k 被撐大，寬度變成 ratio × 基準高 × k，而高度 = 寬 ÷ ratio
   = 基準高 × k —— 對每張都一樣。所以同一列自動等高、整列剛好填滿寬度，
   列與列之間的高度則隨內容微幅浮動。

   ::after 是必要的：沒有它的話，最後一列剩下的空間會被那幾張卡片吸收，
   一兩張圖就被拉成整個版面寬。給它一個大到不合理的 flex-grow，
   剩餘空間全部進到這個看不見的元素裡，最後一列就維持基準高。 */
const Grid = styled.div`
  width: 80%; /* 與 Masthead、Work 的內容欄同寬，三者左右邊界對齊 */
  box-sizing: border-box;
  padding: 56px 0 120px;

  --row-h: 320px;
  --gap: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);

  &::after {
    content: "";
    flex-grow: 1000000;
  }

  @media (max-width: 1024px) {
    --row-h: 260px;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 620px) {
    --row-h: 200px;
    --gap: 16px;
    padding: 40px 0 80px;
  }
`;

const Frame = styled.span`
  display: block;
  width: 100%;
  aspect-ratio: var(--r);
  overflow: hidden;
  border-radius: 8px;
  background-color: #e6e6e6; /* 媒體載入前的底色，免得整片空白 */

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Tile = styled.button`
  /* 寬度由 ratio 決定：基準寬 = 基準高 × ratio，再讓同一列一起長到填滿。
     min-width: 0 讓很窄的卡片可以被壓縮，不會把列撐出容器。 */
  flex: var(--r) 1 calc(var(--row-h) * var(--r));
  min-width: 0;
  display: block;
  padding: 0;
  border: 0;
  background: none;
  text-align: left;
  cursor: pointer;

  /* 刻意沒有 hover 狀態：這一頁只有圖，任何滑過的變化都是在圖上面再加一層
     訊息。鍵盤焦點還是要看得見 —— 那是可及性，不是裝飾。 */
  &:focus-visible {
    outline: 2px solid #2a96b7;
    outline-offset: 4px;
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

const LightboxMedia = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
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
