import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

//ProjectCard

const DateLabel = styled.div`
  color: #2A3133;
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
  color: #2A3133;
  transition: color 0.3s ease-in;
`;

const Subtitle = styled.h4`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  color: #2A3133;
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
  flex-wrap: wrap;
`;

const Tag = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* 這顆藥丸有兩種底色：預設深色 #2A3133、hover 時翻成白色。
     同一個分類色不可能兩邊都達標（深底要亮、白底要暗），所以分開處理：
     預設混入 33% 白提亮，hover 那邊再用 var(--tag-color) 還原成原色。 */
  --tag-color: ${(props) => props.bgColor || "#E2E2E2"};
  color: var(--tag-color); /* 不支援 color-mix 時的退路 */
  color: color-mix(in srgb, var(--tag-color) 67%, white);
  background-color: #2A3133;
  border-radius: 50px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in;
  white-space: nowrap;
`;

const SubTag = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* 平常是透明底疊在淺色卡片上（原色即可），但卡片 hover 時底色會翻成 #2A3133，
     那時要提亮，否則只有 2.2:1。 */
  --tag-color: ${(props) => props.bgColor || "#E2E2E2"};
  border-color: var(--tag-color);
  color: var(--tag-color);
  border-style: solid;
  border-width: 1px;
  background-color: none;
  border-radius: 50px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1rem;
  cursor: pointer;
  transition: border-color, color 0.3s ease-in;
`;

const CardContainer = styled.a`
  border-radius: 12px;
  max-width: 400px;
  width: 100%;
  padding: 20px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: 1.5px solid #2A3133;
  position: relative;
  transition: background-color 0.3s ease-in;
  background-color: #f2f2f2;

  &:hover {
    cursor: pointer;
    background-color: #2A3133;
    color: #fff;

    ${Title}, ${Subtitle}, ${Description}, ${DateLabel} {
      color: #fff;
    }

    ${Tag} {
      background-color: #fff;
      /* 底色翻白，文字要壓深才讀得到（原色最低只有 1.93:1） */
      color: var(--tag-color);
      color: color-mix(in srgb, var(--tag-color) 63%, black);
    }

    ${SubTag} {
      /* 卡片底翻成 #2A3133，外框標籤要提亮 */
      color: color-mix(in srgb, var(--tag-color) 67%, white);
      border-color: color-mix(in srgb, var(--tag-color) 67%, white);
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
  // max-width: unset;

  @media (max-width: 820px) {
    width: 100%;
    height: auto;
    max-width: unset;
  }
`;

const LargeTitle = styled.h3`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 2rem;
  margin: 0px;
  margin-top: 24px;
  color: #2A3133;
  transition: color 0.3s ease-in;
  width: 100%;

  @media (max-width: 820px) {
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

  @media (max-width: 820px) {
    margin-top: 0.8rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: unset;
    justify-content: unset;
    margin-top: 0.8rem;
  }
`;

const LargeContent = styled.div`
  height: 100%;
  min-height: 240px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  width: 100%;

  @media (max-width: 800px) {
    min-height: unset;
  }
`;

const LargeCardContainer = styled(CardContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  max-width: 100%;
  height: fit-content;
  gap: 4%;
  opacity: 0; /* 初始為不可見 */
  transition: opacity 1.5s ease, transform 1.5s ease, background-color 0.8s ease;
  transform: translateX(-100%);

  &.visible {
    opacity: 1;
    transform: translateX(0); /* 滑入畫面 */
  }

  @media (max-width: 820px) {
    flex-direction: column;
    width: 100%;
    animation: slideIn 1s ease;
  }

  &:hover {
    background-color: #2A3133;
    color: #fff;

    ${LargeTitle}, ${Subtitle}, ${Description}, ${DateLabel} {
      color: #fff;
    }

    ${Tag} {
      background-color: #fff;
      /* 底色翻白，文字要壓深才讀得到（原色最低只有 1.93:1） */
      color: var(--tag-color);
      color: color-mix(in srgb, var(--tag-color) 63%, black);
    }

    ${SubTag} {
      /* 卡片底翻成 #2A3133，外框標籤要提亮 */
      color: color-mix(in srgb, var(--tag-color) 67%, white);
      border-color: color-mix(in srgb, var(--tag-color) 67%, white);
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
  subtags,
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

  const { ref, inView, entry } = useInView({
    /* 可選選項 */
    Threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <LargeCardContainer
      onClick={handleClick}
      ref={ref}
      className={inView ? "visible" : ""}
    >
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

          {subtags &&
            subtags.map((subtag, index) => (
              <SubTag key={index} bgColor={subtag.color}>
                {subtag.name}
              </SubTag>
          ))}
        </TagsContainer>
      </LargeContent>
    </LargeCardContainer>
  );
}

export { ProjectCard, LargeProjectCard };
