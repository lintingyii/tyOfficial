/* Be my Hooman 品牌規範書的內容。

   文字照 https://be-my-hooman.figma.site/ 的線上版逐字抄錄，中英文並陳。

   ⚠️ 原稿裡「05 Typography」「06 Art Direction」與 02 的 Sample Copy，內文還是
   範本沒換掉的 placeholder —— 講的是 "Redo" 這個品牌、銀行錯帳與 financial
   corrections，配圖也是辦公室素材照。那幾段沒有搬過來，相關區塊留成待補。 */

export const A = "/be-my-hooman/assets/";

export const NAV = [
  { id: "brand-strategy", num: "01", label: "Brand Strategy" },
  { id: "personality", num: "02", label: "Personality" },
  { id: "logo", num: "03", label: "Logo" },
  { id: "color", num: "04", label: "Color" },
  { id: "typography", num: "05", label: "Typography" },
  { id: "art-direction", num: "06", label: "Art Direction" },
];

export const CONTENTS = [
  { num: "01", title: "Brand Introduction", kind: "Mind Identity" },
  { num: "02", title: "Personality", kind: "Mind Identity" },
  { num: "03", title: "Logo", kind: "Visual Identity" },
  { num: "04", title: "Color", kind: "Visual Identity" },
  { num: "05", title: "Typography", kind: "Visual Identity" },
  { num: "06", title: "Art Direction", kind: "Visual Identity" },
];

export const INTRO = {
  zh: [
    "本指南定義了 Be my Hooman 的視覺語言、設計風格與核心原則，以建立一致且溫暖的品牌體驗，不論應用於何種媒介或情境。",
    "Be my Hooman 的核心圍繞著陪伴、連結與歸屬，重新詮釋人與動物之間的關係。透過柔和且富有情感的視覺系統，本指南建立了品牌識別的基礎規範，涵蓋標誌系統、色彩、字體、吉祥物與延伸應用。",
  ],
  en: [
    "This guide defines the visual language, design style, and core principles of Be my Hooman, creating a warm and consistent brand experience across all platforms and applications.",
    "At its core, Be my Hooman is built around companionship, connection, and belonging, reinterpreting the relationship between humans and animals. Through a soft and emotionally driven visual system, this guide establishes the essential foundations of the brand identity, including the logo system, colour, typography, mascot and extended applications.",
  ],
};

export const BRAND = {
  tagline:
    "We help animals find their hooman by turning adoption into a warm and human-centered experience.",
  zh: [
    { lead: "Be my Hooman", text: "是一個專為流浪動物認養打造的資訊整合平台，串聯政府資源與收容所，並結合 AI 技術打造更溫暖且具有互動性的認養體驗，拉近領養者與毛孩之間的距離。" },
    { text: "我們相信，每一隻毛孩都值得被看見、被理解，最終找到真正的夥伴與歸屬。品牌以「人＋動物＝家」為核心概念，重新詮釋傳統認養關係，從「人選擇動物」轉變為傾聽牠們的聲音——「", em: "成為我的家人吧。", tail: "」" },
    { text: "Be my Hooman 不只是品牌名稱，更是一句來自動物視角的邀請。“Hooman” 為 “Human” 的擬人化拼法，常見於寵物視角的網路文化中，以溫柔且俏皮的語氣稱呼人類或主人。品牌以此作為命名，傳達人與動物之間平等、陪伴與情感連結的關係。" },
  ],
  en: [
    { lead: "Be my Hooman", text: "is an integrated adoption platform designed for stray animals, connecting government resources and shelters while using AI technology to create a warmer and more interactive adoption experience that brings adopters and animals closer together." },
    { text: "We believe every animal deserves to be seen, understood, and ultimately find a true companion and a sense of belonging. Built around the idea of “Human + Animal = Home,” the brand reinterprets the traditional adoption relationship by shifting the perspective from humans choosing animals to listening to theirs — “", em: "Be my Hooman.", tail: "”" },
    { text: "More than just a brand name, Be my Hooman is an invitation from the perspective of animals themselves. “Hooman” is a playful variation of “Human,” commonly used in pet-centered internet culture to refer to humans or owners in a warm and affectionate tone. Through this naming, the brand expresses companionship and an equal, emotional connection between humans and animals." },
  ],
};

export const PILLARS = [
  {
    title: "Connection", chip: "#FFECE7",
    zhLead: "始於", zhKey: "連結",
    en: "It’s not just adoption. It’s a connection.",
    zhBody: ["我們不是在選擇一隻動物，", "而是在建立一段關係。"],
    enBody: "We’re not choosing an animal — we’re building a relationship.",
  },
  {
    title: "Belonging", chip: "#FFF0DC",
    zhLead: "彼此", zhKey: "歸屬",
    en: "Home is not a place. It’s where you belong.",
    zhBody: ["家，不只是空間，", "是一種被需要、被等待、被理解的感受。"],
    enBody: "Home is where you are needed and understood.",
  },
  {
    title: "Companionship", chip: "#FBF8E1",
    zhLead: "終於", zhKey: "陪伴",
    en: "It’s not about ownership. It’s about sharing a life.",
    zhBody: ["陪伴不是擁有，", "而是一起生活。"],
    enBody: "It’s not ownership — it’s companionship.",
  },
];

export const PERSONALITY = {
  zh: [
    "Be my Hooman 透過溫柔、真誠且富有親和力的語言，建立人與動物之間更靠近的情感連結。",
    "我們相信，每一次理解，都有機會改變一段生命關係。透過清晰且富有溫度的溝通方式，讓認養資訊與互動體驗變得更輕鬆、更容易接近，也讓「找到家」這件事不再只是流程，而是一段關係的開始。",
    "品牌語氣保持親切、柔和且透明，在傳遞資訊的同時，也保留情感與陪伴感，讓每一次接觸都能感受到 Be my Hooman 所重視的溫暖與連結。",
  ],
  en: [
    "Be my Hooman brings the brand to life through a warm, sincere, and approachable voice that strengthens the emotional connection between humans and animals.",
    "We believe every moment of understanding has the power to change a life. Through clear and thoughtful communication, we make adoption information and interactions feel more accessible, welcoming, and emotionally engaging — transforming the journey of finding a home into the beginning of a meaningful bond.",
    "Our voice remains gentle, transparent, and friendly, balancing clarity with warmth to ensure every touchpoint reflects the companionship and connection at the heart of Be my Hooman.",
  ],
  traits: [
    { word: "Warm", color: "#F2714E" },
    { word: "Trustworthy", color: "#FBAD48" },
    { word: "Companionate", color: "#356670" },
    { word: "Gentle", color: "#A9A151" },
  ],
  statements: [
    { label: "Our Vision: why we exist", zh: "我們希望創造一個讓每一隻流浪動物都能被看見、被理解，並有機會找到屬於自己 Hooman 的世界。", en: "To create a world where every stray animal is seen, understood, and given the chance to find their hooman." },
    { label: "Our Mission: what we do", zh: "透過更有溫度且具互動性的認養體驗，建立領養者與流浪動物之間的連結。", en: "Connect adopters with stray animals through a more compassionate and interactive adoption experience." },
    { label: "Our Promise: how we help", zh: "讓每一次領養體驗都更有溫度、更容易接近，也更重視情感連結。", en: "To make every adoption feel warm, approachable, and emotionally connected." },
  ],
};

export const LOGO = {
  zh: [
    "整體標誌系統以柔和圓潤的曲線構成，傳達親和、溫暖與情感流動。圖形標誌融合人與動物的角色意象，以簡化且富有辨識度的造型呈現，透過圓潤曲線與大面積留白，傳達親和、陪伴與情感連結的視覺感受。",
    "標準字延續相同的曲線語言，結合手寫感與幾何結構，使品牌在溫柔之中保有清晰辨識性。整體視覺不強調權威，而更重視關係與陪伴，象徵人與動物之間平等、靠近且彼此依靠的情感連結。",
  ],
  en: [
    "The logo system is built with soft and rounded curves, conveying warmth, approachability, and emotional flow. The logomark combines human and animal-inspired imagery into a simplified yet recognizable form, using rounded shapes and generous negative space to express companionship, friendliness, and emotional connection.",
    "The wordmark extends the same curved visual language, blending handwritten characteristics with geometric structure to maintain clarity while expressing warmth. Rather than emphasizing authority, the overall identity focuses on relationships and companionship, symbolizing the sense of equality, closeness, and mutual support between humans and animals.",
  ],
  clearSpace: {
    zhTitle: "淨空範圍", enTitle: "Clear Space",
    zh: "在標誌周圍留白，可以凸顯它的重要性。以 X 來定義淨空範圍，在四周至少保留 1 個 X 的空間。",
    en: "The clear space is defined as X. A minimum distance of 1X must be maintained on all sides of the logo.",
  },
  lockups: [
    { name: "Primary Lockup", img: "d85d62736d65b6c12abac82815eab727104a3b41.svg", ratio: 361 / 141, clear: "8X",
      usage: [["官網主頁", "Official website header"], ["正式文件", "Formal documents"], ["對外識別物", "Corporate materials"]] },
    { name: "Secondary Lockup", img: "1751521970d854289738617d647a0e0c724b07a5.svg", ratio: 357 / 203, clear: "6X",
      usage: [["社群平台", "Social media"], ["數位宣傳", "Digital promotions"], ["較活潑的應用場景", "Informal applications"]],
      note: "歡迎為延伸標誌搭配不同吉祥物造型" },
    { name: "LogoType", img: "f4acb17977a170a42d58b3d42da0bbb779c17817.svg", ratio: 448 / 115, clear: "4X", usage: [] },
  ],
  mascot: {
    zhTitle: "吉祥物延伸系統", enTitle: "Character Mark Extension",
    zh: [
      "品牌吉祥物由原始 LOGOMARK 延伸而來，在保留核心結構的基礎上發展為不同動物形象。簡化的幾何特徵與圓潤輪廓確保各版本之間維持視覺一致性。",
      "整體比例由動物造型與臉部區域構成，上方動物輪廓約佔整體高度的 40%，下方臉部圓形約佔 60%，以提升表情辨識度與親和感，同時保留物種特徵。不同角色對應貓、狗與倉鼠等陪伴形象，在比例與結構上保持統一，使品牌在延伸應用時兼具彈性與識別度。",
    ],
    en: [
      "The brand mascot is derived from the original logomark and adapted into different animal forms while retaining its core structure. Simplified geometric features and rounded contours maintain visual consistency.",
      "The upper animal silhouette occupies approximately 40% of the total height, while the lower facial area accounts for 60%, enhancing clarity and approachability. Each variation represents companions such as cat, dog, and hamster, ensuring flexibility while preserving brand recognizability.",
    ],
    species: ["CAT", "DOG", "HAMSTER"],
  },
};

export const COLOR = {
  zh: [
    "Be my Hooman 整體色彩系統以溫暖、親和與情感連結為核心，透過柔和且富有層次的色彩語言，建立具有陪伴感與辨識度的品牌形象。",
    "這些色彩共同構築出溫柔、可信任且富有情感溫度的視覺識別，使 Be my Hooman 在不同媒介與應用情境中，皆能維持一致且容易被記住的品牌體驗。",
  ],
  swatches: [
    { zh: "羈絆藍", en: "Bonding Blue", base: "#8FD7E5", dark: "#356670", light: "#E9F7FA" },
    { zh: "脈動橘", en: "Pulse Coral", base: "#F2714E", dark: "#AE462A", light: "#FFECE7" },
    { zh: "暖光黃", en: "Sunlit Amber", base: "#FBAD48", dark: "#BE8233", light: "#FFF0DC" },
    { zh: "歸屬綠", en: "Nest Olive", base: "#A9A151", dark: "#615D34", light: "#FBF8E1" },
  ],
};

export const TYPE = {
  faces: [
    { role: "Primary Typeface", name: "Rethink Sans", css: "'Rethink Sans', sans-serif" },
    { role: "Secondary Typeface", name: "Hedvig Letters Serif", css: "'Hedvig Letters Serif', serif" },
  ],
  /* 這張表是原稿真正的規格資料（不是 placeholder 文案） */
  scale: [
    { size: "Type sizes > 72pt/px", leading: "100% leading", tracking: "-2% tracking" },
    { size: "Type sizes 55–72pt/px", leading: "110% leading", tracking: "-2% tracking" },
    { size: "Type sizes 24–55pt/px", leading: "120% leading", tracking: "-1% tracking" },
    { size: "Type sizes 0–24pt/px", leading: "130% leading", tracking: "0% tracking" },
  ],
};
