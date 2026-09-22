import styled from "styled-components";

/* 三顆手繪星星。footer 的裝飾是這三顆，title-stars.svg 是從 footer-deco.svg
   裁出它們、收成緊邊界的版本（跑馬燈用的那顆只是其中之一）。

   顏色用遮罩處理而不是直接放 img：原檔把顏色畫死在裡面，取形狀、顏色交給
   CSS，同一個檔案才能在不同地方用不同顏色。

   尺寸跟著字級走（1em）—— 它每次都長在一段文字旁邊，字多大它就多大。
   比例 657:616，所以高度給 0.94em 不會變形。 */
const TitleStars = styled.span`
  /* 在 flex 容器裡（Gallery 標題）不要被壓縮；在一般文字流裡（導覽列）
     要能吃到寬高，所以兩種 display 都給 —— flex 子項會自動 blockify，
     inline-block 那個值在那邊不生效也無妨。 */
  flex: none;
  display: inline-block;
  width: 1em;
  height: 0.94em;
  /* 行內使用時對齊基線：星星的視覺重心比字母低一點 */
  vertical-align: -0.06em;
  /* 站上的暖色（LoadingSpinner、ProjectFilter、FlipCard、像素轉場的
     accent 都是這個色），不是另外調一個新的黃。要單獨換色的地方
     傳 $color 進來就好。 */
  background-color: ${({ $color }) => $color || "#D8984E"};
  -webkit-mask: url("/title-stars.svg") no-repeat center / contain;
  mask: url("/title-stars.svg") no-repeat center / contain;
`;

export default TitleStars;
