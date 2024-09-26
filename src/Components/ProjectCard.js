import React,{ useEffect, useRef } from "react";
import styled from "styled-components";
import { useInView } from 'react-intersection-observer';

//ProjectCard

const DateLabel = styled.div`
  color: #333;
  font-size: 14px;
  // margin-bottom: 8px;
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

    @media (max-width: 480px) {
      height: 80%;
      object-fit: cover;
    }
  }

  @media (max-width: 480px) {
    height: 100%;
  }
`;

const Title = styled.h3`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 24px;
  margin: 16px 0;
  color: #333333;
  transition: color 0.3s ease-in;
`;

const Subtitle = styled.h4`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  color: #333;
  margin: 0;
  font-weight: normal;
  transition: color 0.3s ease-in;
`;

const Description = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  color: #555555;
  margin-top: 4px;
  margin-bottom: 32px;
  transition: color 0.3s ease-in;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: pre-wrap;
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
  width: 100%;
  padding: 20px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: 1.5px solid #333;
  position: relative;
  transition: background-color 0.3s ease-in;
  background-color: #f2f2f2;

  &:hover {
    cursor: pointer;
    background-color: #333;
    color: #fff;

    ${Title}, ${Subtitle}, ${Description}, ${DateLabel} {
      color: #fff;
    }

    ${Tag} {
      background-color: #fff;
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

//LargeProjectCard

const LargeImageContainer = styled(ImageContainer)`
  flex: 1;
  width: auto;
  margin: 0;

  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

const LargeTitle = styled.h3`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 2rem;
  margin: 0px;
  margin-top: 24px;
  color: #333333;
  transition: color 0.3s ease-in;

  @media (max-width: 480px) {
    font-size: 24px;
    margin-top: 12px;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: unset;
    justify-content: unset;
    margin-top: 0.8rem;
  }
`;

const LargeContent = styled.div`
  height: 250px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  padding: 0;
  margin: 0;

  @media (max-width: 800px) {
    padding-left: 0;
  }
`;

const LargeCardContainer = styled(CardContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  max-width: 100%;
  height: auto;
  gap: 4%;
  opacity: 0; /* 初始為不可見 */
  transition: opacity 1.5s ease, transform 1.5s ease, background-color 0.8s ease;
  transform: translateX(-100%);

   &.visible {
    opacity: 1;
    transform: translateX(0); /* 滑入畫面 */
  }

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    animation: slideIn 1s ease;
  }

  &:hover {
    background-color: #333;
    color: #fff;

    ${LargeTitle}, ${Subtitle}, ${Description}, ${DateLabel} {
      color: #fff;
    }

    ${Tag} {
      background-color: #fff;
    }

    ${ImageContainer} {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    }
  }
`;

function LargeProjectCard({
  date,
  image,
  subtitle,
  title,
  description,
  tags,
  link,
  openInNewTab = false,
}) {
  const handleClick = () => {
    if (openInNewTab) {
      window.open(link, "_blank");
    } else {
      window.location.href = link;
    }
  };

  const  { ref , inView , entry }  =  useInView ( { 
    /* 可選選項 */ 
    Threshold : 0.2 , 
    triggerOnce: true,
  } ) ;

  return (
    <LargeCardContainer onClick={handleClick} ref={ref} className={inView ? "visible" : ""}> 
      <LargeImageContainer>
        <img src={image} alt={title} />
      </LargeImageContainer>
      <LargeContent>
        <div
          style={{ display: "flex", width: "100%", flexDirection: "column" }}
        >
          <TitleGroup>
            <DateLabel>{date}</DateLabel>
            <Subtitle>{subtitle}</Subtitle>
          </TitleGroup>
          <LargeTitle>{title}</LargeTitle>
          <Description>{description}</Description>
        </div>
        <TagsContainer>
          {tags.map((tag, index) => (
            <Tag key={index} bgColor={tag.color}>
              {tag.name}
            </Tag>
          ))}
        </TagsContainer>
      </LargeContent>
    </LargeCardContainer>
  );
}

export { ProjectCard, LargeProjectCard };
