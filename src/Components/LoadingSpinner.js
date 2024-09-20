import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-200px) translateX(0px);
  }
`;

const P = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.5rem;
  color: #4B4B4B;
`;

const Ball = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  position: absolute;
  bottom: 40vh;
  animation: ${bounce} ${(props) => props.duration}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const BallContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20vh;
  box-sizing: border-box;
`;

const LoadingSpinner = () => (
  <BallContainer>
    <P>Loading...</P>
    <Ball size={60} color="#D58CFE" duration={2} delay={0} />
    <Ball size={50} color="#F7883D" duration={1} delay={0.2} />
    <Ball size={40} color="#000fff" duration={2} delay={0.4} />
    <Ball size={30} color="#7D8991" duration={1} delay={0.6} />
    <Ball size={20} color="#A06E29" duration={2} delay={0.8} />
  </BallContainer>
);

export default LoadingSpinner;
