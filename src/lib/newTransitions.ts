/**
 * 新的过渡动效配置 - 更惊艳的版本
 * 基于 FLIP、Shared Layout 等高级技术
 */

export type NewTransitionVariant = 'morph' | 'curtain' | 'zoom' | 'ink' | 'fold';

// ============ 方案 1: Dialog Morph（对话框变形）============
// 核心：使用 layoutId 实现共享元素过渡
// 对话框从首页中心"生长"到画布底部

export const morphTransition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96] as const,
};

// 首页其他内容淡出
export const morphPageExit = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

// 画布内容淡入
export const morphPageEnter = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, delay: 0.2, ease: 'easeIn' },
  },
};

// ============ 方案 2: Curtain Reveal（幕布揭开）============
// 核心：内容向左右分离，像舞台幕布

export const curtainLeftVariants = {
  initial: { x: 0, opacity: 1 },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] as const },
  },
};

export const curtainRightVariants = {
  initial: { x: 0, opacity: 1 },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] as const },
  },
};

export const curtainRevealVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] as const },
  },
};

// ============ 方案 3: Zoom Portal（缩放传送门）============
// 核心：对话框放大充满屏幕，然后缩小到底部

export const zoomPortalDialogVariants = {
  initial: { scale: 1 },
  zooming: {
    scale: 10,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

export const zoomPortalPageVariants = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

// ============ 方案 4: Ink Spread（墨水扩散）============
// 核心：从对话框中心扩散圆形蒙版

export const inkSpreadVariants = {
  initial: {
    clipPath: 'circle(0% at 50% 50%)',
  },
  spreading: {
    clipPath: 'circle(150% at 50% 50%)',
    transition: {
      duration: 0.7,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

// ============ 方案 5: Page Fold（翻页折叠）============
// 核心：3D 翻页效果

export const pageFoldExitVariants = {
  initial: {
    rotateX: 0,
    transformOrigin: 'top center',
  },
  exit: {
    rotateX: -90,
    transformOrigin: 'top center',
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

export const pageFoldEnterVariants = {
  initial: {
    rotateX: 90,
    transformOrigin: 'bottom center',
  },
  animate: {
    rotateX: 0,
    transformOrigin: 'bottom center',
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

// ============ 工具函数 ============

export const getTransitionDuration = (variant: NewTransitionVariant): number => {
  const durations: Record<NewTransitionVariant, number> = {
    morph: 500,
    curtain: 600,
    zoom: 400,
    ink: 700,
    fold: 700,
  };
  return durations[variant];
};
