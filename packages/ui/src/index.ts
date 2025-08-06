import "@nordstjerna/style";

// 导出基础类
export * from './base/index.js';

// 导出所有组件
export * from './components/index.js';

// 确保组件被注册
import "@nordstjerna/style";
import './components/Button/n-button.js';

export { NButton } from './components/Button/n-button.js';
export { NordstjernaElement } from './base/nordstjerna-element.js';
export type { ButtonProps } from './components/Button/props.js';