import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Resume from "./Pages/resume";
import MyComponent from "./Pages/home";
import Work from "./Pages/work";
import YoungLions from "./Pages/youngLions";
import MegaBankRedesign from "./Pages/MegaBankRedesign";
import SportsWin from "./Pages/sportsWin";
import HiveBee from "./Pages/HiveBee";
import PufferVerse from "./Pages/PufferVerse";
import MangoOnTree from "./Pages/MangoOnTree";
import AInsight from "./Pages/AInsight";
import styled from "styled-components";
import CustomCursor from "./Components/CustomCursor";
import Footer from "./Components/footer";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import LoadingSpinner from "./Components/LoadingSpinner";
// import { ReactLenis, useLenis } from 'lenis/react';
// import LocomotiveScroll from 'locomotive-scroll';

const GlobalStyle = createGlobalStyle`
  body, * {
  user-select: none;
  scroll-behavior: initial; /* 使用平滑滾動 */
 }
`;

const Container = styled.div`
  align-items: center;
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9998;
  justify-content: space-between;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  height: fit-content;
  font-size: 30px;
  line-height: 1.18;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    top: unset;
    bottom: 1rem;
    width: 90%;
  }
`;

const Logo = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 50px;
  border: 1.5px solid #333;
  background-color: ${({ isActive }) => (isActive ? "#f2f2f2" : "#ffffff")};
  display: flex;
  width: 20%;
  font-weight: 700;
  padding: 10px 24px;
  box-sizing: border-box;
  height: fit-content;
  justify-content: center;

  @media (max-width: 480px) {
    top: unset;
    width: 28%;
    padding: 4px 10px;
  }
`;

const Wrapper = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 50px;
  border: 1.5px solid #333333;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  width: 80%;
  font-weight: 700;
  padding: 10px 24px;
  box-sizing: border-box;
  height: fit-content;

  @media (max-width: 480px) {
    top: unset;
    width: 100%;
    padding: 4px 10px;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  color: ${({ isActive }) => (isActive ? "#2A96B7" : "#333333")};

  @media (max-width: 480px) {
    padding: 8px 12px;
  }
`;

const SpecialNavItem = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  color: ${({ isActive }) => (isActive ? "#2A96B7" : "#333")};

  @media (max-width: 480px) {
    padding: 8px 12px;
  }
`;

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  display: none;
  background-color: #2A96B7;
  width: ${(props) => props.scroll}; /* 透過 scroll 動態設置寬度 */
  z-index: 999;
  transition: width 0.25s ease; /* 平滑滾動效果 */

  @media (max-width: 480px) {
    display: unset;
  }
`;

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  // const scrollRef = useRef(null);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current, // 绑定需要平滑滚动的容器
  //     smooth: true, // 启用平滑滚动
  //     multiplier: 0.5, // 滚动速度的倍数，值越大滚动越快
  //   });

  //   return () => {
  //     scroll.destroy(); // 组件卸载时销毁实例
  //   };
  // }, []);

  return (
    // <ReactLenis root>
    <Main 
    // id="data-scroll-container"
    >
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
          <Route path="/work/HiveBee" element={<HiveBee />} />
          <Route path="/work/PufferVerse" element={<PufferVerse />} />
          <Route path="/work/MangoOnTree" element={<MangoOnTree />} />
          <Route path="/work/AInsight" element={<AInsight />} />
        </Routes>
        <NavigationBar />
        <Footer />
      </Router>
    </Main>
  //  </ReactLenis>
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
      <Container>
        <Logo isActive={location.pathname === "/home"}>
          <SpecialNavItem to="/home" isActive={location.pathname === "/home"}>
            {location.pathname === "/home" ? "Hello 👋🏻" : "Ting-yi"}
          </SpecialNavItem>
        </Logo>
        <Wrapper>
          <NavItem to="/resume" isActive={location.pathname === "/resume"}>
            Resume
          </NavItem>
          <NavItem to="/work" isActive={isWorkActive}>
            Work
          </NavItem>
          <NavItem as="a" href="mailto:910620morgan@gmail.com">
            Contact
          </NavItem>
        </Wrapper>
      </Container>
      <ProgressBar scroll={scroll} />
    </div>
  );
}

export default App;
