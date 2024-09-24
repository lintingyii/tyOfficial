import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  color: ${({ isSorted }) => (isSorted ? "#a8a8a8" : "#e2e2e2")};
  padding: 10px;
  border: 1.5px solid #e2e2e2;
  border-radius: 12px;
  width: auto;
  cursor: pointer;
  background-color: ${({ isSorted }) => (isSorted ? "#e2e2e2" : "#f2f2f2")};

//   &:hover {
//     background-color: #F6F6F6;
//   }
`;

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: right;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="2rem"
    height="2rem"
    fill="currentColor"
  >
    <path d="M232,136.66A104.12,104.12,0,1,1,119.34,24,8,8,0,0,1,120.66,40,88.12,88.12,0,1,0,216,135.34,8,8,0,0,1,232,136.66ZM160,48a12,12,0,1,0-12-12A12,12,0,0,0,160,48Zm36,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72Zm24,36a12,12,0,1,0-12-12A12,12,0,0,0,220,108ZM128,56a72,72,0,1,1-72,72A72.08,72.08,0,0,1,128,56Zm-8,72a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H136V80a8,8,0,0,0-16,0Z" />
  </svg>
);

const SortButton = ({ filteredProjects, originalFilteredProjects, setFilteredProjects, isSorted, setIsSorted }) => {
  
    const handleSortToggle = () => {
      if (isSorted) {
        // 回到篩選後的原始順序
        setFilteredProjects(originalFilteredProjects);
      } else {
        // 按日期排序
        const sortedProjects = [...filteredProjects].sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        setFilteredProjects(sortedProjects);
      }
      setIsSorted(!isSorted); // 切換排序狀態
    };

  return (
    <Container>
      <Button isSorted={isSorted} onClick={handleSortToggle}>
        <ClockIcon />
      </Button>
    </Container>
  );
};

export default SortButton;

