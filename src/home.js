import React, { useState, useRef  } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

function MyComponent(props) {
  const cardRef = useRef(null);

  return (
    <Div>
      <picture style={{ display: 'flex',justifyContent:'center', zIndex:'998' }}>
        <source media="(max-width: 1024px)" srcSet="./main-page-phone.png" />
        <img
          src="./main-page.png"
          alt="Main Page"
          style={{
            width: '90%',
            display: 'flex',
            // marginTop: '10vh',
            borderStyle: 'solid',
            borderWidth: '1.5px',
            borderColor: '#333333',
            borderRadius: '24px',
            justifyContent:'center',
          }}
        />
      </picture>

      <OverlapGroupWrapper>
        <OverlapGroup> 
          <HeadingIAm>
            HI 👋🏻<br />I am Ting-yi, Lin
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
            <TextWrapper>Draphic design</TextWrapper>
          </DivWrapper2>
        </OverlapGroup>
      </OverlapGroupWrapper>

      <TextWrapper3>
        <p>
        Hello👋🏻, I'm Ting-yi Lin, you can call me Morgan, a creative design graduate from National Chengchi University. 
        <br />
        Venturing into <Span>UI / UX</Span>, my understanding of <Span>front-end skills</Span> emphasizes a practical approach to design, 
        <br />
        blending aesthetics and creativity with <Span>user-centric</Span> solutions.
        </p>
      </TextWrapper3>

      <CircleContainer>
        <div className="circle"></div>
      </CircleContainer>

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
          {/* <ColoredRectangle color="#ff6434" height={528} left={0} top={107} width={443} /> */}
          {/* <ColoredRectangle color="#d58cfe" height={528} left={498} top={0} width={443} /> */}
          {/* <ColoredRectangle color="#7d8991" height={528} left={993} top={107} width={447} /> */}
          <HoverableDiv>
            <ColoredRectangle color="#7d8991" height={528} left={993} top={107} width={447} />
            <UIUXProject>
                UI / UX Design
            </UIUXProject>
            <UIUXProject1>
            As a UI/UX designer, I harmonize form and function to create visually captivating interfaces that guide users through purposeful journeys. 
            <br />
            With extensive cross-industry research, I tailor solutions to diverse user needs. 
            <br />
            Collaborating with cross-functional teams, I prioritize user-centric design, informed by thorough research, seamlessly integrating experiences into users' lives.
            </UIUXProject1>
          </HoverableDiv>
          
          <HoverableDiv>
            <ColoredRectangle color="#d58cfe" height={528} left={498} top={0} width={443} />
            <GraphicDesign>
                Graphic Design
            </GraphicDesign>
            <GraphicDesign1>
            My journey in graphic design is driven by the belief that each pixel matters. 
            <br />
            From conceptualization to execution, I strive for a harmonious balance between form and function. Every color, typeface, and image is carefully chosen to convey a message, evoke emotions, and create a lasting impression.
            </GraphicDesign1>
          </HoverableDiv>

          <HoverableDiv>
            <ColoredRectangle color="#ff6434" height={528} left={0} top={107} width={443} />
            <TextWrapper2>Frontend Coding</TextWrapper2>
            <TextWrapper2n1>
            I find joy in translating creative visions into seamless, interactive digital experiences. 
            My coding journey is a continuous exploration of the ever-evolving web technologies. 
            <br />
            Proficient in HTML, CSS, and React.js , I thrive on the challenge of bringing design concepts to life while ensuring a user-friendly and visually appealing interface.
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

      {/* <RecentWorksContainer>
      <RecentWorksTitle>Recent Works</RecentWorksTitle>
    <Divider />
      <WorkSection>
        <LeftColumn>
          <WorkImage loading="lazy" src="./arron-nieh.png" />
        </LeftColumn>
        <RightColumn>
          <YearAndCategories>
            <YearLabel>2023</YearLabel>
            <CategoriesContainer>
              <CategoryLabel>Graphic design</CategoryLabel>
              <CategoryLabel>Front-end coding</CategoryLabel>
              <CategoryLabel>Website design</CategoryLabel>
            </CategoriesContainer>
          </YearAndCategories>
          <LectureDetails>
            <LectureInfoContainer>
              <LectureTitle>Lecture Visual Identity</LectureTitle>
              <SpeakerInfo>Aaron nieh : Behind the Covers</SpeakerInfo>
            </LectureInfoContainer>
            <SpeakerImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5148bbfb173be6970d51b8b473f91e9efb3c1f9c80cf31a3e625693fe436ec7d?" />
          </LectureDetails>
        </RightColumn>
      </WorkSection>
    </RecentWorksContainer> */}
      
      <Footerwraper>
        © Tingyi Lin  |  All rights reserved 2024 
      </Footerwraper>
    </Div>
  );
}
export default MyComponent

const Div = styled.div`
  background-color: #f2f2f2;
  display: flex;
  padding-top: 10vh;
  flex-direction: column;
  align-items: center;
  width:100%;
  // height: 100%;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 440px) {
    padding-top: 9vh;
  }
`;


const Div2 = styled.div`
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;  
  justify-content: center;
  border-radius: 50px;
  border: 1.5px solid #333333;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 97%;
  font-size: 30px;
  color: #333333;
  font-weight: 700;
  padding: 8px 9px;
  @media (max-width: 820px) {
    max-width: 95%;
  }
  @media (max-width: 440px) {
    max-width: 95%;
    font-size: 24px;
  }
`;

const Div3 = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #0000FF;
`;

const Div4 = styled.div`
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  color: #333333;
`;

const Div5 = styled.div`
  text-align: right;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #333333;
`;

const typing = keyframes`
  from { width: 0; }
`;

const caret = keyframes`
  50% { border-color: transparent; }
`;

const Div11 = styled.div`
  font: 700 20px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
    border-right: 0em ;
  }
`;


const OverlapGroupWrapper = styled.div`
  background-color: #f2f2f2;
  height: 50vh;
  max-width: 1440px; /* 設定最大寬度 */
  width: 100%;
  margin: 0 auto; /* 左右居中 */
  display: flex-box;
  flex-direction: column;
  margin-top: 20vh;
  margin-bottom: 12vh;

  @media (max-width: 1440px) {
    max-height: 25vh;
    margin-top: 10vh;
    margin-bottom: 12vh;
  }
  
  @media (max-width: 1020px) {
    max-height: 18vh;
    margin-top: 10vh;
    margin-bottom: 15vh;
  }

  @media (max-width: 648px) {
    height: 10vh;
    margin-top: 20vh;
    // margin-bottom: 10vh;
  }

  @media (max-width: 480px) {
    height: 12vh;
    margin-top: 15vh;
    margin-bottom: 10vh;
  }

  @media (max-width: 375px) {
    height: 16vh;
    margin-top: 15vh;
    margin-bottom: 10vh;
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

const VectorImage = styled.img`
  left: -10vw;
  position: absolute;
  top: 30vh;
  width: 60%;
  position: fixed;
  z-index: 997;
  @media (max-width: 1024px) {
    width: 80%;
    left: -15vw;
  }
`;

const HeadingIAm = styled.div`
  color: #333333;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 8rem;
  font-weight: 700;
  height: 226px;
  margin: 0 auto;
  letter-spacing: 0;
  position: absolute;
  top: 16px;
  z-index: 999;
  
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
  background-color: #7D8991;
  border-radius: 80px;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  right: 38vw;
  padding: 12px 32px;
  position: absolute;
  top: 35px;
  @media (max-width: 990px) {
    display:none;
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
    display:none;
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
    display:none;
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
    display:none;
  }
`;

const CircleContainer = styled.div`
  --circleSize: 50px;
  --spinSpeed: 5s;
  --color1: #0000ff; /* 陰影顏色 */
  --color2: #f2f2f2; /* 亮面顏色 */

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
    content: '';
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
    animation: fillEffect var(--spinSpeed) calc(var(--spinSpeed) / 4) steps(2) infinite;
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

  @media (max-width: 1040px) {
    display:none;
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
  height: 627px;
  position: relative;
  top: 5vh;
  height: 100%;
  overflow-x: auto; /* 允許水平滾動 */
  overflow-y: hidden;
`;

const Rectangle = styled.a`
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 40px;
  font-weight: 700;
  height: 92px;
  left: 1052px;
  letter-spacing: 0;
  line-height: 46.4px;
  position: absolute;
  top: 240px;
`;

const UIUXProject1 = styled(UIUXProject)`
  font-size: 16px;
  line-height: 24px;
  left: 1052px;
  top: 340px;
  width: 360px;
  white-space: pre-wrap;
  color: #7D8991;
  font-weight: 400;
`;

const ColoredRectangle = styled.a`
  border: 1.5px solid;
  border-color: #333333;
  border-radius: 16px;
  height: ${({ height }) => height}px;
  left: ${({ left }) => left}px;
  position: absolute;
  top: ${({ top }) => top}px;
  width: ${({ width }) => width}px;
  background-color: ${({ color }) => color};

  transition: background-color 0.3s;

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
  color: #D58CFE;
  font-weight: 400;
`;

const Div6 = styled.div`
  // background-color: #fff;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  line-height: 46px;
  display:none;
  margin-bottom: 24px;
  margin-top: 24px;
  gap: 24px;
  font-size: 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (max-width: 1040px) {
    display: flex;
  }
`;

const Div7 = styled.a`
  font-feature-settings: "clig" off, "liga" off;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  width: 100%;
  font-size: 1.25rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #666666;
  text-align: center;
  padding-bottom: 8vh;
  line-height: 2rem;
  
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

const Footerwraper = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #333333;
  text-align: center;
  padding: 30px; /* 可以根據需要調整底部 padding */
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const RecentWorksContainer = styled.div`
display: flex;
  margin-top: 38px;
  width: 100%;
  max-width: 1400px;
  flex-direction: column;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const RecentWorksTitle = styled.div`
  color: #333333;
  text-align: center;
  align-self: center;
  font: 500 42px/88% system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Divider = styled.div`
background-color: rgba(51, 51, 51, 1);
margin-top: 50px;
height: 1.5px;

@media (max-width: 991px) {
  max-width: 100%;
  margin-top: 40px;
}
`;

const WorkSection = styled.div`
margin-top: 32px;
display: flex;
flex-direction: row;
// justify-content: center;
height: 440px;

@media (max-width: 990px) {
  flex-direction: column;
  max-width: 100%;
  margin-top: 40px;
}
`;

const LeftColumn = styled.div`
display: flex;
  flex-direction: column;
  line-height: normal;
  width: 55%;
  margin-left: 0px;
  margin: 0;
  height: 440px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const WorkImage = styled.img`
height: 100%;
flex-grow: 1;
display: flex;
justify-content: center;
align-items: center;
position: relative;
// top: 24px;

@media (max-width: 991px) {
  max-width: 100%;
  margin-top: 32px;
}
`;

const RightColumn = styled.div`
display: flex;
flex-direction: column;
line-height: normal;
width: 44%;
margin-left: 24px;
justify-content: space-between;

@media (max-width: 991px) {
  width: 100%;
}
`;

const YearAndCategories = styled.div`
display: flex;
justify-content: space-between;
gap: 20px;
font-size: 20px;
// margin-top: 36px;
white-space: nowrap;
padding: 0 1px;
@media (max-width: 991px) {
  max-width: 100%;
  flex-wrap: wrap;
  white-space: initial;
}
`;

const YearLabel = styled.div`
color: #000;
font-family: Noto Sans TC, sans-serif;
font-weight: 500;
line-height: 100%;
align-self: start;
// margin-top: 12px;
`;

const CategoriesContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
color: #7d8991;
font-weight: 700;
gap: 12px;

@media (max-width: 991px) {
  white-space: initial;
}
`;

const CategoryLabel = styled.div`
font-family: Roboto, sans-serif;
justify-content: center;
border-radius: 80px;
background-color: #fff;
// margin-left: 20px;
padding: 4px 24px;
@media (max-width: 991px) {
  white-space: initial;
  margin-left: 10px;
  padding: 0 20px;
}
`;

const LectureDetails = styled.div`
display: flex;
// margin-top: 180px;
align-items: flex-start;
justify-content: space-between;
gap: 50px;
color: #000;
font-weight: 500;
@media (max-width: 991px) {
  max-width: 100%;
  margin-top: 40px;
  flex-wrap: wrap;
}
`;

const LectureInfoContainer = styled.div`
align-self: start;
display: flex;
flex-direction: column;
`;

const LectureTitle = styled.div`
font: 14px/250.5% Noto Sans TC, sans-serif;
`;

const SpeakerInfo = styled.div`
margin-top: 12px;
white-space: nowrap;
font: 24px/146% Noto Sans TC, sans-serif;
@media (max-width: 991px) {
  white-space: initial;
}
`;

const SpeakerImage = styled.img`
  aspect-ratio: 0.97;
  object-fit: auto;
  object-position: center;
  width: 37px;
  fill: #333;
  align-self: end;
  margin-top: 22px;
`;

const DivFlipCard = styled.div`
  perspective: 1000px;
  max-width: 100%;
  // margin: 20px;
`;

const FlipCardInner = styled.div`
  // position: relative;
  height: 200px;
  text-align: left;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${(props) => props.flipped && 'transform: rotateY(180deg);'}
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

function FlipCard({ title, content, bgColor }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <DivFlipCard onClick={() => setFlipped(!flipped)}>
      <FlipCardInner flipped={flipped}>
        <FlipCardFront bgColor={bgColor}>{title}</FlipCardFront>
        <FlipCardBack bgColor={bgColor}><ContentMob>{content}</ContentMob></FlipCardBack>
      </FlipCardInner>
    </DivFlipCard>
  );
}

const ContentMob = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  padding: 16px;

  @media (max-width: 991px) {
    font-size: 0.8rem;
    line-height: 1.4;
  }
`;