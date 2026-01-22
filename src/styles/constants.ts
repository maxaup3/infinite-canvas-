// 设计系统样式常量 - 基于Figma设计稿

export const Colors = {
  // 背景色
  background: {
    primary: '#181818',      // 主背景
    secondary: '#2A2A2A',    // 卡片背景
    tertiary: 'rgba(255, 255, 255, 0.08)',  // 次要背景
    hover: 'rgba(255, 255, 255, 0.1)',     // 悬停背景
  },

  // 文字颜色
  text: {
    primary: 'rgba(255, 255, 255, 0.85)',   // 主要文字
    secondary: 'rgba(255, 255, 255, 0.45)', // 次要文字
    tertiary: 'rgba(255, 255, 255, 0.35)',  // 第三级文字
    disabled: 'rgba(255, 255, 255, 0.3)',   // 禁用文字
  },

  // 边框颜色
  border: {
    default: 'rgba(255, 255, 255, 0.12)',    // 默认边框
    hover: 'rgba(255, 255, 255, 0.2)',      // 悬停边框
    active: 'rgba(56, 189, 255, 0.5)',      // 激活边框
  },

  // 主题色
  theme: {
    primary: '#38BDFF',                      // 主色
    primaryLight: 'rgba(56, 189, 255, 0.15)', // 主色浅色
    primaryDark: 'rgba(56, 189, 255, 0.3)',  // 主色深色
    accent: '#1677FF',                       // 强调色
    accentGradient: 'linear-gradient(90deg, #1677FF 0%, #38BDFF 100%)', // 渐变
  },

  // 状态色
  status: {
    success: 'rgba(34, 197, 94, 0.15)',
    error: 'rgba(239, 68, 68, 0.15)',
    warning: 'rgba(251, 191, 36, 0.15)',
  },
};

export const Typography = {
  // 中文字体
  chinese: {
    fontFamily: 'PingFang SC, -apple-system, sans-serif',
    fontWeight: 500,
    fontSize: {
      small: 12,
      medium: 14,
      large: 16,
    },
  },
  
  // 英文标题字体
  englishHeading: {
    fontFamily: 'SF Pro Display, -apple-system, sans-serif',
    fontWeight: 600,
    fontSize: {
      small: 14,
      medium: 16,
      large: 20,
    },
  },
  
  // 英文正文字体
  englishBody: {
    fontFamily: 'Roboto, SF Pro Display, -apple-system, sans-serif',
    fontWeight: 400,
    fontSize: {
      small: 12,
      medium: 14,
      large: 16,
    },
  },
  
  // 行高
  lineHeight: {
    tight: '1.2em',
    normal: '1.5em',
    relaxed: '1.8em',
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

export const BorderRadius = {
  small: 4,
  medium: 8,
  large: 10,
  xlarge: 12,
  round: 100, // 圆形
};

export const Shadows = {
  small: '0px 2px 4px rgba(0, 0, 0, 0.3)',
  medium: '0px 4px 12px rgba(0, 0, 0, 0.3)',
  large: '0px 8px 24px rgba(0, 0, 0, 0.4)',
  glow: '0px 4px 16px rgba(56, 189, 255, 0.3)',
};

export const Transitions = {
  fast: '0.15s ease-in-out',
  normal: '0.2s ease-in-out',
  slow: '0.3s ease-in-out',
};

