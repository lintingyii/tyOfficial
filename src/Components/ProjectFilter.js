import React, { useState } from "react";
import styled from "styled-components";

// const ProjectFilter = ({ projects, setFilteredProjects }) => {
//   const [selectedTag, setSelectedTag] = useState("");

//   const handleTagClick = (tags) => {
//     setSelectedTag(tags);
//     if (tags === "") {
//       // 如果未選中任何標籤，顯示所有專案
//       setFilteredProjects(projects);
//     } else {
//       // 篩選包含該標籤的專案
//       const filtered = projects.filter((project) =>
//         project.tags.some((t) => t.name === tags)
//       );
//       setFilteredProjects(filtered);
//     }
//   };

//   return (
//     <Filter>
//       <Tag
//         onClick={() => handleTagClick("")}
//         bgColor="#000fff"
//         isActive={selectedTag === ""}
//       >
//         All
//       </Tag>
//       <Tag
//         onClick={() => handleTagClick("Graphic design")}
//         bgColor="#D58CFE"
//         isActive={selectedTag === "Graphic design"}
//       >
//         Graphic Design
//       </Tag>
//       <Tag
//         onClick={() => handleTagClick("Frontend coding")}
//         bgColor="#F7883D"
//         isActive={selectedTag === "Frontend coding"}
//       >
//         Frontend Coding
//       </Tag>
//       <Tag
//         onClick={() => handleTagClick("UI/UX design")}
//         bgColor="#7D8991"
//         isActive={selectedTag === "UI/UX design"}
//       >
//         UI/UX Design
//       </Tag>
//       <Tag
//         onClick={() => handleTagClick("Creative Campaign")}
//         bgColor="#86C5CE"
//         isActive={selectedTag === "Creative Campaign"}
//       >
//         Creative Campaign
//       </Tag>
//     </Filter>
//   );
// };

const ProjectFilter = ({
  projects,
  setFilteredProjects,
  setIntroductionDescription,
}) => {
  const [selectedTag, setSelectedTag] = useState("");

  const handleTagClick = (tags) => {
    setSelectedTag(tags);
    if (tags === "") {
      setFilteredProjects(projects);
      setIntroductionDescription(getIntroductionByTag(""));
    } else {
      const filtered = projects.filter((project) =>
        project.tags.some((t) => t.name === tags)
      );
      setFilteredProjects(filtered);

      // 根据选定的标签更新介绍卡片的描述
      const introduction = getIntroductionByTag(tags);
      setIntroductionDescription(introduction);
    }
  };

  const getIntroductionByTag = (tag) => {
    switch (tag) {
      case "":
        return (
          <Content>
            <DefaultIcon />
            <TextWrapper>
              <p style={{ margin: "0" }}>
                I'm a
                <span
                  style={{
                    color: "#000fff",
                    margin: "0 4px",
                    width: "fit-content",
                    fontWeight: "500",
                  }}
                >
                  multidisciplinary designer
                </span>
                passionate about creating innovative, user-centered and
                good-looking things. With a strong background in user
                experience, I bring creativity and precision to every project.
              </p>
            </TextWrapper>
          </Content>
        );
      case "Graphic design":
        return (
          <Content>
            <GraphicIcon />
            <TextWrapper>
              <p style={{ margin: "0" }}>
                As a graduate in
                <span
                  style={{
                    color: "#D58CFE",
                    margin: "0 4px",
                    width: "fit-content",
                    fontWeight: "500",
                  }}
                >
                  Visual Communication Design,
                </span>
                I enjoy exploring various design styles,
                <span
                  style={{
                    color: "#D58CFE",
                    margin: "0 4px",
                    width: "fit-content",
                    fontWeight: "500",
                  }}
                >
                  blending creativity and aesthetics
                </span>
                to craft distinctive and cohesive visual identities for brands.
                I focus on translating brand stories into compelling visual
                experiences that effectively communicate core values and stand
                out in the market.
              </p>
            </TextWrapper>
          </Content>
        );
      case "Frontend coding":
        return (
          <Content>
            <CodeIcon />
            <TextWrapper>
              <p style={{ margin: "0" }}>
                I'm
                <span
                  style={{
                    color: "#F7883D",
                    margin: "0 4px",
                    width: "fit-content",
                    fontWeight: "400",
                    backgroundColor: "#E2E2E2",
                    borderRadius: "4px",
                    padding: "0 6px",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                  }}
                >
                  {"{"} highly_technical {"}"}
                </span>
                , and eventhough
                <span
                  style={{
                    color: "#F7883D",
                    margin: "0 4px",
                    width: "fit-content",
                    fontWeight: "400",
                    backgroundColor: "#E2E2E2",
                    borderRadius: "4px",
                    padding: "0 6px",
                    fontFamily: "sans-serif",
                    fontSize: "1rem",
                  }}
                >
                  {"("} I !== engineer {")"}
                </span>
                I can still navigate the tech stack and communicate in
                “dev-speak” with ease. I designed and built{" "}
                <a
                  href="https://tingyilin.netlify.app/home"
                  style={{ color: "#F7883D" }}
                >
                  {" "}
                  {"("}this site{")"}
                </a>{" "}
                from scratch and the other projects listed below using React.js.
              </p>
            </TextWrapper>
          </Content>
        );
      case "UI/UX design":
        return (
          <Content>
            <UIUXIcon />
            <TextWrapper>
              <p style={{ margin: "0" }}>
                In the realm of technology-driven design, every single detail
                shapes the
                <span
                  style={{
                    color: "#7D8991",
                    margin: "0 4px",
                    width: "fit-content",
                    fontWeight: "600",
                    // fontStyle:'oblique'
                  }}
                >
                  user experience.
                </span>
                With strong UX and interaction design skills, I thrive in
                building end-to-end services and product design. I create
                visually appealing, user-centric interfaces that meet the needs
                of users, including
                <span
                  style={{
                    color: "#7D8991",
                    margin: "0 4px",
                    width: "fit-content",
                    fontWeight: "600",
                    // fontStyle:'oblique'
                  }}
                >
                  responsive SaaS platforms, websites, and apps.
                </span>
              </p>
            </TextWrapper>
          </Content>
        );
      case "Creative Campaign":
        return (
          <Content>
            <CreativeIcon />
            <TextWrapper>
              <p style={{ margin: "0" }}>
                My training in advertising has given me a deep understanding of
                <span
                  style={{
                    color: "#86C5CE",
                    margin: "0 4px",
                    width: "fit-content",
                    fontWeight: "500",
                  }}
                >
                  the power of creativity.
                </span>
                I believe creativity is a gentle force that can change the
                world, and great design is born to
                <span
                  style={{
                    color: "#86C5CE",
                    margin: "0 4px",
                    width: "fit-content",
                    fontWeight: "500",
                  }}
                >
                  solve problems.
                </span>
                That's why I am committed to using creativity to craft
                <span
                  style={{
                    color: "#86C5CE",
                    margin: "0 4px",
                    width: "fit-content",
                    fontWeight: "500",
                  }}
                >
                  unforgettable digital experiences
                </span>
                and find effective solutions.
              </p>
            </TextWrapper>
          </Content>
        );
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
        onClick={() => handleTagClick("UI/UX design")}
        bgColor="#7D8991"
        isActive={selectedTag === "UI/UX design"}
      >
        UI/UX Design
      </Tag>
      <Tag
        onClick={() => handleTagClick("Frontend coding")}
        bgColor="#F7883D"
        isActive={selectedTag === "Frontend coding"}
      >
        Frontend Coding
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

const Content = styled.div`
  font-family: serif;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 480px) {
    align-items: flex-start;
  }
`;

const TextWrapper = styled.div`
  text-align: left;
  whitespace: "nowrap";
`;

const DefaultIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="20%"
    height="20%"
    fill="#000fff"
    style={{
      maxWidth: "2rem",
      minWidth: "1.5rem",
      maxHeight: "2rem",
      minHeight: "1.5rem",
    }}
  >
    <path d="M232,104a56.06,56.06,0,0,0-56-56H136a24,24,0,0,1,24-24,8,8,0,0,0,0-16,40,40,0,0,0-40,40H80a56.06,56.06,0,0,0-56,56,16,16,0,0,0,8,13.84V128c0,35.53,33.12,62.12,59.74,83.49C103.66,221.07,120,234.18,120,240a8,8,0,0,0,16,0c0-5.82,16.34-18.93,28.26-28.51C190.88,190.12,224,163.53,224,128V117.84A16,16,0,0,0,232,104Zm-77.75,95c-10.62,8.52-20,16-26.25,23.37-6.25-7.32-15.63-14.85-26.25-23.37C77.8,179.79,48,155.86,48,128v-8H208v8C208,155.86,178.2,179.79,154.25,199Z" />
  </svg>
);

const GraphicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="20%"
    height="20%"
    fill="#D58CFE"
    style={{
      maxWidth: "2rem",
      minWidth: "1.5rem",
      maxHeight: "2rem",
      minHeight: "1.5rem",
    }}
  >
    <path d="M240,155.91a16,16,0,0,0-1-5.22L219.94,98.48A16,16,0,0,0,199.49,89l-67.81,24.57,12.08-69A16,16,0,0,0,130.84,26L76.17,16.25a15.94,15.94,0,0,0-18.47,13l-25,143.12A43.82,43.82,0,0,0,75.78,224H224a16,16,0,0,0,16-16ZM76,196a16,16,0,1,1,16-16A16,16,0,0,1,76,196Zm42.72-8.38,9.78-55.92L204.92,104,224,156.11,116.78,195A44.89,44.89,0,0,0,118.72,187.62ZM224,208H127.74L224,173.11Z" />
  </svg>
);

const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="20%"
    height="20%"
    fill="#F7883D"
    style={{
      maxWidth: "2rem",
      minWidth: "1.5rem",
      maxHeight: "2rem",
      minHeight: "1.5rem",
    }}
  >
    <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z" />
  </svg>
);

const UIUXIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="20%"
    height="20%"
    fill="#7D8991"
    style={{
      maxWidth: "2rem",
      minWidth: "1.5rem",
      maxHeight: "2rem",
      minHeight: "1.5rem",
    }}
  >
    <path d="M100,36a28,28,0,1,1,28,28A28,28,0,0,1,100,36ZM215.42,140.78l-45.25-51.3a28,28,0,0,0-21-9.48H106.83a28,28,0,0,0-21,9.48l-45.25,51.3a16,16,0,0,0,22.56,22.69L89,142.7l-19.7,74.88a16,16,0,0,0,29.08,13.35L128,180l29.58,51a16,16,0,0,0,29.08-13.35L167,142.7l25.9,20.77a16,16,0,0,0,22.56-22.69Z" />
  </svg>
);

const CreativeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="20%"
    height="20%"
    fill="#86C5CE"
    style={{
      maxWidth: "2rem",
      minWidth: "1.5rem",
      maxHeight: "2rem",
      minHeight: "1.5rem",
    }}
  >
    <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-50.34,2.34a8,8,0,0,0-11.32,0L128,132.69l-26.34-26.35a8,8,0,0,0-11.32,11.32L120,147.31V184a8,8,0,0,0,16,0V147.31l29.66-29.65A8,8,0,0,0,165.66,106.34Z" />
  </svg>
);
