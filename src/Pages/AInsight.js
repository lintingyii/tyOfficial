import React from "react";
import styled from "styled-components";

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
  background-image: var(
    --Gradient-style-gradient2,
    linear-gradient(91deg, #eaa700 0%, #f6d671 100%)
  );
  width: fit-content;
  align-self: flex-start;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  white-space: nowrap;

  @media (max-width: 880px) {
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
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 1rem;
  background-color: #f8f8f8;

  @media (max-width: 880px) {
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

  @media (max-width: 880px) {
    width: 95%;
    margin-top: 1rem;
    box-sizing: border-box;
    flex-direction: column;
  }
`;

const Hr = () => (
  <div style={{ display: "flex", justifyContent: "center", margin: "9vh 0" }}>
    <svg width="112" height="6" viewBox="0 0 112 6" fill="none">
      <path
        d="M9.24865 1.40299C11.1861 -0.467666 14.2571 -0.467663 16.1946 1.40299L17.8878 3.03785C19.0503 4.16024 20.8929 4.16024 22.0554 3.03785L23.777 1.403C25.7145 -0.467659 28.7855 -0.467659 30.723 1.403L32.4162 3.03785C33.5787 4.16025 35.4213 4.16025 36.5838 3.03785L38.277 1.403C40.2145 -0.467659 43.2855 -0.467656 45.223 1.403L46.9162 3.03786C48.0787 4.16025 49.9213 4.16025 51.0838 3.03786L52.7552 1.42402C52.7592 1.42024 52.7593 1.414 52.7555 1.41009C52.7517 1.40617 52.7519 1.39989 52.7558 1.39612C54.6936 -0.467659 57.7595 -0.465367 59.6946 1.403L61.3878 3.03785C62.5503 4.16025 64.3929 4.16025 65.5554 3.03785L67.2486 1.403C69.1861 -0.467662 72.2571 -0.467659 74.1946 1.403L75.8878 3.03785C77.0503 4.16025 78.8929 4.16025 80.0554 3.03785L81.777 1.403C83.7145 -0.467655 86.7855 -0.467655 88.723 1.403L90.4162 3.03786C91.5787 4.16025 93.4213 4.16025 94.5838 3.03786L96.277 1.403C98.2145 -0.467655 101.285 -0.467652 103.223 1.403L104.916 3.03786C106.079 4.16025 107.921 4.16025 109.084 3.03786L110.058 2.0976C110.455 1.71398 111.088 1.72509 111.472 2.1224C111.855 2.51972 111.844 3.15279 111.447 3.5364L110.473 4.47666C108.535 6.34732 105.464 6.34732 103.527 4.47666L101.834 2.84181C100.671 1.71941 98.8287 1.71941 97.6662 2.8418L95.973 4.47666C94.0355 6.34732 90.9645 6.34732 89.027 4.47666L87.3338 2.8418C86.1713 1.71941 84.3287 1.71941 83.1662 2.8418L81.4446 4.47665C79.5071 6.34731 76.4361 6.34731 74.4986 4.47665L72.8054 2.8418C71.6429 1.71941 69.8003 1.7194 68.6378 2.84179L66.9446 4.47665C65.0071 6.34731 61.9361 6.34731 59.9986 4.47665L58.3054 2.8418C57.1502 1.72643 55.3234 1.71945 54.1598 2.82085C54.1558 2.82459 54.1556 2.83085 54.1594 2.83476C54.1632 2.83865 54.1631 2.84485 54.1592 2.8486L52.473 4.47666C50.5355 6.34732 47.4645 6.34732 45.527 4.47666L43.8338 2.8418C42.6713 1.71941 40.8287 1.71941 39.6662 2.8418L37.973 4.47666C36.0355 6.34731 32.9645 6.34731 31.027 4.47666L29.3338 2.8418C28.1713 1.71941 26.3287 1.71941 25.1662 2.8418L23.4446 4.47665C21.5071 6.34731 18.4361 6.34731 16.4986 4.47665L14.8054 2.8418C13.6429 1.7194 11.8003 1.7194 10.6378 2.84179L8.94459 4.47665C7.00713 6.34731 3.93611 6.34731 1.99865 4.47665L1.02481 3.53639C0.627491 3.15278 0.616384 2.51971 0.999998 2.12239C1.38361 1.72508 2.01668 1.71397 2.41399 2.09759L3.38784 3.03785C4.55032 4.16024 6.39292 4.16024 7.5554 3.03785L9.24865 1.40299Z"
        fill="#EAA700"
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
  margin-top: 5rem;

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
                <br /> # Contextual inquiry <br /> # User Interview <br />#
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
            因此，我們團隊致力於開發一款專為中小企業打造的、由AI賦能的輕量化ERP財務管理系統，讓企業主可以專注在自己的核心業務，不再受制於繁瑣的財務工作。
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
            system specifically designed for small businesses, allowing owners
            to focus on their core operations without being bogged down by
            tedious financial processes.
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

          <CircleWrapper>
            <Circle color="#CFE8FF" />
            <Circle color="#A6CFFF" />
            <Circle color="#1575E5" />
            <Circle color="#2B3990" />
          </CircleWrapper>

          {/* <DiscriptionWrapper>
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
          <DiscriptionWrapper>
            <TextWrapperContainer>
              <DisImage src="/hivebee/old-ui-4.png" alt="discription" />
              <CardHeader>
                <ContentText style={{ border: "none" }}>
                  Challenge 03
                </ContentText>
                <DisTextTitle>Poor responsive design</DisTextTitle>
              </CardHeader>
              <DisText style={{ marginTop: ".5rem" }}>
                我們的產品主要有兩類使用者——直播者與贊助者，對應兩種不同的使用情境：直播者需設置互動內容，贊助者則透過手機或電腦觀看直播並進行打賞，我們的系統則劃分為給直播者使用的「後台」與給贊助者使用的「前台」。原有的前、後台僅針對桌面版進行設計，忽略了用戶跨平台使用的需求。由於直播者通常使用電腦進行設定，而贊助者除了電腦外，多數使用手機觀看直播，這導致系統無法提供良好的響應式操作體驗。
              </DisText>
              <DisText>
                Our product primarily serves two types of users: streamers and
                sponsors, each corresponding to different use cases. Streamers
                need to set up interactive content, while sponsors watch live
                streams and donate via mobile or desktop devices. The system is
                divided into a "backstage" for streamers and a "frontstage" for
                sponsors. The original design only catered to desktop versions,
                neglecting the cross-platform needs of users. Since streamers
                typically use desktops and sponsors often use mobile devices,
                the system failed to provide an optimal responsive experience.
              </DisText>
            </TextWrapperContainer>
          </DiscriptionWrapper> */}
        </section>

        {/* <CircleWrapper>
          <Circle color="#EDDDFF" />
          <Circle color="#D9B9FF" />
          <Circle color="#BA87F4" />
          <Circle color="#C5006C" />
        </CircleWrapper> */}

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
            <TextWrapperContainer>
              <CardHeader>
                <ContentText style={{ border: "none" }}>
                  Challenge 03
                </ContentText>
                <DisTextTitle>Poor responsive design</DisTextTitle>
              </CardHeader>
              <DisImage src="/hivebee/old-ui-4.png" alt="discription" />
              <DisText style={{ marginTop: ".5rem" }}>
                我們的產品主要有兩類使用者——直播者與贊助者，對應兩種不同的使用情境：直播者需設置互動內容，贊助者則透過手機或電腦觀看直播並進行打賞，我們的系統則劃分為給直播者使用的「後台」與給贊助者使用的「前台」。原有的前、後台僅針對桌面版進行設計，忽略了用戶跨平台使用的需求。由於直播者通常使用電腦進行設定，而贊助者除了電腦外，多數使用手機觀看直播，這導致系統無法提供良好的響應式操作體驗。
              </DisText>
              <DisText>
                Our product primarily serves two types of users: streamers and
                sponsors, each corresponding to different use cases. Streamers
                need to set up interactive content, while sponsors watch live
                streams and donate via mobile or desktop devices. The system is
                divided into a "backstage" for streamers and a "frontstage" for
                sponsors. The original design only catered to desktop versions,
                neglecting the cross-platform needs of users. Since streamers
                typically use desktops and sponsors often use mobile devices,
                the system failed to provide an optimal responsive experience.
              </DisText>
            </TextWrapperContainer>
          </DiscriptionWrapper>
        </section>

        <Divider
          margin="4rem"
          style={{ borderTop: "1px solid #F6D671", width: "70%" }}
        />

        <section>
          <BlockTitle>Step.1</BlockTitle>
          <BlockHeader>Functional Map</BlockHeader>
          <Text style={{ marginTop: "2rem", marginBottom: ".8rem" }}>
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
            // width={"80%"}
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
          <Text style={{ marginTop: "2rem", marginBottom: ".8rem" }}>
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
            // width={"80%"}
            style={{ marginTop: "1rem" }}
          />
        </section>

        <Divider
          margin="4rem"
          style={{ borderTop: "1px solid #F6D671", width: "70%" }}
        />

        <section>
          <BlockTitle>Step.3</BlockTitle>
          <BlockHeader>Wireframe & Lo-fi Prototype</BlockHeader>
          <Text style={{ marginTop: "2rem", marginBottom: ".8rem" }}>
            將用戶流程圖轉化為具體的視覺設計，先針對各個頁面的基本佈局進行規劃，確定元件的位置與比例，並梳理不同頁面間的關聯與邏輯，Wire-flow
            幫助我們迅速檢視功能的可行性，並評估開發工作量，同時便於快速進行調整。接著轉換為Lo-fi
            Prototype，模擬用戶實際操作，確保每個用戶流程都被妥善規劃，以便進行初步內部測試和團隊溝通。
          </Text>
          <Text style={{ marginTop: "0rem" }}>
            The user flow is then transformed into concrete visual design.
            First, the basic layout of each page is planned, determining the
            position and proportion of elements, while organizing the
            connections and logic between pages. Wire-flow helps us quickly
            assess the feasibility of features and evaluate development
            workload, allowing for rapid adjustments. Afterward, it's converted
            into a Lo-fi Prototype, simulating user interactions to ensure every
            flow is well-planned, facilitating initial internal testing and team
            communication.
          </Text>

          <Image
            src="/hivebee/wireframe.png"
            alt="affinity diagram"
            // width={"80%"}
            style={{ marginTop: "1rem" }}
          />
        </section>

        <Divider
          margin="4rem"
          style={{ borderTop: "1px solid #F6D671", width: "70%" }}
        />

        <section>
          <BlockTitle>Step.4</BlockTitle>
          <BlockHeader>UI Kit & Design System</BlockHeader>
          <Text style={{ marginTop: "2rem", marginBottom: ".8rem" }}>
            我與視覺設計師合作，開發了全新的色彩系統。此次更新引入了淺色與深色模式，並透過調整色彩明度，確保用戶在不同模式下均能享受一致且舒適的視覺體驗。在元件設計中引入圓角元素，使整體介面更具活潑、親和且年輕化的特質。同時，建立了完善的元件系統
            (Component
            System)，確保設計與前端開發能高效協作，實現統一且一致的使用體驗。
          </Text>
          <Text style={{ marginTop: "0rem" }}>
            I collaborated with the visual designer to develop a new color
            system. This update introduced both light and dark modes, ensuring a
            consistent and comfortable visual experience for users by adjusting
            brightness levels across modes. We incorporated rounded corners into
            the component designs, aligning the interface with the product's
            lively, approachable, and youthful tone. Additionally, we
            established a comprehensive component system to ensure efficient
            collaboration between design and frontend development, resulting in
            a cohesive and consistent user experience.
          </Text>

          <Image src="/hivebee/color.png" alt="affinity diagram" />

          <LaptopImage
            src="/hivebee/ui kit.png"
            alt="affinity diagram"
            width={"100%"}
            style={{ marginTop: "0rem" }}
          />

          <MobileImage
            src="/hivebee/ui kit-m.png"
            alt="affinity diagram"
            style={{ marginTop: "1rem" }}
          />
        </section>

        <Divider
          margin="4rem"
          style={{ borderTop: "1px solid #F6D671", width: "70%" }}
        />

        <section>
          <BlockTitle>Step.5</BlockTitle>
          <BlockHeader>Responsive Hi-Fi prototype</BlockHeader>
          <Text style={{ marginTop: "2rem", marginBottom: ".8rem" }}>
            考量不同用戶在跨平台的使用需求與情境，直播者後台由於需與OBS系統搭配，因此介面設計仍以桌面版為主。而贊助者前台則採用響應式設計，確保粉絲無論透過手機或電腦觀看直播，都能享有與桌面版相同的良好互動體驗，提升贊助操作的靈活便捷性。
          </Text>
          <Text style={{ marginTop: "0rem" }}>
            Considering the cross-platform needs and scenarios of different
            users, the streamers' backstage interface remains desktop-focused
            due to its integration with the OBS system. However, the sponsors'
            frontstage is designed responsively, ensuring that fans can enjoy an
            equally seamless interaction experience on both mobile and desktop
            when watching live streams and making donations.
          </Text>

          <Image src="/hivebee/result-2.png" alt="affinity diagram" />
        </section>

        <CircleWrapper>
          <Circle color="#EDDDFF" />
          <Circle color="#D9B9FF" />
          <Circle color="#BA87F4" />
          <Circle color="#C5006C" />
        </CircleWrapper>

        <section style={{ marginTop: "5rem" }}>
          <SectionTitle>Key Feature Highlights</SectionTitle>
          <InfoCard>
            <InfoContent>
              <DesignIcon />
              <HalfTextWrapper style={{ padding: "0px", gap: ".5rem" }}>
                <DisText>
                  除了在視覺上進行優化，讓 HiveBee
                  擁有獨特且符合目標受眾喜好的識別，與競品形成鮮明對比之外，我同樣重視用戶體驗的提升與操作流程的優化，簡化了繁瑣的設置，並融入了一些亮點設計，以增強整體的使用體驗。
                </DisText>
                <DisText>
                  In addition to the visual optimizations that give HiveBee a
                  distinctive identity tailored to the preferences of our target
                  audience, setting it apart from competitors, I also focused on
                  enhancing the user experience and streamlining the workflow,
                  simplified complex settings and incorporated standout design
                  elements to elevate the overall user experience.
                </DisText>
              </HalfTextWrapper>
            </InfoContent>
          </InfoCard>
        </section>

        <section style={{ marginTop: "4rem" }}>
          <BlockTitle>Enhancement of User Experience</BlockTitle>
          <BlockHeader style={{ color: "#EAA700" }}>
            Feedback and Feedforward
          </BlockHeader>
          <Text style={{ marginTop: "2rem", marginBottom: ".8rem" }}>
            透過文字、圖示、彈跳視窗和狀態說明等方式，有效傳達清晰的 Feedback 和
            Feedforward。此外，提供「常見問題」頁面，預防並解決用戶在操作過程中的困惑或失誤，從而減少用戶摸索與試錯的時間，大幅提升了產品的易用性。
          </Text>
          <Text style={{ marginTop: "0rem" }}>
            Using text, icons, pop-up windows, and status messages to
            effectively communicate clear feedback and feedforward. An FAQ
            section was also provided to proactively address and resolve any
            user difficulties or errors during operation, reducing the time
            spent on trial and error and significantly enhancing the product’s
            usability.
          </Text>
          <Image
            src="/hivebee/feature-1.png"
            alt="affinity diagram"
            // width={"80%"}
            style={{ marginTop: "1rem" }}
          />
        </section>

        <Divider
          margin="4rem"
          style={{ borderTop: "1px solid #F6D671", width: "70%" }}
        />

        <section style={{ marginTop: "4rem" }}>
          <BlockTitle>Innovation in User Interface</BlockTitle>
          <BlockHeader style={{ color: "#EAA700" }}>
            Light and Dark Mode
          </BlockHeader>
          <Text style={{ marginTop: "2rem", marginBottom: ".8rem" }}>
            據統計，有 85% 的用戶偏好深色模式，因此我設計了 Light-mode 和
            Dark-mode
            兩種模式，以滿足不同用戶的喜好。兩種模式下的色彩與文字對比都經過精心調整，既確保了高可讀性，也融入了設計的巧思。
          </Text>
          <Text style={{ marginTop: "0rem" }}>
            According to statistics, 85% of users prefer dark mode, so I
            designed both Light-mode and Dark-mode to cater to different user
            preferences. The color and text contrast in both modes have been
            carefully adjusted to ensure high readability while incorporating
            thoughtful design elements.
          </Text>
          <Video
            src="/hivebee/mode.mov"
            alt="Kungfu Presentation"
            autoPlay
            loop
            muted
            playsInline
          />
        </section>

        <Divider
          margin="4rem"
          style={{ borderTop: "1px solid #F6D671", width: "70%" }}
        />

        <section style={{ marginTop: "4rem" }}>
          <BlockTitle>Key Functions</BlockTitle>
          <BlockHeader style={{ color: "#EAA700" }}>
            Interaction Boxes
          </BlockHeader>
          <Text style={{ marginTop: "2rem", marginBottom: ".8rem" }}>
            有別於舊版將所有互動內容集中在同一頁面，我重新設計了互動遊戲箱與互動工具箱，將直播遊戲與直播畫面的互動效果分開處理，讓直播主能依據不同情境進行獨立設定。此外，還新增了預覽動畫，讓用戶能快速掌握設定效果。
          </Text>
          <Text style={{ marginTop: "0rem" }}>
            Unlike the previous version, which consolidated all interactive
            content on a single page, I redesigned the Interactive Game Box and
            Interactive Toolbox to separate the interactive effects of live
            games from the live broadcast interface. This allows streamers to
            make individual settings based on different scenarios. Additionally,
            I introduced a preview animation feature to help users quickly
            understand the effects of their settings.
          </Text>
          <Video
            src="/hivebee/box.mov"
            alt="Kungfu Presentation"
            width="100%"
            autoPlay
            loop
            muted
            playsInline
          />
        </section>

        <Hr />

        <section style={{ marginTop: "5rem" }}>
          <SectionTitle>Design Achievements</SectionTitle>
          <InfoCard>
            <InfoContent>
              <WinIcon />
              <HalfTextWrapper style={{ padding: "0px", gap: ".5rem" }}>
                <DisText>
                  全新改版的HiveBee在易用性測試和用戶訪談後獲得了正面的反饋，顯著提升了新舊用戶的使用意願，使產品逐漸在直播市場中佔有一席之地。
                </DisText>
                <DisText>
                  The revamped HiveBee received positive feedback following
                  usability testing and user interviews, significantly enhancing
                  the willingness of both new and existing users to engage with
                  the product, and gradually establishing its presence in the
                  live streaming market.
                </DisText>
              </HalfTextWrapper>
            </InfoContent>
          </InfoCard>
          <ImageWrapper>
            <ContentImage src="/hivebee/result-1.png" alt="research" />
            <ContentImage src="/hivebee/result-2.png" alt="research" />
            <ContentImage src="/hivebee/result-3.png" alt="research" />
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

export default AInsight;
