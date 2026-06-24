/** 项目数据类型定义 */
export interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl?: string;
}

/** 项目列表数据 */
export const projects: Project[] = [
  {
    id: 1,
    name: '电商平台',
    description: '一个全栈电商平台，支持商品浏览、购物车、订单管理和在线支付功能，采用微服务架构设计。',
    techStack: ['React', 'Node.js', 'MongoDB', 'Redis', 'Docker'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    projectUrl: 'https://github.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    name: '任务管理应用',
    description: '基于看板的项目管理工具，支持拖拽排序、团队协作、实时通知和数据可视化仪表盘。',
    techStack: ['TypeScript', 'Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    projectUrl: 'https://github.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    name: 'AI 聊天助手',
    description: '集成大语言模型的智能对话应用，支持多轮对话、上下文记忆、Markdown 渲染和代码高亮。',
    techStack: ['React', 'Python', 'FastAPI', 'OpenAI API', 'WebSocket'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    projectUrl: 'https://github.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    name: '数据分析仪表盘',
    description: '企业级数据可视化平台，支持自定义图表、实时数据更新、报表导出和权限管理。',
    techStack: ['Vue.js', 'ECharts', 'Express', 'MySQL', 'JWT'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    projectUrl: 'https://github.com',
  },
];