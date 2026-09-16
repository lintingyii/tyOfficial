import React from "react";
import styled, { keyframes } from "styled-components";
import Footer from "../Components/footer";
import WaveDivider from "../Components/WaveDivider";

export const About = () => {
  return (
    <Div>
      <Div2>
        <Div3>
          <Div4>
            <Column>
              <Div5>
                <HeaderRow>
                  <Avatar src="/cv/avatar.jpg" alt="林庭奕 Ting-yi, Lin" />
                  <HeaderText>
                    <NameRow>
                      <NameZh>林庭奕</NameZh>
                      <NameDivider />
                      <NameEn>Ting Yi, Lin</NameEn>
                    </NameRow>
                    <RoleLine>UI / UX and Visual Designer</RoleLine>
                    <LinkRow>
                      <Globe viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M3 12h18" />
                        <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" />
                      </Globe>
                      <LinkSlash>/</LinkSlash>
                      <LinkChip
                        href="https://tingyilin.com/home"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tingyilin.com
                      </LinkChip>
                      <ChipDivider />
                      <LinkChip
                        href="https://playground-of-tingyi.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        MyPlayground.com
                      </LinkChip>
                    </LinkRow>
                  </HeaderText>
                </HeaderRow>
              </Div5>
            </Column>
          </Div4>
        </Div3>

        <Hr />

        <Div26>About</Div26>
        <Div19 style={{ marginTop: "24px" }}>
          我是庭奕，畢業於國立政治大學廣告學系，主修創意設計，在學期間跨入 UI/UX，開始從以人為本的角度重新理解設計。五年的實務經驗讓我橫跨 UI/UX、數位設計與品牌視覺，以使用者體驗為核心、解決問題的方法為根基，用系統思維串連從產品介面到品牌各種接觸點的完整體驗。同時具備前端技能，讓我在發想階段就把可實作性納入考量，重視設計確實落地，做出兼具功能性與品牌辨識度的成果。
        </Div19>
        <Div19 style={{ marginTop: "8px" }}>
          I'm Ting-yi, a graduate of National Chengchi University's Department
          of Advertising, where I majored in creative design before moving into
          UI/UX and learning to approach design from a human-centered
          perspective. Five years of practice have taken me across UI/UX,
          digital design, and brand visuals — with user experience at the core
          and problem-solving as the foundation, using systems thinking to
          connect the full experience from product interfaces to every brand
          touchpoint. My front-end skills let me factor buildability in from the
          concept stage, so the work ships as designed: functional and
          recognizably on-brand.
        </Div19>

        <Hr />

        <Div26>Professional Experience</Div26>
        <ExpList>
          <ExpRow>
            <ExpYear>2026 — Now</ExpYear>
            <div>
              <ExpTitle>
                <a href="https://pathors.com/zh-TW" target="_blank" rel="noopener noreferrer">
                  Design Director
                  <Arrow>↗</Arrow>
                </a>
              </ExpTitle>
              <ExpOrg>@ Pathors</ExpOrg>
            </div>
          </ExpRow>
          <ExpRow>
            <ExpYear>2024 — 2026</ExpYear>
            <div>
              <ExpTitle>
                <a href="https://www.fontech.com.tw/" target="_blank" rel="noopener noreferrer">
                  Senior UI / UX Designer
                  <Arrow>↗</Arrow>
                </a>
              </ExpTitle>
              <ExpOrg>@ Fontech</ExpOrg>
            </div>
          </ExpRow>
          <ExpRow>
            <ExpYear>2024 — 2024</ExpYear>
            <div>
              <ExpTitle>Product Designer</ExpTitle>
              <ExpOrg>@ KOL Tech CO.</ExpOrg>
              <Div19>
                • Led the experience and interface design of three KOL-related
                digital SaaS products and one on-premises software product, and
                increased user engagement by 20% in 3 months.
                <br />
                • Conducted user research including interviews, user flows, user
                journeys, and information architecture.
                <br />• Developed design systems and responsive user interface
                designs.
              </Div19>
            </div>
          </ExpRow>
          <ExpRow>
            <ExpYear>2023 — 2024</ExpYear>
            <div>
              <ExpTitle>
                <a href="https://futurenest.ai/zh/" target="_blank" rel="noopener noreferrer">
                  UIUX & Front-end Internship
                  <Arrow>↗</Arrow>
                </a>
              </ExpTitle>
              <ExpOrg>@ Futurenest, Inc.</ExpOrg>
              <Div19>
                • Designed user interfaces and conducted A/B prototyping and
                usability testing for the financial BI system.
                <br />
                • Worked on official website design and information architecture.
                <br />• Developed front-end frameworks using React.js and
                performed markup slicing.
              </Div19>
            </div>
          </ExpRow>
          <ExpRow>
            <ExpYear>2020 — Now</ExpYear>
            <div>
              <ExpTitle>Self-hired Freelancer</ExpTitle>
              <ExpOrg>@ Ting-yi studio</ExpOrg>
              <Div19>
                • Designed visual identity systems.
                <br />
                • Created visual designs.
                <br />
                • Developed packaging designs.
                <br />• Produced illustrations.
              </Div19>
            </div>
          </ExpRow>
        </ExpList>

        <Div34>
          <Div26>Education</Div26>
          <ExpList>
          <ExpRow>
            <ExpYear>2006 — 2010</ExpYear>
            <div>
              <ExpTitle>Bachelor of Arts - BA, Advertising</ExpTitle>
              <ExpOrg>National Chengchi University</ExpOrg>
            </div>
          </ExpRow>
          </ExpList>
        </Div34>


        <Hr />

        <Div26>Project Experience</Div26>
        <ExpList>
          <ExpRow>
            <ExpYear>2026</ExpYear>
            <div>
              <ExpTitle>
                <a href="https://pathors.com/en" target="_blank" rel="noopener noreferrer">
                  Pathors 官網設計
                  <Arrow>↗</Arrow>
                </a>
              </ExpTitle>
            </div>
          </ExpRow>
          <ExpRow>
            <ExpYear>2026</ExpYear>
            <div>
              <ExpTitle>
                Fulbright TW EMI Research Hub
                <StatusPill>In Development</StatusPill>
              </ExpTitle>
            </div>
          </ExpRow>
          <ExpRow>
            <ExpYear>2025</ExpYear>
            <div>
              <ExpTitle>
                <a href="https://cbs.nccu.edu.tw/zh-tw" target="_blank" rel="noopener noreferrer">
                  政大企業永續管理中心官網設計
                  <Arrow>↗</Arrow>
                </a>
              </ExpTitle>
            </div>
          </ExpRow>
          <ExpRow>
            <ExpYear>2025</ExpYear>
            <div>
              <ExpTitle>
                <a href="https://www.luxetravel.com.tw/" target="_blank" rel="noopener noreferrer">
                  典藏旅遊官網與主視覺設計
                  <Arrow>↗</Arrow>
                </a>
              </ExpTitle>
            </div>
          </ExpRow>
          <ExpRow>
            <ExpYear>2023</ExpYear>
            <div>
              <ExpTitle>
                <a href="https://futurenest.ai/zh/" target="_blank" rel="noopener noreferrer">
                  未來巢企業形象網站
                  <Arrow>↗</Arrow>
                </a>
              </ExpTitle>
            </div>
          </ExpRow>
        </ExpList>

        <Div34>
          <Div26>Honors</Div26>
          <ExpList>
          <ExpRow>
            <ExpYear>2025</ExpYear>
            <div>
              <ExpTitle>雙北程式設計節【城市儀表板大黑客松】</ExpTitle>
              <ExpSub>Taipei Code Fest. Hackathon</ExpSub>
              <ExpNote>Honorable Mention (Top Four among 140 Teams)</ExpNote>
            </div>
          </ExpRow>
          <ExpRow>
            <ExpYear>2024</ExpYear>
            <div>
              <ExpTitle>
                <a href="/work/sports_win" rel="noopener noreferrer">
                  臺北市秋季程式設計節【城市通微服務大黑客松】
                  <Arrow>↗</Arrow>
                </a>
              </ExpTitle>
              <ExpSub>Taipei Code Fest. Hackathon</ExpSub>
              <ExpNote>Honorable Mention (Top Four among 111 Teams)</ExpNote>
            </div>
          </ExpRow>
          <ExpRow>
            <ExpYear>2023</ExpYear>
            <div>
              <ExpTitle>
                <a href="/work/youngLions" rel="noopener noreferrer">
                  坎城青年創意競賽 台灣代表隊選拔賽
                  <Arrow>↗</Arrow>
                </a>
              </ExpTitle>
              <ExpSub>Cannes Lions Festival, 2023 Taiwan Representative Competition</ExpSub>
              <ExpNote>Future young lions award, 4TH prize</ExpNote>
            </div>
          </ExpRow>
          </ExpList>
        </Div34>

      </Div2>

      <DownloadButton onClick={downloadPdf}>
        Download resume PDF
        <DownloadIcon />
      </DownloadButton>

      <GalleryRow>
        <GalleryItem>
          <GalleryImg src="/cv/gallery-4.png" alt="Plant" />
          <GalleryLabel>Plant</GalleryLabel>
        </GalleryItem>
        <GalleryX>✕</GalleryX>
        <GalleryItem>
          <GalleryImg src="/cv/gallery-3.png" alt="Art" />
          <GalleryLabel>Art</GalleryLabel>
        </GalleryItem>
        <GalleryX>✕</GalleryX>
        <GalleryItem>
          <GalleryImg src="/cv/gallery-2.png" alt="Creativity" />
          <GalleryLabel>Creativity</GalleryLabel>
        </GalleryItem>
        <GalleryX>✕</GalleryX>
        <GalleryItem>
          <GalleryImg src="/cv/gallery-1.png" alt="Music" />
          <GalleryLabel>Music</GalleryLabel>
        </GalleryItem>
      </GalleryRow>

      {/* <Footer /> */}
    </Div>
  );
};
export default About;

const DownloadButton = styled.button`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #d7f1f6;
  color: #14607A;
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 90px;
  display: flex;
  gap: 0.5rem;

  transition: background-color 0.8s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
  }
  // @media (max-width: 480px) {
  //   padding: 8px 12px;
  //   font-size: 0.8rem;
  // }
`;

const downloadJpg = () => {
  // 將 PDF 文件的路徑替換為實際的文件路徑
  const pdfUrl = "/有球必In CaseBoard.jpg";

  // 創建一個隱藏的 <a> 元素
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "/有球必In CaseBoard.jpg"; // 下載文件的名稱

  // 將 <a> 元素添加到 DOM 中
  document.body.appendChild(link);

  // 模擬點擊事件
  link.click();

  // 移除 <a> 元素
  document.body.removeChild(link);
};

const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M223.16,68.42l-16-32A8,8,0,0,0,200,32H56a8,8,0,0,0-7.16,4.42l-16,32A8.08,8.08,0,0,0,32,72V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V72A8.08,8.08,0,0,0,223.16,68.42Zm-57.5,89.24-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,164.69V104a8,8,0,0,1,16,0v60.69l18.34-18.35a8,8,0,0,1,11.32,11.32ZM52.94,64l8-16H195.06l8,16Z" />
  </svg>
);

const downloadPdf = () => {
  // 將 PDF 文件的路徑替換為實際的文件路徑
  const pdfUrl = "/CV.pdf";

  // 創建一個隱藏的 <a> 元素
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Ting-yi Lin CV.pdf"; // 下載文件的名稱

  // 將 <a> 元素添加到 DOM 中
  document.body.appendChild(link);

  // 模擬點擊事件
  link.click();

  // 移除 <a> 元素
  document.body.removeChild(link);
};


/* 以下三組圖片區塊照參考站 tingyilin.figma.site 量到的規格：
   頭像 100x100 圓形、縮圖 150x90 圓角 8px 間距 10px、
   底部拼貼四張不同高度、間距 24px、靠下對齊。 */
const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
`;

/* 人像與姓名／地點／連結水平並排。內層不設 gap，
   讓 Div8 / Div10 / Div11 原本的 margin 維持既有的垂直節奏。 */
const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  min-width: max-content; /* 不要塌到比內容窄，否則子項會被 flex 壓縮 */
`;



const GalleryRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 64px;
  /* 已移到 Div2 之外，改由自己對齊內容欄寬（比照 Div2 的 859px / margin-left 24px） */
  width: 859px;
  max-width: 100%;
  margin-left: 24px;

  @media (max-width: 991px) {
    max-width: 90%;
    margin-left: 0;
  }

  @media (max-width: 820px) {
    /* 2×2。原本是 flex-wrap: wrap，但每一格是 flex: 1 1 0（basis 0、可縮），
       四格永遠擠得進一行，所以從來不會換行 —— 才會變成一排四張小圖。
       改用 grid 直接指定兩欄，才是真的兩排。 */
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  flex: 1 1 0;
  min-width: 0;
  aspect-ratio: 1 / 1;
  border-radius: 12px; /* 與 footer 的 Footerwraper 一致 */
  overflow: hidden;
`;

const GalleryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const GalleryLabel = styled.span`
  position: absolute;
  left: 50%;
  bottom: 14px;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.92);
  color: #2A3133;
  font: 400 13px/1.5 Assistant, sans-serif;
  padding: 3px 12px;
  border-radius: 999px;
  white-space: nowrap;
`;

/* 圖與圖之間的分隔符號 */
const GalleryX = styled.span`
  flex: 0 0 auto;
  color: #8C8C8C;
  font: 400 15px/1 Assistant, sans-serif;
  user-select: none;

  @media (max-width: 820px) {
    display: none;
  }
`;


/* header 右側資訊區，照參考站 tingyilin.figma.site 的設計：
   姓名中英以細分隔線隔開 → 職稱副標 → 地球圖示 + 膠囊連結。 */
const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
`;

const NameZh = styled.span`
  font: 500 24px/1.35 "Noto Sans TC", sans-serif;
  color: #2A3133;
`;

const NameEn = styled.span`
  font: 400 24px/1.35 Assistant, sans-serif;
  color: #2A3133;
`;

const NameDivider = styled.span`
  /* flex-shrink 必須關掉：姓名列內容寬於容器時，1px 的線會被壓成 0 而消失。
     顏色比參考站深一階 —— 參考站是白底，這裡是 #f2f2f2 灰底，同樣的
     #CCCCCC 對比會從 1.61:1 掉到 1.36:1。 */
  flex: 0 0 1px;
  width: 1px;
  align-self: stretch;
  background: #B6B6B6;
`;

const RoleLine = styled.div`
  font: 400 15px/1.7 Assistant, sans-serif;
  color: #555;
  margin-top: 6px;
  white-space: nowrap;
`;

const LinkRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  white-space: nowrap;
`;

const Globe = styled.svg`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: #2A96B7;
`;

const LinkSlash = styled.span`
  font: 400 15px/1 Assistant, sans-serif;
  color: #8C8C8C;
`;

const LinkChip = styled.a`
  font: 400 15px/1 Assistant, sans-serif;
  color: #2A3133;
  background: #EDEDED;
  padding: 8px 14px;
  border-radius: 999px;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: background-color 0.2s ease-in;

  &:hover {
    background: #E2E2E2;
  }
`;

const ChipDivider = styled.span`
  flex: 0 0 1px;
  width: 1px;
  height: 18px;
  background: #B6B6B6;
  margin: 0 2px;
`;


/* 工作經歷：左欄年份、右欄職稱與公司，照參考站 tingyilin.figma.site 的編排。
   職稱有連結時附 ↗；原本就有的條列說明保留在公司名下方。 */
const ExpList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 32px;
`;

const ExpRow = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 24px;
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 6px;
  }
`;

const ExpYear = styled.div`
  font: 400 15px/1.5 Assistant, sans-serif;
  color: #8C8C8C;
  white-space: nowrap;
`;

const ExpTitle = styled.div`
  font: 600 16px/1.5 "Noto Sans TC", sans-serif;
  color: #2A3133;

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

const Arrow = styled.span`
  font-size: 13px;
  margin-left: 4px;
  color: #8C8C8C;
`;

const ExpOrg = styled.div`
  font: 400 16px/1.5 "Noto Sans TC", sans-serif;
  color: #2A96B7;
  margin-top: 2px;
`;


const StatusPill = styled.span`
  display: inline-block;
  font: 400 13px/1.5 Assistant, sans-serif;
  color: #555;
  background: #E2E2E2;
  padding: 2px 10px;
  border-radius: 999px;
  margin-left: 10px;
  vertical-align: middle;
  white-space: nowrap;
`;

const ExpSub = styled.div`
  font: 400 15px/1.6 Assistant, sans-serif;
  color: #555;
  margin-top: 2px;
`;

const ExpNote = styled.div`
  font: 400 15px/1.6 Assistant, sans-serif;
  color: #2A96B7;
  margin-top: 6px;
`;

const Div = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  // position: absolute;
  top: 0;
  left: 0;
  padding-top: 13vh;
  margin: 0; /* 清除 margin */

  @media (max-width: 1024px) {
    padding-top: 8vh;
  }
  @media (max-width: 912px) {
    padding-top: 6vh;
  }
  @media (max-width: 480px) {
    padding-top: 0vh;
  }
`;

const Div2 = styled.div`
  display: flex;
  width: 859px;
  max-width: 100%;
  flex-direction: column;
  margin-left: 24px;

  @media (max-width: 991px) {
    max-width: 90%;
    margin-left: 0px;
  }
`;

const Div3 = styled.div`
  padding: 0 1px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div4 = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 41%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div5 = styled.div`
  display: flex;
  margin-top: 9px;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 31px;
  }
`;

const load = keyframes`
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;


const Div7 = styled.div`
  color: #555;
  margin-top: 20px;
  white-space: pre-wrap;
  font: 400 15px/150% Assistant, sans-serif;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  animation: ${load} 400ms ease-in forwards;
  animation-delay: 300ms;
  opacity: 0;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;











const Div12 = styled.div`
  color: #2A96B7;
  margin-top: 3rem;
  font: 700 23px/150% Noto Sans TC, sans-serif;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;







const Div19 = styled.div`
  color: #555;
  margin-top: 16px;
  font: 400 15px/1.7 Assistant, sans-serif;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div22 = styled.div`
  color: #555;
  margin-top: 28px;
  font: 16px/25px Assistant, sans-serif;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;




const Div24 = styled.div`
  margin-top: 54px;
  padding: 0 1px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div25 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  line-height: normal;
  width: 33%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Img7 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 100%;
  flex-grow: 1;
  border-radius: 12px;
  @media (max-width: 991px) {
    // margin-top: 20px;
  }
`;

const Img8 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 100%;
  flex-grow: 1;
  border-radius: 12px;
  @media (max-width: 991px) {
    // margin-top: 20px;
  }
`;

const Img9 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 100%;
  flex-grow: 1;
  border-radius: 12px;

  @media (max-width: 991px) {
    // margin-top: 20px;
  }
`;

const Div26 = styled.div`
  color: #2A96B7;
  font: 700 18px/1.4 Noto Sans TC, sans-serif;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;







const Div32 = styled.div`
  color: #555;
  margin-top: 10px;
  font: 400 17px/100% Assistant, sans-serif;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;


const Div34 = styled.div`
  margin-top: 7rem;
  padding: 0 1px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 5rem;
  }
`;

const Div35 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column6 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div36 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-weight: 500;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Div37 = styled.div`
  color: #2A96B7;
  font: 700 23px/150% Noto Sans TC, sans-serif;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;


const Div39 = styled.div`
  border-top: 1.5px solid #d7f1f6;
  margin-top: 12px;
  height: 1px;
`;

const Div40 = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  font-size: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #555;
  font-weight: 400;
  line-height: 25px;
  padding: 0 77px 0 16px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div41 = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  white-space: nowrap;
`;

const Div42 = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  align-self: start;
  margin: 10px 0 0 25px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Column7 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div43 = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin: auto 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div44 = styled.div`
  color: #2A3133;
  font: 500 20px/150.3% Noto Sans TC, -apple-system, Roboto, Helvetica,
    sans-serif;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Div45 = styled.div`
  border-top: 1px solid #ffd9f9;
  margin-top: 13px;
  height: 1px;
`;

const Div46 = styled.div`
  color: #555;
  margin: 17px 0 0 25px;
  font: 400 17px/25px Assistant, sans-serif;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Column8 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div47 = styled.div`
  display: flex;
  margin-top: 62px;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div48 = styled.div`
  color: #2A3133;
  font: 500 20px/150.3% Noto Sans TC, -apple-system, Roboto, Helvetica,
    sans-serif;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Div49 = styled.div`
  border-top: 1px solid #ffd9f9;
  margin-top: 8px;
  height: 1px;
`;

const Div50 = styled.div`
  color: #2A3133;
  margin-top: 16px;
  font: 400 17px/25px Assistant, sans-serif;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;


/* 圖形抽到 Components/WaveDivider，這裡只留這一頁要的外距 */
const Hr = styled(WaveDivider)`
  margin: 10vh 0;
`;
