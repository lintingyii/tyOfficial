import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

/* 逐字打字效果。
   一次一個字元（預設 55ms），打完停住；給多句的話會停一下、倒退、換下一句。

   跟原本 CSS-only 的做法差別：原本是動畫 width 0 → 453px 配 steps(45)，
   步數跟字數對不上（這句有 51 字），而且寬度每個斷點都要寫死，
   字型稍有差異就會裁字。改成逐字之後寬度自己長，不用維護那些數字。 */

const blink = keyframes`
  50% { opacity: 0; }
`;

const Caret = styled.span`
  display: inline-block;
  width: 2px;
  height: 1.1em;
  margin-left: 2px;
  vertical-align: text-bottom;
  background: ${({ $color }) => $color};
  animation: ${blink} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* 給螢幕報讀用的完整文字。打字中的那份是一個字一個字變動的，
   讀起來會是一團噪音，所以那份標 aria-hidden，真正的內容放這裡。 */
const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;

const Typewriter = ({
  phrases,
  typeMs = 55,
  deleteMs = 28,
  holdMs = 1800,
  /* 預設跟著文字色走（currentColor），游標就不會跟這行的顏色脫節。
     要另外指定顏色再傳 caretColor。 */
  caretColor = "currentColor",
  className,
}) => {
  const list = Array.isArray(phrases) ? phrases : [phrases];
  const hostRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [idx, setIdx] = useState(0);
  const [len, setLen] = useState(0);
  const [phase, setPhase] = useState("type"); // type | hold | delete

  /* 捲到看得見才開始 —— 這行在 hero 下方，若載入就跑，使用者捲到時
     早就打完了，等於沒有效果。prefers-reduced-motion 則直接顯示完整文字。 */
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return undefined;

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setLen(list[0].length);
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);

    /* 保險：IntersectionObserver 在某些情況下不會回報（例如分頁在背景時
       瀏覽器會暫停交集運算），沒有這道保險的話文字會永遠是空的。
       4 秒後無論如何開始打字。 */
    const fallback = setTimeout(() => setStarted(true), 4000);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!started) return undefined;
    const text = list[idx % list.length];
    let timer;

    if (phase === "type") {
      if (len < text.length) {
        timer = setTimeout(() => setLen((v) => v + 1), typeMs);
      } else if (list.length > 1) {
        // 只有一句就停在這裡，游標繼續閃
        timer = setTimeout(() => setPhase("hold"), 0);
      }
    } else if (phase === "hold") {
      timer = setTimeout(() => setPhase("delete"), holdMs);
    } else if (len > 0) {
      timer = setTimeout(() => setLen((v) => v - 1), deleteMs);
    } else {
      setIdx((v) => v + 1);
      setPhase("type");
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, phase, len, idx]);

  const text = list[idx % list.length];

  return (
    <span ref={hostRef} className={className}>
      <span aria-hidden="true">{text.slice(0, len)}</span>
      <Caret $color={caretColor} aria-hidden="true" />
      <SrOnly>{list.join(" ")}</SrOnly>
    </span>
  );
};

export default Typewriter;
