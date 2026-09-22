import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WaveDivider from "../Components/WaveDivider";
import TitleStars from "../Components/TitleStars";
import {
  chunkRows,
  fillsRow,
  rowMetrics,
  Row,
  Tile,
  Frame,
  Media,
} from "../Components/GalleryRow";

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
   video: true 的項目會用 <video> 靜音循環播放。
   startsRow: true 會讓這張從新的一排開始，給 ratio 併不進任何一排的圖用。 */
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
    /* title 只餵給 alt，不會顯示，所以這裡寫的是「看到的是什麼」而不是檔名。
       原本填的是 "Snack" —— 那是檔名的玩笑（蛇→snake→snack），讀螢幕的人
       聽到只會以為是零食。 */
    src: "/gallery/snack.gif",
    title:
      "Animated Year of the Snake greeting, cycling through 蛇全蛇美, 蛇願都好 and 蛇蛇如意",
    ratio: 1, // 原始尺寸 560 × 560
  },
  /* 下面兩張排在最後，沒有照上面「新的放前面」那條 —— 放到最前面會把前六張
     重新分組，聖誕樹（0.6）與插畫（2.02）刻意湊出來的兩排等高就散了。
     排在最後則是前兩排原封不動，這兩張自己把第三排湊滿。

     兩張的 ratio 總和要湊到 rowBudget(2)＝3.70，不是 3.62 —— 原因見下面
     rowBudget 的註解。0.79 + 2.91 = 3.70。 */
  {
    src: "/gallery/goku-menu.jpg",
    title: "Go Ku Go Ku Kohi menu",
    ratio: 0.79, // 原始尺寸 828 × 1044，照原比例不裁
  },
  {
    /* 乙巳蛇年的賀歲三連作。

       原檔的平塗底色是 #d9d9d9，比頁面深 15 階（ΔL* 8.8），放在這一頁上會
       讀成一塊裝著作品的灰卡 —— 頁面上其他七件都沒有卡片，只有它有。這裡
       改成 #e6e6e6（ΔL* 4.2）：襯底還在，三張面板還是被收成一件作品，但
       邊界不再跟畫面搶。整個拿掉（改成跟頁面同色的 #f2f2f2）也試過，那樣
       三張面板會散成三張獨立的圖，反而看不出是一組的。

       ratio 原圖是 2.58，這裡填 2.91 去湊滿第三排的預算 —— 多出來的從上下
       裁掉（cover 以中心為準），每邊 48px。內容落在 y 143~703，裁完上下還
       各留 94px 底色，切到的全是留白，面板一點都沒動到。要湊這 0.33 也可以
       改裁旁邊那張照片，但那是照片、裁到的是實拍內容，這裡有純留白可以割，
       先割留白。 */
    src: "/gallery/snack-series.jpg",
    title: "Year of the Snake new year series",
    ratio: 2.91, // 原始 2180 × 846（比例 2.58），上下各裁 48px 到 2.91
  },
  {
    /* Insight Nest 登入畫面的筆電 mockup。

       這張自己佔一排，沒有併進第三排 —— 九張要排成三排等高在算術上做不到。
       等高的條件是每排 ratio 總和 3.62，三排就是 10.86，而前八張加起來已經
       是 10.94（1+0.6+2.02 / 1.62+1+1 / 0.79+2.91），再加任何一張都只會更多。
       硬塞進第三排的話那排會是 5.12，高度掉到別排的七成。要維持等高就只能
       回頭重裁已經定案的那幾張，那代價比多一排大。

       另起一排則是前三排一個值都不用動。這張開的第四排現在有三張（它、掌機、
       四張分類卡），總和 1.50 + 1 + 1.12 = 3.62，跟上面每一排一樣，所以四排
       等高、而且整排寬度也分完了。 */
    src: "/gallery/insight.jpg",
    title:
      "Insight Nest login screen on a laptop, photographed on a wooden shelf",
    ratio: 1.5, // 1100 × 731（原圖 1224 × 814），照原比例不裁
    startsRow: true,
  },
  {
    /* All I Can Eat：吃豆人風格的掌機介面。跟在 insight 後面併成最後一排，
       沒有另外標 startsRow —— 它接得上那一排，而那排也還沒滿三張。 */
    src: "/gallery/all-i-can-eat.jpg",
    title: "All I Can Eat, a Pac-Man style game on a handheld console interface",
    ratio: 1, // 800 × 800（原圖 1200 × 1200）
  },
  {
    /* 四張分類卡輪流播動畫。這張補滿第四排的第三格。

       ratio 填 1.12 而不是原圖的 1（600 × 600）：這一排前兩張是 1.50 + 1，
       第三張要填 1.12 那一排才湊得到 3.62、跟上面三排等高。1 的話這排會是
       3.50，高度多出 3%，四張圖擺在一起看得出來。

       裁掉的 0.12 全在上下的留白裡：卡片內容落在 400px 版本的 y 45~355，
       裁完上下各還留 24px 背景，四張卡一點都沒被切到。另一個作法是把旁邊
       那張筆電照片放寬到 1.62，但那要裁的是實拍內容，這裡有純留白可以割。

       背景是接近頁面底色的淺灰（#f7f7f7 對頁面 #f2f2f2），所以這格不會讀成
       一塊卡片，四張分類卡看起來像直接浮在頁面上 —— 跟其他七件一致。 */
    src: "/gallery/heaven.gif",
    title:
      "Category cards for Forest & Land, Humanity, Ocean and Animals, animating in turn",
    ratio: 1.12, // 400 × 400（原圖 600 × 600），上下各裁 21px 到 1.12
  },
];

const Gallery = () => {
  return (
    <Div>
      {/* 開場刻意不跟 Work 一樣。深色 hero ＋ 像素轉場是首頁與 Work 的規格，
          那是「這是一個大段落」的訊號；Gallery 是看圖的地方，同一套開場會讓
          兩者在階層上變成平輩，而且要捲過將近兩個畫面才看得到第一張圖。
          這裡跟 About 同一個層級：淺底直接進內容，標題置中。 */}
      <Masthead>
        <Title>
          {/* 導覽列的星星有兩種顏色（首頁黃、其他頁藍），共用元件的預設值
              跟著首頁走，所以這裡把標題原本的藍指定回來。 */}
          <TitleStars $color="#2a96b7" aria-hidden="true" />
          Gallery
        </Title>
      </Masthead>

      <Grid>
        {chunkRows(ITEMS).map((row) => (
          <Row key={row[0].src}>
            {row.map((item) => (
              <Tile
                key={item.src}
                /* 滿排時 --r 是這張在整排寬度裡分到的份額，未滿排時是
                   基準高換算寬度的係數；兩種都同時餵給 Frame 的
                   aspect-ratio，所以一個值就決定這張卡片的寬與高 */
                style={{ "--r": item.ratio }}
                $full={fillsRow(row)}
              >
                <Frame>
                  <Media item={item} />
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

  /* 版面的兩個尺寸（--gap 與 --row-h）跟分排的數學同源，見 GalleryRow */
  ${rowMetrics}
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
   顏色要跟周圍的灰字分得開。

   靜止時不畫底線，滑過或鍵盤聚焦才出現：這句話是收尾的補充，一條常駐的
   底線會讓它比實際份量重。代價是靜止時只剩顏色在表示它可以點，而藍與灰
   的明度接近，色覺辨識有困難的人不一定分得出來 —— 所以焦點狀態也一起
   加底線，用鍵盤的人才不會只能靠顏色找到它。 */
const OutroLink = styled(Link)`
  color: #2a96b7;
  /* 站上其他地方的 serif 都是這一支（footer、Work、首頁），沿用同一個
     字體家族，不要為了一個連結多引一種字。字級刻意比前面那句話小一階：
     serif 的筆畫對比本來就讓它比同尺寸的無襯線搶眼，補到等大反而會蓋過
     前面那句，這裡要的是收尾不是標題。 */
  font-family: "Kaisei Decol", serif;
  font-size: 0.94em;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    color: #1f7691;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

export default Gallery;
