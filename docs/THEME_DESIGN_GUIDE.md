# Infinite Canvas 主题设计指南

> **版本**: 1.0.0
> **最后更新**: 2026-01-16
> **作者**: Infinite Canvas 设计团队

---

## 目录

1. [概述](#概述)
2. [主题设计哲学](#主题设计哲学)
   - [Gen-Z 霓虹赛博糖果美学](#1-gen-z-霓虹赛博糖果美学)
   - [Minimalism 日式极简主义](#2-minimalism-日式极简主义)
   - [Flat Design 扁平化设计](#3-flat-design-扁平化设计)
   - [Glassmorphism 毛玻璃新拟态](#4-glassmorphism-毛玻璃新拟态)
   - [Aurora 北极光梦幻](#5-aurora-北极光梦幻)
3. [技术实现指南](#技术实现指南)
4. [组件示例](#组件示例)
5. [最佳实践](#最佳实践)
6. [迁移指南](#迁移指南)
7. [常见问题](#常见问题)

---

## 概述

Infinite Canvas 提供了15种精心设计的主题，每种主题都有独特的视觉语言和设计哲学。本指南重点介绍5种最具代表性的现代主题：

- **Gen-Z**: Z世代赛博朋克糖果美学，高饱和度霓虹色彩
- **Minimalism**: 日式极简主义，黑白对比的纯净美学
- **Flat Design**: Material Design 扁平化，饱和纯色块设计
- **Glassmorphism**: 毛玻璃新拟态，透明渐变背景
- **Aurora**: 北极光梦幻，流动的极光色彩

### 主题架构

所有主题都基于统一的设计系统，包含以下核心元素：

```
主题配置
├── 背景系统 (appBackground, canvasBackground)
├── 面板系统 (panelBackground, panelBorder, panelShadow)
├── 按钮系统 (buttonBackground, buttonBorder, buttonShadow)
├── 文字系统 (textPrimary, textSecondary, textTertiary, textAccent)
├── 输入框系统 (inputBackground, inputBorder)
├── 画布交互 (selectionStroke, handleFill, gridColor)
└── 生成效果 (generatingBorder, generatingGlow)
```

---

## 主题设计哲学

### 1. Gen-Z 霓虹赛博糖果美学

#### 设计理念

Gen-Z 主题面向Z世代用户，融合了赛博朋克的霓虹美学和糖果色的活力。这是一个大胆、前卫、充满能量的主题，代表了年轻一代对视觉表达的追求。

**核心特征**:
- 高饱和度的霓虹色彩（粉红、紫色、蓝色、黄色）
- 渐变边框和毛玻璃效果
- 完全圆角的按钮（100px border-radius）
- 强烈的发光和阴影效果
- 动态的色彩组合

#### 视觉语言

**色彩系统**:
```css
主色调:
  - 霓虹粉: #FF6B9D
  - 霓虹紫: #C06CF8
  - 电光蓝: #00D4FF
  - 糖果黄: #FFC837
  - 荧光绿: #00FFA3

背景渐变:
  linear-gradient(135deg, #FF6B9D 0%, #C06CF8 25%, #00D4FF 50%, #FFC837 75%, #FF6B9D 100%)

面板渐变边框:
  linear-gradient(135deg, #FF6B9D, #C06CF8, #00D4FF, #FFC837)
```

**排版风格**:
- 使用高对比度的白色文字（#FFFFFF）
- 次要文字使用淡紫色调（#E0E0FF）
- 强调色使用电光蓝（#00D4FF）

**交互效果**:
- 按钮具有强烈的霓虹阴影
- 悬停时增强发光效果
- 激活时显示电光蓝边框
- 生成动画使用紫色霓虹脉冲

#### 情感表达

Gen-Z 主题传达的情感：
- **活力**: 高饱和度色彩和强烈对比
- **前卫**: 赛博朋克风格的霓虹美学
- **个性**: 大胆的色彩组合和独特的视觉风格
- **数字原生**: 适合社交媒体和数字内容创作

#### 适用场景

- 社交媒体内容创作
- 电子音乐和夜店视觉
- 游戏界面设计
- 年轻化品牌营销
- 创意艺术项目

---

### 2. Minimalism 日式极简主义

#### 设计理念

Minimalism 主题受日本美学哲学"间"(Ma)的启发，追求简约、留白、克制的设计语言。这是一个纯粹的黑白主题，通过减法设计达到视觉上的平静和专注。

**核心特征**:
- 纯净的黑白配色方案
- 极小或零圆角（0-2px）
- 无阴影、无模糊、无渐变
- 底部线条式输入框
- 大量留白空间

#### 视觉语言

**色彩系统**:
```css
背景:
  - 主背景: #FAFAFA (浅灰白)
  - 画布: #FFFFFF (纯白)

文字:
  - 主要: #212121 (深黑)
  - 次要: #616161 (中灰)
  - 三级: #9E9E9E (浅灰)
  - 强调: #000000 (纯黑)

边框:
  - 默认: #E0E0E0 (浅灰)
  - 激活: #212121 (深黑，2px 加粗)
```

**排版风格**:
- 高行高（1.8）提供充足的呼吸空间
- 清晰的字体层次（12px, 14px, 16px）
- 使用系统默认字体保持纯净感

**交互效果**:
- 极其微妙的悬停效果（rgba(0,0,0,0.02)）
- 无阴影，无发光
- 通过边框粗细变化反馈交互
- 纯色的状态转换

#### 情感表达

Minimalism 主题传达的情感：
- **平静**: 黑白配色消除视觉干扰
- **专注**: 简洁界面让用户聚焦内容
- **优雅**: 克制的设计语言展现高级感
- **禅意**: 留白空间提供思考的余地

#### 适用场景

- 专业写作和编辑
- 建筑设计展示
- 摄影作品集
- 高端品牌展示
- 需要高度专注的创作环境

---

### 3. Flat Design 扁平化设计

#### 设计理念

Flat Design 主题继承了 Material Design 的设计哲学，使用饱和的纯色块、明确的层次和清晰的视觉反馈。这是一个友好、易用、现代的设计风格。

**核心特征**:
- 饱和的纯色块（无渐变）
- 无阴影设计
- 中等圆角（6-8px）
- 清晰的色彩对比
- 明确的层次结构

#### 视觉语言

**色彩系统**:
```css
Material Design 调色板:
  - 蓝色: #3498DB (主色)
  - 深蓝: #2980B9 (悬停)
  - 更深蓝: #21618C (激活)
  - 红色: #E74C3C (强调)
  - 紫色: #9B59B6
  - 黄色: #F39C12
  - 绿色: #2ECC71
  - 青色: #1ABC9C

背景:
  - 主背景: #ECF0F1 (浅灰)
  - 面板: #FFFFFF (纯白)
  - 输入框: #ECF0F1 (与背景同色)
```

**排版风格**:
- 深灰色文字（#2C3E50）而非纯黑
- 清晰的字体层次
- 中等字重保持可读性

**交互效果**:
- 通过颜色深浅变化反馈状态
- 无阴影、无发光
- 焦点时显示 2px 蓝色边框
- 纯色的动画过渡

#### 情感表达

Flat Design 主题传达的情感：
- **友好**: 明亮的色彩和清晰的对比
- **现代**: 符合当代 UI 设计趋势
- **高效**: 简洁的视觉层次提升效率
- **可亲近**: 饱和色彩降低使用门槛

#### 适用场景

- 移动应用原型
- 教育类内容
- 儿童友好界面
- 企业办公应用
- 需要高可读性的场景

---

### 4. Glassmorphism 毛玻璃新拟态

#### 设计理念

Glassmorphism 主题将毛玻璃效果与新拟态设计结合，创造出一种梦幻、通透、现代的视觉效果。这个主题利用 backdrop-filter 实现真实的模糊和透明效果。

**核心特征**:
- 半透明的玻璃面板
- 强烈的背景模糊（40px blur）
- 渐变背景色
- 白色半透明边框
- 微妙的内发光效果

#### 视觉语言

**色彩系统**:
```css
渐变背景:
  linear-gradient(135deg, #667EEA 0%, #764BA2 50%, #F093FB 100%)

玻璃面板:
  background: rgba(255, 255, 255, 0.1)
  backdrop-filter: blur(40px) saturate(180%)
  border: 1px solid rgba(255, 255, 255, 0.2)

按钮玻璃:
  background: rgba(255, 255, 255, 0.15)
  悬停: rgba(255, 255, 255, 0.25)
  激活: rgba(255, 255, 255, 0.35)

文字:
  - 主要: rgba(255, 255, 255, 0.95)
  - 次要: rgba(255, 255, 255, 0.75)
  - 三级: rgba(255, 255, 255, 0.5)
  - 强调: #FFFFFF (纯白)
```

**玻璃效果参数**:
- 模糊强度: 40px (面板), 20px (输入框)
- 饱和度增强: 180%
- 透明度: 0.1-0.35 根据层次变化
- 边框透明度: 0.2-0.5

**交互效果**:
- 悬停时增加透明度
- 激活时显示更强的白色边框
- 生成动画使用白色发光脉冲
- 微妙的阴影增强深度

#### 情感表达

Glassmorphism 主题传达的情感：
- **梦幻**: 模糊和透明营造轻盈感
- **现代**: 最新的 UI 设计趋势
- **精致**: 细腻的透明度和模糊效果
- **科技感**: 未来主义的视觉风格

#### 适用场景

- 科技产品展示
- 创意作品集
- 高端品牌网站
- 音乐和娱乐应用
- 需要视觉冲击力的场景

---

### 5. Aurora 北极光梦幻

#### 设计理念

Aurora 主题灵感来自北极光的自然奇观，使用紫色、蓝色、绿色的流动渐变模拟极光的变幻效果。这是一个神秘、梦幻、充满想象力的主题。

**核心特征**:
- 深色渐变背景（深蓝到黑）
- 紫-蓝-绿三色极光渐变
- 渐变边框和发光效果
- 流动的动画效果
- 多层次的阴影和发光

#### 视觉语言

**色彩系统**:
```css
极光三色:
  - 极光紫: #6A11CB
  - 极光蓝: #2575FC
  - 极光绿: #25FCAA

背景渐变:
  linear-gradient(135deg,
    #0F2027 0%,
    #203A43 25%,
    #2C5364 50%,
    #203A43 75%,
    #0F2027 100%
  )

画布极光:
  radial-gradient(ellipse at top, rgba(106, 17, 203, 0.15), transparent 50%),
  radial-gradient(ellipse at bottom, rgba(37, 117, 252, 0.15), transparent 50%)

面板边框:
  linear-gradient(135deg,
    rgba(106, 17, 203, 0.5),
    rgba(37, 117, 252, 0.5),
    rgba(37, 252, 170, 0.5)
  )
```

**发光效果**:
```css
按钮阴影:
  0 4px 20px rgba(106, 17, 203, 0.3),
  0 0 40px rgba(37, 117, 252, 0.2)

生成动画发光:
  0 0 40px rgba(106, 17, 203, 0.5),
  0 0 80px rgba(37, 117, 252, 0.3),
  0 0 120px rgba(37, 252, 170, 0.2)
```

**排版风格**:
- 白色主要文字（rgba(255, 255, 255, 0.95)）
- 淡蓝次要文字（rgba(180, 200, 255, 0.85)）
- 极光绿强调色（#25FCAA）

**交互效果**:
- 渐变背景的按钮
- 悬停时增强渐变强度
- 激活时显示极光绿边框
- 多层次发光的生成动画

#### 情感表达

Aurora 主题传达的情感：
- **神秘**: 深邃的背景和流动的色彩
- **梦幻**: 极光般的渐变和发光
- **宁静**: 冷色调的配色方案
- **创造力**: 激发想象力的视觉效果

#### 适用场景

- 艺术创作和插画
- 科幻主题内容
- 冥想和放松应用
- 音乐可视化
- 夜间模式的高级版本

---

## 技术实现指南

### 1. 主题系统架构

Infinite Canvas 使用 React Context API 实现主题系统：

```typescript
// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';

export type ThemeStyle =
  | 'genz'
  | 'minimalism'
  | 'flat'
  | 'glassmorphism'
  | 'aurora'
  // ... 其他主题

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
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

### 2. 主题配置函数

`getThemeStyles()` 函数返回主题的所有样式变量：

```typescript
export const getThemeStyles = (style: ThemeStyle) => {
  switch (style) {
    case 'genz':
      return {
        // 背景
        appBackground: 'linear-gradient(...)',
        canvasBackground: 'linear-gradient(...)',

        // 面板
        panelBackground: 'rgba(20, 20, 40, 0.75)',
        panelBackdrop: 'blur(20px) saturate(200%)',
        panelBorder: '2px solid transparent',
        panelBorderImage: 'linear-gradient(...)',
        panelBorderRadius: '24px',
        panelShadow: '0 8px 32px rgba(255, 107, 157, 0.3)...',

        // 按钮
        buttonBackground: 'linear-gradient(...)',
        buttonBackgroundHover: 'linear-gradient(...)',
        buttonBackgroundActive: 'linear-gradient(...)',
        // ... 更多属性
      };

    case 'minimalism':
      return {
        appBackground: '#FAFAFA',
        canvasBackground: '#FFFFFF',
        // ... 极简主题配置
      };

    // ... 其他主题
  }
};
```

### 3. 在组件中使用主题

#### 方法 A: 使用 Theme Hook（推荐）

```typescript
import { useTheme, getThemeStyles } from '../contexts/ThemeContext';

const MyComponent: React.FC = () => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);

  return (
    <div
      style={{
        backgroundColor: theme.panelBackground,
        backdropFilter: theme.panelBackdrop,
        border: theme.panelBorder,
        borderRadius: theme.panelBorderRadius,
        boxShadow: theme.panelShadow,
      }}
    >
      <h1 style={{ color: theme.textPrimary }}>标题</h1>
      <p style={{ color: theme.textSecondary }}>描述文字</p>
    </div>
  );
};
```

#### 方法 B: 检测主题类型

某些主题（如 Minimalism、Flat、Anthropic、Neumorphism）使用浅色背景，需要特殊处理：

```typescript
const MyComponent: React.FC = () => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);

  // 检测浅色主题
  const isLightTheme = ['anthropic', 'neumorphism', 'minimalism', 'flat', 'garden'].includes(themeStyle);

  return (
    <div
      style={{
        backgroundColor: theme.panelBackground,
        color: isLightTheme ? theme.textPrimary : 'rgba(255, 255, 255, 0.85)',
      }}
    >
      内容
    </div>
  );
};
```

### 4. 处理特殊样式

#### 渐变边框（Gen-Z、Spectrum、Aurora）

某些主题使用渐变边框，需要特殊处理：

```typescript
const panelStyle: React.CSSProperties = {
  background: theme.panelBackground,
  backdropFilter: theme.panelBackdrop,
  borderRadius: theme.panelBorderRadius,
  boxShadow: theme.panelShadow,
};

// 如果主题使用渐变边框
if (theme.panelBorderImage) {
  panelStyle.border = theme.panelBorder;
  panelStyle.borderImage = theme.panelBorderImage;
} else {
  panelStyle.border = theme.panelBorder;
}
```

#### 毛玻璃效果（Glassmorphism）

```typescript
const glassStyle: React.CSSProperties = {
  background: theme.panelBackground,
  backdropFilter: theme.panelBackdrop, // blur(40px) saturate(180%)
  border: theme.panelBorder,
  borderRadius: theme.panelBorderRadius,
  boxShadow: theme.panelShadow,
};
```

#### 新拟态阴影（Neumorphism）

新拟态主题使用多层阴影创建浮雕效果：

```typescript
const buttonStyle: React.CSSProperties = {
  background: theme.buttonBackground,
  border: theme.buttonBorder,
  borderRadius: theme.buttonBorderRadius,
  // 普通状态：凸起阴影
  boxShadow: theme.buttonShadow || theme.panelShadow,
};

// 激活状态：凹陷阴影
const buttonActiveStyle: React.CSSProperties = {
  ...buttonStyle,
  boxShadow: theme.buttonShadowActive,
};
```

### 5. 动画和过渡

所有主题都应该支持平滑的过渡效果：

```typescript
const animatedStyle: React.CSSProperties = {
  transition: 'all 0.2s ease-in-out',
  backgroundColor: theme.buttonBackground,
};

// 使用 Framer Motion
import { motion } from 'framer-motion';

<motion.button
  whileHover={{
    backgroundColor: theme.buttonBackgroundHover,
    boxShadow: theme.buttonShadow,
  }}
  whileTap={{
    backgroundColor: theme.buttonBackgroundActive,
    scale: 0.98,
  }}
  style={{
    backgroundColor: theme.buttonBackground,
    border: theme.buttonBorder,
    borderRadius: theme.buttonBorderRadius,
  }}
>
  按钮
</motion.button>
```

### 6. 响应式设计

确保主题在不同屏幕尺寸下都能正常工作：

```typescript
const responsiveStyle: React.CSSProperties = {
  backgroundColor: theme.panelBackground,
  backdropFilter: theme.panelBackdrop,
  borderRadius: theme.panelBorderRadius,
  padding: window.innerWidth < 768 ? '12px' : '24px',
};
```

### 7. 性能优化

#### 缓存主题样式

```typescript
import { useMemo } from 'react';

const MyComponent: React.FC = () => {
  const { themeStyle } = useTheme();

  const theme = useMemo(() => getThemeStyles(themeStyle), [themeStyle]);

  return <div style={{ backgroundColor: theme.panelBackground }}>内容</div>;
};
```

#### 减少不必要的重渲染

```typescript
import { memo } from 'react';

const ThemedComponent = memo<Props>(({ children }) => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);

  return <div style={{ color: theme.textPrimary }}>{children}</div>;
});
```

---

## 组件示例

### 1. 面板 (Panel)

面板是主题中最常见的容器组件。

#### Gen-Z 主题

```tsx
const GenZPanel: React.FC = ({ children }) => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);

  return (
    <div
      style={{
        background: theme.panelBackground, // rgba(20, 20, 40, 0.75)
        backdropFilter: theme.panelBackdrop, // blur(20px) saturate(200%)
        border: theme.panelBorder, // 2px solid transparent
        borderImage: theme.panelBorderImage, // 霓虹渐变
        borderRadius: theme.panelBorderRadius, // 24px
        boxShadow: theme.panelShadow, // 霓虹发光
        padding: '24px',
      }}
    >
      {children}
    </div>
  );
};
```

**视觉效果**:
- 深色半透明背景（75%透明度）
- 强烈的背景模糊（20px）和饱和度增强（200%）
- 霓虹色渐变边框（粉-紫-蓝-黄）
- 大圆角（24px）
- 多层霓虹阴影

#### Minimalism 主题

```tsx
const MinimalPanel: React.FC = ({ children }) => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);

  return (
    <div
      style={{
        background: theme.panelBackground, // #FFFFFF
        backdropFilter: theme.panelBackdrop, // none
        border: theme.panelBorder, // 1px solid #E0E0E0
        borderRadius: theme.panelBorderRadius, // 2px
        boxShadow: theme.panelShadow, // 微妙阴影
        padding: '24px',
      }}
    >
      {children}
    </div>
  );
};
```

**视觉效果**:
- 纯白背景
- 无模糊效果
- 浅灰色细边框
- 极小圆角（2px）
- 极其微妙的阴影

#### Glassmorphism 主题

```tsx
const GlassPanel: React.FC = ({ children }) => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);

  return (
    <div
      style={{
        background: theme.panelBackground, // rgba(255, 255, 255, 0.1)
        backdropFilter: theme.panelBackdrop, // blur(40px) saturate(180%)
        border: theme.panelBorder, // 1px solid rgba(255, 255, 255, 0.2)
        borderRadius: theme.panelBorderRadius, // 20px
        boxShadow: theme.panelShadow, // 玻璃阴影
        padding: '24px',
      }}
    >
      {children}
    </div>
  );
};
```

**视觉效果**:
- 10%透明的白色背景
- 强烈的背景模糊（40px）和饱和度增强（180%）
- 半透明白色边框
- 较大圆角（20px）
- 微妙的内外阴影

### 2. 按钮 (Button)

按钮是用户交互的核心组件。

#### Gen-Z 主题

```tsx
const GenZButton: React.FC<{ onClick?: () => void }> = ({ children, onClick }) => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);

  return (
    <motion.button
      whileHover={{
        background: theme.buttonBackgroundHover,
        boxShadow: '0 6px 24px rgba(255, 107, 157, 0.5), 0 0 50px rgba(192, 108, 248, 0.4)',
      }}
      whileTap={{
        background: theme.buttonBackgroundActive,
        border: theme.buttonBorderActive,
        scale: 0.96,
      }}
      style={{
        background: theme.buttonBackground, // 粉紫渐变
        border: theme.buttonBorder, // none
        borderRadius: theme.buttonBorderRadius, // 100px (完全圆角)
        boxShadow: theme.buttonShadow, // 霓虹阴影
        color: theme.textPrimary, // #FFFFFF
        padding: '12px 32px',
        fontSize: '14px',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
```

**交互状态**:
- **默认**: 粉紫渐变背景 + 霓虹阴影
- **悬停**: 更亮的渐变 + 增强的发光
- **激活**: 更深的渐变 + 电光蓝边框 + 轻微缩小

#### Minimalism 主题

```tsx
const MinimalButton: React.FC<{ onClick?: () => void }> = ({ children, onClick }) => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);

  return (
    <motion.button
      whileHover={{
        background: theme.buttonBackgroundHover, // rgba(0, 0, 0, 0.02)
      }}
      whileTap={{
        background: theme.buttonBackgroundActive, // rgba(0, 0, 0, 0.05)
        border: theme.buttonBorderActive, // 2px solid #212121
      }}
      style={{
        background: theme.buttonBackground, // transparent
        border: theme.buttonBorder, // 1px solid #212121
        borderRadius: theme.buttonBorderRadius, // 0px
        boxShadow: theme.buttonShadow, // none
        color: theme.textPrimary, // #212121
        padding: '12px 32px',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'all 0.15s ease-in-out',
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
```

**交互状态**:
- **默认**: 透明背景 + 黑色细边框
- **悬停**: 极微妙的灰色背景
- **激活**: 浅灰背景 + 加粗边框（2px）

#### Flat Design 主题

```tsx
const FlatButton: React.FC<{ onClick?: () => void }> = ({ children, onClick }) => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);

  return (
    <motion.button
      whileHover={{
        background: theme.buttonBackgroundHover, // #2980B9
      }}
      whileTap={{
        background: theme.buttonBackgroundActive, // #21618C
        scale: 0.98,
      }}
      style={{
        background: theme.buttonBackground, // #3498DB
        border: theme.buttonBorder, // none
        borderRadius: theme.buttonBorderRadius, // 6px
        boxShadow: theme.buttonShadow, // none
        color: '#FFFFFF',
        padding: '12px 32px',
        fontSize: '14px',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
      }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
```

**交互状态**:
- **默认**: 蓝色纯色背景 (#3498DB)
- **悬停**: 深蓝色 (#2980B9)
- **激活**: 更深蓝色 (#21618C) + 轻微缩小

### 3. 输入框 (Input)

输入框需要清晰的焦点状态反馈。

#### Gen-Z 主题

```tsx
const GenZInput: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      type="text"
      placeholder={placeholder}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        background: theme.inputBackground, // rgba(10, 10, 30, 0.8)
        backdropFilter: theme.inputBackdrop, // blur(10px)
        border: isFocused ? theme.inputBorderFocus : theme.inputBorder,
        // 焦点: 2px solid #00D4FF / 默认: 2px solid rgba(255, 107, 157, 0.4)
        borderRadius: theme.inputBorderRadius, // 16px
        color: theme.textPrimary, // #FFFFFF
        padding: '12px 16px',
        fontSize: '14px',
        outline: 'none',
        transition: 'all 0.2s ease-in-out',
      }}
    />
  );
};
```

**焦点效果**:
- **默认**: 粉色霓虹边框
- **焦点**: 电光蓝边框 + 发光效果

#### Minimalism 主题

```tsx
const MinimalInput: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      type="text"
      placeholder={placeholder}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        background: theme.inputBackground, // transparent
        backdropFilter: theme.inputBackdrop, // none
        border: theme.inputBorder, // none
        borderBottom: isFocused ? theme.inputBorderBottomFocus : theme.inputBorderBottom,
        // 焦点: 2px solid #212121 / 默认: 1px solid #212121
        borderRadius: theme.inputBorderRadius, // 0px
        color: theme.textPrimary, // #212121
        padding: '12px 0',
        fontSize: '14px',
        outline: 'none',
        transition: 'all 0.15s ease-in-out',
      }}
    />
  );
};
```

**焦点效果**:
- **默认**: 底部细线（1px）
- **焦点**: 底部加粗线（2px）

#### Glassmorphism 主题

```tsx
const GlassInput: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      type="text"
      placeholder={placeholder}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        background: theme.inputBackground, // rgba(255, 255, 255, 0.1)
        backdropFilter: theme.inputBackdrop, // blur(20px)
        border: isFocused ? theme.inputBorderFocus : theme.inputBorder,
        // 焦点: 1px solid rgba(255, 255, 255, 0.4) / 默认: 1px solid rgba(255, 255, 255, 0.2)
        borderRadius: theme.inputBorderRadius, // 12px
        color: theme.textPrimary, // rgba(255, 255, 255, 0.95)
        padding: '12px 16px',
        fontSize: '14px',
        outline: 'none',
        transition: 'all 0.2s ease-in-out',
      }}
    />
  );
};
```

**焦点效果**:
- **默认**: 半透明白色边框（0.2）
- **焦点**: 更亮的白色边框（0.4）

### 4. 文字层次 (Typography)

每个主题都定义了清晰的文字层次。

```tsx
const ThemeTypography: React.FC = () => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);

  return (
    <div>
      <h1 style={{
        color: theme.textPrimary,
        fontSize: '24px',
        fontWeight: 600,
        marginBottom: '8px',
      }}>
        主标题 (Primary Text)
      </h1>

      <h2 style={{
        color: theme.textSecondary,
        fontSize: '18px',
        fontWeight: 500,
        marginBottom: '8px',
      }}>
        副标题 (Secondary Text)
      </h2>

      <p style={{
        color: theme.textTertiary,
        fontSize: '14px',
        fontWeight: 400,
        marginBottom: '8px',
      }}>
        描述文字 (Tertiary Text)
      </p>

      <span style={{
        color: theme.textAccent,
        fontSize: '14px',
        fontWeight: 600,
      }}>
        强调文字 (Accent Text)
      </span>
    </div>
  );
};
```

**各主题的文字对比度**:

| 主题 | Primary | Secondary | Tertiary | Accent |
|------|---------|-----------|----------|--------|
| Gen-Z | #FFFFFF | #E0E0FF | #B8B8D8 | #00D4FF |
| Minimalism | #212121 | #616161 | #9E9E9E | #000000 |
| Flat | #2C3E50 | #34495E | #7F8C8D | #E74C3C |
| Glassmorphism | rgba(255,255,255,0.95) | rgba(255,255,255,0.75) | rgba(255,255,255,0.5) | #FFFFFF |
| Aurora | rgba(255,255,255,0.95) | rgba(180,200,255,0.85) | rgba(150,180,255,0.6) | #25FCAA |

### 5. 画布交互元素

画布中的选择框、控制点等交互元素。

```tsx
// 选择框
const SelectionBox: React.FC = () => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);

  return (
    <rect
      x={0}
      y={0}
      width={200}
      height={150}
      fill={theme.selectionFill}
      stroke={theme.selectionStroke}
      strokeWidth={2}
      strokeDasharray="5,5"
    />
  );
};

// 控制点
const ControlHandle: React.FC = () => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);

  return (
    <circle
      cx={100}
      cy={75}
      r={6}
      fill={theme.handleFill}
      stroke={theme.handleStroke}
      strokeWidth={2}
    />
  );
};

// 网格
const GridPattern: React.FC = () => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);

  return (
    <pattern id="grid" width={20} height={20} patternUnits="userSpaceOnUse">
      <rect width={20} height={20} fill="transparent" />
      <path
        d="M 20 0 L 0 0 0 20"
        fill="none"
        stroke={theme.gridColor}
        strokeWidth={0.5}
      />
    </pattern>
  );
};
```

### 6. 加载和生成状态

生成动画需要吸引用户注意但不会过度干扰。

```tsx
const GeneratingOverlay: React.FC = () => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);

  return (
    <motion.div
      animate={{
        boxShadow: [
          theme.generatingGlow,
          `${theme.generatingGlow}, 0 0 60px ${theme.generatingPulseColor}`,
          theme.generatingGlow,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        position: 'absolute',
        inset: 0,
        border: theme.generatingBorder,
        borderRadius: '12px',
        pointerEvents: 'none',
      }}
    />
  );
};
```

**各主题的生成效果**:
- **Gen-Z**: 紫色霓虹脉冲，强烈发光
- **Minimalism**: 黑色边框，无发光，简洁脉冲
- **Flat**: 蓝色边框，无发光，纯色脉冲
- **Glassmorphism**: 白色边框，柔和发光
- **Aurora**: 极光渐变边框，多层发光

---

## 最佳实践

### 1. 选择合适的主题

根据项目类型选择主题：

| 项目类型 | 推荐主题 | 原因 |
|---------|---------|------|
| 社交媒体内容 | Gen-Z | 吸引眼球，符合年轻受众审美 |
| 专业文档 | Minimalism | 简洁专注，无视觉干扰 |
| 企业应用 | Flat | 友好易用，符合Material Design |
| 创意作品集 | Glassmorphism | 现代精致，突出视觉效果 |
| 艺术创作 | Aurora | 激发创造力，梦幻氛围 |

### 2. 保持一致性

**原则**: 一旦选择了主题，在整个应用中保持一致的使用方式。

```tsx
// ❌ 不好的做法 - 混用不同主题的样式
<div style={{
  background: genZTheme.panelBackground, // Gen-Z 的背景
  border: minimalTheme.panelBorder, // Minimalism 的边框
}}>
  内容
</div>

// ✅ 好的做法 - 统一使用当前主题
<div style={{
  background: theme.panelBackground,
  border: theme.panelBorder,
  borderRadius: theme.panelBorderRadius,
  boxShadow: theme.panelShadow,
}}>
  内容
</div>
```

### 3. 响应浅色/深色主题

某些主题使用浅色背景，需要调整文字和图标颜色：

```tsx
const isLightTheme = [
  'anthropic',
  'neumorphism',
  'minimalism',
  'flat',
  'garden'
].includes(themeStyle);

const iconColor = isLightTheme ? theme.textPrimary : 'rgba(255, 255, 255, 0.85)';
```

### 4. 性能优化

#### 避免频繁切换主题

主题切换会导致整个应用重新渲染，应该：
- 在用户设置中提供主题选择器
- 使用 localStorage 持久化用户的主题选择
- 在应用启动时一次性加载主题

```tsx
// 保存主题到 localStorage
const setAndSaveTheme = (newTheme: ThemeStyle) => {
  setThemeStyle(newTheme);
  localStorage.setItem('infiniteCanvasTheme', newTheme);
};

// 从 localStorage 加载主题
useEffect(() => {
  const savedTheme = localStorage.getItem('infiniteCanvasTheme') as ThemeStyle;
  if (savedTheme) {
    setThemeStyle(savedTheme);
  }
}, []);
```

#### 使用 CSS 变量（高级）

对于频繁变化的样式，可以使用 CSS 变量：

```tsx
// 在根元素设置 CSS 变量
useEffect(() => {
  const theme = getThemeStyles(themeStyle);
  const root = document.documentElement;

  root.style.setProperty('--panel-bg', theme.panelBackground);
  root.style.setProperty('--text-primary', theme.textPrimary);
  root.style.setProperty('--border-radius', theme.panelBorderRadius);
}, [themeStyle]);
```

```css
/* 在 CSS 中使用变量 */
.panel {
  background: var(--panel-bg);
  color: var(--text-primary);
  border-radius: var(--border-radius);
}
```

### 5. 可访问性

确保主题符合可访问性标准：

#### 对比度检查

```tsx
// 检查文字对比度是否符合 WCAG AA 标准 (4.5:1)
const checkContrast = (foreground: string, background: string): boolean => {
  // 使用库如 'color-contrast-checker'
  const contrast = getContrastRatio(foreground, background);
  return contrast >= 4.5;
};

// Minimalism 主题示例
const isAccessible = checkContrast('#212121', '#FFFFFF'); // true (17.4:1)
```

#### 焦点可见性

所有主题的交互元素都应该有清晰的焦点状态：

```tsx
const accessibleButtonStyle = {
  ...buttonStyle,
  outline: 'none',
  // 使用自定义焦点环
  ':focus-visible': {
    boxShadow: `0 0 0 3px ${theme.textAccent}`,
  },
};
```

### 6. 避免常见错误

#### 错误 1: 忘记处理渐变边框

```tsx
// ❌ 错误 - 渐变边框不显示
<div style={{ border: theme.panelBorder }}>内容</div>

// ✅ 正确 - 检查是否有 borderImage
<div style={{
  border: theme.panelBorder,
  ...(theme.panelBorderImage && { borderImage: theme.panelBorderImage }),
}}>内容</div>
```

#### 错误 2: 硬编码颜色值

```tsx
// ❌ 错误 - 硬编码颜色
<h1 style={{ color: '#FFFFFF' }}>标题</h1>

// ✅ 正确 - 使用主题颜色
<h1 style={{ color: theme.textPrimary }}>标题</h1>
```

#### 错误 3: 忽略 backdrop-filter

某些主题依赖 backdrop-filter 创建毛玻璃效果，但需要底层有内容才能看到效果：

```tsx
// ✅ 确保有背景内容
<div style={{
  position: 'relative',
  background: theme.appBackground, // 底层背景
}}>
  <div style={{
    position: 'absolute',
    background: theme.panelBackground,
    backdropFilter: theme.panelBackdrop, // 模糊底层背景
  }}>
    面板内容
  </div>
</div>
```

### 7. 测试主题

在发布前测试所有主题：

```tsx
// 测试工具组件
const ThemeTester: React.FC = () => {
  const { setThemeStyle } = useTheme();

  const themes: ThemeStyle[] = [
    'genz', 'minimalism', 'flat', 'glassmorphism', 'aurora',
  ];

  return (
    <div style={{ display: 'flex', gap: '8px', padding: '20px' }}>
      {themes.map(theme => (
        <button key={theme} onClick={() => setThemeStyle(theme)}>
          {theme}
        </button>
      ))}
    </div>
  );
};
```

### 8. 主题自定义指南

如果需要在主题基础上自定义：

```tsx
const customTheme = {
  ...getThemeStyles('genz'),
  // 覆盖特定属性
  panelBorderRadius: '16px', // 降低圆角
  textAccent: '#FF1493', // 使用更亮的粉色
};
```

---

## 迁移指南

### 从 Original 主题迁移

Original 是默认主题，迁移到其他主题非常简单：

```tsx
// 1. 修改主题提供者
const App: React.FC = () => {
  return (
    <ThemeProvider>
      {/* 应用内容 */}
    </ThemeProvider>
  );
};

// 2. 添加主题选择器
const ThemeSelector: React.FC = () => {
  const { setThemeStyle } = useTheme();

  return (
    <select onChange={(e) => setThemeStyle(e.target.value as ThemeStyle)}>
      <option value="original">Original</option>
      <option value="genz">Gen-Z</option>
      <option value="minimalism">Minimalism</option>
      <option value="flat">Flat Design</option>
      <option value="glassmorphism">Glassmorphism</option>
      <option value="aurora">Aurora</option>
    </select>
  );
};

// 3. 更新组件使用主题变量
const MyComponent: React.FC = () => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);

  return (
    <div style={{
      backgroundColor: theme.panelBackground, // 而不是硬编码颜色
      color: theme.textPrimary,
    }}>
      内容
    </div>
  );
};
```

### 从硬编码样式迁移

如果组件使用了硬编码的颜色和样式：

#### 步骤 1: 识别硬编码值

```tsx
// 迁移前
const OldComponent: React.FC = () => {
  return (
    <div style={{
      backgroundColor: '#2A2A2A',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      color: 'rgba(255, 255, 255, 0.85)',
    }}>
      内容
    </div>
  );
};
```

#### 步骤 2: 映射到主题变量

创建映射表：

| 硬编码值 | 主题变量 |
|---------|---------|
| `#2A2A2A` | `theme.panelBackground` |
| `1px solid rgba(255, 255, 255, 0.1)` | `theme.panelBorder` |
| `12px` | `theme.panelBorderRadius` |
| `rgba(255, 255, 255, 0.85)` | `theme.textPrimary` |

#### 步骤 3: 替换为主题变量

```tsx
// 迁移后
const NewComponent: React.FC = () => {
  const { themeStyle } = useTheme();
  const theme = getThemeStyles(themeStyle);

  return (
    <div style={{
      backgroundColor: theme.panelBackground,
      border: theme.panelBorder,
      borderRadius: theme.panelBorderRadius,
      color: theme.textPrimary,
    }}>
      内容
    </div>
  );
};
```

### 自定义组件库迁移

如果你使用自定义组件库（如 Chakra UI、MUI），可以创建主题适配器：

```tsx
import { extendTheme } from '@chakra-ui/react';

const useChakraThemeAdapter = () => {
  const { themeStyle } = useTheme();
  const icTheme = getThemeStyles(themeStyle);

  return extendTheme({
    colors: {
      primary: icTheme.textAccent,
      background: icTheme.appBackground,
    },
    components: {
      Button: {
        baseStyle: {
          bg: icTheme.buttonBackground,
          color: icTheme.textPrimary,
          borderRadius: icTheme.buttonBorderRadius,
        },
      },
    },
  });
};
```

### 批量迁移脚本

对于大型项目，可以使用正则替换批量迁移：

```bash
# 替换硬编码的背景色
find src -name "*.tsx" -exec sed -i '' \
  's/backgroundColor: "#2A2A2A"/backgroundColor: theme.panelBackground/g' {} +

# 替换硬编码的文字颜色
find src -name "*.tsx" -exec sed -i '' \
  's/color: "rgba(255, 255, 255, 0.85)"/color: theme.textPrimary/g' {} +
```

### 迁移检查清单

完成迁移后，检查以下项目：

- [ ] 所有硬编码颜色已替换为主题变量
- [ ] 组件在所有主题下都能正常显示
- [ ] 浅色主题（Minimalism、Flat）的文字对比度正确
- [ ] 渐变边框主题（Gen-Z、Aurora）的边框正常显示
- [ ] 毛玻璃主题（Glassmorphism）的模糊效果正常
- [ ] 交互状态（悬停、激活、焦点）在所有主题下都清晰
- [ ] 主题切换流畅，无闪烁
- [ ] 主题选择被持久化到 localStorage

---

## 常见问题

### Q1: 为什么 Gen-Z 主题的渐变边框不显示？

**A**: Gen-Z、Spectrum、Aurora 等主题使用 `borderImage` 渐变边框，需要同时设置 `border` 和 `borderImage`：

```tsx
<div style={{
  border: theme.panelBorder, // '2px solid transparent'
  borderImage: theme.panelBorderImage, // 渐变
}}>
  内容
</div>
```

注意：`borderImage` 会覆盖 `border` 的颜色，但需要先设置 `border` 来定义宽度和样式。

### Q2: Glassmorphism 主题的模糊效果不明显？

**A**: `backdrop-filter` 需要底层有内容才能看到模糊效果。确保：

1. 面板是半透明的（`background: rgba(...)`）
2. 底层有背景或内容
3. 浏览器支持 `backdrop-filter`（Safari、Chrome、Edge）

```tsx
<div style={{ background: theme.appBackground }}>
  {/* 底层背景 */}
  <div style={{
    background: theme.panelBackground, // rgba(255, 255, 255, 0.1)
    backdropFilter: theme.panelBackdrop, // blur(40px)
  }}>
    面板 - 会模糊底层背景
  </div>
</div>
```

### Q3: Minimalism 主题的输入框底部线条不显示？

**A**: Minimalism 主题使用 `borderBottom` 而不是 `border`：

```tsx
<input
  style={{
    border: 'none', // 移除所有边框
    borderBottom: theme.inputBorderBottom, // 只保留底部线条
  }}
/>
```

### Q4: 如何判断当前是浅色还是深色主题？

**A**: 使用预定义的浅色主题列表：

```tsx
const isLightTheme = [
  'anthropic',
  'neumorphism',
  'minimalism',
  'flat',
  'garden'
].includes(themeStyle);

// 或者检查背景亮度
const isLightTheme = theme.appBackground.startsWith('#') &&
  parseInt(theme.appBackground.slice(1, 3), 16) > 128;
```

### Q5: 主题切换后组件没有更新？

**A**: 确保组件使用了 `useTheme` hook 并且正确订阅了主题变化：

```tsx
// ❌ 错误 - 主题只在组件挂载时获取一次
const theme = getThemeStyles('original');

// ✅ 正确 - 主题变化时会重新获取
const { themeStyle } = useTheme();
const theme = getThemeStyles(themeStyle);
```

### Q6: 如何创建自定义主题？

**A**: 在 `getThemeStyles` 函数中添加新的 case：

```typescript
// src/contexts/ThemeContext.tsx

export type ThemeStyle =
  | 'genz'
  | 'minimalism'
  // ... 其他主题
  | 'myCustomTheme'; // 添加新主题类型

export const getThemeStyles = (style: ThemeStyle) => {
  switch (style) {
    // ... 其他主题

    case 'myCustomTheme':
      return {
        appBackground: '#...',
        canvasBackground: '#...',
        panelBackground: '...',
        // ... 所有必需的属性
      };

    default:
      return { /* original theme */ };
  }
};
```

### Q7: 如何在主题之间平滑过渡？

**A**: 使用 CSS transitions：

```tsx
<div style={{
  backgroundColor: theme.panelBackground,
  color: theme.textPrimary,
  transition: 'all 0.3s ease-in-out', // 添加过渡
}}>
  内容
</div>
```

或者使用 Framer Motion：

```tsx
<motion.div
  animate={{
    backgroundColor: theme.panelBackground,
    color: theme.textPrimary,
  }}
  transition={{ duration: 0.3 }}
>
  内容
</motion.div>
```

### Q8: 主题颜色值的格式不一致怎么办？

**A**: 主题系统支持多种颜色格式：

- 十六进制：`#FF6B9D`
- RGBA：`rgba(255, 107, 157, 0.3)`
- 渐变：`linear-gradient(...)`

直接使用主题变量即可，浏览器会自动处理：

```tsx
<div style={{ background: theme.panelBackground }}>
  {/* 支持 #FFFFFF, rgba(...), linear-gradient(...) */}
</div>
```

### Q9: 如何处理打印样式？

**A**: 为打印创建专门的样式：

```tsx
const printStyles = `
  @media print {
    * {
      background: white !important;
      color: black !important;
      border-color: black !important;
    }
  }
`;
```

或者在打印时临时切换到 Minimalism 主题：

```tsx
const handlePrint = () => {
  const currentTheme = themeStyle;
  setThemeStyle('minimalism');
  window.print();
  setThemeStyle(currentTheme);
};
```

### Q10: 性能影响如何？

**A**: 主题系统的性能影响很小：

- ✅ 主题配置是纯对象，查找速度极快
- ✅ 使用 React Context 避免 prop drilling
- ✅ 使用 `useMemo` 缓存主题对象

优化建议：
```tsx
const theme = useMemo(() => getThemeStyles(themeStyle), [themeStyle]);
```

---

## 附录

### A. 完整主题列表

Infinite Canvas 提供15种主题：

| 主题名 | 类型 | 特点 |
|-------|------|------|
| **original** | 默认 | 深色专业风格 |
| **professional** | 商务 | 企业级毛玻璃效果 |
| **cyberpunk** | 赛博朋克 | 霓虹紫粉色调 |
| **minimal** | 极简 | 黑色主题极简设计 |
| **runway** | 创意 | 电影级玻璃美学 |
| **anthropic** | 品牌 | 温暖奶油色调 |
| **terminal** | 极客 | 黑客终端风格 |
| **neumorphism** | 新拟态 | 浮雕光影效果 |
| **garden** | 自然 | 数字花园色彩 |
| **spectrum** | 科技 | 光谱实验室风格 |
| **genz** | Z世代 | 霓虹赛博糖果 |
| **minimalism** | 极简 | 日式黑白美学 |
| **flat** | 扁平化 | Material Design |
| **glassmorphism** | 玻璃态 | 毛玻璃新拟态 |
| **aurora** | 梦幻 | 北极光流动色彩 |

### B. 主题属性完整列表

每个主题配置包含以下属性：

```typescript
interface ThemeConfig {
  // 背景系统
  appBackground: string;
  canvasBackground: string;

  // 面板系统
  panelBackground: string;
  panelBackdrop: string;
  panelBorder: string;
  panelBorderImage?: string;
  panelBorderRadius: string;
  panelShadow: string;

  // 按钮系统
  buttonBackground: string;
  buttonBackgroundHover: string;
  buttonBackgroundActive: string;
  buttonBorder: string;
  buttonBorderActive: string;
  buttonBorderRadius: string;
  buttonShadow?: string;
  buttonShadowActive?: string;

  // 文字系统
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textAccent: string;

  // 输入框系统
  inputBackground: string;
  inputBackdrop: string;
  inputBorder: string;
  inputBorderFocus: string;
  inputBorderRadius: string;
  inputBorderBottom?: string;
  inputBorderBottomFocus?: string;
  inputShadow?: string;

  // 渐变
  accentGradient: string;

  // 画布交互元素
  selectionStroke: string;
  selectionFill: string;
  handleFill: string;
  handleStroke: string;
  gridColor: string;

  // 生成中效果
  generatingBorder: string;
  generatingGlow: string;
  generatingPulseColor: string;

  // 特殊效果（可选）
  [key: string]: string | undefined;
}
```

### C. 浏览器兼容性

| 特性 | Chrome | Safari | Firefox | Edge |
|------|--------|--------|---------|------|
| backdrop-filter | ✅ 76+ | ✅ 9+ | ✅ 103+ | ✅ 79+ |
| border-image | ✅ 全部 | ✅ 全部 | ✅ 全部 | ✅ 全部 |
| CSS gradients | ✅ 全部 | ✅ 全部 | ✅ 全部 | ✅ 全部 |
| RGBA colors | ✅ 全部 | ✅ 全部 | ✅ 全部 | ✅ 全部 |

注意：`backdrop-filter` 在 Firefox 103+ 才完全支持，建议为旧版本浏览器提供降级方案。

### D. 相关资源

- [Figma 设计稿](https://www.figma.com/design/example)
- [主题可视化工具](/docs/theme-visualizations.html)
- [主题对比工具](/docs/theme-comparison.html)
- [设计系统文档](/docs/THEME_VISUALIZATIONS_README.md)

---

## 版本历史

### v1.0.0 (2026-01-16)
- 初始版本
- 添加 Gen-Z、Minimalism、Flat、Glassmorphism、Aurora 五个主题详细文档
- 完整的技术实现指南
- 组件示例和最佳实践
- 迁移指南和常见问题

---

**文档结束**

如有问题或建议，请联系设计团队或提交 Issue。
