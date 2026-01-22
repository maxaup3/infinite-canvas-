# 首页到画布过渡动效设计 V2

## 日期
2026-01-19

## 设计原则
- **风格**: 现代流畅 + 创意大胆
- **自然过渡**: 视觉焦点灵活，强调自然流畅
- **日常使用**: 适合反复观看，不会感到厌烦
- **明显差异**: 五个方案风格截然不同
- **性能优化**: 复杂效果需要降级处理

---

## 方案 1️⃣ - Liquid Morph（液态变形）

### 核心理念
对话框像液体一样流动变形，从首页中心"流淌"到画布底部。

### 时长
800ms

### 动画流程
1. **0-300ms**: 首页内容淡出
   - 首页元素向四周轻微扩散淡出
   - 对话框保持可见

2. **300-600ms**: 液态变形
   - 对话框使用 layout animation 从中心移动到底部
   - 应用自定义 spring 配置，产生"拉伸-回弹"效果
   - 边缘产生轻微的"波动"效果

3. **600-800ms**: 画布浮现
   - 画布网格从底部向上淡入
   - 顶部栏从上方滑入

### 技术实现
- **framer-motion**:
  - `AnimatePresence` 处理进入/退出
  - `layout` prop 实现自动布局动画
  - 自定义 spring: `{ type: "spring", stiffness: 100, damping: 20, mass: 1.5 }`
- **CSS**:
  - `border-radius` 动画产生"液态"效果
  - `filter: blur()` 在边缘产生柔和感

### 降级策略
低性能设备: 移除 blur 效果，简化 spring 配置

---

## 方案 2️⃣ - Depth Shift（深度推移）

### 核心理念
3D 空间感，首页向后退入"深处"，画布从前方推进。

### 时长
700ms

### 动画流程
1. **0-300ms**: 首页后退
   - 首页整体 scale(0.8) + translateZ(-200px)
   - 同时降低 opacity 和增加 blur

2. **300-500ms**: 空间切换
   - 画布从 scale(1.2) + translateZ(200px) 开始
   - 逐渐归位到 scale(1) + translateZ(0)

3. **500-700ms**: 元素归位
   - 对话框从中心移动到底部
   - 顶部栏淡入

### 技术实现
- **CSS 3D Transforms**:
  - `perspective: 1200px` 创建 3D 空间
  - `transform-style: preserve-3d`
- **framer-motion**:
  - 控制 scale、translateZ、opacity
  - Easing: `[0.43, 0.13, 0.23, 0.96]` (Custom easeInOutQuart)

### 降级策略
低性能设备: 移除 translateZ，仅使用 2D scale 和 opacity

---

## 方案 3️⃣ - Ripple Unfold（涟漪展开）

### 核心理念
从对话框中心产生涟漪波纹，画布像水面一样展开。

### 时长
900ms

### 动画流程
1. **0-200ms**: 涟漪启动
   - 从对话框中心产生第一圈涟漪
   - 对话框轻微放大 (scale 1.05)

2. **200-600ms**: 涟漪扩散
   - 3-4 圈涟漪向外扩散
   - 首页内容被涟漪"推开"淡出
   - 画布网格随涟漪从中心向外显现

3. **600-900ms**: 归位稳定
   - 涟漪消散
   - 对话框移动到底部
   - 顶部栏淡入

### 技术实现
- **Canvas 2D**:
  - 绘制同心圆涟漪，使用 `requestAnimationFrame`
  - 涟漪波纹: `Math.sin()` 产生波动效果
- **framer-motion**:
  - 控制页面元素的淡入淡出
  - 对话框移动动画
- **性能优化**:
  - Canvas 限制在 60fps
  - 涟漪数量控制在 4 圈以内

### 降级策略
低性能设备: 移除 Canvas 涟漪，改用简单的径向渐变动画

---

## 方案 4️⃣ - Magnetic Snap（磁吸归位）

### 核心理念
元素像被磁铁吸引，快速但优雅地"啪"一下归位。

### 时长
500ms

### 动画流程
1. **0-150ms**: 磁力启动
   - 首页元素快速向对话框方向"吸"
   - 产生轻微的"拖尾"效果

2. **150-350ms**: 快速移动
   - 对话框沿贝塞尔曲线路径快速移动到底部
   - 使用强烈的 spring 效果 (stiffness: 400, damping: 25)
   - 移动过程中有轻微的旋转 (rotate: -2deg → 0deg)

3. **350-500ms**: 回弹稳定
   - 对话框到达底部后有轻微回弹
   - 画布网格快速淡入
   - 顶部栏快速滑入

### 技术实现
- **framer-motion**:
  - `useMotionValue` 和 `useTransform` 创建路径动画
  - 强 spring 配置: `{ type: "spring", stiffness: 400, damping: 25 }`
  - 运动模糊效果 (可选): `filter: blur(2px)` 在快速移动时
- **SVG Path**:
  - 定义贝塞尔曲线路径
  - `useMotionPathControls` 沿路径移动

### 降级策略
低性能设备: 移除运动模糊和路径动画，使用直线移动

---

## 方案 5️⃣ - Light Sweep（光影扫过）

### 核心理念
光影从左到右扫过，像舞台换幕一样优雅切换场景。

### 时长
600ms

### 动画流程
1. **0-200ms**: 光影启动
   - 从左侧开始出现一道垂直光带
   - 光带宽度约 200px，带有柔和的渐变边缘

2. **200-450ms**: 扫过过程
   - 光带从左向右移动，扫过的区域:
     - 首页内容淡出
     - 画布内容淡入
   - 对话框在光带扫到时开始移动到底部

3. **450-600ms**: 完成稳定
   - 光带移出右侧边缘
   - 所有元素归位
   - 添加轻微的"闪光"结束效果

### 技术实现
- **CSS Gradients + Mask**:
  - `linear-gradient` 创建光带
  - `mask-image` 或 `clip-path` 实现扫过效果
- **framer-motion**:
  - 控制光带位置 (translateX)
  - 协调页面内容的淡入淡出
  - Easing: `[0.65, 0, 0.35, 1]` (easeInOutCubic)
- **性能**:
  - 使用 `will-change: transform` 优化
  - GPU 加速的 transform 属性

### 降级策略
低性能设备: 移除光带效果，改用简单的左右滑动过渡

---

## 技术架构

### 状态管理
```typescript
type TransitionVariant = 'liquid' | 'depth' | 'ripple' | 'magnetic' | 'light';

interface TransitionState {
  variant: TransitionVariant;
  isTransitioning: boolean;
  phase: 'idle' | 'exit' | 'enter' | 'complete';
}
```

### 组件结构
```
App.tsx
├── LandingPage.tsx
│   └── TransitionWrapper (根据 variant 选择动画)
└── Canvas (画布页面)
    └── TransitionWrapper (根据 variant 选择动画)
```

### 性能检测
```typescript
// 检测设备性能
const isLowPerformance = () => {
  const ua = navigator.userAgent;
  const isMobile = /Mobile|Android|iPhone/i.test(ua);
  const hasLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
  return isMobile || hasLowMemory;
};

// 根据性能选择降级版本
const getTransitionConfig = (variant: TransitionVariant) => {
  if (isLowPerformance()) {
    return simplifiedConfigs[variant];
  }
  return fullConfigs[variant];
};
```

---

## 用户体验

### 方案选择器
在首页顶部导航栏添加5个按钮，标记为 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣，用户可以快速切换体验。

### 默认方案
建议默认使用 **方案 2 (Depth Shift)**，因为它:
- 性能稳定
- 视觉效果明显但不过度
- 适合日常使用

### 可访问性
- 检测 `prefers-reduced-motion`
- 如果用户偏好减少动画，所有方案都降级为简单的 300ms 淡入淡出
