import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WaveDivider from "../Components/WaveDivider";

/* 視覺作品的陳列頁。跟 Work 的差別是這裡不談流程、不談結果 —— 一張圖就是
   一件作品，所以版面上只有圖：沒有標題、沒有 hover 狀態，點下去就是看大圖。

   ⚠️ 要新增作品就只改下面這個陣列：檔案放進 public/gallery/，src 寫
   "/gallery/檔名"。順序就是畫面上的順序（新的放前面）。

   title 不會顯示在畫面上，它是給 alt 與 aria-label 用的 —— 讀螢幕的人要靠
   它才知道這是什麼，所以還是要填。

   ratio（寬 ÷ 高）是必填，不是可有可無的最佳化 —— 版面就是靠它排的：
   同一列的每張卡片等高，寬度按各自的 ratio 分配。1 是正方形。

   預設填原圖的比例。填得跟原圖不一樣也可以，那是「要顯示成什麼形狀」的
   指定：圖是 object-fit: cover，所以填窄了就從左右裁、填寬了就從上下裁，
   都以中心為準。同一排的 ratio 總和越小，那一排就越高 —— 想調整排與排的
   高度差時就是動這個值。
   video: true 的項目會用 <video> 靜音循環播放。 */
const ITEMS = [
  {
    src: "/gallery/tulip.mp4",
    title: "Tulip",
    ratio: 1, // 原始尺寸 2160 × 2160
    video: true,
  },
  {
    src: "/gallery/christmas-poster.png",
    title: "Christmas poster",
    /* 原始尺寸 595 × 842（A4 直式，ratio 0.71），這裡刻意填窄一點去裁掉
       左右的空白邊 —— 直式圖的 ratio 越小、那一排的 ratio 總和就越小，
       整排就越高，可以把第一排拉近第二排。內容實際範圍是 x 60~540，
       所以 0.60 只切到透明的邊，還留一點餘裕，不會碰到樹。 */
    ratio: 0.6,
  },
  {
    src: "/gallery/illustration.jpg",
    title: "Illustration",
    /* 原始尺寸 1440 × 620（ratio 2.32），這裡收窄到 2.02 去裁掉左右各約
       6.5% —— 跟聖誕樹那張的 0.6 是一組的：兩張一起收窄，第一排的 ratio
       總和才會剛好等於第二排的 3.62（1 + 0.6 + 2.02），兩排等高。
       只動其中一張補不平，聖誕樹要縮到 0.3 才夠，那會把樹切掉兩側。 */
    ratio: 2.02,
  },
  {
    src: "/gallery/pathors-card.png",
    title: "Pathors business card",
    ratio: 1.62, // 原始尺寸 1111 × 686
  },
  {
    src: "/gallery/daily-ui-02.gif",
    title: "Daily UI 02",
    ratio: 1, // 原始尺寸 1120 × 1120
  },
  {
    src: "/gallery/snack.gif",
    title: "Snack",
    ratio: 1, // 原始尺寸 560 × 560
  },
];

/* 一排固定三張。交給 flex-wrap 自己決定一排放幾張的話，排法會隨每張圖的
   比例和視窗寬度浮動；這裡要的是穩定的三欄節奏，所以在 render 前就先把
   清單切成每三個一組，由標記決定換行，不是由寬度決定。 */
const ROW_SIZE = 3;

const chunk = (arr, size) =>
  arr.reduce((rows, item, i) => {
    if (i % size === 0) rows.push([]);
    rows[rows.length - 1].push(item);
    return rows;
  }, []);

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Gallery = () => {
  /* 在 render 當下讀，不是在模組載入時 —— 使用者中途改系統設定也會跟上 */
  const reduce = prefersReduced();

  return (
    <Div>
      {/* 開場刻意不跟 Work 一樣。深色 hero ＋ 像素轉場是首頁與 Work 的規格，
          那是「這是一個大段落」的訊號；Gallery 是看圖的地方，同一套開場會讓
          兩者在階層上變成平輩，而且要捲過將近兩個畫面才看得到第一張圖。
          這裡跟 About 同一個層級：淺底直接進內容，標題置中。 */}
      <Masthead>
        <Title>
          <Star aria-hidden="true" />
          Gallery
        </Title>
      </Masthead>

      <Grid>
        {chunk(ITEMS, ROW_SIZE).map((row) => (
          <Row key={row[0].src}>
            {row.map((item) => (
              <Tile
                key={item.src}
                /* 滿排時 --r 是這張在整排寬度裡分到的份額，未滿排時是
                   基準高換算寬度的係數；兩種都同時餵給 Frame 的
                   aspect-ratio，所以一個值就決定這張卡片的寬與高 */
                style={{ "--r": item.ratio }}
                $full={row.length === ROW_SIZE}
              >
                <Frame>
                  {item.video ? (
                    <video
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
                    <img src={item.src} alt={item.title} loading="lazy" />
                  )}
                </Frame>
              </Tile>
            ))}
          </Row>
        ))}
      </Grid>

      {/* 收尾：這一頁沒有分頁也沒有「載入更多」，捲到底就是全部了。用跟 About
          同一條波浪收束，讀者才知道是結束而不是還沒載完；底下一句話說明還會
          再加，並把想看完整專案的人導去 Work。 */}
      <Outro>
        <Wave />
        <OutroText>
          More to come soon...{" "}
          <OutroLink to="/work">View works</OutroLink>
        </OutroText>
      </Outro>
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
     是對基線，字有降部（y）的時候會看起來偏低。
     justify-content 讓「星星＋字」當成一組置中，而不是各自置中。 */
  display: flex;
  align-items: center;
  justify-content: center;
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

/* 三欄齊行版面：每排三張，同排等高、寬度按各自的 ratio 分配整排寬度。

   換行由標記決定（每三個一組包成一個 Row），不是由寬度決定 —— 所以視窗
   再怎麼縮，分組都不會變，手機上看到的是同一套排法、只是整個變小。 */
const Grid = styled.div`
  width: 80%; /* 與 Masthead、Work 的內容欄同寬，三者左右邊界對齊 */
  /* 跟 width 同值，給下面的比例計算用 —— CSS 沒辦法用百分比寬去換算高度 */
  --col-w: 80vw;
  box-sizing: border-box;
  /* 上方留白刻意大於一般段落間距：標題置中之後它不再有左邊界去對齊網格，
     只剩空白能把它跟作品分開，距離太近會讀成第一排的說明文字。 */
  padding: 112px 0 0;

  /* 窄畫面是整個版面等比縮小。滿排的三張靠 flex 分配整排寬度、本來就跟著
     容器縮；gap 與 row-h 如果留成固定 px，就只有它們不縮，手機上會變成
     縫隙和最後一排的圖相對過大。改成容器寬度的固定比例後，整個版面是同一
     個倍率的縮放。

     0.2778 與 0.0208 是原本桌機值（1440px 視窗下的 320px 與 24px）換算出
     的比例，所以常見桌機寬度的長相跟原本一致。min() 讓它在更寬的螢幕上
     停在原尺寸，不會無限放大。
     --col-w 在斷點裡跟著 width 一起改，比例才不會在斷點上跳掉。 */
  --row-h: min(320px, calc(var(--col-w) * 0.2778));
  --gap: min(24px, calc(var(--col-w) * 0.0208));
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  @media (max-width: 800px) {
    width: 90%;
    --col-w: 90vw;
  }
  @media (max-width: 620px) {
    padding: 72px 0 0;
  }
`;

const Frame = styled.span`
  display: block;
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

const Row = styled.div`
  display: flex;
  gap: var(--gap);
`;

const Tile = styled.div`
  /* 滿排：basis 給 0、grow 給 ratio，整排的可用寬度就按 ratio 分配。
     寬 ∝ ratio 而高 = 寬 ÷ ratio，所以同排三張自動等高，且剛好填滿整排。

     未滿的最後一排：不能用同一招 —— basis 0 ＋ grow 會把剩下的一兩張拉成
     整排寬。改回用基準高換算寬度（寬 = 基準高 × ratio）並關掉 grow，
     這排就維持基準高、靠左排，不會被撐開。

     min-width: 0 讓很窄的卡片可以被壓縮，不會把排撐出容器。 */
  flex: ${({ $full }) =>
    $full ? "var(--r) 1 0" : "0 0 calc(var(--row-h) * var(--r))"};
  min-width: 0;
  /* 這一頁只有圖：不能點、沒有 hover 狀態、沒有標題。任何互動或滑過的變化
     都是在作品上面再加一層訊息，而這裡的內容就是作品本身。 */
`;

/* 波浪與底下那句話是同一組，所以一起置中、一起控制上下距離。
   上方留白沿用 About 那條波浪的 10vh，但加下限 —— 純 vh 在矮螢幕上會
   讓波浪貼著最後一排作品。 */
const Outro = styled.footer`
  width: 80%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: max(10vh, 72px) 0 120px;

  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 620px) {
    padding: max(8vh, 56px) 0 80px;
  }
`;

/* 共用的波浪圖形，外距在這裡給 —— About 用 10vh 0，這裡的上距由 Outro
   負責，所以只需要跟底下那句話留一點距離。 */
const Wave = styled(WaveDivider)`
  margin: 0 0 56px;
`;

const OutroText = styled.p`
  margin: 0;
  color: #8c8c8c;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: clamp(15px, 1.2vw, 17px);
  line-height: 1.6;
  text-align: center;
`;

/* 連結用標題星星的藍，跟導覽列的 active 同一支 —— 這一頁唯一可以點的東西，
   顏色要跟周圍的灰字分得開，底線則是不靠顏色也看得出是連結。 */
const OutroLink = styled(Link)`
  color: #2a96b7;
  /* 站上其他地方的 serif 都是這一支（footer、Work、首頁），沿用同一個
     字體家族，不要為了一個連結多引一種字。serif 在同樣的 px 下看起來比
     無襯線小一點，所以字級往上補一階，跟前面那句話視覺上才等重。 */
  font-family: "Kaisei Decol", serif;
  font-size: 1.08em;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover,
  &:focus-visible {
    color: #1f7691;
  }
`;

export default Gallery;
