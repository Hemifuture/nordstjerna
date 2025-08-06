import { html, css } from 'lit';
import type { TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { NordstjernaElement } from '../../base/nordstjerna-element.js';

/**
 * 输入框组件属性接口
 */
export interface InputProps {
  /** 输入框类型 */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  /** 占位符文本 */
  placeholder?: string;
  /** 输入框值 */
  value?: string;
  /** 输入框名称 */
  name?: string;
  /** 是否必填 */
  required?: boolean;
  /** 是否只读 */
  readonly?: boolean;
  /** 最大长度 */
  maxlength?: number;
  /** 最小长度 */
  minlength?: number;
  /** 正则表达式模式 */
  pattern?: string;
  /** 自动完成 */
  autocomplete?: string;
}

/**
 * Nordstjerna 输入框组件
 * 
 * @example
 * ```html
 * <n-input placeholder="请输入内容"></n-input>
 * <n-input status="success" level="low" placeholder="成功状态"></n-input>
 * <n-input status="warning" level="medium" placeholder="警告状态"></n-input>
 * <n-input status="danger" level="high" placeholder="危险状态"></n-input>
 * ```
 */
@customElement('n-input')
export class NInput extends NordstjernaElement implements InputProps {
  @property({ reflect: true })
  type: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' = 'text';

  @property({ reflect: true })
  placeholder = '';

  @property({ reflect: true })
  value = '';

  @property({ reflect: true })
  name = '';

  @property({ type: Boolean, reflect: true })
  required = false;

  @property({ type: Boolean, reflect: true })
  readonly = false;

  @property({ type: Number, reflect: true })
  maxlength?: number;

  @property({ type: Number, reflect: true })
  minlength?: number;

  @property({ reflect: true })
  pattern?: string;

  @property({ reflect: true })
  autocomplete?: string;

  static styles = css`
    ${NordstjernaElement.styles}
    
    :host {
      display: inline-block;
      width: 100%;
      max-width: 300px;
    }

    .input-wrapper {
      position: relative;
      width: 100%;
    }

    .input {
      width: 100%;
      height: 40px;
      border: none;
      background: none;
      padding: 0 12px;
      margin: 0;
      font: inherit;
      color: inherit;
      outline: none;
      box-sizing: border-box;
      
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
      backdrop-filter: var(--blur-filter);
      box-shadow: var(--box-shadow);
      transition: all 0.2s ease;
    }

    :host([level="low"]) .input {
      --box-shadow: var(--shadow-low), var(--hover-effect);
    }

    :host([level="medium"]) .input {
      --box-shadow: var(--shadow-medium), var(--hover-effect);
    }

    :host([level="high"]) .input {
      --box-shadow: var(--shadow-high), var(--hover-effect);
    }

    :host([status="success"]) .input {
      --border-color: var(--color-success);
      --original-color: var(--color-success);
    }

    :host([status="warning"]) .input {
      --border-color: var(--color-warning);
      --original-color: var(--color-warning);
    }

    :host([status="danger"]) .input {
      --border-color: var(--color-danger);
      --original-color: var(--color-danger);
    }

    .input:hover:not(:disabled) {
      --hover-effect: inset 0 0 0 1px var(--border-color);
    }

    .input:focus {
      outline: none;
      --border-color: var(--original-color);
      --hover-effect: inset 0 0 0 1px var(--border-color);
    }

    :host([size="small"]) .input {
      height: 32px;
      padding: 0 8px;
      font-size: 0.875rem;
    }

    :host([size="medium"]) .input {
      height: 40px;
      padding: 0 12px;
      font-size: 1rem;
    }

    :host([size="large"]) .input {
      height: 48px;
      padding: 0 16px;
      font-size: 1.125rem;
    }

    .input::placeholder {
      color: var(--color-text-secondary);
      opacity: 0.7;
    }

    :host([disabled]) .input {
      cursor: not-allowed;
      background-color: var(--color-bg-disabled, rgba(0, 0, 0, 0.05));
      color: var(--color-text-disabled, rgba(0, 0, 0, 0.4));
    }

    :host([readonly]) .input {
      cursor: default;
      background-color: var(--color-bg-readonly, rgba(0, 0, 0, 0.02));
    }
  `;

  protected render(): TemplateResult {
    return html`
      <div class="input-wrapper">
        <input 
          class="input"
          type="${this.type}"
          placeholder="${this.placeholder}"
          .value="${this.value}"
          name="${this.name}"
          ?required="${this.required}"
          ?readonly="${this.readonly}"
          ?disabled="${this.disabled}"
          maxlength="${this.maxlength || ''}"
          minlength="${this.minlength || ''}"
          pattern="${this.pattern || ''}"
          autocomplete="${this.autocomplete || ''}"
          @input="${this.handleInput}"
          @change="${this.handleChange}"
          @focus="${this.handleFocus}"
          @blur="${this.handleBlur}"
        />
      </div>
    `;
  }

  private handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    
    // 派发自定义输入事件
    this.dispatchEvent(new CustomEvent('n-input', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  private handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    
    // 派发自定义变化事件
    this.dispatchEvent(new CustomEvent('n-change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  private handleFocus(_event: Event): void {
    // 派发自定义聚焦事件
    this.dispatchEvent(new CustomEvent('n-focus', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  private handleBlur(_event: Event): void {
    // 派发自定义失焦事件
    this.dispatchEvent(new CustomEvent('n-blur', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  /**
   * 获取输入框元素
   */
  get inputElement(): HTMLInputElement | null {
    return this.shadowRoot?.querySelector('.input') as HTMLInputElement || null;
  }

  /**
   * 聚焦输入框
   */
  focus(): void {
    this.inputElement?.focus();
  }

  /**
   * 失焦输入框
   */
  blur(): void {
    this.inputElement?.blur();
  }

  /**
   * 选择所有文本
   */
  select(): void {
    this.inputElement?.select();
  }
}
