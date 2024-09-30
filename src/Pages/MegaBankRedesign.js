import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoadingSpinner from "../Components/LoadingSpinner";

const Container = styled.div`
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #f2f2f2;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  // @media (max-width: 480px) {
  //   padding-bottom: 8vh;
  // }
`;

const Image = styled.img`
  width: ${(props) => props.width || "100%"};
  display: block;
`;

const SpecialButton = styled.button`
  font-size: 1.3rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  display: flex;
  padding: 1rem;
  margin: auto;
  margin-top: 40px;
  width: 70%;

  a {
    display: flex;
    color: #666;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }

  &:hover {
    color: #333;
    background-color: #f0f2f9;
  }
`;

const IconImage = styled.img`
  width: 10vw;
  height: auto;

  @media (max-width: 480px) {
    width: 15vw;
  }
`;

const BackButton = styled.button`
  background-color: #e1cdff;
  color: #0000ff;
  padding: 8px 24px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 40px;

  transition: background-color 0.8s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
  }
`;

const LinkButton = ({ imageSrc, imageWidth, href, children }) => (
  <SpecialButton>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      {imageSrc && (
        <IconImage src={imageSrc} alt="icon" imageWidth={imageWidth} />
      )}
      {children}
    </a>
  </SpecialButton>
);

export const MegaBankRedesign = () => {
  return (
    <Container>
      <Image loading="lazy" src="/megabank.jpg" alt="MegaBank_redesign" />
      <LinkButton
        imageSrc="/mega.png"
        href="https://www.figma.com/proto/EF36FvpfiARyTCxh68FFTg/mega-bank?page-id=0%3A1&node-id=14-37&node-type=canvas&viewport=419%2C368%2C0.05&t=il7Oa4MRE3tHWUDE-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=14%3A37"
      >
        Prototype 👀
      </LinkButton>
      <a
        href="/work"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <BackButton>Back to Work</BackButton>
      </a>
    </Container>
  );
};

export default MegaBankRedesign;
