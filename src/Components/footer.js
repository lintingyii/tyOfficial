import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

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

  return (
    <FooterContainer color={footerColor}>
      <Footerwraper>
        <Header>Let's connect ◡̎</Header>
        <Ending>
          <Text>© Tingyi Lin | All rights reserved 2024 |</Text>
          <EmailLink href="mailto:910620morgan@gmail.com">
            <Span>910620morgan@gmail.com</Span>
          </EmailLink>
        </Ending>
      </Footerwraper>
    </FooterContainer>
  );
};

export default Footer;

// const Footerwraper = styled.div`
//   font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   color: #333;
//   width: 100%;
//   background-color: ${(props) => props.color || "#f2f2f2"};
//   text-align: center;
//   padding: 24px 0px;
//   font-size: 1rem;
//   z-index: 9999;
//   display: flex;
//   white-space: pre-wrap;
//   justify-content: center;
//   margin-top: auto; /* 自動將 Footer 推到頁面的结尾 */

//   @media (max-width: 480px) {
//     font-size: 0.8rem;
//     flex-direction: column;
//     gap: 8px;
//     padding-bottom: 10vh;
//   }
// `;
const FooterContainer = styled.div`
  background-color: ${(props) => props.color || "#f2f2f2"};
  z-index: 999;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

const Footerwraper = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 95%;
  height: auto;
  box-sizing: border-box;
  background-color: ${(props) => props.color || "#E2E2E2"};
  text-align: center;
  // border: 1.5px solid #333;
  border-radius: 12px;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  margin: 2.5%;
  padding: 48px;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    flex-direction: column;
    gap: 8px;
    width: 90%;
    margin: 5%;
    padding: 24px;
  }
`;

const Header = styled.h1`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 12vw;
  line-height: 1.2;
  margin: 0;
  color: #fff;
  width: 100%;
`;

const Ending = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Text = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  color: #333;
`;

const Span = styled.div`
  color: #333;
  margin-left: 6px;
  transition: color 0.4s ease;
  display: flex;

  &:hover {
    color: #000fff;
  }
  @media (max-width: 480px) {
    margin-left: 0px;
  }
`;

const EmailLink = styled.a`
  text-decoration: none; /* 移除默认的下划线 */
  color: inherit; /* 继承 Span 的颜色 */
  display: flex;
`;
