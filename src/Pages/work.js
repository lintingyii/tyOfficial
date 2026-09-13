import react, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { LargeProjectCard, ProjectCard } from "../Components/ProjectCard";
import PixelScrollTransition from "../Components/PixelScrollTransition";
import TextMarquee from "../Components/TextMarquee";
import ProjectFilter from "../Components/ProjectFilter";
import IntroductionCard from "../Components/IntroductionCard";
import SortButton from "../Components/SortButton";

export const Work = () => {
  const initialProjects = [
    {
      date: "March, 2024",
      image: "/hivebee/hb demo.png",
      title: "Hive Bee - We made donations enjoyable",
      subtitle: "SaaS product design",
      description:
        "Created unique event experiences that made interactions between streamers and audiences more lively and engaging.",
      tags: [{ name: "UI/UX design", color: "#59656C" }],
      subtags: [
        { name: "SaaS", color: "#59656C" },
        { name: "RWD", color: "#59656C" },
      ],
      link: "/work/HiveBee",
      openInNewTab: false,
    },
    {
      date: "May, 2023",
      image: "/ainsight/ainsight-main.png",
      title: "AInsight⁺ - AI-Powered Finance",
      subtitle: "SaaS product design",
      description:
        "Tailored for small and medium-sized businesses, our AI-enhanced financial system optimizes operational efficiency, leaving traditional accounting and bookkeeping behind.",
      tags: [
        { name: "UI/UX design", color: "#59656C" },
      ],
      subtags: [{ name: "SaaS", color: "#59656C" }],
      link: "/work/AInsight",
      openInNewTab: false,
    },
    {
      date: "November, 2023",
      image: "/arron-nieh.png",
      title: "Aaron Nieh : Behind the Covers",
      subtitle: "Lecture Visual Identity",
      description:
        'The key visual poster and event website for Aaron Nieh’s lecture, "Behind the Covers," at NCCU.',
      tags: [
        { name: "Visual design", color: "#2A96B7" },
        { name: "Frontend coding", color: "#D8984E" },
      ],
      subtags: [
        { name: "Poster", color: "#2A96B7" },
        { name: "RWD", color: "#D8984E" },
      ],
      link: "https://mellifluous-brioche-700f0a.netlify.app/",
      openInNewTab: true,
    },
    {
      date: "October, 2023",
      image: "/mango.png",
      title: "Mango 0n Tree - VIS Design",
      subtitle: "Branding",
      description:
        "VIS design for a local mango smallholder farmer in Kaohsiung, Taiwan.",
      tags: [{ name: "Visual design", color: "#2A96B7" }],
      subtags: [{ name: "Branding", color: "#2A96B7" }],
      link: "/work/MangoOnTree",
      openInNewTab: false,
    },
    {
      date: "January, 2023",
      image: "/younglions.png",
      title: "VC Kungfu",
      subtitle: "Young Lions Competition, 4TH Prize",
      description:
        "The first-ever mobile game to play with your lung, not your thumb.",
      tags: [{ name: "Creative Campaign", color: "#86C5CE" }],
      link: "/work/youngLions",
      openInNewTab: false,
    },
    {
      date: "December, 2023",
      image: "/puffer.jpg",
      title: "UNIQLO-Puffer together",
      subtitle: "Digital Creative Campaign",
      description:
        "A digital creative campaign to encourage people to recycle down jackets.",
      tags: [
        // { name: "UI/UX design", color: "#59656C" },
        { name: "Creative Campaign", color: "#86C5CE" },
        { name: "Visual design", color: "#2A96B7" },
      ],
      link: "/work/PufferVerse",
      openInNewTab: false,
    },
    {
      date: "May, 2023",
      image: "/megabank.png",
      title: "Redesign deliverables-Mega Bank",
      subtitle: "User interface and user experience redesign",
      description:
        "Conduct user testing to refine the exchange process and interface, then finalize with testing.",
      tags: [{ name: "UI/UX design", color: "#59656C" }],
      subtags: [{ name: "APP", color: "#59656C" }],
      link: "/work/MegaBank_Redesign",
      openInNewTab: false,
    },
    {
      date: "September, 2024",
      image: "/有球必In CaseBoard.jpg",
      title: "Sports Win",
      subtitle: "Taipei CodeFest Hackathon - Honorable Mention",
      description:
        "A microservice for booking Taipei sports venues, incorporating team-building to maximize venue usage.",
      tags: [
        { name: "UI/UX design", color: "#59656C" },
        { name: "Frontend coding", color: "#D8984E" },
      ],
      subtags: [{ name: "APP", color: "#59656C" }],
      link: "/work/sports_win",
      openInNewTab: false,
    },
    {
      date: "August, 2024",
      image: "/todo demo.png",
      title: "Simple TODO(s)",
      subtitle: "TODOs WebAPP",
      description:
        "A minimalist to-do list web-app with task management and fascinating theme switching, keeping you productive in any environment.",
      tags: [
        // { name: "UI/UX design", color: "#59656C" },
        { name: "Frontend coding", color: "#D8984E" },
      ],
      subtags: [
        { name: "RWD", color: "#D8984E" }
      ],
      link: "https://simpletodos2024.netlify.app/",
      openInNewTab: true,
    },
  ];

  const [introductionDescription, setIntroductionDescription] = useState(
    <Content>
      <DefaultIcon />
      <TextWrapperSmall>
        <p style={{ margin: "0" }}>
          I'm a
          <span
            style={{
              color: "#2A96B7",
              margin: "0 4px",
              width: "fit-content",
              fontWeight: "500",
            }}
          >
            multidisciplinary designer
          </span>
          passionate about creating innovative, user-centered and good-looking
          things. With a strong background in user experience, I bring
          creativity and precision to every project.
        </p>
      </TextWrapperSmall>
    </Content>
  );
  const [projects, setProjects] = useState(initialProjects); // 初始專案資料
  const [filteredProjects, setFilteredProjects] = useState(initialProjects); // ProjectFilter篩選後的專案資料
  const [originalFilteredProjects, setOriginalFilteredProjects] =
    useState(initialProjects); // SortButton排序後的原始專案資料
  const [isSorted, setIsSorted] = useState(false); // 控制SortButton排序狀態

  /* hero 的滑鼠視差：把游標相對中心的位置正規化成 -1~1 寫進 CSS 變數，
     各元素再依自己的深度乘上不同位移量（見 HeadingIAm / Frame / DivWrapper*）。
     只更新兩個變數、位移交給 CSS，所以不會每幀觸發 React re-render。 */
  const heroRef = useRef(null);
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let pending = null;

    const apply = () => {
      frame = 0;
      if (!pending) return;
      hero.style.setProperty("--mx", pending.x.toFixed(4));
      hero.style.setProperty("--my", pending.y.toFixed(4));
    };

    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      pending = {
        x: ((e.clientX - r.left) / r.width) * 2 - 1,
        y: ((e.clientY - r.top) / r.height) * 2 - 1,
      };
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      pending = { x: 0, y: 0 };
      if (!frame) frame = requestAnimationFrame(apply);
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Div>
      <Header ref={heroRef}>
        <OverlapGroupWrapper>
          <OverlapGroup>
            <HeadingIAm>
              <span
                style={{
                  fontFamily: "serif",
                  fontStyle: "italic",
                  fontSize: "24px",
                  lineHeight: "1",
                }}
              >
                Recent
              </span>
              <div>
                Work
                <span style={{ fontFamily: "serif", fontStyle: "italic" }}>
                  (s)
                </span>
              </div>
            </HeadingIAm>

            <Frame>
              <TextWrapper>UI / UX</TextWrapper>
            </Frame>
            <DivWrapper>
              <TextWrapper>Frontend</TextWrapper>
            </DivWrapper>
            <DivWrapper2>
              <TextWrapper>Visual design</TextWrapper>
            </DivWrapper2>
          </OverlapGroup>
        </OverlapGroupWrapper>

      </Header>

      {/* 深色 hero 之後留一小段實心深色，讓視覺喘一口氣再進馬賽克 */}
      <TransitionGap $dark />

      {/* 馬賽克轉場：實體區塊、跟著頁面捲動。上面接深色、下面接淺色，
          畫布邊走邊由下往上擦成淺色，所以畫面上永遠是
          「深 → 擦到一半的馬賽克 → 淺」，不會出現硬邊界。 */}
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

      {/* 馬賽克之後留一小段實心淺色，再進主要內容 */}
      <TransitionGap />

      <CardsContainer>
        <ProjectFilter
          projects={projects}
          setFilteredProjects={(filtered) => {
            setFilteredProjects(filtered);
            setOriginalFilteredProjects(filtered); // 保存篩選後的原始專案列表
            setIsSorted(false); // 重置排序狀態為未排序
          }}
          setIntroductionDescription={setIntroductionDescription}
        />
        <ProjectDesGroup>
          <IntroductionCard
            description={introductionDescription} // 使用狀態作為內容
          />
          <SortButton
            filteredProjects={filteredProjects}
            originalFilteredProjects={originalFilteredProjects}
            setFilteredProjects={setFilteredProjects}
            isSorted={isSorted}
            setIsSorted={setIsSorted}
          />
        </ProjectDesGroup>
        <CardsContainerWrapper>
          {filteredProjects.map((project, index) => (
            <LargeProjectCard
              key={index}
              date={project.date}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              tags={project.tags}
              subtags={project.subtags}
              link={project.link}
              openInNewTab={project.openInNewTab}
            />
          ))}
        </CardsContainerWrapper>
      </CardsContainer>
      <TextMarquee
        text="Your project could be"
        accent="next"
        gapTop="12vh"
        gapTopSm="8vh"
      />
    </Div>
  );
};
export default Work;

const Div = styled.div`
  // height: 87vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0; /* 清除 margin */
  // overflow: hidden;

  @media (max-width: 440px) {
    padding-top: 0vh;
    //   height: 94vh;
  }
`;

const Header = styled.div`
  //  display: flex;
  //  border-bottom: 1.5px solid;
  //  width: 100%;
  //  border-color: #2A3133;
  //  padding-top: 18vh;
  //  padding-bottom: 15vh;
  //  overflow: hidden;
  //  position: relative;
  display: flex;
  width: 100%;
  background-color: #2A3133; /* 深色 hero，靠像素轉場過渡到下方的淺色內容 */
  min-height: 85vh; /* hero 高度 */

  @media (max-width: 820px) {
    /* 手機版畫面窄，標題與三顆標籤佔的高度相對小很多，
       85vh 會在內容下方留一大片空黑。 */
    min-height: 70vh;
  }
  align-items: center;
  /* 不裁切：像素格最後一列會超出 hero 下緣一點點，讓邊緣是完整方塊
     而不是被切成薄片。shader 漸層本身已經是 absolute inset:0，不受影響。 */
  position: relative; /* 原本是 sticky 釘在頂端，改成隨頁面捲走，靠像素轉場銜接下方內容 */

  //  @media (max-width: 480px) {
  //    padding-top: 15vh;
  //    padding-bottom: 15vh;
  //  }
  //  @media (max-width: 375px) {
  //    padding-top: 12vh;
  //    padding-bottom: 20vh;
  //    height: 8vh;
  //  }
`;

const HeadingIAm = styled.div`
  /* 滑鼠視差：位移量依景深分配 —— 越模糊代表越遠、移動越少。
     transition 造成的延遲讓各層有不同的跟隨速度，層次感更明顯。 */
  transform: translate3d(
    calc(var(--mx, 0) * 8px),
    calc(var(--my, 0) * 5px),
    0
  );
  transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;
  }

  color: #f2f2f2; /* 深色 hero 上的標題（對比 11.83:1） */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 9rem;
  line-height: 1;
  font-weight: 700;
  margin: 0 auto;
  letter-spacing: 0;
  margin-top: 4rem;
  z-index: 999;
  display: flex;
  flex-direction: column;

  @media (max-width: 1440px) {
    font-size: 8rem;
    top: 0px;
    margin-top: 4rem;
  }
  @media (max-width: 772px) {
    font-size: 7rem;
    top: 0px;
  }
  @media (max-width: 648px) {
    white-space: pre-wrap;
    margin-left: 24px;
    font-size: 5rem;
    top: -10vh;
    margin-top: 0rem;
  }
  @media (max-width: 480px) {
    white-space: pre-wrap;
    margin-left: 24px;
    font-size: 64px;
    margin-top: 0rem;
  }
`;

const TransitionGap = styled.div`
  width: 100%;
  height: 12vh;
  background-color: ${({ $dark }) => ($dark ? "#2A3133" : "#f2f2f2")};

  @media (max-width: 820px) {
    height: 6vh; /* 手機版 hero 本身已經縮短，這段再對半 */
  }
`;

const OverlapGroupWrapper = styled.div`
  // background-color: #f2f2f2;
  // max-width: 1440px; /* 設定最大寬度 */
  width: 100%;
  margin: 0 auto; /* 左右居中 */
  display: flex;
  z-index: 3;
  max-height: 40vh;
  /* 上下留白刻意不對稱：整組內容在 hero 裡是垂直置中的，但頂端 58px 被
     固定導覽列蓋住，看起來會偏高。上多下少把它往下推，兩者總和維持 52vh，
     所以 hero 高度與下方的像素轉場銜接都不受影響。 */
  padding-top: 32vh;
  padding-bottom: 20vh;

  @media (max-width: 1024px) {
    padding-top: 20vh;
    padding-bottom: 18vh;
    height: auto;
  }

  @media (max-width: 480px) {
    padding-top: 15vh;
    padding-bottom: 9vh;
    height: auto;
  }
  @media (max-width: 375px) {
    padding-top: 15vh;
    padding-bottom: 10vh;
    height: auto;
  }
`;

const Frame = styled.div`
  /* 滑鼠視差：位移量依景深分配 —— 越模糊代表越遠、移動越少。
     transition 造成的延遲讓各層有不同的跟隨速度，層次感更明顯。 */
  transform: translate3d(
    calc(var(--mx, 0) * 26px),
    calc(var(--my, 0) * 18px),
    0
  );
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;
  }

  align-items: center;
  background-color: #59656c;
  border-radius: 80px;
  display: inline-flex;
  justify-content: center;
  right: 38vw;
  padding: 12px 32px;
  position: absolute;
  top: 10px;
  width: fit-content;

  @media (max-width: 650px) {
    right: 5vw;
    top: -2rem;
    padding: 10px 24px;
  }
`;

const TextWrapper = styled.div`
  color: #ffffff;
  font-family: "Roboto", Helvetica;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;

  @media (max-width: 650px) {
    font-size: 18px;
  }
`;

const DivWrapper = styled.div`
  /* 滑鼠視差：位移量依景深分配 —— 越模糊代表越遠、移動越少。
     transition 造成的延遲讓各層有不同的跟隨速度，層次感更明顯。 */
  transform: translate3d(
    calc(var(--mx, 0) * 10px),
    calc(var(--my, 0) * 7px),
    0
  );
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;
  }

  align-items: center;
  background-color: #D8984E;
  border-radius: 80px;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  right: 14vw;
  padding: 12px 32px;
  position: absolute;
  top: 75px;
  filter: blur(2px);
  width: fit-content;

  @media (max-width: 650px) {
    right: 5vw;
    top: 2.2rem;
    filter: blur(1.2px);
    padding: 10px 24px;
  }
`;

const DivWrapper2 = styled.div`
  /* 滑鼠視差：位移量依景深分配 —— 越模糊代表越遠、移動越少。
     transition 造成的延遲讓各層有不同的跟隨速度，層次感更明顯。 */
  transform: translate3d(
    calc(var(--mx, 0) * 16px),
    calc(var(--my, 0) * 11px),
    0
  );
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: none;
  }

  align-items: center;
  background-color: #2A96B7;
  filter: blur(1px);
  border-radius: 80px;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  right: 65vw;
  padding: 12px 32px;
  position: absolute;
  top: 130px;
  width: fit-content;

  @media (max-width: 650px) {
    top: 100px;
    right: 5vw;
    padding: 10px 24px;
  }
`;

const OverlapGroup = styled.div`
  white-space: nowrap;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  // align-items: center;
  justify-content: center;
  // align-self: center;
  margin: 0 auto;
  // margin-bottom: 20vh;
`;

const CardsContainer = styled.div`
  z-index: 100;
  background-color: #f2f2f2;
  padding-top: 3rem;

  @media (max-width: 820px) {
    /* 往上疊進馬賽克畫布的下半段。

       馬賽克是由下往上翻的，下半部很早就整片變成淺色 —— 內容排在畫布
       後面的話，那片淺色就是使用者看到的一大塊空白。這一區是同色的
       不透明區塊，疊上去剛好蓋掉，畫面上只會剩馬賽克的波前。

       28vh 是「波前剛好貼著內容上緣」的算法值，收得最緊；22vh 往回讓
       約 50px，讓馬賽克結束後有一小段喘息再進篩選列。
       position: relative 才能讓既有的 z-index 生效、蓋過畫布。 */
    position: relative;
    margin-top: -22vh;
  }
  left: 0;
  gap: 3rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    /* For tablets and smaller screens */
    padding-top: 2rem;
    gap: 2rem;
  }

  @media (max-width: 800px) {
    /* For mobile screens */
    flex-direction: column;
  }
`;

// Wrapper for card groups
const CardsContainerWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap; /* Allows wrapping to the next line */

  @media (max-width: 800px) {
    /* For mobile screens */
    width: 90%;
    align-items: center;
  }
`;

const Content = styled.div`
  font-family: serif;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 480px) {
    align-items: flex-start;
  }
`;

const TextWrapperSmall = styled.div`
  text-align: left;
  whitespace: "nowrap";
`;

const DefaultIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="20%"
    height="20%"
    fill="#2A96B7"
    style={{
      maxWidth: "2rem",
      minWidth: "1.5rem",
      maxHeight: "2rem",
      minHeight: "1.5rem",
    }}
  >
    <path d="M232,104a56.06,56.06,0,0,0-56-56H136a24,24,0,0,1,24-24,8,8,0,0,0,0-16,40,40,0,0,0-40,40H80a56.06,56.06,0,0,0-56,56,16,16,0,0,0,8,13.84V128c0,35.53,33.12,62.12,59.74,83.49C103.66,221.07,120,234.18,120,240a8,8,0,0,0,16,0c0-5.82,16.34-18.93,28.26-28.51C190.88,190.12,224,163.53,224,128V117.84A16,16,0,0,0,232,104Zm-77.75,95c-10.62,8.52-20,16-26.25,23.37-6.25-7.32-15.63-14.85-26.25-23.37C77.8,179.79,48,155.86,48,128v-8H208v8C208,155.86,178.2,179.79,154.25,199Z" />
  </svg>
);

const ProjectDesGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  width: fit-content;
  gap: 1.5rem;
`;


