import React from "react";
import styled from "styled-components";
import Footer from "./footer";

const Container = styled.div`
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #f2f2f2;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0; /* 清除 margin */
  padding: 0 3vw;
  box-sizing: border-box;
`;

const Header = styled.header`
  margin-top: 12vh;

  @media (max-width: 480px) {
    margin-top: 10vh;
  }
`;

const Title2 = styled.h2`
  font-size: 1.2rem;
  font-family: "Caveat", cursive;
  font-weight: 500;
  line-height: 1;
  color: #555;
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
    width: ${(props) => props.width || "100%"};
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
    width: ${(props) => props.width || "100%"};
  }
`;

const TabletImage = styled.img`
  display: none;

  @media (max-width: 1024px) {
    display: initial;
    width: 95%;
  }
`;

const ImageWrapper = styled.div`
  width: ${(props) => props.width || "80%"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 480px) {
    flex-direction: column;
    width: ${(props) => props.width || "100%"};
  }
`;

const LaptopImageWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ContentImage = styled.img`
  max-width: 33.3%;
  display: flex;

  @media (max-width: 480px) {
    max-width: fit-content;
    width: 100%;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: ${(props) =>
    `${props.margin || "60px"} auto`}; //控制 margin-top 和 margin-bottom
  width: 90%;
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
  text-align: left;

  @media (max-width: 480px) {
    width: 85%;
  }
`;

const SpecialButton = styled.button`
  font-size: 1.3rem;
  font-family: "Caveat", cursive;
  background-color: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  display: flex;
  box-shadow: -2px -3px 4px 0px #ffffff;
  padding: 1rem;
  margin: auto;
  // width: 150px;
  height: 150px;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  align-items: center;

  a {
    display: flex;
    flex-direction: column;
    color: #666;
    align-items: center;
    gap: 1rem;
    justify-content: space-evenly;
    // height: 100%;
    width: 100%;
  }

  &:hover {
    color: #333;
    box-shadow: 2px 3px 4px 0px #ffffff;
  }
`;

const ButtonGroup = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 1rem;
  margin-top: 2.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 85%;
  }
`;

const Video = styled.iframe`
  margin: 40px 0;
  width: 70%;
  aspect-ratio: 16 / 9;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const IconImage = styled.img`
  width: ${(props) => props.imageWidth || "85%"};
  height: auto; /* 保持图片的宽高比 */
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

const LinkButton = ({ imageSrc, imageWidth, href, children }) => (
  <SpecialButton>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      {imageSrc && (
        <IconImage src={imageSrc} alt="icon" imageWidth={imageWidth} />
      )}
      {children}
    </a>
  </SpecialButton>
);

const YoungLions = () => {
  return (
    <>
      <Container>
        <Header>
          <img
            src="/younglions/logo.svg"
            alt="logo"
            style={{ maxWidth: "400px" }}
          />
          <Title2>― A Lung-health check-up mobile app ―</Title2>
        </Header>

        <Image
          src="/younglions/kungfu.png"
          alt="Kungfu Presentation"
          style={{
            borderRadius: "10px",
            boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05)",
            border: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        />

        <SubTitle>
          <br />
          2023 坎城創意節青年競賽 台灣代表選拔 第四名
          <br />
          Cannes Lions Festival, Taiwan Representative Competition, 4TH Prize
          <br />
          Future young lions award
          <br />
          <Image src="/younglions/award.png" alt="Award" />
        </SubTitle>

        <Divider />

        <section>
          <SectionTitle>Background</SectionTitle>
          <ImageWrapper>
            <ContentImage src="/younglions/research-1.png" alt="research" />
            <ContentImage src="/younglions/research-2.png" alt="research" />
            <ContentImage src="/younglions/research-3.png" alt="research" />
          </ImageWrapper>
        </section>

        <section style={{ marginTop: "6rem" }}>
          <SectionTitle>Mass Psychology Research</SectionTitle>
          <LaptopImage
            src="/younglions/people.png"
            alt="Psychology"
            width="80%"
          />
          <ImageWrapper width="90%" style={{ gap: "1rem", marginTop: "2rem" }}>
            <MobileImage
              src="/younglions/people-1.png"
              alt="insight"
              style={{ marginRight: "15px" }}
            />
            <MobileImage
              src="/younglions/people-2.png"
              alt="insight"
              style={{ marginLeft: "15px" }}
            />
            <MobileImage
              src="/younglions/people-3.png"
              alt="insight"
              style={{ marginRight: "15px" }}
            />
          </ImageWrapper>
        </section>

        <CircleWrapper>
          <Circle color="#f5e1e1" />
          <Circle color="#c89f9f" />
          <Circle color="#a76262" />
          <Circle color="#723939" />
        </CircleWrapper>

        <section style={{ marginTop: "6rem" }}>
          <SectionTitle>Creative Insight</SectionTitle>
          <Text style={{ width: "85%", textAlign: "center" }}>
            How to change people's perception of health check-ups and raise
            awareness about lung health ？
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Image src="/younglions/think.png" alt="think" width="5rem" />
            <LaptopImage
              src="/younglions/insight.png"
              alt="insight"
              width="80%"
            />
            <MobileImage src="/younglions/insight-1-m.png" alt="insight" />
            <MobileImage src="/younglions/insight-2-m.png" alt="insight" />
            <Divider margin="30px" />
            <ImageWrapper style={{ gap: ".6rem" }}>
              <LaptopImage
                src="/younglions/insight-1.png"
                alt="insight"
                width="33.3%"
              />
              <LaptopImage
                src="/younglions/insight-2.png"
                alt="insight"
                width="33.3%"
              />
              <LaptopImage
                src="/younglions/insight-3.png"
                alt="insight"
                width="33.3%"
              />
            </ImageWrapper>
            <ImageWrapper style={{ gap: "1rem" }}>
              <MobileImage src="/younglions/insight-3-m.png" alt="insight" />
              <MobileImage src="/younglions/insight-4-m.png" alt="insight" />
              <MobileImage src="/younglions/insight-5-m.png" alt="insight" />
            </ImageWrapper>
          </div>
        </section>

        <section style={{ marginTop: "6rem" }}>
          <SectionTitle>Solution & Big idea</SectionTitle>
          <LaptopImageWrapper style={{ minWidth: "95%", marginTop: "2rem" }}>
            <LaptopImage
              src="/younglions/bigidea-1.png"
              alt="bigidea"
              width="auto "
              style={{
                objectFit: "contain",
                maxHeight: "350px",
                width: "fit-content",
              }}
            />
            <LaptopImage
              src="/younglions/bigidea-2.png"
              alt="bigidea"
              width="auto "
              style={{ objectFit: "contain", maxHeight: "350px" }}
            />
          </LaptopImageWrapper>
          <ImageWrapper
            style={{
              gap: "1rem",
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TabletImage src="/younglions/bigidea-1-m.png" alt="bigidea" />
            <TabletImage src="/younglions/bigidea-2-m.png" alt="bigidea" />
          </ImageWrapper>
        </section>

        <Text>
          以華人世界熟悉的功夫元素「氣」為基礎，透過『呼出一口氣來傳遞「真氣」給武林大師』的遊戲設定，
          並結合「肺活量」為肺部健康的一大指標這樣的觀念，VC
          Kungfu將肺部檢測平易化，
          試圖用有趣方式喚醒大眾對肺部健康的自我意識，並更進一步的去做肺部檢查。
          <br />
          <br />
          We designed a web application game, called VC kungfu (Vital capacity
          kungfu) to show people how lung health impacts our body.
          <br />
          Users make a continuous voice to transport air in lungs, which would
          become “qi” ,to the kungfu master in game.
        </Text>

        <Text>
          為增添遊戲樂趣，VC
          Kungfu不只紀錄了玩家的音長，更搜集了他們的頻率及分貝，
          針對「音長」將玩家的肺活量區分成五個等級，每個等級都有其對應的武功招式，同時提供玩家客製化的養肺知識，
          並透過分析頻率及分貝的變化，融合心理測驗的概念為玩家進行心境剖析。
          <br />
          <br />
          We not only collect the voice length of players, but also their
          frequency and decibel. According to the voice length, we set 5 levels
          of vital capacity and they match with 5 Kungfu moves, After that, we
          provide suggestions for lung care to them based on voice length data.
          Then we portray player’s state of mind analysis based on the frequency
          and decibel to enhance the fun of the game.
        </Text>

        <Text>
          遊戲結束時，玩家可獲得「獨一無二」的檢測成果圖，
          其中包含聲音偵測圖、肺活量等級及心理剖析結果，鑑於獨樹一格的風格及結果畫面，許多玩家樂於將遊戲成果分享至社交平台。
          <br />
          <br />
          After playing the game, users would receive a customized result
          picture with VC kungfu level, lung-caring tips,state of mind analysis
          and other information to share with others on social media.
        </Text>

        <CircleWrapper>
          <Circle color="#f5e1e1" />
          <Circle color="#c89f9f" />
          <Circle color="#a76262" />
          <Circle color="#723939" />
        </CircleWrapper>

        <section style={{ marginTop: "6rem" }}>
          <SectionTitle>Information Architecture & User flow</SectionTitle>
          <LaptopImage
            src="/younglions/flow.png"
            alt="think"
            width="80%"
            style={{ marginTop: "2rem" }}
          />
          <MobileImage
            src="/younglions/flow-m.png"
            alt="think"
            width="95%"
            style={{ marginTop: "2rem" }}
          />
        </section>

        <section style={{ marginTop: "6rem" }}>
          <SectionTitle>Final results</SectionTitle>
          <LaptopImage
            src="/younglions/result.png"
            alt="think"
            width="80%"
            style={{ marginTop: "2rem" }}
          />
          <MobileImage
            src="/younglions/media.png"
            alt="think"
            width="100%"
            style={{ marginTop: "2rem" }}
          />
          <MobileImage
            src="/younglions/data.png"
            alt="think"
            width="100%"
          />
        </section>

        <section style={{ marginTop: "6rem" }}>
          <SectionTitle>More information</SectionTitle>

          <ButtonGroup>
            <LinkButton
              imageSrc="/younglions/color.svg"
              href="https://tome.app/tingyilin/company-roadmap-copy-cm0l05clr0oel81lrz6b9vt89"
              imageWidth="70%"
            >
              Design Details
            </LinkButton>
            <LinkButton
              imageSrc="/younglions/logo-c.svg"
              href="https://vc-kungfu.web.app/"
              // imageHeight="80%"
            >
              VC Kungfu Game
            </LinkButton>
            <LinkButton
              imageSrc="/younglions/ig.svg"
              href="https://www.instagram.com/vckungfu"
              imageWidth="30%"
            >
              Official IG Acount
            </LinkButton>
          </ButtonGroup>

          <Video
            src="https://www.youtube.com/embed/fJtoTWpaS9k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </section>

        <a
          href="/work"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <BackButton>Back to Work</BackButton>
        </a>
        <Footer />
      </Container>
    </>
  );
};

export default YoungLions;
