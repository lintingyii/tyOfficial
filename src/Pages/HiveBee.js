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
    width: ${(props) => props.width || "95%"};
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
    width: ${(props) => props.width || "95%"};
  }
`;

const DisImage = styled.img`
  width: ${(props) => props.width || "100%"};
  border-radius: 10px;

  @media (max-width: 480px) {
    width: ${(props) => props.width || "95%"};
  }
`;

const LaptopImage = styled.img`
  width: ${(props) => props.width || "70%"};

  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileImage = styled.img`
  display: none;

  @media (max-width: 480px) {
    display: initial;
    max-width: 400px;
    width: ${(props) => props.width || "90%"};
  }
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
  font-size: 1.5rem;
  margin: 10px 0;
  color: #444;
`;

const CircleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 10px;
  margin: 3rem;
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
  text-align: justify;

  @media (max-width: 480px) {
    width: 85%;
  }
`;

const HalfText = styled.div`
  font-size: 1rem;
  margin: 0 auto;
  color: #444;
  width: 100%;
  text-align: justify;

  @media (max-width: 480px) {
    width: 85%;
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
  width: 90%;
  text-align: justify;
  border-left: 13px solid #e87cdc;
  padding-left: 0.5rem;

  @media (max-width: 480px) {
    width: 80%;
  }
`;

const DisTextTitle = styled.div`
  font-size: 1rem;
  margin: 0;
  color: #444;
  width: 90%;
  text-align: justify;
  border-left: 13px solid #e87cdc;
  padding-left: 0.5rem;

  @media (max-width: 480px) {
    width: 80%;
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
  width: 100%;
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
  gap: 2rem;
  border-radius: 10px;
border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 30px;
  background-color: #f8f8f8;

  @media (max-width: 480px) {
    width: 95%;
    box-sizing: border-box;
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
  margin-top: 30px;

  @media (max-width: 480px) {
    width: 95%;
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
                User Interview <br /># Functional mapping <br /> # User-flow
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
          <DiscriptionWrapper>
            <TextWrapperContainer>
            <DisImage
              src="/hivebee/old-ui-1.png"
              alt="discription"
            />
              <ContentText>Challenge 01</ContentText>
              <DisTextTitle>
              outdated design system
              </DisTextTitle>
              <DisText>
                We chose to place the
                <span
                  style={{
                    color: "#E87CDC",
                    fontWeight: "500",
                    margin: "0 3px",
                  }}
                >
                  Sports Win microservice
                </span>
                in the "Service Collage" section of the TaipeiPass service page,
                aimed at recommending services to users with unclear needs and
                encouraging engagement.
              </DisText>
            </TextWrapperContainer>
          </DiscriptionWrapper>
        </section>
          {/* <Image
            src="/sportswin/think.png"
            alt="think"
            width="5rem"
            style={{ marginTop: "2rem" }}
          />
          <Text>
            <span style={{ textAlign: "center" }}>
              你是否有想打球但租不到場地、找不到球友的經驗？為解決這個問題，我們設計了「
              <span style={{ color: "#5AB4C5", fontWeight: "bold" }}>
                有球必In
              </span>
              」
            </span>
            <br />
            一個整合大台北所有付費及免費運動場地的租借系統微服務，
            結合共享經濟概念，提供組隊功能，讓市民無需受限於場地和人數，盡情享受運動，同時最大化台北市運動場地的使用效益。
          </Text>

          <Text>
            <span style={{ textAlign: "center" }}>
              Have you ever wanted to play sports but couldn’t find a venue or
              teammates? To solve this problem, we designed "
              <span style={{ color: "#5AB4C5", fontWeight: "bold" }}>
                Sports Win
              </span>
              ."
            </span>
            <br />A microservice that aggregates all paid and free sports venue
            rentals in Greater Taipei, incorporating the concept of the shared
            economy. It offers a team-building feature, allowing citizens to
            enjoy sports without limitations on venue or group size, while
            maximizing the efficiency of all sports facilities in Taipei.
          </Text>
        </section> */}

        <CircleWrapper>
          <Circle color="#EDF8FA" />
          <Circle color="#B4E2EA" />
          <Circle color="#5AB4C5" />
          <Circle color="#468D9B" />
        </CircleWrapper>

        {/* <section style={{ marginTop: "5rem" }}>
          <SectionTitle>Mission scope</SectionTitle>
          <TextWrapperContainer>
            <TextWrapper>
              <SpecialText style={{ width: "fit-content", margin: "0" }}>
                競賽說明 / Competition Guidelines
              </SpecialText>
              <a
                href="https://hackmd.io/@Morgannn/HJRg_2uj0"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <LinkText>工作坊HackMD筆記</LinkText>
              </a>
            </TextWrapper>
            <TextWrapper>
              <SpecialText style={{ width: "fit-content", margin: "0" }}>
                資料來源 / Data source
              </SpecialText>
              <a
                href="https://data.gov.tw/dataset/22849"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <LinkText>全國運動場館資訊</LinkText>
              </a>
            </TextWrapper>
            <TextWrapper>
              <SpecialText style={{ width: "fit-content", margin: "0" }}>
                專案程式碼 / Project code
              </SpecialText>
              <a
                href="https://github.com/tcfproject-tpe/CDF_Taipei?tab=readme-ov-file"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <LinkText>GitHub連結</LinkText>
              </a>
            </TextWrapper>
            <TextWrapper>
              <SpecialText style={{ width: "fit-content", margin: "0" }}>
                API規格書 / API documentation
              </SpecialText>
              <a
                href="https://read-book-press.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <LinkText>開發全說明</LinkText>
              </a>
            </TextWrapper>
          </TextWrapperContainer>

          <Divider
            margin="40px"
            style={{ borderTop: "1px solid #B4E2EA", width: "70%" }}
          /> */}


          {/* <Divider
            margin="40px"
            style={{ borderTop: "1px solid #B4E2EA", width: "70%" }}
          />

          <DiscriptionWrapper>
            <DisImage
              src="/sportswin/dis-5.png"
              alt="discription"
              style={{ maxWidth: "400px" }}
            />
            <DisTextWrapper>
              <DisText>
                晚一步預約的用戶雖然租不到場地，但可以選擇是否在該時段
                <span style={{ color: "#E87CDC", fontWeight: "500" }}>
                  報團打球
                </span>
                ，響應他人的球友募集行動，讓「晚一步」的經驗也可以成為一份美好的回憶。
              </DisText>
              <DisText>
                Users who miss out on booking a venue can still join a team by
                <span
                  style={{
                    color: "#E87CDC",
                    fontWeight: "500",
                    margin: "0 3px",
                  }}
                >
                  responding to recruitment efforts
                </span>
                , turning the "missed opportunity" into a positive experience.
              </DisText>
            </DisTextWrapper>
          </DiscriptionWrapper>
        </section> */}

        <CircleWrapper style={{ marginTop: "5rem" }}>
          <Circle color="#EDF8FA" />
          <Circle color="#B4E2EA" />
          <Circle color="#5AB4C5" />
          <Circle color="#468D9B" />
        </CircleWrapper>

        <section style={{ marginTop: "5rem" }}>
          <SectionTitle>Purposes and goals</SectionTitle>
          <Text>
            我們注意到許多想運動的個體往往因為租不到場地而失去運動機會，相反的，有些場地則因為使用人數不多而導致資源白白被晾著，
            因此我們融入共享經濟的概念，除了讓運動資源、場館資訊更加透明化外，
            還設計線上組隊功能，提倡將有限的運動場地資源效益最大化，
            再也不會讓找不到球友成為拒絕運動的藉口，
            <br />
            <span style={{ color: "#5AB4C5", fontWeight: "bold" }}>
              透過這個微服務平台，我們希望可以提高市民參與運動的意願，並讓台北市所有運動場地的效益得以最大化的進行發揮。
            </span>
          </Text>

          <Text>
            We noticed that many individuals miss out on playing sports due to
            lack of venue availability, while some venues remain underutilized.
            To address this, we incorporated the concept of the shared economy,
            making sports resources and venue information more transparent. We
            also introduced an online team-building feature to maximize the use
            of limited venues, ensuring that not finding teammates is never an
            excuse to skip sports.
            <br />
            <span style={{ color: "#5AB4C5", fontWeight: "bold" }}>
              Through this microservice platform, we aim to boost citizen
              engagement in sports and maximize the utilization of all sports
              venues in Taipei.
            </span>
          </Text>
        </section>

        <section>
          <LaptopImage
            src="/sportswin/winbanner.jpg"
            alt="Group"
            style={{
              borderRadius: "10px",
              margin: "1rem 0",
            }}
          />
          <MobileImage
            src="/sportswin/winbanner-m.jpg"
            alt="Group"
            style={{
              borderRadius: "10px",
            }}
          />
        </section>

        <section style={{ marginTop: "5rem" }}>
          <SectionTitle>Event Highlights</SectionTitle>
          <ImageWrapper>
            <GroupImage
              src="/sportswin/group-2.jpg"
              alt="Group"
              style={{
                borderRadius: "10px",
                margin: "1rem 0",
              }}
            />
            <GroupImage
              src="/sportswin/group-3.jpg"
              alt="Group"
              style={{
                borderRadius: "10px",
                margin: "1rem 0",
              }}
            />
          </ImageWrapper>
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
