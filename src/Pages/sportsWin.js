import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../Components/footer";

const Container = styled.div`
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0; /* 清除 margin */
  // padding: 0 3vw;
  box-sizing: border-box;

  @media (max-width: 880px) {
    padding: 0 3vw;
  }
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

  @media (max-width: 880px) {
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

  @media (max-width: 880px) {
    width: ${(props) => props.width || "95%"};
  }
`;

const DisImage = styled.img`
  width: ${(props) => props.width || "30%"};

  @media (max-width: 880px) {
    width: ${(props) => props.width || "95%"};
  }
`;

const LaptopImage = styled.img`
  width: ${(props) => props.width || "70%"};

  @media (max-width: 880px) {
    display: none;
  }
`;

const MobileImage = styled.img`
  display: none;

  @media (max-width: 880px) {
    display: initial;
    max-width: 400px;
    width: ${(props) => props.width || "95%"};
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
  font-size: 2rem;
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
  line-height: 1.5;

  @media (max-width: 880px) {
    width: 95%;
    text-align: left;
  }
`;

const DisText = styled.div`
  font-size: 1rem;
  margin: 0;
  color: #444;
  width: 90%;
  text-align: justify;
  border-left: 10px solid #e87cdc;
  padding-left: 0.8rem;
  line-height: 1.5;

  @media (max-width: 880px) {
    width: 80%;
    text-align: left;
    border-left: 8px solid #e87cdc;
  }
`;

const DisTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: left;

  @media (max-width: 880px) {
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
  color: #475259;
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
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 15px;
    background-color: #e7ff51;
    z-index: -1;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  // margin-top: 3rem;

  @media (max-width: 880px) {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

const TextWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 16px;
  border: 1px solid #5ab4c5;
  padding: 24px;
  width: 60%;
  margin: 0 auto;
  margin-top: 30px;
  background-color: #edf8fa;

  @media (max-width: 880px) {
    width: 95%;
    box-sizing: border-box;
  }
`;

const DiscriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 65%;
  margin: 0 auto;
  margin-top: 30px;

  @media (max-width: 880px) {
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

  @media (max-width: 880px) {
    flex-direction: column;
    width: ${(props) => props.width || "100%"};
    gap: unset;
  }
`;

const GroupImage = styled.img`
  width: 49%;  /* 調整為容器的百分比 */
  height: 50vh;
  object-fit: cover;
  // aspect-ratio: 16:9; 

  @media (max-width: 1024px) {
    width: ${(props) => props.width || "100%"};
    height: unset;
  }

  @media (max-width: 880px) {
    width: ${(props) => props.width || "95%"};
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
  margin-top: 5rem;

  transition: background-color 0.8s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
  }
`;

const SportsWin = () => {
  return (
    <>
      <Container>
        <Header>
          <img
            src="/sportswin/sportswin.svg"
            alt="logo"
            width="70%"
            style={{ maxWidth: "400px" }}
          />
          <Title2>
            ― A microservice for booking Taipei sports venues, incorporating
            team-building to maximize venue usage. ―
          </Title2>
        </Header>

        <Image
          src="/有球必In CaseBoard.jpg"
          alt="Kungfu Presentation"
          style={{
            borderRadius: "10px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        />

        <SubTitle>
          <br />
          <span style={{ fontWeight: "600" }}>
            2024臺北市秋季程式設計節【城市通微服務大黑客松】
          </span>
          <br />
          佳作（111組中的四強）
          <br />
          <Image
            src="/sportswin/group.jpg"
            alt="Group"
            style={{
              borderRadius: "10px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              margin: "1rem 0",
            }}
          />
          <TextWrapper style={{ width: "70%" }}>
            <SpecialText style={{ width: "fit-content", margin: "0" }}>
              我的角色 / My role
            </SpecialText>
            <Text
              style={{
                margin: "0",
                width: "fit-content",
                fontWeight: "600",
                color: "#5AB4C5",
                textAlign: "center",
              }}
            >
              # UI/UX design <br /> # Frontend slicing <br /> # Demo and report
            </Text>
          </TextWrapper>
        </SubTitle>

        <Divider margin="40px" />

        <section>
          <SectionTitle>Background & Goal</SectionTitle>
          <Text>
            為達到透明開放、科技普惠、建立服務型政府的目標，競賽以市政服務為核心概念，旨在開發一個開源的
            ”城市通數位微服務內容”，參賽者需基於生活的不便經驗，提出解決方案，並確保該方案適用於全台各縣市，惠及所有民眾。
          </Text>
          <SpecialText>打造相容於台北通</SpecialText>
          <SpecialText>且自己會想用的公民科技微服務</SpecialText>

          <Text style={{ textAlign: "left" }}>
            The competition aims to develop open-source "CityPass digital
            microservices" to enhance municipal services, focusing on solutions
            to daily inconveniences. Participants must ensure their proposals
            benefit all cities and counties in Taiwan.
          </Text>
          <SpecialText>A civic tech microservice compatible</SpecialText>
          <SpecialText>with TaipeiPass and personally useful.</SpecialText>
        </section>

        <section style={{ marginTop: "6rem" }}>
          <SectionTitle>Our mission</SectionTitle>
          <Image
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
        </section>

        <CircleWrapper>
          <Circle color="#EDF8FA" />
          <Circle color="#B4E2EA" />
          <Circle color="#5AB4C5" />
          <Circle color="#468D9B" />
        </CircleWrapper>

        <section style={{ marginTop: "5rem" }}>
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
          />

          <DiscriptionWrapper>
            <DisImage
              src="/sportswin/dis-0.png"
              alt="discription"
              style={{ maxWidth: "400px" }}
            />
            <DisTextWrapper>
              <DisText>
                我們選擇將
                <span style={{ color: "#E87CDC", fontWeight: "500" }}>
                  有球必In
                </span>
                微服務入口設置於台北通服務頁面的「服務拼貼」區塊。該區域旨在向需求不明確的用戶推薦服務，透過引導來刺激他們的使用意願。
              </DisText>
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
            </DisTextWrapper>
          </DiscriptionWrapper>

          <Divider
            margin="40px"
            style={{ borderTop: "1px solid #B4E2EA", width: "70%" }}
          />

          <DiscriptionWrapper>
            <DisImage
              src="/sportswin/dis-1.png"
              alt="discription"
              style={{ maxWidth: "400px" }}
            />
            <DisTextWrapper>
              <DisText>
                首先以
                <span style={{ color: "#E87CDC", fontWeight: "500" }}>
                  球類運動
                </span>
                為出發進行分類，更加貼近用戶愛好，讓用戶可以在日常生活情境中，依照自己的喜好和需求獲取想要的資訊。
              </DisText>
              <DisText>
                We categorize by
                <span
                  style={{
                    color: "#E87CDC",
                    fontWeight: "500",
                    margin: "0 3px",
                  }}
                >
                  sports types
                </span>
                to align with user preferences, allowing them to easily access
                relevant information based on their interests and needs in daily
                life.
              </DisText>
            </DisTextWrapper>
          </DiscriptionWrapper>

          <Divider
            margin="40px"
            style={{ borderTop: "1px solid #B4E2EA", width: "70%" }}
          />

          <DiscriptionWrapper>
            <DisImage
              src="/sportswin/dis-2.png"
              alt="discription"
              style={{ maxWidth: "400px" }}
            />
            <DisTextWrapper>
              <DisText>
                依照用戶所選球類運動，我們網羅全台北市所有
                <span style={{ color: "#E87CDC", fontWeight: "500" }}>
                  免費及付費
                </span>
                運動場館資訊，並將付費場地依照場地空缺數分為【
                <span
                  style={{
                    color: "#76A732",
                    fontWeight: "500",
                    padding: "2px 8px",
                    backgroundColor: "#E3E7E9",
                    borderRadius: "6px",
                    margin: "0 4px",
                  }}
                >
                  尚可預約
                </span>{" "}
                /
                <span
                  style={{
                    color: "#D45251",
                    fontWeight: "500",
                    padding: "2px 8px",
                    backgroundColor: "#E3E7E9",
                    borderRadius: "6px",
                    margin: "0 4px",
                  }}
                >
                  不可預約
                </span>
                】實時顯示在畫面，供用戶快速掌握球場的使用狀況，並依需求決定預約場館。
              </DisText>
              <DisText>
                Based on the user's selected sport, we compile all
                <span
                  style={{
                    color: "#E87CDC",
                    fontWeight: "500",
                    margin: "0 3px",
                  }}
                >
                  free and paid sports
                </span>
                venue information in Taipei. Paid venues are categorized as
                <span
                  style={{
                    color: "#76A732",
                    fontWeight: "500",
                    padding: "1px 8px",
                    backgroundColor: "#E3E7E9",
                    borderRadius: "6px",
                    margin: "0 2px",
                  }}
                >
                  Available
                </span>
                /
                <span
                  style={{
                    color: "#D45251",
                    fontWeight: "500",
                    padding: "1px 8px",
                    backgroundColor: "#E3E7E9",
                    borderRadius: "6px",
                    margin: "0 2px",
                  }}
                >
                  Unavailable
                </span>
                based on real-time availability, allowing users to quickly view
                and decide on booking.
              </DisText>
            </DisTextWrapper>
          </DiscriptionWrapper>

          <Divider
            margin="40px"
            style={{ borderTop: "1px solid #B4E2EA", width: "70%" }}
          />

          <DiscriptionWrapper>
            <DisImage
              src="/sportswin/dis-3.png"
              alt="discription"
              style={{ maxWidth: "400px" }}
            />
            <DisTextWrapper>
              <DisText>
                點進卡片後，用戶可以查看各場館的
                <span style={{ color: "#E87CDC", fontWeight: "500" }}>
                  場地資訊
                </span>
                並依照需求決定是否進行預約，我們也串連
                <span style={{ color: "#E87CDC", fontWeight: "500" }}>
                  Google地圖功能
                </span>
                ，讓用戶不須跨平台交叉比對資料。
              </DisText>
              <DisText>
                After clicking on a card, users can view
                <span
                  style={{
                    color: "#E87CDC",
                    fontWeight: "500",
                    margin: "0 3px",
                  }}
                >
                  venue details
                </span>
                and decide whether to book. We've integrated
                <span
                  style={{
                    color: "#E87CDC",
                    fontWeight: "500",
                    margin: "0 3px",
                  }}
                >
                  Google Maps
                </span>
                , so users can access all necessary information without
                switching platforms.
              </DisText>
            </DisTextWrapper>
          </DiscriptionWrapper>

          <Divider
            margin="40px"
            style={{ borderTop: "1px solid #B4E2EA", width: "70%" }}
          />

          <DiscriptionWrapper>
            <DisImage
              src="/sportswin/dis-4.png"
              alt="discription"
              style={{ maxWidth: "400px" }}
            />
            <DisTextWrapper>
              <DisText>
                最先預約到場地的個體用戶在線上租場地後，可以依自身狀況與意願決定是否發起
                <span style={{ color: "#E87CDC", fontWeight: "500" }}>
                  球友招募行動
                </span>
                ，開放場地給其他球友一起報隊使用。
              </DisText>
              <DisText>
                Users who first book the venue online can choose to
                <span
                  style={{
                    color: "#E87CDC",
                    fontWeight: "500",
                    margin: "0 3px",
                  }}
                >
                  recruit teammates
                </span>
                based on their needs, sharing the space with others for team
                play.
              </DisText>
            </DisTextWrapper>
          </DiscriptionWrapper>

          <Divider
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
        </section>

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

export default SportsWin;
