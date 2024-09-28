import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ServiceCard = styled.div`
  background-color: #E2E2E2;
  border: 1.5px solid rgba(51, 51, 51, 1);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-radius: 16px;
  transition: background-color 0.2s ease-in;
  flex-grow: 1;
  box-sizing: border-box;
  color: #333;

  /* hover class style */
  &.hover {
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
    background-color: #333;
    color: #f2f2f2;
  }

  @media (max-width: 480px) {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: ${(props) => props.zIndex || 1};
  }
`;

const ServiceCardComponent = ({ children, hoverColor, zIndex }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;

    if (!cardElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardElement.classList.add("hover");
        } else {
          cardElement.classList.remove("hover");
        }
      },
      {
        root: null,
        threshold: 0.5, // 50% visible in the viewport
        rootMargin: "-25% 0px -25% 0px", // Adjust the trigger area on the screen
      }
    );

    observer.observe(cardElement);

    // Clean up the observer on component unmount
    return () => {
      observer.unobserve(cardElement);
    };
  }, []);

  return (
    <ServiceCard ref={cardRef} hoverColor={hoverColor} zIndex={zIndex}>
      {children}
    </ServiceCard>
  );
};

export default ServiceCardComponent;



