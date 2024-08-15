import React from "react";
import "./style.css";
import styled, { keyframes } from 'styled-components';

export const Work = () => {
    return(
        <Div>
    <BallContainer>
      <Ball size={50} color="#ff5733" duration={2} delay={0} />
      <Ball size={70} color="#33c1ff" duration={2.5} delay={0.5} />
      <Ball size={40} color="#8d33ff" duration={1.8} delay={1} />
      <Ball size={60} color="#33ff57" duration={2.2} delay={0.2} />
      <Ball size={30} color="#ffd633" duration={1.5} delay={0.7} />
    </BallContainer>
        </Div>
    );
}
export default Work

const Div = styled.div`
    height: 90vh;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 13vh;
    margin: 0; /* 清除 margin */

    @media (max-width: 440px) {
      padding-top: 6vh;
    }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-200px) translateX(0px);
  }
`;

const Ball = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.color};
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  animation: ${bounce} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const BallContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #f0f0f0;
`;
