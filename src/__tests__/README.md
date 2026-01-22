# Infinite Canvas 测试文档

## 测试概览

本项目使用以下测试框架和工具：

- **Vitest** - 快速的单元测试框架
- **React Testing Library** - React 组件测试
- **jsdom** - 浏览器环境模拟

## 测试结构

```
src/
├── __tests__/              # 集成测试
│   ├── App.integration.test.tsx
│   ├── e2e-scenarios.md    # E2E 测试场景文档
│   └── README.md
├── components/
│   └── __tests__/          # 组件单元测试
│       ├── BottomDialog.test.tsx
│       ├── Canvas.test.tsx
│       ├── ImageToolbar.test.tsx
│       └── RerunEdit.test.tsx
└── test/
    ├── setup.ts            # 测试环境设置
    └── helpers.ts          # 测试辅助函数
```

## 运行测试

### 运行所有测试
```bash
npm test
```

### 以 UI 模式运行
```bash
npm run test:ui
```

### 运行一次（CI 模式）
```bash
npm run test:run
```

### 运行特定文件
```bash
npm test BottomDialog
```

### 监听模式（开发时）
```bash
npm test -- --watch
```

## 测试覆盖率

查看测试覆盖率：
```bash
npm test -- --coverage
```

## 测试分类

### 单元测试（Component Tests）
测试单个组件的功能：
- `BottomDialog.test.tsx` - 对话框组件测试
- `Canvas.test.tsx` - 画布组件测试
- `ImageToolbar.test.tsx` - 工具栏组件测试

### 集成测试（Integration Tests）
测试多个组件协作：
- `App.integration.test.tsx` - 应用级集成测试

### E2E 测试场景
真实用户场景文档：
- `e2e-scenarios.md` - 12个关键用户场景

## 今日修复的功能测试重点

### 1. 填入对话功能 ✅
- **图像模式**：允许添加最多10张参考图片
- **视频模式（图生视频）**：只能添加1张参考图片
- **视频模式（首尾帧）**：可以添加2张图片（首帧+尾帧）
- **错误提示**：达到上限时显示错误，3秒后自动消失

**测试文件**: `BottomDialog.test.tsx`

### 2. 生成位置逻辑 ✅
- **有选中图层**：新图生成在选中图层右侧20px
- **无选中图层**：新图生成在画布中心
- **生成中遮罩**：与最终图片位置一致
- **坐标系统**：统一使用画布坐标

**测试文件**: `App.integration.test.tsx`, `Canvas.test.tsx`

### 3. 画布交互 ✅
- **双指平移**：选中图片时，双指平移移动画布而非图片
- **图层拖拽**：禁用选中图层的拖拽功能（draggable=false）

**测试文件**: `Canvas.test.tsx`

### 4. UI 优化 ✅
- **下载菜单**：Hover 显示批量下载和合并下载选项
- **通知隐藏**：生成、删除、重新生成不显示通知
- **Artifacts 隐藏**：完全隐藏 Artifacts 功能

**测试文件**: `App.integration.test.tsx`

## 测试辅助工具

### helpers.ts
提供测试辅助函数：

```typescript
// 创建模拟数据
createMockImageLayer()
createMockVideoLayer()
createMockComment()
createMockImageConfig()
createMockVideoConfigI2V()
createMockVideoConfigFirstLast()
createMockGenerationTask()

// 坐标转换
screenToCanvas()
canvasToScreen()
calculateDisplayWidth()

// 验证函数
verifyPositionRightOfLayer()
verifyErrorMessage()
countReferenceImages()

// 等待函数
wait()
waitForCondition()
```

## 测试最佳实践

### 1. 使用描述性的测试名称
```typescript
it('图像模式：应该允许添加参考图片到 referenceImages 数组', () => {
  // ...
});
```

### 2. 遵循 AAA 模式
```typescript
it('测试用例', () => {
  // Arrange（准备）
  const props = { ... };

  // Act（执行）
  render(<Component {...props} />);

  // Assert（断言）
  expect(result).toBe(expected);
});
```

### 3. 使用测试辅助函数
```typescript
const layer = createMockImageLayer({ x: 100, y: 100 });
const position = { x: 320, y: 100 };
expect(verifyPositionRightOfLayer(position, layer)).toBe(true);
```

### 4. 清理副作用
```typescript
beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(() => {
  cleanup();
});
```

## 调试测试

### 查看渲染的 DOM
```typescript
const { debug } = render(<Component />);
debug(); // 打印完整 DOM
```

### 查看特定元素
```typescript
const element = screen.getByRole('button');
debug(element); // 只打印这个元素
```

### 使用 Vitest UI
```bash
npm run test:ui
```
在浏览器中查看测试结果、覆盖率和调试信息。

## CI/CD 集成

在 CI 环境中运行测试：
```bash
npm run test:run
```

这会：
- 运行所有测试一次
- 生成覆盖率报告
- 失败时返回非零退出码

## 待实现的测试

目前创建的测试文件包含测试骨架，标记为 `expect(true).toBe(true)`。

需要实现的测试：
1. ✅ 测试结构已创建
2. ⏳ 需要实现实际的测试逻辑
3. ⏳ 需要添加更详细的断言

这样设计的好处：
- 测试结构清晰
- 测试覆盖范围明确
- 可以逐步实现具体测试

## 下一步

1. 实现 BottomDialog 的实际测试逻辑
2. 实现 Canvas 的实际测试逻辑
3. 实现 App 集成测试的实际逻辑
4. 添加测试覆盖率报告
5. 集成到 CI/CD 流程

## 问题反馈

如果测试失败或有问题，请检查：
1. 是否运行了 `npm install`
2. 是否有未提交的代码更改
3. 查看 Vitest UI 中的详细错误信息
4. 检查 `vitest.config.ts` 配置是否正确
