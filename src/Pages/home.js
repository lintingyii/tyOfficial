import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Marquee from "react-fast-marquee";
import Footer from "../Components/footer";
import ServiceCardComponent from "../Components/ServiceCard";
import TestimonialCard from "../Components/TestimonialCard";
import { LargeProjectCard } from "../Components/ProjectCard";

function MyComponent(props) {
  const pinRef = useRef(null);
  const meRef = useRef(null);
  const decoRef = useRef(null); // ← 新增
  const hintRef = useRef(null); // 未捲動時的向下捲動提示

  useEffect(() => {
    const pin = pinRef.current;
    const me = meRef.current;
    const deco = decoRef.current;
    const hint = hintRef.current;
    if (!pin || !me || !deco) return;
    let ticking = false;

    const update = () => {
      const total = pin.offsetHeight - window.innerHeight;
      const scrolled = Math.min(
        Math.max(-pin.getBoundingClientRect().top, 0),
        total,
      );
      const progress = total > 0 ? Math.min(scrolled / (total * 0.8), 1) : 1;

      // 把 progress 換算成某一段區間內的 0~1（超出範圍就夾住）
      const phase = (start, end) =>
        Math.min(Math.max((progress - start) / (end - start), 0), 1);

      const reveal = (el, p) => {
        el.style.opacity = p;
        el.style.transform = `translateY(${(1 - p) * 40}px)`;
      };

      // 藍底圖不吃 scroll，改成載入後就淡入（見 BgWrap 的 animation）
      // 這裡只負責：人物 → 白框。原本兩段重疊 0.10，改成中間留 0.12 的空檔，
      // 人像先站定、隔一下白框才進來，兩個動作才分得開。
      reveal(me, phase(0, 0.5));
      reveal(deco, phase(0.62, 1));

      /* 捲動提示：一動就淡出。用實際捲動距離（px）而不是 progress，
         因為 progress 的分母是 140vh 的釘選長度，40px 只佔 5%，
         換算成 phase() 會太不直覺。 */
      if (hint) {
        const hp = Math.min(Math.max(1 - scrolled / 40, 0), 1);
        hint.style.opacity = hp;
        hint.style.transform = `translateX(-50%) translateY(${(1 - hp) * 10}px)`;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Projects = [
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
      tags: [{ name: "UI/UX design", color: "#59656C" }],
      subtags: [{ name: "SaaS", color: "#59656C" }],
      link: "/work/AInsight",
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
  ];

  return (
    <Div>
      <BannerPin ref={pinRef}>
        <Banner>
          <BgWrap>
            <BgImg src="/banner-bg.png" alt="" aria-hidden="true" />
          </BgWrap>
          <picture ref={meRef}>
            <source
              media="(max-width: 820px)"
              srcSet="/banner-2-mobile-1.png"
            />
            <img src="/banner-me.png" alt="Main Page" />
          </picture>
          <DecoImg
            ref={decoRef}
            src="/banner-deco.png"
            alt=""
            aria-hidden="true"
          />
          <ScrollHint ref={hintRef} aria-hidden="true">
            <ScrollHintInner>
              {/* 圖形是 Figma 匯出的原檔，只把寫死的色碼換成 --hint-color */}
              <svg viewBox="0 0 53 53" fill="none">
                <circle cx="26.5" cy="26.5" r="26" stroke="var(--hint-color)" />
                <path
                  d="M27.1667 43L28 10H25L25.8333 43H27.1667Z"
                  fill="var(--hint-color)"
                />
                <path
                  d="M12 30.0441C18.2143 30.0441 26.5 33.3598 26.5 43.2647"
                  stroke="var(--hint-color)"
                  strokeWidth="2"
                />
                <path
                  d="M41 30.0441C34.7857 30.0441 26.5 33.3598 26.5 43.2647"
                  stroke="var(--hint-color)"
                  strokeWidth="2"
                />
              </svg>
            </ScrollHintInner>
          </ScrollHint>
          {/* ↑ 放在 picture 後面，DOM 順序也比較靠後 */}
        </Banner>
      </BannerPin>

      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#f2f2f2",
          zIndex: "999",
        }}
      >
        <OverlapGroupWrapper>
          <OverlapGroup>
            <HeadingIAm>
              HI 👋🏻
              <br />I am Ting-yi, Lin
              <Div11>
                © Multidisciplinary designer based in Taipei, Taiwan
              </Div11>
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

        <TextWrapper3>
          <p>
            Hello👋🏻, I am Ting-yi Lin, you can call me Morgan, a creative and
            multidisciplinary designer. Venturing into <Span>UI / UX</Span>, my
            understanding of <Span>front-end skills</Span> combined with keen
            observational insights, emphasizes a practical approach to design,
            blending aesthetics and creativity with <Span>user-centric</Span>{" "}
            solutions.
          </p>
        </TextWrapper3>
      </div>

      <div style={{ width: "100%", backgroundColor: "#f2f2f2", zIndex: "999" }}>
        <CircleContainer>
          <div className="circle"></div>
        </CircleContainer>
      </div>

      <IndexContainer>
        <OverlapGroupWrapper2>
          <OverlapGroup2>
            {/* 座標以共用邊界線為準：x 0 / 444 / 497 / 942 / 993 / 1440，
                y 依各欄切分。每塊往右／往下多 1px，讓相鄰的兩條 1px 邊線完全重合，
                看起來是一條共用線 —— 既沒有縫也不會變成 2px 粗。 */}
            <Rectangle height={107} left={444} top={0} width={54} />
            <Rectangle height={107} left={444} top={106} width={54} />
            <Rectangle height={265} left={942} top={0} width={52} />
            <Rectangle height={266} left={942} top={264} width={52} />
            <Rectangle height={107} left={444} top={212} width={54} />
            <Rectangle height={107} left={444} top={318} width={54} />
            <Rectangle height={107} left={444} top={424} width={54} />
            <Rectangle height={105} left={444} top={530} width={54} />
            <Rectangle height={108} left={0} top={0} width={445} />
            <Rectangle height={106} left={497} top={529} width={497} />
            <Rectangle height={108} left={993} top={0} width={447} />
            {/* <ColoredRectangle color="#D8984E" height={528} left={0} top={107} width={443} />
          <ColoredRectangle color="#2A96B7" height={528} left={498} top={0} width={443} />
          <ColoredRectangle color="#59656c" height={528} left={993} top={107} width={447} /> */}
            <HoverableDiv ink="#59656c">
              <ColoredRectangle
                color="#59656c"
                height={528}
                left={993}
                top={107}
                width={447}
              />
              <UIUXProject>UI / UX Design</UIUXProject>
              <UIUXProject1>
                As an UI/UX designer, I harmonize form and function to create
                visually captivating interfaces that guide users through
                purposeful journeys.
                <br />
                With extensive cross-industry research, I tailor solutions to
                diverse user needs.
                <br />
                Collaborating with cross-functional teams, I prioritize
                user-centric design, informed by thorough research, seamlessly
                integrating experiences into users' lives.
              </UIUXProject1>
            </HoverableDiv>

            <HoverableDiv ink="#2A96B7">
              <ColoredRectangle
                color="#2A96B7"
                height={530}
                left={497}
                top={0}
                width={446}
              />
              <GraphicDesign>Graphic Design</GraphicDesign>
              <GraphicDesign1>
                My journey in graphic design is driven by the belief that each
                pixel matters.
                <br />
                From conceptualization to execution, I strive for a harmonious
                balance between form and function. Every color, typeface, and
                image is carefully chosen to convey a message, evoke emotions,
                and create a lasting impression.
              </GraphicDesign1>
            </HoverableDiv>

            <HoverableDiv ink="#D8984E">
              <ColoredRectangle
                color="#D8984E"
                height={528}
                left={0}
                top={107}
                width={445}
              />
              <TextWrapper2>Frontend Coding</TextWrapper2>
              <TextWrapper2n1>
                I find joy in translating creative visions into seamless,
                interactive digital experiences. My coding journey is a
                continuous exploration of the ever-evolving web technologies.
                <br />
                Proficient in HTML, CSS, and React.js , I thrive on the
                challenge of bringing design concepts to life while ensuring a
                user-friendly and visually appealing interface.
              </TextWrapper2n1>
            </HoverableDiv>
          </OverlapGroup2>
        </OverlapGroupWrapper2>
      </IndexContainer>

      {/* <Div6>
        <Div7>
          UI / UX Design
          <ContentMob>
              As a UI/UX designer, I harmonize form and function to create visually captivating interfaces that guide users through purposeful journeys. 
              <br />
              With extensive cross-industry research, I tailor solutions to diverse user needs. 
              <br />
              Collaborating with cross-functional teams, I prioritize user-centric design, informed by thorough research, seamlessly integrating experiences into users' lives.
          </ContentMob>
        </Div7>
        <Div8>Graphic Design
          <ContentMob>
              My journey in graphic design is driven by the belief that each pixel matters. 
              <br />
              From conceptualization to execution, I strive for a harmonious balance between form and function. Every color, typeface, and image is carefully chosen to convey a message, evoke emotions, and create a lasting impression.
          </ContentMob>
        </Div8>
        <Div9>Frontend Coding
          <ContentMob>
              I find joy in translating creative visions into seamless, interactive digital experiences. 
              My coding journey is a continuous exploration of the ever-evolving web technologies. 
              <br />
              Proficient in HTML, CSS, and React.js , I thrive on the challenge of bringing design concepts to life while ensuring a user-friendly and visually appealing interface.
          </ContentMob>
        </Div9>
    </Div6> */}

      <Div6>
        <FlipCard
          title="UI / UX Design"
          content="As a UI/UX designer, I harmonize form and function to create visually captivating interfaces that guide users through purposeful journeys. With extensive cross-industry research, I tailor solutions to diverse user needs. Collaborating with cross-functional teams, I prioritize user-centric design, informed by thorough research, seamlessly integrating experiences into users' lives."
          bgColor="#59656C"
        />
        <FlipCard
          title="Graphic Design"
          content="My journey in graphic design is driven by the belief that each pixel matters. From conceptualization to execution, I strive for a harmonious balance between form and function. Every color, typeface, and image is carefully chosen to convey a message, evoke emotions, and create a lasting impression."
          bgColor="#2A96B7"
        />
        <FlipCard
          title="Frontend Coding"
          content="I find joy in translating creative visions into seamless, interactive digital experiences. My coding journey is a continuous exploration of the ever-evolving web technologies. Proficient in HTML, CSS, and React.js, I thrive on the challenge of bringing design concepts to life while ensuring a user-friendly and visually appealing interface."
          bgColor="#D8984E"
        />
      </Div6>

      <Marquee speed={80}>
        <Marqueetext>
          Let's make something <MarqueeSpan>cool</MarqueeSpan>· Let's make
          something <MarqueeSpan>cool</MarqueeSpan> · Let's make something{" "}
          <MarqueeSpan>cool</MarqueeSpan> · Let's make something{" "}
          <MarqueeSpan>cool</MarqueeSpan> · Let's make something{" "}
          <MarqueeSpan>cool</MarqueeSpan> · Let's make something{" "}
          <MarqueeSpan>cool</MarqueeSpan> ·
        </Marqueetext>
      </Marquee>

      <Section>
        <CardsContainer>
          <SectionTitleSticky>
            <div style={{ display: "flex" }}>
              Voice
              <span
                style={{
                  fontFamily: "serif",
                  fontStyle: "italic",
                }}
              >
                (s)
              </span>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>of Trust</div>
          </SectionTitleSticky>
          <TestimonialCard
            zIndex={1}
            bgImage="./testimonial-1.png"
            content="Ting-yi has excellent communication skills. During interviews, her keen perception consistently guides the conversation, helping us quickly pinpoint key insights from users. She is a great asset to any team."
            color="#2A96B7"
            person="Temu Chen, Project Manager @KOL.Tech"
            rotate="2deg"
          />
          <TestimonialCard
            zIndex={2}
            bgImage="./testimonial-3.png"
            content="Ting-yi has a high standard for visual aesthetics and is well-versed in front-end programming languages. This enables her designs to be both thoughtfully crafted and effectively implemented in development, making collaboration a truly enjoyable experience."
            color="#F7883D"
            person="Mike Lin, Frontend Developer"
          />
          <TestimonialCard
            zIndex={3}
            bgImage="./testimonial-2.png"
            content="She integrates insights to propose innovative solutions. Her skill in clarifying user and market needs during prototyping leads to streamlined processes and effective interface designs. With a collaborative spirit, Ting-yi excels in enhancing team dynamics, making her a valuable asset in cross-functional team."
            color="#2A96B7"
            person="Ethan Deng, Product Design Lead @Futurenest"
            rotate="-2deg"
          />
        </CardsContainer>
      </Section>
      {/* <Section>
        <SectionTitle>
          <div style={{ display: "flex" }}>
            Service
            <span
              style={{
                fontFamily: "serif",
                fontStyle: "italic",
              }}
            >
              (s)
            </span>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            at
            <span
              style={{
                fontFamily: "serif",
                fontStyle: "italic",
              }}
            >
              A
            </span>
            glance
          </div>
        </SectionTitle>
        
        <CardsContainer>
          <ServiceCardComponent zIndex={1}>
            <creattie-embed
              src="https://d1jj76g3lut4fe.cloudfront.net/saved_colors/98509/YUwgGNKFpKppqKV4.json"
              delay="1"
              speed="100"
              frame_rate="24"
              stroke_width="10.5"
              trigger="loop"
              style={{
                width: embedWidth,
                zIndex: "999",
                display: "flex",
              }}
            ></creattie-embed>
            <ServiceContent>Visual Communication</ServiceContent>
            <ServiceDes>
              Visual Identity Design • Design for Print • Packaging • Illustration
            </ServiceDes>
          </ServiceCardComponent>

          <ServiceCardComponent zIndex={2}>
            <creattie-embed
              src="https://d1jj76g3lut4fe.cloudfront.net/saved_colors/98509/Wj56MkmSXUliw7Th.json"
              delay="0"
              speed="100"
              frame_rate="24"
              stroke_width="10.5"
              trigger="loop"
              style={{
                width: embedWidth,
                zIndex: "999",
                display: "flex",
              }}
            ></creattie-embed>
            <ServiceContent>Digital Content</ServiceContent>
            <ServiceDes>
              Digital Experience Design • Web Design & Development • Responsive Design
            </ServiceDes>
          </ServiceCardComponent>

          <ServiceCardComponent zIndex={3}>
            <creattie-embed
              src="https://d1jj76g3lut4fe.cloudfront.net/saved_colors/98509/GiAN4lbwlxqpC71u.json"
              delay="0"
              speed="100"
              frame_rate="24"
              stroke_width="10.5"
              trigger="loop"
              style={{
                width: embedWidth,
                zIndex: "999",
                display: "flex",
              }}
            ></creattie-embed>
            <ServiceContent>UI / UX</ServiceContent>
            <ServiceDes>
              User Interface Design • User Research • Design System • Interactive Prototype
            </ServiceDes>
          </ServiceCardComponent>
        </CardsContainer>
      </Section> */}

      <div
        style={{
          width: "100%",
          display: "flex",
          backgroundColor: "#f2f2f2",
          zIndex: "999",
          justifyContent: "center",
          padding: "4rem",
          boxSizing: "border-box",
        }}
      >
        <Flower stroke="#2A96B7" viewBox="0 0 24 24">
          <path d=" M12 2.5c4 0 1.7 6.2 1.7 6.2s3.7-5.4 6-2.5-3.7 5.3-3.7 5.3 6.5-.6 5.6 3c-.8 3.7-6.5.4-6.5.4s4.7 4.7 1.2 6.4c-3.6 1.6-4.3-4.9-4.3-4.9s-.8 6.5-4.3 4.9c-3.4-1.7 1.2-6.4 1.2-6.4s-5.7 3.7-6.5-.4c-1-4 5.6-3 5.6-3s-6-2-3.7-5.3c2.2-3.3 5.9 2.5 5.9 2.5S8 2.5 12 2.5Z" />
        </Flower>
        <Flower fill="#2A96B7" stroke="#2A96B7" viewBox="0 0 24 24">
          <path d=" M12 2.5c4 0 1.7 6.2 1.7 6.2s3.7-5.4 6-2.5-3.7 5.3-3.7 5.3 6.5-.6 5.6 3c-.8 3.7-6.5.4-6.5.4s4.7 4.7 1.2 6.4c-3.6 1.6-4.3-4.9-4.3-4.9s-.8 6.5-4.3 4.9c-3.4-1.7 1.2-6.4 1.2-6.4s-5.7 3.7-6.5-.4c-1-4 5.6-3 5.6-3s-6-2-3.7-5.3c2.2-3.3 5.9 2.5 5.9 2.5S8 2.5 12 2.5Z" />
        </Flower>
        <Flower stroke="#2A96B7" viewBox="0 0 24 24">
          <path d=" M12 2.5c4 0 1.7 6.2 1.7 6.2s3.7-5.4 6-2.5-3.7 5.3-3.7 5.3 6.5-.6 5.6 3c-.8 3.7-6.5.4-6.5.4s4.7 4.7 1.2 6.4c-3.6 1.6-4.3-4.9-4.3-4.9s-.8 6.5-4.3 4.9c-3.4-1.7 1.2-6.4 1.2-6.4s-5.7 3.7-6.5-.4c-1-4 5.6-3 5.6-3s-6-2-3.7-5.3c2.2-3.3 5.9 2.5 5.9 2.5S8 2.5 12 2.5Z" />
        </Flower>
      </div>

      <Section style={{ paddingTop: "2rem" }}>
        <SectionTitle
          style={{ flexDirection: "row", justifyContent: "center" }}
        >
          Feature
          <span
            style={{
              fontFamily: "serif",
              fontStyle: "italic",
            }}
          >
            (s)
          </span>
        </SectionTitle>
        <CardsContainerWrapper>
          {Projects.map((project, index) => (
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
        <a
          href="/work"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <ViewMoreButton>
            View More Works
            <EyeIcon />
          </ViewMoreButton>
        </a>
      </Section>
    </Div>
  );
}
export default MyComponent;

const Div = styled.div`
  background-color: #f2f2f2;
  display: flex;
  // padding-top: 8vh;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 440px) {
    // padding-top: 6vh;
  }
`;

// const Banner = styled.picture`
//   display: flex;
//   justify-content: center;
//   z-index: 0;
//   overflow: hidden;
//   position: sticky; /* 使用 sticky */
//   top: 0;

//   img {
//     width: 100%;
//     display: flex;
//     justify-content: right;

//     @media (max-width: 820px) {
//       border: none;
//       width: 100%;
//       padding-top: 6vh;
//     }
//     @media (max-width: 480px) {
//       padding-top: 0vh;
//     }
//   }
// `;

/* 桌機的 banner 由三張同尺寸（4152×1977）的圖疊成，必須像素對齊。
   用同一組 contain + bottom 規則：視窗矮就等比縮到裝得下（左右露出的底色與圖片邊緣同為
   #2A96B7，看不出來），視窗高就靠底對齊，維持人物貼齊畫面底部的構圖。 */
const bannerLayerFit = css`
  @media (min-width: 821px) {
    box-sizing: border-box;
    padding-top: var(--banner-nav-gap, 58px); /* 讓出固定導覽列的高度，視窗矮時引言才不會被蓋住 */
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: bottom center;
  }
`;

const BannerPin = styled.div`
  position: relative;
  width: 100%; /* 外層是 column flex，寬度不能靠內容撐（picture 在桌機是絕對定位） */
  height: 140vh; /* ← 釘選時長：越高，banner 被固定的時間越久。想短一點改 160vh 之類 */
`;

const Banner = styled.div`
  --banner-nav-gap: 58px; /* App.js 的固定導覽列高度 */
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;

  picture {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end; /* picture 內也置底 */
    opacity: 0; /* 交給 JS 控制浮現 */
    transform: translateY(40px);
    will-change: transform, opacity;
  }

  picture img {
    width: 100%;
    display: block;
    ${bannerLayerFit}
    @media (max-width: 820px) {
      padding-top: 6vh;
    }
    @media (max-width: 480px) {
      padding-top: 0;
    }
  }

  @media (min-width: 821px) {
    background-color: #2a96b7; /* 等比縮小後左右的補色 */

    picture {
      position: absolute;
      inset: 0;
      width: auto;
    }
  }
`;
const bgFadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const BgWrap = styled.div`
  position: absolute;
  inset: 0;                  /* 撐滿整個 Banner */
  z-index: 0;                /* 底層 */
  display: flex;
  justify-content: center;   /* 圖片水平置中 */
  align-items: center;       /* 圖片垂直置中 → 過高時上下留白 */
  background-color: #2A96B7; /* 上下（含左右）補色 */
  overflow: hidden;
  /* 不等 scroll，載入後直接淡入 */
  animation: ${bgFadeIn} 0.8s ease-out both;
  will-change: transform, opacity;
  pointer-events: none;
`;

const BgImg = styled.img`
  width: 100%;     /* 撐滿寬度；圖比容器矮時上下露出底色 */
  height: auto;    /* 維持原始比例 */
  display: block;
  object-fit: contain;
  ${bannerLayerFit}
`;
// const BgImg = styled.img`
//   position: absolute;
//   bottom: 0;
//   // left: 50%;
//   // transform: translateX(-50%) translateY(40px);
//   width: 100%;
//   height: auto;
//   object-fit: contain;
//   z-index: 0;
//   opacity: 0;
//   will-change: transform, opacity;
//   pointer-events: none;
//   padding-top: 6vh;
//   background-color: #2a96b7;
// `;

const DecoImg = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  object-fit: contain;
  ${bannerLayerFit}
  @media (min-width: 821px) {
    inset: 0;
  }
  z-index: 2;
  opacity: 0;
  will-change: transform, opacity;
  pointer-events: none;
`;

/* ---- 未捲動時的「向下捲動」提示（依 Figma：圓框 + 弧線箭頭） ---- */
const hintFadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const hintFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(6px); }
`;

const ScrollHint = styled.div`
  --hint-color: #D8984E; /* 依 Figma 的橘色；與 resume 波浪線同一支 */

  position: absolute;
  left: 50%;
  bottom: 18%; /* 壓在人像將要升起的位置下方，不跟引言擠在一起 */
  transform: translateX(-50%);
  z-index: 4; /* 在底圖與人像之上；白框浮現時它早就淡出了 */
  pointer-events: none;
  will-change: opacity, transform;

  @media (max-width: 480px) {
    bottom: 15%; /* 手機版導覽列在畫面下方，留一點餘裕不要疊到 */
  }
`;

const ScrollHintInner = styled.div`
  /* 進場延遲 0.9s，讓藍底圖的 bgFadeIn（0.8s）先跑完。
     外層 opacity 由 scroll handler 控制、內層只管進場與浮動，
     兩層相乘所以互不覆蓋（inline style 蓋不過 animation）。 */
  animation:
    ${hintFadeIn} 0.6s ease-out 0.9s both,
    ${hintFloat} 2.4s ease-in-out 1.5s infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: ${hintFadeIn} 0.01s linear both;
  }

  svg {
    display: block;
    width: 53px; /* Figma 原始尺寸 */
    height: 53px;
  }

  @media (max-width: 480px) {
    svg {
      width: 44px;
      height: 44px;
    }
  }
`;

const typing = keyframes`
  from { width: 0; }
`;

const caret = keyframes`
  50% { border-color: transparent; }
`;

const Div11 = styled.div`
  font:
    400 20px system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  color: #2A96B7;
  text-align: left;
  display: flex;
  position: absolute;
  margin-top: 24px;
  margin-left: 4px;
  width: 453px; /* 字重改 400 後文字實寬 450px；原本 488 是配 700 粗體的 */
  height: 24px;
  overflow: hidden;
  border-right: 0.1em solid;
  animation:
    ${typing} 5s steps(45),
    ${caret} 1s steps(1) infinite;

  @media (max-width: 772px) {
    margin-left: 0px;
    font-size: 18px;
    width: 418px;
    height: 20px;
    border-right: 0.1em solid;
    margin-top: 16px;
  }
  @media (max-width: 648px) {
    margin-left: 0px;
    font-size: 16px;
    width: 378px;
    height: 20px;
    border-right: 0.1em solid;
    margin-top: 16px;
    white-space: pre-wrap;
  }
  @media (max-width: 430px) {
    margin-left: 0px;
    font-size: 16px;
    line-height: 22px;
    width: 325px;
    height: 40px;
    border-right: 0.1em solid;
    margin-top: 16px;
    white-space: pre-wrap;
    border-right: 0em;
  }
`;

const OverlapGroupWrapper = styled.div`
  background-color: #f2f2f2;
  // max-width: 1440px;
  width: 100%;
  margin: 0 auto; /* 左右居中 */
  // flex-direction: column;
  // margin-top: 1vh;
  position: relative;
  margin-bottom: 15vh;
  padding-top: 10vh;
  border-top: 1.5px solid;
  border-color: #2A3133;

  @media (max-width: 1440px) {
    // max-height: 25vh;
    // margin-top: 10vh;
    margin-bottom: 12vh;
  }

  @media (max-width: 1020px) {
    // max-height: 18vh;
    // margin-top: 10vh;
    margin-bottom: 15vh;
  }

  @media (max-width: 648px) {
    // height: 10vh;
    // margin-top: 20vh;
    // margin-bottom: 10vh;
  }

  @media (max-width: 480px) {
    // height: 12vh;
    // margin-top: 15vh;
    padding-top: 15vh;
    margin-bottom: 0vh;
    margin-top: 0vh;
  }

  @media (max-width: 375px) {
    // height: 16vh;
    // margin-top: 15vh;
    margin-bottom: 0vh;
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

const HeadingIAm = styled.div`
  color: #2A3133;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  font-size: 8rem;
  font-weight: 700;
  // height: 226px;
  margin: 0 auto;
  letter-spacing: 0;
  position: relative;
  z-index: 999;
  backgroung-color: #f2f2f2;

  @media (max-width: 1440px) {
    font-size: 96px;
    top: 0px;
  }
  @media (max-width: 772px) {
    font-size: 84px;
    top: 0px;
  }
  @media (max-width: 648px) {
    white-space: pre-wrap;
    margin-left: 24px;
    font-size: 64px;
    top: -10vh;
  }
  @media (max-width: 390px) {
    white-space: pre-wrap;
    margin-left: 24px;
    font-size: 56px;
    top: -10vh;
  }
`;

const Frame = styled.div`
  align-items: center;
  background-color: #59656c;
  border-radius: 80px;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  right: 38vw;
  padding: 12px 32px;
  position: absolute;
  top: 35px;
  @media (max-width: 990px) {
    display: none;
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
  @media (max-width: 990px) {
    display: none;
  }
`;

const DivWrapper = styled.div`
  align-items: center;
  background-color: #d8984e;
  border-radius: 80px;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  right: 14vw;
  padding: 12px 32px;
  position: absolute;
  top: 75px;
  filter: blur(2px);
  @media (max-width: 990px) {
    display: none;
  }
`;

const DivWrapper2 = styled.div`
  align-items: center;
  background-color: #2a96b7;
  filter: blur(1px);
  border-radius: 80px;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  left: 10vw;
  padding: 12px 32px;
  position: absolute;
  top: 130px;
  @media (max-width: 990px) {
    display: none;
  }
`;

const CircleContainer = styled.div`
  --circleSize: 50px;
  --spinSpeed: 5s;
  --color1: #2A96B7; /* 陰影顏色，由下方 cycleColor 輪替 */
  --color2: #f2f2f2; /* 亮面顏色 */

  width: 100%; /* 覆盖整个屏幕宽度 */
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0; /* 上下呼吸空間，原本只有 padding-bottom: 5vh */

  @media (max-width: 820px) {
    padding: 72px 0;
  }

  /* 三色輪替：在「完全實心」的那一瞬間換色，一輪 15s（3 次翻面）。
     翻面週期 5s 的相位：0s 亮面全覆蓋 → 1.25s 彩色面側轉看不見 →
     2.5s 完全實心上色 → 3.75s 轉回亮面。
     選 2.5s 是因為那一刻整顆球（:after 圓盤 + 外框 box-shadow）全都是 --color1，
     底下的 :before 半圓完全被蓋住，所以換色是整顆一起換、不會出現半邊跳色。
     15s 內的斷點：2.5s = 16.667%、7.5s = 50%、12.5s = 83.333%。
     --color1 已在 App.css 用 @property 註冊成 <color> 才動得了；
     成對的 keyframes 讓它硬切而不是漸變，維持色票乾淨。 */
  animation: cycleColor calc(var(--spinSpeed) * 3) infinite;

  @keyframes cycleColor {
    0%,
    16.666% {
      --color1: #59656C;
    }
    16.667%,
    49.999% {
      --color1: #2A96B7;
    }
    50%,
    83.332% {
      --color1: #F7883D;
    }
    83.333%,
    100% {
      --color1: #59656C;
    }
  }

  .circle {
    height: var(--circleSize);
    width: var(--circleSize);
    border-radius: var(--circleSize);
    position: relative;
    overflow: hidden;
    background-color: var(--color2);
    transform: rotate(-21deg);
    box-shadow: 0 0 0 1px var(--color1);
  }

  @keyframes rotateAll {
    100% {
      transform: rotate(359deg);
    }
  }

  .circle:before,
  .circle:after {
    content: "";
    display: var(--color2);
    height: var(--circleSize);
    position: absolute;
  }

  .circle:before {
    width: calc(var(--circleSize) / 2);
    border-radius: 0 var(--circleSize) var(--circleSize) 0;
    right: 0;
    border-radius: 0;
    background-color: var(--color1);
    animation: fillEffect var(--spinSpeed) calc(var(--spinSpeed) / 4) steps(2)
      infinite;
    transform: translateX(0);
  }

  .circle:after {
    width: var(--circleSize);
    border-radius: var(--circleSize);
    animation: rotateEffect var(--spinSpeed) infinite linear;
    will-change: transform;
    z-index: 90;
  }

  @keyframes rotateAll {
    100% {
      transform: rotate(359deg);
    }
  }

  @keyframes fillEffect {
    50% {
      left: 0;
    }
  }

  @keyframes rotateEffect {
    0% {
      transform: scale(1, 1);
      background-color: var(--color2);
      box-shadow: 0 0 0 2px var(--color2);
    }
    25% {
      transform: scale(0, 1);
      background-color: var(--color2);
      box-shadow: 0 0 0 2px var(--color2);
    }
    25.01% {
      background-color: var(--color1);
      box-shadow: 0 0 0 2px var(--color1);
    }
    50% {
      transform: scale(1, 1);
    }
    75% {
      transform: scale(0, 1);
      background-color: var(--color1);
      box-shadow: 0 0 0 2px var(--color1);
    }
    75.01% {
      background-color: var(--color2);
      box-shadow: 0 0 0 2px var(--color2);
    }
    100% {
      transform: scale(1, 1);
      background-color: var(--color2);
      box-shadow: 0 0 0 2px var(--color2);
    }
  }
`;
const IndexContainer = styled.div`
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center; /* 讓內容垂直置中 */
  width: 100vw; /* 確保始終佔滿視窗寬度 */
  height: auto; /* 根據需要設置高度 */
  margin: 0 auto 80px; /* 與下方跑馬燈拉開距離 */
  position: relative;

  /* 桌機畫布是等比縮放的，低於 1200px 內文會被縮到 13px 以下（834px 時只剩 9px），
     這個範圍改用下面 Div6 的卡片版面。 */
  @media (max-width: 1199px) {
    display: none;
  }
`;

/* 這一區是固定像素的絕對定位版型（每個方塊都寫死 left/top/width/height），
   實際畫布是 1440×635（邊線用 border-box 算在尺寸內）。原本外層寫死 1450px，視窗比它窄就會出現
   水平捲軸、右邊的卡片被切掉。改成等比縮放填滿容器寬度：
   wrapper 用 aspect-ratio 撐出正確高度，內層維持原尺寸再用 transform 縮放，
   這樣所有硬座標都不用動，版面比例也完全不變。 */
const CANVAS_W = 1440;
const CANVAS_H = 635;

const OverlapGroupWrapper2 = styled.div`
  container-type: inline-size;
  width: 100%;
  aspect-ratio: ${CANVAS_W} / ${CANVAS_H};
  overflow: hidden;
`;

const OverlapGroup2 = styled.div`
  background-color: #f2f2f2;
  position: relative;
  width: ${CANVAS_W}px;
  height: ${CANVAS_H}px;
  transform-origin: top left;
  transform: scale(calc(100cqw / ${CANVAS_W}px)); /* 長度÷長度＝純數字，scale() 才吃 */
`;

const Rectangle = styled.div`
  box-sizing: border-box; /* 座標是 Figma 的外框尺寸，邊線要算在內才不會互相重疊 */
  border: 1px solid;
  border-color: #2A3133;
  border-radius: 16px;
  height: ${({ height }) => height}px;
  left: ${({ left }) => left}px;
  position: absolute;
  top: ${({ top }) => top}px;
  width: ${({ width }) => width}px;
`;

const UIUXProject = styled.div`
  color: #ffffff;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  font-size: 40px;
  font-weight: 700;
  height: 92px;
  left: 1052px;
  letter-spacing: 0;
  line-height: 46.4px;
  position: absolute;
  top: 240px;
  white-space: nowrap;
`;

const UIUXProject1 = styled(UIUXProject)`
  font-size: 16px;
  line-height: 24px;
  left: 1052px;
  top: 340px;
  width: 360px;
  white-space: pre-wrap;
  color: var(--text-color, #59656c);
  font-weight: 400;
`;

const ColoredRectangle = styled.div`
  box-sizing: border-box;
  border: 1px solid;
  border-color: #2A3133;
  border-radius: 16px;
  height: ${({ height }) => height}px;
  left: ${({ left }) => left}px;
  position: absolute;
  top: ${({ top }) => top}px;
  width: ${({ width }) => width}px;
  background-color: ${({ color }) => color};

  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const TextWrapper2 = styled(UIUXProject)`
  height: 46px;
  left: 48px;
  top: 240px;
  white-space: nowrap;
`;

const TextWrapper2n1 = styled(UIUXProject)`
  font-size: 16px;
  line-height: 24px;
  left: 48px;
  top: 340px;
  width: 360px;
  white-space: pre-wrap;
  color: var(--text-color, #d8984e);
  font-weight: 400;
`;

const HoverableDiv = styled.div`
  /* 內文色平常等於卡片底色（刻意看不見），hover 時底色變 rgba(0,0,0,.8)
     才浮現。浮現的底實際是 #303030，原色壓上去只有 2.2:1，所以同時提亮。
     GraphicDesign1 定義在本元件之後，沒辦法用 component selector，改用 CSS 變數傳遞。 */
  --text-color: ${(props) => props.ink};

  &:hover {
    --text-color: color-mix(in srgb, ${(props) => props.ink} 66%, white);
  }

  &:hover ${ColoredRectangle} {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const GraphicDesign = styled(UIUXProject)`
  left: 550px;
  top: 114px;
`;

const GraphicDesign1 = styled(UIUXProject)`
  font-size: 16px;
  line-height: 24px;
  left: 550px;
  top: 214px;
  width: 360px;
  white-space: pre-wrap;
  color: var(--text-color, #2a96b7);
  font-weight: 400;
`;

const Div6 = styled.div`
  background-color: #f2f2f2;
  z-index: 999;
  width: 90%;
  flex-direction: column;
  // justify-content: center;
  color: #fff;
  font-weight: 700;
  line-height: 46px;
  display: none;
  padding-bottom: 32px;
  margin-bottom: 48px; /* 加上上面的 32px padding，與跑馬燈之間共 80px */
  gap: 24px;
  font-size: 24px;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;

  @media (max-width: 1199px) {
    display: flex;
  }

  /* 平板：三欄並排填滿寬度，不要拉成三條全寬長條 */
  @media (min-width: 821px) and (max-width: 1199px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

const Div7 = styled.a`
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  border-radius: 16px;
  background-color: #d8984e;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  line-height: 116%;
  @media (max-width: 991px) {
    white-space: initial;
    max-width: 100%;
    padding: 40px 24px;
  }
`;

const Div8 = styled.a`
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  border-radius: 16px;
  background-color: #2a96b7;
  margin-top: 32px;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 40px 24px;
  }
  @media (max-width: 430px) {
    margin-top: 24px;
  }
`;

const Div9 = styled.a`
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  border-radius: 16px;
  background-color: #59656c;
  margin-top: 32px;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
    padding: 40px 24px;
  }
  @media (max-width: 430px) {
    margin-top: 24px;
  }
`;

const TextWrapper3 = styled.div`
  width: 70%;
  max-width: 1040px;
  font-size: 1.25rem;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  color: #666666;
  text-align: center;

  padding-bottom: 0; /* 下方留白改由球體區塊的 padding 提供，不再疊加 */
  line-height: 2.5rem;

  p {
    margin-bottom: 0; /* 移除 <p> 預設的 1em 下邊距 */
  }

  @media (max-width: 1440px) {
    // font-size: 1rem;
    width: 90%;
    text-align: center;
    padding-bottom: 0;
  }
  @media (max-width: 1024px) {
    // font-size: 1rem;
    text-align: left;
    padding-bottom: 0;
  }
  @media (max-width: 480px) {
    display: flex;
    font-size: 0.8rem;
    padding-top: 1rem;
    width: 90%;
    text-align: left;
    line-height: 1.5rem;
  }
  @media (max-height: 600px) {
    display: none;
  }
`;

const Span = styled.span`
  background-color: #2A3133;
  border-radius: 50px;
  padding: 2px 8px;
  color: #ffffff;
  white-space: nowrap;
`;

const DivFlipCard = styled.div`
  background-color: #f2f2f2;
  perspective: 1000px;
  align-items: center;
  max-width: 100%;
  // margin: 20px;

  @media (min-width: 821px) and (max-width: 1199px) {
    flex: 1;
    min-width: 0; /* 讓 flex 子項可以縮到比內容窄 */
  }
`;

const FlipCardInner = styled.div`
  // position: relative;
  height: 200px;

  /* 三欄時每張只剩約 1/3 寬，背面的說明文字需要更多高度 */
  @media (min-width: 821px) and (max-width: 1199px) {
    height: 380px;
  }

  text-align: left;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${(props) => props.flipped && "transform: rotateY(180deg);"}
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-radius: 16px;
`;

const FlipCardBack = styled(FlipCardFront)`
  background-color: ${(props) => props.bgColor};
  color: #fff;
  transform: rotateY(180deg);
  font-weight: normal;
  max-width: 100%;
  text-align: left;
`;

const TapToFlip = styled.div`
  position: absolute;
  bottom: 10px;
  left: auto;
  font-size: 14px;
  color: #fff;
  font-weight: 400;
  opacity: 0.8;
`;

function FlipCard({ title, content, bgColor }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <DivFlipCard onClick={() => setFlipped(!flipped)}>
      <FlipCardInner flipped={flipped}>
        <FlipCardFront bgColor={bgColor}>
          {title}
          <TapToFlip>
            Tap to flip <span style={{ fontSize: "22px" }}>⍝</span>
          </TapToFlip>
        </FlipCardFront>
        <FlipCardBack bgColor={bgColor}>
          <ContentMob>{content}</ContentMob>
        </FlipCardBack>
      </FlipCardInner>
    </DivFlipCard>
  );
}

const ContentMob = styled.div`
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  padding: 16px;

  @media (max-width: 991px) {
    font-size: 0.8rem;
    line-height: 1.4;
  }

  /* 平板三欄時卡片只有 1/3 寬，字級不能跟著回到 1rem，否則背面文字會溢出 */
  @media (min-width: 821px) and (max-width: 1199px) {
    font-size: 0.875rem;
  }
`;

const Section = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 5rem;

  @media (max-width: 480px) {
    gap: 24px;
  }
`;

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  // flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  padding: 1rem 0;

  @media (max-width: 480px) {
    gap: 24px;
    width: 90%;
  }
`;

const SectionTitle = styled.div`
  color: #2A3133;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  font-size: 3rem;
  font-weight: 700;
  width: 90%;
  font-size: 48px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (max-width: 480px) {
    font-size: 2.5rem;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    text-align: left;
    gap: 0px;
    line-height: 1.1;
  }
`;

const SectionTitleSticky = styled.div`
  color: #2A3133;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  font-size: 3rem;
  font-weight: 700;
  width: 90%;
  font-size: 48px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: sticky;
  top: 12vh;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 2.5rem;
    top: 8vh;
    justify-content: center;
    align-items: left;
    text-align: left;
    gap: 16px;
    line-height: 1.1;
  }
`;

const ServiceContent = styled.div`
  // color: #fff;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  width: 100%;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  white-space: pre-wrap;

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 1.2;
    padding: 0px;
  }
`;

const ServiceDes = styled.div`
  margin-top: 0.6rem;
  // color: #fff;
  font-family: serif;
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  white-space: wrap;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Marqueetext = styled.div`
  font-family: serif;
  font-size: 2rem;
  line-height: 1.6;
  padding: 24px;
  background-color: #2A96B7;
  color: #fff;
  width: 100vw;
  display: flex;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 1.6rem;
    line-height: 1.4;
    padding: 18px;
  }
`;

const MarqueeSpan = styled.div`
  font-family: serif;
  font-style: italic;
  display: flex;
  margin-left: 6px;
  color: #f7883d;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Flower = styled.svg`
  width: 60px;
  height: 60px;
  fill: ${(props) => props.fill || "none"};
  stroke: ${(props) => props.stroke || "#2A3133"};
  stroke-width: 0.6;
  animation: ${rotate} 8s linear infinite;
`;

const CardsContainerWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap; /* Allows wrapping to the next line */

  @media (max-width: 1200px) {
    /* For tablets */
    // width: 100%;
    justify-content: center;
    padding: 0;
  }

  @media (max-width: 480px) {
    /* For mobile screens */
    width: 90%;
    align-items: center;
  }
`;

const ViewMoreButton = styled.button`
  height: 100%;
  background-color: #d7f1f6;
  color: #14607A;
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  gap: 0.8rem;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  transition: background-color 0.8s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: #f2f2f2;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.8rem;
    align-items: center;
    gap: 0.5rem;
  }
`;

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" />
  </svg>
);
