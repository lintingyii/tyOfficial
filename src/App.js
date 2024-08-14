import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Resume from './resume';
import MyComponent from './home';
import styled from 'styled-components';

const Div2 = styled.div`
 font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;  
  justify-content: center;
  border-radius: 50px;
  border: 1.5px solid #333333;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 97%;
  font-size: 30px;
  font-weight: 700;
  padding: 8px 9px;
  @media (max-width: 820px) {
    max-width: 95%;
  }
  @media (max-width: 440px) {
    max-width: 95%;
    font-size: 24px;
  }
`;

const Div3 = styled(Link)`
  text-decoration: none;
  margin-right: 20px;
  color: ${({ isActive }) => (isActive ? '#0000FF' : '#333333')};
`;

const Div4 = styled(Link)`
  text-decoration: none;
  text-align: center;
  flex-grow: 1;
  flex-basis: auto;
  color: ${({ isActive }) => (isActive ? '#0000FF' : '#333333')};
  margin-right: 20px;
`;

const Div5 = styled.div`
  text-align: right;
  color: #333333;
`;

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<MyComponent />} />
        <Route path="/home" element={<MyComponent />} />
        <Route path="/resume" element={<Resume />} />
        {/* 其他路由... */}
      </Routes>
      <NavigationBar />
    </Router>
  );
}

function NavigationBar() {
  const location = useLocation();

  return (
    <Div2>
      <Div3 to="/home" isActive={location.pathname === '/home'}>
        Home
      </Div3>
      <Div4 to="/resume" isActive={location.pathname === '/resume'}>
        Resume
      </Div4>
      <Div5>Work</Div5>
    </Div2>
  );
}

export default App;


