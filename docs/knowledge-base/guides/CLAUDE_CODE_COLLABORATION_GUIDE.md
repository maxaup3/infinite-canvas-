# Claude Code + Cursor + Figma MCP 协作指南
## 为设计师打造的开发工具使用教程

---

## 📚 目录

1. [工具生态介绍](#工具生态介绍)
2. [完整工作流程](#完整工作流程)
3. [核心概念速览](#核心概念速览)
4. [5个实战案例](#5个实战案例)
5. [最佳实践清单](#最佳实践清单)
6. [常见问题解答](#常见问题解答)

---

## 🔧 工具生态介绍

### Claude Code（主决策引擎）
**用途：** AI驱动的代码分析、修改、问题诊断

**核心能力：**
- 读取和编辑代码文件
- 执行终端命令（git、npm、测试等）
- 分析大型PDF设计文档
- 理解React/TypeScript代码逻辑
- 提供修复方案和权衡分析

**与设计师的交互模式：**
- 你描述问题 → Claude 诊断 → 提供修复选项
- 你反馈"效果差" → Claude 立即回退并尝试新方案
- 你提交PDF文档 → Claude 读取并总结关键要点

**在本项目中的表现：**
```
成功案例：
✅ 发现并修复了 localStorage 状态污染问题
✅ 识别了拖动状态在 editMode 变化时未重置的 bug
✅ 实现了滚轮缩放功能
✅ 回退了不满意的拖动修复实现（git checkout）

失败/学习案例：
❌ 第一次手动拖动逻辑实现"效果很差"
  → 原因：理论优化 ≠ 实际体验
  → 教训：相信设计师的感受，立即迭代
```

### Cursor（开发环境中心）
**用途：** 代码编辑、终端运行、文件浏览、实时调试

**核心能力：**
- TypeScript/ESLint 实时编译检查
- 终端集成（npm start、git 命令）
- 文件浏览和快速搜索
- 与 Claude Code 的无缝集成

**设计师使用流程：**
1. 在 Cursor 中打开项目文件夹
2. 启动开发服务器（`npm run dev`）
3. 浏览器打开 `http://localhost:5174`
4. 在 Cursor 终端中与 Claude Code 交互
5. 修改代码后自动刷新预览

**关键快捷键：**
```
Cmd+K        → 打开 Claude Code 对话框
Cmd+Shift+P  → 命令面板（快速打开文件、运行任务）
Cmd+J        → 切换集成终端
Cmd+,        → 打开设置
Cmd+/        → 行注释
```

### Figma MCP（协作工具）
**用途：** 与设计稿同步、导出设计数据

**核心能力：**
- 在 Figma 中设计 UI 组件
- 导出为 React 代码框架
- 与 Claude Code 共享设计规范

**在本项目中的潜力：**
- 在 Figma 中设计图层编辑界面
- 导出颜色和动画规范到代码
- 与开发 UI 组件保持同步

---

## 🔄 完整工作流程

### 第一步：需求阶段
**谁参与：** 设计师、产品经理、开发者

**关键动作：**
1. 清晰描述问题或需求
   ```
   ❌ 不好：
   "图片有问题"

   ✅ 好：
   "刷新后欢迎页面不显示，app 直接进入画布"
   ```

2. 提供上下文信息
   ```
   关键信息：
   - 这是一个 demo（非生产应用）
   - 应该每次刷新都重置到欢迎状态
   - 用户需要理解这是新手入门体验
   ```

3. 准备设计文档（如果需要大改）
   ```
   例如：
   - PDF 产品文档
   - Figma 设计稿
   - 原型和交互说明
   ```

### 第二步：诊断阶段
**谁参与：** Claude Code + 设计师反馈

**Claude 的工作：**
1. 读取关键代码文件
2. 运行 TypeScript 编译检查
3. 分析根本原因
4. 提出修复方案（有时多个选项）

**设计师的工作：**
1. 确认诊断是否符合实际观察
2. 澄清需求中的模糊点
3. 反馈 Claude 的理解是否正确

**本项目例子：**
```
设计师反馈：
"刷新后欢迎页面不显示"

Claude 诊断：
→ 读取 src/App.tsx
→ 发现 App 中没有 localStorage 初始化
→ useEffect 不存在
→ hasCompletedOnboarding 未被设置

设计师澄清：
"demo 应该每次都重置，不需要 localStorage"

修正方案：
→ 删除 localStorage 逻辑
→ 硬编码 hasCompletedOnboarding={false}
```

### 第三步：实现阶段
**谁参与：** Claude Code（写代码）+ 设计师（指导）

**Claude 的工作流：**
```typescript
1. 理解修改范围
   "我将修改 src/App.tsx 中的欢迎页状态逻辑"

2. 读取原文件
   const fileContent = await read('src/App.tsx');

3. 制定修改策略
   "删除 localStorage 逻辑，添加 useEffect 重置状态"

4. 执行修改
   edit(file_path, old_code, new_code);

5. 编译验证
   bash('npx tsc --noEmit');

6. 提交说明
   "修改完成。hasCompletedOnboarding 现在始终为 false，
    每次刷新都会显示欢迎页面。"
```

**设计师的角色：**
- ✅ 确认修改逻辑是否符合预期
- ✅ 指出任何遗漏的地方
- ✅ 建议更好的实现方式（如果有想法）
- ✅ 测试修改的实际效果

### 第四步：测试阶段
**谁参与：** 设计师（主要测试者）+ Claude Code（自动检查）

**设试清单：**
```
[ ] 编译无错误（TypeScript）
[ ] 开发服务器能启动
[ ] 功能表现符合预期
[ ] 没有引入新的 bug
[ ] UI 在不同设备/浏览器上正常
```

**本项目的测试流程：**
```bash
# Claude 会自动做的
$ npx tsc --noEmit          # 检查 TypeScript 错误
$ npm run dev               # 启动开发服务器

# 设计师需要做的
→ 打开 http://localhost:5174
→ 刷新页面，观察欢迎页是否显示
→ 点击 "Let's Start" 进入画布
→ 尝试拖动、缩放、编辑图片
→ 检查是否有新问题出现
```

### 第五步：反馈/迭代
**谁参与：** 设计师（反馈）→ Claude Code（改进）

**反馈类型和回应：**

**类型1：功能完全错误**
```
设计师："滚轮缩放反了，向下应该放大，向上应该缩小"

Claude 回应：
→ 理解问题根源
→ 找到 handleWheel 中的 deltaY 判断逻辑
→ 反转方向：e.evt.deltaY > 0 改为 e.evt.deltaY < 0
→ 重新测试
```

**类型2：实现质量不好**
```
设计师："实现效果很差，先回复之前的方式好了"

Claude 回应（本项目真实案例）：
→ 完全接受反馈，不辩解
→ 立即执行 git checkout 回退
→ 恢复到上一个可用版本
→ 保留学习经验（为什么失败了）
```

**类型3：需求澄清**
```
设计师："但这样的话，欢迎页面每次都重置..."

Claude 回应：
→ 确认理解
→ 如果需求不同，提出新方案选项
→ 等待设计师最终确认
```

### 第六步：文档同步
**谁参与：** 设计师（提供设计文档）+ Claude Code（学习文档）

**文档类型：**
1. **产品文档（PDF）**
   - 功能模块说明
   - 用户流程定义
   - 业务逻辑规则

2. **设计文档（Figma）**
   - UI 组件库
   - 交互说明
   - 动画规范

3. **技术文档（GitHub/Notion）**
   - 架构设计
   - API 接口定义
   - 数据结构说明

**Claude 的文档学习流程：**
```
设计师：
"请阅读这份基于 Layer 的画布推演文档，
 理解图层编辑的完整设计思路"

Claude：
1. 读取 PDF 文件内容
2. 提取关键概念（图层、编辑、存储）
3. 理解产品流程
4. 生成实现建议
5. 与现有代码对齐

输出：
"我已经阅读了文档。以下是关键概念：
 - 基于 Layer 模型的分层编辑
 - 生成任务与参数管理
 - 编辑功能点设计（选中、拖动、缩放）
 - 存储和配额管理

根据这些，我建议在 Canvas.tsx 中：
 1. 扩展 ImageLayer 类型支持更多属性
 2. 实现图层分组和批量操作
 3. 添加编辑历史和撤销功能"
```

---

## 💡 核心概念速览

### 1. React Hooks 生命周期管理
**问题背景：** 拖动 bug 案例

**概念：** `ref` 和 `state` 在组件重新渲染时的行为不同

```typescript
// ❌ 问题代码：ref 未被清除
const isDragging = false;           // state
const dragActivatedRef = useRef();  // ref（不会在重新渲染时重置）

// 当 editMode 变化时，组件重新渲染，但 ref 仍保留旧值
// 导致拖动状态污染

// ✅ 解决方案：在 useEffect 中显式清除
useEffect(() => {
  setIsDragging(false);
  dragActivatedRef.current = null;
}, [editMode]); // 监听 editMode 变化，主动清除
```

**设计师视角的理解：**
- `state` 像"可见的设置"（每次刷新重置）
- `ref` 像"隐藏的记忆"（保留直到显式清除）
- 当模式（editMode）变化时，需要清除隐藏的记忆

### 2. 事件处理的阈值判断
**问题背景：** 拖动阈值设置

**概念：** 区分"点击"和"拖动"

```typescript
// 鼠标按下位置
dragStartPosRef.current = { x: 100, y: 100 };

// 鼠标移动到新位置
const currentPos = { x: 102, y: 105 };

// 计算距离
const distance = Math.sqrt(
  Math.pow(currentPos.x - dragStartPos.x, 2) +
  Math.pow(currentPos.y - dragStartPos.y, 2)
);

// 阈值判断（通常 5px）
if (distance > 5) {
  // 激活拖动
  dragActivatedRef.current = true;
}
```

**设计师视角的理解：**
- 没有阈值：任何移动都会被视为拖动（精确但敏感）
- 有阈值：轻微移动不会触发拖动（容错性好）
- 通常设为 5-10px，平衡精度和易用性

### 3. 状态持久化的权衡
**问题背景：** localStorage 需求澄清

**概念：** 什么时候应该保存状态

```typescript
// 场景A：生产应用（应该持久化）
useEffect(() => {
  const saved = localStorage.getItem('onboarding');
  if (saved) setHasCompletedOnboarding(true);
}, []);

// 场景B：Demo 应用（每次重置）
// 不要使用 localStorage，硬编码状态
<Canvas hasCompletedOnboarding={false} />

// 场景C：需要混合（记住用户选择，但允许重置）
useEffect(() => {
  const saved = localStorage.getItem('userPreference');
  setUserPreference(saved || defaultValue);
}, []);

// 提供"重置"按钮
const handleReset = () => {
  localStorage.removeItem('userPreference');
  setUserPreference(defaultValue);
};
```

**设计师视角的理解：**
- 新手教程 → 不持久化（每次重新学习）
- 用户偏好 → 持久化（记住用户选择）
- Demo 演示 → 不持久化（展示完整流程）

### 4. Konva 库的图形操作
**问题背景：** Canvas.tsx 中的图片渲染和交互

**概念：** Konva 的组件和事件系统

```typescript
// 基本结构
<Stage width={window.innerWidth} height={window.innerHeight}>
  <Layer>
    <Group
      x={layer.x}
      y={layer.y}
      draggable={true}  // 启用拖动
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onWheel={handleWheel}
    >
      {/* 图片本体 */}
      <KonvaImage
        image={image}
        width={displayWidth}
        height={displayHeight}
      />

      {/* 选中框 */}
      {isSelected && (
        <Rect
          x={0}
          y={0}
          width={displayWidth}
          height={displayHeight}
          stroke="#38BDFF"
          strokeWidth={2}
        />
      )}
    </Group>
  </Layer>
</Stage>
```

**设计师视角的理解：**
- `Stage` = 画布容器
- `Layer` = 图层（多个 Layer 可以做出分层效果）
- `Group` = 分组（便于统一移动、旋转、缩放）
- `onWheel` = 滚轮事件（用于缩放）
- `draggable` = 启用拖动（Konva 的内置功能）

### 5. TypeScript 类型系统的价值
**问题背景：** 编译时错误检查

**概念：** 强类型带来的代码安全性

```typescript
// ❌ JavaScript（运行时才发现错误）
const layer = { width: 100 };
layer.height.toString(); // 运行时报错：Cannot read property 'toString' of undefined

// ✅ TypeScript（编译时发现错误）
interface ImageLayer {
  id: string;
  width: number;
  height: number; // 必须有此属性
}

const layer: ImageLayer = { width: 100 };
// 编译错误：Property 'height' is missing

// 修复
const layer: ImageLayer = { id: '1', width: 100, height: 80 };
layer.height.toString(); // ✅ 安全
```

**设计师视角的理解：**
- TypeScript = "代码的智能助手"
- 在你写错前就提醒你
- 减少调试时间，提高代码可靠性

---

## 🎯 5个实战案例

### 案例1：欢迎页面持久化问题 ⭐⭐⭐

**问题描述：**
> 用户报告：刷新后欢迎页面不显示，直接进入画布

**诊断过程：**

**步骤1：理解需求**
```
设计师信息：这是一个 demo，应该每次刷新都显示欢迎页面
```

**步骤2：读取代码**
```typescript
// src/App.tsx 之前的状态
const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

// ❌ localStorage 逻辑被添加了
useEffect(() => {
  const saved = localStorage.getItem('hasCompletedOnboarding');
  if (saved === 'true') {
    setHasCompletedOnboarding(true);
  }
}, []);
```

**步骤3：识别问题**
- localStorage 使欢迎状态被记住
- 用户第一次点击"开始"后，状态被保存
- 刷新时读取保存的状态，跳过欢迎页
- 这对 demo 应用不合适

**步骤4：澄清需求**
```
Claude："这是想让用户每次都看到欢迎页，还是保留进度？"
设计师："demo 每次都重置，就像第一次使用"
```

**步骤5：实现方案**
```typescript
// ✅ 删除 localStorage，硬编码状态
// src/App.tsx
<Canvas
  hasCompletedOnboarding={false}  // 始终 false
  // ... 其他 props
/>
```

**步骤6：测试验证**
```
□ 刷新页面
□ 观察欢迎页显示
□ 点击"Let's Start"进入画布
□ 再次刷新，欢迎页再次出现
✅ 符合预期
```

**关键学习点：**
- 需求不应该被假设，要明确确认
- Demo 和生产应用的状态管理策略不同
- localStorage 在某些场景下是反面模式

---

### 案例2：拖动状态污染 Bug ⭐⭐⭐⭐

**问题描述：**
> 用户报告：有时选中的图片还会跟著鼠标跑，照理应该拖动才移动

**症状观察：**
```
1. 点击选中图片
2. 有时按 C 键切换 editMode
3. 鼠标轻微移动
4. ❌ 图片跟着鼠标走（不应该）
```

**诊断过程：**

**步骤1：分析代码结构**
```typescript
// ImageNode 组件状态
const [isDragging, setIsDragging] = useState(false);
const dragStartPosRef = useRef<{ x: number; y: number } | null>(null);
const dragActivatedRef = useRef(false);
```

**步骤2：追踪拖动流程**
```typescript
// 当用户点击图片
const handleDragStart = () => {
  setIsDragging(true);  // ← state 被设置为 true
  dragActivatedRef.current = false;  // ← ref 被设置
};

// 当用户切换 editMode（按 C 键）
// 组件重新渲染
// state isDragging 被重置为 false ✅
// 但 ref dragActivatedRef 保留旧值 ❌
```

**步骤3：发现根本原因**
```
Timeline 事件序列：
1. T1: 用户点击图片 → isDragging = true, dragActivatedRef = false
2. T2: 用户按 C 键 → editMode 变化
3. T3: 组件重新渲染 → isDragging 重置为 false
4. T4: 但 dragActivatedRef 仍是 false（ref 没有被清除）
5. T5: 鼠标移动 → onDragMove 被触发
6. T6: 代码检查 isDragging（true？false？混乱）→ 行为不确定
```

**步骤4：实现修复**
```typescript
// 监听 editMode 变化，显式清除拖动相关状态
useEffect(() => {
  setIsDragging(false);
  dragStartPosRef.current = null;
  dragActivatedRef.current = false;
}, [editMode]); // ← 关键：监听 editMode 变化
```

**步骤5：验证修复**
```
□ 选中图片
□ 按 C 切换 editMode
□ 鼠标移动
✅ 图片不再跟随鼠标
```

**关键学习点：**
- `ref` 和 `state` 的生命周期管理至关重要
- `ref` 不会因重新渲染自动清除
- 状态变化时需要显式清除相关 refs
- useEffect 依赖项要覆盖所有可能改变状态的事件

---

### 案例3：滚轮缩放功能实现 ⭐⭐⭐

**需求描述：**
> 用户请求：支持图片在画板上放大缩小（通过鼠标滚轮）

**设计考量：**
- 向上滚动 = 放大
- 向下滚动 = 缩小
- 只有选中且未锁定的图片才能缩放
- 应该保留宽高比

**实现步骤：**

**步骤1：理解滚轮事件**
```typescript
const handleWheel = useCallback((e: any) => {
  // e.evt.deltaY 表示滚动距离
  // deltaY > 0 = 向下滚
  // deltaY < 0 = 向上滚

  const delta = e.evt.deltaY > 0 ? -10 : 10;
  // 向下滚（deltaY > 0）→ delta = -10（缩小）
  // 向上滚（deltaY < 0）→ delta = 10（放大）
}, []);
```

**步骤2：计算新尺寸**
```typescript
const newHeight = Math.max(50, layer.height + delta);
// Math.max(50, ...) 确保最小高度为 50px，防止消失

// 宽度自动计算（保持宽高比）
const displayWidth = image ?
  (image.width / image.height) * newHeight :
  newHeight;
```

**步骤3：验证条件**
```typescript
const handleWheel = useCallback((e: any) => {
  // ✅ 条件1：图片被选中
  if (!isSelected) return;

  // ✅ 条件2：图片未被锁定
  if (layer.locked) return;

  // ✅ 条件3：防止默认滚动
  e.evt.preventDefault();
  e.evt.stopPropagation();

  // ... 缩放逻辑
}, [isSelected, layer.locked, layer.height, onUpdate]);
```

**步骤4：绑定事件**
```typescript
<Group
  x={layer.x}
  y={layer.y}
  draggable={true}
  onWheel={handleWheel}  // ← 添加滚轮事件
>
  {/* 图片内容 */}
</Group>
```

**步骤5：测试验证**
```
□ 在画布中放置图片
□ 点击选中图片
□ 向上滚动鼠标 → 图片放大
□ 向下滚动鼠标 → 图片缩小
□ 最小高度不低于 50px
□ 宽高比保持不变
✅ 所有测试通过
```

**关键学习点：**
- 理解原生浏览器事件（deltaY 值）
- 合理设置最小/最大值约束
- 同时管理多个相关属性（height 和 width）
- 验证用户交互的前置条件（选中、未锁定）

---

### 案例4：拖动修复的失败与回退 ⭐⭐⭐⭐⭐

**问题描述：**
> 用户反馈：选中图片时立即跟随鼠标，应该只有拖动时才移动

**初始尝试方案：**

**步骤1：诊断根本原因**
```typescript
// Konva 的自动拖动
<Group draggable={true}>
  {/* 这会立即启用拖动，任何移动都会触发 */}
</Group>
```

**步骤2：理论上的解决方案**
```typescript
// 禁用自动拖动
<Group draggable={false}>
  {/* 手动实现拖动逻辑 */}
</Group>

// 手动处理
const handleMouseDown = () => {
  dragStartPos = currentPos;
};

const handleMouseMove = (e) => {
  const distance = calculateDistance(dragStartPos, currentPos);

  // 只有超过 5px 阈值才激活拖动
  if (distance > 5 && !dragActivated) {
    dragActivated = true;
  }

  if (dragActivated) {
    moveImage(e.clientX - dragStartPos.x);
  }
};
```

**步骤3：实现和测试**
```
Claude：
"我已经实现了手动拖动逻辑，禁用 Konva 的 draggable，
 添加了 5px 阈值检测，应该能解决这个问题。"

测试结果：✅ TypeScript 编译通过
         ✅ 开发服务器能启动
         ❌ 用户反馈：实现效果很差
```

**步骤4：反馈和决策**
```
用户："实现效果很差，先回复之前的方式好了"

关键决策：
✅ 完全接受反馈，不辩解
✅ 立即回退，恢复原来的代码
✅ 保留学习经验
```

**步骤5：回退执行**
```bash
# Claude 执行
git checkout src/components/Canvas.tsx

# 结果
✅ 恢复到上一个稳定版本
✅ Konva draggable 恢复为 true
✅ 手动拖动逻辑被删除
```

**为什么失败了？**

分析失败的三个层面：

```
层面1：理论 vs 实践
─────────────────
理论上：手动拖动逻辑更精细，应该更好
实践中：Konva 的 draggable 经过充分测试，手动实现可能有边界问题
       例如：移动时的卡顿、滚轮冲突、多指触摸等

层面2：代码质量
─────────────
问题可能包括：
- onMouseMove 事件处理的性能
- Group 移动时的坐标转换
- 与其他事件（onWheel、onDragStart）的冲突

层面3：设计师的感觉
─────────────────
设计师作为最终用户，他的"效果差"反馈：
✅ 是最重要的评判标准
✅ 代表了实际的交互体验
✅ 理论再好也不能推翻实际体验
```

**关键学习点：**

1. **快速失败的价值**
   ```
   ❌ 花费 2 小时优化一个理论上更好的方案
   ✅ 花费 15 分钟尝试，然后立即回退

   时间投入：15 分钟 vs 120 分钟= 节省 87.5% 时间
   学习价值：理论 vs 实践的教训
   ```

2. **相信设计师的反馈**
   ```
   设计师（最终用户）的感受 > Claude 的理论分析
   ```

3. **保留学习不保留代码**
   ```
   即使失败的代码被删除，我们学到了：
   ✓ 什么时候不应该替换 Konva 的内置功能
   ✓ 何时手动实现会导致复杂性增加
   ✓ 优化不一定等于改进
   ```

4. **Git 的威力**
   ```bash
   git checkout file  # 让失败的尝试零成本
   ```

---

### 案例5：中英文文案统一 ⭐⭐

**问题描述：**
> 用户反馈：UI 中混有中英文，应该统一为中文

**问题症状：**
```
输入框占位符：
- "What do you want to create today?" ← 英文
- "Search images..." ← 英文
- "输入你的创意想法" ← 中文

用户体验：不一致，显得产品草率
```

**解决过程：**

**步骤1：全局搜索**
```bash
# 在 Cursor 中搜索所有英文占位符
placeholder="What
placeholder="Search
placeholder="Enter

结果：在以下文件中找到
- src/components/BottomDialog.tsx
- src/components/LibraryDialog.tsx
- src/components/LoraSelector.tsx
- src/components/ModelSelector.tsx
```

**步骤2：逐文件修改**
```typescript
// src/components/BottomDialog.tsx
// ❌ 之前
placeholder="What do you want to create today?"

// ✅ 修改后
placeholder="输入你的创意想法"

// src/components/LibraryDialog.tsx
// ❌ 之前
placeholder="Search images..."

// ✅ 修改后
placeholder="搜索图片"

// 其他文件类似
```

**步骤3：验证**
```
□ 所有输入框检查
□ 所有提示信息检查
□ UI 中没有遗留的英文
✅ 整体风格一致
```

**关键学习点：**
- 小改动也需要全局搜索，确保一致性
- 文案统一是产品品质的体现
- 使用 IDE 的搜索功能高效定位

---

## ✅ 最佳实践清单

### 与 Claude Code 协作的最佳实践

**1. 清晰描述问题（50% 的成功来自清晰描述）**
```
❌ 不好：
"这个功能有 bug"

✅ 好：
"当我点击图片然后按 C 键切换编辑模式时，
 鼠标轻微移动会导致图片跟随鼠标，
 实际上应该只有拖动时才移动"
```

**2. 提供上下文信息**
```
✅ 包含以下信息：
- 这是一个 demo/生产应用
- 用户使用场景
- 期望行为 vs 实际行为
- 首次出现还是间歇出现
```

**3. 及时反馈实现质量**
```
✅ 及时反馈：
"这个实现效果很好/很差"

✅ 具体反馈：
"缩放时有卡顿，滚轮方向不对，最小尺寸太小"

✅ 承认成功：
"这样修复正确了，谢谢"
```

**4. 允许 Claude 提出方案**
```
✅ 让 Claude 分析：
"读取代码后，我发现有两种可能的方案：
 方案A：修改 state，影响渲染性能
 方案B：修改 ref，只需修改初始化逻辑
 你更倾向哪个？"

✅ 选择权在你：
设计师可以选择任何方案，或提出第三种
```

**5. 充分利用版本控制**
```
✅ 尽量尝试新方案
git checkout file  # 失败了快速回退

✅ 不要担心搞坏代码
version control 是你的安全网
```

### Cursor 使用最佳实践

**1. 分屏工作**
```
┌─────────────────────────────────────┐
│ 浏览器预览  │  Cursor 代码编辑      │
│ 实时看效果  │  修改代码             │
│             │  终端运行命令         │
└─────────────────────────────────────┘
```

**2. 快速键盘导航**
```
Cmd+K         → 快速打开 Claude Code
Cmd+P         → 快速打开文件
Cmd+F         → 在文件中搜索
Cmd+Shift+F   → 跨文件搜索
Cmd+J         → 切换终端
Cmd+L         → 清空终端
```

**3. 终端快速命令**
```bash
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npx tsc --noEmit    # 检查 TypeScript 错误
git log --oneline   # 查看提交历史
git diff             # 查看改动
git checkout file    # 回退文件
```

### 代码修改的最佳实践

**1. 一次只修改一个问题**
```
✅ 好的修改序列：
1. 修复问题 A（提交）
2. 修复问题 B（提交）
3. 修复问题 C（提交）

❌ 不好的修改序列：
同时修改 A、B、C 混在一起
→ 如果有问题，无法精确定位是哪个改动造成的
```

**2. 每次修改后都检查编译**
```bash
# 在 Cursor 终端运行
npx tsc --noEmit

# 没有输出 = 编译成功 ✅
# 有错误信息 = 立即修复 ⚠️
```

**3. 修改前读取文件，修改后验证**
```
修改流程：
1. 读取文件（理解现有逻辑）
2. 制定方案（明确改动点）
3. 执行修改（Edit 工具）
4. 验证编译（tsc --noEmit）
5. 功能测试（在浏览器中测试）
6. 反馈确认（设计师验证）
```

### 文档管理最佳实践

**1. PDF 文档的处理**
```
✅ Claude 可以读取和总结 PDF
✅ 提取核心概念和流程
✅ 与现有代码对齐实现建议

用法：
设计师：
"请读取这份 PDF，理解产品需求，
 然后告诉我应该在哪些文件中做改动"

Claude：
读取 PDF → 提取信息 → 分析现有代码 → 给出建议
```

**2. Figma 设计的同步**
```
✅ 在 Figma 中设计 UI
✅ 生成 React 组件代码
✅ 在 Claude Code 中精调样式
✅ 保持代码和设计一致
```

---

## 🤔 常见问题解答

### Q1: Claude Code 是否可以直接修改我的生产代码？

**A:** 是的，但需要谨慎。建议：
1. 在开发分支上工作
2. 重要改动前做好备份（git）
3. 每次修改后立即测试
4. 使用版本控制追踪改动

### Q2: 当 Claude 的建议与我的想法不同时怎么办？

**A:**
1. 表达你的想法和理由
2. 让 Claude 分析为什么你的想法可能更好
3. 最终决策权在你，Claude 是建议者而非决策者
4. 如果你说"不好"，Claude 应该立即接受反馈并调整

**本项目例子：**
```
Claude 提议：使用 localStorage 保存欢迎状态
你说：demo 应该每次都重置
Claude：👍 理解，我删除 localStorage 逻辑
```

### Q3: 代码修改破坏了什么怎么办？

**A:**
1. 不要慌张，git 可以恢复任何东西
2. 运行 `git checkout file` 回退单个文件
3. 运行 `git revert commit_hash` 回退某个提交
4. 如果需要恢复删除的代码，运行 `git log -p` 查看历史

### Q4: 如何让 Claude 理解我的设计思路？

**A:**
1. **口头描述** - "我想要一个玻璃态的效果，半透明，有模糊"
2. **Figma 设计稿** - 截图或链接
3. **参考网站** - "看起来像 Discord 的左侧导航"
4. **PDF 文档** - 产品规范和交互说明

### Q5: TypeScript 编译错误如何快速解决？

**A:**
1. 运行 `npx tsc --noEmit` 查看所有错误
2. 通常错误包括：
   ```
   缺少属性 → 检查类型定义，添加缺失属性
   类型不匹配 → 修改变量类型或赋值
   未使用的变量 → 删除或使用它
   ```
3. 让 Claude 读取错误信息和代码，他能准确定位问题

### Q6: 如何评估一个功能是否实现好了？

**A:** 使用三维评估框架：

```
维度1：功能正确性
□ 功能按设计工作
□ 没有边界问题（如最小尺寸）
□ 所有条件判断都正确

维度2：代码质量
□ TypeScript 编译通过
□ 没有 ESLint 警告
□ 代码可读性好

维度3：用户体验
□ 交互流畅（无卡顿）
□ 视觉反馈清晰
□ 符合设计预期

三个维度都满足 = 好的实现
任何维度不满足 = 需要改进
```

### Q7: 设计师如何参与代码审查？

**A:**
1. **功能审查** - 功能是否符合预期（最重要）
2. **代码审查** - 代码结构是否合理（可选，除非你懂代码）
3. **性能审查** - 是否流畅、是否有卡顿
4. **视觉审查** - UI 样式是否正确

**你的角色：** 最终用户、功能验证者、体验评判者

---

## 🎓 核心思想总结

### 1. 设计师 + Claude Code 的协作模式

```
设计师的角色：
├─ 用户代表（最终验收）
├─ 需求澄清者（明确期望）
├─ 体验评判者（效果是否好）
└─ 决策者（最终确认方案）

Claude Code 的角色：
├─ 问题诊断者（为什么会这样）
├─ 方案设计者（有哪些解决办法）
├─ 代码执行者（实现修改）
└─ 技术顾问（建议和权衡）
```

### 2. 快速迭代的关键

```
快 → 及时反馈
┌─────────────────────┐
│ 问题 → 修改 → 测试   │ → 15 分钟一个周期
│      ↑_________________│
└─────────────────────┘

可以快速失败，也能快速成功
```

### 3. 信任系统的建立

```
第1次：Claude 给出建议 → 你验收
       ↓
       如果好 → 继续信任
       如果不好 → 反馈改进

第N次：基于前面的经验，你会更信任 Claude 的能力
```

### 4. 工具的本质

```
Claude Code  = 智能编码助手（理解代码）
Cursor       = 开发环境（执行命令、看效果）
Figma MCP    = 设计到代码的桥梁（规范和 assets）

三者结合 = 设计师可以高效地参与开发全过程
         而不需要深入学习编程
```

---

## 📋 下一步行动清单

如果你要复制这个协作模式，建议：

### 第一阶段：环境准备
- [ ] 安装 Claude Code CLI
- [ ] 安装 Cursor IDE
- [ ] 将项目导入 Cursor
- [ ] 配置 MCP 服务（Figma、Notion）

### 第二阶段：学习实践
- [ ] 尝试第一个简单修改（如文案更改）
- [ ] 学会使用 git 回退
- [ ] 理解 TypeScript 编译错误
- [ ] 在浏览器中测试实时反馈

### 第三阶段：深化应用
- [ ] 参与需求诊断过程
- [ ] 学会阅读代码错误信息
- [ ] 提出高质量的反馈
- [ ] 建立与开发者的信任合作

### 第四阶段：规模化
- [ ] 文档化你的设计规范
- [ ] 在团队内分享最佳实践
- [ ] 优化你的工作流程
- [ ] 考虑自动化重复任务

---

## 🎯 最终反思

这次开发过程展示了一个重要的真理：

> **好的协作来自于清晰的沟通 + 快速的反馈循环 + 互相信任**

**设计师的力量：**
- 你是最终用户的声音
- 你的"感觉"比理论更重要
- 你能快速识别体验问题

**开发者工具的力量：**
- Claude Code 能快速诊断问题
- git 让失败的尝试零成本
- TypeScript 在编译时捕获错误

**合作的力量：**
- 你不需要成为程序员也能高效参与开发
- 明确的反馈能驱动快速改进
- 相互尊重的决策流程能生成最好的产品

---

**致其他设计师：**

你现在拥有了一套完整的工具和方法论。不用害怕代码，也不用完全依赖开发者。用 Claude Code + Cursor 这样的工具，你可以：

- 参与需求分析和问题诊断
- 快速验证新的设计想法
- 精准反馈并推动改进
- 成为真正意义上的产品设计师而不仅仅是美术师

**Start small, iterate fast, trust the feedback loop.**
