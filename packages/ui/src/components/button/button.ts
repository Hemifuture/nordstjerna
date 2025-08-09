import { html, css, unsafeCSS } from 'lit';
import { buttonCss as buttonComponentCss } from '@nordstjerna/style/components-css';
import type { TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { NordstjernaElement } from '../../base/nordstjerna-element.js';

/**
 * 按钮组件属性接口
 */
export interface ButtonProps {
  /** 按钮HTML类型 */
  type?: 'button' | 'submit' | 'reset';
  /** 按钮尺寸 */
  size?: 'small' | 'medium' | 'large';
  /** 按钮层级（用于阴影效果） */
  level?: 'low' | 'medium' | 'high';
  /** 按钮状态 */
  status?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否处于加载状态 */
  loading?: boolean;
}

/**
 * Nordstjerna 按钮组件
 * 
 * @example
 * ```html
 * <n-button>Click me</n-button>
 * <n-button status="success" level="high">Success Button</n-button>
 * <n-button disabled>Disabled Button</n-button>
 * ```
 */
@customElement('n-button')
export class NButton extends NordstjernaElement implements ButtonProps {
  @property({ reflect: true })
  type: 'button' | 'submit' | 'reset' = 'button';

  @property({ type: Boolean, reflect: true })
  loading = false;

  static styles = css`
    ${NordstjernaElement.styles}
  ${unsafeCSS(buttonComponentCss)}
  `;

  protected render(): TemplateResult {
    return html`
      <button 
        class="button" 
        type="${this.type}"
        ?disabled="${this.disabled || this.loading}"
      >
        ${this.loading 
          ? html`<div class="loading-spinner"></div>` 
          : ''
        }
        <slot></slot>
      </button>
    `;
  }

  private handleClick(event: Event): void {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // 如果是表单按钮，触发表单相关事件
    if (this.type === 'submit' || this.type === 'reset') {
      const form = this.closest('form');
      if (form) {
        if (this.type === 'submit') {
          form.requestSubmit();
        } else {
          form.reset();
        }
      }
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick);
  }
}
