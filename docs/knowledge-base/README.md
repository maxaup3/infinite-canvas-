# 📚 Infinite Canvas 知识库

欢迎来到 Infinite Canvas 的官方知识库。这里汇聚了设计师、开发者和产品经理协作的最佳实践、技术文档和真实案例。

## 🎯 知识库导航

### 📖 [完整指南](./guides/)

#### [Claude Code + Cursor + Figma MCP 协作指南](./guides/CLAUDE_CODE_COLLABORATION_GUIDE.md)
**为设计师打造的开发工具使用教程**

这是知识库中最重要的资源。它包含：
- 🔧 工具生态介绍（Claude Code、Cursor、Figma MCP）
- 🔄 完整工作流程（需求→诊断→实现→测试→反馈）
- 💡 核心概念速览（React、事件处理、状态管理）
- 🎯 5 个实战案例（真实问题和解决方案）
- ✅ 最佳实践清单
- 🤔 常见问题解答

**适合人群：** 所有设计师、产品经理、想要参与开发的非技术人员

---

### ⚡ [快速参考](./references/)

#### 常用命令速查表
```bash
npm run dev              # 启动开发服务器
npm run build           # 构建生产版本
npx tsc --noEmit       # 检查 TypeScript 错误
git checkout file      # 回退文件改动
git log --oneline      # 查看提交历史
```

#### Cursor 快捷键速览
```
Cmd+K         → 打开 Claude Code
Cmd+P         → 快速打开文件
Cmd+F         → 在文件中搜索
Cmd+Shift+F   → 跨文件搜索
Cmd+J         → 切换终端
```

#### TypeScript 常见错误速查
- **缺少属性** → 检查类型定义，添加缺失属性
- **类型不匹配** → 修改变量类型或赋值
- **未使用的变量** → 删除或使用它

---

### 📚 [案例研究](./case-studies/)

本项目中的真实开发案例：

1. **欢迎页面持久化问题** - 如何澄清需求和理解 demo vs 生产应用
2. **拖动状态污染 Bug** - React ref 和 state 的生命周期管理
3. **滚轮缩放功能** - 从零实现新功能
4. **拖动修复的失败与回退** - 何时应该放弃优化，快速失败的价值
5. **中英文文案统一** - 小改动的全局思考

---

### 🏆 [最佳实践](./best-practices/)

#### 与 Claude Code 协作的最佳实践
- ✅ 清晰描述问题（50% 的成功来自清晰描述）
- ✅ 提供上下文信息
- ✅ 及时反馈实现质量
- ✅ 允许 Claude 提出方案
- ✅ 充分利用版本控制

#### Cursor 使用最佳实践
- ✅ 分屏工作（浏览器 + 代码编辑）
- ✅ 快速键盘导航
- ✅ 终端快速命令

#### 代码修改的最佳实践
- ✅ 一次只修改一个问题
- ✅ 每次修改后检查编译
- ✅ 修改前读取，修改后验证

#### 文档管理的最佳实践
- ✅ 如何处理 PDF 文档（Claude 可以读取）
- ✅ 如何与 Figma 设计同步
- ✅ 如何文档化设计规范

---

## 🎓 按角色的快速入门

### 👩‍🎨 设计师
1. 阅读 [协作指南 - 工具生态介绍章节](./guides/CLAUDE_CODE_COLLABORATION_GUIDE.md#工具生态介绍)
2. 学习 [完整工作流程](./guides/CLAUDE_CODE_COLLABORATION_GUIDE.md#完整工作流程)
3. 参考 [5 个实战案例](./guides/CLAUDE_CODE_COLLABORATION_GUIDE.md#5个实战案例)
4. 收藏 [最佳实践清单](./guides/CLAUDE_CODE_COLLABORATION_GUIDE.md#最佳实践清单)
5. 查阅 [常见问题解答](./guides/CLAUDE_CODE_COLLABORATION_GUIDE.md#常见问题解答)

### 👨‍💻 开发者（使用 Claude Code）
1. 理解 [设计师的需求](./guides/CLAUDE_CODE_COLLABORATION_GUIDE.md#与-claude-code-协作的最佳实践)
2. 学习 [快速失败的价值](./guides/CLAUDE_CODE_COLLABORATION_GUIDE.md#案例4拖动修复的失败与回退)
3. 参考 [代码修改的最佳实践](./guides/CLAUDE_CODE_COLLABORATION_GUIDE.md#代码修改的最佳实践)

### 📱 产品经理
1. 阅读 [完整工作流程](./guides/CLAUDE_CODE_COLLABORATION_GUIDE.md#完整工作流程) 中的需求阶段
2. 理解 [协作的本质](./guides/CLAUDE_CODE_COLLABORATION_GUIDE.md#最终反思)
3. 参考 [如何澄清需求](./guides/CLAUDE_CODE_COLLABORATION_GUIDE.md#第二步诊断阶段)

---

## 📋 知识库结构

```
docs/knowledge-base/
├── README.md                    ← 你在这里
├── guides/                      ← 完整指南和教程
│   └── CLAUDE_CODE_COLLABORATION_GUIDE.md
├── references/                  ← 快速参考和速查表
│   ├── COMMAND_REFERENCE.md
│   ├── CURSOR_SHORTCUTS.md
│   ├── TYPESCRIPT_ERRORS.md
│   └── GIT_COMMANDS.md
├── case-studies/                ← 真实项目案例
│   ├── 01_ONBOARDING_STATE.md
│   ├── 02_DRAG_STATE_BUG.md
│   ├── 03_SCROLL_ZOOM.md
│   ├── 04_DRAG_REFACTOR_FAILURE.md
│   └── 05_TEXT_LOCALIZATION.md
└── best-practices/              ← 最佳实践总结
    ├── COLLABORATION_WITH_CLAUDE.md
    ├── CURSOR_USAGE.md
    ├── CODE_MODIFICATION.md
    └── DOCUMENT_MANAGEMENT.md
```

---

## 💡 核心理念

这份知识库体现了一个简单但强大的真理：

> **好的协作来自于清晰的沟通 + 快速的反馈循环 + 互相信任**

### 设计师的力量
- 你是最终用户的声音
- 你的"感觉"比理论更重要
- 你能快速识别体验问题

### 开发工具的力量
- Claude Code 能快速诊断问题
- git 让失败的尝试零成本
- TypeScript 在编译时捕获错误

### 协作的力量
- 你不需要成为程序员也能高效参与开发
- 明确的反馈能驱动快速改进
- 相互尊重的决策流程能生成最好的产品

---

## 🚀 如何使用这份知识库

### 第一次使用
1. 花 30 分钟阅读 [协作指南](./guides/CLAUDE_CODE_COLLABORATION_GUIDE.md) 的"核心概念"和"工具生态"部分
2. 快速浏览 [5 个实战案例](./guides/CLAUDE_CODE_COLLABORATION_GUIDE.md#5个实战案例)
3. 收藏本页面，方便后续查阅

### 遇到问题时
1. 查阅 [常见问题解答](./guides/CLAUDE_CODE_COLLABORATION_GUIDE.md#常见问题解答)
2. 搜索相关案例 - 你的问题很可能在 [5 个案例](./guides/CLAUDE_CODE_COLLABORATION_GUIDE.md#5个实战案例) 中有过类似情况
3. 参考 [快速参考](./references/) 中的速查表

### 分享知识库
- 📧 新团队成员的必读资料
- 🎓 新设计师的培训材料
- 📚 与其他团队分享协作方式

---

## 📖 按学习路径的推荐阅读

### 🎯 快速上手路线（45 分钟）
```
1. 本页面的"知识库导航" (5 分钟)
2. 协作指南 - "工具生态介绍" (15 分钟)
3. 协作指南 - "完整工作流程" 的需求和诊断阶段 (15 分钟)
4. 案例 1: 欢迎页面问题 (10 分钟)
→ 现在你可以开始使用 Claude Code 了！
```

### 📚 完整学习路线（3 小时）
```
1. 完整阅读《Claude Code 协作指南》(120 分钟)
2. 详细研究《5 个实战案例》(60 分钟)
3. 浏览《最佳实践清单》(30 分钟)
→ 现在你是 Claude Code 协作的专家了！
```

### 🔍 深度研究路线（5+ 小时）
```
1. 阅读完整指南 (120 分钟)
2. 深入研究每个案例，理解技术细节 (120 分钟)
3. 研究《核心概念速览》的技术部分 (60 分钟)
4. 学习《最佳实践》的细节 (60 分钟)
5. 动手尝试，参考《快速参考》完成实际任务 (60 分钟)
→ 现在你可以指导其他人了！
```

---

## 🔗 相关资源

- 📱 [项目 GitHub 仓库](../)
- 🎨 [Figma 设计稿](#)（待补充）
- 📝 [API 文档](#)（待补充）
- 🐛 [已知问题和 Roadmap](#)（待补充）

---

## ✨ 知识库的持续更新

这份知识库会随着项目的发展而更新：

- 🔄 每次发现新的常见问题都会添加到 FAQ
- 📚 每个重大功能都会添加新的案例研究
- 💡 每个团队成员的最佳实践都会被收集和分享

**有好的建议？** 欢迎反馈和贡献！

---

**最后的话：**

正确使用工具确实很重要。这份知识库的目标是让 Claude Code + Cursor + Figma MCP 的组合能力发挥到最大。通过学习这里的内容，你不仅能提高工作效率，还能帮助团队建立更好的协作文化。

---

*最后更新: 2026-01-14*
*知识库维护者: Claude Code + Design Team*
