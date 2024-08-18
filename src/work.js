import React from "react";
import "./style.css";
import styled, { keyframes } from 'styled-components';
import ProjectCard from './ProjectCard';
import {
  ShaderGradientCanvas,
  ShaderGradient,
} from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

export const Work = () => {
    const project1 = {
        date: 'November, 2023',
        image: '/arron-nieh.png', // 替換為你真實的圖片路徑
        title: 'Aaron Nieh : Behind the Covers',
        subtitle: 'Lecture Visual Identity',
        description:
          'The key visual poster and event website for Aaron Nieh’s lecture, "Behind the Covers," at NCCU.',
        tags: [
          { name: 'Graphic design', color: '#D58CFE' },
          { name: 'Frontend coding', color: '#F7883D' },
        ],
        link: 'https://mellifluous-brioche-700f0a.netlify.app/',
      };

    return(
        <Div>
            <Header>
              <OverlapGroupWrapper>
                  <OverlapGroup> 
                      <HeadingIAm>
                          <span style={{fontFamily:'serif', fontStyle:'italic', fontSize:'24px',lineHeight:'1'}}>Recent</span>
                          <div>Work<span style={{fontFamily:'serif', fontStyle:'italic'}}>(s)</span></div>
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
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  overFlow:'hidden',
                  zIndex: 1,
                }}
              >
              <ShaderGradient
                control='props'
                type='plane'
                animate="on"
                uDensity={1}
                uFrequency={.5}
                uStrength={2}
                uSpeed={.4}
                cameraZoom={1}  // 固定缩放比例
                zoomOut={false}
                toggleAxis={false}
                enableTransition={false}
                cDistance={10}
                color1='#809bd6'
                color2='#F7883D'
                color3='#D58CFE'
                grain='on'
                lightType='3d'
                grainBlending={.1}
                brightness={5}
              />
              </ShaderGradientCanvas>
            </Header>
            <CardsContainer>
                <ProjectCard
                    date={project1.date}
                    image={project1.image}
                    title={project1.title}
                    subtitle={project1.subtitle}
                    description={project1.description}
                    tags={project1.tags}
                    link={project1.link}
                />
                {/* <ProjectCard
                    date={project1.date}
                    image={project1.image}
                    title={project1.title}
                    subtitle={project1.subtitle}
                    description={project1.description}
                    tags={project1.tags}
                />
                <ProjectCard
                    date={project1.date}
                    image={project1.image}
                    title={project1.title}
                    subtitle={project1.subtitle}
                    description={project1.description}
                    tags={project1.tags}
                /> */}
            </CardsContainer>
            <H4>Coming sooon ✨</H4>
            <Footerwraper>
                © Tingyi Lin  |  All rights reserved 2024 
            </Footerwraper>
        </Div>
    );
}
export default Work

const Div = styled.div`
    // height: 87vh;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
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
   display: flex;
   border-bottom: 1.5px solid;
   width: 100%;
   border-color: #333;
  //  padding-top: 18vh;
  //  padding-bottom: 15vh;
   overflow: hidden;
   position: relative;

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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 8rem;
  line-height: 1;
  font-weight: 700;
  margin: 0 auto;
  letter-spacing: 0;
  margin-top: 4rem;
  z-index: 999;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1440px) {
    font-size: 96px;
    top: 0px;
    margin-top: 4rem;
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
    margin-top: 0rem;
  }
  @media (max-width: 375px) {
    white-space: pre-wrap;
    margin-left: 24px;
    font-size: 56px;
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
  max-height: 100%;
  padding-top: 18vh;
  padding-bottom: 15vh;

  // @media (max-width: 375px) {
  //   height: 0vh;
  //   margin-top: 0vh;
  //   margin-bottom: 5vh;
  // }
   @media (max-width: 480px) {
     padding-top: 15vh;
     padding-bottom: 15vh;
   }
   @media (max-width: 375px) {
     padding-top: 15vh;
     padding-bottom: 20vh;
     height: 8vh;
   }
`;

const Frame = styled.div`
  align-items: center;
  background-color: #7D8991;
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
    font-size: 24px;
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
   filter: blur(1.5px);
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
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3rem;
    gap: 1.2rem;
    max-width: 95%;

    @media (max-width: 800px) {
      flex-direction: column;
      width: 90%;
      gap: 1.2rem;
      margin-top: 2rem;
    }
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
const H4 =styled.div`
    font-family: serif;
    font-style: italic;
    margin-top: 5vh;
    background-color: #333;
    color: #fff;
    padding: 0px 8px;
`;

// const bounce = keyframes`
//   0%, 100% {
//     transform: translateY(0) translateX(0);
//   }
//   50% {
//     transform: translateY(-200px) translateX(0px);
//   }
// `;

// const Ball = styled.div`
//   width: ${props => props.size}px;
//   height: ${props => props.size}px;
//   background-color: ${props => props.color};
//   border-radius: 50%;
//   position: absolute;
//   bottom: 0;
//   animation: ${bounce} ${props => props.duration}s ease-in-out infinite;
//   animation-delay: ${props => props.delay}s;
// `;

// const BallContainer = styled.div`
//   width: 100%;
//   height: 400px;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
// `;
