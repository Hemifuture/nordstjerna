import { html, css } from 'lit';
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
    
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
      box-sizing: border-box;
    }

    .button {
      width: 100%;
      height: 100%;
      border: none;
      background: none;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      cursor: inherit;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5em;
      
      /* 应用 nordstjerna 样式 */
      --border-color: var(--nordstjerna-border-color, var(--color-primary));
      --original-color: var(--nordstjerna-original-color, var(--color-primary));
      --color-border-hover: var(--nordstjerna-border-color, var(--color-primary));
      --hover-effect: inset 0 0 0 0px var(--border-color);
      --box-shadow: var(--nordstjerna-base-shadow, var(--shadow-low)), var(--hover-effect);

      background-color: var(--color-bg);
      color: var(--color-text);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      padding: 8px 16px;
      backdrop-filter: var(--blur-filter);
      box-shadow: var(--box-shadow);
      transition: all 0.2s ease;
    }

    :host([level="low"]) .button {
      --box-shadow: var(--shadow-low), var(--hover-effect);
    }

    :host([level="medium"]) .button {
      --box-shadow: var(--shadow-medium), var(--hover-effect);
    }

    :host([level="high"]) .button {
      --box-shadow: var(--shadow-high), var(--hover-effect);
    }

    :host([status="success"]) .button {
      --border-color: var(--color-success);
      --original-color: var(--color-success);
    }

    :host([status="warning"]) .button {
      --border-color: var(--color-warning);
      --original-color: var(--color-warning);
    }

    :host([status="danger"]) .button {
      --border-color: var(--color-danger);
      --original-color: var(--color-danger);
    }

    :host(:hover:not([disabled])) .button {
      --hover-effect: inset 0 0 0 1px var(--border-color);
    }

    :host(:active:not([disabled])) .button {
      --border-color: color-mix(in oklab, var(--original-color) 85%, black 15%);
      --hover-effect: inset 0 0 0 1px var(--border-color);
      transition: all 0.1s;
    }

    :host([loading]) {
      pointer-events: none;
    }

    .loading-spinner {
      width: 1em;
      height: 1em;
      border: 2px solid currentColor;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
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
