import { JSX } from 'solid-js/jsx-runtime';

export interface ButtonProps {
  /** 按钮类型 */
  type?: 'default' | 'primary' | 'secondary' | 'danger';
  /** 按钮尺寸 */
  size?: 'small' | 'medium' | 'large';
  /** 按钮层级 */
  level?: string | number;
  /** 按钮状态 */
  status?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否处于加载状态 */
  loading?: boolean;
  /** 点击事件处理函数 */
  onClick?: (event: MouseEvent) => void;
  /** 自定义样式 */
  style?: Record<string, any>;
  /** 自定义类名 */
  className?: string;
  /** 子元素 */
  children?: JSX.Element;
}

// 默认 props 参数配置
export const defaultButtonProps: Partial<ButtonProps> = {
  type: 'default',
  size: 'medium',
  level: undefined,
  status: 'default',
  disabled: false,
  loading: false,
};