# 个人作品集 | Portfolio

一个使用 React + TypeScript + Vite + Tailwind CSS 构建的个人作品集网站。

## 技术栈

- **前端框架**: React 19
- **语言**: TypeScript
- **构建工具**: Vite 8
- **样式**: Tailwind CSS 4
- **代码检查**: oxlint

## 项目结构

```
src/
├── components/
│   ├── Header.tsx    # 顶部导航栏
│   ├── Hero.tsx      # 首页主视觉
│   ├── About.tsx     # 关于我
│   ├── Projects.tsx  # 项目展示
│   ├── Contact.tsx   # 联系方式
│   └── Footer.tsx    # 页脚
├── data/
│   ├── projects.ts   # 项目数据
│   └── skills.ts     # 技能数据
├── App.tsx           # 根组件
├── main.tsx          # 入口文件
└── index.css         # 全局样式
```

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 特性

- 🎨 深色主题配色
- 🌈 渐变色标题和边框效果
- 📱 响应式设计
- ✨ 入场动画效果
- 🚀 基于 Vite 的极速开发体验
