/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export type LangKey = 'en' | 'zh';

export interface I18nState {
  lang: LangKey;
  setLang: (lang: LangKey) => void;
  t: (key: string) => string;
}

export const translations: Record<LangKey, Record<string, string>> = {
  en: {
    navLegacy: 'THE LEGACY',
    navMusic: 'MUSIC',
    navCareer: 'CAREER',
    navPersonal: 'PERSONAL',
    navFanzone: 'FAN ZONE',
    navLanguage: '中文',

    heroTagline: 'The Gentleman of R&B',
    heroDescription: "Shaffer Chimere Smith — Better known as Ne-Yo. Three-time Grammy winner. Master songwriter. The architect of a decade's hits.",
    heroScroll: 'Scroll to explore',

    musicTitle: 'THE MUSIC.',
    musicSubtitle: 'A discography defined by elegance and soul.',
    musicSectionTitle: 'Listen on Spotify',
    musicActionHint: 'Click to open music player',
    musicPlayButton: '▶ Play album',

    performanceTitle: 'PERFORMANCE',
    performanceSubtitle: 'Live Experience',
    hoverAdvance: 'Hover to Advance',

    fashionLabel: 'Fashion & Style',
    fashionHeadline: 'More than music — it’s a personal brand.',
    fashionDescription: 'Ne-Yo’s gentlemanly aesthetic is more than stagewear. His suits, hats and monochrome portraits are a vital part of the story that people often overlook.',
    fashionDiscover: 'Discover',

    fanzoneTitle: 'FAN ZONE.',
    fanzoneSubtitle: 'Interact with the Legacy of Ne-Yo',
    lyricsLabTitle: 'The Lyrics Lab',
    lyricsLabDescription: 'Step into the vault. Describe a mood or a story, and let our AI-powered ghostwriter channel Ne-Yo’s signature songwriting style to craft a verse for you.',
    lyricsPlaceholder: 'e.g. A rainy night with a fedora...',
    ghostVerse: 'Ghostwritten Verse',
    waitingInspiration: 'Waiting for your inspiration',
    footerCopyright: '© 2026 THE GENTLEMAN’S LEGACY. ALL RIGHTS RESERVED.',
    footerInstagram: 'Instagram',
    footerSpotify: 'Spotify',
    footerTwitter: 'Twitter',
    careerHeadline: 'Beyond',
    careerSubheadline: 'The Mic',
    careerItem1Year: '2006 - PRESENT',
    careerItem1Title: 'Grammy Laurels',
    careerItem1Subtitle: 'Recognition of Excellence',
    careerItem1Description: 'Winner of 3 Grammy Awards and 15 nominations. His signature songwriting for others changed the landscape of late 2000s pop.',
    careerItem2Year: '2007 - PRESENT',
    careerItem2Title: 'Silver Screen',
    careerItem2Subtitle: 'The Actor\'s Journey',
    careerItem2Description: 'Starred in cult classics like Stomp the Yard and Save the Last Dance 2, and historical drama Red Tails.',
    careerItem3Year: 'THE GHOSTWRITER',
    careerItem3Title: 'Songwriting',
    careerItem3Subtitle: 'The Pen behind Irreplaceable',
    careerItem3Description: 'Wrote massive hits for Beyoncé, Rihanna (Unfaithful), and more. A true master of emotional R&B narratives.',
    careerImageAlt: 'Performing',
    careerCard1Title: 'Personal Life',
    careerCard1Description: 'Focus on family and philanthropy through the Composite Foundation.',
    careerCard2Description: 'Years of dominating the R&B charts globally.',
    perfItem1Title: 'Live at Madison Square Garden',
    perfItem1Desc: 'Iconic performance of "Closer"',
    perfItem1Cat: 'Live Clips',
    perfItem2Title: 'World Tour 2024',
    perfItem2Desc: 'Behind the scenes in Tokyo',
    perfItem2Cat: 'Tour Photos',
    perfItem3Title: 'Choreography Breakdown',
    perfItem3Desc: '"Miss Independent" dance routine',
    perfItem3Cat: 'Choreography Moments',
    perfItem4Title: 'Iconic Stage Costumes',
    perfItem4Desc: 'Gentleman aesthetic evolution',
    perfItem4Cat: 'Stage Costumes',
    perfItem5Title: 'The Gentleman Documentary',
    perfItem5Desc: '15-year journey in R&B',
    perfItem5Cat: 'Concert Documentaries'  },
  zh: {
    navLegacy: '传承',
    navMusic: '音乐',
    navCareer: '职业',
    navPersonal: '个人',
    navFanzone: '粉丝区',
    navLanguage: 'EN',

    heroTagline: 'R&B绅士',
    heroDescription: '沙弗·奇梅尔·史密斯——更为人熟知的名字是尼欧（Ne-Yo）。三次格莱美得主。歌曲创作大师。十年流行作品的缔造者。',
    heroScroll: '向下探索',

    musicTitle: '音乐作品',
    musicSubtitle: '一种优雅与灵魂交织的唱片作品集。',
    musicSectionTitle: 'Spotify收听',
    musicActionHint: '点击打开播放器',
    musicPlayButton: '▶ 播放专辑',

    performanceTitle: '表演',
    performanceSubtitle: '现场体验',
    hoverAdvance: '悬停切换',

    fashionLabel: '时尚风格',
    fashionHeadline: '不仅是音乐，而是一种个人品牌。',
    fashionDescription: '尼欧的绅士美学不仅仅是舞台造型。他的西装、礼帽和黑白人像是不可忽视的品牌符号。',
    fashionDiscover: '探索',

    fanzoneTitle: '粉丝空间.',
    fanzoneSubtitle: '与尼欧传奇互动',
    lyricsLabTitle: '歌词实验室',
    lyricsLabDescription: '进入创作密室。描述一个情绪或故事，让我们的 AI 代笔发挥尼欧标志性的 R&B 风格，为你写一段歌词。',
    lyricsPlaceholder: '例如：带着礼帽的雨夜...',
    ghostVerse: '定制歌词',
    waitingInspiration: '等待你的灵感',
    footerCopyright: '© 2026 绅士传奇版权所有。',
    footerInstagram: 'Instagram',
    footerSpotify: 'Spotify',
    footerTwitter: 'Twitter',
    careerHeadline: '超越',
    careerSubheadline: '麦克风',
    careerItem1Year: '2006 - 现在',
    careerItem1Title: '格莱美荣耀',
    careerItem1Subtitle: '卓越认可',
    careerItem1Description: '获得3座格莱美奖和15次提名。他为他人创作的经典作品改变了2000年代末流行乐坛。',
    careerItem2Year: '2007 - 现在',
    careerItem2Title: '银幕之旅',
    careerItem2Subtitle: '演员之路',
    careerItem2Description: '出演了《舞动真我》、《最后舞蹈2》等经典，以及历史剧《红尾》。',
    careerItem3Year: '鬼才词曲',
    careerItem3Title: '歌曲创作',
    careerItem3Subtitle: '《不可替代》背后的笔',
    careerItem3Description: '为碧昂丝、蕾哈娜（《不忠》）等创作了大量热门作品。真正掌握情感R&B叙事。',
    careerImageAlt: '表演中',
    careerCard1Title: '个人生活',
    careerCard1Description: '通过 Composite 基金会关注家庭与慈善。',
    careerCard2Description: '多年占据全球 R&B 榜单。',
    perfItem1Title: '麦迪逊广场花园演唱会',
    perfItem1Desc: '《靠近我》标志性表演',
    perfItem1Cat: '现场片段',
    perfItem2Title: '2024 世界巡演',
    perfItem2Desc: '东京幕后花絮',
    perfItem2Cat: '巡演照片',
    perfItem3Title: '舞蹈编排分解',
    perfItem3Desc: '《独立女性》舞蹈套路',
    perfItem3Cat: '编舞时刻',
    perfItem4Title: '标志性舞台服装',
    perfItem4Desc: '绅士美学的演变',
    perfItem4Cat: '舞台造型',
    perfItem5Title: '绅士纪录片',
    perfItem5Desc: 'R&B 的 15 年之旅',
    perfItem5Cat: '音乐会纪录片'  }
};

export const I18nContext = React.createContext<I18nState>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key
});
