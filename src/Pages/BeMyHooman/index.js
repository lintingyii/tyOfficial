import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { A, NAV, CONTENTS, INTRO, BRAND, PILLARS, PERSONALITY, LOGO, COLOR, TYPE } from "./content";

/* Be my Hooman ——「Be my Hooman」品牌規範書，獨立頁。

   內容照 be-my-hooman.figma.site 的線上版重建成真正的 HTML：文字是文字
   （可選取、可搜尋、可縮放），圖形用原稿輸出的 SVG，所以 RWD 是靠版面重排
   達成的，不是把一張 1280 寬的圖縮小給手機看。

   版面分成兩種：
   ・≥1024px：左側固定側欄（章節目錄）＋ 右側內容，內容本身再分成
     「標題欄 / 正文欄」兩欄，和原稿一致。
   ・<1024px：側欄收成頂部的一條 bar + Menu，內容單欄堆疊。 */

const INK = "#262626";
const MUTED = "#4F4F4F";
const FAINT = "#767676";
const PAPER = "#FBFBFB";
const LINE = "#E5E5E5";
const BLUE = "#8FD7E5";
const DEEP = "#356670";

const SANS = "'Rethink Sans', system-ui, -apple-system, 'Segoe UI', sans-serif";
/* Author（Klim）是商用字體不能散佈，標題改用 Newsreader 頂替 */
const DISPLAY = "'Newsreader', 'Author', Georgia, serif";
/* 原稿的中文是 Glow Sans TC，這裡用 Noto Sans TC 代替 */
const HAN = "'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif";

/* 量自 be-my-hooman.figma.site（vw=1440）：
   側欄 230、主欄 1210、左右內距各 40、兩欄各 549 寬、欄距 32。
   區塊只有上內距 ~180、沒有下內距 —— 下一個區塊的上內距就是兩者的間隔。 */
const SIDEBAR = 230;
const PAD = 40;
const COL_GAP = 32;
const SECTION_TOP = 180;
const DESKTOP = "@media (min-width: 1024px)";

const Page = styled.div`
  background: ${PAPER};
  color: ${INK};
  font-family: ${SANS};
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;

  ${DESKTOP} {
    padding-left: ${SIDEBAR}px;
  }
`;

/* ---------- 側欄 / 手機版頂部 bar ---------- */

const Sidebar = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  background: ${PAPER};
  border-bottom: 1px solid ${LINE};
  padding: 16px 20px;

  ${DESKTOP} {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${SIDEBAR}px;
    border-bottom: 0;
    border-right: 1px solid ${LINE};
    padding: 30px 32px;
    display: flex;
    flex-direction: column;
  }
`;

const BarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  img {
    height: 22px;
    width: auto;
    display: block;
  }
`;

const MenuButton = styled.button`
  font-family: ${SANS};
  font-size: 0.94rem;
  font-weight: 500;
  color: ${INK};
  background: none;
  border: 0;
  padding: 6px 2px;
  cursor: pointer;

  ${DESKTOP} {
    display: none;
  }

  &:focus-visible {
    outline: 2px solid ${DEEP};
    outline-offset: 3px;
  }
`;

const NavList = styled.nav`
  display: ${({ $open }) => ($open ? "block" : "none")};
  padding-top: 18px;

  ${DESKTOP} {
    display: block;
    padding-top: 54px;
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: baseline;
  gap: 6px;
  text-decoration: none;
  color: ${INK};
  font-size: 0.94rem;
  font-weight: 500;
  padding: 7px 0;
  transition: color 0.2s ease;

  span {
    font-size: 0.62rem;
    color: ${FAINT};
  }

  &:hover {
    color: ${DEEP};
  }

  &:focus-visible {
    outline: 2px solid ${DEEP};
    outline-offset: 3px;
  }
`;

const NavFoot = styled.div`
  display: ${({ $open }) => ($open ? "block" : "none")};
  padding: 14px 0 4px;

  ${DESKTOP} {
    display: block;
    margin-top: auto;
    padding: 0;
  }

  a {
    display: block;
    color: ${FAINT};
    font-size: 0.94rem;
    font-weight: 500;
    text-decoration: none;
    padding: 4px 0;
  }

  a:hover {
    color: ${INK};
  }
`;

/* ---------- 版面骨架 ---------- */

const Cover = styled.div`
  background: ${BLUE};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 62vh;
  padding: 40px 24px;

  ${DESKTOP} {
    min-height: 691px; /* 原稿的封面高度 */
    padding: 40px;
  }

  img {
    width: min(420px, 62vw);
    height: auto;
    display: block;
  }
`;

const Section = styled.section`
  padding: 72px 20px 0;

  ${DESKTOP} {
    padding: ${SECTION_TOP}px ${PAD}px 0;
  }
`;

/* 原稿的兩欄：左邊是章節編號／小標，右邊是正文。手機收成單欄。 */
const Cols = styled.div`
  display: grid;
  gap: 24px;

  ${DESKTOP} {
    grid-template-columns: 1fr 1fr;
    gap: ${COL_GAP}px;
    align-items: start;
  }
`;

const SectionNo = styled.h2`
  font-family: ${DISPLAY};
  font-weight: 500;
  font-size: clamp(38px, 6.4vw, 72px);
  line-height: 1.1;
  margin: 0;
  letter-spacing: -0.01em;

  span {
    color: ${({ $accent }) => $accent || BLUE};
    margin-right: 0.28em;
  }
`;

const Display = styled.h1`
  font-family: ${DISPLAY};
  font-weight: 500;
  font-size: clamp(38px, 6.4vw, 72px);
  line-height: 1.1;
  margin: 0;
  letter-spacing: -0.01em;
`;

/* 兩級小標：區塊層級 32px（Contents），段落層級 22px（Primary Lockup 等） */
const Minor = styled.h3`
  font-family: ${DISPLAY};
  font-weight: 500;
  font-size: ${({ $big }) => ($big ? "clamp(24px, 4vw, 32px)" : "22px")};
  line-height: 1.2;
  margin: 0 0 20px;
  color: ${({ $muted }) => ($muted ? MUTED : INK)};
`;

const Zh = styled.p`
  font-family: ${HAN};
  font-size: 16px;
  line-height: 1.5;
  color: ${({ $ink }) => ($ink ? INK : MUTED)};
  margin: 0 0 24px;

  b {
    font-weight: 700;
    color: ${DEEP};
  }
`;

const En = styled.p`
  font-size: 18px;
  line-height: 1.2;
  color: ${({ $ink }) => ($ink ? INK : MUTED)};
  margin: 0 0 24px;

  b {
    font-weight: 600;
    color: ${DEEP};
  }
`;

const Lead = styled.span`
  font-family: ${DISPLAY};
  font-size: 1.2em;
  margin-right: 0.35em;
  color: ${INK};
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid ${LINE};
  margin: 56px 0;
`;

/* ---------- 目錄 ---------- */

const ContentRow = styled.a`
  display: grid;
  grid-template-columns: 2.2em minmax(0, 1fr);
  gap: 8px;
  align-items: baseline;
  text-decoration: none;
  color: ${INK};
  padding: 5px 0;
  font-family: ${DISPLAY};
  font-size: clamp(20px, 3.4vw, 32px);
  line-height: 1.2;

  em {
    color: ${MUTED};
    font-style: normal;
  }

  small {
    display: none;
    font-family: ${SANS};
    font-size: 0.9rem;
    color: ${MUTED};
  }

  ${DESKTOP} {
    grid-template-columns: 2.2em minmax(0, 1fr) auto;

    small {
      display: block;
    }
  }

  &:hover {
    color: ${DEEP};
  }
`;

/* ---------- 三個核心價值 ---------- */

const Pillars = styled.div`
  display: grid;
  gap: 16px;

  ${DESKTOP} {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`;

const Pillar = styled.div`
  background: ${({ $bg }) => $bg};
  border-radius: 18px;
  padding: 28px 24px 30px;

  h4 {
    font-family: ${DISPLAY};
    font-weight: 600;
    font-size: 1.06rem;
    margin: 0 0 96px;
    color: ${INK};
  }

  ${DESKTOP} {
    h4 {
      margin-bottom: 128px;
    }
  }
`;

const PillarKey = styled.p`
  font-family: ${HAN};
  font-size: 1rem;
  margin: 0 0 6px;
  color: ${INK};

  b {
    font-weight: 700;
  }
`;

const Tiny = styled.p`
  font-size: 0.7rem;
  line-height: 1.6;
  color: ${INK};
  margin: 0 0 10px;
  opacity: 0.72;
`;

/* ---------- 人格特質 ---------- */

const Traits = styled.div`
  text-align: center;
`;

const Trait = styled.div`
  font-family: ${DISPLAY};
  font-weight: 500;
  font-size: clamp(38px, 8.4vw, 62px);
  line-height: 1.18;
  color: ${({ $c }) => $c};
`;

const Statement = styled.div`
  margin-bottom: 34px;

  h5 {
    font-size: 1rem;
    font-weight: 600;
    color: ${INK};
    margin: 0 0 10px;
  }
`;

/* ---------- 標誌 ---------- */

const Plate = styled.div`
  background: #ffffff;
  border: 1px solid ${LINE};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(28px, 6vw, 64px);

  img {
    width: 100%;
    max-width: ${({ $max }) => $max || 360}px;
    height: auto;
    display: block;
  }
`;

const Spec = styled.div`
  display: grid;
  gap: 6px;
  margin-top: 14px;
  font-size: 0.82rem;
  color: ${FAINT};
`;

const UsageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
  display: grid;
  gap: 10px;

  li {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 10px;
    align-items: baseline;
    font-size: 0.9rem;
    color: ${FAINT};
  }

  li b {
    font-family: ${HAN};
    font-weight: 500;
    color: ${MUTED};
  }
`;

const Species = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 28px;
  text-align: center;

  span {
    font-size: 0.66rem;
    letter-spacing: 0.1em;
    color: #b0b0b0;
    font-weight: 500;
  }

  img {
    width: 100%;
    max-width: 120px;
    height: auto;
    margin: 0 auto 10px;
    display: block;
  }
`;

/* ---------- 色彩 ---------- */

const Swatches = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${DESKTOP} {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;

const Swatch = styled.div`
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${LINE};
`;

const Band = styled.div`
  background: ${({ $bg }) => $bg};
  color: ${({ $fg }) => $fg};
  padding: 16px 18px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  min-height: ${({ $tall }) => ($tall ? "132px" : "auto")};
  align-items: ${({ $tall }) => ($tall ? "flex-start" : "baseline")};

  code {
    font-family: ${SANS};
    font-size: 0.9rem;
    letter-spacing: 0.02em;
  }

  em {
    font-family: ${DISPLAY};
    font-style: normal;
    font-weight: 300;
    font-size: 1.5rem;
  }
`;

const BandMain = styled.div`
  background: ${({ $bg }) => $bg};
  color: #fbfbfb;
  padding: 22px 18px 26px;

  code {
    font-family: ${SANS};
    font-size: 0.9rem;
    display: block;
    margin-bottom: 54px;
  }

  strong {
    font-family: ${HAN};
    font-weight: 400;
    font-size: 1.12rem;
    display: block;
  }

  em {
    font-family: ${DISPLAY};
    font-style: normal;
    font-weight: 300;
    font-size: 1.7rem;
    display: block;
    line-height: 1.2;
  }
`;

/* ---------- 字體 ---------- */

const Specimen = styled.div`
  border-bottom: 1px solid ${LINE};
  padding: 26px 0;

  small {
    font-size: 0.82rem;
    font-weight: 500;
    color: ${INK};
    display: block;
    margin-bottom: 12px;
  }

  p {
    margin: 0;
    font-size: clamp(30px, 6vw, 60px);
    line-height: 1.14;
    color: ${INK};
    font-family: ${({ $ff }) => $ff};
  }
`;

const ScaleRow = styled.div`
  display: grid;
  gap: 4px;
  padding: 14px 0;
  border-bottom: 1px solid ${LINE};
  font-size: 0.8rem;
  font-weight: 500;
  color: ${MUTED};

  ${DESKTOP} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Pending = styled.div`
  border: 1px dashed ${LINE};
  border-radius: 14px;
  padding: 28px 24px;
  color: ${FAINT};
  font-size: 0.92rem;
  line-height: 1.8;

  b {
    color: ${MUTED};
    font-weight: 600;
  }
`;

/* ---------- 頁尾 ---------- */

const Foot = styled.footer`
  border-top: 1px solid ${LINE};
  margin-top: 120px;
  padding: 56px 20px 72px;
  text-align: center;

  img {
    width: min(240px, 60vw);
    height: auto;
    margin: 0 auto 30px;
    display: block;
  }
`;

const FootLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 26px;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 500;

  a {
    color: ${INK};
    text-decoration: none;
  }

  a:hover {
    color: ${DEEP};
  }
`;

const Colophon = styled.p`
  margin: 34px 0 0;
  font-size: 0.78rem;
  color: ${FAINT};
`;

const linkish = css`
  color: ${FAINT};
  text-decoration: none;

  &:hover {
    color: ${INK};
  }
`;

const BackLink = styled.a`
  ${linkish}
  font-size: 0.85rem;
`;

/* ================================================================== */

const BeMyHooman = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const previous = document.title;
    document.title = "Be my Hooman — Brand Guidelines";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <Page>
      <Sidebar>
        <BarTop>
          <img src={`${A}eb8a678bbac249d13e8a8129dfa0e8de3250ba47.svg`} alt="Be my Hooman" />
          <MenuButton type="button" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen}>
            {menuOpen ? "Close" : "Menu"}
          </MenuButton>
        </BarTop>

        <NavList $open={menuOpen}>
          {NAV.map((n) => (
            <NavLink key={n.id} href={`#${n.id}`} onClick={() => setMenuOpen(false)}>
              {n.label}
              <span>{n.num}</span>
            </NavLink>
          ))}
        </NavList>

        <NavFoot $open={menuOpen}>
          <a href="#footer">Download Kit</a>
          <a href="#footer">Contact Us</a>
        </NavFoot>
      </Sidebar>

      <Cover>
        <img src={`${A}e3647e7087e57dd0838fab2b8d34d007cad4c98c.svg`} alt="Be my Hooman logo" />
      </Cover>

      {/* ---- 前言 ---- */}
      <Section>
        <Cols>
          <Display>Brand Guidelines</Display>
          <div>
            {INTRO.zh.map((t) => (
              <Zh key={t}>{t}</Zh>
            ))}
            <div style={{ height: 18 }} />
            {INTRO.en.map((t) => (
              <En key={t}>{t}</En>
            ))}
          </div>
        </Cols>
      </Section>

      {/* ---- 目錄 ---- */}
      <Section $rule>
        <Cols>
          <Minor as="h2" $big>Contents</Minor>
          <div>
            {CONTENTS.map((c, i) => (
              <ContentRow key={c.num} href={`#${NAV[i].id}`}>
                <em>{c.num}</em>
                <span>{c.title}</span>
                <small>{c.kind}</small>
              </ContentRow>
            ))}
          </div>
        </Cols>
      </Section>

      {/* ---- 01 Brand Introduction ---- */}
      <Section id="brand-strategy" $rule>
        <Cols>
          <div>
            <SectionNo>
              <span>01</span>
              Brand Introduction
            </SectionNo>
            <En style={{ marginTop: 24 }}>{BRAND.tagline}</En>
          </div>
          <div>
            {BRAND.zh.map((b, i) => (
              <Zh key={i} $ink>
                {b.lead ? <Lead>{b.lead}</Lead> : null}
                {b.text}
                {b.em ? <b>{b.em}</b> : null}
                {b.tail}
              </Zh>
            ))}
            <div style={{ height: 22 }} />
            {BRAND.en.map((b, i) => (
              <En key={i} $ink>
                {b.lead ? <Lead>{b.lead}</Lead> : null}
                {b.lead ? " " : null}
                {b.text}
                {b.em ? <b>{b.em}</b> : null}
                {b.tail}
              </En>
            ))}
          </div>
        </Cols>

        <Divider />

        <Pillars>
          {PILLARS.map((p) => (
            <Pillar key={p.title} $bg={p.chip}>
              <h4>{p.title}</h4>
              <PillarKey>
                {p.zhLead}
                <b>{p.zhKey}</b>
              </PillarKey>
              <Tiny>{p.en}</Tiny>
              <PillarKey style={{ fontSize: "0.86rem", lineHeight: 1.7 }}>
                {p.zhBody.map((l) => (
                  <React.Fragment key={l}>
                    {l}
                    <br />
                  </React.Fragment>
                ))}
              </PillarKey>
              <Tiny>{p.enBody}</Tiny>
            </Pillar>
          ))}
        </Pillars>
      </Section>

      {/* ---- 02 Personality ---- */}
      <Section id="personality" $rule>
        <Cols>
          <SectionNo>
            <span>02</span>
            Personality
          </SectionNo>
          <div>
            {PERSONALITY.zh.map((t) => (
              <Zh key={t}>{t}</Zh>
            ))}
            <div style={{ height: 18 }} />
            {PERSONALITY.en.map((t) => (
              <En key={t}>{t}</En>
            ))}
          </div>
        </Cols>

        <Divider />

        <Traits>
          {PERSONALITY.traits.map((t) => (
            <Trait key={t.word} $c={t.color}>
              {t.word}
            </Trait>
          ))}
        </Traits>

        <Divider />

        <Cols>
          <Minor as="h3">Tone &amp; Voice</Minor>
          <div>
            {PERSONALITY.statements.map((s) => (
              <Statement key={s.label}>
                <h5>{s.label}</h5>
                <Zh>{s.zh}</Zh>
                <En>{s.en}</En>
              </Statement>
            ))}
          </div>
        </Cols>
      </Section>

      {/* ---- 03 Logo ---- */}
      <Section id="logo" $rule>
        <Cols>
          <SectionNo>
            <span>03</span>
            Logo
          </SectionNo>
          <div>
            {LOGO.zh.map((t) => (
              <Zh key={t}>{t}</Zh>
            ))}
            <div style={{ height: 18 }} />
            {LOGO.en.map((t) => (
              <En key={t}>{t}</En>
            ))}
          </div>
        </Cols>

        {LOGO.lockups.map((l) => (
          <React.Fragment key={l.name}>
            <Divider />
            <Cols>
              <div>
                <Minor as="h3">{l.name}</Minor>
                <Minor as="h4" $muted style={{ fontSize: "1rem", marginBottom: 10 }}>
                  {LOGO.clearSpace.enTitle}
                  <span style={{ fontFamily: HAN, marginLeft: 8, fontSize: "0.9rem" }}>
                    {LOGO.clearSpace.zhTitle}
                  </span>
                </Minor>
                <Zh style={{ fontSize: "0.86rem" }}>{LOGO.clearSpace.zh}</Zh>
                <En style={{ fontSize: "0.86rem" }}>{LOGO.clearSpace.en}</En>
                {l.usage.length ? (
                  <UsageList>
                    {l.usage.map(([zh, en]) => (
                      <li key={en}>
                        <b>{zh}</b>
                        {en}
                      </li>
                    ))}
                  </UsageList>
                ) : null}
                {l.note ? (
                  <Zh style={{ color: DEEP, marginTop: 14, fontSize: "0.86rem" }}>{l.note}</Zh>
                ) : null}
              </div>
              <div>
                <Plate $max={l.ratio > 3 ? 440 : 360}>
                  <img src={`${A}${l.img}`} alt={`${l.name} — Be my Hooman`} loading="lazy" />
                </Plate>
                <Spec>
                  <span>Clear space · {l.clear}</span>
                </Spec>
              </div>
            </Cols>
          </React.Fragment>
        ))}

        <Divider />

        <Cols>
          <div>
            <Minor as="h3">{LOGO.mascot.enTitle}</Minor>
            <Zh $ink style={{ fontWeight: 700, marginBottom: 16 }}>
              {LOGO.mascot.zhTitle}
            </Zh>
            <Plate $max={150} style={{ marginBottom: 18 }}>
              <img
                src={`${A}ce4a97463646b05f7d9fe05e69dd9a5235ba05fc.svg`}
                alt="Be my Hooman character mark"
                loading="lazy"
              />
            </Plate>
            <Species>
              {LOGO.mascot.species.map((s) => (
                <div key={s}>
                  <img
                    src={`${A}7ee4bc96cbbd7f5ae5e5e5201f1290e80c1d8649.svg`}
                    alt={`${s} character mark`}
                    loading="lazy"
                  />
                  <span>{s}</span>
                </div>
              ))}
            </Species>
          </div>
          <div>
            {LOGO.mascot.zh.map((t) => (
              <Zh key={t}>{t}</Zh>
            ))}
            <div style={{ height: 18 }} />
            {LOGO.mascot.en.map((t) => (
              <En key={t}>{t}</En>
            ))}
          </div>
        </Cols>
      </Section>

      {/* ---- 04 Color ---- */}
      <Section id="color" $rule>
        <Cols>
          <SectionNo $accent="#F45F00">
            <span>04</span>
            Color
          </SectionNo>
          <div>
            {COLOR.zh.map((t) => (
              <Zh key={t}>{t}</Zh>
            ))}
          </div>
        </Cols>

        <Divider />

        <Minor as="h3" style={{ marginBottom: 22 }}>
          Color Variations
        </Minor>
        <Swatches>
          {COLOR.swatches.map((s) => (
            <Swatch key={s.en}>
              <Band $bg={s.dark} $fg={PAPER} $tall>
                <code>{s.dark}</code>
                <em>Dark</em>
              </Band>
              <BandMain $bg={s.base}>
                <code>{s.base}</code>
                <strong>{s.zh}</strong>
                <em>{s.en}</em>
              </BandMain>
              <Band $bg={s.light} $fg={s.dark} $tall>
                <code>{s.light}</code>
                <em>Light</em>
              </Band>
            </Swatch>
          ))}
        </Swatches>
      </Section>

      {/* ---- 05 Typography ---- */}
      <Section id="typography" $rule>
        <Cols>
          <SectionNo $accent="#F45F00">
            <span>05</span>
            Typography
          </SectionNo>
          <div>
            {TYPE.faces.map((f) => (
              <Specimen key={f.name} $ff={f.css}>
                <small>{f.role}</small>
                <p>{f.name}</p>
              </Specimen>
            ))}
            <div style={{ marginTop: 34 }}>
              {TYPE.scale.map((r) => (
                <ScaleRow key={r.size}>
                  <span>{r.size}</span>
                  <span>{r.leading}</span>
                  <span>{r.tracking}</span>
                </ScaleRow>
              ))}
            </div>
          </div>
        </Cols>
      </Section>

      {/* ---- 06 Art Direction ---- */}
      <Section id="art-direction" $rule>
        <Cols>
          <SectionNo $accent="#F45F00">
            <span>06</span>
            Art Direction
          </SectionNo>
          <Pending>
            <b>這一節待補。</b>
            <br />
            線上版這裡的說明文字與配圖還是範本原本的 placeholder（講的是 “Redo”
            這個品牌與財務對帳，配圖是筆電辦公的素材照），所以沒有搬過來。
            把 Be my Hooman 自己的攝影／插畫方向給我，我補上。
          </Pending>
        </Cols>
      </Section>

      <Foot id="footer">
        <img
          src={`${A}9caa75353a9079a70d7f667b05b9a47bd0028b57.svg`}
          alt="Be my Hooman"
          loading="lazy"
        />
        <FootLinks>
          <a href="#footer">Download Kit</a>
          <a href="#footer">Contact Us</a>
          <a href="#top">Back to the top</a>
        </FootLinks>
        <Colophon>© Be My Hooman · All Rights Reserved</Colophon>
        <Colophon style={{ marginTop: 18 }}>
          <BackLink href="/work">← Back to work</BackLink>
        </Colophon>
      </Foot>
    </Page>
  );
};

export default BeMyHooman;
