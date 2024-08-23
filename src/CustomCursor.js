import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L12 21M12 21L5 14M12 21L19 14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="square" transform="rotate(-90 12 12)"/>
  </svg>
);

const CustomCursorDiv = styled.div`
  width: ${(props) => (props.isLink ? '60px' : '22px')};  /* 修改圆形大小 */
  height: ${(props) => (props.isLink ? '60px' : '22px')};  /* 修改圆形大小 */
  background-color: ${(props) => (props.isLink ? '#000fff' : '#F5FF00')};  /* 保持背景颜色一致 */
  border-radius: 50%;  /* 无论是否是链接，都是圆形 */
  position: fixed;
  pointer-events: none;
  z-index: 10000;
  transform: ${(props) => (props.isLink ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out, width 0.15s ease-in-out, height 0.15s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;  /* 文字颜色 */
  font-size: 16px;  /* 文字大小 */
  font-weight: normal;
  mix-blend-mode:  ${(props) => (props.isLink ? 'none' : 'difference')};

  ${(props) => !props.isLink && `
    &::before, &::after {
      content: '';
      position: absolute;
      width: 22px;
      height: 22px;
      background-color: #F5FF00;
      border-radius: 50%;
      pointer-events: none;
      z-index: -1;
      opacity: 0.5;
      transition: opacity 0.15s ease-in-out;
    }

    &::before {
      animation: trail1 1s linear infinite;
    }

    &::after {
      animation: trail2 1s linear infinite;
    }
  `}

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

  @media (max-width: 1040px) {
    opacity: 0;
  }
`;

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      // 更精确地判断元素是否为链接
      if (e.target && e.target.nodeType === 1) { // 确保 e.target 是元素节点
        const targetTag = e.target.tagName?.toLowerCase();
        const targetIsLink = targetTag === 'a' || e.target.closest('a');
        setIsLink(targetIsLink);
      } else {
        setIsLink(false);
      }
    };

    const hideCursor = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseout', hideCursor);
    window.addEventListener('scroll', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseout', hideCursor);
      window.removeEventListener('scroll', moveCursor);
    };
  }, []);

  return (
    <CustomCursorDiv
      visible={visible}
      isLink={isLink}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {isLink && <ArrowIcon />} 
    </CustomCursorDiv>
  );
};

export default CustomCursor;





