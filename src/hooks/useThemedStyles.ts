/**
 * 统一的主题样式 Hook
 * 减少各组件中重复的主题判断和颜色定义代码
 */
import { useMemo } from 'react';
import { useTheme, isLightTheme as checkIsLight, getThemeStyles } from '../contexts/ThemeContext';

// 通用颜色定义
export interface ThemeColors {
  // 背景
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    hover: string;
    active: string;
  };
  // 文字
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
  };
  // 边框
  border: {
    primary: string;
    secondary: string;
    active: string;
  };
  // 交互
  interactive: {
    hover: string;
    active: string;
  };
  // 阴影
  shadow: {
    small: string;
    medium: string;
    large: string;
  };
}

// 获取主题颜色
const getThemeColors = (isLight: boolean): ThemeColors => {
  if (isLight) {
    return {
      background: {
        primary: '#FFFFFF',
        secondary: '#F5F5F5',
        tertiary: 'rgba(0, 0, 0, 0.04)',
        hover: 'rgba(0, 0, 0, 0.05)',
        active: 'rgba(56, 189, 255, 0.15)',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.85)',
        secondary: 'rgba(0, 0, 0, 0.65)',
        tertiary: 'rgba(0, 0, 0, 0.45)',
        accent: '#1A8BC9',
      },
      border: {
        primary: 'rgba(0, 0, 0, 0.08)',
        secondary: 'rgba(0, 0, 0, 0.12)',
        active: 'rgba(56, 189, 255, 0.4)',
      },
      interactive: {
        hover: 'rgba(0, 0, 0, 0.05)',
        active: 'rgba(0, 0, 0, 0.08)',
      },
      shadow: {
        small: '0 2px 8px rgba(0, 0, 0, 0.08)',
        medium: '0 4px 16px rgba(0, 0, 0, 0.1)',
        large: '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
    };
  }

  // 暗色主题
  return {
    background: {
      primary: '#1E1E1E',
      secondary: '#2A2A2A',
      tertiary: 'rgba(255, 255, 255, 0.08)',
      hover: 'rgba(255, 255, 255, 0.08)',
      active: 'rgba(56, 189, 255, 0.2)',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.9)',
      secondary: 'rgba(255, 255, 255, 0.65)',
      tertiary: 'rgba(255, 255, 255, 0.45)',
      accent: '#38BDFF',
    },
    border: {
      primary: 'rgba(255, 255, 255, 0.08)',
      secondary: 'rgba(255, 255, 255, 0.12)',
      active: 'rgba(56, 189, 255, 0.4)',
    },
    interactive: {
      hover: 'rgba(255, 255, 255, 0.08)',
      active: 'rgba(255, 255, 255, 0.12)',
    },
    shadow: {
      small: '0 2px 8px rgba(0, 0, 0, 0.2)',
      medium: '0 4px 16px rgba(0, 0, 0, 0.3)',
      large: '0 8px 32px rgba(0, 0, 0, 0.4)',
    },
  };
};

// 图标滤镜 - 用于将黑色图标适配不同主题
export const getIconFilter = (isLight: boolean): string => {
  return isLight ? 'brightness(0.2)' : 'brightness(0) invert(1)';
};

// 带不透明度的图标滤镜
export const getIconFilterWithOpacity = (isLight: boolean, opacity: number = 0.85): string => {
  if (isLight) {
    return `brightness(0.2) opacity(${opacity})`;
  }
  return `brightness(0) invert(1) opacity(${opacity})`;
};

/**
 * 主题样式 Hook
 * 返回当前主题的所有样式信息
 */
export const useThemedStyles = () => {
  const { themeMode } = useTheme();

  const isLight = useMemo(() => checkIsLight(themeMode), [themeMode]);
  const colors = useMemo(() => getThemeColors(isLight), [isLight]);
  const theme = useMemo(() => getThemeStyles(themeMode), [themeMode]);
  const iconFilter = useMemo(() => getIconFilter(isLight), [isLight]);

  return {
    isLight,
    colors,
    theme,
    iconFilter,
    themeMode,
  };
};

/**
 * 简化版 - 只返回是否为亮色主题
 */
export const useIsLightTheme = (): boolean => {
  const { themeMode } = useTheme();
  return useMemo(() => checkIsLight(themeMode), [themeMode]);
};

export default useThemedStyles;
