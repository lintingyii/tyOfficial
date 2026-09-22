import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import About from "./Pages/about";
import MyComponent from "./Pages/home";
import Work from "./Pages/work";
import Gallery from "./Pages/gallery";
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
import TitleStars from "./Components/TitleStars";
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

/* 目前所在的項目，文字右邊帶一顆星星 —— 跟首頁那顆同一個形狀，顏色分開：
   首頁是黃的、其他頁是藍的，所以「我在哪一頁」不只靠文字顏色，形狀旁邊
   還多一個訊號。margin 給在這裡而不是寫成 JSX 裡的空白，避免換行時
   文字跟星星被拆到兩行。 */
const ActiveStar = styled(TitleStars).attrs({ $color: "#2A96B7" })`
  margin-left: 0.35em;
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
          {/* 舊網址：這一頁本來叫 /resume，可能已經貼在 LinkedIn 或投出去的
              履歷裡，留一條 redirect 免得變死連結。不會出現在導覽列上。 */}
          <Route path="/resume" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/gallery" element={<Gallery />} />
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

  /* 尾斜線要先削掉再比對。同一個頁面的 pathname 不一定長得一樣 ——
     點導覽列進來是 "/gallery"，直接輸入網址或被伺服器導過來是 "/gallery/" ——
     嚴格比對 === 會在後者漏掉，active 狀態就不會亮。 */
  const path = location.pathname.replace(/\/+$/, "") || "/home";
  const isWorkActive = path.startsWith("/work");

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

  // 監聽滾動事件：離開頂端就收合導覽列
  const handleScroll = () => {
    setCondensed(document.documentElement.scrollTop > 40);
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
        <Logo isActive={path === "/home"}>
          <SpecialNavItem to="/home" isActive={path === "/home"}>
            {path === "/home" ? (
              <>
                Hello <TitleStars aria-hidden="true" />
              </>
            ) : (
              "Ting-yi"
            )}
          </SpecialNavItem>
        </Logo>
        <Wrapper onMouseLeave={hideGlide}>
          <Glide
            $ready={glide.ready}
            style={{ left: glide.left, width: glide.width }}
          />
          <NavItem
            to="/about"
            isActive={path === "/about"}
            onMouseEnter={(e) => moveGlideTo(e.currentTarget)}
            onFocus={(e) => focusGlideTo(e.currentTarget)}
            onBlur={hideGlide}
          >
            About
            {path === "/about" && <ActiveStar aria-hidden="true" />}
          </NavItem>
          <NavItem
            to="/work"
            isActive={isWorkActive}
            onMouseEnter={(e) => moveGlideTo(e.currentTarget)}
            onFocus={(e) => focusGlideTo(e.currentTarget)}
            onBlur={hideGlide}
          >
            Work
            {isWorkActive && <ActiveStar aria-hidden="true" />}
          </NavItem>
          {/* 這一格本來是 Contact（mailto:）。信箱在 footer 每頁都有，
              導覽列那一格留給真正的目的地。 */}
          <NavItem
            to="/gallery"
            isActive={path === "/gallery"}
            onMouseEnter={(e) => moveGlideTo(e.currentTarget)}
            onFocus={(e) => focusGlideTo(e.currentTarget)}
            onBlur={hideGlide}
          >
            Gallery
            {path === "/gallery" && <ActiveStar aria-hidden="true" />}
          </NavItem>
        </Wrapper>
      </Container>
    </div>
  );
}

export default App;
