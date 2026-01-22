import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ThemeStyle = 'original' | 'professional' | 'cyberpunk' | 'minimal' | 'runway' | 'anthropic' | 'terminal' | 'neumorphism' | 'garden' | 'spectrum' | 'genz' | 'minimalism' | 'flat' | 'glassmorphism' | 'aurora';

interface ThemeContextType {
  themeStyle: ThemeStyle;
  setThemeStyle: (style: ThemeStyle) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeStyle, setThemeStyle] = useState<ThemeStyle>('original');

  return (
    <ThemeContext.Provider value={{ themeStyle, setThemeStyle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// 辅助函数：判断是否为浅色主题
export const isLightTheme = (style: ThemeStyle): boolean => {
  return style === 'anthropic' || style === 'neumorphism' || style === 'genz' || style === 'minimalism' || style === 'flat';
};

// 主题配置
export const getThemeStyles = (style: ThemeStyle) => {
  switch (style) {
    case 'professional':
      return {
        // 背景
        appBackground: '#0F0F10',
        canvasBackground: '#1A1A1C',

        // 卡片/面板
        panelBackground: 'rgba(255, 255, 255, 0.03)',
        panelBackdrop: 'blur(40px)',
        panelBorder: '1px solid rgba(255, 255, 255, 0.08)',
        panelBorderRadius: '16px',
        panelShadow: '0 24px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',

        // 按钮
        buttonBackground: 'rgba(255, 255, 255, 0.04)',
        buttonBackgroundHover: 'rgba(255, 255, 255, 0.08)',
        buttonBackgroundActive: 'rgba(56, 189, 255, 0.2)',
        buttonBorder: '1px solid rgba(255, 255, 255, 0.06)',
        buttonBorderActive: '1px solid rgba(56, 189, 255, 0.3)',
        buttonBorderRadius: '10px',

        // 文字
        textPrimary: 'rgba(255, 255, 255, 0.95)',
        textSecondary: 'rgba(255, 255, 255, 0.6)',
        textTertiary: 'rgba(255, 255, 255, 0.45)',
        textAccent: '#38BDFF',

        // 输入框
        inputBackground: 'rgba(255, 255, 255, 0.04)',
        inputBackdrop: 'blur(20px)',
        inputBorder: '1px solid rgba(255, 255, 255, 0.06)',
        inputBorderFocus: '1px solid rgba(56, 189, 255, 0.4)',
        inputBorderRadius: '12px',

        // 渐变
        accentGradient: 'linear-gradient(135deg, rgba(56, 189, 255, 0.2), rgba(124, 58, 237, 0.2))',

        // 画布交互元素
        selectionStroke: '#38BDFF',
        selectionFill: 'rgba(56, 189, 255, 0.1)',
        handleFill: '#38BDFF',
        handleStroke: '#FFFFFF',
        gridColor: 'rgba(255, 255, 255, 0.03)',

        // 生成中效果
        generatingBorder: '2px solid rgba(56, 189, 255, 0.4)',
        generatingGlow: '0 0 30px rgba(56, 189, 255, 0.3)',
        generatingPulseColor: 'rgba(56, 189, 255, 0.15)',
      };

    case 'cyberpunk':
      return {
        // 背景
        appBackground: '#000000',
        canvasBackground: '#0A0014',

        // 卡片/面板
        panelBackground: 'linear-gradient(135deg, rgba(139, 0, 255, 0.05), rgba(255, 0, 170, 0.05))',
        panelBackdrop: 'blur(20px)',
        panelBorder: '2px solid transparent',
        panelBorderImage: 'linear-gradient(135deg, #8B00FF, #FF00AA, #00D9FF) 1',
        panelBorderRadius: '12px',
        panelShadow: '0 0 60px rgba(139, 0, 255, 0.4), 0 0 100px rgba(255, 0, 170, 0.2), inset 0 0 40px rgba(139, 0, 255, 0.1)',

        // 按钮
        buttonBackground: 'rgba(0, 0, 0, 0.6)',
        buttonBackgroundHover: 'rgba(139, 0, 255, 0.2)',
        buttonBackgroundActive: '#8B00FF',
        buttonBorder: '1px solid #8B00FF',
        buttonBorderActive: '1px solid #00D9FF',
        buttonBorderRadius: '6px',

        // 文字
        textPrimary: '#FFFFFF',
        textSecondary: '#00D9FF',
        textTertiary: 'rgba(255, 255, 255, 0.6)',
        textAccent: '#FF00AA',

        // 输入框
        inputBackground: 'rgba(0, 0, 0, 0.6)',
        inputBackdrop: 'blur(10px)',
        inputBorder: '1px solid #8B00FF',
        inputBorderFocus: '1px solid #00D9FF',
        inputBorderRadius: '6px',

        // 渐变
        accentGradient: 'linear-gradient(135deg, #8B00FF, #FF00AA, #00D9FF)',

        // 特殊效果
        glowColor: '#8B00FF',
        textShadow: '0 0 20px rgba(139, 0, 255, 0.8), 0 0 40px rgba(255, 0, 170, 0.6)',

        // 画布交互元素
        selectionStroke: '#00D9FF',
        selectionFill: 'rgba(0, 217, 255, 0.1)',
        handleFill: '#FF00AA',
        handleStroke: '#00D9FF',
        gridColor: 'rgba(139, 0, 255, 0.08)',

        // 生成中效果
        generatingBorder: '2px solid #8B00FF',
        generatingGlow: '0 0 40px rgba(139, 0, 255, 0.6), 0 0 80px rgba(255, 0, 170, 0.4)',
        generatingPulseColor: 'rgba(139, 0, 255, 0.3)',
      };

    case 'minimal':
      return {
        // 背景
        appBackground: '#0A0A0A',
        canvasBackground: '#121212',

        // 卡片/面板
        panelBackground: 'rgba(255, 255, 255, 0.02)',
        panelBackdrop: 'blur(30px)',
        panelBorder: '1px solid rgba(255, 255, 255, 0.06)',
        panelBorderRadius: '8px',
        panelShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',

        // 按钮
        buttonBackground: 'transparent',
        buttonBackgroundHover: 'rgba(255, 255, 255, 0.04)',
        buttonBackgroundActive: 'rgba(255, 255, 255, 0.08)',
        buttonBorder: '1px solid rgba(255, 255, 255, 0.1)',
        buttonBorderActive: '1px solid rgba(255, 255, 255, 0.3)',
        buttonBorderRadius: '4px',

        // 文字
        textPrimary: 'rgba(255, 255, 255, 0.95)',
        textSecondary: 'rgba(255, 255, 255, 0.45)',
        textTertiary: 'rgba(255, 255, 255, 0.3)',
        textAccent: 'rgba(255, 255, 255, 0.85)',

        // 输入框
        inputBackground: 'transparent',
        inputBackdrop: 'none',
        inputBorder: '1px solid rgba(255, 255, 255, 0.1)',
        inputBorderFocus: '1px solid rgba(255, 255, 255, 0.3)',
        inputBorderRadius: '4px',

        // 渐变
        accentGradient: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',

        // 画布交互元素
        selectionStroke: 'rgba(255, 255, 255, 0.6)',
        selectionFill: 'rgba(255, 255, 255, 0.03)',
        handleFill: 'rgba(255, 255, 255, 0.8)',
        handleStroke: 'rgba(255, 255, 255, 0.3)',
        gridColor: 'rgba(255, 255, 255, 0.02)',

        // 生成中效果
        generatingBorder: '1px solid rgba(255, 255, 255, 0.3)',
        generatingGlow: '0 0 20px rgba(255, 255, 255, 0.1)',
        generatingPulseColor: 'rgba(255, 255, 255, 0.05)',
      };

    case 'runway':
      return {
        // 背景 - Runway ML 视频优先美学
        appBackground: '#1A1A1A',
        canvasBackground: '#2A2A2A',

        // 卡片/面板 - 电影级玻璃态射
        panelBackground: 'rgba(0, 0, 0, 0.3)',
        panelBackdrop: 'blur(80px) saturate(120%)',
        panelBorder: '1px solid rgba(255, 255, 255, 0.05)',
        panelBorderRadius: '24px',
        panelShadow: '0 40px 80px rgba(0, 0, 0, 0.8), 0 0 1px rgba(14, 165, 233, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.03)',

        // 按钮 - 平滑交互式悬停
        buttonBackground: 'rgba(255, 255, 255, 0.03)',
        buttonBackgroundHover: 'rgba(14, 165, 233, 0.15)',
        buttonBackgroundActive: 'rgba(14, 165, 233, 0.3)',
        buttonBorder: '1px solid rgba(255, 255, 255, 0.05)',
        buttonBorderActive: '1px solid rgba(14, 165, 233, 0.4)',
        buttonBorderRadius: '14px',

        // 文字 - ABC Normal 风格层次
        textPrimary: 'rgba(255, 255, 255, 0.98)',
        textSecondary: 'rgba(14, 165, 233, 0.85)',
        textTertiary: 'rgba(255, 255, 255, 0.55)',
        textAccent: '#0EA5E9', // Electric Blue

        // 输入框
        inputBackground: 'rgba(0, 0, 0, 0.4)',
        inputBackdrop: 'blur(40px)',
        inputBorder: '1px solid rgba(255, 255, 255, 0.06)',
        inputBorderFocus: '1px solid rgba(14, 165, 233, 0.5)',
        inputBorderRadius: '16px',

        // 渐变 - 蓝色到紫色流动
        accentGradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(124, 58, 237, 0.2))',

        // 画布交互元素
        selectionStroke: '#0EA5E9',
        selectionFill: 'rgba(14, 165, 233, 0.12)',
        handleFill: '#0EA5E9',
        handleStroke: 'rgba(255, 255, 255, 0.95)',
        gridColor: 'rgba(255, 255, 255, 0.025)',

        // 生成中效果 - 电影级发光
        generatingBorder: '1px solid rgba(14, 165, 233, 0.3)',
        generatingGlow: '0 0 60px rgba(14, 165, 233, 0.25), 0 0 120px rgba(14, 165, 233, 0.1)',
        generatingPulseColor: 'rgba(14, 165, 233, 0.15)',

        // 特殊效果 - 视频美学
        videoGlow: '0 0 40px rgba(14, 165, 233, 0.3)',
        hoverScale: '1.1',
        transitionDuration: '200ms',
      };

    case 'anthropic':
      return {
        // 背景 - 温暖奶油色调
        appBackground: '#FAF9F0',
        canvasBackground: '#F5F4EB',

        // 卡片/面板 - 精致卡片系统
        panelBackground: 'rgba(255, 255, 255, 0.85)',
        panelBackdrop: 'blur(40px) saturate(105%)',
        panelBorder: '1px solid rgba(19, 19, 20, 0.08)',
        panelBorderRadius: '16px',
        panelShadow: '0 24px 48px rgba(19, 19, 20, 0.08), 0 1px 2px rgba(19, 19, 20, 0.04)',

        // 按钮 - 微妙悬停效果
        buttonBackground: 'rgba(19, 19, 20, 0.04)',
        buttonBackgroundHover: 'rgba(19, 19, 20, 0.08)',
        buttonBackgroundActive: 'rgba(217, 119, 87, 0.15)',
        buttonBorder: '1px solid rgba(19, 19, 20, 0.08)',
        buttonBorderActive: '1px solid rgba(217, 119, 87, 0.4)',
        buttonBorderRadius: '12px',

        // 文字 - Styrene + Tiempos 风格
        textPrimary: '#131314',
        textSecondary: 'rgba(19, 19, 20, 0.65)',
        textTertiary: 'rgba(19, 19, 20, 0.45)',
        textAccent: '#D97757', // Burnt Orange

        // 输入框 - 清晰焦点
        inputBackground: 'rgba(255, 255, 255, 0.7)',
        inputBackdrop: 'blur(20px)',
        inputBorder: '1px solid rgba(19, 19, 20, 0.1)',
        inputBorderFocus: '1px solid rgba(217, 119, 87, 0.5)',
        inputBorderRadius: '12px',

        // 渐变 - 温暖橙色流
        accentGradient: 'linear-gradient(135deg, rgba(217, 119, 87, 0.12), rgba(245, 158, 11, 0.12))',

        // 画布交互元素 - 深色对比
        selectionStroke: '#D97757',
        selectionFill: 'rgba(217, 119, 87, 0.1)',
        handleFill: '#D97757',
        handleStroke: '#131314',
        gridColor: 'rgba(19, 19, 20, 0.04)',

        // 生成中效果 - 柔和发光
        generatingBorder: '1px solid rgba(217, 119, 87, 0.3)',
        generatingGlow: '0 0 40px rgba(217, 119, 87, 0.12)',
        generatingPulseColor: 'rgba(217, 119, 87, 0.08)',

        // 特殊效果 - 文字动画
        wordAnimationDelay: '0.05s',
        rotatingTextInterval: '3s',
        hoverImageScale: '1.05',
      };

    case 'terminal':
      return {
        // 背景 - 纯黑终端
        appBackground: '#000000',
        canvasBackground: '#0A0A0A',

        // 卡片/面板 - 锋利边界无模糊
        panelBackground: '#0D0D0D',
        panelBackdrop: 'none',
        panelBorder: '1px solid #00FF41',
        panelBorderRadius: '0px',
        panelShadow: '0 0 20px rgba(0, 255, 65, 0.2), inset 0 0 1px #00FF41',

        // 按钮 - 命令行风格
        buttonBackground: 'transparent',
        buttonBackgroundHover: 'rgba(0, 255, 65, 0.08)',
        buttonBackgroundActive: 'rgba(0, 255, 65, 0.15)',
        buttonBorder: '1px solid #00FF41',
        buttonBorderActive: '2px solid #00FF41',
        buttonBorderRadius: '0px',

        // 文字 - 等宽字体层次
        textPrimary: '#00FF41', // Matrix Green
        textSecondary: 'rgba(0, 255, 65, 0.7)',
        textTertiary: 'rgba(0, 255, 65, 0.45)',
        textAccent: '#FFFFFF',

        // 输入框 - 终端输入
        inputBackground: '#000000',
        inputBackdrop: 'none',
        inputBorder: '1px solid #00FF41',
        inputBorderFocus: '2px solid #00FF41',
        inputBorderRadius: '0px',

        // 渐变 - 无渐变，纯色
        accentGradient: 'none',

        // 画布交互元素 - 高对比度
        selectionStroke: '#00FF41',
        selectionFill: 'rgba(0, 255, 65, 0.05)',
        handleFill: '#00FF41',
        handleStroke: '#000000',
        gridColor: 'rgba(0, 255, 65, 0.06)',

        // 生成中效果 - 终端发光
        generatingBorder: '2px solid #00FF41',
        generatingGlow: '0 0 30px rgba(0, 255, 65, 0.5), 0 0 60px rgba(0, 255, 65, 0.2)',
        generatingPulseColor: 'rgba(0, 255, 65, 0.1)',

        // 特殊效果 - 代码美学
        cursorBlink: '1s',
        typingSpeed: '50ms',
        monoFont: 'JetBrains Mono, Azeret Mono, monospace',
        scanlineOpacity: '0.02',
      };

    case 'neumorphism':
      return {
        // 背景 - 「光影诗人」新拟态主义
        appBackground: '#E8EAF0',
        canvasBackground: '#DFE1E8',

        // 卡片/面板 - 浮雕质感,多层次阴影
        panelBackground: '#E8EAF0',
        panelBackdrop: 'none',
        panelBorder: 'none',
        panelBorderRadius: '24px',
        panelShadow: '12px 12px 24px rgba(174, 179, 200, 0.4), -12px -12px 24px rgba(255, 255, 255, 0.8), inset 1px 1px 2px rgba(255, 255, 255, 0.3)',

        // 按钮 - 凸起/凹陷效果
        buttonBackground: '#E8EAF0',
        buttonBackgroundHover: '#E8EAF0',
        buttonBackgroundActive: '#DFE1E8',
        buttonBorder: 'none',
        buttonBorderActive: 'none',
        buttonBorderRadius: '16px',
        buttonShadow: '6px 6px 12px rgba(174, 179, 200, 0.4), -6px -6px 12px rgba(255, 255, 255, 0.8)',
        buttonShadowActive: 'inset 4px 4px 8px rgba(174, 179, 200, 0.35), inset -4px -4px 8px rgba(255, 255, 255, 0.7)',

        // 文字 - 柔和对比
        textPrimary: '#4A4F6A',
        textSecondary: '#7B80A0',
        textTertiary: '#A0A5C0',
        textAccent: '#D4A574', // 琥珀金

        // 输入框 - 内凹效果
        inputBackground: '#E8EAF0',
        inputBackdrop: 'none',
        inputBorder: 'none',
        inputBorderFocus: 'none',
        inputBorderRadius: '12px',
        inputShadow: 'inset 3px 3px 6px rgba(174, 179, 200, 0.4), inset -3px -3px 6px rgba(255, 255, 255, 0.8)',

        // 渐变 - 柔和过渡
        accentGradient: 'linear-gradient(135deg, #D4A574 0%, #B8946B 100%)',

        // 画布交互元素
        selectionStroke: '#D4A574',
        selectionFill: 'rgba(212, 165, 116, 0.1)',
        handleFill: '#D4A574',
        handleStroke: '#E8EAF0',
        gridColor: 'rgba(74, 79, 106, 0.05)',

        // 生成中效果 - 柔和浮动
        generatingBorder: 'none',
        generatingGlow: '0 8px 24px rgba(212, 165, 116, 0.3)',
        generatingPulseColor: 'rgba(212, 165, 116, 0.12)',

        // 特殊效果 - 新拟态
        pressDepth: '4px',
        embossHighlight: 'rgba(255, 255, 255, 0.8)',
        embossShadow: 'rgba(174, 179, 200, 0.4)',
      };

    case 'garden':
      return {
        // 背景 - 「数字花园」生机勃勃的自然调色板
        appBackground: 'linear-gradient(135deg, #E8F5E9 0%, #F1F8E9 50%, #FFF9E1 100%)',
        canvasBackground: 'linear-gradient(135deg, #F1F8F1 0%, #FFFEF5 100%)',

        // 卡片/面板 - 温润如玉的半透明面板
        panelBackground: 'linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(250, 255, 245, 0.95) 100%)',
        panelBackdrop: 'blur(24px) saturate(160%)',
        panelBorder: '1px solid rgba(129, 199, 132, 0.3)',
        panelBorderRadius: '28px',
        panelShadow: '0 20px 60px rgba(76, 175, 80, 0.08), 0 8px 24px rgba(129, 199, 132, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',

        // 按钮 - 自然生长的交互元素
        buttonBackground: 'linear-gradient(135deg, rgba(129, 199, 132, 0.12) 0%, rgba(165, 214, 167, 0.12) 100%)',
        buttonBackgroundHover: 'linear-gradient(135deg, rgba(129, 199, 132, 0.22) 0%, rgba(165, 214, 167, 0.22) 100%)',
        buttonBackgroundActive: 'linear-gradient(135deg, rgba(76, 175, 80, 0.25) 0%, rgba(129, 199, 132, 0.30) 100%)',
        buttonBorder: '1px solid rgba(129, 199, 132, 0.25)',
        buttonBorderActive: '1px solid rgba(76, 175, 80, 0.5)',
        buttonBorderRadius: '20px',

        // 文字 - 深绿色系，高对比度
        textPrimary: '#1B5E20',
        textSecondary: '#388E3C',
        textTertiary: '#66BB6A',
        textAccent: '#FF6F61', // 活力珊瑚色

        // 输入框 - 清新自然
        inputBackground: 'rgba(255, 255, 255, 0.75)',
        inputBackdrop: 'blur(12px)',
        inputBorder: '1px solid rgba(129, 199, 132, 0.3)',
        inputBorderFocus: '1px solid rgba(76, 175, 80, 0.6)',
        inputBorderRadius: '16px',

        // 渐变 - 春天的色彩流动
        accentGradient: 'linear-gradient(135deg, #66BB6A 0%, #81C784 30%, #FFD54F 60%, #FF8A65 100%)',

        // 画布交互元素
        selectionStroke: '#66BB6A',
        selectionFill: 'rgba(102, 187, 106, 0.15)',
        handleFill: '#FF6F61',
        handleStroke: '#FFFFFF',
        gridColor: 'rgba(129, 199, 132, 0.08)',

        // 生成中效果 - 生长动画
        generatingBorder: '2px solid rgba(76, 175, 80, 0.5)',
        generatingGlow: '0 0 40px rgba(102, 187, 106, 0.3), 0 0 80px rgba(129, 199, 132, 0.15)',
        generatingPulseColor: 'rgba(102, 187, 106, 0.2)',

        // 特殊效果 - 有机生长动画
        blobMorph: '18s',
        breatheScale: '1.03',
        organicCurve: 'cubic-bezier(0.4, 0, 0.2, 1)',

        // 新增：花朵色彩点缀
        petalPink: '#F48FB1',
        petalYellow: '#FFE082',
        petalOrange: '#FFAB91',
        leafGreen: '#81C784',
        stemGreen: '#66BB6A',
      };

    case 'spectrum':
      return {
        // 背景 - 「光谱实验室」科学精密
        appBackground: '#0A0B0E',
        canvasBackground: '#12131A',

        // 卡片/面板 - 透明层叠
        panelBackground: 'rgba(20, 25, 35, 0.85)',
        panelBackdrop: 'blur(40px) saturate(180%)',
        panelBorder: '1px solid transparent',
        panelBorderImage: 'linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(75, 0, 130, 0.2), rgba(0, 191, 255, 0.3)) 1',
        panelBorderRadius: '8px',
        panelShadow: '0 8px 32px rgba(138, 43, 226, 0.15), 0 0 80px rgba(75, 0, 130, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05)',

        // 按钮 - 光谱边界
        buttonBackground: 'rgba(30, 35, 50, 0.6)',
        buttonBackgroundHover: 'rgba(40, 45, 65, 0.7)',
        buttonBackgroundActive: 'rgba(138, 43, 226, 0.2)',
        buttonBorder: '1px solid rgba(138, 43, 226, 0.3)',
        buttonBorderActive: '1px solid rgba(0, 191, 255, 0.6)',
        buttonBorderRadius: '6px',

        // 文字 - 高对比度
        textPrimary: 'rgba(255, 255, 255, 0.95)',
        textSecondary: 'rgba(138, 180, 255, 0.85)',
        textTertiary: 'rgba(255, 255, 255, 0.5)',
        textAccent: '#00BFFF', // 天蓝色

        // 输入框 - 精密边框
        inputBackground: 'rgba(20, 25, 35, 0.8)',
        inputBackdrop: 'blur(10px)',
        inputBorder: '1px solid rgba(138, 43, 226, 0.25)',
        inputBorderFocus: '1px solid rgba(0, 191, 255, 0.6)',
        inputBorderRadius: '4px',

        // 渐变 - 全光谱
        accentGradient: 'linear-gradient(90deg, #8B00FF 0%, #4B0082 14%, #0000FF 28%, #00FF00 42%, #FFFF00 57%, #FF7F00 71%, #FF0000 85%, #8B00FF 100%)',

        // 画布交互元素
        selectionStroke: '#00BFFF',
        selectionFill: 'rgba(0, 191, 255, 0.08)',
        handleFill: '#8B00FF',
        handleStroke: '#00BFFF',
        gridColor: 'rgba(138, 43, 226, 0.06)',

        // 生成中效果 - 光谱扫描
        generatingBorder: '1px solid rgba(138, 43, 226, 0.5)',
        generatingGlow: '0 0 40px rgba(138, 43, 226, 0.3), 0 0 80px rgba(0, 191, 255, 0.2)',
        generatingPulseColor: 'rgba(138, 43, 226, 0.15)',

        // 特殊效果 - 光学
        spectrumScan: '3s',
        prismRefract: 'linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.3), rgba(0, 191, 255, 0.3), transparent)',
        laserBeam: '0 0 20px rgba(0, 191, 255, 0.6)',
      };

    // Gen-Z 风格 - Claymorphism (3D 玩具美学)
    case 'genz':
      return {
        // 背景 - 柔和渐变 (受 Clay.fun 启发)
        appBackground: 'linear-gradient(135deg, #E0E7FF 0%, #FEF3C7 50%, #FBCFE8 100%)',
        canvasBackground: '#F8FAFC',

        // 卡片/面板 - 粘土质感（厚边框+双阴影）
        panelBackground: '#FFFFFF',
        panelBackdrop: 'none',
        panelBorder: '4px solid #2563EB',
        panelBorderRadius: '24px',
        panelShadow: '8px 8px 0px #60A5FA, 12px 12px 0px rgba(37, 99, 235, 0.2)',

        // 按钮 - 3D 按压效果
        buttonBackground: '#2563EB',
        buttonBackgroundHover: '#1D4ED8',
        buttonBackgroundActive: '#1E40AF',
        buttonBorder: '3px solid #1E40AF',
        buttonBorderActive: '3px solid #1E3A8A',
        buttonBorderRadius: '16px',
        buttonShadow: '6px 6px 0px #1E40AF',
        buttonShadowActive: '2px 2px 0px #1E40AF',

        // 文字 - 高对比度深色
        textPrimary: '#1E293B',
        textSecondary: '#475569',
        textTertiary: '#94A3B8',
        textAccent: '#F43F5E', // CTA 玫瑰红

        // 输入框 - 内凹粘土效果
        inputBackground: '#FFFFFF',
        inputBackdrop: 'none',
        inputBorder: '3px solid #CBD5E1',
        inputBorderFocus: '3px solid #2563EB',
        inputBorderRadius: '12px',
        inputShadow: 'inset 2px 2px 4px rgba(0, 0, 0, 0.1)',

        // 渐变 - 玩具色彩
        accentGradient: 'linear-gradient(135deg, #2563EB 0%, #60A5FA 50%, #F43F5E 100%)',

        // 画布交互 - 厚实边框
        selectionStroke: '#2563EB',
        selectionFill: 'rgba(37, 99, 235, 0.1)',
        handleFill: '#F43F5E',
        handleStroke: '#FFFFFF',
        gridColor: 'rgba(203, 213, 225, 0.3)',

        // 生成中 - 柔和脉冲
        generatingBorder: '4px solid #60A5FA',
        generatingGlow: '0 0 0 4px rgba(96, 165, 250, 0.3)',
        generatingPulseColor: 'rgba(37, 99, 235, 0.15)',

        // 特殊效果 - 3D 粘土
        clayDepth: '8px',
        clayBorderWidth: '4px',
        pressTransition: '200ms ease-out',
        toyRounded: '24px',
      };

    // Minimalism 风格 - Exaggerated Minimalism (夸张极简主义)
    case 'minimalism':
      return {
        // 背景 - 高对比度纯净底色
        appBackground: '#FAFAF9',
        canvasBackground: '#FFFFFF',

        // 卡片/面板 - 零装饰，纯粹几何
        panelBackground: '#FFFFFF',
        panelBackdrop: 'none',
        panelBorder: '2px solid #1C1917',
        panelBorderRadius: '0px', // 绝对直角
        panelShadow: 'none',

        // 按钮 - 强烈的反转对比
        buttonBackground: '#1C1917',
        buttonBackgroundHover: '#44403C',
        buttonBackgroundActive: '#0C0A09',
        buttonBorder: '2px solid #1C1917',
        buttonBorderActive: '2px solid #0C0A09',
        buttonBorderRadius: '0px',
        buttonShadow: 'none',

        // 文字 - 极端高对比度
        textPrimary: '#0C0A09',
        textSecondary: '#44403C',
        textTertiary: '#78716C',
        textAccent: '#CA8A04', // 金色点缀

        // 输入框 - 粗实线边框
        inputBackground: '#FFFFFF',
        inputBackdrop: 'none',
        inputBorder: '2px solid #1C1917',
        inputBorderFocus: '3px solid #0C0A09',
        inputBorderRadius: '0px',

        // 渐变 - 单色渐变
        accentGradient: 'linear-gradient(90deg, #1C1917 0%, #44403C 100%)',

        selectionStroke: '#0C0A09',
        selectionFill: 'rgba(12, 10, 9, 0.05)',
        handleFill: '#CA8A04',
        handleStroke: '#FFFFFF',
        gridColor: 'rgba(28, 25, 23, 0.1)',

        // 生成中 - 粗边框
        generatingBorder: '3px solid #1C1917',
        generatingGlow: 'none',
        generatingPulseColor: 'rgba(28, 25, 23, 0.1)',

        // 特殊效果 - Brutalist 美学
        brutalBorder: '2px',
        massiveType: 'clamp(3rem, 10vw, 12rem)',
        negativeSpace: '80px',
        monoFont: 'Space Mono, monospace',
      };

    // Flat Design 风格 - Glassmorphism (现代玻璃态)
    case 'flat':
      return {
        // 背景 - 柔和蓝色渐变
        appBackground: 'linear-gradient(135deg, #EFF6FF 0%, #F0F9FF 50%, #F8FAFC 100%)',
        canvasBackground: '#F8FAFC',

        // 卡片/面板 - 毛玻璃效果
        panelBackground: 'rgba(255, 255, 255, 0.7)',
        panelBackdrop: 'blur(20px) saturate(180%)',
        panelBorder: '1px solid rgba(255, 255, 255, 0.3)',
        panelBorderRadius: '16px',
        panelShadow: '0 8px 32px rgba(59, 130, 246, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)',

        // 按钮 - 玻璃质感
        buttonBackground: 'rgba(59, 130, 246, 0.15)',
        buttonBackgroundHover: 'rgba(59, 130, 246, 0.25)',
        buttonBackgroundActive: 'rgba(59, 130, 246, 0.35)',
        buttonBorder: '1px solid rgba(59, 130, 246, 0.3)',
        buttonBorderActive: '1px solid rgba(59, 130, 246, 0.5)',
        buttonBorderRadius: '12px',
        buttonShadow: '0 4px 16px rgba(59, 130, 246, 0.1)',

        // 文字 - 高对比度
        textPrimary: '#1E293B',
        textSecondary: '#475569',
        textTertiary: '#94A3B8',
        textAccent: '#F97316', // 橙色 CTA

        // 输入框 - 玻璃输入框
        inputBackground: 'rgba(255, 255, 255, 0.6)',
        inputBackdrop: 'blur(10px)',
        inputBorder: '1px solid rgba(59, 130, 246, 0.2)',
        inputBorderFocus: '1px solid rgba(59, 130, 246, 0.5)',
        inputBorderRadius: '12px',

        // 渐变 - 蓝色光谱
        accentGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(96, 165, 250, 0.2) 100%)',

        // 画布交互 - 玻璃高亮
        selectionStroke: '#3B82F6',
        selectionFill: 'rgba(59, 130, 246, 0.1)',
        handleFill: '#F97316',
        handleStroke: '#FFFFFF',
        gridColor: 'rgba(59, 130, 246, 0.08)',

        // 生成中 - 玻璃脉冲
        generatingBorder: '1px solid rgba(59, 130, 246, 0.4)',
        generatingGlow: '0 0 32px rgba(59, 130, 246, 0.2)',
        generatingPulseColor: 'rgba(59, 130, 246, 0.12)',

        // Glassmorphism 特效
        glassBlur: 'blur(20px)',
        glassOpacity: '0.7',
        lightReflection: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, transparent 50%)',
      };

    // Glassmorphism 风格 - Liquid Glass (流动玻璃)
    case 'glassmorphism':
      return {
        // 背景 - 动态流体渐变
        appBackground: 'linear-gradient(135deg, #667EEA 0%, #764BA2 25%, #F093FB 50%, #4FACFE 75%, #00F2FE 100%)',
        canvasBackground: 'radial-gradient(ellipse at top left, rgba(102, 126, 234, 0.2) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(79, 172, 254, 0.2) 0%, transparent 50%), linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.08) 100%)',

        // 卡片/面板 - 液态玻璃 + 色散效果
        panelBackground: 'rgba(255, 255, 255, 0.1)',
        panelBackdrop: 'blur(60px) saturate(220%) brightness(110%)',
        panelBorder: '2px solid rgba(255, 255, 255, 0.3)',
        panelBorderRadius: '28px',
        panelShadow: '0 16px 64px rgba(102, 126, 234, 0.25), 0 0 100px rgba(118, 75, 162, 0.15), inset 0 2px 0 rgba(255, 255, 255, 0.5), inset 0 -2px 0 rgba(255, 255, 255, 0.2)',

        // 按钮 - 流动变形效果
        buttonBackground: 'rgba(255, 255, 255, 0.2)',
        buttonBackgroundHover: 'rgba(255, 255, 255, 0.3)',
        buttonBackgroundActive: 'rgba(255, 255, 255, 0.4)',
        buttonBorder: '1.5px solid rgba(255, 255, 255, 0.4)',
        buttonBorderActive: '2px solid rgba(255, 255, 255, 0.7)',
        buttonBorderRadius: '20px',
        buttonShadow: '0 8px 32px rgba(102, 126, 234, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.5)',

        // 文字 - 高对比白色
        textPrimary: 'rgba(255, 255, 255, 0.99)',
        textSecondary: 'rgba(255, 255, 255, 0.85)',
        textTertiary: 'rgba(255, 255, 255, 0.60)',
        textAccent: '#FFFFFF',

        // 输入框 - 流动玻璃边框
        inputBackground: 'rgba(255, 255, 255, 0.15)',
        inputBackdrop: 'blur(40px) saturate(200%)',
        inputBorder: '1.5px solid rgba(255, 255, 255, 0.3)',
        inputBorderFocus: '2.5px solid rgba(255, 255, 255, 0.6)',
        inputBorderRadius: '18px',

        // 渐变 - 彩虹色散效果
        accentGradient: 'linear-gradient(135deg, rgba(102, 126, 234, 0.4) 0%, rgba(118, 75, 162, 0.3) 25%, rgba(240, 147, 251, 0.3) 50%, rgba(79, 172, 254, 0.3) 75%, rgba(0, 242, 254, 0.3) 100%)',

        // 画布交互 - 彩虹高亮
        selectionStroke: 'rgba(255, 255, 255, 0.8)',
        selectionFill: 'rgba(255, 255, 255, 0.15)',
        handleFill: '#FFFFFF',
        handleStroke: 'rgba(240, 147, 251, 0.8)',
        gridColor: 'rgba(255, 255, 255, 0.12)',

        // 生成中 - 流动脉冲
        generatingBorder: '3px solid rgba(255, 255, 255, 0.5)',
        generatingGlow: '0 0 60px rgba(102, 126, 234, 0.5), 0 0 120px rgba(118, 75, 162, 0.3), 0 0 180px rgba(240, 147, 251, 0.2)',
        generatingPulseColor: 'rgba(255, 255, 255, 0.2)',

        // 特殊效果 - Liquid Glass
        liquidMorph: '600ms cubic-bezier(0.4, 0, 0.2, 1)',
        chromaticAberration: '3px',
        fluidBlur: 'blur(60px)',
        iridescentShift: 'linear-gradient(45deg, rgba(102, 126, 234, 0.3), rgba(240, 147, 251, 0.3), rgba(79, 172, 254, 0.3))',
      };

    // Aurora 风格 - Vibrant & Block-based (活力方块)
    case 'aurora':
      return {
        // 背景 - 高能量渐变
        appBackground: 'linear-gradient(135deg, #FF1493 0%, #BF00FF 25%, #39FF14 50%, #00FFFF 75%, #FFAA00 100%)',
        canvasBackground: '#0A0A0A',

        // 卡片/面板 - 几何方块
        panelBackground: '#1A1A1A',
        panelBackdrop: 'none',
        panelBorder: '3px solid #39FF14',
        panelBorderRadius: '8px',
        panelShadow: '0 16px 48px rgba(57, 255, 20, 0.3), 0 0 80px rgba(191, 0, 255, 0.2)',

        // 按钮 - 高对比度方块
        buttonBackground: '#BF00FF',
        buttonBackgroundHover: '#FF1493',
        buttonBackgroundActive: '#39FF14',
        buttonBorder: '3px solid #FFFFFF',
        buttonBorderActive: '3px solid #00FFFF',
        buttonBorderRadius: '0px',
        buttonShadow: '0 8px 32px rgba(191, 0, 255, 0.5)',

        // 文字 - 极高对比度
        textPrimary: '#FFFFFF',
        textSecondary: '#00FFFF',
        textTertiary: '#FFAA00',
        textAccent: '#39FF14', // 霓虹绿

        // 输入框 - 粗边框方块
        inputBackground: '#0A0A0A',
        inputBackdrop: 'none',
        inputBorder: '3px solid #BF00FF',
        inputBorderFocus: '4px solid #39FF14',
        inputBorderRadius: '0px',

        // 渐变 - 多色彩虹
        accentGradient: 'linear-gradient(90deg, #39FF14 0%, #BF00FF 25%, #FF1493 50%, #00FFFF 75%, #FFAA00 100%)',

        // 画布交互 - 霓虹高亮
        selectionStroke: '#39FF14',
        selectionFill: 'rgba(57, 255, 20, 0.2)',
        handleFill: '#FF1493',
        handleStroke: '#FFFFFF',
        gridColor: 'rgba(191, 0, 255, 0.15)',

        // 生成中 - 霓虹脉冲
        generatingBorder: '4px solid #BF00FF',
        generatingGlow: '0 0 60px rgba(191, 0, 255, 0.8), 0 0 120px rgba(57, 255, 20, 0.5)',
        generatingPulseColor: 'rgba(57, 255, 20, 0.3)',

        // 特殊效果 - Vibrant Blocks
        blockGap: '48px',
        largeType: '32px',
        geometricShapes: 'polygon',
        energeticTransition: '200ms ease-out',
        duotone: 'linear-gradient(135deg, #FF1493 0%, #BF00FF 100%)',
      };

    case 'original':
    default:
      return {
        // 背景
        appBackground: '#181818',
        canvasBackground: 'transparent', // 保持原始设计，透明以显示 App 背景

        // 卡片/面板
        panelBackground: 'rgba(30, 30, 30, 0.95)',
        panelBackdrop: 'blur(20px)',
        panelBorder: '1px solid rgba(255, 255, 255, 0.1)',
        panelBorderRadius: '12px',
        panelShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',

        // 按钮
        buttonBackground: 'transparent',
        buttonBackgroundHover: 'rgba(255, 255, 255, 0.12)',
        buttonBackgroundActive: 'rgba(56, 189, 255, 0.2)',
        buttonBorder: 'none',
        buttonBorderActive: '1px solid rgba(56, 189, 255, 0.4)',
        buttonBorderRadius: '6px',

        // 文字
        textPrimary: 'rgba(255, 255, 255, 0.9)',
        textSecondary: 'rgba(255, 255, 255, 0.65)',
        textTertiary: 'rgba(255, 255, 255, 0.45)',
        textAccent: '#38BDFF',

        // 输入框
        inputBackground: 'rgba(255, 255, 255, 0.05)',
        inputBackdrop: 'none',
        inputBorder: '1px solid rgba(255, 255, 255, 0.1)',
        inputBorderFocus: '1px solid rgba(56, 189, 255, 0.5)',
        inputBorderRadius: '8px',

        // 渐变
        accentGradient: 'linear-gradient(135deg, #38BDFF 0%, #7C3AED 100%)',

        // 画布交互元素
        selectionStroke: '#38BDFF',
        selectionFill: 'rgba(56, 189, 255, 0.08)',
        handleFill: '#38BDFF',
        handleStroke: '#FFFFFF',
        gridColor: 'rgba(255, 255, 255, 0.05)',

        // 生成中效果
        generatingBorder: '2px solid rgba(56, 189, 255, 0.5)',
        generatingGlow: '0 0 20px rgba(56, 189, 255, 0.3)',
        generatingPulseColor: 'rgba(56, 189, 255, 0.1)',
      };
  }
};
