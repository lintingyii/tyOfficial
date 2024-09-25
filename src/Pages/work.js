import react, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { LargeProjectCard, ProjectCard } from "../Components/ProjectCard";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
import Marquee from "react-fast-marquee";
import ProjectFilter from "../Components/ProjectFilter";
import IntroductionCard from "../Components/IntroductionCard";
import SortButton from "../Components/SortButton";

export const Work = () => {
  const initialProjects = [
    {
      date: "November, 2023",
      image: "/arron-nieh.png",
      title: "Aaron Nieh : Behind the Covers",
      subtitle: "Lecture Visual Identity",
      description:
        'The key visual poster and event website for Aaron Nieh’s lecture, "Behind the Covers," at NCCU.',
      tags: [
        { name: "Graphic design", color: "#D58CFE" },
        { name: "Frontend coding", color: "#F7883D" },
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
      tags: [{ name: "Graphic design", color: "#D58CFE" }],
      link: "https://tome.app/tingyilin/brand-guidelines-copy-cm0xur3fw082h8d3gyahzjrak",
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
        // { name: "UI/UX design", color: "#7D8991" },
        { name: "Creative Campaign", color: "#86C5CE" },
        { name: "Graphic design", color: "#D58CFE" },
      ],
      link: "https://tome.app/tingyilin/niqlo-pufferverse-cm0l048t70ob76j1jun5bx1iq",
      openInNewTab: false,
    },
    {
      date: "May, 2023",
      image: "/megabank.png",
      title: "Redesign deliverables-Mega Bank",
      subtitle: "User interface and user experience redesign",
      description:
        "Conduct user testing to refine the exchange process and interface, then finalize with testing.",
      tags: [{ name: "UI/UX design", color: "#7D8991" }],
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
        { name: "UI/UX design", color: "#7D8991" },
        { name: "Frontend coding", color: "#F7883D" },
      ],
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
        { name: "UI/UX design", color: "#7D8991" },
        { name: "Frontend coding", color: "#F7883D" },
      ],
      link: "https://simpletodos2024.netlify.app/",
      openInNewTab: true,
    },
    // {
    //   date: "March, 2024",
    //   image: "/hivebee/hb demo.png",
    //   title: "Hive Bee - We made donations enjoyable",
    //   subtitle: "SaaS product design",
    //   description:
    //     "Created unique event experiences that made interactions between streamers and audiences more lively and engaging.",
    //   tags: [
    //     { name: "UI/UX design", color: "#7D8991" },
    //   ],
    //   link: "/work/HiveBee",
    //   openInNewTab: false,
    // },
  ];

  const [introductionDescription, setIntroductionDescription] = useState(
    <Content>
      <DefaultIcon />
      <TextWrapperSmall>
        <p style={{ margin: "0" }}>
          I'm a
          <span
            style={{
              color: "#000fff",
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

  const StyledShaderGradientCanvas = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;

    @media (max-width: 1040px) {
      transform: scale(0.5);
    }
  `;

  return (
    <Div>
      <Header>
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
              <TextWrapper>Graphic design</TextWrapper>
            </DivWrapper2>
          </OverlapGroup>
        </OverlapGroupWrapper>
        <ShaderGradientCanvas
          importedFiber={{ ...fiber, ...drei, ...reactSpring }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overFlow: "hidden",
            zIndex: 1,
          }}
        >
          <ShaderGradient
            control="props"
            type="plane"
            animate="on"
            uDensity={1}
            uFrequency={0.5}
            uStrength={2}
            uSpeed={0.4}
            cameraZoom={1} // 固定缩放比例
            zoomOut={false}
            toggleAxis={false}
            enableTransition={false}
            cDistance={10}
            // positionX={0}
            color1="#809bd6"
            color2="#F7883D"
            color3="#D58CFE"
            grain="on"
            lightType="3d"
            grainBlending={0.2}
            brightness={1.5}
          />
        </ShaderGradientCanvas>
      </Header>

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
              link={project.link}
              openInNewTab={project.openInNewTab}
            />
          ))}
        </CardsContainerWrapper>
      </CardsContainer>
      <Marquee speed={80} style={{ backgroundColor: "#f2f2f2" }}>
        <Marqueetext>
          <MarqueeSpan>Let's work together 👀</MarqueeSpan>
          <MarqueeSpan>Let's work together 👀</MarqueeSpan>
          <MarqueeSpan>Let's work together 👀</MarqueeSpan>
          <MarqueeSpan>Let's work together 👀</MarqueeSpan>
          <MarqueeSpan>Let's work together 👀</MarqueeSpan>
          <MarqueeSpan>Let's work together 👀</MarqueeSpan>
          <MarqueeSpan>Let's work together 👀</MarqueeSpan>
          <MarqueeSpan>Let's work together 👀</MarqueeSpan>
        </Marqueetext>
      </Marquee>
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
  //  border-color: #333;
  //  padding-top: 18vh;
  //  padding-bottom: 15vh;
  //  overflow: hidden;
  //  position: relative;
  display: flex;
  // border-bottom: 1.5px solid #333;
  width: 100%;
  overflow: hidden;
  position: sticky; /* 使用 sticky */
  top: 0; /* 固定在顶部 */

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
  color: #333333;
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

const OverlapGroupWrapper = styled.div`
  // background-color: #f2f2f2;
  // max-width: 1440px; /* 設定最大寬度 */
  width: 100%;
  margin: 0 auto; /* 左右居中 */
  display: flex;
  z-index: 3;
  max-height: 40vh;
  padding-top: 28vh;
  padding-bottom: 24vh;

  @media (max-width: 1024px) {
    padding-top: 20vh;
    padding-bottom: 18vh;
    height: auto;
  }

  @media (max-width: 480px) {
    padding-top: 15vh;
    padding-bottom: 15vh;
    height: auto;
  }
  @media (max-width: 375px) {
    padding-top: 15vh;
    padding-bottom: 18vh;
    height: auto;
  }
`;

const Frame = styled.div`
  align-items: center;
  background-color: #7d8991;
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
  align-items: center;
  background-color: #ff6434;
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
  align-items: center;
  background-color: #d58cfe;
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
  left: 0;
  gap: 3rem;
  border-top: 1.5px solid #333;
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
    fill="#000fff"
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

const Marqueetext = styled.div`
  font-family: serif;
  font-size: 2rem;
  line-height: 1.6;
  padding: 24px;
  background-color: #333;
  color: #fff;
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-top: 12vh;

  @media (max-width: 480px) {
    font-size: 1.6rem;
    line-height: 1.4;
    padding: 12px;
    margin-top: 4rem;
  }
`;

const MarqueeSpan = styled.div`
  width: 100%;
  display: flex;
  margin-left: 6px;
`;
