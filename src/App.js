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
  scroll-behavior: initial; /* 使用平滑滾動 */
 }

  /* 開放選取／長按複製。原本這裡是 user-select: none，
     行動裝置長按也一併靠 -webkit-touch-callout 恢復。 */
  body, body * {
    -webkit-user-select: text;
    user-select: text;
    -webkit-touch-callout: default;
  }

  /* 基準文字色：蓋掉瀏覽器預設的純黑，讓沒宣告顏色的文字也用系統色。
     只下在 body，靠繼承生效，元件自己宣告的顏色仍然優先。 */
  body {
    color: #2A3133;
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

  /* 頂端時貼齊視窗邊緣；捲動收合後左右內縮到 36px —— 與 footer 的左右 margin 一致，
     配合 space-between 讓兩顆膠囊往中間靠攏 —— 同時上方讓出 16px，讓導覽列離開
     視窗邊緣浮起來。只加上方不加下方：容器本身透明，下方留白不會被看到，
     反而會多擋住 16px 的內容點擊。 */
  padding: ${({ $condensed }) => ($condensed ? "16px 36px 0" : "0")};
  transition: padding 0.36s cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 480px) {
    padding: 0;
    font-size: 0.9rem;
    top: unset;
    bottom: 1rem;
    width: 90%;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Logo = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-radius: 50px;
  border: 1.5px solid #2A3133;
  background-color: ${({ isActive }) => (isActive ? "#f2f2f2" : "#ffffff")};
  display: flex;
  width: 20%;
  font-weight: 700;
  padding: 6px 12px; /* 內距讓給 SpecialNavItem，與 Wrapper 一致 */
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
  position: relative; /* 滑動指示器的定位基準 */
  border-radius: 50px;
  border: 1.5px solid #2A3133;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  width: 80%;
  font-weight: 700;
  padding: 6px 12px; /* 內距讓給 NavItem，整體列高維持 58px */
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
  color: ${({ isActive }) => (isActive ? "#2A96B7" : "#2A3133")};

  @media (max-width: 480px) {
    padding: 8px 12px;
  }
  position: relative;
  z-index: 1;
  padding: 4px 16px;
  border-radius: 50px;
  transition: color 0.2s ease;

  &:focus-visible {
    outline: 2px solid #2A96B7;
    outline-offset: 2px;
  }
`;

const SpecialNavItem = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  color: ${({ isActive }) => (isActive ? "#2A96B7" : "#2A3133")};

  @media (max-width: 480px) {
    padding: 8px 12px;
  }
  position: relative;
  z-index: 1;
  padding: 4px 16px;
  border-radius: 50px;
  transition: color 0.2s ease;

  &:focus-visible {
    outline: 2px solid #2A96B7;
    outline-offset: 2px;
  }
`;

/* 導覽列的滑動指示器：hover 時跟著游標移動，離開後回到目前所在頁面。
   位置由 NavigationBar 量測 offsetLeft / offsetWidth 後餵進來。 */
const Glide = styled.span`
  position: absolute;
  top: 6px;
  bottom: 6px;
  z-index: 0;
  border-radius: 50px;
  background-color: #EDEDED;
  pointer-events: none;
  opacity: ${({ $ready }) => ($ready ? 1 : 0)};
  transition:
    left 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    width 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.2s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const ProgressBar = styled.div`
  /* 原本 display:none、只在 ≤480px 顯示。改成貼在導覽列下緣，桌機也看得到。
     用 absolute 依附 Container，列高變動時不用改這裡。 */
  display: none; /* 電腦版先隱藏；只在手機版顯示 */
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  background-color: #2A96B7;
  width: ${(props) => props.scroll};
  transition: width 0.25s ease;

  @media (max-width: 480px) {
    /* 手機版導覽列在畫面下方，進度條維持固定在頂端 */
    display: unset;
    position: fixed;
    top: 0;
    bottom: auto;
    height: 5px;
    z-index: 999;
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
  const [condensed, setCondensed] = useState(false);

  /* 滑動指示器：只在 hover / focus 時出現，指向游標所在的項目。
     所在頁面本身用文字色（#2A96B7）表示，不再另外給底色。 */
  const [glide, setGlide] = useState({ left: 0, width: 0, ready: false });

  const moveGlideTo = (el) => {
    if (!el) return;
    setGlide({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
  };

  /* 離開整個膠囊才隱藏；在項目之間移動時不會閃爍 */
  const hideGlide = () => setGlide((g) => ({ ...g, ready: false }));

  /* 只有鍵盤 focus 才顯示指示器。
     用滑鼠點過的連結會一直保有 focus，切換視窗回來時瀏覽器會再對它發一次
     focus 事件；若照單全收，指示器會停在該項目上，而游標早就不在導覽列，
     onMouseLeave 永遠不會觸發 —— 指示器就卡住了。 */
  const focusGlideTo = (el) => {
    if (!el) return;
    let keyboard = true;
    try {
      keyboard = el.matches(":focus-visible");
    } catch {
      /* 舊瀏覽器不認得 :focus-visible，維持原本行為 */
    }
    if (keyboard) moveGlideTo(el);
  };

  // 監聽滾動事件，計算滾動百分比
  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop; // 已經滾動的頁面距離
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight; // 整個頁面的高度
    const scrollProgress = `${(totalScroll / windowHeight) * 100}%`; // 計算比例
    setScroll(scrollProgress); // 依照比例更新進度條的寬度
    setCondensed(totalScroll > 40); // 離開頂端就收合導覽列
  };

  /* 換頁後把指示器歸零，避免導覽到新頁面時殘留在舊項目上 */
  useEffect(() => {
    setGlide((g) => ({ ...g, ready: false }));
  }, [location.pathname]);

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
      <Container $condensed={condensed}>
        <Logo isActive={location.pathname === "/home"}>
          <SpecialNavItem to="/home" isActive={location.pathname === "/home"}>
            {location.pathname === "/home" ? "Hello 👋🏻" : "Ting-yi"}
          </SpecialNavItem>
        </Logo>
        <Wrapper onMouseLeave={hideGlide}>
          <Glide
            $ready={glide.ready}
            style={{ left: glide.left, width: glide.width }}
          />
          <NavItem
            to="/resume"
            isActive={location.pathname === "/resume"}
            onMouseEnter={(e) => moveGlideTo(e.currentTarget)}
            onFocus={(e) => focusGlideTo(e.currentTarget)}
            onBlur={hideGlide}
          >
            Resume
          </NavItem>
          <NavItem
            to="/work"
            isActive={isWorkActive}
            onMouseEnter={(e) => moveGlideTo(e.currentTarget)}
            onFocus={(e) => focusGlideTo(e.currentTarget)}
            onBlur={hideGlide}
          >
            Work
          </NavItem>
          <NavItem
            as="a"
            href="mailto:910620morgan@gmail.com"
            onMouseEnter={(e) => moveGlideTo(e.currentTarget)}
            onFocus={(e) => focusGlideTo(e.currentTarget)}
            onBlur={hideGlide}
          >
            Contact
          </NavItem>
        </Wrapper>
        <ProgressBar scroll={scroll} />
      </Container>
    </div>
  );
}

export default App;
