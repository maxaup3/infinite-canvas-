// 双模式颜色规范 - 基于 Figma 设计稿

// 品牌色
export const BrandColors = {
  main: '#38BDFF',
  container: 'rgba(56, 189, 255, 0.10)',
  green: '#21D087',
  vip: '#B2945C',
  vipContainer: '#F0EADE',
  red: '#FF4A4A',
  yellow: '#E5AB00',
  error: '#D03050',
  errorContainer: 'rgba(208, 48, 80, 0.10)',
  success: '#18A058',
  successContainer: 'rgba(24, 160, 88, 0.10)',
};

// 获取主题颜色的工具函数
export const getThemeColors = (isLight: boolean) => ({
  // 文字颜色
  text: {
    primary: isLight ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.85)',
    secondary: isLight ? 'rgba(0, 0, 0, 0.65)' : 'rgba(255, 255, 255, 0.65)',
    tertiary: isLight ? 'rgba(0, 0, 0, 0.45)' : 'rgba(255, 255, 255, 0.45)',
    disabled: isLight ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.30)',
    inverse: isLight ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.25)',
    anti: isLight ? '#FFFFFF' : '#FFFFFF',
  },

  // 背景颜色
  background: {
    primary: isLight ? '#FFFFFF' : '#181818',
    onPrimary: isLight ? '#F5F5F5' : '#2A2A2A',
    secondary: isLight ? '#F5F5F5' : '#3B3B3B',
    onSecondary: isLight ? '#FFFFFF' : '#3E3E3E',
    tertiary: isLight ? '#FFFFFF' : '#3C3C3C',
    onTertiary: isLight ? '#FFFFFF' : '#181818',
  },

  // 边框颜色
  stroke: {
    primary: isLight ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
    secondary: isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.12)',
  },

  // 遮罩颜色
  mask: {
    default: isLight ? 'rgba(0, 0, 0, 0.65)' : 'rgba(0, 0, 0, 0.60)',
    button: isLight ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.72)',
    image: isLight ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.45)',
    hover: isLight ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.07)',
    pressed: isLight ? 'rgba(0, 0, 0, 0.04)' : 'rgba(0, 0, 0, 0.08)',
  },

  // 填充颜色
  fill: {
    default: isLight ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.04)',
    light: isLight ? 'rgba(0, 0, 0, 0.02)' : 'rgba(255, 255, 255, 0.02)',
    tooltip: isLight ? '#181818' : '#3C3C3C',
  },

  // 交互状态
  interactive: {
    hover: isLight ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
    active: isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.12)',
    focus: isLight ? 'rgba(56, 189, 255, 0.2)' : 'rgba(56, 189, 255, 0.3)',
  },
});

// 导出类型
export type ThemeColors = ReturnType<typeof getThemeColors>;
