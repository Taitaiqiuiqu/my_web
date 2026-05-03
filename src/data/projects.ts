export interface Project {
  id: string
  nameKey: string
  descriptionKey: string
  tags: string[]
  image: string
  githubUrl?: string
  demoUrl?: string
}

export interface ProjectI18n {
  name: string
  description: string
}

export const projects: Project[] = [
  {
    id: 'vibe-coding-site',
    nameKey: 'project1',
    descriptionKey: 'project1Desc',
    tags: ['Vue 3', 'TypeScript', 'Vite'],
    image: '',
    githubUrl: 'https://github.com/yourname/vibe-coding-site',
    demoUrl: ''
  },
  {
    id: 'ai-chat-app',
    nameKey: 'project2',
    descriptionKey: 'project2Desc',
    tags: ['React', 'OpenAI API', 'Node.js'],
    image: '',
    githubUrl: 'https://github.com/yourname/ai-chat-app',
    demoUrl: 'https://ai-chat-demo.vercel.app'
  },
  {
    id: 'cli-tool',
    nameKey: 'project3',
    descriptionKey: 'project3Desc',
    tags: ['Python', 'CLI', 'AI'],
    image: '',
    githubUrl: 'https://github.com/yourname/cli-tool'
  },
  {
    id: 'markdown-blog',
    nameKey: 'project4',
    descriptionKey: 'project4Desc',
    tags: ['Vue 3', 'Markdown', 'SSG'],
    image: '',
    githubUrl: 'https://github.com/yourname/markdown-blog',
    demoUrl: 'https://md-blog-demo.vercel.app'
  },
  {
    id: 'data-dashboard',
    nameKey: 'project5',
    descriptionKey: 'project5Desc',
    tags: ['React', 'D3.js', 'API'],
    image: '',
    githubUrl: 'https://github.com/yourname/data-dashboard'
  },
  {
    id: 'telegram-bot',
    nameKey: 'project6',
    descriptionKey: 'project6Desc',
    tags: ['Python', 'Bot', 'API'],
    image: '',
    githubUrl: 'https://github.com/yourname/telegram-bot'
  },
  {
    id: 'chrome-extension',
    nameKey: 'project7',
    descriptionKey: 'project7Desc',
    tags: ['JavaScript', 'Chrome', 'AI'],
    image: '',
    githubUrl: 'https://github.com/yourname/chrome-extension'
  },
  {
    id: 'api-server',
    nameKey: 'project8',
    descriptionKey: 'project8Desc',
    tags: ['Go', 'REST', 'Docker'],
    image: '',
    githubUrl: 'https://github.com/yourname/api-server'
  }
]

export const projectsI18n: Record<string, Record<string, ProjectI18n>> = {
  'zh-CN': {
    project1: {
      name: 'Vibe Coding 个人网站',
      description: '用 Vue 3 和 AI 辅助构建的个人网站，展示 Vibe Coding 实践成果'
    },
    project2: {
      name: 'AI 聊天应用',
      description: '基于 OpenAI API 的智能聊天助手，支持多轮对话与上下文理解'
    },
    project3: {
      name: '命令行效率工具',
      description: '用 Python 编写的一套 CLI 工具集，AI 辅助完成代码生成与测试'
    },
    project4: {
      name: 'Markdown 博客系统',
      description: '轻量级 Markdown 静态博客，支持自动生成目录与代码高亮'
    },
    project5: {
      name: '数据可视化仪表盘',
      description: '交互式数据仪表盘，支持多数据源接入与实时刷新'
    },
    project6: {
      name: 'Telegram 通知机器人',
      description: '自动化消息推送机器人，集成多种 API 实现智能通知'
    },
    project7: {
      name: 'Chrome 效率扩展',
      description: '浏览器扩展插件，AI 辅助实现网页内容分析与摘要'
    },
    project8: {
      name: 'REST API 服务',
      description: '用 Go 构建的高性能 REST API 服务，Docker 容器化部署'
    }
  },
  'en-US': {
    project1: {
      name: 'Vibe Coding Site',
      description: 'A personal website built with Vue 3 and AI assistance, showcasing Vibe Coding practices'
    },
    project2: {
      name: 'AI Chat App',
      description: 'An intelligent chat assistant powered by OpenAI API with multi-turn conversation support'
    },
    project3: {
      name: 'CLI Efficiency Tools',
      description: 'A collection of CLI tools written in Python, with AI-assisted code generation and testing'
    },
    project4: {
      name: 'Markdown Blog System',
      description: 'A lightweight static Markdown blog with auto-generated table of contents and syntax highlighting'
    },
    project5: {
      name: 'Data Dashboard',
      description: 'An interactive data dashboard with multi-source data integration and real-time refresh'
    },
    project6: {
      name: 'Telegram Bot',
      description: 'An automated notification bot integrating multiple APIs for intelligent alerts'
    },
    project7: {
      name: 'Chrome Extension',
      description: 'A browser extension with AI-powered content analysis and summarization'
    },
    project8: {
      name: 'REST API Server',
      description: 'A high-performance REST API service built with Go, containerized with Docker'
    }
  }
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  projects.forEach(p => p.tags.forEach(t => tags.add(t)))
  return Array.from(tags)
}
