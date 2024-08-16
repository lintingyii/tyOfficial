import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const CustomCursorDiv = styled.div`
  width: 22px;
  height: 22px;
  background-color: #F5FF00;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  transition: opacity 0.15s ease-in-out;
  opacity: ${(props) => (props.visible ? 1 : 0)}; /* 控制是否可见 */
  mix-blend-mode: difference;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    background-color: #F5FF00; /* 颜色和透明度可以调整 */
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
  }

  &::before {
    animation: trail1 1s linear infinite;
  }

  &::after {
    animation: trail2 1s linear infinite;
  }

  @keyframes trail1 {
    0% {
      opacity: 0.5;
      transform: translate(0%, 0%) scale(0.5);
    }
    100% {
      opacity: 0;
      transform: translate(0%, 0%) scale(1.8);
    }
  }

  @keyframes trail2 {
    0% {
      opacity: 0.5;
      transform: translate(0%, 0%) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(0%, 0%) scale(2.8);
    }
  }
`;


const CustomCursor = () => {
    const [visible, setVisible] = useState(false); // 控制鼠标是否可见
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const moveCursor = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        setVisible(true); // 显示鼠标
      };
  
      const hideCursor = () => {
        setVisible(false); // 隐藏鼠标
      };
  
      window.addEventListener("mousemove", moveCursor);
      window.addEventListener("mouseout", hideCursor); // 鼠标离开窗口时隐藏
      window.addEventListener("scroll", moveCursor); // 滚动时保持鼠标跟随
  
      return () => {
        window.removeEventListener("mousemove", moveCursor);
        window.removeEventListener("mouseout", hideCursor);
        window.removeEventListener("scroll", moveCursor);
      };
    }, []);
  
    return <CustomCursorDiv visible={visible} style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
  };

export default CustomCursor;
  