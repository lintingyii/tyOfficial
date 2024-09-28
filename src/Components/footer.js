import React from "react";
import styled, { keyframes } from "styled-components";
import { useLocation } from "react-router-dom";
import { useInView } from 'react-intersection-observer';

export const Footer = ({ color }) => {
  const location = useLocation();
  let footerColor;

  // 根據路由設置 footer 顏色
  switch (location.pathname) {
    case "/work/sports_win":
      footerColor = "#fff"; // sports_win 頁面的顏色
      break;
    default:
      footerColor = "#f2f2f2"; // 默認顏色
  }

  const  { ref , inView , entry }  =  useInView ( { 
    /* 可選選項 */ 
    Threshold : 0.2 , 
  } ) ;

  return (
    <FooterContainer color={footerColor}>
      <Footerwraper>
        <Header ref={ref} className={inView ? "visible" : ""}>Let's connect ◡̎</Header>
        <Hr />
        <Text>
          Thank you for visiting. <br />
          Contact me for enquiries or just to say Hello👋🏻 !
          <LinkGroup>
            <Link href="mailto:910620morgan@gmail.com">
              <Span>
                E-mail
                <MailIcon />
              </Span>
            </Link>
            <Link href="https://www.linkedin.com/in/tingyi-lin2024" target="_blank" rel="noopener noreferrer">
              <Span>
                LinkedIn
                <LinkedInIcon />
              </Span>
            </Link>
            <Link href="https://www.instagram.com/mglty.19/" target="_blank" rel="noopener noreferrer">
              <Span>
                Instagram
                <IGIcon />
              </Span>
            </Link>
          </LinkGroup>
        </Text>
        <BgIcon />
        <Ending>
          © Tingyi Lin | All rights reserved 2024
        </Ending>
      </Footerwraper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: ${(props) => props.color || "#f2f2f2"};
  z-index: 999;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: auto;
  position: relative;

  @media (max-width: 480px) {
    position: unset;
  }
`;

const Footerwraper = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 95%;
  height: auto;
  min-height: 85vh;
  box-sizing: border-box;
  background-color: ${(props) => props.color || "#E2E2E2"};
  text-align: center;
  border-radius: 12px;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  margin: 2.5%;
  margin-top: 5%;
  padding: 48px;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    flex-direction: column;
    gap: 8px;
    width: 90%;
    min-height: 90vh;
    margin: 5%;
    margin-top: 10%;
    padding: 24px;
    padding-bottom: 64px;
    position: relative;
  }
`;

const Header = styled.h1`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 12vw;
  line-height: 1;
  margin: 0;
  color: #fff;
  width: 100%;
  transition: 1s ease;
  // animation-timeline: view();
  // animation-range: entry 0% cover 60%;
  z-index: 1;
  opacity: 0; /* 初始為不可見 */
  transition: opacity 1.5s ease, transform 1.5s ease, color .8 ease;
  transform: translateY(-100%);

  &.visible {
    opacity: 1;
    transform: translateY(0); /* 滑入畫面 */
  }

  &:hover {
    color: #000fff;
  }
`;

const Ending = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: auto;
  z-index: 1;
  color: #333;
`;

const Text = styled.div`
  font-family: serif;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  color: #333;
  justify-content: center;
  width: 100%;
  gap: 4vh;
  white-space: no-wrap;
  z-index: 1;
`;

const Span = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #e1cdff;
  color: #333;
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  margin: 0 auto;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  transition: background-color 0.8s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: #f2f2f2;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.8rem;
    align-items: center;
    gap: 0.3rem;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit; /* 继承 Span 的颜色 */
  width: fit-content;
  margin: 0 auto;
`;

const LinkGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Hr = () => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: '8vh 0' }}>
    <svg width="112" height="6" viewBox="0 0 112 6" fill="none">
      <path 
        d="M9.24865 1.40299C11.1861 -0.467666 14.2571 -0.467663 16.1946 1.40299L17.8878 3.03785C19.0503 4.16024 20.8929 4.16024 22.0554 3.03785L23.777 1.403C25.7145 -0.467659 28.7855 -0.467659 30.723 1.403L32.4162 3.03785C33.5787 4.16025 35.4213 4.16025 36.5838 3.03785L38.277 1.403C40.2145 -0.467659 43.2855 -0.467656 45.223 1.403L46.9162 3.03786C48.0787 4.16025 49.9213 4.16025 51.0838 3.03786L52.7552 1.42402C52.7592 1.42024 52.7593 1.414 52.7555 1.41009C52.7517 1.40617 52.7519 1.39989 52.7558 1.39612C54.6936 -0.467659 57.7595 -0.465367 59.6946 1.403L61.3878 3.03785C62.5503 4.16025 64.3929 4.16025 65.5554 3.03785L67.2486 1.403C69.1861 -0.467662 72.2571 -0.467659 74.1946 1.403L75.8878 3.03785C77.0503 4.16025 78.8929 4.16025 80.0554 3.03785L81.777 1.403C83.7145 -0.467655 86.7855 -0.467655 88.723 1.403L90.4162 3.03786C91.5787 4.16025 93.4213 4.16025 94.5838 3.03786L96.277 1.403C98.2145 -0.467655 101.285 -0.467652 103.223 1.403L104.916 3.03786C106.079 4.16025 107.921 4.16025 109.084 3.03786L110.058 2.0976C110.455 1.71398 111.088 1.72509 111.472 2.1224C111.855 2.51972 111.844 3.15279 111.447 3.5364L110.473 4.47666C108.535 6.34732 105.464 6.34732 103.527 4.47666L101.834 2.84181C100.671 1.71941 98.8287 1.71941 97.6662 2.8418L95.973 4.47666C94.0355 6.34732 90.9645 6.34732 89.027 4.47666L87.3338 2.8418C86.1713 1.71941 84.3287 1.71941 83.1662 2.8418L81.4446 4.47665C79.5071 6.34731 76.4361 6.34731 74.4986 4.47665L72.8054 2.8418C71.6429 1.71941 69.8003 1.7194 68.6378 2.84179L66.9446 4.47665C65.0071 6.34731 61.9361 6.34731 59.9986 4.47665L58.3054 2.8418C57.1502 1.72643 55.3234 1.71945 54.1598 2.82085C54.1558 2.82459 54.1556 2.83085 54.1594 2.83476C54.1632 2.83865 54.1631 2.84485 54.1592 2.8486L52.473 4.47666C50.5355 6.34732 47.4645 6.34732 45.527 4.47666L43.8338 2.8418C42.6713 1.71941 40.8287 1.71941 39.6662 2.8418L37.973 4.47666C36.0355 6.34731 32.9645 6.34731 31.027 4.47666L29.3338 2.8418C28.1713 1.71941 26.3287 1.71941 25.1662 2.8418L23.4446 4.47665C21.5071 6.34731 18.4361 6.34731 16.4986 4.47665L14.8054 2.8418C13.6429 1.7194 11.8003 1.7194 10.6378 2.84179L8.94459 4.47665C7.00713 6.34731 3.93611 6.34731 1.99865 4.47665L1.02481 3.53639C0.627491 3.15278 0.616384 2.51971 0.999998 2.12239C1.38361 1.72508 2.01668 1.71397 2.41399 2.09759L3.38784 3.03785C4.55032 4.16024 6.39292 4.16024 7.5554 3.03785L9.24865 1.40299Z" 
        fill="#D58CFE" 
      />
    </svg>
  </div>
);

const BgIconContainer = styled.svg`
  position: absolute;
  right: 0px;
  bottom: 0px;
  z-index: 0;
  aspect-ratio: 1 / 1;
  fill: #dbdbdb;

  width: 30%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const BgIcon = () => (
  <BgIconContainer xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <path d="M120,80A40,40,0,1,1,80,40,40,40,0,0,1,120,80Zm56,40a40,40,0,1,0-40-40A40,40,0,0,0,176,120ZM80,136a40,40,0,1,0,40,40A40,40,0,0,0,80,136Zm128,32H184V144a8,8,0,0,0-16,0v24H144a8,8,0,0,0,0,16h24v24a8,8,0,0,0,16,0V184h24a8,8,0,0,0,0-16Z" />
  </BgIconContainer>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M104,152a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H96A8,8,0,0,1,104,152ZM168,32h24a8,8,0,0,0,0-16H160a8,8,0,0,0-8,8V56h16Zm72,84v60a16,16,0,0,1-16,16H136v32a8,8,0,0,1-16,0V192H32a16,16,0,0,1-16-16V116A60.07,60.07,0,0,1,76,56h76v88a8,8,0,0,0,16,0V56h12A60.07,60.07,0,0,1,240,116Zm-120,0a44,44,0,0,0-88,0v60h88Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z" />
  </svg>
);

const IGIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M160,128a32,32,0,1,1-32-32A32,32,0,0,1,160,128Zm72-48v96a56.06,56.06,0,0,1-56,56H80a56.06,56.06,0,0,1-56-56V80A56.06,56.06,0,0,1,80,24h96A56.06,56.06,0,0,1,232,80Zm-56,48a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128Zm24-60a12,12,0,1,0-12,12A12,12,0,0,0,200,68Z"/>
  </svg>
);
