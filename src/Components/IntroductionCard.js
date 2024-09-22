import React from "react";
import styled, { keyframes } from "styled-components";

const load = keyframes`
  0% {
    transform: translateX(-40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: left;
  padding: 20px;
  width: 80%;
  height: auto;
  border: 1.5px solid ${({ borderColor }) => borderColor || '#E2E2E2'};
  border-radius: 12px;
  box-sizing: border-box;
  animation: ${load} 400ms ease-in forwards;
  animation-delay: 20ms;

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
    return (
        <CardContainer borderColor={borderColor}>
            <Content>
                {description}
            </Content>
        </CardContainer>
    );
  }

export default IntroductionCard;
