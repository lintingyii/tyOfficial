import React, { useState, useRef, useEffect, useMemo } from "react";
import styled, { keyframes, css } from "styled-components";
import TextMarquee from "../Components/TextMarquee";
import Footer from "../Components/footer";
import ServiceCardComponent from "../Components/ServiceCard";
import TestimonialCard from "../Components/TestimonialCard";
import { LargeProjectCard } from "../Components/ProjectCard";
import PixelScrollTransition from "../Components/PixelScrollTransition";
import Typewriter from "../Components/Typewriter";

function MyComponent(props) {
  const pinRef = useRef(null);
  const meRef = useRef(null);
  const decoRef = useRef(null); // ← 新增
  const hintRef = useRef(null); // 未捲動時的向下捲動提示

  useEffect(() => {
    const pin = pinRef.current;
    const me = meRef.current;
    const deco = decoRef.current;
    const hint = hintRef.current;
    if (!pin || !me || !deco) return;
    /* 只有桌機版做人像縮放（≤820px 的 picture 不是絕對定位，版面不同） */
    const wideMQ = window.matchMedia("(min-width: 821px)");
    let ticking = false;

    const update = () => {
      /* 先寫入 --portrait-reveal：BannerPin 的高度吃這個值，必須在讀
         offsetHeight 之前設好，否則第一次算到的是舊高度。下面會用正確的
         倍率再寫一次，這裡先給一個同量級的值讓首次量測不會差太多。 */
      {
        const w0 = wideMQ.matches;
        const vw0 = window.innerWidth;
        const vh0 = window.innerHeight;
        const k0 = ((w0 ? 0.246 : 0.78) * vw0) / 911;
        const t0 = (w0 ? 0.56 : 0.5) * vh0 - 148 * k0;
        pin.style.setProperty(
          "--portrait-reveal",
          `${Math.max(0, t0 + 1788 * k0 - vh0)}px`,
        );
      }
      const total = pin.offsetHeight - window.innerHeight;
      const scrolled = Math.min(
        Math.max(-pin.getBoundingClientRect().top, 0),
        total,
      );
      const progress = total > 0 ? Math.min(scrolled / (total * 0.8), 1) : 1;

      // 把 progress 換算成某一段區間內的 0~1（超出範圍就夾住）
      const phase = (start, end) =>
        Math.min(Math.max((progress - start) / (end - start), 0), 1);

      /* 人像／外框的尺寸與位置，直接算成版面值寫進 style。

         原本是「圖片 contain 成視窗寬 + transform: scale()」。問題在於
         手機的倍率高達 3.2 —— 圖片的版面尺寸只有 390px 寬、人物在裡面
         只佔 95px，瀏覽器以那個尺寸點陣化之後再把貼圖拉大 3.2 倍，
         等於把 95px 的細節拉到 304px。桌機倍率只有 1.014 所以看不出來，
         這就是「同一個檔案，電腦清楚、手機糊」的原因。

         改成直接給寬度之後，版面尺寸就是最終尺寸：手機的圖會排到 1254px
         寬（超出的部分由 PortraitLayer 的 overflow-x: clip 裁掉），點陣化
         也在這個尺寸發生，3× 螢幕拿到的是 3762 實體像素對上原生的 3755。 */
      const CANVAS_W = 3755; // 畫布寬
      const FIG_W = 911; // 人物寬
      const FIG_TOP = 148; // 人物頂端（畫布座標）
      const FIG_BOTTOM = 1788; // 人物底端＝畫布底（人像貼齊畫布底部）

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const wide = wideMQ.matches;

      /* 頭頂位置明確指定，不要依賴畫布幾何 —— 換圖或改畫布尺寸時構圖才不會漂 */
      const HEAD_TARGET = wide ? 0.56 : 0.5; // 頭頂佔視窗高度的比例
      const FIG_TARGET = wide ? 0.246 : 0.78; // 人物寬度佔視窗寬度的比例

      const imgW = (FIG_TARGET * vw * CANVAS_W) / FIG_W; // 圖片的版面寬度
      const k = imgW / CANVAS_W; // 畫布座標 → 畫面像素
      const imgLeft = (vw - imgW) / 2; // 畫布置中 —— 與原本 contain + center 相同
      const imgTop = HEAD_TARGET * vh - FIG_TOP * k; // 讓頭頂落在目標高度

      /* 溢出到畫面外的高度＝要靠捲動找回來的距離 */
      const overflow = Math.max(0, imgTop + FIG_BOTTOM * k - vh);
      pin.style.setProperty("--portrait-reveal", `${overflow}px`);

      const place = (el) => {
        el.style.width = `${imgW}px`;
        el.style.left = `${imgLeft}px`;
        el.style.top = `${imgTop}px`;
      };
      place(me);
      place(deco);

      const reveal = (el, p) => {
        el.style.opacity = p;
      };

      // 藍底圖不吃 scroll，改成載入後就淡入（見 BgWrap 的 animation）
      // 這裡只負責：人物 → 白框。原本兩段重疊 0.10，改成中間留 0.12 的空檔，
      // 人像先站定、隔一下白框才進來，兩個動作才分得開。
      // pan / zoom 兩層共用（吃的是 progress 不是各自的 phase），才不會脫開。
      // 兩段都落在「停住」的 320px 內：人像 0~180、deco 202~306
      reveal(me, phase(0, 0.4));
      reveal(deco, phase(0.45, 0.68));

      /* 捲動提示：一動就淡出。用實際捲動距離（px）而不是 progress，
         因為 progress 的分母是 140vh 的釘選長度，40px 只佔 5%，
         換算成 phase() 會太不直覺。 */
      if (hint) {
        const hp = Math.min(Math.max(1 - scrolled / 40, 0), 1);
        hint.style.opacity = hp;
        hint.style.transform = `translateX(-50%) translateY(${(1 - hp) * 10}px)`;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // 倍率是依視窗尺寸算的，改變視窗大小也要重算
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const Projects = [
    {
      date: "March, 2024",
      image: "/hivebee/hb demo.png",
      title: "Hive Bee - We made donations enjoyable",
      subtitle: "SaaS product design",
      description:
        "Created unique event experiences that made interactions between streamers and audiences more lively and engaging.",
      tags: [{ name: "UI/UX design", color: "#59656C" }],
      subtags: [
        { name: "SaaS", color: "#59656C" },
        { name: "RWD", color: "#59656C" },
      ],
      link: "/work/HiveBee",
      openInNewTab: false,
    },
    {
      date: "May, 2023",
      image: "/ainsight/ainsight-main.png",
      title: "AInsight⁺ - AI-Powered Finance",
      subtitle: "SaaS product design",
      description:
        "Tailored for small and medium-sized businesses, our AI-enhanced financial system optimizes operational efficiency, leaving traditional accounting and bookkeeping behind.",
      tags: [{ name: "UI/UX design", color: "#59656C" }],
      subtags: [{ name: "SaaS", color: "#59656C" }],
      link: "/work/AInsight",
      openInNewTab: false,
    },
    {
      date: "May, 2023",
      image: "/megabank.png",
      title: "Redesign deliverables-Mega Bank",
      subtitle: "User interface and user experience redesign",
      description:
        "Conduct user testing to refine the exchange process and interface, then finalize with testing.",
      tags: [{ name: "UI/UX design", color: "#59656C" }],
      subtags: [{ name: "APP", color: "#59656C" }],
      link: "/work/MegaBank_Redesign",
      openInNewTab: false,
    },
  ];

  return (
    <Div>
      <BannerPin ref={pinRef}>
        <Banner>
          <BgWrap>
            {/* 手機版換成直立版底圖（引言為直立畫面重新排過）；
                桌機維持 2.10:1 的橫幅 */}
            <picture>
              <source
                media="(max-width: 820px)"
                srcSet="/banner-bg-mobile.webp"
                type="image/webp"
              />
              <source
                media="(max-width: 820px)"
                srcSet="/banner-bg-mobile.png"
              />
              <source srcSet="/banner-bg.webp" type="image/webp" />
              <BgImg src="/banner-bg.png" alt="" aria-hidden="true" />
            </picture>
          </BgWrap>
          <ScrollHint ref={hintRef} aria-hidden="true">
            <ScrollHintInner>
              {/* 圖形是 Figma 匯出的原檔，只把寫死的色碼換成 --hint-color */}
              <svg viewBox="0 0 53 53" fill="none">
                <circle cx="26.5" cy="26.5" r="26" stroke="var(--hint-color)" />
                <path
                  d="M27.1667 43L28 10H25L25.8333 43H27.1667Z"
                  fill="var(--hint-color)"
                />
                <path
                  d="M12 30.0441C18.2143 30.0441 26.5 33.3598 26.5 43.2647"
                  stroke="var(--hint-color)"
                  strokeWidth="2"
                />
                <path
                  d="M41 30.0441C34.7857 30.0441 26.5 33.3598 26.5 43.2647"
                  stroke="var(--hint-color)"
                  strokeWidth="2"
                />
              </svg>
            </ScrollHintInner>
          </ScrollHint>
          {/* ↑ 放在 picture 後面，DOM 順序也比較靠後 */}

          {/* 人像／外框：必須放在 Banner 內，定位參考才是 Banner，
              才會跟著 Banner 的 sticky 一起移動／停住 */}
          <PortraitLayer>
            {/* 桌機與手機共用同一張。人物 911px 寬 —— 3× 手機需要約 910px，
                桌機 2× 需要約 706px，兩邊都是縮小顯示（縮小永遠清楚）。 */}
            <picture ref={meRef} data-layer="portrait">
              <source srcSet="/banner-me.webp" type="image/webp" />
              <img src="/banner-me.png" alt="Main Page" />
            </picture>
            {/* WebP 優先、PNG 後備。人像那張 PNG 有 1.24 MB，WebP 只要
                185 KB —— 對手機的載入差很多。不支援 WebP 的瀏覽器會自動
                退回 PNG，不需要另外偵測。 */}
            <picture>
              <source srcSet="/banner-deco.webp" type="image/webp" />
              <DecoImg
                ref={decoRef}
                src="/banner-deco.png"
                alt=""
                aria-hidden="true"
              />
            </picture>
          </PortraitLayer>
        </Banner>
      </BannerPin>

      {/* 馬賽克轉場。關鍵是畫布「往上長進 banner 裡 30vh」：
          - MosaicBlock 本身是實心藍、只佔 70vh 的版面高度
          - 畫布用 absolute + top:-30vh 溢出到上方，蓋在人像下半身上
          - colorA 設成 transparent，所以還沒翻色的格子是透明的：
            疊在人像上的那 30vh 會透出人像本人，往下則透出 MosaicBlock 的藍
          結果就是方格直接從人像身上長出來，沒有一條硬邊界。
          direction top-bottom 讓最上面（人像那一排）先翻。 */}
      <MosaicBlock>
        <PixelScrollTransition
          mode="inline"
          height="100vh" /* 30vh 疊在人像上 + 70vh 區塊本身 */
          colorA="transparent"
          colorB="#f2f2f2"
          /* 跟 work 頁同一組：單一方向、由下往上掃，只有一段波前。
             （先前用 edges-last-y 讓中間先翻，上下緣最後才補 —— 邊界確實
             變柔了，但中間會先翻成純淺色、上下各留一片沒翻的格子，
             看起來就變成「兩段」。）

             bottom-top 同時解掉兩個邊界：
             · 下緣最先翻成淺色，而它正下方就是淺色內容區 —— 同色碰同色，
               那條邊看不見
             · 上緣最後才翻，而依 endAt 的算法，它翻完時已經離開畫面頂端 */
          direction="bottom-top"
          pattern="random"
          patternIntensity={0.45}
          easing="linear"
          pixelSize={28}
          /* 畫布正好 100vh，所以「上緣離開視窗頂部」與「下緣抵達視窗底部」
             是同一瞬間（捲到 990）。endAt 調成 0.57，讓最後一格翻完的時機
             正好壓在那一刻 —— 兩個邊界變整齊時都已經貼齊畫面邊緣，
             畫面中間不會出現藍色色塊，也不會看到平切的邊。
             （0.57 ≈ 0.5 ÷ 0.877，0.877 是 accentShare 造成的超衝後
             全部格子翻完的進度點。） */
          endAt={0.57}
          accentShare={0.14}
          accentColors={["#F7883D", "#D8984E", "#59656C", "#2A3133"]}
          seed={20260911}
          style={{ position: "absolute", left: 0, right: 0, top: "-30vh" }}
        />
      </MosaicBlock>

      {/* 這裡原本還有一段 12vh 的實心淺灰。移除了 —— 馬賽克在捲到 990 就
          翻完，之後那段淺灰跟畫布同色，看不出來只是多捲，主要內容因此
          晚了一個多螢幕才出現。拿掉後畫布下緣＝內容上緣，馬賽克一結束
          內容就接著進場；視覺上的喘息交給內容區自己的 padding-top。 */}

      {/* 往上疊進馬賽克畫布的下半段。

          畫布本身有 100vh，全部翻成淺色之後就是一整個螢幕的空白 ——
          內容排在它後面的話，要等它整個捲完才會出現，中間就空了 100vh。
          用負 margin 把內容往上拉 30vh，疊在畫布下半部（那一段在此時
          早就翻成同色的淺灰了，看不出接縫），標題就會提早一個螢幕出現。

          position: relative 是必要的 —— 原本只有 zIndex 沒有 position，
          z-index 不會生效，內容會被 MosaicBlock（z-index 1）蓋住。 */}
      <ContentSection>
        <OverlapGroupWrapper>
          <OverlapGroup>
            <HeadingIAm>
              HI 👋🏻
              <br />I am Ting-yi, Lin
              <Div11
                as={Typewriter}
                phrases={["© Multidisciplinary designer based in Taipei, Taiwan"]}
              />
            </HeadingIAm>

            <Frame>
              <TextWrapper>UI / UX</TextWrapper>
            </Frame>
            <DivWrapper>
              <TextWrapper>Frontend</TextWrapper>
            </DivWrapper>
            <DivWrapper2>
              <TextWrapper>Visual design</TextWrapper>
            </DivWrapper2>
          </OverlapGroup>
        </OverlapGroupWrapper>

        <TextWrapper3>
          <p>
            Hello👋🏻, I am Ting-yi Lin, you can call me Morgan, a creative and
            multidisciplinary designer. Venturing into <Span>UI / UX</Span>, my
            understanding of <Span>front-end skills</Span> combined with keen
            observational insights, emphasizes a practical approach to design,
            blending aesthetics and creativity with <Span>user-centric</Span>{" "}
            solutions.
          </p>
        </TextWrapper3>
      </ContentSection>

      <div style={{ width: "100%", backgroundColor: "#f2f2f2", zIndex: "999" }}>
        <CircleContainer>
          <div className="circle"></div>
        </CircleContainer>
      </div>

      <IndexContainer>
        <OverlapGroupWrapper2>
          <OverlapGroup2>
            {/* 座標以共用邊界線為準：x 0 / 444 / 497 / 942 / 993 / 1440，
                y 依各欄切分。每塊往右／往下多 1px，讓相鄰的兩條 1px 邊線完全重合，
                看起來是一條共用線 —— 既沒有縫也不會變成 2px 粗。 */}
            <Rectangle height={107} left={444} top={0} width={54} />
            <Rectangle height={107} left={444} top={106} width={54} />
            <Rectangle height={265} left={942} top={0} width={52} />
            <Rectangle height={266} left={942} top={264} width={52} />
            <Rectangle height={107} left={444} top={212} width={54} />
            <Rectangle height={107} left={444} top={318} width={54} />
            <Rectangle height={107} left={444} top={424} width={54} />
            <Rectangle height={105} left={444} top={530} width={54} />
            <Rectangle height={108} left={0} top={0} width={445} />
            <Rectangle height={106} left={497} top={529} width={497} />
            <Rectangle height={108} left={993} top={0} width={447} />
            {/* <ColoredRectangle color="#D8984E" height={528} left={0} top={107} width={443} />
          <ColoredRectangle color="#2A96B7" height={528} left={498} top={0} width={443} />
          <ColoredRectangle color="#59656c" height={528} left={993} top={107} width={447} /> */}
            <HoverableDiv ink="#59656c">
              <ColoredRectangle
                color="#59656c"
                height={528}
                left={993}
                top={107}
                width={447}
              >
                <MosaicFill seed={20260915} base="#59656c" />
              </ColoredRectangle>
              <UIUXProject>UI / UX Design</UIUXProject>
              <UIUXProject1>
                I design interfaces where form and function hold together,
                grounded in research across very different industries.
                <br />
                Working alongside engineers keeps the decisions honest about
                what can actually ship.
              </UIUXProject1>
            </HoverableDiv>

            <HoverableDiv ink="#2A96B7">
              <ColoredRectangle
                color="#2A96B7"
                height={530}
                left={497}
                top={0}
                width={446}
              >
                <MosaicFill seed={20260916} base="#2A96B7" />
              </ColoredRectangle>
              <VisualDesign>Visual Design</VisualDesign>
              <VisualDesign1>
                My journey in visual design is driven by the belief that each
                pixel matters.
                <br />
                From conceptualization to execution, I strive for a harmonious
                balance between form and function. Every color, typeface, and
                image is carefully chosen to convey a message, evoke emotions,
                and create a lasting impression.
              </VisualDesign1>
            </HoverableDiv>

            <HoverableDiv ink="#D8984E">
              <ColoredRectangle
                color="#D8984E"
                height={528}
                left={0}
                top={107}
                width={445}
              >
                <MosaicFill seed={20260917} base="#D8984E" />
              </ColoredRectangle>
              <TextWrapper2>Frontend Coding</TextWrapper2>
              <TextWrapper2n1>
                I find joy in translating creative visions into seamless,
                interactive digital experiences. My coding journey is a
                continuous exploration of the ever-evolving web technologies.
                <br />
                Proficient in HTML, CSS, and React.js , I thrive on the
                challenge of bringing design concepts to life while ensuring a
                user-friendly and visually appealing interface.
              </TextWrapper2n1>
            </HoverableDiv>
          </OverlapGroup2>
        </OverlapGroupWrapper2>
      </IndexContainer>

      {/* <Div6>
        <Div7>
          UI / UX Design
          <ContentMob>
              As a UI/UX designer, I harmonize form and function to create visually captivating interfaces that guide users through purposeful journeys. 
              <br />
              With extensive cross-industry research, I tailor solutions to diverse user needs. 
              <br />
              Collaborating with cross-functional teams, I prioritize user-centric design, informed by thorough research, seamlessly integrating experiences into users' lives.
          </ContentMob>
        </Div7>
        <Div8>Visual Design
          <ContentMob>
              My journey in visual design is driven by the belief that each pixel matters. 
              <br />
              From conceptualization to execution, I strive for a harmonious balance between form and function. Every color, typeface, and image is carefully chosen to convey a message, evoke emotions, and create a lasting impression.
          </ContentMob>
        </Div8>
        <Div9>Frontend Coding
          <ContentMob>
              I find joy in translating creative visions into seamless, interactive digital experiences. 
              My coding journey is a continuous exploration of the ever-evolving web technologies. 
              <br />
              Proficient in HTML, CSS, and React.js , I thrive on the challenge of bringing design concepts to life while ensuring a user-friendly and visually appealing interface.
          </ContentMob>
        </Div9>
    </Div6> */}

      <Div6>
        <FlipCard
          title="UI / UX Design"
          content="I design interfaces where form and function hold together, grounded in research across very different industries. Working alongside engineers keeps the decisions honest about what can actually ship."
          bgColor="#59656C"
        />
        <FlipCard
          title="Visual Design"
          content="My journey in visual design is driven by the belief that each pixel matters. From conceptualization to execution, I strive for a harmonious balance between form and function. Every color, typeface, and image is carefully chosen to convey a message, evoke emotions, and create a lasting impression."
          bgColor="#2A96B7"
        />
        <FlipCard
          title="Frontend Coding"
          content="I find joy in translating creative visions into seamless, interactive digital experiences. My coding journey is a continuous exploration of the ever-evolving web technologies. Proficient in HTML, CSS, and React.js, I thrive on the challenge of bringing design concepts to life while ensuring a user-friendly and visually appealing interface."
          bgColor="#D8984E"
        />
      </Div6>

      <TextMarquee text="Let’s make something" accent="cool" />

      <Section>
        <CardsContainer>
          <SectionTitleSticky>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              Voice
              <span
                style={{
                  fontFamily: "'Kaisei Decol', serif",
                  fontStyle: "italic",
                }}
              >
                (s)
              </span>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>of Trust</div>
          </SectionTitleSticky>
          <TestimonialCard
            zIndex={1}
            bgImage="./testimonial-1.png"
            content="Ting-yi has excellent communication skills. During interviews, her keen perception consistently guides the conversation, helping us quickly pinpoint key insights from users. She is a great asset to any team."
            color="#2A96B7"
            person="Temu Chen, Project Manager @KOL.Tech"
            rotate="2deg"
          />
          <TestimonialCard
            zIndex={2}
            bgImage="./testimonial-3.png"
            content="Ting-yi has a high standard for visual aesthetics and is well-versed in front-end programming languages. This enables her designs to be both thoughtfully crafted and effectively implemented in development, making collaboration a truly enjoyable experience."
            color="#D8984E" /* 配合新背景圖的引號色 */
            person="Mike Lin, Frontend Developer"
          />
          <TestimonialCard
            zIndex={3}
            bgImage="./testimonial-2.png"
            content="She integrates insights to propose innovative solutions. Her skill in clarifying user and market needs during prototyping leads to streamlined processes and effective interface designs. With a collaborative spirit, Ting-yi excels in enhancing team dynamics, making her a valuable asset in cross-functional team."
            color="#59656C" /* 配合新背景圖的引號色 */
            person="Ethan Deng, Product Design Lead @Futurenest"
            rotate="-2deg"
          />
        </CardsContainer>
      </Section>
      {/* <Section>
        <SectionTitle>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            Service
            <span
              style={{
                fontFamily: "'Kaisei Decol', serif",
                fontStyle: "italic",
              }}
            >
              (s)
            </span>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
            at
            <span
              style={{
                fontFamily: "'Kaisei Decol', serif",
                fontStyle: "italic",
              }}
            >
              A
            </span>
            glance
          </div>
        </SectionTitle>
        
        <CardsContainer>
          <ServiceCardComponent zIndex={1}>
            <creattie-embed
              src="https://d1jj76g3lut4fe.cloudfront.net/saved_colors/98509/YUwgGNKFpKppqKV4.json"
              delay="1"
              speed="100"
              frame_rate="24"
              stroke_width="10.5"
              trigger="loop"
              style={{
                width: embedWidth,
                zIndex: "999",
                display: "flex",
              }}
            ></creattie-embed>
            <ServiceContent>Visual Communication</ServiceContent>
            <ServiceDes>
              Visual Identity Design • Design for Print • Packaging • Illustration
            </ServiceDes>
          </ServiceCardComponent>

          <ServiceCardComponent zIndex={2}>
            <creattie-embed
              src="https://d1jj76g3lut4fe.cloudfront.net/saved_colors/98509/Wj56MkmSXUliw7Th.json"
              delay="0"
              speed="100"
              frame_rate="24"
              stroke_width="10.5"
              trigger="loop"
              style={{
                width: embedWidth,
                zIndex: "999",
                display: "flex",
              }}
            ></creattie-embed>
            <ServiceContent>Digital Content</ServiceContent>
            <ServiceDes>
              Digital Experience Design • Web Design & Development • Responsive Design
            </ServiceDes>
          </ServiceCardComponent>

          <ServiceCardComponent zIndex={3}>
            <creattie-embed
              src="https://d1jj76g3lut4fe.cloudfront.net/saved_colors/98509/GiAN4lbwlxqpC71u.json"
              delay="0"
              speed="100"
              frame_rate="24"
              stroke_width="10.5"
              trigger="loop"
              style={{
                width: embedWidth,
                zIndex: "999",
                display: "flex",
              }}
            ></creattie-embed>
            <ServiceContent>UI / UX</ServiceContent>
            <ServiceDes>
              User Interface Design • User Research • Design System • Interactive Prototype
            </ServiceDes>
          </ServiceCardComponent>
        </CardsContainer>
      </Section> */}

      <div
        style={{
          width: "100%",
          display: "flex",
          backgroundColor: "#f2f2f2",
          zIndex: "999",
          justifyContent: "center",
          padding: "4rem",
          boxSizing: "border-box",
        }}
      >
        <Flower stroke="#2A96B7" viewBox="0 0 24 24">
          <path d=" M12 2.5c4 0 1.7 6.2 1.7 6.2s3.7-5.4 6-2.5-3.7 5.3-3.7 5.3 6.5-.6 5.6 3c-.8 3.7-6.5.4-6.5.4s4.7 4.7 1.2 6.4c-3.6 1.6-4.3-4.9-4.3-4.9s-.8 6.5-4.3 4.9c-3.4-1.7 1.2-6.4 1.2-6.4s-5.7 3.7-6.5-.4c-1-4 5.6-3 5.6-3s-6-2-3.7-5.3c2.2-3.3 5.9 2.5 5.9 2.5S8 2.5 12 2.5Z" />
        </Flower>
        <Flower fill="#2A96B7" stroke="#2A96B7" viewBox="0 0 24 24">
          <path d=" M12 2.5c4 0 1.7 6.2 1.7 6.2s3.7-5.4 6-2.5-3.7 5.3-3.7 5.3 6.5-.6 5.6 3c-.8 3.7-6.5.4-6.5.4s4.7 4.7 1.2 6.4c-3.6 1.6-4.3-4.9-4.3-4.9s-.8 6.5-4.3 4.9c-3.4-1.7 1.2-6.4 1.2-6.4s-5.7 3.7-6.5-.4c-1-4 5.6-3 5.6-3s-6-2-3.7-5.3c2.2-3.3 5.9 2.5 5.9 2.5S8 2.5 12 2.5Z" />
        </Flower>
        <Flower stroke="#2A96B7" viewBox="0 0 24 24">
          <path d=" M12 2.5c4 0 1.7 6.2 1.7 6.2s3.7-5.4 6-2.5-3.7 5.3-3.7 5.3 6.5-.6 5.6 3c-.8 3.7-6.5.4-6.5.4s4.7 4.7 1.2 6.4c-3.6 1.6-4.3-4.9-4.3-4.9s-.8 6.5-4.3 4.9c-3.4-1.7 1.2-6.4 1.2-6.4s-5.7 3.7-6.5-.4c-1-4 5.6-3 5.6-3s-6-2-3.7-5.3c2.2-3.3 5.9 2.5 5.9 2.5S8 2.5 12 2.5Z" />
        </Flower>
      </div>

      <Section style={{ paddingTop: "2rem" }}>
        <SectionTitle
          style={{ flexDirection: "row", justifyContent: "center" }}
        >
          Feature
          <span
            style={{
              fontFamily: "'Kaisei Decol', serif",
              fontStyle: "italic",
            }}
          >
            (s)
          </span>
        </SectionTitle>
        <CardsContainerWrapper>
          {Projects.map((project, index) => (
            <LargeProjectCard
              key={index}
              date={project.date}
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              tags={project.tags}
              subtags={project.subtags}
              link={project.link}
              openInNewTab={project.openInNewTab}
            />
          ))}
        </CardsContainerWrapper>
        <ViewMoreLink href="/work" rel="noopener noreferrer">
          <ViewMoreButton>
            View More Works
            <EyeIcon />
          </ViewMoreButton>
        </ViewMoreLink>
      </Section>
    </Div>
  );
}
export default MyComponent;

const Div = styled.div`
  background-color: #f2f2f2;
  display: flex;
  // padding-top: 8vh;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 440px) {
    // padding-top: 6vh;
  }
`;

// const Banner = styled.picture`
//   display: flex;
//   justify-content: center;
//   z-index: 0;
//   overflow: hidden;
//   position: sticky; /* 使用 sticky */
//   top: 0;

//   img {
//     width: 100%;
//     display: flex;
//     justify-content: right;

//     @media (max-width: 820px) {
//       border: none;
//       width: 100%;
//       padding-top: 6vh;
//     }
//     @media (max-width: 480px) {
//       padding-top: 0vh;
//     }
//   }
// `;

/* 桌機的 banner 由三張同尺寸（4152×1977）的圖疊成，必須像素對齊。
   用同一組 contain + bottom 規則：視窗矮就等比縮到裝得下（左右露出的底色與圖片邊緣同為
   #2A96B7，看不出來），視窗高就靠底對齊，維持人物貼齊畫面底部的構圖。 */
/* 三層共用的貼合方式。原本只在 ≥821px 生效，手機版走另一套（圖片在流中、
   height:auto），所以桌機版的分層 hero 在手機上完全沒作用。現在全寬度共用。 */
const bannerLayerFit = css`
  box-sizing: border-box;
  padding-top: var(--banner-nav-gap, 58px); /* 讓出固定導覽列的高度，視窗矮時引言才不會被蓋住 */
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom center;
`;

const BannerPin = styled.div`
  position: relative;
  width: 100%; /* 外層是 column flex，寬度不能靠內容撐（picture 在桌機是絕對定位） */
  /* = hero 本身的高度（100vh + 人像溢出量）＋ 320px 的「停住」時間。
     停住期間 hero 完全不動，人像與 deco 在這段時間內依序淡入；
     320px 用完之後 hero 才開始往上移動。改這個數字就是改停住多久。 */
  height: calc(100vh + var(--portrait-reveal, 0px) + 320px);
`;

/* 主要內容區。負 margin 讓它往上疊進馬賽克畫布的下半段 —— 畫布有 100vh，
   全部翻成淺色之後就是一整個螢幕的空白，排在它後面的話要等它整個捲完
   內容才出現。疊上去的那一段在當下早就翻成同色的淺灰，看不出接縫。

   手機版拉得更多：畫面高度小，同樣的 30vh 只有 253px，而馬賽克是由下往上
   翻的，下半部很早就整片變成淺色 —— 內容沒有填上去的話，那片淺色就是
   使用者看到的「一整屏空白」。內容本身是同色的不透明區塊，疊上去剛好
   把它蓋掉，畫面上只會剩馬賽克的波前。

   position: relative 是必要的：只有 z-index 沒有 position 的話不會生效，
   內容會被 MosaicBlock（z-index 1）蓋住。 */
const ContentSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f2f2f2;
  position: relative;
  z-index: 2;

  /* 往上疊進馬賽克畫布的下半段。數字越負，內容越早蓋掉那片已經翻成淺色的
     畫布，標題也越早出現（0 = 完全不疊，內容接在畫布正下方）。 */
  margin-top: -30vh;

  @media (max-width: 820px) {
    /* 手機版要再多疊一點：畫面短，同樣的 30vh 只有 253px，標題會等太久才進場。
       （-55vh 是另一個極端，那會讓馬賽克還沒收完就被蓋掉。） */
    margin-top: -40vh;
  }
`;

/* 馬賽克的版面容器：只佔 70vh，畫布靠 absolute 往上溢出到 banner 裡。
   z-index 1 才蓋得過 sticky Banner 的 z-index 0；不設 overflow，
   不然往上溢出的那 30vh 會被裁掉。底色是 banner 的藍，讓還沒翻色的
   格子在人像以下的區段透出藍色。 */
const MosaicBlock = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 70vh;
  background-color: #2A96B7;
`;

const Banner = styled.div`
  --banner-nav-gap: 58px; /* App.js 的固定導覽列高度 */

  @media (max-width: 480px) {
    --banner-nav-gap: 0px; /* 手機版導覽列在畫面下方，頂端不用讓位 */
  }

  /* hero 比視窗高一截（高出來的就是人像被視窗裁掉的那段）。

     sticky + top:0：一進頁面就黏住，維持你指定的參考取景不動 ——
     人像在這段期間淡入、接著 deco 淡入。兩段淡入都跑完之後，
     BannerPin 的高度用完，整塊 hero 才開始往上移，把人像下半身帶進畫面。
     因為是「整塊一起移動」，人像相對背景永遠不動，不會自己往上爬。 */
  position: sticky;
  top: 0;
  width: 100%;
  height: calc(100vh + var(--portrait-reveal, 0px));
  z-index: 0;

  /* 只夾水平軸：人像放大後左右各溢出數百 px，不夾會撐寬文件造成爆版。
     用 clip 不用 hidden —— hidden 會把垂直軸一起變成 auto。 */
  overflow-x: clip;
  overflow-y: visible;

  /* hero 比視窗高（多出 --portrait-reveal 那段），而藍色其實是 BgWrap 給的，
     它只有 100vh —— 多出來的那段沒有底色就會露出頁面的白，正好落在人像
     腳底。所以底色要給 Banner 本身，而且不能只在桌機版生效。 */
  background-color: #2a96b7;
`;

/* 人像／外框自成一層，和底圖分開。

   關鍵：它不跟 Banner 一起釘死。放大後人像會往下長出 100vh 之外，
   在畫面上就是「被視窗裁掉」—— 但那是視窗造成的，元件本身沒有裁切。
   露出下半身的動作由 Banner 的 sticky 負責（整塊一起移動），
   這一層本身不做任何捲動位移。 */
const PortraitLayer = styled.div`
  /* 固定貼在 hero 的上方 100vh —— 跟底圖同一個參考框，兩者一起被
     Banner 的 sticky 帶動，所以人像相對背景永遠不動。
     放大後人像往下長出這個框，落在 hero 多出來的那一段裡。 */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 1; /* 疊在底圖（z-index 0）之上 */
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  /* 只夾水平軸。放大 1.54× 會讓 <picture> 左右各溢出約 389px，
     若不夾住會把整份文件撐寬、出現水平捲軸，藍色 banner（width:100%）
     就填不滿文件寬度 —— 也就是爆版。
     用 clip 而不是 hidden：hidden 會把另一軸一起變成 auto，
     垂直方向的溢出（＝要靠捲動找回來的下半身）就沒了。
     人像實際只有 342px 寬、置中，夾在容器邊界不會少掉任何內容。 */
  overflow-x: clip;
  overflow-y: visible;

  /* 一定要限定 [data-layer="portrait"]：外框那層也包了一個 <picture>
     來做 WebP 切換，沒限定的話下面的 opacity: 0 會把外框整個蓋掉。

     尺寸與位置全部由 JS 寫成版面值（width / left / top），這裡不給 inset
     也不給 object-fit。原本是「圖片 contain 成視窗大小 + transform: scale()」，
     手機的倍率高到 3.2，等於讓瀏覽器以 390px 的版面尺寸點陣化再拉大三倍，
     人像就糊了。現在版面尺寸就是最終尺寸，點陣化一次到位。 */
  picture[data-layer="portrait"] {
    position: absolute;
    display: block;
    height: auto;
    z-index: 1;
    opacity: 0; /* 交給 JS 控制浮現 */
    will-change: opacity;
  }

  picture[data-layer="portrait"] img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const bgFadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const BgWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;             /* 固定一個視窗高，不跟著變高的 Banner 拉長 */
  z-index: 0;                /* 底層 */
  display: flex;
  justify-content: center;   /* 圖片水平置中 */
  align-items: center;       /* 圖片垂直置中 → 過高時上下留白 */
  background-color: #2A96B7; /* 上下（含左右）補色 */
  overflow: hidden;

  /* <picture> 只是切換用的殼，要撐滿才不會壓縮裡面的 <img> */
  picture {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* 不等 scroll，載入後直接淡入 */
  animation: ${bgFadeIn} 0.8s ease-out both;
  will-change: transform, opacity;
  pointer-events: none;
`;

const BgImg = styled.img`
  width: 100%;     /* 撐滿寬度；圖比容器矮時上下露出底色 */
  height: auto;    /* 維持原始比例 */
  display: block;
  object-fit: contain;
  ${bannerLayerFit}

  @media (max-width: 820px) {
    /* 手機版換成直立版底圖（585×1266，比例 0.462 ≈ 手機畫面）。
       用 cover 而非 contain：畫面比例跟圖不完全相同時要填滿，不要出現
       左右或上下的空條。引言在圖的上三分之一，裁切從底部吃掉空藍的部分，
       不會動到文字。 */
    object-fit: cover;
    object-position: top center;
  }
`;
// const BgImg = styled.img`
//   position: absolute;
//   bottom: 0;
//   // left: 50%;
//   // transform: translateX(-50%) translateY(40px);
//   width: 100%;
//   height: auto;
//   object-fit: contain;
//   z-index: 0;
//   opacity: 0;
//   will-change: transform, opacity;
//   pointer-events: none;
//   padding-top: 6vh;
//   background-color: #2a96b7;
// `;

const DecoImg = styled.img`
  /* 跟人像同一套：位置與寬度由 JS 給版面值，兩層用同一組數字算出來，
     所以永遠對齊。 */
  position: absolute;
  display: block;
  height: auto;
  z-index: 2;
  opacity: 0;
  will-change: opacity;
  pointer-events: none;
`;

/* ---- 未捲動時的「向下捲動」提示（依 Figma：圓框 + 弧線箭頭） ---- */
const hintFadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const hintFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(6px); }
`;

const ScrollHint = styled.div`
  --hint-color: #D8984E; /* 依 Figma 的橘色；與 resume 波浪線同一支 */

  position: absolute;
  left: 50%;
  /* 用 top 定位而非 bottom —— Banner 比視窗高，靠 bottom 會被推到畫面外 */
  top: 76vh;
  transform: translateX(-50%);
  z-index: 4; /* 在底圖與人像之上；白框浮現時它早就淡出了 */
  pointer-events: none;
  will-change: opacity, transform;

  @media (max-width: 480px) {
    /* 手機版的導覽列浮在畫面下方（844 高時上緣在 784），79vh 只離它 73px，
       擠在一起像是被推到底。70vh 拉開到 149px，箭頭回到空白藍色區塊的中段。 */
    top: 70vh;
  }
`;

const ScrollHintInner = styled.div`
  /* 進場延遲 0.9s，讓藍底圖的 bgFadeIn（0.8s）先跑完。
     外層 opacity 由 scroll handler 控制、內層只管進場與浮動，
     兩層相乘所以互不覆蓋（inline style 蓋不過 animation）。 */
  animation:
    ${hintFadeIn} 0.6s ease-out 0.9s both,
    ${hintFloat} 2.4s ease-in-out 1.5s infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: ${hintFadeIn} 0.01s linear both;
  }

  svg {
    display: block;
    width: 53px; /* Figma 原始尺寸 */
    height: 53px;
  }

  @media (max-width: 480px) {
    svg {
      width: 44px;
      height: 44px;
    }
  }
`;

const Div11 = styled.div`
  font:
    400 20px system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  color: #2A96B7;
  text-align: left;
  /* inline-block：讓游標接在文字後面同一行 */
  display: block;
  position: absolute;
  /* 明確指定 left，不要依賴「靜態位置」。
     這個元素是絕對定位、又接在「I am Ting-yi, Lin」這段行內文字後面，
     Chrome 會把水平靜態位置解析成上一行的結尾（left: 673px），
     整行就飛到右邊去。垂直的靜態位置是對的（在標題下方），所以 top 維持 auto。
     （原本是 <div> 時沒這問題；換成 <span> 後 Chrome 的算法不同。） */
  left: 0;
  margin-top: 24px;
  margin-left: 4px;
  /* 寬度不再寫死。原本每個斷點都要給一組 px（453/418/378/325）來配合
     CSS 動畫的 width 0 → 453px，字型稍有差異就會裁字；現在是實際的
     文字節點在逐字變長，讓它自己撐開就好。 */
  max-width: 100%;

  @media (max-width: 772px) {
    margin-left: 0;
    font-size: 18px;
    margin-top: 16px;
  }
  @media (max-width: 648px) {
    font-size: 16px;
  }
  @media (max-width: 430px) {
    font-size: 16px;
    line-height: 22px;
    max-width: 325px;
  }
`;


const OverlapGroupWrapper = styled.div`
  background-color: #f2f2f2;
  // max-width: 1440px;
  width: 100%;
  margin: 0 auto; /* 左右居中 */
  // flex-direction: column;
  // margin-top: 1vh;
  position: relative;
  margin-bottom: 15vh;
  /* 馬賽克下緣＝內容區上緣，這個 padding 就是「馬賽克跑完到標題出現」
     之間唯一的白色空檔。先從 10vh（90px）收到 5vh（45px），再收到 2vh（18px）。
     原本這裡還有一條 1.5px 的 #2A3133 分隔線，用來切開 banner 與內容；
     現在兩者之間是馬賽克轉場，硬線會把漸變截斷，所以已移除。 */
  padding-top: 2vh;

  @media (max-width: 1440px) {
    // max-height: 25vh;
    // margin-top: 10vh;
    margin-bottom: 12vh;
  }

  @media (max-width: 1020px) {
    // max-height: 18vh;
    // margin-top: 10vh;
    margin-bottom: 15vh;
  }

  @media (max-width: 648px) {
    // height: 10vh;
    // margin-top: 20vh;
    // margin-bottom: 10vh;
  }

  @media (max-width: 480px) {
    // height: 12vh;
    // margin-top: 15vh;
    /* 原本是 15vh（844 高的螢幕上 127px）。那是內容區還用 -55vh 往上疊的
       時代留下的值 —— 當時內容起點很高，要靠這段內距把標題推回合理位置。
       重疊量改成 -30vh 之後內容本來就晚了 200px 才開始，這段內距就變成
       純粹的空白，讀起來像「馬賽克跑完之後下面什麼都沒有」。 */
    padding-top: 3vh;
    margin-bottom: 0vh;
    margin-top: 0vh;
  }

  @media (max-width: 375px) {
    // height: 16vh;
    // margin-top: 15vh;
    margin-bottom: 0vh;
  }
`;

const OverlapGroup = styled.div`
  white-space: nowrap;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  // align-items: center;
  justify-content: center;
  // align-self: center;
  margin: 0 auto;
  // margin-bottom: 20vh;
`;

const HeadingIAm = styled.div`
  color: #2A3133;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  font-size: 8rem;
  font-weight: 700;
  // height: 226px;
  margin: 0 auto;
  letter-spacing: 0;
  position: relative;
  z-index: 999;
  backgroung-color: #f2f2f2;

  @media (max-width: 1440px) {
    font-size: 96px;
    top: 0px;
  }
  @media (max-width: 772px) {
    font-size: 84px;
    top: 0px;
  }
  @media (max-width: 648px) {
    white-space: pre-wrap;
    margin-left: 24px;
    font-size: 64px;
    top: -10vh;
  }
  @media (max-width: 390px) {
    white-space: pre-wrap;
    margin-left: 24px;
    font-size: 56px;
    top: -10vh;
  }
`;

const Frame = styled.div`
  align-items: center;
  background-color: #59656c;
  border-radius: 80px;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  right: 38vw;
  padding: 12px 32px;
  position: absolute;
  top: 35px;
  @media (max-width: 990px) {
    display: none;
  }
`;

const TextWrapper = styled.div`
  color: #ffffff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", sans-serif;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
  @media (max-width: 990px) {
    display: none;
  }
`;

const DivWrapper = styled.div`
  align-items: center;
  background-color: #d8984e;
  border-radius: 80px;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  right: 14vw;
  padding: 12px 32px;
  position: absolute;
  top: 75px;
  filter: blur(2px);
  @media (max-width: 990px) {
    display: none;
  }
`;

const DivWrapper2 = styled.div`
  align-items: center;
  background-color: #2a96b7;
  filter: blur(1px);
  border-radius: 80px;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  left: 10vw;
  padding: 12px 32px;
  position: absolute;
  top: 130px;
  @media (max-width: 990px) {
    display: none;
  }
`;

const CircleContainer = styled.div`
  --circleSize: 50px;
  --spinSpeed: 5s;
  --color1: #2A96B7; /* 陰影顏色，由下方 cycleColor 輪替 */
  --color2: #f2f2f2; /* 亮面顏色 */

  width: 100%; /* 覆盖整个屏幕宽度 */
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0; /* 上下呼吸空間，原本只有 padding-bottom: 5vh */

  @media (max-width: 820px) {
    padding: 72px 0;
  }

  /* 三色輪替：在「完全實心」的那一瞬間換色，一輪 15s（3 次翻面）。
     翻面週期 5s 的相位：0s 亮面全覆蓋 → 1.25s 彩色面側轉看不見 →
     2.5s 完全實心上色 → 3.75s 轉回亮面。
     選 2.5s 是因為那一刻整顆球（:after 圓盤 + 外框 box-shadow）全都是 --color1，
     底下的 :before 半圓完全被蓋住，所以換色是整顆一起換、不會出現半邊跳色。
     15s 內的斷點：2.5s = 16.667%、7.5s = 50%、12.5s = 83.333%。
     --color1 已在 App.css 用 @property 註冊成 <color> 才動得了；
     成對的 keyframes 讓它硬切而不是漸變，維持色票乾淨。 */
  animation: cycleColor calc(var(--spinSpeed) * 3) infinite;

  @keyframes cycleColor {
    0%,
    16.666% {
      --color1: #59656C;
    }
    16.667%,
    49.999% {
      --color1: #2A96B7;
    }
    50%,
    83.332% {
      --color1: #D8984E;
    }
    83.333%,
    100% {
      --color1: #59656C;
    }
  }

  .circle {
    height: var(--circleSize);
    width: var(--circleSize);
    border-radius: var(--circleSize);
    position: relative;
    overflow: hidden;
    background-color: var(--color2);
    transform: rotate(-21deg);
    box-shadow: 0 0 0 1px var(--color1);
  }

  @keyframes rotateAll {
    100% {
      transform: rotate(359deg);
    }
  }

  .circle:before,
  .circle:after {
    content: "";
    display: var(--color2);
    height: var(--circleSize);
    position: absolute;
  }

  .circle:before {
    width: calc(var(--circleSize) / 2);
    border-radius: 0 var(--circleSize) var(--circleSize) 0;
    right: 0;
    border-radius: 0;
    background-color: var(--color1);
    animation: fillEffect var(--spinSpeed) calc(var(--spinSpeed) / 4) steps(2)
      infinite;
    transform: translateX(0);
  }

  .circle:after {
    width: var(--circleSize);
    border-radius: var(--circleSize);
    animation: rotateEffect var(--spinSpeed) infinite linear;
    will-change: transform;
    z-index: 90;
  }

  @keyframes rotateAll {
    100% {
      transform: rotate(359deg);
    }
  }

  @keyframes fillEffect {
    50% {
      left: 0;
    }
  }

  @keyframes rotateEffect {
    0% {
      transform: scale(1, 1);
      background-color: var(--color2);
      box-shadow: 0 0 0 2px var(--color2);
    }
    25% {
      transform: scale(0, 1);
      background-color: var(--color2);
      box-shadow: 0 0 0 2px var(--color2);
    }
    25.01% {
      background-color: var(--color1);
      box-shadow: 0 0 0 2px var(--color1);
    }
    50% {
      transform: scale(1, 1);
    }
    75% {
      transform: scale(0, 1);
      background-color: var(--color1);
      box-shadow: 0 0 0 2px var(--color1);
    }
    75.01% {
      background-color: var(--color2);
      box-shadow: 0 0 0 2px var(--color2);
    }
    100% {
      transform: scale(1, 1);
      background-color: var(--color2);
      box-shadow: 0 0 0 2px var(--color2);
    }
  }
`;
const IndexContainer = styled.div`
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center; /* 讓內容垂直置中 */
  width: 100vw; /* 確保始終佔滿視窗寬度 */
  height: auto; /* 根據需要設置高度 */
  margin: 0 auto 80px; /* 與下方跑馬燈拉開距離 */
  position: relative;

  /* 桌機畫布是等比縮放的，低於 1200px 內文會被縮到 13px 以下（834px 時只剩 9px），
     這個範圍改用下面 Div6 的卡片版面。 */
  @media (max-width: 1199px) {
    display: none;
  }
`;

/* 這一區是固定像素的絕對定位版型（每個方塊都寫死 left/top/width/height），
   實際畫布是 1440×635（邊線用 border-box 算在尺寸內）。原本外層寫死 1450px，視窗比它窄就會出現
   水平捲軸、右邊的卡片被切掉。改成等比縮放填滿容器寬度：
   wrapper 用 aspect-ratio 撐出正確高度，內層維持原尺寸再用 transform 縮放，
   這樣所有硬座標都不用動，版面比例也完全不變。 */
const CANVAS_W = 1440;
const CANVAS_H = 635;

const OverlapGroupWrapper2 = styled.div`
  /* 上方的呼吸空間。原本離上面那顆旋轉圓圈只有 72px，三張卡的量體很重，
     貼太近會像被推上去。用 margin 不用 padding —— 這個盒子靠 aspect-ratio
     定高，padding 會把比例算進去。 */
  margin-top: 88px;

  @media (max-width: 820px) {
    margin-top: 48px;
  }

  container-type: inline-size;
  width: 100%;
  aspect-ratio: ${CANVAS_W} / ${CANVAS_H};
  overflow: hidden;
`;

const OverlapGroup2 = styled.div`
  background-color: #f2f2f2;
  position: relative;
  width: ${CANVAS_W}px;
  height: ${CANVAS_H}px;
  transform-origin: top left;
  transform: scale(calc(100cqw / ${CANVAS_W}px)); /* 長度÷長度＝純數字，scale() 才吃 */
`;

const Rectangle = styled.div`
  box-sizing: border-box; /* 座標是 Figma 的外框尺寸，邊線要算在內才不會互相重疊 */
  border: 1px solid;
  border-color: #2A3133;
  border-radius: 16px;
  height: ${({ height }) => height}px;
  left: ${({ left }) => left}px;
  position: absolute;
  top: ${({ top }) => top}px;
  width: ${({ width }) => width}px;
`;

const UIUXProject = styled.div`
  color: #ffffff;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  font-size: 40px;
  font-weight: 700;
  height: 92px;
  left: 1052px;
  letter-spacing: 0;
  line-height: 46.4px;
  position: absolute;
  top: 240px;
  white-space: nowrap;
`;

const UIUXProject1 = styled(UIUXProject)`
  font-size: 16px;
  line-height: 24px;
  left: 1052px;
  top: 340px;
  width: 360px;
  white-space: pre-wrap;
  color: var(--text-color, #59656c);
  font-weight: 400;
`;

const ColoredRectangle = styled.div`
  box-sizing: border-box;
  border: 1px solid;
  border-color: #2A3133;
  border-radius: 16px;
  height: ${({ height }) => height}px;
  left: ${({ left }) => left}px;
  position: absolute;
  top: ${({ top }) => top}px;
  width: ${({ width }) => width}px;
  background-color: ${({ color }) => color};

  overflow: hidden; /* 方塊要被圓角切齊 */
  transition: background-color 0.2s ease-in;
`;

const TextWrapper2 = styled(UIUXProject)`
  height: 46px;
  left: 48px;
  top: 240px;
  white-space: nowrap;
`;

const TextWrapper2n1 = styled(UIUXProject)`
  font-size: 16px;
  line-height: 24px;
  left: 48px;
  top: 340px;
  width: 360px;
  white-space: pre-wrap;
  color: var(--text-color, #d8984e);
  font-weight: 400;
`;

/* 桌機三張卡的 hover：整塊變深改成一格一格翻過去。

   底色留在 ColoredRectangle 上，上面疊一層深色方塊，hover 時各自依延遲浮現。
   延遲用 inline style 給（CSS 沒辦法為每一格算不同的值），進出用同一組延遲 ——
   離開時就是按進來的順序退回去，讀起來仍然是一道波前。 */
const D_COLS = 10;
const D_ROWS = 12;

/* accent 格子先以較淺的顏色浮現，再晚一拍收斂成跟其他格一樣的深色 ——
   跟捲動轉場的 accentShare 是同一個想法：閃一下，然後歸位。
   不收斂的話那些格子會永遠留著，變成一片洗不掉的斑點。 */
const MosaicCell = styled.span`
  /* 用不透明色而不是半透明黑：相鄰格子的邊緣會落在小數像素上，半透明疊出來
     會在接縫留下一條比較亮的細線，整片看起來像有格線。同色實色就沒有這個問題。 */
  background-color: ${({ $accent, $base }) =>
    $accent
      ? `color-mix(in srgb, ${$base} 58%, #000)`
      : `color-mix(in srgb, ${$base} 20%, #000)`};
  opacity: 0;
  transition:
    opacity 0.16s linear,
    background-color 0.3s linear;

  @media (prefers-reduced-motion: reduce) {
    transition-delay: 0ms !important;
  }
`;

const MosaicLayer = styled.span`
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(${D_COLS}, 1fr);
  grid-template-rows: repeat(${D_ROWS}, 1fr);
  pointer-events: none;
`;

const MosaicFill = ({ seed, base }) => {
  const cells = useMemo(() => cellPattern(seed, D_COLS, D_ROWS), [seed]);
  return (
    <MosaicLayer aria-hidden="true">
      {cells.map((c, i) => (
        <MosaicCell
          key={i}
          $accent={c.accent}
          $base={base}
          style={{
            /* 兩個延遲分別對應 opacity 與 background-color：
               先浮現，140ms 後才收斂成最終色 */
            transitionDelay: `${c.t * SPREAD}ms, ${c.t * SPREAD + 140}ms`,
          }}
        />
      ))}
    </MosaicLayer>
  );
};

const HoverableDiv = styled.div`
  /* 內文色平常等於卡片底色（刻意看不見），hover 時底色變 rgba(0,0,0,.8)
     才浮現。浮現的底實際是 #303030，原色壓上去只有 2.2:1，所以同時提亮。
     VisualDesign1 定義在本元件之後，沒辦法用 component selector，改用 CSS 變數傳遞。 */
  --text-color: ${(props) => props.ink};

  &:hover {
    --text-color: color-mix(in srgb, ${(props) => props.ink} 66%, white);
  }

  &:hover ${MosaicCell} {
    opacity: 1;
    background-color: ${({ ink }) => `color-mix(in srgb, ${ink} 20%, #000)`};
  }
`;

const VisualDesign = styled(UIUXProject)`
  left: 550px;
  top: 114px;
`;

const VisualDesign1 = styled(UIUXProject)`
  font-size: 16px;
  line-height: 24px;
  left: 550px;
  top: 214px;
  width: 360px;
  white-space: pre-wrap;
  color: var(--text-color, #2a96b7);
  font-weight: 400;
`;

const Div6 = styled.div`
  background-color: #f2f2f2;
  z-index: 999;
  width: 90%;
  flex-direction: column;
  // justify-content: center;
  color: #fff;
  font-weight: 700;
  line-height: 46px;
  display: none;
  padding-bottom: 32px;
  margin-bottom: 48px; /* 加上上面的 32px padding，與跑馬燈之間共 80px */
  gap: 24px;
  font-size: 24px;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;

  @media (max-width: 1199px) {
    display: flex;
  }

  /* 平板：三欄並排填滿寬度，不要拉成三條全寬長條 */
  @media (min-width: 821px) and (max-width: 1199px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

const Div7 = styled.a`
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  border-radius: 16px;
  background-color: #d8984e;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  line-height: 116%;
  @media (max-width: 991px) {
    white-space: initial;
    max-width: 100%;
    padding: 40px 24px;
  }
`;

const Div8 = styled.a`
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  border-radius: 16px;
  background-color: #2a96b7;
  margin-top: 32px;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 40px 24px;
  }
  @media (max-width: 430px) {
    margin-top: 24px;
  }
`;

const Div9 = styled.a`
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  border-radius: 16px;
  background-color: #59656c;
  margin-top: 32px;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
    padding: 40px 24px;
  }
  @media (max-width: 430px) {
    margin-top: 24px;
  }
`;

const TextWrapper3 = styled.div`
  width: 70%;
  max-width: 1040px;
  font-size: 1.25rem;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  color: #666666;
  text-align: center;

  padding-bottom: 0; /* 下方留白改由球體區塊的 padding 提供，不再疊加 */
  line-height: 2.5rem;

  p {
    margin-bottom: 0; /* 移除 <p> 預設的 1em 下邊距 */
  }

  @media (max-width: 1440px) {
    // font-size: 1rem;
    width: 90%;
    text-align: center;
    padding-bottom: 0;
  }
  @media (max-width: 1024px) {
    // font-size: 1rem;
    text-align: left;
    padding-bottom: 0;
  }
  @media (max-width: 480px) {
    display: flex;
    font-size: 0.8rem;
    padding-top: 1rem;
    width: 90%;
    text-align: left;
    line-height: 1.5rem;
  }
  @media (max-height: 600px) {
    display: none;
  }
`;

const Span = styled.span`
  background-color: #2A3133;
  border-radius: 50px;
  padding: 2px 8px;
  color: #ffffff;
  white-space: nowrap;
`;

/* 三張卡片的翻面效果：馬賽克溶解，不是 3D 翻轉。

   正面是一整格一整格的方塊疊在背面上，每一格有自己的延遲時間 ——
   延遲值來自一組固定亂數的門檻圖，跟 PixelScrollTransition 的做法一樣，
   所以方塊是有機地散開，不是整齊掃過。

   ⚠️ 正反面原本是同一個底色，那樣溶解會看不見（透出來的跟蓋著的一樣）。
   所以背面壓深一階，方塊掉下去才讀得出「這一格翻過去了」。

   桌機 hover 觸發、手機點擊 —— 觸控裝置沒有 hover，兩種輸入各給一種。
   背面文字維持真正的 DOM 文字，可選取、可報讀。 */

const COLS = 12;
const ROWS = 8;
const SPREAD = 420; // 最早與最晚的格子相差多久（ms）
const ACCENT_SHARE = 0.14; // 有多少比例的格子會先閃一下再消失

/* 固定種子的亂數：每張卡片的圖樣不同，但重新 render 不會變 */
const cellPattern = (seed, cols = COLS, rows = ROWS) => {
  let x = seed;
  const rand = () => {
    x = (x * 1664525 + 1013904223) % 4294967296;
    return x / 4294967296;
  };
  return Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    /* 由左上往右下擴散，再加一點亂數讓邊界不是一條直線 */
    const sweep = (col / (cols - 1)) * 0.5 + (row / (rows - 1)) * 0.5;
    return { t: Math.min(1, sweep * 0.65 + rand() * 0.35), accent: rand() < ACCENT_SHARE };
  });
};

const DivFlipCard = styled.div`
  background-color: #f2f2f2;
  max-width: 100%;

  @media (min-width: 821px) and (max-width: 1199px) {
    flex: 1;
    min-width: 0;
  }
`;

const Card = styled.div`
  position: relative;
  height: 240px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  text-align: left;

  @media (min-width: 821px) and (max-width: 1199px) {
    height: 380px;
  }
`;

/* 背面用跟桌機那三張 hover 後同一個深色（卡片色混 20% 黑），
   兩個斷點的「翻過去之後」才是同一個樣子。 */
const Back = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $bg }) => `color-mix(in srgb, ${$bg} 20%, #000)`};
  color: #fff;
  font-size: 24px;
  font-weight: 400; /* Div6 帶著 font-weight: 700，內容會繼承到，要壓回來 */
`;

const Cells = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(${COLS}, 1fr);
  grid-template-rows: repeat(${ROWS}, 1fr);
  pointer-events: none;
`;

/* 不做 accent 閃色：這裡的格子在「未展開」時是常駐可見的，
   比較亮的那些會變成停在卡片上的亮塊，看起來像瑕疵而不是效果。 */
const Cell = styled.span`
  background-color: ${({ $bg }) => $bg};
  /* 相鄰格子的邊界會落在小數像素上，抗鋸齒之後會透出底下較深的背面、
     整片看起來像畫了格線。往外描 1px 同色把接縫蓋掉（超出的部分由
     Card 的 overflow: hidden 裁掉）。 */
  box-shadow: 0 0 0 1px ${({ $bg }) => $bg};
  opacity: ${({ $open }) => ($open ? 0 : 1)};
  transition: opacity 0.16s linear;

  @media (prefers-reduced-motion: reduce) {
    transition-delay: 0ms !important;
    transition-duration: 0.25s;
  }
`;

/* 正面的標題：疊在方塊之上，開場就先退掉，不要跟著方塊一格一格消失 */
const FrontFace = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  pointer-events: none;
  opacity: ${({ $open }) => ($open ? 0 : 1)};
  transition: opacity ${({ $open }) => ($open ? "0.14s" : "0.3s")} ease
    ${({ $open }) => ($open ? "0s" : "0.18s")};
`;


let cardSeed = 0;

function FlipCard({ title, content, bgColor }) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef(null);
  const pattern = useMemo(() => cellPattern(20260915 + (cardSeed++ % 7) * 977), []);

  /* 捲到視窗中央就展開，捲過去就收回 —— 不用點也不用 hover。

     rootMargin 上下各切掉 45%，等於把「可視區域」縮成畫面正中間那一條
     10% 的帶狀區。卡片碰到那條帶子才算 isIntersecting。
     這個做法在觸控裝置上才成立：手機沒有 hover，而點擊會多一個
     使用者不一定知道要做的動作。 */
  useEffect(() => {
    const el = cardRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;

    const io = new IntersectionObserver(
      ([entry]) => setOpen(entry.isIntersecting),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <DivFlipCard>
      <Card ref={cardRef}>
        <Back $bg={bgColor}>
          <ContentMob>{content}</ContentMob>
        </Back>

        <Cells aria-hidden="true">
          {pattern.map((c, i) => (
            <Cell
              key={i}
              $bg={bgColor}
              $open={open}
              style={{ transitionDelay: `${(open ? c.t : 1 - c.t) * SPREAD}ms` }}
            />
          ))}
        </Cells>

        <FrontFace $open={open}>{title}</FrontFace>
      </Card>
    </DivFlipCard>
  );
}

const ContentMob = styled.div`
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  padding: 16px;

  @media (max-width: 991px) {
    font-size: 0.8rem;
    line-height: 1.4;
  }

  /* 平板三欄時卡片只有 1/3 寬，字級不能跟著回到 1rem，否則背面文字會溢出 */
  @media (min-width: 821px) and (max-width: 1199px) {
    font-size: 0.875rem;
  }
`;

const Section = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 5rem;

  @media (max-width: 480px) {
    gap: 24px;
  }
`;

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  // flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  padding: 1rem 0;

  @media (max-width: 480px) {
    gap: 24px;
    width: 90%;
  }
`;

const SectionTitle = styled.div`
  color: #2A3133;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  font-size: 3rem;
  font-weight: 700;
  width: 90%;
  font-size: 48px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (max-width: 480px) {
    font-size: 2.5rem;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    text-align: left;
    gap: 0px;
    line-height: 1.1;
  }
`;

const SectionTitleSticky = styled.div`
  color: #2A3133;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  font-size: 3rem;
  font-weight: 700;
  width: 90%;
  font-size: 48px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: sticky;
  top: 12vh;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 2.5rem;
    top: 8vh;
    justify-content: center;
    align-items: left;
    text-align: left;
    gap: 16px;
    line-height: 1.1;
  }
`;

const ServiceContent = styled.div`
  // color: #fff;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  width: 100%;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  white-space: pre-wrap;

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 1.2;
    padding: 0px;
  }
`;

const ServiceDes = styled.div`
  margin-top: 0.6rem;
  // color: #fff;
  font-family: 'Kaisei Decol', serif;
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  white-space: wrap;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Flower = styled.svg`
  width: 60px;
  height: 60px;
  fill: ${(props) => props.fill || "none"};
  stroke: ${(props) => props.stroke || "#2A3133"};
  stroke-width: 0.6;
  animation: ${rotate} 8s linear infinite;
`;

const CardsContainerWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap; /* Allows wrapping to the next line */

  @media (max-width: 1200px) {
    /* For tablets */
    // width: 100%;
    justify-content: center;
    padding: 0;
  }

  @media (max-width: 480px) {
    /* For mobile screens */
    width: 90%;
    align-items: center;
  }
`;

/* 按鈕的呼吸空間。原本上方只有 Section 的 gap（32px）、下方靠 footer 的
   margin（72px）撐著，按鈕自己沒有任何間距，所以上緊下鬆、整顆看起來被夾住。
   這裡把上下距離寫明：上方 32+72=104、下方 72+56=128。
   下方留得比上方多一點 —— footer 的底色是一條硬邊，貼太近會像黏在上面。 */
const ViewMoreLink = styled.a`
  text-decoration: none;
  margin: 72px 0 56px;

  @media (max-width: 480px) {
    margin: 48px 0 32px;
  }
`;

const ViewMoreButton = styled.button`
  height: 100%;
  background-color: #d7f1f6;
  color: #14607A;
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 50px;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  gap: 0.8rem;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  transition: background-color 0.8s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: #f2f2f2;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.8rem;
    align-items: center;
    gap: 0.5rem;
  }
`;

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" />
  </svg>
);
