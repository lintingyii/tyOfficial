import React, { useEffect, useState, useRef } from "react";
import gsap from 'gsap';
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
import styled from "styled-components";
import CustomCursor from "./Components/CustomCursor";
import Footer from "./Components/footer";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import LoadingSpinner from "./Components/LoadingSpinner";
import { ReactLenis, useLenis } from 'lenis/react';

const GlobalStyle = createGlobalStyle`
  body, * {
  user-select: none;
 }
`;

const Container = styled.div`
  align-items: center;
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
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
  color: ${({ isActive }) => (isActive ? "#0000FF" : "#333333")};

  @media (max-width: 480px) {
    padding: 8px 12px;
  }
`;

const SpecialNavItem = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  color: ${({ isActive }) => (isActive ? "#D58CFE" : "#333")};

  @media (max-width: 480px) {
    padding: 8px 12px;
  }
`;

function PageWithLoading() {
  const location = useLocation(); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    setLoading(true); // 页面变化时显示 loading
    const timer = setTimeout(() => {
      setLoading(false); // 2 秒后关闭 loading
    }, 2000);

    return () => clearTimeout(timer); // 清除定时器，避免内存泄漏
  }, [location]); // location 变化时重新运行

  // 页面加载时显示 Loading 组件
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<MyComponent />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/youngLions" element={<YoungLions />} />
      <Route path="/work/MegaBank_Redesign" element={<MegaBankRedesign />} />
      <Route path="/work/sports_win" element={<SportsWin />} />
    </Routes>
  );
}

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  display: none;
  background-color: #d58cfe;
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

  const lenisRef = useRef(null);
  
  let lastUpdate = 0;

useEffect(() => {
  function update(time) {
    if (time - lastUpdate > 16) { // 大约每 16 毫秒更新一次
      lastUpdate = time;
      if (lenisRef.current) {
        lenisRef.current.lenis.raf(time * 1000);
      }
    }
  }

  gsap.ticker.add(update);
  
  return () => {
    gsap.ticker.remove(update);
  };
}, []);

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  return (
    <ReactLenis root>
    <Main>
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
        </Routes>
        <NavigationBar />
        <Footer />
      </Router>
    </Main>
    </ReactLenis>
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
