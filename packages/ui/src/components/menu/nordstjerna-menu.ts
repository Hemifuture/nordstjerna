import { customElement, property } from 'lit/decorators.js';
import { html, unsafeCSS, LitElement } from 'lit';
import { menuCss as inputComponentCss } from '@nordstjerna/style/components-css';

export interface MenuItem {
  label: string;
  value: string;
  active?: boolean;
}

@customElement('n-menu')
export class NordstjernaMenu extends LitElement {
  @property({ type: Array })
  items: MenuItem[] = [];

  @property({ type: String })
  value: string = '';

  /** 菜单方向，vertical 或 horizontal */
  @property({ type: String })
  direction: 'vertical' | 'horizontal' = 'vertical';

  /** 菜单主题 */
  @property({ type: String })
  theme: 'primary' | 'lilac' | 'success' | 'warning' | 'danger' = 'primary';

  static styles = [unsafeCSS(inputComponentCss)];

  render() {
    return html`
      <div
        class="menu ${this.direction === 'horizontal' ? 'menu-horizontal' : ''}"
        theme="${this.theme}"
      >
        ${this.items.map(item => html`
          <div
            class="menu-item${item.value === this.value ? ' active' : ''}"
            @click=${() => this._select(item)}
          >${item.label}</div>
        `)}
      </div>
    `;
  }

  private _select(item: MenuItem) {
    this.value = item.value;
    this.dispatchEvent(new CustomEvent('select', { detail: item }));
  }
}
