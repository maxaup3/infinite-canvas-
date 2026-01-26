/**
 * 统一的主题样式 Hook
 * 减少各组件中重复的主题判断和颜色定义代码
 */
import { useMemo } from 'react';
import { useTheme, isLightTheme as checkIsLight, getThemeStyles } from '../contexts/ThemeContext';
import { getThemeColors, ThemeColors } from '../styles/colors';

export type { ThemeColors };

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
