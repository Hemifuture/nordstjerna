import { LitElement, css } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Nordstjerna UI 基础组件类
 * 所有 Nordstjerna UI 组件都应该继承自此类
 */
export abstract class NordstjernaElement extends LitElement {
  /**
   * 组件大小
   */
  @property({ reflect: true })
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * 是否禁用
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * 组件主题
   */
  @property({ reflect: true })
  theme: 'default' | 'primary' | 'lilac' | 'success' | 'warning' | 'danger' = 'default';

  /**
   * 组件层级（用于阴影效果）
   */
  @property({ reflect: true })
  level: 'low' | 'medium' | 'high' | undefined = undefined;

  /**
   * 基础样式 - 引入 nordstjerna 样式变量
   */
  static styles = css`
    :host {
      display: inline-block;
      box-sizing: border-box;
    }

    /* disabled: 保留光标反馈以显示禁止状态，不再使用 pointer-events:none 以便光标样式生效 */
    :host([disabled]) {
      opacity: 0.6;
      cursor: not-allowed;  
    }

    :host([size="small"]) {
      --nordstjerna-size: var(--nordstjerna-size-small, 0.875rem);
    }

    :host([size="medium"]) {
      --nordstjerna-size: var(--nordstjerna-size-medium, 1rem);
    }

    :host([size="large"]) {
      --nordstjerna-size: var(--nordstjerna-size-large, 1.125rem);
    }

  /* 这里边框要单独设置黑色 */
  :host([theme="default"]) {
      --nordstjerna-border-color: var(--color-border, var(--color-primary));
      --nordstjerna-original-color: var(--color-primary);
    }

  :host([theme="primary"]) {
        --nordstjerna-border-color: var(--color-border, var(--color-primary));
      --nordstjerna-original-color: var(--color-primary);
    }

  :host([theme="lilac"]) {
      --nordstjerna-border-color: var(--color-lilac);
      --nordstjerna-original-color: var(--color-lilac);
    }

  :host([theme="success"]) {
      --nordstjerna-border-color: var(--color-success);
      --nordstjerna-original-color: var(--color-success);
    }

  :host([theme="warning"]) {
      --nordstjerna-border-color: var(--color-warning);
      --nordstjerna-original-color: var(--color-warning);
    }

  :host([theme="danger"]) {
      --nordstjerna-border-color: var(--color-danger);
      --nordstjerna-original-color: var(--color-danger);
    }

    /* 层级阴影 */
    :host([level="low"]) {
      --nordstjerna-base-shadow: var(--shadow-low);
    }

    :host([level="medium"]) {
      --nordstjerna-base-shadow: var(--shadow-medium);
    }

    :host([level="high"]) {
      --nordstjerna-base-shadow: var(--shadow-high);
    }
  `;

  /**
   * 获取组件的基础类名
   */
  protected getBaseClasses(): string[] {
    const classes = [
      'nordstjerna-element',
      `nordstjerna-element--${this.size}`,
  `nordstjerna-element--${this.theme}`,
    ];

    if (this.level) {
      classes.push(`nordstjerna-element--${this.level}`);
    }

    if (this.disabled) {
      classes.push('nordstjerna-element--disabled');
    }

    return classes;
  }
}
