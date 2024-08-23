import React, { useEffect } from "react";
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
import styled from "styled-components";
import CustomCursor from "./CustomCursor";
import { createGlobalStyle } from "styled-components";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  body, * {
  user-select: none;
 }
`;

const Div2 = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  align-items: center;
  position: fixed;
  top: 0;
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
  padding: 8px 9px;
  box-sizing: border-box;

  @media (max-width: 440px) {
    font-size: 24px;
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
  color: ${({ isActive }) => (isActive ? "#0000FF" : "#333333")};
`;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
          {/* 其他路由... */}
        </Routes>
        <NavigationBar />
      </Router>
    </>
  );
}

function NavigationBar() {
  const location = useLocation();

  return (
    <Div2>
      <Div3 to="/home" isActive={location.pathname === "/home"}>
        Home
      </Div3>
      <Div4 to="/resume" isActive={location.pathname === "/resume"}>
        Resume
      </Div4>
      <Div5 to="/work" isActive={location.pathname === "/work"}>
        Work
      </Div5>
    </Div2>
  );
}

export default App;
