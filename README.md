# Nordstjerna

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)
[![Web Components](https://img.shields.io/badge/Web%20Components-Standard-blue?style=for-the-badge&logo=webcomponents.org)](https://www.webcomponents.org/)
[![Lit](https://img.shields.io/badge/Built%20with-Lit-324fff?style=for-the-badge&logo=lit)](https://lit.dev/)

🌟 一个现代化的 Glassmorphism 风格 Web Components 组件库，采用 Lit 构建，提供优雅的毛玻璃效果设计。

## ✨ 项目特色

- 🎨 **Glassmorphism 设计**: 精美的毛玻璃效果和现代化视觉设计
- 🔧 **Web Components**: 基于标准的 Web Components，框架无关
- ⚡ **高性能**: 使用 Lit 框架，提供高效的渲染和更新机制
- 🎯 **TypeScript**: 完整的类型支持，提供出色的开发体验
- 🎨 **灵活样式系统**: 支持多层级阴影和状态主题
- 📦 **模块化架构**: 样式与组件分离，便于定制和扩展

## 🏗️ 项目结构

```
nordstjerna/
├── packages/
│   ├── style/                    # 样式包 - Glassmorphism 设计系统
│   │   ├── src/
│   │   │   ├── css/
│   │   │   │   ├── variables.css      # CSS 变量定义
│   │   │   │   ├── border.css         # 边框样式
│   │   │   │   ├── shadow.css         # 阴影效果
│   │   │   │   └── components/        # 组件样式
│   │   │   │       ├── button.css     # 按钮样式
│   │   │   │       ├── card.css       # 卡片样式
│   │   │   │       └── input.css      # 输入框样式
│   │   │   └── style.css             # 样式入口文件
│   │   └── package.json
│   │
│   └── ui/                       # UI组件包 - Web Components
│       ├── src/
│       │   ├── base/
│       │   │   └── nordstjerna-element.ts  # 基础组件类
│       │   ├── components/
│       │   │   └── Button/
│       │   │       ├── n-button.ts        # 按钮组件
│       │   │       ├── props.ts           # 类型定义
│       │   │       └── index.ts           # 导出文件
│       │   └── index.ts                   # 组件库入口
│       ├── vite.config.ts                 # 构建配置
│       └── package.json
│
├── playground/                   # 组件展示和测试
│   ├── src/
│   │   ├── App.ts               # 示例应用
│   │   ├── index.ts             # 入口文件
│   │   └── index.css            # 样式文件
│   ├── index.html               # HTML 模板
│   ├── vite.config.ts           # 开发服务器配置
│   └── package.json
│
├── pnpm-workspace.yaml          # pnpm 工作空间配置
├── pnpm-lock.yaml              # 依赖锁定文件
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
# 启动 playground 开发服务器
cd playground
pnpm dev

# 访问 http://localhost:5173/nordstjerna/
```

### 构建组件库

```bash
# 构建样式包
cd packages/style
pnpm build

# 构建 UI 组件包
cd packages/ui
pnpm build
```

## 📦 使用方式

### 在 HTML 中使用

```html
<!DOCTYPE html>
<html>
<head>
  <!-- 引入样式 -->
  <link rel="stylesheet" href="@nordstjerna/style">
</head>
<body>
  <!-- 使用组件 -->
  <n-button>默认按钮</n-button>
  <n-button status="success" level="high">成功按钮</n-button>
  <n-button loading>加载中</n-button>
  
  <!-- 引入组件库 -->
  <script type="module" src="@nordstjerna/ui"></script>
</body>
</html>
```

### 在项目中使用

```javascript
// 导入组件库
import "@nordstjerna/ui";
import "@nordstjerna/style";

// 动态创建组件
const button = document.createElement('n-button');
button.textContent = '点击我';
button.status = 'primary';
button.level = 'high';
document.body.appendChild(button);
```

### 样式系统

- 🎨 CSS 变量驱动的主题系统
- 🌊 流畅的毛玻璃背景效果
- ✨ 精细的阴影层级系统
- 🎯 语义化的状态颜色
- 📱 响应式设计适配

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
