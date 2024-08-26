import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ServiceCard = styled.div`
  background-color: #333333;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  font-size: 48px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-radius: 16px;
  transition: background-color 0.2s ease-in;
  flex-grow: 1;

  /* hover class style */
  &.hover {
    background-color: ${(props) => props.hoverColor || "#000fff"};
  }

  @media (max-width: 480px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

const ServiceCardComponent = ({ children, hoverColor }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current.classList.add("hover");
        } else {
          cardRef.current.classList.remove("hover");
        }
      },
      {
        root: null,
        threshold: 0.5, // 50% visible in the viewport
        rootMargin: "-25% 0px -25% 0px", //減少螢幕上觸發hover state的範圍
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <ServiceCard ref={cardRef} hoverColor={hoverColor}>
      {children}
    </ServiceCard>
  );
};

export default ServiceCardComponent;
