import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: calc(100% / 3);
  box-sizing: border-box;
  position: sticky;
  top: 22vh;
  z-index: ${(props) => props.zIndex || 1};
  border: 1.5px solid rgba(217, 217, 217, 1);
  border-radius: 12px;
  transform: rotate(${(props) => props.rotateX || '0deg'});
  max-height: 60vh;  // 限制最大高度
  overflow-y: auto;

  img {
    width: 100%; /* 圖片寬度充滿容器 */
    height: auto; /* 保持圖片的寬高比 */
    border-radius: inherit; /* 圖片繼承容器的圓角設置 */
  }

  @media (max-width: 480px) {
    width: 100%;
    top: 17vh;
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 8%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Content = styled.div`
  margin-top: 0.6rem;
  // color: #fff;
  font-family: serif;
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  white-space: wrap;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Source = styled.div`
  margin-top: 6rem;
  // color: #fff;
  font-size: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  white-space: wrap;
  line-height: 1.5;
  color: ${(props) => props.color || "#000fff"};

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-top: 4rem;
  }
`;
const TestimonialCard = ({ content, zIndex, bgImage, person, color, rotate }) => {
  const displayPerson = person.includes("@") ? person.split("@") : [person];

  return (
    <CardContainer zIndex={zIndex} rotateX={rotate}>
      <img src={bgImage} alt="background" /> {/* 將圖片作為背景 */}
      <ContentContainer>
        <Content>{content}</Content>
        <Source color={color}>
          {displayPerson[0]}
          {displayPerson.length > 1 && <br style={{ marginTop: "1rem" }} />}
          {displayPerson.length > 1 && `@${displayPerson[1]}`}
        </Source>
      </ContentContainer>
    </CardContainer>
  );
};

export default TestimonialCard;
