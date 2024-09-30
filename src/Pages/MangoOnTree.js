import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #EFEBE5;
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

export const MangoOnTree = () => {
  return (
    <Container>
      <Image loading="lazy" src="/mangoontree.jpg" alt="mango-on-tree" />
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

export default MangoOnTree;
