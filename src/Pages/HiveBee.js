import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #f2f2f2;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0; /* 清除 margin */
  padding: 0 3vw;
  box-sizing: border-box;

  // @media (max-width: 480px) {
  //   padding-bottom: 8vh;
  // }
`;

const Header = styled.header`
  margin-top: 12vh;

  @media (max-width: 480px) {
    margin-top: 5vh;
  }
`;

const Title2 = styled.h2`
  font-size: 1.2rem;
  font-family: "Caveat", cursive;
  font-weight: 500;
  line-height: 1;
  color: #555;
  white-space: pre-wrap;
  margin: 1rem 0 2rem 0;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const SubTitle = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  // margin: 20px 0;
  font-size: 1rem;
  line-height: 2;
  color: #444;
`;

const Image = styled.img`
  width: ${(props) => props.width || "70%"};

  @media (max-width: 480px) {
    width: 95%;
  }
`;

const HalfImage = styled.img`
  width: ${(props) => props.width || "50%"};
  border-radius: 10px;
  aspect-ratio: 1/1;
  object-fit: cover;
  max-width: 400px;

  @media (max-width: 1020px) {
    width: ${(props) => props.width || "100%"};
    max-width: unset;
    aspect-ratio: unset;
  }

  @media (max-width: 480px) {
    width: ${(props) => props.width || "100%"};
  }
`;

const DisImage = styled.img`
  width: ${(props) => props.width || "100%"};
  border-radius: 10px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: ${(props) =>
    `${props.margin || "60px"} auto`}; //控制 margin-top 和 margin-bottom
  width: 80%;
  display: block;
`;

const SectionTitle = styled.h1`
  font-size: 2rem;
  margin: 10px 0;
  color: #444;
`;

const BlockTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 auto;
  margin-top: 3rem;
  color: #8c8c8c;
  width: 70%;
  font-weight: 400;
  text-align: left;

  @media (max-width: 480px) {
    width: 95%;
    font-size: 1rem;
  }
`;

const BlockHeader = styled.h1`
  font-size: 1.8rem;
  margin: 0 auto;
  margin-top: 1rem;
  color: #444;
  width: 70%;
  text-align: left;

  @media (max-width: 480px) {
    width: 95%;
    font-size: 1.5rem;
  }
`;

const CircleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 10px;
  margin: 3rem;

  @media (max-width: 480px) {
    margin: 2rem;
  }
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Text = styled.div`
  font-size: 1rem;
  margin: 30px auto;
  color: #444;
  width: 70%;
  text-align: left;
  line-height: 1.5;

  @media (max-width: 480px) {
    width: 95%;
  }
`;

const HalfText = styled.div`
  font-size: 1rem;
  margin: 0 auto;
  color: #444;
  width: 100%;
  text-align: justify;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ContentText = styled.div`
  font-size: 1rem;
  margin: 0;
  color: #8c8c8c;
  width: 100%;
  text-align: left;
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-right: none;
  }
`;

const DisText = styled.div`
  font-size: 1rem;
  margin: 0;
  color: #444;
  width: 100%;
  text-align: justify;
  box-sizing: border-box;
  // border-left: 10px solid #AB005F;
  // padding-left: 0.5rem;
  // padding-bottom: 0.2rem;
  line-height: 1.5;

  @media (max-width: 480px) {
    width: 100%;
    padding-top: 0rem;
    text-align: left;
  }
`;

const DisTextTitle = styled.div`
  font-size: 1rem;
  margin: 0;
  color: #fff;
  background-image: var(
    --Gradient-style-gradient2,
    linear-gradient(91deg, #eaa700 0%, #f6d671 100%)
  );
  width: fit-content;
  align-self: flex-start;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  white-space: nowrap;

  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: left;
  }
`;
const DisTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: left;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

const InfoCard = styled.div`
  display: flex;
  align-items: left;
  padding: 20px;
  width: 70%;
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 2rem;

  @media (max-width: 800px) {
    width: 95%;
  }
`;

const InfoContent = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 480px) {
    align-items: flex-start;
  }
`;

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="20%"
    height="20%"
    fill="#EAA700"
    style={{
      maxWidth: "2rem",
      minWidth: "1.5rem",
      maxHeight: "2rem",
      minHeight: "1.5rem",
    }}
  >
    <path d="M198.13,202.85A8,8,0,0,1,192,216H24a8,8,0,0,1-6.12-13.15c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,172.44,183.18,185.07,198.13,202.85ZM196.86,61.39a8,8,0,0,0-4.22,10.5,92.26,92.26,0,0,1,0,72.22,8,8,0,1,0,14.72,6.29,108.36,108.36,0,0,0,0-84.8A8,8,0,0,0,196.86,61.39Zm39.85-8.54a8,8,0,1,0-14.7,6.3,124.43,124.43,0,0,1,0,97.7,8,8,0,1,0,14.7,6.3,140.34,140.34,0,0,0,0-110.3Z" />{" "}
  </svg>
);

const DesignIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="20%"
    height="20%"
    fill="#EAA700"
    style={{
      maxWidth: "2rem",
      minWidth: "1.5rem",
      maxHeight: "2rem",
      minHeight: "1.5rem",
    }}
  >
    <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />{" "}
  </svg>
);

const LinkText = styled.div`
  font-size: 1rem;
  margin: 0 auto;
  color: #71c5d5;
  width: 100%;
  text-align: justify;
  padding: 4px 8px;
  border: 1px solid #dbf1f5;
  border-radius: 8px;
  box-sizing: border-box;

  &:hover {
    background-color: #fff;
  }
`;

const SpecialText = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin: 10px auto;
  color: #333333;
  width: fit-content;
  height: fit-content;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 0 8px;
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 15px;
    background-color: #f6d671;
    z-index: -1;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 24px;
  gap: 1rem;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 70%;

  @media (max-width: 480px) {
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin-top: 2rem;
  }
`;

const TextWrapperSmall = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f2f2f2;
  width: 100%;
  margin: 0 auto;
  padding: 24px;
  gap: 1.5rem;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

const HalfTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  gap: 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  padding: 12px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

const HalfWrapper = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 3rem;
  box-sizing: border-box;
  gap: 1rem;
  line-height: 1.5;

  @media (max-width: 1020px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin-top: 2rem;
  }
`;

const TextWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 1rem;
  background-color: #f8f8f8;

  @media (max-width: 480px) {
    box-sizing: border-box;
    padding: 1rem;
  }
`;

const DiscriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 70%;
  margin: 0 auto;
  margin-top: 2rem;

  @media (max-width: 480px) {
    width: 95%;
    margin-top: 1rem;
    box-sizing: border-box;
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 2%;
  flex-wrap: wrap;
  width: 70%;
  margin-top: 1.5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: unset;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: ${(props) => props.width || "100%"};
    gap: unset;
  }
`;

const GroupImage = styled.img`
  width: 49%; /* 調整為容器的百分比 */
  height: 50vh;
  object-fit: cover;
  // aspect-ratio: 16:9;

  @media (max-width: 1024px) {
    width: ${(props) => props.width || "100%"};
    height: unset;
  }

  @media (max-width: 480px) {
    width: ${(props) => props.width || "90%"};
    height: unset;
  }
`;

const BackButton = styled.button`
  background-color: #e1cdff;
  color: #0000ff;
  padding: 8px 24px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 40px;

  transition: background-color 0.8s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
  }
`;

const HiveBee = () => {
  return (
    <>
      <Container>
        <Header>
          <img
            src="/hivebee/logo.svg"
            alt="logo"
            width="70%"
            style={{ maxWidth: "400px" }}
          />
          <Title2>
            ― We created unique event experiences that made interactions between
            streamers and audiences more lively and engaging. ―
          </Title2>
        </Header>

        <Image
          src="/hivebee/hb demo.gif"
          alt="Kungfu Presentation"
          style={{
            borderRadius: "10px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        />

        <SubTitle>
          <TextWrapper>
            <ContentWrapper>
              <SpecialText style={{ margin: "0" }}>
                任職公司 / Company
              </SpecialText>
              <Text
                style={{
                  margin: "0",
                  width: "fit-content",
                  fontWeight: "600",
                  color: "#AB005F",
                  textAlign: "right",
                }}
              >
                KOL Tech CO. 群人行銷
              </Text>
            </ContentWrapper>
            <ContentWrapper>
              <SpecialText style={{ margin: "0" }}>
                我的角色 / My role
              </SpecialText>
              <Text
                style={{
                  margin: "0",
                  width: "fit-content",
                  fontWeight: "600",
                  color: "#AB005F",
                  textAlign: "right",
                }}
              >
                Product Designer
              </Text>
            </ContentWrapper>
            <TextWrapperSmall>
              <ContentText>
                <span style={{ fontWeight: "600", color: "#333" }}>
                  User Experience Strategy
                </span>
                <br /># Competitor analysis <br /> # Contextual inquiry <br /> #
                User Interview <br /># Functional mapping <br /> # User flow
              </ContentText>
              <ContentText style={{ border: "none" }}>
                <span style={{ fontWeight: "600", color: "#333" }}>
                  Interface Design Execution
                </span>
                <br /># Wireframe and Lo-fi Prototype <br /> # UI Kit <br /> #
                Design system
                <br /> # Hi-fi Prototype <br /> # Usability testing
              </ContentText>
            </TextWrapperSmall>
            <ContentWrapper style={{ border: "none" }}>
              <SpecialText style={{ margin: "0" }}>
                專案時程 / Timeline
              </SpecialText>
              <Text
                style={{
                  margin: "0",
                  width: "fit-content",
                  fontWeight: "600",
                  color: "#AB005F",
                  textAlign: "right",
                }}
              >
                March to May 2024
              </Text>
            </ContentWrapper>
          </TextWrapper>
        </SubTitle>

        <Divider margin="60px" />

        <section>
          <SectionTitle>Background & Goal</SectionTitle>
          <HalfWrapper>
            <HalfTextWrapper>
              <HalfText>
                這是我入職公司後經手的第二個數位產品——直播贊助互動平台。產品的願景是打造一個讓直播主能與贊助者進行緊密、生動且有趣互動的直播生態，促進雙方的積極交流。
              </HalfText>

              <HalfText>
                <SpecialText>幫助創作者產出更多豐富有趣的內容</SpecialText>
                {/* <SpecialText>讓每一次的觀賞體驗都充滿樂趣</SpecialText> */}
              </HalfText>

              <HalfText style={{ textAlign: "left" }}>
                This is the second digital product I worked on after joining the
                company—a live stream sponsorship interaction platform. The
                product aims to create a vibrant live streaming ecosystem where
                streamers can engage in close, dynamic, and entertaining
                interactions with their sponsors, fostering active exchanges.
              </HalfText>

              <HalfText>
                <SpecialText>Encourages creators to produce </SpecialText>
                <SpecialText>more engaging and diverse content</SpecialText>
              </HalfText>
            </HalfTextWrapper>
            <HalfImage src="/hivebee/droping.gif" alt="animation" />
          </HalfWrapper>
        </section>

        <section style={{ marginTop: "7rem" }}>
          <SectionTitle>Problems</SectionTitle>
          <InfoCard>
            <InfoContent>
              <InfoIcon />
              <HalfTextWrapper style={{ padding: "0px", gap: ".5rem" }}>
                <DisText>
                  當我初次接手該產品時，雖然產品已經上線了一段時間，但使用成效不如預期。因此，我首先針對兩大核心使用者群體——直播贊助者與直播主，分別進行了用戶訪談。通過這些訪談，我整理並歸納出使用上的痛點，並發掘了多個產品優化的機會點。
                </DisText>
                <DisText>
                  When I first took over the product, it had already been live
                  for some time, but its performance was below expectations. My
                  initial step was to conduct user interviews with two key user
                  groups—sponsors and streamers. Through these interviews, I
                  identified several pain points in the user experience and
                  uncovered multiple opportunities for product improvement.
                </DisText>
              </HalfTextWrapper>
            </InfoContent>
          </InfoCard>

          <Image
            src="/hivebee/pain-point.png"
            alt="affinity diagram"
            width={"80%"}
            style={{ marginTop: "2rem" }}
          />

          <CircleWrapper>
            <Circle color="#EDDDFF" />
            <Circle color="#D9B9FF" />
            <Circle color="#BA87F4" />
            <Circle color="#C5006C" />
          </CircleWrapper>

          <DiscriptionWrapper>
            <TextWrapperContainer>
              <DisImage src="/hivebee/old-ui-1.png" alt="discription" />
              <CardHeader>
                <ContentText style={{ border: "none" }}>
                  Challenge 01
                </ContentText>
                <DisTextTitle>Outdated design system</DisTextTitle>
              </CardHeader>
              <DisText style={{ marginTop: ".5rem" }}>
                由於開發團隊缺乏 UI/UX
                設計背景，介面設計相對粗糙、直接且缺乏美感。該工具的「用戶設定流程」過於繁瑣且高度複雜，舊版介面多以表單形式呈現，這讓用戶在面對大量資訊時感到負擔沉重，體驗不佳。
              </DisText>
              <DisText>
                Due to the development team's lack of UI/UX expertise, the
                interface design was rather rough, straightforward, and visually
                unappealing. The tool featured a complex and tedious "user setup
                process," with most of the previous version's interface being
                heavily form-based. This resulted in users feeling overwhelmed
                by the excessive information and having a poor overall
                experience.
              </DisText>
            </TextWrapperContainer>
          </DiscriptionWrapper>
          <DiscriptionWrapper>
            <TextWrapperContainer>
              <DisImage src="/hivebee/old-ui-21.png" alt="discription" />
              <CardHeader>
                <ContentText style={{ border: "none" }}>
                  Challenge 02
                </ContentText>
                <DisTextTitle>Chaotic information and hierarchy</DisTextTitle>
              </CardHeader>
              <DisText style={{ marginTop: ".5rem" }}>
                設計上缺乏完善的 UI Kit
                和設計系統，且未導入可重用元件的概念，導致畫面缺乏一致性，進而使資訊和視覺層級雜亂，降低了排版的清晰度和操作的易用性。
              </DisText>
              <DisText>
                The design lacked a proper UI Kit and design system, with no
                implementation of reusable components. This resulted in
                inconsistent visuals and contributed to disorganized information
                and visual hierarchy, ultimately reducing the clarity of the
                layout and diminishing overall usability.
              </DisText>
            </TextWrapperContainer>
          </DiscriptionWrapper>
          <DiscriptionWrapper>
            <TextWrapperContainer>
              <DisImage src="/hivebee/old-ui-3.jpg" alt="discription" />
              <CardHeader>
                <ContentText style={{ border: "none" }}>
                  Challenge 03
                </ContentText>
                <DisTextTitle>Low usability experience</DisTextTitle>
              </CardHeader>
              <DisText style={{ marginTop: ".5rem" }}>
                除了畫面設計上的問題，不即時的使用回饋也導致用戶在每一個操作階段都感到不知所措。而不夠流暢的用戶流程規劃，進一步降低了用戶的使用意願。
              </DisText>
              <DisText>
                Aside from the issues with the visual design, the lack of
                real-time user feedback left users feeling uncertain at every
                stage of interaction. Additionally, the poorly structured user
                flow further diminished the overall user experience,
                discouraging continued engagement.
              </DisText>
            </TextWrapperContainer>
          </DiscriptionWrapper>
        </section>

        <CircleWrapper>
          <Circle color="#EDDDFF" />
          <Circle color="#D9B9FF" />
          <Circle color="#BA87F4" />
          <Circle color="#C5006C" />
        </CircleWrapper>

        <section style={{ marginTop: "5rem" }}>
          <SectionTitle>Solution</SectionTitle>
          <InfoCard>
            <InfoContent>
              <DesignIcon />
              <HalfTextWrapper style={{ padding: "0px", gap: ".5rem" }}>
                <DisText>
                  在分析競品之後，我們決定與視覺設計師合作，為產品打造活潑、年輕化的品牌識別系統，並將其命名為「HiveBee」，賦予產品全新的面貌與獨特的區隔性。針對新版本的視覺設計，我建立了完整的設計系統，確保產品畫面與品牌視覺的一致性。此外，我進一步優化了用戶流程和易用性，提升了整體的用戶體驗。
                </DisText>
                <DisText>
                  After conducting a competitive analysis, we decided to
                  collaborate with a visual designer to create a vibrant and
                  youthful brand identity for the product, which we named
                  "HiveBee," giving it a fresh look and distinct features. For
                  the new version's visuals, I developed a comprehensive design
                  system to ensure consistency between the product interface and
                  its visual identity. Additionally, I further optimized the
                  user flow and usability to deliver an improved overall user
                  experience.
                </DisText>
              </HalfTextWrapper>
            </InfoContent>
          </InfoCard>

          <Image
            src="/hivebee/stage.png"
            alt="affinity diagram"
            style={{ marginTop: "2rem" }}
          />
        </section>

        <Divider
          margin="4rem"
          style={{ borderTop: "1px solid #F6D671", width: "70%" }}
        />

        <section>
          <BlockTitle>Step.1</BlockTitle>
          <BlockHeader>Functional Map</BlockHeader>
          <Text style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            為了解決產品功能過多導致資訊混亂的問題，我重新規劃了功能和資訊架構，協助團隊釐清產品脈絡，並清楚定義功能模組，分類與組織訊息、優化層級規劃，透過繪製功能地圖，進一步理清了操作流程的細節。
          </Text>
          <Text style={{ marginTop: "0rem" }}>
            To solve the problem of information overload caused by too many
            product features, I restructured the functionality and information
            architecture. I helped the team clarify the product’s framework,
            clearly defined feature modules, categorized and organized
            information, and optimized the hierarchical structure. By creating a
            functional map, we refined the operational workflow and details.
          </Text>

          <Image
            src="/hivebee/IA.png"
            alt="affinity diagram"
            width={"80%"}
            style={{ marginTop: "1rem" }}
          />
        </section>

        <Divider
          margin="4rem"
          style={{ borderTop: "1px solid #F6D671", width: "70%" }}
        />

        <section>
          <BlockTitle>Step.2</BlockTitle>
          <BlockHeader>User Flow</BlockHeader>
          <Text style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            為了更深入了解並釐清用戶在系統操作上的邏輯與流程，我基於已確立的資訊架構，思考操作邏輯，並繪製用戶流程圖。這些流程圖成為與開發團隊討論的重要工具，幫助我們共同理解各種狀態的運作方式，並作為繪製
            Wireframe
            的依據之一，以此確保用戶體驗完善、頁面之間的連結關係清晰，且所有功能需求皆完整。
          </Text>
          <Text style={{ marginTop: "0rem" }}>
            To gain a deeper understanding and clarify the user's logic and flow
            within the system, I built on the established information
            architecture and mapped out the operational logic through user flow
            diagrams. These diagrams became essential tools for discussions with
            the development team, helping us mutually understand how various
            states function. They also served as one of the key references for
            wireframe design, ensuring a seamless user experience, clear
            page-to-page relationships, and the completeness of all necessary
            features.
          </Text>

          <Image
            src="/hivebee/flow.png"
            alt="affinity diagram"
            width={"80%"}
            style={{ marginTop: "1rem" }}
          />
        </section>

        <Divider
          margin="4rem"
          style={{ borderTop: "1px solid #F6D671", width: "70%" }}
        />

        <section>
          <BlockTitle>Step.3</BlockTitle>
          <BlockHeader>User Flow</BlockHeader>
          <Text style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            為了更深入了解並釐清用戶在系統操作上的邏輯與流程，我基於已確立的資訊架構，思考操作邏輯，並繪製用戶流程圖。這些流程圖成為與開發團隊討論的重要工具，幫助我們共同理解各種狀態的運作方式，並作為繪製
            Wireframe
            的依據之一，以此確保用戶體驗完善、頁面之間的連結關係清晰，且所有功能需求皆完整。
          </Text>
          <Text style={{ marginTop: "0rem" }}>
            To gain a deeper understanding and clarify the user's logic and flow
            within the system, I built on the established information
            architecture and mapped out the operational logic through user flow
            diagrams. These diagrams became essential tools for discussions with
            the development team, helping us mutually understand how various
            states function. They also served as one of the key references for
            wireframe design, ensuring a seamless user experience, clear
            page-to-page relationships, and the completeness of all necessary
            features.
          </Text>

          <Image
            src="/hivebee/flow.png"
            alt="affinity diagram"
            width={"90%"}
            style={{ marginTop: "1rem" }}
          />
        </section>

        <section style={{ marginTop: "5rem" }}>
          <SectionTitle>Feature work</SectionTitle>
          <BlockTitle>UX Content</BlockTitle>
        </section>

        <a
          href="/work"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <BackButton>Back to Work</BackButton>
        </a>
      </Container>
    </>
  );
};

export default HiveBee;
