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

// const load = keyframes`
//   0% {
//     transform: translateY(90px);
//     opacity: 1;
//   }
//   100% {
//     transform: translateY(0px);
//     opacity: 1;
//   }
// `;

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
  transition: opacity 1.5s ease, transform 1.5s ease;
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

const Hr = styled.div`
  border: none;
  height: 10px;
  width: 100%;
  background: #d58cfe;
  -webkit-mask: url("./wavy-line.svg") center no-repeat;
  mask: url("./wavy-line.svg") center no-repeat;
  margin: 8vh 0;
`;

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
