import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Resume from "./resume";
import MyComponent from "./home";
import Work from "./work";
import YoungLions from "./youngLions";
import MegaBankRedesign from "./MegaBankRedesign";
import SportsWin from "./sportsWin";
import styled from "styled-components";
import CustomCursor from "./CustomCursor";
import { createGlobalStyle } from "styled-components";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  body, * {
  user-select: none;
 }
`;

const Conatiner = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  align-items: center;
  position: fixed;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  justify-content: space-between;
  border-radius: 50px;
  border: 1.5px solid #333333;
  background-color: #fff;
  display: flex;
  width: 100%;
  font-size: 30px;
  font-weight: 700;
  padding: 10px 24px;
  box-sizing: border-box;
  height: fit-content;

  @media (max-width: 480px) {
    font-size: 20px;
    top: unset;
    bottom: 16px;
    width: 90%;
    padding: 10px 20px;
  }
`;

const Div3 = styled(Link)`
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? "#0000FF" : "#333333")};
`;

const Div4 = styled(Link)`
  text-decoration: none;
  text-align: center;
  flex-basis: auto;
  color: ${({ isActive }) => (isActive ? "#0000FF" : "#333333")};
`;

const Div5 = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.isActive ? "#0000FF" : "#333333")};
`;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background-color: #d58cfe;
  width: ${(props) => props.scroll}; /* 透過 scroll 動態設置寬度 */
  z-index: 999;
  transition: width 0.25s ease; /* 平滑滾動效果 */
`;

function App() {
  return (
    <>
      <CustomCursor />
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<MyComponent />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/youngLions" element={<YoungLions />} />
          <Route
            path="/work/MegaBank_Redesign"
            element={<MegaBankRedesign />}
          />
          <Route path="/work/sports_win" element={<SportsWin />} />
          {/* 其他路由... */}
        </Routes>
        <NavigationBar />
      </Router>
    </>
  );
}

function NavigationBar() {
  const location = useLocation();

  const isWorkActive = location.pathname.startsWith("/work");

  const [scroll, setScroll] = useState("0%");

  // 監聽滾動事件，計算滾動百分比
  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop; // 已經滾動的頁面距離
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight; // 整個頁面的高度
    const scrollProgress = `${(totalScroll / windowHeight) * 100}%`; // 計算比例
    setScroll(scrollProgress); // 依照比例更新進度條的寬度
  };

  useEffect(() => {
    // 绑定滾動事件
    window.addEventListener("scroll", handleScroll);
    return () => {
      // 清除滾動事件
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Conatiner>
        <Div3 to="/home" isActive={location.pathname === "/home"}>
          Home
        </Div3>
        <Div4 to="/resume" isActive={location.pathname === "/resume"}>
          Resume
        </Div4>
        <Div5 to="/work" isActive={isWorkActive}>
          Work
        </Div5>
      </Conatiner>
      <ProgressBar scroll={scroll} />
    </div>
  );
}

export default App;
