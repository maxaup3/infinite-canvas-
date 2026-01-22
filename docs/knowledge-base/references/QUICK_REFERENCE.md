# ⚡ 快速参考速查表

## 🔧 常用 npm 命令

```bash
# 启动开发服务器（重要！）
npm run dev

# 构建生产版本
npm run build

# 检查 TypeScript 错误（修改代码后运行）
npx tsc --noEmit

# 清理 node_modules（如果出现奇怪的问题）
rm -rf node_modules && npm install

# 运行代码格式化
npm run format   # 如果项目配置了 Prettier

# 运行 ESLint 检查
npm run lint     # 如果项目配置了 ESLint
```

---

## ⌨️ Cursor IDE 快捷键

### 必须记住的快捷键

| 快捷键 | 功能 | 使用场景 |
|--------|------|---------|
| `Cmd+K` | 打开 Claude Code | 问任何代码问题 |
| `Cmd+P` | 快速打开文件 | 快速导航到某个文件 |
| `Cmd+J` | 打开/关闭终端 | 运行 npm 命令 |
| `Cmd+/` | 行注释/取消注释 | 快速注释代码 |
| `Cmd+Shift+L` | 选择所有相同单词 | 批量修改变量名 |

### 搜索相关

| 快捷键 | 功能 |
|--------|------|
| `Cmd+F` | 在当前文件中搜索 |
| `Cmd+Shift+F` | 跨文件搜索（全项目） |
| `Cmd+H` | 查找和替换 |
| `Cmd+Shift+H` | 全项目查找和替换 |

### 代码导航

| 快捷键 | 功能 |
|--------|------|
| `Cmd+G` | 转到指定行 |
| `F12` 或 `Cmd+点击` | 跳转到定义 |
| `Cmd+U` | 返回上一个位置 |

---

## 🌳 Git 常用命令

### 查看状态

```bash
# 查看修改的文件
git status

# 查看最近 10 条提交
git log --oneline -10

# 查看某文件的修改历史
git log -p src/components/Canvas.tsx

# 查看当前分支与主分支的差异
git diff main
```

### 修改和提交

```bash
# 添加文件到暂存区
git add src/components/Canvas.tsx

# 添加所有修改
git add .

# 提交（带消息）
git commit -m "修复：拖动状态在编辑模式改变时重置"

# 修改最后一次提交
git commit --amend

# 查看未提交的改动
git diff

# 查看已暂存的改动
git diff --staged
```

### 回退和撤销

```bash
# 回退单个文件（放弃所有修改）
git checkout src/components/Canvas.tsx

# 回退到某个提交
git revert <commit-hash>

# 查看文件的完整修改历史（包括删除）
git log -p --all -- src/components/Canvas.tsx
```

### 分支管理

```bash
# 查看所有分支
git branch -a

# 创建新分支
git checkout -b feature/zoom-functionality

# 切换分支
git checkout main

# 删除分支
git branch -d feature/zoom-functionality
```

---

## 📁 项目结构速览

```
infinite-canvas/
├── src/
│   ├── components/           ← React 组件
│   │   ├── Canvas.tsx        ← 核心画布组件
│   │   ├── BottomDialog.tsx  ← 底部输入框
│   │   ├── ImageToolbar.tsx  ← 图片工具栏
│   │   └── ...
│   ├── types/                ← TypeScript 类型定义
│   │   └── index.ts
│   ├── styles/               ← 样式文件
│   │   ├── constants.ts      ← 颜色、尺寸常量
│   │   └── animations.css    ← 动画定义
│   ├── App.tsx               ← 应用主入口
│   └── index.css             ← 全局样式
├── public/                   ← 静态资源
├── docs/
│   └── knowledge-base/       ← 知识库（你在这里）
├── package.json              ← 项目配置
├── tsconfig.json             ← TypeScript 配置
└── vite.config.ts            ← Vite 构建配置
```

---

## 🐛 TypeScript 编译错误速查

### 错误类型 1: 缺少属性

```
Error: Property 'height' is missing in type
```

**原因：** 对象缺少必需的属性

**解决方案：**
```typescript
// ❌ 错误
const layer: ImageLayer = { id: '1', width: 100 };

// ✅ 正确
const layer: ImageLayer = { id: '1', width: 100, height: 80 };
```

### 错误类型 2: 类型不匹配

```
Error: Type 'string' is not assignable to type 'number'
```

**原因：** 变量类型与期望类型不符

**解决方案：**
```typescript
// ❌ 错误
const width: number = "100";

// ✅ 正确
const width: number = 100;
// 或
const width: number = parseInt("100");
```

### 错误类型 3: 未使用的变量

```
Error TS6133: 'lastPosPosRef' is declared but its value is never read
```

**原因：** 声明了变量但从未使用

**解决方案：**
```typescript
// ❌ 删除不使用的代码
// const lastPosPosRef = useRef(null);  // ← 删除这行

// ✅ 或者如果要用到，在某处使用它
lastPosPosRef.current = position;
```

### 错误类型 4: 参数缺失

```
Error: Expected 2 arguments, but got 1
```

**原因：** 函数调用时缺少必需的参数

**解决方案：**
```typescript
// ❌ 错误
onUpdate({ height: 100 });

// ✅ 正确（如果函数需要两个参数）
onUpdate(layerId, { height: 100 });
```

---

## 💬 与 Claude Code 的高效对话

### 问题描述模板

```
标题：[清晰的问题标题]

**现象：**
[观察到的行为]

**期望：**
[应该出现的行为]

**重现步骤：**
1. [第一步]
2. [第二步]
3. [第三步]

**上下文：**
- 这是一个 demo / 生产应用
- 相关文件：src/components/Canvas.tsx
- 最后一次成功是在：[什么时候]

**已尝试：**
- [已经尝试过什么]
```

### 快速修复请求

```
文件：src/components/Canvas.tsx

问题：拖动时鼠标坐标计算有误

代码位置：第 85-90 行

期望修复：[清晰描述期望的修复方式]

参考：类似的实现在 [其他文件/React 文档]
```

### 需求确认

```
需求：支持图片滚轮缩放

详细说明：
- 向上滚动 = 放大
- 向下滚动 = 缩小
- 只影响选中的图片
- 应该保持宽高比

是否还有其他约束？
```

---

## 🎯 典型工作流快速清单

### 修复一个 Bug 的完整流程

```
□ 用自然语言描述 bug（什么时候出现、如何重现）
□ 让 Claude 诊断问题根源（读取代码）
□ Claude 提出修复方案
□ 你确认方案是否合理
□ Claude 实现修复
□ 运行 TypeScript 检查：npx tsc --noEmit
□ 在浏览器中测试
□ 确认 bug 是否修复
□ 如果满意，git add && git commit
□ 如果不满意，git checkout file 回退，重新尝试
```

### 添加新功能的完整流程

```
□ 清晰描述功能需求
□ 提供参考（设计稿、竞品、说明文档）
□ 让 Claude 建议在哪些文件中修改
□ 让 Claude 展示实现方案
□ 你审查方案是否可行
□ Claude 实现功能
□ 在浏览器中测试各种场景
□ 确认边界条件是否处理好了
□ 如果满意，提交代码
□ 如果不满意，反馈具体问题，Claude 调整
```

### 重构代码的完整流程

```
□ 明确重构目标（为什么要重构）
□ 让 Claude 分析现有代码结构
□ 制定重构方案
□ 你审查方案对功能的影响
□ Claude 逐步执行重构
□ 每次重构后运行 TypeScript 检查
□ 每次重构后在浏览器中测试
□ 如果中间出现问题，git checkout 回退单个改动
□ 完成重构，提交代码
```

---

## 📱 常见场景速解

### 场景 1: 我改了代码，但什么都没变

**可能原因：**
1. 浏览器缓存问题 → 刷新页面（Cmd+Shift+R 强制刷新）
2. TypeScript 编译错误 → 运行 `npx tsc --noEmit` 检查
3. 开发服务器需要重启 → 在终端按 Ctrl+C，然后 `npm run dev`

**解决步骤：**
```bash
# 1. 检查 TypeScript 错误
npx tsc --noEmit

# 2. 如果有错误，查看 Cursor 左侧的问题面板
# 3. 如果没有错误，强制刷新浏览器（Cmd+Shift+R）

# 4. 如果还是不行，重启开发服务器
# （Ctrl+C 停止，npm run dev 重启）
```

### 场景 2: 我做了修改，但效果与预期不符

**调试步骤：**
```
1. 使用浏览器的开发者工具（F12）检查
   - 元素是否正确渲染？
   - CSS 样式是否应用了？
   - 有没有 JavaScript 错误？

2. 检查组件逻辑
   - 添加 console.log 语句调试
   - Claude 可以帮助添加调试代码

3. 使用 git diff 查看确切修改了什么
   git diff src/components/Canvas.tsx
```

### 场景 3: 出现奇怪的错误，重启也不行

**核选项：**
```bash
# 清理构建缓存
rm -rf node_modules
npm install
npm run dev

# 或者只清理 Vite 缓存
rm -rf .vite
npm run dev
```

---

## 🎓 学习资源快速链接

### 官方文档
- [React 官方文档](https://react.dev)
- [TypeScript 手册](https://www.typescriptlang.org/docs/)
- [Konva.js 文档](https://konva.js.org/)
- [Vite 文档](https://vitejs.dev/)

### 推荐学习
- [React Hooks 深入](https://react.dev/reference/react/hooks)
- [TypeScript 类型系统](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
- [Git 交互式教程](https://learngitbranching.js.org/)

---

## 💾 文件快速定位

### 需要修改颜色
→ `src/styles/constants.ts`

### 需要修改 UI 布局
→ 相关组件文件（如 `src/components/Canvas.tsx`）

### 需要修改类型定义
→ `src/types/index.ts`

### 需要添加新动画
→ `src/styles/animations.css`

### 需要修改全局样式
→ `src/index.css`

### 需要修改应用主逻辑
→ `src/App.tsx`

---

## ✅ 修改前检查清单

在进行任何代码修改前，检查以下几点：

```
□ 我清楚地理解了问题所在
□ 我知道哪些文件需要修改
□ 我备份了重要的代码（通过 git）
□ 开发服务器正在运行
□ 浏览器窗口是打开的
□ 我有一个清晰的修复/实现方案
```

---

## 🔗 常用链接

- 📁 [知识库主页](../README.md)
- 📖 [完整协作指南](../guides/CLAUDE_CODE_COLLABORATION_GUIDE.md)
- 📚 [5 个实战案例](../case-studies/)
- 💡 [最佳实践](../best-practices/)

---

**记住：这些都是速查表，详细解释请参考完整的协作指南！**
