import React from "react";
import styled from "styled-components";
import ModalImage from "react-modal-image";

const Container = styled.div`
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #f5f7fa;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0; /* 清除 margin */
  // padding: 0 3vw;
  box-sizing: border-box;

  @media (max-width: 880px) {
    padding: 0 3vw;
    box-sizing: border-box;
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

const Video = styled.video`
  width: ${(props) => props.width || "70%"};
  border-radius: 12px;

  @media (max-width: 880px) {
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

  @media (max-width: 880px) {
    width: ${(props) => props.width || "100%"};
  }
`;

const DisImage = styled.img`
  width: ${(props) => props.width || "100%"};
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const StyledModalImage = styled(ModalImage)`
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const LaptopImage = styled.img`
  width: ${(props) => props.width || "70%"};
  margin: 0 auto;

  @media (max-width: 880px) {
    width: 95%;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileImage = styled.img`
  display: none;

  @media (max-width: 480px) {
    display: initial;
    width: ${(props) => props.width || "100%"};
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

const BlockTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 auto;
  margin-top: 3rem;
  color: #8c8c8c;
  width: 70%;
  font-weight: 400;
  text-align: left;

  @media (max-width: 880px) {
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

  @media (max-width: 880px) {
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

  @media (max-width: 880px) {
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

  @media (max-width: 880px) {
    width: 95%;
  }
`;

const HalfText = styled.div`
  font-size: 1rem;
  margin: 0 auto;
  color: #444;
  width: 100%;
  text-align: justify;

  @media (max-width: 880px) {
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

  @media (max-width: 880px) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-right: none;
  }
`;

const ContentTextLarge = styled.div`
  font-size: 1.5rem;
  position: sticky;
  top: 16vh;
  margin: 0;
  color: #2b3990;
  font-weight: 700;
  width: 40%;
  // min-width: 280px;
  height: fit-content;
  white-space: nowrap;
  text-align: left;

  @media (max-width: 880px) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-right: none;
    font-size: 1.5rem;
    width: 102%;
    top: 0vh;
    background-color: #f5f7fa;
    z-index: 10;
    padding: 10vh 0 1vh 0;
  }

  @media (max-width: 480px) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-right: none;
    font-size: 1.5rem;
    width: 102%;
    top: 0;
    background-color: #f5f7fa;
    z-index: 10;
    padding: 1.5rem 0 1vh 0;
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

  @media (max-width: 880px) {
    width: 100%;
    padding-top: 0rem;
    text-align: left;
  }
`;

const DisTextTitle = styled.div`
  font-size: 1rem;
  margin: 0;
  color: #fff;
  background-image: linear-gradient(135deg, #43cbcb 1.67%, #4fa7ff 98.33%);
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  white-space: nowrap;

  @media (max-width: 880px) {
    padding: 0.4rem 0.8rem;
  }
`;

const DisTextTitleSticky = styled.div`
  font-size: 1rem;
  margin: 0;
  color: #fff;
  background-image: linear-gradient(135deg, #43cbcb 1.67%, #4fa7ff 98.33%);
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  white-space: nowrap;
  position: sticky;
  z-index: ${(props) => props.zIndex || 1};
  top: 16vh;

  @media (max-width: 880px) {
    padding: 0.4rem 0.8rem;
    top: 20vh;
  }
  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    top: 12vh;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 880px) {
    flex-direction: column;
    align-items: left;
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

const ImageWrapper = styled.div`
  width: ${(props) => props.width || "70%"};
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin: 0 auto;
  margin-top: 2rem;
  box-sizing: border-box;
  gap: 1rem;

  @media (max-width: 880px) {
    flex-direction: column;
    width: 95%;
  }
`;

const ContentImage = styled.img`
  width: calc((100% / 3) - (2rem / 3));
  display: flex;

  @media (max-width: 880px) {
    max-width: fit-content;
    width: 95%;
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

  @media (max-width: 880px) {
    width: 95%;
  }
`;

const SubInfoCard = styled.div`
  display: flex;
  align-items: left;
  padding: 24px;
  width: calc((100% / 2) - (1rem / 2));
  background-color: #f9f9f9;
  box-shadow: 0px 3px 12px 0px rgba(21, 19, 99, 0.06);
  border: 1px solid rgba(166, 207, 255, 0.5);
  border-radius: 12px;
  box-sizing: border-box;
  margin: 0;

  @media (max-width: 880px) {
    width: 100%;
  }
`;

const SubInfoCardLarge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: left;
  padding: 24px;
  width: 100%;
  background-color: #f9f9f9;
  // box-shadow: 0px 3px 12px 0px rgba(21, 19, 99, 0.06);
  border: 1px solid rgba(166, 207, 255, 0.5);
  border-radius: 12px;
  box-sizing: border-box;
  margin: 0;
  top: 12rem;
  position: sticky;
  z-index: ${(props) => props.zIndex || 1};

  @media (max-width: 880px) {
    top: 28vh;
  }
  @media (max-width: 480px) {
    top: 18vh;
  }
`;

const InfoContent = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 880px) {
    align-items: flex-start;
  }
`;

const SubInfoContent = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  align-items: left;
  gap: 1rem;
  flex-direction: column;
  width: 100%;

  @media (max-width: 880px) {
    align-items: flex-start;
  }
`;

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="20%"
    height="20%"
    fill="#51BCEB"
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

const SelectIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20%"
    height="auto"
    viewBox="0 0 108 110"
    fill="none"
    style={{
      maxWidth: "2rem",
      minWidth: "1.5rem",
      maxHeight: "2rem",
      minHeight: "1.5rem",
    }}
  >
    <path
      d="M9 34.3748C9 19.8376 19.2106 10.129 33.4719 9.54346C38.9981 9.31656 45.7657 9.1665 54 9.1665C62.2343 9.1665 69.0019 9.31656 74.5281 9.54346C88.7893 10.129 99 19.8376 99 34.3748C99 48.912 88.7893 58.6207 74.5281 59.2062C69.0019 59.4331 62.2343 59.5832 54 59.5832C45.7657 59.5832 38.9981 59.4331 33.4719 59.2062C19.2107 58.6207 9 48.912 9 34.3748Z"
      fill="#2B3990"
    />
    <path
      d="M48.1818 41.98C48.3415 39.5529 49.7824 37.305 52.1577 36.8469C52.7259 36.7371 53.3138 36.6665 53.8853 36.6665C54.4806 36.6665 55.0938 36.7433 55.6839 36.8606C58.0181 37.3256 59.4511 39.5205 59.6604 41.9043C60.0622 46.4856 60.667 54.0041 60.667 57.7601C60.667 57.7601 69.0084 57.7601 77.1863 60.1119C82.4009 61.6113 85.6269 66.518 85.4962 71.9708C85.3702 77.2272 84.5699 84.3687 81.8663 91.8661C80.6254 95.3068 77.6847 97.7351 74.0649 98.1134C71.7766 98.3527 68.7114 98.5415 64.7359 98.5415C61.234 98.5415 58.4386 98.3951 56.2581 98.1966C51.9755 97.807 48.2218 95.5447 45.3767 92.3017C39.744 85.8814 35.2224 79.649 32.79 76.1393C31.482 74.2521 30.972 70.0302 32.1982 68.0885C34.6404 64.221 38.5317 66.1004 42.1639 68.8656C45.3265 71.2734 47.1036 73.0281 47.1036 73.0281C47.1036 60.2136 47.7849 48.0048 48.1818 41.98Z"
      fill="#A6CFFF"
    />
  </svg>
);

const UseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20%"
    height="auto"
    viewBox="0 0 108 110"
    fill="none"
    style={{
      maxWidth: "2rem",
      minWidth: "1.5rem",
      maxHeight: "2rem",
      minHeight: "1.5rem",
    }}
  >
    <path
      d="M26.9621 70.4859C27.087 69.3337 28.0703 68.7498 29.2421 68.7498H50.148C50.9208 78.765 51.5597 86.6 51.5597 86.6H58.4393C58.4393 86.6 59.0644 78.765 59.8243 68.7498H80.7605C81.9325 68.7498 82.9159 69.3337 83.0405 70.4859L85.9587 87.0831L93.9596 86.1169L92.1611 69.5195C91.5369 63.7585 86.6201 59.6798 80.7605 59.6798H60.51C60.999 53.1813 61.4849 46.3643 61.8543 41.2498H48.0951C48.4646 46.3643 48.9557 53.1813 49.4516 59.6798H29.2421C23.3825 59.6798 18.4656 63.7585 17.8414 69.5195L16.043 86.1169L24.0423 87.0831L26.9621 70.4859Z"
      fill="#A6CFFF"
    />
    <path
      d="M34.6835 39.8809C34.9234 43.8299 37.4928 46.8884 41.4159 47.4004C44.4444 47.7957 48.8212 48.1248 55 48.1248C61.1788 48.1248 65.5556 47.7957 68.5841 47.4004C72.5072 46.8884 75.0766 43.8299 75.3165 39.8809C75.4882 37.0565 75.625 33.0607 75.625 27.4998C75.625 21.9389 75.4882 17.943 75.3165 15.1186C75.0766 11.1696 72.5072 8.11111 68.5841 7.59911C65.5556 7.20384 61.1788 6.87476 55 6.87476C48.8212 6.87476 44.4444 7.20384 41.4159 7.59911C37.4928 8.11111 34.9234 11.1696 34.6835 15.1186C34.5118 17.943 34.375 21.9389 34.375 27.4998C34.375 33.0607 34.5118 37.0565 34.6835 39.8809Z"
      fill="#2B3990"
    />
    <path
      d="M77.9709 95.7824C78.0821 99.7371 80.6373 102.727 84.5851 102.984C85.9081 103.069 87.4912 103.125 89.3763 103.125C91.2614 103.125 92.8445 103.069 94.1675 102.984C98.1153 102.727 100.671 99.7371 100.782 95.7824C100.814 94.6217 100.835 93.2597 100.835 91.6663C100.835 90.0729 100.814 88.711 100.782 87.5503C100.671 83.5955 98.1153 80.6061 94.1675 80.3492C92.8445 80.2632 91.2614 80.208 89.3763 80.208C87.4912 80.208 85.9081 80.2632 84.5851 80.3492C80.6373 80.6061 78.0821 83.5955 77.9709 87.5503C77.9381 88.711 77.918 90.0729 77.918 91.6663C77.918 93.2597 77.9381 94.6217 77.9709 95.7824Z"
      fill="#2B3990"
    />
    <path
      d="M43.5959 95.7824C43.7071 99.7371 46.2623 102.727 50.2101 102.984C51.5331 103.069 53.1162 103.125 55.0013 103.125C56.8864 103.125 58.4695 103.069 59.7925 102.984C63.7403 102.727 66.2956 99.7371 66.4067 95.7824C66.4395 94.6217 66.4596 93.2597 66.4596 91.6663C66.4596 90.0729 66.4395 88.711 66.4067 87.5503C66.2956 83.5955 63.7403 80.6061 59.7925 80.3492C58.4695 80.2632 56.8864 80.208 55.0013 80.208C53.1162 80.208 51.5331 80.2632 50.2101 80.3492C46.2623 80.6061 43.7071 83.5955 43.5959 87.5503C43.5631 88.711 43.543 90.0729 43.543 91.6663C43.543 93.2597 43.5631 94.6217 43.5959 95.7824Z"
      fill="#2B3990"
    />
    <path
      d="M9.22086 95.7824C9.33214 99.7371 11.8872 102.727 15.8351 102.984C17.1581 103.069 18.7412 103.125 20.6263 103.125C22.5114 103.125 24.0945 103.069 25.4175 102.984C29.3653 102.727 31.9206 99.7371 32.0317 95.7824C32.0645 94.6217 32.0846 93.2597 32.0846 91.6663C32.0846 90.0729 32.0645 88.711 32.0317 87.5503C31.9206 83.5955 29.3653 80.6061 25.4175 80.3492C24.0945 80.2632 22.5114 80.208 20.6263 80.208C18.7412 80.208 17.1581 80.2632 15.8351 80.3492C11.8872 80.6061 9.33214 83.5955 9.22086 87.5503C9.1882 88.711 9.16797 90.0729 9.16797 91.6663C9.16797 93.2597 9.1882 94.6217 9.22086 95.7824Z"
      fill="#2B3990"
    />
  </svg>
);

const CostIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20%"
    height="auto"
    viewBox="0 0 108 110"
    fill="none"
    style={{
      maxWidth: "2rem",
      minWidth: "1.5rem",
      maxHeight: "2rem",
      minHeight: "1.5rem",
    }}
  >
    <path
      opacity="0.35"
      d="M96.8808 31.5802C95.3728 29.9402 93.2288 29.0002 90.9968 29.0002H28.1009L27.6609 25.6762C27.0009 20.7322 22.7409 17.0002 17.749 17.0002H15.001C12.789 17.0002 11.001 18.7882 11.001 21.0002C11.001 23.2122 12.789 25.0002 15.001 25.0002H17.749C18.749 25.0002 19.601 25.7482 19.733 26.7362L25.8809 72.8481C26.8009 79.7761 32.7649 85.0001 39.7529 85.0001H82.1408C89.3648 85.0001 95.4928 79.3641 96.0928 72.1641L98.9728 37.6602C99.1528 35.4362 98.3928 33.2202 96.8808 31.5802Z"
      fill="#A6CFFF"
    />
    <path
      d="M43.001 93.0002C47.4192 93.0002 51.0009 89.4185 51.0009 85.0002C51.0009 80.582 47.4192 77.0002 43.001 77.0002C38.5827 77.0002 35.001 80.582 35.001 85.0002C35.001 89.4185 38.5827 93.0002 43.001 93.0002Z"
      fill="#2B3990"
    />
    <path
      d="M79 93.0002C83.4182 93.0002 87 89.4185 87 85.0002C87 80.582 83.4182 77.0002 79 77.0002C74.5817 77.0002 71 80.582 71 85.0002C71 89.4185 74.5817 93.0002 79 93.0002Z"
      fill="#2B3990"
    />
    <path
      d="M71.0009 41C70.2569 41 51.745 41 51.001 41C48.793 41 47.001 42.792 47.001 45C47.001 47.208 48.793 49 51.001 49C51.745 49 70.2569 49 71.0009 49C73.2089 49 75.0009 47.208 75.0009 45C75.0009 42.792 73.2089 41 71.0009 41Z"
      fill="#2B3990"
    />
  </svg>
);

const NeedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20%"
    height="auto"
    viewBox="0 0 108 110"
    fill="none"
    style={{
      maxWidth: "2rem",
      minWidth: "1.5rem",
      maxHeight: "2rem",
      minHeight: "1.5rem",
    }}
  >
    <path
      d="M9.60652 77.1082C10.2062 74.3831 12.7976 73.1296 15.5371 72.9915C20.9997 72.7161 32.6224 72.333 54.9993 72.333C77.3763 72.333 88.999 72.7161 94.4616 72.9915C97.2011 73.1296 99.7925 74.3831 100.392 77.1082C100.651 78.2837 100.833 79.7805 100.833 81.6663C100.833 83.5521 100.651 85.049 100.392 86.2245C99.7925 88.9496 97.2011 90.2031 94.4616 90.3412C88.999 90.6165 77.3763 90.9997 54.9993 90.9997C32.6224 90.9997 20.9997 90.6165 15.5371 90.3412C12.7976 90.2031 10.2062 88.9496 9.60652 86.2245C9.34784 85.049 9.16602 83.5521 9.16602 81.6663C9.16602 79.7805 9.34784 78.2837 9.60652 77.1082Z"
      fill="#A6CFFF"
    />
    <path
      d="M41.25 102.667C52.6409 102.667 61.875 93.2645 61.875 81.6665C61.875 70.0685 52.6409 60.6665 41.25 60.6665C29.8591 60.6665 20.625 70.0685 20.625 81.6665C20.625 93.2645 29.8591 102.667 41.25 102.667Z"
      fill="#2B3990"
    />
    <path
      d="M41.25 88.6665C45.047 88.6665 48.125 85.5325 48.125 81.6665C48.125 77.8005 45.047 74.6665 41.25 74.6665C37.453 74.6665 34.375 77.8005 34.375 81.6665C34.375 85.5325 37.453 88.6665 41.25 88.6665Z"
      fill="#A6CFFF"
    />
    <path
      d="M100.392 25.7747C99.7925 23.0495 97.2011 21.7962 94.4616 21.6581C88.999 21.3828 77.3763 20.9995 54.9993 20.9995C32.6224 20.9995 20.9997 21.3828 15.5371 21.6581C12.7976 21.7962 10.2062 23.0495 9.60652 25.7747C9.34784 26.9502 9.16602 28.447 9.16602 30.3328C9.16602 32.2186 9.34784 33.7155 9.60652 34.891C10.2062 37.6161 12.7976 38.8696 15.5371 39.0077C20.9997 39.283 32.6224 39.6662 54.9993 39.6662C77.3763 39.6662 88.999 39.283 94.4616 39.0077C97.2011 38.8696 99.7925 37.6161 100.392 34.891C100.651 33.7155 100.833 32.2186 100.833 30.3328C100.833 28.447 100.651 26.9502 100.392 25.7747Z"
      fill="#A6CFFF"
    />
    <path
      d="M68.75 51.333C57.3591 51.333 48.125 41.931 48.125 30.333C48.125 18.735 57.3591 9.33301 68.75 9.33301C80.1409 9.33301 89.375 18.735 89.375 30.333C89.375 41.931 80.1409 51.333 68.75 51.333Z"
      fill="#2B3990"
    />
    <path
      d="M68.75 37.333C64.953 37.333 61.875 34.199 61.875 30.333C61.875 26.467 64.953 23.333 68.75 23.333C72.547 23.333 75.625 26.467 75.625 30.333C75.625 34.199 72.547 37.333 68.75 37.333Z"
      fill="#A6CFFF"
    />
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

const SolutionIcon = () => (
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
    <path d="M224,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V180a4,4,0,0,1,4-4h36a8,8,0,0,0,8-8.53,8.18,8.18,0,0,0-8.25-7.47H148a4,4,0,0,1-4-4V140a4,4,0,0,1,4-4h36a8,8,0,0,0,8-8.53,8.18,8.18,0,0,0-8.25-7.47H148a4,4,0,0,1-4-4V100a4,4,0,0,1,4-4h36a8,8,0,0,0,8-8.53A8.18,8.18,0,0,0,183.73,80H148a4,4,0,0,1-4-4V48a16,16,0,0,1,16-16h48A16,16,0,0,1,224,48ZM109.66,58.34A8,8,0,0,1,112,64V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V64a8,8,0,0,1,2.34-5.66l32-32a8,8,0,0,1,11.32,0ZM48,80V184H64V80Zm32,0V184H96V80ZM51.31,64H92.69L72,43.31Z" />{" "}
  </svg>
);

const WinIcon = () => (
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
    <path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z" />{" "}
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
  // white-space: nowrap;
  max-width: 90%;

  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 15px;
    background-image: var(
      --AInst-gradient,
      linear-gradient(130deg, #43cbcb 0%, #4fa7ff 100%)
    );
    background-image: var(
      --AInst-gradient,
      linear-gradient(
        130deg,
        rgba(67, 203, 203, 0.5) 0%,
        rgba(79, 167, 255, 0.5) 100%
      )
    );
    z-index: -1;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7fa;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 24px;
  gap: 1rem;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 70%;

  @media (max-width: 880px) {
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
  background-color: #f9f9f9;
  width: 100%;
  margin: 0 auto;
  padding: 24px;
  gap: 1.5rem;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 880px) {
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
  box-sizing: border-box;

  @media (max-width: 880px) {
    padding: 0px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  padding: 12px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 880px) {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

const ContentWrapperAB = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: .5rem;
  padding: 0;
  gap: 1rem;
  box-sizing: border-box;

  @media (max-width: 880px) {
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

const AB = styled.div`
  width: 50%;

  @media (max-width: 880px) {
    width: 90%;
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

  @media (max-width: 880px) {
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
  // border: 1px solid rgba(0, 0, 0, 0.1);
  // padding: 24px;
  box-sizing: border-box;
  margin: 0 auto;
  right: 0;
  width: 100%;
  max-width: 100%;
  align-items: right;
  background-color: #f8f8f8;

  @media (max-width: 880px) {
    box-sizing: border-box;
    margin: 0 auto;
    width: 100%;
  }
`;

const DiscriptionWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 4rem;
  width: 80%;
  margin: 0 auto;
  margin-top: 5rem;

  @media (max-width: 880px) {
    width: 95%;
    margin-top: 3rem;
    gap: 1.5rem;
    align-items: unset;
    box-sizing: border-box;
    flex-direction: column;
  }
`;

const DiscriptionWrapperSmall = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 1rem;
`;

const Hr = ({ style }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      margin: "9vh 0",
      ...style,
    }}
  >
    <svg width="112" height="6" viewBox="0 0 112 6" fill="none">
      <path
        d="M9.24865 1.40299C11.1861 -0.467666 14.2571 -0.467663 16.1946 1.40299L17.8878 3.03785C19.0503 4.16024 20.8929 4.16024 22.0554 3.03785L23.777 1.403C25.7145 -0.467659 28.7855 -0.467659 30.723 1.403L32.4162 3.03785C33.5787 4.16025 35.4213 4.16025 36.5838 3.03785L38.277 1.403C40.2145 -0.467659 43.2855 -0.467656 45.223 1.403L46.9162 3.03786C48.0787 4.16025 49.9213 4.16025 51.0838 3.03786L52.7552 1.42402C52.7592 1.42024 52.7593 1.414 52.7555 1.41009C52.7517 1.40617 52.7519 1.39989 52.7558 1.39612C54.6936 -0.467659 57.7595 -0.465367 59.6946 1.403L61.3878 3.03785C62.5503 4.16025 64.3929 4.16025 65.5554 3.03785L67.2486 1.403C69.1861 -0.467662 72.2571 -0.467659 74.1946 1.403L75.8878 3.03785C77.0503 4.16025 78.8929 4.16025 80.0554 3.03785L81.777 1.403C83.7145 -0.467655 86.7855 -0.467655 88.723 1.403L90.4162 3.03786C91.5787 4.16025 93.4213 4.16025 94.5838 3.03786L96.277 1.403C98.2145 -0.467655 101.285 -0.467652 103.223 1.403L104.916 3.03786C106.079 4.16025 107.921 4.16025 109.084 3.03786L110.058 2.0976C110.455 1.71398 111.088 1.72509 111.472 2.1224C111.855 2.51972 111.844 3.15279 111.447 3.5364L110.473 4.47666C108.535 6.34732 105.464 6.34732 103.527 4.47666L101.834 2.84181C100.671 1.71941 98.8287 1.71941 97.6662 2.8418L95.973 4.47666C94.0355 6.34732 90.9645 6.34732 89.027 4.47666L87.3338 2.8418C86.1713 1.71941 84.3287 1.71941 83.1662 2.8418L81.4446 4.47665C79.5071 6.34731 76.4361 6.34731 74.4986 4.47665L72.8054 2.8418C71.6429 1.71941 69.8003 1.7194 68.6378 2.84179L66.9446 4.47665C65.0071 6.34731 61.9361 6.34731 59.9986 4.47665L58.3054 2.8418C57.1502 1.72643 55.3234 1.71945 54.1598 2.82085C54.1558 2.82459 54.1556 2.83085 54.1594 2.83476C54.1632 2.83865 54.1631 2.84485 54.1592 2.8486L52.473 4.47666C50.5355 6.34732 47.4645 6.34732 45.527 4.47666L43.8338 2.8418C42.6713 1.71941 40.8287 1.71941 39.6662 2.8418L37.973 4.47666C36.0355 6.34731 32.9645 6.34731 31.027 4.47666L29.3338 2.8418C28.1713 1.71941 26.3287 1.71941 25.1662 2.8418L23.4446 4.47665C21.5071 6.34731 18.4361 6.34731 16.4986 4.47665L14.8054 2.8418C13.6429 1.7194 11.8003 1.7194 10.6378 2.84179L8.94459 4.47665C7.00713 6.34731 3.93611 6.34731 1.99865 4.47665L1.02481 3.53639C0.627491 3.15278 0.616384 2.51971 0.999998 2.12239C1.38361 1.72508 2.01668 1.71397 2.41399 2.09759L3.38784 3.03785C4.55032 4.16024 6.39292 4.16024 7.5554 3.03785L9.24865 1.40299Z"
        fill="#65e8fd"
      />
    </svg>
  </div>
);

const BackButton = styled.button`
  background-color: #e1cdff;
  color: #0000ff;
  padding: 8px 24px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 8rem;

  transition: background-color 0.8s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
  }
`;

const AInsight = () => {
  return (
    <>
      <Container>
        <Header>
          <img
            src="/ainsight/logo.svg"
            alt="logo"
            width="70%"
            style={{ maxWidth: "400px" }}
          />
          <Title2>
            ― An AI-enhanced financial operations system, built by small and
            medium-sized enterprises, for small and medium-sized businesses. ―
          </Title2>
        </Header>

        <Image
          src="/ainsight/demo.png"
          alt="Kungfu Presentation"
          style={{
            borderRadius: "10px",
            boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05)",
            // border: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        />

        <Image
          src="/ainsight/demo-2.png"
          alt="Kungfu Presentation"
          style={{
            marginTop: "2rem",
            borderRadius: "10px",
            boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05)",
            // border: "1px solid rgba(0, 0, 0, 0.1)",
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
                  color: "#2B3990",
                  textAlign: "right",
                }}
              >
                Futurenest 未來巢科技股份有限公司
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
                  color: "#2B3990",
                  textAlign: "right",
                }}
              >
                UIUX & Front-end Internship
              </Text>
            </ContentWrapper>
            <TextWrapperSmall>
              <ContentText>
                <span style={{ fontWeight: "600", color: "#333" }}>
                  User Experience Research
                </span>
                <br /> # User Interview <br /> # Value proposition <br />#
                Persona <br /># Functional mapping <br /> # User flow
              </ContentText>
              <ContentText>
                <span style={{ fontWeight: "600", color: "#333" }}>
                  Interface Design Execution
                </span>
                <br /># Wireframe and Lo-fi Prototype <br /> # UI Kit <br /> #
                Design and component system <br /> # A/B testing
                <br /> # Hi-fi Prototype
              </ContentText>
              <ContentText style={{ border: "none" }}>
                <span style={{ fontWeight: "600", color: "#333" }}>
                  Frontend Development
                </span>
                <br /># Bootstrap visual-tuning <br /> # AntDesign visual-tuning{" "}
                <br /> # React.js slicing
                <br /> # Frontend prototype <br /> # UI & Frontend spec
              </ContentText>
            </TextWrapperSmall>
            <TextWrapperSmall>
              <span style={{ fontWeight: "600", color: "#333" }}>Tools</span>

              <Text
                style={{
                  margin: "0",
                  width: "fit-content",
                  color: "#8c8c8c",
                  textAlign: "right",
                }}
              >
                Figma | Miro | Notion | VS Code
              </Text>
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
                  color: "#2B3990",
                  textAlign: "right",
                }}
              >
                May to October 2023
              </Text>
            </ContentWrapper>
          </TextWrapper>
        </SubTitle>

        <Divider margin="60px" />

        <section>
          <SectionTitle>Background & Goal</SectionTitle>
          <Text>
            未來巢是間專注於幫助中小企業進行數位轉型的新創公司。我們發現，對於小規模的公司來說，處理瑣碎的財務、會計等流程需要額外花大量人事及時間成本，而傳統龐大、複雜且高額的ERP系統導入對中小企業來說實施成本高，是個不小的負擔。
            因此，我們團隊致力於開發一款專為中小企業打造的、由AI賦能的輕量化ERP財務管理系統，讓用戶可以擺脫傳統ERP系統操作使用上的壓迫感，以高效的速度、較低的使用門檻解決企業財會問題、優化決策過程。
          </Text>
          <SpecialText>重新定義中小企業的經營管理體驗，</SpecialText>
          <SpecialText>透過AI強化財務系統最佳化營運效率。</SpecialText>
          <Text>
            Futurenest is a startup focused on helping small and medium-sized
            businesses with digital transformation. We recognize that smaller
            companies often face significant time and labor costs in handling
            routine financial and accounting tasks. However, traditional ERP
            systems are often too large, complex, and expensive for these
            businesses to implement. Therefore, our team is dedicated to
            developing an AI-powered, lightweight ERP financial management
            system specifically designed for small businesses, Allow users to
            overcome the oppressive feeling of operating traditional ERP
            systems, efficiently resolving financial and accounting issues and
            optimizing the decision-making process with lower usage thresholds.
          </Text>
          <SpecialText>
            Optimizing SME operations with AI-powered financial systems.
          </SpecialText>
        </section>

        <section style={{ marginTop: "7rem" }}>
          <SectionTitle>Challenges</SectionTitle>
          <InfoCard>
            <InfoContent>
              <InfoIcon />
              <HalfTextWrapper style={{ padding: "0px", gap: ".5rem" }}>
                <DisText>
                  數位轉型對中小企業而言並不陌生，然而背後常伴隨著隱形的擔憂。雖然「數位化」是大勢所趨，小型企業仍然在轉型過程中表現出一定程度的抗拒，而這種抗拒通常源自對未知和改變的焦慮感。
                </DisText>
                <DisText>
                  Digital transformation is a familiar concept for small and
                  medium enterprises, but it often brings hidden concerns.
                  Despite the trend toward digitization, small businesses may
                  still resist the shift due to a fear of the unknown and
                  uncertainty about managing the changes that come with it.
                </DisText>
              </HalfTextWrapper>
            </InfoContent>
          </InfoCard>

          <ImageWrapper>
            <SubInfoCard>
              <SubInfoContent>
                <ContentWrapper
                  style={{
                    padding: "0px",
                    paddingBottom: ".5rem",
                    justifyContent: "flex-start",
                    gap: ".8rem",
                  }}
                >
                  <SelectIcon />

                  <Text
                    style={{
                      margin: "0",
                      width: "fit-content",
                      fontWeight: "600",
                      color: "#2B3990",
                      textAlign: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    怎麼選? / How to select?
                  </Text>
                </ContentWrapper>
                <HalfTextWrapper style={{ padding: "0px", gap: ".8rem" }}>
                  <DisText>
                    ERP系統太龐大且複雜 <br /> The ERP system is too large and
                    complex.
                  </DisText>
                  <DisText>
                    進銷存系統功能夠實用嗎？ <br /> Is the inventory management
                    system practical to me?
                  </DisText>
                </HalfTextWrapper>
              </SubInfoContent>
            </SubInfoCard>

            <SubInfoCard>
              <SubInfoContent>
                <ContentWrapper
                  style={{
                    padding: "0px",
                    paddingBottom: ".5rem",
                    justifyContent: "flex-start",
                    gap: ".8rem",
                  }}
                >
                  <UseIcon />

                  <Text
                    style={{
                      margin: "0",
                      width: "fit-content",
                      fontWeight: "600",
                      color: "#2B3990",
                      textAlign: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    好用嗎? / Is it useful?
                  </Text>
                </ContentWrapper>
                <HalfTextWrapper style={{ padding: "0px", gap: ".8rem" }}>
                  <DisText>
                    我的員工知道如何使用嗎？ <br /> Will my employees know how
                    to use it?
                  </DisText>
                  <DisText>
                    工具真的好上手嗎？ <br /> Is the tool really easy to use?
                  </DisText>
                </HalfTextWrapper>
              </SubInfoContent>
            </SubInfoCard>
          </ImageWrapper>

          <ImageWrapper style={{ marginTop: "1rem" }}>
            <SubInfoCard>
              <SubInfoContent>
                <ContentWrapper
                  style={{
                    padding: "0px",
                    paddingBottom: ".5rem",
                    justifyContent: "flex-start",
                    gap: ".8rem",
                  }}
                >
                  <CostIcon />

                  <Text
                    style={{
                      margin: "0",
                      width: "fit-content",
                      fontWeight: "600",
                      color: "#2B3990",
                      textAlign: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    成本高嗎? / Is the cost high?
                  </Text>
                </ContentWrapper>
                <HalfTextWrapper style={{ padding: "0px", gap: ".8rem" }}>
                  <DisText>
                    要投入更多人力嗎？ <br /> Do I need more human resources?
                  </DisText>
                  <DisText>
                    需要找數位轉型的專家嗎？ <br /> Do I need an expert?
                  </DisText>
                </HalfTextWrapper>
              </SubInfoContent>
            </SubInfoCard>

            <SubInfoCard>
              <SubInfoContent>
                <ContentWrapper
                  style={{
                    padding: "0px",
                    paddingBottom: ".5rem",
                    justifyContent: "flex-start",
                    gap: ".8rem",
                  }}
                >
                  <NeedIcon />

                  <Text
                    style={{
                      margin: "0",
                      width: "fit-content",
                      fontWeight: "600",
                      color: "#2B3990",
                      textAlign: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    符合需求嗎? / Does it meet my needs?
                  </Text>
                </ContentWrapper>
                <HalfTextWrapper style={{ padding: "0px", gap: ".8rem" }}>
                  <DisText>
                    系統足夠彈性嗎？ <br /> Is the system flexible?
                  </DisText>
                  <DisText>
                    可以符合我的特定需求嗎？ <br /> Can it adapt to my specific
                    needs?
                  </DisText>
                </HalfTextWrapper>
              </SubInfoContent>
            </SubInfoCard>
          </ImageWrapper>
        </section>

        <CircleWrapper>
          <Circle color="#CFE8FF" />
          <Circle color="#A6CFFF" />
          <Circle color="#1575E5" />
          <Circle color="#2B3990" />
        </CircleWrapper>

        <section style={{ marginTop: "5rem" }}>
          <SectionTitle>Design processes</SectionTitle>
          <LaptopImage
            src="/ainsight/process.png"
            alt="affinity diagram"
            style={{ marginTop: "3rem" }}
          />

          <MobileImage
            src="/ainsight/process-m.png"
            alt="affinity diagram"
            style={{ marginTop: "1rem" }}
          />
          <DiscriptionWrapper>
            <ContentTextLarge style={{ border: "none" }}>
              Stakeholder interviews —
            </ContentTextLarge>
            <TextWrapperContainer>
              <DisTextTitle>Stakeholder map</DisTextTitle>
              <DisImage src="/ainsight/stackholder.jpg" alt="discription" />
              <DisText style={{ marginTop: ".5rem" }}>
                我列出與產品相關的利害關係人，從直接到間接，並根據「主要決策者」、「重要影響者」、「產品使用者」這三個標籤進行分類。接著，依此分類羅列出具體的訪談名單，以確保能全面了解各個利害關係人日常的任務以及對產品的需求與期望。
              </DisText>
              <DisText>
                I listed all stakeholders related to the product, from direct to
                indirect, and categorized them using three labels: "Decision
                Maker," "Heavy Influencer," and "Product User." Based on these
                categories, we compiled a specific interview list to ensure a
                comprehensive understanding of each stakeholder's daily tasks
                and their needs and expectations for the product.
              </DisText>
              <DisTextTitle style={{ marginTop: ".5rem" }}>
                Interview outline
              </DisTextTitle>
              <DisImage src="/ainsight/interview.png" alt="discription" />
              <DisText style={{ marginTop: ".5rem" }}>
                接著，我與團隊將受訪者依其背景和職業初步分為兩大類——「非財務背景用戶（例：中小企業主）」與「財會相關專業用戶（例：會計事務所、記帳士等）」。針對這兩類用戶分別設計適合的訪綱、進行用戶訪談。這樣的方式帶領我從兩個不同角度去了解記帳與財務對於公司與政府法規的關係，進而拓展到產品使用目的及需求。
              </DisText>
              <DisText>
                Together with my team, we categorized the interviewees into two
                main groups based on their backgrounds and professions:
                "non-financial users" (e.g., small business owners) and
                "financial professionals" (e.g., accounting firms, bookkeepers).
                We created tailored interview guides for these two groups and
                conducted user interviews. This approach allowed me to explore
                accounting and financial regulations from two distinct
                perspectives, broadening our understanding of the product’s use
                cases and the specific needs of users in different sectors.
              </DisText>
            </TextWrapperContainer>
          </DiscriptionWrapper>

          <Divider
            margin="4rem"
            style={{ borderTop: "1px solid #65E8FD", width: "70%" }}
          />

          <DiscriptionWrapper>
            <ContentTextLarge style={{ border: "none" }}>
              Define and focus —
              <br />
              <span
                style={{
                  width: "100%",
                  textAlign: "left",
                  color: "#B6B6B6",
                  fontWeight: "bold",
                  fontSize: ".8rem",
                }}
              >
                ＊以核心用戶為例
              </span>
            </ContentTextLarge>
            <TextWrapperContainer>
              <DisTextTitle>Value proposition</DisTextTitle>
              <DisImage src="/ainsight/value.jpg" alt="discription" />
              <DisText style={{ marginTop: ".5rem" }}>
                我們進行了超過 10
                場深度訪談，對象涵蓋了中小企業主、中階主管、內部員工及會計師。這些訪談幫助我們深入了解不同用戶的需求差異，並具體掌握了他們的目標、日常任務及在工作中的痛點。我們將這些洞察作為產品優化的機會點，旨在開發能夠有效解決這些問題的功能和服務。
              </DisText>
              <DisText>
                We conducted over 10 in-depth interviews with small business
                owners, mid-level managers, internal staff, and accountants.
                These interviews helped us gain a deeper understanding of the
                differences in user needs and provided insight into their goals,
                daily tasks, and pain points. We are using these insights as
                opportunities to optimize our product by developing features and
                services that effectively address these issues.
              </DisText>
              <DisImage
                style={{ marginTop: ".5rem" }}
                src="/ainsight/task.png"
                alt="discription"
              />
              <DisText style={{ marginTop: ".5rem" }}>
                透過用戶訪查與價值主張分析，團隊發現中小企業中常見的現象是，財務工作不一定由具備專業背景的專家處理。實際上，許多情況下是由公司老闆或隨便的一名員工來負責。這樣的情況不僅增加了負責人的壓力，還因缺乏專業知識而導致工作效率低下。
              </DisText>
              <DisText>
                Through user interviews and value proposition analysis, the team
                discovered a common phenomenon in small and medium-sized
                enterprises: financial tasks are not necessarily handled by
                experts with a financial background. In many cases, these
                responsibilities fall on the company owner or an arbitrary
                employee. This situation not only increases the pressure on the
                responsible party but also leads to decreased efficiency due to
                a lack of expertise.
              </DisText>
              <DisTextTitle style={{ marginTop: "1rem" }}>Persona</DisTextTitle>
              {/* <StyledModalImage
                small="/ainsight/Persona-1.jpg" // 小圖的 URL
                medium="/ainsight/Persona-1.jpg" // 大圖的 URL
                // alt="description"
                hideDownload={true} // 隱藏下載按鈕
                imageBackgroundColor="#000fff" // 背景色
                children={
                  <DisImage src="/ainsight/Persona-1.jpg" alt="description" style={{ width: "60%" }}/>
                } // 使用 DisImage 作為子組件
              /> */}
              <DisImage src="/ainsight/Persona-1.jpg" alt="discription" />
              <DisImage src="/ainsight/Persona-2.jpg" alt="discription" />
              <DisText style={{ marginTop: ".5rem" }}>
                在一系列用戶調查後，團隊確認了兩個核心用戶群體——「中小企業主」與「公司財務主管」。通過分析他們的日常任務和目標，我設計了使用者畫像
                (Persona)，並擬定了用戶故事 (User
                Story)，以幫助團隊更加聚焦於用戶需求。
              </DisText>
              <DisText>
                After conducting a series of user research studies, we
                identified two core user groups: "small business owners" and
                "corporate finance managers." By analyzing their daily tasks and
                goals, I developed personas and created user stories to help the
                team stay focused on user needs.
              </DisText>
            </TextWrapperContainer>
          </DiscriptionWrapper>

          <Divider
            margin="4rem"
            style={{ borderTop: "1px solid #65E8FD", width: "70%" }}
          />

          <DiscriptionWrapper>
            <ContentTextLarge style={{ border: "none" }}>
              User stories & insights —
              <br />
              <span
                style={{
                  width: "100%",
                  textAlign: "left",
                  color: "#B6B6B6",
                  fontWeight: "bold",
                  fontSize: ".8rem",
                }}
              >
                ＊以核心用戶為例
              </span>
            </ContentTextLarge>
            <TextWrapperContainer>
              <DiscriptionWrapperSmall>
                <DisTextTitleSticky zIndex={1}>
                  User stories for 李春成
                </DisTextTitleSticky>
                <SubInfoCardLarge zIndex={1}>
                  <SpecialText
                    style={{
                      padding: "0px",
                      margin: "0px",
                      marginBottom: "12px",
                    }}
                  >
                    User Story 1 : 儀表板洞察
                  </SpecialText>
                  <div
                    style={{
                      display: "flex",
                      textAlign: "left",
                      width: "100%",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      身為
                    </span>{" "}
                    一名小企業主，
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      我希望
                    </span>{" "}
                    擁有一個用戶友善的儀表板，提供關鍵的財務指標和摘要，
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "900",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      以便
                    </span>{" "}
                    我可以快速地一覽了然地了解我的企業的財務表現。
                  </div>

                  <Hr style={{ margin: "1rem" }} />

                  <SpecialText
                    style={{
                      padding: "0px",
                      margin: "0px",
                      marginBottom: "12px",
                    }}
                  >
                    Acceptance Criteria / 驗收標準
                  </SpecialText>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      lineHeight: "1.8",
                      color: "#333",
                    }}
                  >
                    1. 有儀表板顯示基本的財務指標，包括收入、費用和利潤。
                    <br />
                    2. 它應該可以在主屏幕上，透過單擊就可快速查看訪問。
                    <br />
                    3. 財務指標需實時或定期更新，以便掌握最新分析數據。
                    <br />
                    4. 儀表板彈性高，可以自定義重要的指標。
                  </div>
                </SubInfoCardLarge>

                <SubInfoCardLarge zIndex={2}>
                  <SpecialText
                    style={{
                      padding: "0px",
                      margin: "0px",
                      marginBottom: "12px",
                    }}
                  >
                    User Story 2 : 支出追蹤
                  </SpecialText>
                  <div
                    style={{
                      display: "flex",
                      textAlign: "left",
                      width: "100%",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      身為
                    </span>{" "}
                    一名小企業主，
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      我希望
                    </span>{" "}
                    有一個可以追蹤公司內部所有大小支出的系統，
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "900",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      以便
                    </span>{" "}
                    我可以有效監控和控制成本，快速識別財務花費狀況以及可能節省成本的領域。
                  </div>

                  <Hr style={{ margin: "1rem" }} />

                  <SpecialText
                    style={{
                      padding: "0px",
                      margin: "0px",
                      marginBottom: "12px",
                    }}
                  >
                    Acceptance Criteria / 驗收標準
                  </SpecialText>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      lineHeight: "1.8",
                      color: "#333",
                    }}
                  >
                    1. 可以輕鬆記錄和分類所有的業務費用。
                    <br />
                    2.
                    系統應提供費用隨時間變化的直觀視覺化表示，方便我快速掌握走勢。
                    <br />
                    3. 應該要能夠設定預算限制，並在費用接近限制時收到警示提醒。
                    <br />
                    4. 可以生成我所選擇的特定時間段的開支報告。
                  </div>
                </SubInfoCardLarge>

                <SubInfoCardLarge zIndex={3}>
                  <SpecialText
                    style={{
                      padding: "0px",
                      margin: "0px",
                      marginBottom: "12px",
                    }}
                  >
                    User Story 3 : 產線化的發票管理
                  </SpecialText>
                  <div
                    style={{
                      display: "flex",
                      textAlign: "left",
                      width: "100%",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      身為
                    </span>{" "}
                    一名小企業主，
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      我希望
                    </span>{" "}
                    有一個簡化的發票管理工具，
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "900",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      以便
                    </span>{" "}
                    我可以輕鬆創建和管理發票，同時追蹤付款情況。
                  </div>

                  <Hr style={{ margin: "1rem" }} />

                  <SpecialText
                    style={{
                      padding: "0px",
                      margin: "0px",
                      marginBottom: "12px",
                    }}
                  >
                    Acceptance Criteria / 驗收標準
                  </SpecialText>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      lineHeight: "1.8",
                      color: "#333",
                    }}
                  >
                    1. 可以輕鬆地創建和自定義包括客戶詳細信息和明細費用的發票。
                    <br />
                    2.
                    系統應自動追蹤每張發票的付款狀態，並於截止前給予適度的追款警示提醒。
                    <br />
                    3. 可以為常規客戶設置循環發票。
                    <br />
                    4. 可以直接從系統通過電子郵件發送發票。
                  </div>
                </SubInfoCardLarge>
              </DiscriptionWrapperSmall>

              <DiscriptionWrapperSmall style={{ marginTop: "4rem" }}>
                <DisTextTitleSticky zIndex={1}>
                  User stories for 陳雅琪
                </DisTextTitleSticky>
                <SubInfoCardLarge zIndex={1}>
                  <SpecialText
                    style={{
                      padding: "0px",
                      margin: "0px",
                      marginBottom: "12px",
                    }}
                  >
                    User Story 1 : 高效的交易記錄
                  </SpecialText>
                  <div
                    style={{
                      display: "flex",
                      textAlign: "left",
                      width: "100%",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      身為
                    </span>{" "}
                    公司內部會計師，
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      我希望
                    </span>{" "}
                    有可以簡便且快速數據輸入功能的系統。
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "900",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      以便
                    </span>{" "}
                    我可以簡化繁瑣的交易記錄流程並保持準確的財務金流記錄。
                  </div>

                  <Hr style={{ margin: "1rem" }} />

                  <SpecialText
                    style={{
                      padding: "0px",
                      margin: "0px",
                      marginBottom: "12px",
                    }}
                  >
                    Acceptance Criteria / 驗收標準
                  </SpecialText>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      lineHeight: "1.8",
                      color: "#333",
                    }}
                  >
                    1. 一個直觀且用戶友善的界面，讓我可以專注於記錄交易。
                    <br />
                    2. 可以記錄交易對象、金額、付款狀態等詳細交易明細。
                    <br />
                    3. 可以輕鬆地對交易進行分類以進行正確的會計分錄。
                    <br />
                    4.
                    輸入的交易應實時或定時自動化地更新到財務報表、系統圖表中。
                  </div>
                </SubInfoCardLarge>

                <SubInfoCardLarge zIndex={2}>
                  <SpecialText
                    style={{
                      padding: "0px",
                      margin: "0px",
                      marginBottom: "12px",
                    }}
                  >
                    User Story 2 : 自動化流程導入
                  </SpecialText>
                  <div
                    style={{
                      display: "flex",
                      textAlign: "left",
                      width: "100%",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      身為
                    </span>{" "}
                    公司內部會計師，
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      我希望
                    </span>{" "}
                    系統和科技可以自動化我的日常財務任務。
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "900",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      以便
                    </span>{" "}
                    我可以節省時間，降低人工銀行對賬和發票處理等任務中的錯誤風險。
                  </div>

                  <Hr style={{ margin: "1rem" }} />

                  <SpecialText
                    style={{
                      padding: "0px",
                      margin: "0px",
                      marginBottom: "12px",
                    }}
                  >
                    Acceptance Criteria / 驗收標準
                  </SpecialText>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      lineHeight: "1.8",
                      color: "#333",
                    }}
                  >
                    1. 系統通過將交易與銀行對賬單進行匹配來自動化銀行對賬。
                    <br />
                    2. 提供自動化的發票追蹤處理，包括發送逾期付款的警示。
                    <br />
                    3. 可以方便我輕鬆系統追蹤自動化任務的進度。
                    <br />
                    4. 依據日記帳生成符合金管會規格的會計三表。
                  </div>
                </SubInfoCardLarge>

                <SubInfoCardLarge zIndex={3}>
                  <SpecialText
                    style={{
                      padding: "0px",
                      margin: "0px",
                      marginBottom: "12px",
                    }}
                  >
                    User Story 3 : 提升會計技能
                  </SpecialText>
                  <div
                    style={{
                      display: "flex",
                      textAlign: "left",
                      width: "100%",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      身為
                    </span>{" "}
                    公司內部會計師，
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      我希望
                    </span>{" "}
                    在系統內獲得會計支援和教育資源，
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      alignItems: "flex-start",
                      justifyContent: "left",
                      color: "#333",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "900",
                        display: "flex",
                        marginRight: "10px",
                        whiteSpace: "nowrap",
                        color: "#2B3990",
                      }}
                    >
                      以便
                    </span>{" "}
                    我可以隨著時間提升我的會計技能，並確保公司運作符合財務法規。
                  </div>

                  <Hr style={{ margin: "1rem" }} />

                  <SpecialText
                    style={{
                      padding: "0px",
                      margin: "0px",
                      marginBottom: "12px",
                    }}
                  >
                    Acceptance Criteria / 驗收標準
                  </SpecialText>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      textAlign: "left",
                      lineHeight: "1.8",
                      color: "#333",
                    }}
                  >
                    1. 系統提供訪問會計指南、教程和文章的功能。
                    <br />
                    2. 教育內容彈性，與我的專業水平和公司的需求相關。
                    <br />
                    3. 提供有關會計最佳實踐的定期提示和更新。
                    <br />
                    4. 會計資源可以輕鬆從系統內部訪問，公開且透明。
                  </div>
                </SubInfoCardLarge>
              </DiscriptionWrapperSmall>
              <DisText style={{ marginTop: ".5rem" }}>
                此外，我透過用戶路線圖（User
                Roadmap）與團隊深入探討用戶在未來與產品的長期互動，重點在於產品發展、功能實現與用戶需求的長期願景結合。我們分析並規劃了用戶從實際場景如何與系統銜接，進而回到實際應用中，實現預期效益。
              </DisText>
              <DisText>
                Additionally, through the User Roadmap, I conducted an in-depth
                analysis of how users will interact with the product over the
                long term. This roadmap focuses on the future development,
                goals, and feature implementation aligned with users' long-term
                needs. Our team examined how users transition from real-world
                contexts to integrating our system, and how it returns to
                practical application to achieve desired outcomes.
              </DisText>
              <DisTextTitle style={{ marginTop: ".5rem" }}>
                User roadmap
              </DisTextTitle>
              <DisImage
                src="/ainsight/roadmap.png"
                alt="discription"
                style={{ border: "none", borderRadius: "0px" }}
              />
            </TextWrapperContainer>
          </DiscriptionWrapper>

          <Divider
            margin="4rem"
            style={{ borderTop: "1px solid #65E8FD", width: "70%" }}
          />

          <DiscriptionWrapper>
            <ContentTextLarge style={{ border: "none" }}>
              UX Strategies —
              <br />
              <span
                style={{
                  width: "100%",
                  textAlign: "left",
                  color: "#B6B6B6",
                  fontWeight: "bold",
                  fontSize: ".8rem",
                }}
              >
                ＊部分與商業機密相關的內容無法公開揭露
              </span>
            </ContentTextLarge>
            <TextWrapperContainer>
              <DisTextTitle>Functional Map</DisTextTitle>
              <DisImage src="/ainsight/information.png" alt="discription" />
              <DisText style={{ marginTop: ".5rem" }}>
                在產品功能發想階段，我透過功能地圖和資料結構來探索與規劃系統。系統模組化設計的導入，使其能夠靈活適應企業不同部門的需求和職責分工。最終，產品架構被劃分為四大核心功能和五個主要模組。
              </DisText>
              <DisText>
                During the product ideation phase, I explored and planned the
                system through a functional map and data structure. The
                introduction of a modular design allows the system to flexibly
                adapt to the needs and responsibilities of different departments
                within the company. Ultimately, the product architecture was
                divided into four core functions and five main modules.
              </DisText>
              <DisImage
                src="/ainsight/function.png"
                alt="discription"
                style={{ border: "none", borderRadius: "0px" }}
              />
              <DisText style={{ marginTop: ".5rem" }}>
                接著，我針對各模組的使用情境繪製了用戶流程圖，確保系統能簡化傳統ERP的繁瑣流程，讓用戶在每個操作階段都清楚了解下一步的行動，提升操作體驗的流暢度。
              </DisText>
              <DisText>
                Next, I mapped out user flows based on different module usage
                scenarios, ensuring that the system simplifies the traditional
                ERP's complex processes. This approach helps users clearly
                understand what steps to take at each stage of operation,
                improving the overall ease of use and user experience.
              </DisText>
              <DisTextTitle style={{ marginTop: ".5rem" }}>
                User Flows
              </DisTextTitle>
              <span
                style={{
                  width: "100%",
                  textAlign: "left",
                  color: "#B6B6B6",
                  fontSize: ".8rem",
                }}
              >
                ＊以財務模組為例
              </span>
              <DisImage
                src="/ainsight/user-flow.png"
                alt="discription"
                style={{ border: "none" }}
              />
            </TextWrapperContainer>
          </DiscriptionWrapper>

          <Divider
            margin="4rem"
            style={{ borderTop: "1px solid #65E8FD", width: "70%" }}
          />

          <DiscriptionWrapper>
            <ContentTextLarge style={{ border: "none" }}>
              Design execution —
              <br />
              <span
                style={{
                  width: "100%",
                  textAlign: "left",
                  color: "#B6B6B6",
                  fontWeight: "bold",
                  fontSize: ".8rem",
                }}
              >
                ＊部分與商業機密相關的內容無法公開揭露
              </span>
            </ContentTextLarge>
            <TextWrapperContainer>
              <DisTextTitle>Design System</DisTextTitle>
              <DisImage
                src="/ainsight/design sysem.png"
                alt="discription"
                style={{ border: "none" }}
              />
              <DisImage
                src="/ainsight/atomic.png"
                alt="discription"
                style={{ border: "none" }}
              />
              <DisText style={{ marginTop: ".5rem" }}>
                相較於傳統設計系統過於集中、著重於成品或較大組件的特點，我們導入了原子設計（Atomic
                Design）的概念，將設計系統化，建立了一套分層、強調結構與計畫性的介面系統，便於日後維護和擴展。此系統發展為可重複利用的元件系統（Component
                System），並在 Notion 上打造了專屬於 AInsight⁺ 的 UI 設計系統
                Wiki，涵蓋了設計系統的定義與使用規範，以及交付給前端工程師的協作流程，提供清晰標準，大幅提升產品開發效率。
              </DisText>
              <DisText>
                Compared to traditional design systems that tend to be overly
                centralized and focused on larger components, we adopted the
                concept of Atomic Design to systematize our design process. This
                approach established a layered, structured, and planned
                interface system that facilitates future maintenance and
                expansion. This system evolved into a reusable component system,
                and we created a dedicated UI design system wiki for AInsight⁺
                in Notion. It covers the definitions and usage guidelines of the
                design system, as well as collaboration processes for frontend
                engineers, providing clear standards and significantly improving
                product development efficiency.
              </DisText>
              <DisTextTitle style={{ marginTop: ".5rem" }}>
                Design System Wiki
              </DisTextTitle>
              <DisImage
                src="/ainsight/wiki.png"
                alt="discription"
                style={{ border: "none" }}
              />
              <DisText style={{ marginTop: ".5rem" }}>
                在進行畫面設計階段，當我無法確定哪種資訊呈現方式對用戶最具效益時，我會基於頁面的核心價值設計兩種不同的佈局和內容進行對比，並透過核心用戶進行
                A/B
                測試。根據用戶反饋，進行反覆調整，最終確定最佳設計方案，確保產品能更準確地滿足用戶需求。
              </DisText>
              <DisText>
                During the interface design phase, when uncertain about which
                information layout would be most effective for users, I create
                two different layouts and content variations based on the core
                value of the page. These versions are then tested with key users
                through A/B testing. By collecting and analyzing user feedback,
                I iteratively refine and finalize the design, ensuring the
                product aligns more closely with user needs and expectations.
              </DisText>
              <DisTextTitle style={{ marginTop: ".5rem" }}>
                A/B Testing
              </DisTextTitle>
              <span
                style={{
                  width: "100%",
                  textAlign: "left",
                  color: "#B6B6B6",
                  fontSize: ".8rem",
                }}
              >
                ＊總覽頁面目標：重要、關鍵的資訊可以被快速查看
              </span>
              <DisImage
                src="/ainsight/ab.png"
                alt="discription"
                style={{ border: "none" }}
              />
              <DisText>
                <p>
                  以「總覽」頁面為例，針對用戶「快速瀏覽關鍵資訊」的需求，我設計了兩種不同的界面方案，並與用戶和開發團隊共同討論，以確保介面能有效滿足用戶需求並符合技術可行性。
                </p>
                <p>
                  Using the "Overview" page as an example, to address the user’s
                  primary need for "quickly viewing essential information," I
                  designed two different interface options and discussed them
                  with both users and the development team. This collaborative
                  approach ensures that the interface ef
                </p>
                <ContentWrapperAB
                >
                  <AB
                    style={{
                      marginTop: ".5rem",
                      padding: "20px",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      borderRadius: "12px",
                    }}
                  >
                    <span
                      style={{
                        color: "#2B3990",
                        fontWeight: "bold",
                        display: "flex",
                        marginBottom: "1rem",
                      }}
                    >
                      Version A：
                    </span>
                    <p style={{ margin: ".5rem" }}>
                      •
                      將「待辦提醒」收在頂端導航欄中，讓畫面專注在呈現各項指標與數據，並提供搜尋欄功能。
                    </p>
                    <p style={{ margin: ".5rem" }}>
                      • Move the 'To-do Reminders' to the top navigation bar,
                      allowing the screen to focus on displaying key metrics and
                      data. Additionally, include a search bar feature for
                      enhanced usability.
                    </p>
                    <Divider
                      style={{ marginTop: ".8rem", marginBottom: ".8rem" }}
                    />
                    <p style={{ margin: ".5rem" }}>
                      • 提供以「日」為單位的日期篩選功能
                    </p>
                    <p style={{ margin: ".5rem" }}>
                      • Provide a time picker function based on the 'day' unit.
                    </p>
                  </AB>
                  <AB
                    style={{
                      marginTop: ".5rem",
                      padding: "20px",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      borderRadius: "12px",
                    }}
                  >
                    <span
                      style={{
                        color: "#2B3990",
                        fontWeight: "bold",
                        display: "flex",
                        marginBottom: "1rem",
                      }}
                    >
                      Version B：
                    </span>
                    <p style={{ margin: ".5rem" }}>
                      •
                      將「待辦提醒」以區塊形式固定在總覽畫面上，讓用戶可以釘選各項目，並快速點擊連結查看項目進度頁面。
                    </p>
                    <p style={{ margin: ".5rem" }}>
                      • Set the 'To-Do Reminders' as a block on the overview
                      page, allowing users to pin tasks and quickly click links
                      to view the task progress page.
                    </p>
                    <Divider
                      style={{ marginTop: ".8rem", marginBottom: ".8rem" }}
                    />
                    <p style={{ margin: ".5rem" }}>
                      • 提供以「月」為單位的日期篩選功能，以及讓用戶可以下載總覽表單。
                    </p>
                    <p style={{ margin: ".5rem" }}>
                      • Provide a time picker function based on the 'month' unit and allow users to download the overview form.
                    </p>
                  </AB>
                </ContentWrapperAB>
              </DisText>
            </TextWrapperContainer>
          </DiscriptionWrapper>
        </section>

        <CircleWrapper>
          <Circle color="#CFE8FF" />
          <Circle color="#A6CFFF" />
          <Circle color="#1575E5" />
          <Circle color="#2B3990" />
        </CircleWrapper>

        <section>
          <SectionTitle style={{ marginBottom: "2rem" }}>Features</SectionTitle>
          <Image
            src="/ainsight/demo-1.png"
            alt="Kungfu Presentation"
            style={{
              borderRadius: "10px",
            }}
          />
          <Image
            src="/ainsight/demo-2.1.png"
            alt="Kungfu Presentation"
            style={{
              borderRadius: "10px",
            }}
          />
          <Video
            src="/ainsight/demo-3.mov"
            alt="Kungfu Presentation"
            autoPlay
            loop
            muted
            playsInline
          />
          <Video
            src="/ainsight/demo-4.mov"
            alt="Kungfu Presentation"
            autoPlay
            loop
            muted
            playsInline
          />
          <DiscriptionWrapper>
            <ContentTextLarge style={{ border: "none" }}>
              Key Achievements —
              <br />
              <span
                style={{
                  width: "100%",
                  textAlign: "left",
                  color: "#B6B6B6",
                  fontWeight: "bold",
                  fontSize: ".8rem",
                }}
              >
                ＊部分與商業機密相關的內容無法公開揭露
              </span>
            </ContentTextLarge>
            <TextWrapperContainer>
              <DisText
                style={{
                  color: "#2B3990",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                To our users
              </DisText>
              <DisTextTitle>Simple but Powerful</DisTextTitle>
              <DisText>
                我們透過簡化傳統ERP系統中「多功能混雜」帶來的畫面複雜性，並通過直觀的設計引導用戶操作，將繁瑣的流程優化。這種直覺易用的介面，讓用戶能專注於當前任務，大幅提升工作效率。
              </DisText>
              <DisText>
                We simplified the complexity of traditional ERP systems, which
                often suffer from an overload of features, by creating intuitive
                design guides that streamline intricate processes. This
                user-friendly interface allows users to focus on their current
                tasks, significantly boosting work efficiency.
              </DisText>

              <DisTextTitle style={{ marginTop: ".5rem" }}>
                Data Visualization
              </DisTextTitle>
              <DisText>
                我們打造數據導向的產品介面，將資料和分析結果可視化，幫助用戶快速掌握關鍵資訊的變化與趨勢。透過這些即時洞察，企業能更精準地做出決策，提升競爭力和運營效率。
              </DisText>
              <DisText>
                We developed data-driven product interfaces that visualize key
                data and analytics, enabling users to quickly grasp information
                trends and changes. With these real-time insights, businesses
                can make more informed decisions, boosting both competitiveness
                and operational efficiency.
              </DisText>

              <DisTextTitle style={{ marginTop: ".5rem" }}>
                Needs-Based
              </DisTextTitle>
              <DisText>
                透過深入了解並聆聽用戶的需求與目標，我們為其構建了高度貼合的數位工作生態系統，大幅降低數位轉型所帶來的衝擊。這種模式使科技成為簡化問題、提升效率的有力工具，幫助用戶輕鬆過渡至數位化。
              </DisText>
              <DisText>
                By closely understanding and listening to users' needs and
                goals, we created a tailored digital work ecosystem that
                significantly reduces the impact of digital transformation. This
                approach turns technology into a powerful tool for simplifying
                challenges and improving efficiency, easing the transition to a
                digitalized workflow.
              </DisText>

              <Hr style={{ margin: "3rem" }} />

              <DisText
                style={{
                  color: "#2B3990",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                To our teams
              </DisText>
              <DisTextTitle>Design Efficiency</DisTextTitle>
              <DisText>
                我們在 Notion 上創建了
                Product_UX&UI_Wiki，為設計團隊提供清晰的架構和指引，確保他們能夠快速理解並遵循
                AInsight⁺ 的設計框架，從而進行產品的迭代設計。這個 Wiki
                也為跨團隊、跨部門的協作打下了堅實的溝通基礎，促進了高效的工作流程。
              </DisText>
              <DisText>
                We created a Product_UX&UI_Wiki on Notion to provide the design
                team with clear structures and guidelines, ensuring they quickly
                understand and follow the AInsight⁺ framework for iterative
                product design. This Wiki also establishes a solid communication
                foundation for cross-team and cross-department collaboration,
                enhancing workflow efficiency.
              </DisText>

              <DisTextTitle style={{ marginTop: ".5rem" }}>
                Develop-Friendly
              </DisTextTitle>
              <DisText>
                作為一名具備前端知識的設計師，我與團隊導入了 Design Tokens
                的設計概念，將視覺語言與程式語言無縫對接，顯著提高了設計與開發之間的轉換效率。同時，這種做法大幅增強了設計師與開發者之間的溝通，從而讓產品開發流程更加順暢。
              </DisText>
              <DisText>
                As a designer with frontend knowledge, I introduced the Design
                Tokens concept to our team, seamlessly aligning visual language
                with programming code. This significantly boosted the efficiency
                of design-to-development handoffs and enhanced communication
                between designers and developers, leading to a smoother product
                development process.
              </DisText>
            </TextWrapperContainer>
          </DiscriptionWrapper>
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

export default AInsight;
