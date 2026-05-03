export interface BlogPost {
  slug: string
  date: string
  titleKey: string
  summaryKey: string
  contentKey: string
  tags: string[]
}

export interface BlogPostI18n {
  title: string
  summary: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-i-built-this-site-with-vibe-coding',
    date: '2025-04-20',
    titleKey: 'post1Title',
    summaryKey: 'post1Summary',
    contentKey: 'post1Content',
    tags: ['Vibe Coding', 'Tutorial', 'Vue 3']
  },
  {
    slug: 'vibe-coding-beginners-guide',
    date: '2025-04-10',
    titleKey: 'post2Title',
    summaryKey: 'post2Summary',
    contentKey: 'post2Content',
    tags: ['Vibe Coding', 'Guide']
  },
  {
    slug: 'from-idea-to-app-in-one-weekend',
    date: '2025-03-25',
    titleKey: 'post3Title',
    summaryKey: 'post3Summary',
    contentKey: 'post3Content',
    tags: ['Case Study', 'React']
  },
  {
    slug: 'ai-prompting-tips-for-developers',
    date: '2025-03-10',
    titleKey: 'post4Title',
    summaryKey: 'post4Summary',
    contentKey: 'post4Content',
    tags: ['AI Prompting', 'Tips']
  },
  {
    slug: 'why-i-choose-vibe-coding',
    date: '2025-02-18',
    titleKey: 'post5Title',
    summaryKey: 'post5Summary',
    contentKey: 'post5Content',
    tags: ['Vibe Coding', 'Opinion']
  }
]

export const blogPostsI18n: Record<string, Record<string, BlogPostI18n>> = {
  'zh-CN': {
    post1Title: {
      title: '如何用 Vibe Coding 快速搭建个人网站',
      summary: '本文记录了使用 AI 辅助编程从零搭建个人网站的完整过程，包括技术选型、UI 设计、内容管理等方面的思考与实践。',
      content: `## 引言

Vibe Coding 作为一种新兴的 AI 辅助编程范式，正在改变我们构建软件的方式。在这篇文章中，我将分享如何使用 Vibe Coding 从零开始搭建这个个人网站。

## 技术选型

在开始之前，我列出了几个关键的技术决策：

- **前端框架**：选择 Vue 3，因为它简洁的 API 和优秀的生态系统
- **构建工具**：Vite 提供了极快的开发体验
- **内容管理**：使用 Markdown 文件驱动，无需后端 CMS
- **部署方案**：纯静态网站，可部署至任何静态托管服务

## 设计思路

网站采用极客风格的设计语言：
- 全站使用等宽字体，营造终端/编码氛围
- 纯色配色，无渐变色
- 最小化动效，保持锐利感
- 响应式布局，适配各种设备

## AI 协助的内容

在搭建过程中，AI 帮助我完成了：
1. 项目脚手架搭建
2. CSS 样式编写
3. 国际化配置文件生成
4. 响应式布局调优

## 总结

Vibe Coding 让我在短短几天内就完成了一个完整的多语言、双主题的个人网站。关键在于清晰地描述需求，并迭代地优化 AI 生成的代码。`
    },
    post2Title: {
      title: 'Vibe Coding 入门指南：从概念到实践',
      summary: '什么是 Vibe Coding？它和传统编程有什么区别？本文将为初学者解答这些问题，并提供上手实践的建议。',
      content: `## 什么是 Vibe Coding？

Vibe Coding 是一种 AI 辅助编程范式，强调开发者与 AI 之间的协作关系。不同于传统的"自己写所有代码"的方式，Vibe Coding 让开发者专注于高层设计和决策，而让 AI 处理实现细节。

## 核心理念

### 1. 意图驱动
你描述你想要什么，AI 生成对应的代码。重点是清晰表达意图。

### 2. 迭代优化
第一次生成的代码可能不完美。通过对话和反馈，逐步优化结果。

### 3. 人机协作
人类负责：方向判断、设计审美、质量把控
AI 负责：代码生成、重复性工作、模式识别

## 上手实践

### 步骤一：选择工具
推荐从 Cursor、GitHub Copilot 或 Windsurf 开始。

### 步骤二：明确需求
在开始前，写下你的项目需求说明书。越详细越好。

### 步骤三：分步实现
不要一次性要求 AI 完成所有功能。分解为小任务，逐个实现。

### 步骤四：审查与调试
AI 生成的代码需要审查。理解其逻辑，确保符合预期。

## 常见误区

- ❌ AI 会替你思考 — AI 是工具，思考是你的事
- ❌ 一次对话就能完成项目 — 需要多轮迭代
- ❌ AI 代码不需要理解 — 你必须理解每行代码

## 结语

Vibe Coding 不是银弹，但它确实大幅提升了开发效率。对于初学者来说，它降低了很多入门门槛。开始你的 Vibe Coding 之旅吧！`
    },
    post3Title: {
      title: '从想法到应用：一个周末的 Vibe Coding 实践',
      summary: '记录我在一个周末内，使用 Vibe Coding 将一个应用想法变成可运行的 MVP 的完整过程。',
      content: `## 背景

某个周五晚上，我有了一个应用的想法：一个简单的习惯追踪器。我想看看用 Vibe Coding 是否能在周末内完成一个 MVP。

## 周六：原型开发

### 上午：需求梳理与设计
- 用 30 分钟写了一份简单的需求文档
- 用 AI 生成了基本的 UI 线框描述
- 确定了技术栈：React + localStorage

### 下午：编码实现
- AI 生成了项目脚手架
- 实现了核心功能：习惯 CRUD、每日打卡
- 添加了简单的统计数据

## 周日：打磨与部署

### 上午：UI 优化
- 调整了配色方案
- 添加了响应式布局
- 修复了几个交互问题

### 下午：部署上线
- 部署到 Vercel
- 配置了自定义域名
- 写了简单的使用说明

## 收获与反思

1. **速度惊人**：一个周末完成了一个含完整功能的应用
2. **质量可控**：AI 生成的代码质量不错，但需要人工审查
3. **学习加速**：在与 AI 交互的过程中学到了很多 React 最佳实践

## 建议

如果你也想尝试：
- 从简单项目开始
- 写清楚需求文档
- 不要跳过代码审查环节`
    },
    post4Title: {
      title: 'AI 提示词工程：开发者的实用技巧',
      summary: '分享我在 Vibe Coding 实践中积累的 AI 提示词编写技巧，帮助开发者更高效地与 AI 协作。',
      content: `## 为什么提示词很重要

在与 AI 编程助手协作时，提示词的质量直接决定了输出代码的质量。好的提示词能让你一次得到满意的结果。

## 核心技巧

### 1. 明确上下文
\`\`\`
❌ 写一个登录页面
✅ 用 Vue 3 Composition API 写一个登录页面，包含邮箱和密码输入框、
   提交按钮、表单验证，使用 TypeScript，样式用纯 CSS
\`\`\`

### 2. 分步骤请求
\`\`\`
❌ 帮我做一个完整的数据仪表盘
✅ 步骤1：创建仪表盘的布局组件
   步骤2：添加数据图表组件
   步骤3：实现数据获取逻辑
\`\`\`

### 3. 提供参考代码
\`\`\`
参考这个组件的代码风格：[粘贴代码]
请按相同风格实现一个类似的组件，功能是...
\`\`\`

### 4. 要求解释
\`\`\`
请实现这个功能并解释代码的关键部分
\`\`\`

## 进阶技巧

### 约束先行
在描述功能之前，先列出约束条件：
- 技术栈限制
- 代码风格要求
- 性能目标

### 迭代修正
如果结果不理想：
\`\`\`
上一版的问题：...
请修正这些问题
\`\`\`

## 总结

好的提示词是一门技能，需要在实践中不断打磨。记住：越具体越好，越清晰越好。`
    },
    post5Title: {
      title: '为什么我选择了 Vibe Coding',
      summary: '分享个人从传统编程转向 Vibe Coding 的心路历程，以及对这种新范式的思考和展望。',
      content: `## 我的编程历程

我从五年前开始学习编程，经历了从手写每一行代码到逐渐拥抱 AI 辅助的过程。

## 转折点

去年，我第一次尝试使用 AI 编程助手完成一个小项目。原本预计需要一周的工作，两天就完成了。这让我开始认真思考 AI 辅助编程的潜力。

## 为什么选择 Vibe Coding

### 1. 效率提升
重复性的代码编写被 AI 取代，我可以专注于设计和技术决策。

### 2. 降低门槛
以前需要查阅大量文档才能开始的技术，现在可以通过描述需求快速上手。

### 3. 学习加速
通过与 AI 的交互，我学到了很多以前不知道的编程模式和最佳实践。

### 4. 创造力释放
当实现不再是瓶颈时，我有了更多精力去思考"做什么"而不是"怎么做"。

## 担忧与回应

### AI 会取代程序员吗？
不会。AI 是工具，就像 IDE 和编译器一样。它增强了开发者的能力，但不替代开发者的判断。

### 代码质量会下降吗？
取决于使用方式。如果只是盲目复制 AI 的代码，质量当然不保证。但如果你审查、理解并优化 AI 的输出，质量反而可能更高。

## 展望

我认为 Vibe Coding 代表了软件开发的未来方向。人与 AI 的协作将变得越来越自然和高效。现在是最好的时机来学习这种新的编程范式。`
    }
  },
  'en-US': {
    post1Title: {
      title: 'How I Built This Site with Vibe Coding',
      summary: 'A complete walkthrough of building a personal website from scratch using AI-assisted programming, covering tech selection, UI design, and content management.',
      content: `## Introduction

Vibe Coding as an emerging AI-assisted programming paradigm is changing how we build software. In this article, I'll share how I built this personal website from scratch using Vibe Coding.

## Tech Selection

Before starting, I made several key technical decisions:

- **Frontend Framework**: Vue 3 for its clean API and excellent ecosystem
- **Build Tool**: Vite for its blazing-fast dev experience
- **Content Management**: Markdown-driven, no backend CMS needed
- **Deployment**: Pure static site, deployable to any static hosting

## Design Approach

The site uses a geek minimalist design language:
- Monospace fonts throughout for a terminal/coding vibe
- Solid colors only, no gradients
- Minimal animations for a crisp feel
- Responsive layout for all devices

## What AI Helped With

During the build process, AI assisted with:
1. Project scaffolding
2. CSS styling
3. i18n configuration generation
4. Responsive layout tuning

## Summary

Vibe Coding enabled me to build a complete, multilingual, dual-theme personal website in just a few days. The key is clearly describing requirements and iteratively refining AI-generated code.`
    },
    post2Title: {
      title: 'Vibe Coding Beginner\'s Guide: From Concept to Practice',
      summary: 'What is Vibe Coding? How is it different from traditional programming? This article answers these questions and provides practical tips for getting started.',
      content: `## What is Vibe Coding?

Vibe Coding is an AI-assisted programming paradigm that emphasizes collaboration between developers and AI. Unlike the traditional "write everything yourself" approach, Vibe Coding lets developers focus on high-level design while AI handles implementation details.

## Core Principles

### 1. Intent-Driven
You describe what you want, AI generates the code. Clear intent expression is key.

### 2. Iterative Refinement
First-pass code may not be perfect. Iterate through conversation and feedback.

### 3. Human-AI Collaboration
Humans handle: direction, design aesthetics, quality control
AI handles: code generation, repetitive tasks, pattern recognition

## Getting Started

### Step 1: Choose Your Tool
Start with Cursor, GitHub Copilot, or Windsurf.

### Step 2: Define Requirements
Write a project requirements doc before starting. The more detail, the better.

### Step 3: Implement Step by Step
Don't ask AI to do everything at once. Break into small tasks.

### Step 4: Review and Debug
AI-generated code needs review. Understand the logic and verify it meets expectations.

## Common Pitfalls

- ❌ AI will think for you — AI is a tool, thinking is your job
- ❌ One conversation finishes the project — multiple iterations needed
- ❌ No need to understand AI code — you must understand every line

## Conclusion

Vibe Coding isn't a silver bullet, but it dramatically improves development efficiency. For beginners, it lowers many barriers to entry. Start your Vibe Coding journey today!`
    },
    post3Title: {
      title: 'From Idea to App in One Weekend',
      summary: 'A complete record of turning an app idea into a working MVP in a single weekend using Vibe Coding.',
      content: `## Background

One Friday evening, I had an app idea: a simple habit tracker. I wanted to see if Vibe Coding could help me complete an MVP over the weekend.

## Saturday: Prototype Development

### Morning: Requirements & Design
- Wrote a simple requirements doc in 30 minutes
- Used AI to generate basic UI wireframe descriptions
- Decided on tech stack: React + localStorage

### Afternoon: Implementation
- AI generated the project scaffold
- Implemented core features: habit CRUD, daily check-ins
- Added simple statistics

## Sunday: Polish & Deploy

### Morning: UI Refinement
- Adjusted color scheme
- Added responsive layout
- Fixed interaction issues

### Afternoon: Deployment
- Deployed to Vercel
- Configured custom domain
- Wrote simple usage instructions

## Takeaways

1. **Amazing Speed**: Completed a full-featured app in one weekend
2. **Controllable Quality**: AI-generated code was decent but needed human review
3. **Accelerated Learning**: Learned many React best practices through AI interaction

## Advice

If you want to try:
- Start with simple projects
- Write clear requirements
- Never skip code review`
    },
    post4Title: {
      title: 'AI Prompting Tips for Developers',
      summary: 'Practical AI prompting techniques I\'ve accumulated through Vibe Coding practice to help developers collaborate more effectively with AI.',
      content: `## Why Prompts Matter

When collaborating with AI coding assistants, prompt quality directly determines output code quality. Good prompts get you satisfactory results the first time.

## Core Techniques

### 1. Be Specific About Context
\`\`\`
❌ Write a login page
✅ Write a login page using Vue 3 Composition API with email and password
   inputs, a submit button, form validation, TypeScript, and pure CSS styling
\`\`\`

### 2. Request Step by Step
\`\`\`
❌ Build me a complete data dashboard
✅ Step 1: Create the dashboard layout component
   Step 2: Add data chart components
   Step 3: Implement data fetching logic
\`\`\`

### 3. Provide Reference Code
\`\`\`
Following this component's code style: [paste code]
Please implement a similar component with the following features...
\`\`\`

### 4. Ask for Explanations
\`\`\`
Please implement this feature and explain the key parts of the code
\`\`\`

## Advanced Tips

### Constraints First
List constraints before describing features:
- Tech stack limits
- Code style requirements
- Performance goals

### Iterative Fixes
If results are unsatisfactory:
\`\`\`
Issues with the previous version: ...
Please fix these issues
\`\`\`

## Summary

Good prompting is a skill that improves with practice. Remember: the more specific, the better.`
    },
    post5Title: {
      title: 'Why I Chose Vibe Coding',
      summary: 'My personal journey from traditional programming to Vibe Coding, with reflections and outlook on this new paradigm.',
      content: `## My Programming Journey

I started learning to code five years ago, going from hand-writing every line to gradually embracing AI assistance.

## The Turning Point

Last year, I first tried using an AI coding assistant to complete a small project. What was expected to take a week was done in two days. This made me seriously consider the potential of AI-assisted programming.

## Why Vibe Coding

### 1. Efficiency Boost
Repetitive coding is handled by AI, allowing me to focus on design and technical decisions.

### 2. Lowered Barriers
Technologies that once required extensive documentation research can now be started quickly by describing needs.

### 3. Accelerated Learning
Through AI interaction, I've learned many programming patterns and best practices I didn't know before.

### 4. Unleashed Creativity
When implementation is no longer the bottleneck, I have more energy to think about "what to build" rather than "how to build."

## Concerns Addressed

### Will AI replace programmers?
No. AI is a tool, like IDEs and compilers. It enhances developer capabilities but doesn't replace developer judgment.

### Will code quality decline?
It depends on usage. Blindly copying AI output naturally risks quality. But if you review, understand, and optimize AI output, quality can actually be higher.

## Looking Forward

I believe Vibe Coding represents the future direction of software development. Human-AI collaboration will become increasingly natural and efficient. Now is the best time to learn this new programming paradigm.`
    }
  }
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  blogPosts.forEach(p => p.tags.forEach(t => tags.add(t)))
  return Array.from(tags)
}
