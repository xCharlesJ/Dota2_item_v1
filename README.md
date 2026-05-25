# DOTA2 出装助手

一个仿照 [Stratz](https://stratz.com/heroes) 风格的 DOTA2 英雄出装推荐网站。

![DOTA2 出装助手](https://img.shields.io/badge/DOTA2-出装助手-c89b3c?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss)

## 功能特性

- 123 位 DOTA2 英雄按属性分类展示（力量/敏捷/智力/全才）
- 每个英雄独立详情页面，支持单独跳转和分享
- 英雄出装推荐：前期/中期/后期三个阶段
- 技能加点推荐
- 支持按属性筛选和名称搜索
- 暗色 DOTA2 主题设计，金色点缀
- 响应式布局，适配桌面/平板/手机

## 在线预览

访问 [http://localhost:5173](http://localhost:5173) 查看本地预览

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **路由**: React Router
- **状态管理**: Zustand
- **图标**: Lucide React

## 快速开始

```bash
# 克隆项目
git clone <your-repo-url>
cd DOTA2-item

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 项目结构

```
DOTA2-item/
├── dist/              # 生产构建输出
├── src/
│   ├── components/    # React 组件
│   │   ├── Navbar.tsx
│   │   ├── HeroCard.tsx
│   │   └── AttributeSection.tsx
│   ├── data/          # 数据文件
│   │   ├── heroes.ts  # 英雄数据
│   │   ├── items.ts   # 装备数据
│   │   └── skills.ts  # 技能数据
│   ├── pages/         # 页面组件
│   │   ├── HeroListPage.tsx
│   │   └── HeroDetailPage.tsx
│   ├── types/         # TypeScript 类型
│   ├── App.tsx
│   └── main.tsx
├── .trae/documents/   # PRD 和技术文档
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## 数据来源

- 英雄头像、装备图标、技能图标均来自 [Stratz CDN](https://cdn.stratz.com)
- 出装推荐数据为预设推荐，实际游戏请根据局势灵活调整

## 设计风格

- **主题**: 暗色 DOTA2 风格
- **主色**: 深蓝黑 `#0a0e17` + 金色 `#c89b3c`
- **属性色**: 力量红 `#e43b3b` / 敏捷绿 `#4caf50` / 智力蓝 `#3b8ce4` / 全才紫 `#9b59b6`
- **字体**: Cinzel (标题) + Noto Sans SC (正文)

## 许可证

MIT License

## 致谢

- [DOTA2](https://www.dota2.com/) - 游戏原作
- [Stratz](https://stratz.com/) - 设计参考和数据来源