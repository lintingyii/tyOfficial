import React from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from 'react-intersection-observer';

const CardContainer = styled.div`
  display: flex;
  align-items: left;
  padding: 20px;
  width: 80%;
  height: auto;
  border: 1.5px solid ${({ borderColor }) => borderColor || '#E2E2E2'};
  border-radius: 12px;
  box-sizing: border-box;
  opacity: 0; 
  transition: opacity 1.5s ease, transform 1.5s ease, background-color 0.8s ease;
  transform: translateX(-100%);

  &.visible {
    opacity: 1;
    transform: translateX(0); /* 滑入畫面 */
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Content = styled.div`
  display: flex;
  text-align: left
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.2rem;
  color: #A8A8A8;

  @media (max-width: 800px) {
    font-size: 1.1rem;
  }
`;

function IntroductionCard({
    description,
    borderColor 
  }) {
    const  { ref , inView , entry }  =  useInView ( { 
        /* 可選選項 */ 
        Threshold : 0.2 , 
      } ) ;

    return (
        <CardContainer borderColor={borderColor} ref={ref} className={inView ? "visible" : ""}>
            <Content>
                {description}
            </Content>
        </CardContainer>
    );
  }

export default IntroductionCard;
