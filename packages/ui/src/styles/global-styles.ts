// 将基础变量与阴影 token 注入到文档，保证只引用 @nordstjerna/ui 也有基础样式
import { tokensCss } from '@nordstjerna/style/components-css';

let injected = false;
export function ensureGlobalNordstjernaStyles() {
  if (injected) return;
  injected = true;
  const style = document.createElement('style');
  style.setAttribute('data-nordstjerna-global', '');
  style.textContent = tokensCss;
  document.head.appendChild(style);
}

if (typeof document !== 'undefined') {
  ensureGlobalNordstjernaStyles();
}
