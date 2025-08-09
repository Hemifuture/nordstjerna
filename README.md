# Nordstjerna

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)
[![Web Components](https://img.shields.io/badge/Web%20Components-Standard-blue?style=for-the-badge&logo=webcomponents.org)](https://www.webcomponents.org/)
[![Lit](https://img.shields.io/badge/Built%20with-Lit-324fff?style=for-the-badge&logo=lit)](https://lit.dev/)

🌟 一个现代化的 Glassmorphism 风格 Web Components 组件库，采用 Lit 构建。

## 🏗️ 项目结构

```bash
nordstjerna/
├── packages/
│   ├── style/                    # 样式包 - Glassmorphism 设计系统
│   │   ├── src/
│   │   │   ├── css/
│   │   │   │   ├── variables.css      # CSS 变量定义
│   │   │   │   ├── border.css         # 边框样式
│   │   │   │   ├── shadow.css         # 阴影效果
│   │   │   │   └── components/        # 组件样式
│   │   │   ├── components-css.ts      # 组件样式导出
│   │   │   ├── main.ts               # 样式包入口
│   │   │   ├── style.css             # 样式入口文件
│   │   │   └── vite-env.d.ts         # Vite 类型定义
│   │   ├── dist/                     # 构建输出目录
│   │   ├── tsconfig.json             # TypeScript 配置
│   │   ├── vite.config.ts            # Vite 构建配置
│   │   └── package.json
│   │
│   └── ui/                       # UI组件包 - Web Components
│       ├── src/
│       │   ├── base/
│       │   │   ├── index.ts              # 基础模块导出
│       │   │   └── nordstjerna-element.ts # 基础组件类
│       │   ├── components/            # Web Components 组件
│       │   ├── styles/                # 组件样式
│       │   ├── global.d.ts               # 全局类型定义
│       │   └── index.ts                  # 组件库入口
│       ├── dist/                         # 构建输出目录
│       ├── tsconfig.json                 # TypeScript 配置
│       ├── vite.config.ts                # Vite 构建配置
│       ├── LICENSE                       # 许可证文件
│       └── package.json
│
├── playground/                   # Nuxt 3 展示应用
│   ├── assets/
│   │   └── css/
│   │       └── main.css             # 主样式文件
│   ├── pages/
│   │   └── index.vue               # 首页组件
│   ├── plugins/
│   │   └── nordstjerna.client.ts   # Nordstjerna 客户端插件
│   ├── public/
│   │   └── vite.svg                # 静态资源
│   ├── .nuxt/                      # Nuxt 生成文件
│   ├── .output/                    # Nuxt 构建输出
│   ├── app.vue                     # 根组件
│   ├── nuxt.config.ts              # Nuxt 配置
│   ├── tsconfig.json               # TypeScript 配置
│   ├── vite.config.ts              # Vite 配置
│   └── package.json
│
├── .github/                      # GitHub 工作流配置
├── .vscode/                      # VS Code 配置
├── pnpm-workspace.yaml          # pnpm 工作空间配置
├── pnpm-lock.yaml              # 依赖锁定文件
├── package.json                # 根项目配置
└── README.md                   # 项目说明
```

## 🚀 快速开始

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/Hemifuture/nordstjerna.git
cd nordstjerna

# 安装依赖
pnpm install
```

### 启动开发

```bash
pnpm dev
```

## 📦 使用方式

### CSS 样式包 (@nordstjerna/style)

提供 Glassmorphism 风格的 CSS 样式系统，可以独立使用或配合 UI 组件包使用。

```bash
# 安装样式包
npm install @nordstjerna/style
```

```html
<style>
@import '@nordstjerna/style';
</style>
```

```javascript
// 在 JavaScript 项目中导入
import "@nordstjerna/style";
```

### UI 组件包 (@nordstjerna/ui)

基于 Lit 构建的 Web Components 组件库，提供开箱即用的交互组件。

```bash
# 安装 UI 组件包
npm install @nordstjerna/ui
```

```javascript
import "@nordstjerna/ui";
import "@nordstjerna/style";

// 动态创建组件
const button = document.createElement('n-button');
button.textContent = '点击我';
button.status = 'primary';
button.level = 'high';
document.body.appendChild(button);
```

## 🤝 贡献指南

我们欢迎任何形式的贡献！请查看我们的贡献指南：

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 Apache-2.0 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 👥 贡献者

- **dyzdyz010** - 项目维护者 - [duyizhuo.com](https://duyizhuo.com)
- **阿菜Cai** - 核心贡献者 - [GitHub](https://github.com/RSS1102)
- **☘️** - 核心贡献者 - [GitHub](https://github.com/nanarino)

---

⭐ 如果这个项目对您有帮助，请给我们一个 Star！
