import React from "react";
import styled from "styled-components";

const DateLabel = styled.div`
  color: #333;
  font-size: 14px;
  margin-bottom: 8px;
  transition: color 0.3s ease-in;
`;

const ImageContainer = styled.div`
  margin: 16px 0;
  text-align: center;
  transition: 0.3s ease-in;
  max-width: 400px;
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;

    -webkit-filter: grayscale(0) blur(0);
    filter: grayscale(0) blur(0);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in;
  }
`;

const Title = styled.h3`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 24px;
  margin: 8px 0;
  height: 28px;
  color: #333333;
  transition: color 0.3s ease-in;
`;

const Subtitle = styled.h4`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  color: #333;
  margin-bottom: 0px;
  font-weight: normal;
  transition: color 0.3s ease-in;
`;

const Description = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  color: #555555;
  margin-top: 8px;
  margin-bottom: 32px;
  transition: color 0.3s ease-in;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: ${(props) => props.bgColor || "#e0e0e0"};
  background-color: #333;
  border-radius: 50px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in;
`;

const CardContainer = styled.a`
  border-radius: 12px;
  max-width: 400px;
  width:100%;
  padding: 20px;
  text-align: left;
  font-family: Arial, sans-serif;
  border: 1.5px solid #333;
  position: relative;
  transition: background-color 0.3s ease-in;
  background-color: #f2f2f2;

  &:hover {
    cursor: pointer;
    background-color: #333; /* 鼠标悬停时的背景色 */
    color: #fff; /* 鼠标悬停时的文字颜色 */

    ${Title}, ${Subtitle}, ${Description}, ${DateLabel} {
      color: #fff; /* 子元素的文字颜色 */
    }

    ${Tag} {
      background-color: #fff; /* 标签背景色 */
    }

    ${ImageContainer} {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    }
  }
  
  @media (max-width: 800px) {
    width: 90%;
  }
`;

function ProjectCard({
  date,
  image,
  subtitle,
  title,
  description,
  tags,
  link,
  openInNewTab = false, // 默認值為false，表示在當前頁面開啟
}) {
  const handleClick = () => {
    if (openInNewTab) {
      window.open(link, "_blank"); // 在空白頁面開啟
    } else {
      window.location.href = link; // 在當前頁面開啟
    }
  };

  return (
    <CardContainer onClick={handleClick}>
      <DateLabel>{date}</DateLabel>
      <ImageContainer>
        <img src={image} alt={title} />
      </ImageContainer>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index} bgColor={tag.color}>
            {tag.name}
          </Tag>
        ))}
      </TagsContainer>
    </CardContainer>
  );
}

export default ProjectCard;
