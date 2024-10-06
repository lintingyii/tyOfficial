import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Marquee from "react-fast-marquee";
import Footer from "../Components/footer";
import ServiceCardComponent from "../Components/ServiceCard";
import TestimonialCard from "../Components/TestimonialCard";
import { LargeProjectCard } from "../Components/ProjectCard";

function MyComponent(props) {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://creattie.com/js/embed.js?id=3f6954fde297cd31b441";
  //   script.defer = true;
  //   script.id = "creattie-script";

  //   script.onload = () => {
  //     // 这时脚本加载完成，可以进行其他操作
  //   };

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // const [embedWidth, setEmbedWidth] = useState("8rem");

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 480) {
  //       setEmbedWidth("6rem");
  //     } else {
  //       setEmbedWidth("8rem");
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   handleResize();

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://creattie.com/js/embed.js?id=3f6954fde297cd31b441";
  //   script.defer = true;
  //   script.id = "creattie-script";

  //   script.onload = () => {};

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://creattie.com/js/embed.js?id=3f6954fde297cd31b441";
  //   script.defer = true;
  //   script.id = "creattie-script";

  //   script.onload = () => {};

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://creattie.com/js/embed.js?id=3f6954fde297cd31b441";
  //   script.defer = true;
  //   script.id = "creattie-script";

  //   script.onload = () => {};

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  const Projects = [
    {
      date: "March, 2024",
      image: "/hivebee/hb demo.png",
      title: "Hive Bee - We made donations enjoyable",
      subtitle: "SaaS product design",
      description:
        "Created unique event experiences that made interactions between streamers and audiences more lively and engaging.",
      tags: [{ name: "UI/UX design", color: "#7D8991" }],
      subtags: [
        { name: "SaaS", color: "#7D8991" },
        { name: "RWD", color: "#7D8991" }
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
        { name: "UI/UX design", color: "#7D8991" },
      ],
      subtags: [{ name: "SaaS", color: "#7D8991" }],
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
      tags: [{ name: "UI/UX design", color: "#7D8991" }],
      subtags: [{ name: "APP", color: "#7D8991" }],
      link: "/work/MegaBank_Redesign",
      openInNewTab: false,
    },
  ];

  return (
    <Div>
      <Banner>
        <source media="(max-width: 820px)" srcSet="./banner-2-mobile-1.png" />
        <img src="./banner-2.png" alt="Main Page" />
      </Banner>

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
            <Rectangle height={105} left={444} top={0} width={52} />
            <Rectangle height={105} left={444} top={106} width={52} />
            <Rectangle height={263} left={942} top={0} width={50} />
            <Rectangle height={264} left={942} top={264} width={50} />
            <Rectangle height={105} left={444} top={212} width={52} />
            <Rectangle height={105} left={444} top={318} width={52} />
            <Rectangle height={105} left={444} top={424} width={52} />
            <Rectangle height={105} left={444} top={530} width={52} />
            <Rectangle height={105} left={0} top={1} width={443} />
            <Rectangle height={105} left={497} top={530} width={495} />
            <Rectangle height={105} left={993} top={0} width={447} />
            {/* <ColoredRectangle color="#ff6434" height={528} left={0} top={107} width={443} />
          <ColoredRectangle color="#d58cfe" height={528} left={498} top={0} width={443} />
          <ColoredRectangle color="#7d8991" height={528} left={993} top={107} width={447} /> */}
            <HoverableDiv>
              <ColoredRectangle
                color="#7d8991"
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

            <HoverableDiv>
              <ColoredRectangle
                color="#d58cfe"
                height={528}
                left={498}
                top={0}
                width={443}
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

            <HoverableDiv>
              <ColoredRectangle
                color="#ff6434"
                height={528}
                left={0}
                top={107}
                width={443}
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
          bgColor="#7D8991"
        />
        <FlipCard
          title="Graphic Design"
          content="My journey in graphic design is driven by the belief that each pixel matters. From conceptualization to execution, I strive for a harmonious balance between form and function. Every color, typeface, and image is carefully chosen to convey a message, evoke emotions, and create a lasting impression."
          bgColor="#D58CFE"
        />
        <FlipCard
          title="Frontend Coding"
          content="I find joy in translating creative visions into seamless, interactive digital experiences. My coding journey is a continuous exploration of the ever-evolving web technologies. Proficient in HTML, CSS, and React.js, I thrive on the challenge of bringing design concepts to life while ensuring a user-friendly and visually appealing interface."
          bgColor="#F7883D"
        />
      </Div6>

      <Marquee speed={80}>
        <Marqueetext>
          Let's make something <MarqueeSpan>cool</MarqueeSpan>· Let's make
          something <MarqueeSpan>cool</MarqueeSpan> · Let's make something{" "}
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
            color="#000fff"
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
            color="#D58CFE"
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
        <Flower stroke="#000fff" viewBox="0 0 24 24">
          <path d=" M12 2.5c4 0 1.7 6.2 1.7 6.2s3.7-5.4 6-2.5-3.7 5.3-3.7 5.3 6.5-.6 5.6 3c-.8 3.7-6.5.4-6.5.4s4.7 4.7 1.2 6.4c-3.6 1.6-4.3-4.9-4.3-4.9s-.8 6.5-4.3 4.9c-3.4-1.7 1.2-6.4 1.2-6.4s-5.7 3.7-6.5-.4c-1-4 5.6-3 5.6-3s-6-2-3.7-5.3c2.2-3.3 5.9 2.5 5.9 2.5S8 2.5 12 2.5Z" />
        </Flower>
        <Flower fill="#000fff" stroke="#000fff" viewBox="0 0 24 24">
          <path d=" M12 2.5c4 0 1.7 6.2 1.7 6.2s3.7-5.4 6-2.5-3.7 5.3-3.7 5.3 6.5-.6 5.6 3c-.8 3.7-6.5.4-6.5.4s4.7 4.7 1.2 6.4c-3.6 1.6-4.3-4.9-4.3-4.9s-.8 6.5-4.3 4.9c-3.4-1.7 1.2-6.4 1.2-6.4s-5.7 3.7-6.5-.4c-1-4 5.6-3 5.6-3s-6-2-3.7-5.3c2.2-3.3 5.9 2.5 5.9 2.5S8 2.5 12 2.5Z" />
        </Flower>
        <Flower stroke="#000fff" viewBox="0 0 24 24">
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

const Banner = styled.picture`
  display: flex;
  justify-content: center;
  z-index: 0;
  overflow: hidden;
  position: sticky; /* 使用 sticky */
  top: 0;
  margin-bottom: 3vh;

  img {
    padding-top: 8vh;
    width: 100%;
    display: flex;
    justify-content: right;

    @media (max-width: 820px) {
      border: none;
      width: 100%;
      padding-top: 6vh;
    }
    @media (max-width: 480px) {
      padding-top: 0vh;
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
  font: 700 20px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #0000ff;
  text-align: left;
  display: flex;
  position: absolute;
  margin-top: 24px;
  margin-left: 4px;
  width: 488px;
  height: 24px;
  overflow: hidden;
  border-right: 0.1em solid;
  animation: ${typing} 5s steps(45), ${caret} 1s steps(1) infinite;

  @media (max-width: 772px) {
    margin-left: 0px;
    font-size: 18px;
    width: 448px;
    height: 20px;
    border-right: 0.1em solid;
    margin-top: 16px;
  }
  @media (max-width: 648px) {
    margin-left: 0px;
    font-size: 16px;
    width: 405px;
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
  border-color: #333333;

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
  color: #333333;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  background-color: #7d8991;
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
  @media (max-width: 990px) {
    display: none;
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
  --color1: #0000ff; /* 陰影顏色 */
  --color2: #f2f2f2; /* 亮面顏色 */

  width: 100%; /* 覆盖整个屏幕宽度 */
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5vh;

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
  flex-direction: row;
  justify-content: center;
  width: 100%;

  @media (max-width: 820px) {
    display: none;
  }
`;

const OverlapGroupWrapper2 = styled.div`
  background-color: #f2f2f2;
  height: 700px;
  overflow: hidden;
  justify-content: center;
  width: 1450px;
`;

const OverlapGroup2 = styled.div`
  background-color: #f2f2f2;
  height: 627px;
  position: relative;
  height: 100%;
  overflow-x: auto; /* 允許水平滾動 */
  overflow-y: hidden;
`;

const Rectangle = styled.div`
  border: 1.5px solid;
  border-color: #333333;
  border-radius: 16px;
  height: ${({ height }) => height}px;
  left: ${({ left }) => left}px;
  position: absolute;
  top: ${({ top }) => top}px;
  width: ${({ width }) => width}px;
`;

const UIUXProject = styled.div`
  color: #ffffff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  color: #7d8991;
  font-weight: 400;
`;

const ColoredRectangle = styled.div`
  border: 1.5px solid;
  border-color: #333333;
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
  color: #ff6439;
  font-weight: 400;
`;

const HoverableDiv = styled.div`
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
  color: #d58cfe;
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
  gap: 24px;
  font-size: 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (max-width: 820px) {
    display: flex;
  }
`;

const Div7 = styled.a`
  font-feature-settings: "clig" off, "liga" off;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 16px;
  background-color: #ff6434;
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
  font-feature-settings: "clig" off, "liga" off;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 16px;
  background-color: #d58cfe;
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
  font-feature-settings: "clig" off, "liga" off;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 16px;
  background-color: #7d8991;
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #666666;
  text-align: center;

  padding-bottom: 8vh;
  line-height: 2.5rem;

  @media (max-width: 1440px) {
    // font-size: 1rem;
    width: 90%;
    text-align: center;
    padding-bottom: 5vh;
  }
  @media (max-width: 1024px) {
    // font-size: 1rem;
    text-align: left;
    padding-bottom: 5vh;
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
  background-color: #333333;
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
`;

const FlipCardInner = styled.div`
  // position: relative;
  height: 200px;
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  padding: 16px;

  @media (max-width: 991px) {
    font-size: 0.8rem;
    line-height: 1.4;
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
  color: #333333;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  color: #333333;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  background-color: #000fff;
  color: #fff;
  width: 100%;
  display: flex;

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
  stroke: ${(props) => props.stroke || "#333"};
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
  background-color: #e1cdff;
  color: #000fff;
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  gap: 0.8rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
