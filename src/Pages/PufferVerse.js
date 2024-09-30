import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #47495a;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  transition: background-color 0.2s ease-in;

  a {
    display: flex;
    color: #666;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
  }

  &:hover {
    color: #fff;
    background-color: #000;
  }
`;

const IconImage = styled.img`
  width: auto;
  height: 15vh;

  @media (max-width: 480px) {
    width: 15vw;
    height: auto;
  }
`;

const SectionTitle = styled.h1`
  font-size: 2rem;
  margin: 2rem 0;
  color: #fff;
`;

const ButtonGroup = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 1rem;
  margin-top: 2.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
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
  margin-top: 5rem;

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

export const PufferVerse = () => {
  return (
    <Container>
      <Image loading="lazy" src="/pufferverse.jpg" alt="MegaBank_redesign" />
      <SectionTitle>More information</SectionTitle>
      <ButtonGroup>
        <LinkButton
          imageSrc="/puffer.png"
          href="https://tome.app/tingyilin/niqlo-pufferverse-cm0l048t70ob76j1jun5bx1iq"
        >
          完整企劃書 📋
        </LinkButton>
        <LinkButton
          imageSrc="/puffer-1.png"
          href="https://www.figma.com/proto/eVpTNJewJcb6Y6wFX1IKzq/pufferverse?page-id=0%3A1&node-id=115-38&node-type=canvas&viewport=146%2C420%2C0.1&t=EEBzAXsMIhhWzpqk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2"
        >
          Prototype 👀
        </LinkButton>
      </ButtonGroup>
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

export default PufferVerse;
