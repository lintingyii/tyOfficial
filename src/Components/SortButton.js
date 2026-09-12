import React, { useState } from "react";
import styled from "styled-components";
import { useInView } from 'react-intersection-observer';

const Button = styled.button`
  /* 與上方的篩選膠囊同一個家族：一樣的圓角與內距，字級小一階
     （篩選是 1.2rem），讀起來是同一排控制項裡比較次要的那顆。 */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 50px;
  padding: 12px 16px;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background-color 0.3s ease-in,
    color 0.3s ease-in,
    border-color 0.3s ease-in;

  /* 未啟用時原本是 #e2e2e2 的字配 #f2f2f2 的底，對比只有 1.1:1，
     圖示等於隱形。改成 #5F5E5A，對比 5.9:1。 */
  color: ${({ $sorted }) => ($sorted ? "#fff" : "#5F5E5A")};
  background-color: ${({ $sorted }) => ($sorted ? "#2A3133" : "#f2f2f2")};
  border: 1.5px solid ${({ $sorted }) => ($sorted ? "#2A3133" : "#e2e2e2")};

  &:hover {
    background-color: ${({ $sorted }) => ($sorted ? "#2A3133" : "#e2e2e2")};
  }

  &:focus-visible {
    outline: 2px solid #2A96B7;
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 10px 14px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: right;
  opacity: 0; 
  transition: opacity 1.5s ease, transform 1.5s ease, background-color 0.8s ease;
  transform: translateX(-100%);

  &.visible {
    opacity: 1;
    transform: translateX(0); /* 滑入畫面 */
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

/* 未排序：上下雙箭頭，表示「可以重新排列」 */
const SortIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 20V4M4 7l3-3 3 3" />
    <path d="M17 4v16M20 17l-3 3-3-3" />
  </svg>
);

/* 已排序：長度遞減的橫線加向下箭頭，表示「由新到舊」 */
const SortDescIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 6h10M4 12h7M4 18h4" />
    <path d="M18 8v11M21 16l-3 3-3-3" />
  </svg>
);

const SortButton = ({ filteredProjects, originalFilteredProjects, setFilteredProjects, isSorted, setIsSorted }) => {

    const  { ref , inView , entry }  =  useInView ( { 
        /* 可選選項 */ 
        Threshold : 0.2 , 
      } ) ;
  
      const handleSortToggle = () => {
        if (isSorted) {
          setFilteredProjects(originalFilteredProjects);
        } else {
          const months = {
            January: 0,
            February: 1,
            March: 2,
            April: 3,
            May: 4,
            June: 5,
            July: 6,
            August: 7,
            September: 8,
            October: 9,
            November: 10,
            December: 11,
          };
      
          const sortedProjects = [...filteredProjects].sort((a, b) => {
            const parseDate = (dateStr) => {
              // Handle both "Month, Year" and "Month - Month Year" formats
              if (dateStr.includes("-")) {
                // Extract the first month and year from "Month - Month Year"
                const [range, year] = dateStr.split(" ");
                const [startMonth] = range.split(" - ");
                return new Date(year, months[startMonth.trim()]);
              } else {
                // Handle "Month, Year" format
                const [month, year] = dateStr.split(", ");
                return new Date(year, months[month.trim()]);
              }
            };
      
            const dateA = parseDate(a.date);
            const dateB = parseDate(b.date);
      
            return dateB - dateA;
          });
      
          setFilteredProjects(sortedProjects);
        }
        setIsSorted(!isSorted);
      };      

  return (
    <Container ref={ref} className={inView ? "visible" : ""}>
      <Button
        type="button"
        $sorted={isSorted}
        onClick={handleSortToggle}
        aria-pressed={isSorted}
        aria-label={
          isSorted
            ? "已依日期排序，由新到舊。按一下回到原本順序"
            : "依日期排序，由新到舊"
        }
        title={isSorted ? "回到原本順序" : "依日期排序（新到舊）"}
      >
        {isSorted ? <SortDescIcon /> : <SortIcon />}
        Newest first
      </Button>
    </Container>
  );
};

export default SortButton;

