import React, { useState } from "react";
import styled from "styled-components";

const ProjectFilter = ({ projects, setFilteredProjects }) => {
  const [selectedTag, setSelectedTag] = useState("");

  const handleTagClick = (tags) => {
    setSelectedTag(tags);
    if (tags === "") {
      // 如果未選中任何標籤，顯示所有專案
      setFilteredProjects(projects);
    } else {
      // 篩選包含該標籤的專案
      const filtered = projects.filter((project) =>
        project.tags.some((t) => t.name === tags)
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <Filter>
      <Tag
        onClick={() => handleTagClick("")}
        bgColor="#000fff"
        isActive={selectedTag === ""}
      >
        All
      </Tag>
      <Tag
        onClick={() => handleTagClick("Graphic design")}
        bgColor="#D58CFE"
        isActive={selectedTag === "Graphic design"}
      >
        Graphic Design
      </Tag>
      <Tag
        onClick={() => handleTagClick("Frontend coding")}
        bgColor="#F7883D"
        isActive={selectedTag === "Frontend coding"}
      >
        Frontend Coding
      </Tag>
      <Tag
        onClick={() => handleTagClick("UI/UX design")}
        bgColor="#7D8991"
        isActive={selectedTag === "UI/UX design"}
      >
        UI/UX Design
      </Tag>
      <Tag
        onClick={() => handleTagClick("Creative Campaign")}
        bgColor="#86C5CE"
        isActive={selectedTag === "Creative Campaign"}
      >
        Creative Campaign
      </Tag>
    </Filter>
  );
};

export default ProjectFilter;

// Tag component with dynamic background color based on active state
const Tag = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: ${(props) => (props.isActive ? "#fff" : props.bgColor || "#e0e0e0")};
  background-color: ${(props) => (props.isActive ? "#333" : "#f2f2f2")};
  border-radius: 50px;
  padding: 12px 16px;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in, color 0.3s ease-in;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#333" : "#e0e0e0")};
  }

  @media (max-width: 480px) {
    background-color: ${(props) => (props.isActive ? "#333" : "#e0e0e0")};
    font-size: 1rem;
  }
`;

const Filter = styled.div`
  display: flex;
  width: 90%;
  overflow-x: auto;
  justify-content: center;
  gap: 8px;

  @media (max-width: 480px) {
    justify-content: flex-start;
  }
`;
