# 首页到画布过渡动效设计

## 日期
2026-01-19

## 概述
设计三种不同风格的过渡动效，用户可以实际体验后选择最合适的方案。

## 方案 A：快速流畅 (Rapid Flow)

### 时长
400ms

### 动画流程
1. **0-200ms**: 首页内容快速缩小淡出
   - Logo 快速缩小并移动到顶部栏位置
   - 其他元素同步缩小淡出
   - 对话框开始放大

2. **200-400ms**: 画布元素淡入
   - 对话框完成放大，移动到底部
   - 顶部栏淡入
   - 画布网格快速淡入

### 缓动函数
- `cubic-bezier(0.4, 0, 0.2, 1)` - Material Design 标准缓动

### 特点
- 快速高效
- 减少等待时间
- 适合频繁切换的用户

---

## 方案 B：平滑优雅 (Smooth Morph)

### 时长
1000ms

### 动画流程
1. **0-400ms**: 准备阶段
   - 首页次要内容向两侧滑出淡出
   - Logo 和对话框保持可见

2. **400-700ms**: 变形阶段
   - 对话框从中心平滑移动到底部位置
   - Logo 优雅地弧线飞行到顶部栏
   - 背景从首页风格渐变到画布网格

3. **700-1000ms**: 完成阶段
   - 顶部栏其他元素淡入
   - 画布网格完全显示
   - 侧边栏图标淡入

### 缓动函数
- 移动: `cubic-bezier(0.65, 0, 0.35, 1)` - 优雅的缓动
- 淡入淡出: `ease-in-out`

### 特点
- 视觉连续性强
- 优雅的品牌体验
- 让用户理解界面转换

---

## 方案 C：创意惊艳 (Portal Effect)

### 时长
1200ms

### 动画流程
1. **0-300ms**: Portal 启动
   - 对话框边缘开始发光
   - 周围产生能量涟漪
   - 首页内容轻微晃动

2. **300-700ms**: 传送阶段
   - 对话框作为中心快速放大
   - 粒子从对话框向外爆炸/螺旋扩散
   - 首页元素被"吸入"消失
   - 产生径向模糊效果

3. **700-1000ms**: 画布浮现
   - 画布网格从中心向外扩散显示
   - 粒子逐渐消散
   - 顶部栏和侧边栏从边缘滑入

4. **1000-1200ms**: 稳定
   - 所有元素归位
   - 发光效果淡出

### 视觉效果
- 径向模糊 (radial blur)
- 粒子系统 (100-200 粒子)
- 发光效果 (glow/bloom)
- 涟漪扩散

### 缓动函数
- Portal 放大: `cubic-bezier(0.34, 1.56, 0.64, 1)` - 弹性效果
- 粒子: `ease-out`
- 淡入淡出: `cubic-bezier(0.4, 0, 0.2, 1)`

### 特点
- 视觉冲击力强
- 科技感/魔法感
- 适合首次使用或特殊场景

---

## 技术实现

### 状态管理
```typescript
type TransitionVariant = 'rapid' | 'smooth' | 'portal';
type TransitionPhase = 'idle' | 'phase1' | 'phase2' | 'phase3' | 'complete';

const [transitionVariant, setTransitionVariant] = useState<TransitionVariant>('smooth');
const [transitionPhase, setTransitionPhase] = useState<TransitionPhase>('idle');
```

### 组件结构
1. 修改 `App.tsx` - 添加 variant 选择
2. 修改 `LandingPage.tsx` - 实现三种过渡动画
3. 使用 CSS animations 和 transforms
4. Portal 方案使用 Canvas/SVG 绘制粒子效果

### 性能考虑
- 使用 `transform` 和 `opacity` (GPU 加速)
- 避免 `width`/`height`/`left`/`top` 改变
- Portal 方案粒子数量控制在 200 以内
- 使用 `will-change` 提示浏览器优化

---

## 用户体验

### 切换方式
在设置中添加"过渡动效"选项，用户可以选择：
- 快速流畅
- 平滑优雅
- 创意惊艳

### 默认方案
建议默认使用"平滑优雅"，因为它平衡了速度和视觉效果。

### 可访问性
- 提供"减少动画"选项，遵循 `prefers-reduced-motion`
- 减少动画模式下使用最简单的淡入淡出
