import React, { useState } from "react";
import styled from "styled-components";
import { useInView } from 'react-intersection-observer';

const Button = styled.button`
  color: ${({ isSorted }) => (isSorted ? "#a8a8a8" : "#e2e2e2")};
  padding: 10px;
  border: 1.5px solid #e2e2e2;
  border-radius: 12px;
  width: auto;
  cursor: pointer;
  background-color: ${({ isSorted }) => (isSorted ? "#e2e2e2" : "#f2f2f2")};
  opacity: 0; 
  transition: opacity 1.5s ease, transform 1.5s ease, background-color 0.8s ease;
  transform: translateX(-200%);

  &.visible {
    opacity: 1;
    transform: translateX(0); /* 滑入畫面 */
  }
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
    <Container>
      <Button isSorted={isSorted} onClick={handleSortToggle} ref={ref} className={inView ? "visible" : ""}>
        <ClockIcon />
      </Button>
    </Container>
  );
};

export default SortButton;

