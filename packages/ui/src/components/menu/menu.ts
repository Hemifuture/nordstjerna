// menu.ts - Menu 组件实现
export interface MenuItem {
  label: string;
  value: string;
  active?: boolean;
}

export interface MenuProps {
  items: MenuItem[];
  onSelect?: (item: MenuItem) => void;
}

export class Menu {
  el: HTMLElement;
  props: MenuProps;

  constructor(props: MenuProps) {
    this.props = props;
    this.el = this.render();
  }

  render() {
    const menu = document.createElement('div');
    menu.className = 'menu';
    this.props.items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'menu-item' + (item.active ? ' active' : '');
      itemEl.textContent = item.label;
      itemEl.onclick = () => {
        if (this.props.onSelect) this.props.onSelect(item);
      };
      menu.appendChild(itemEl);
    });
    return menu;
  }

  mount(target: HTMLElement) {
    target.appendChild(this.el);
  }
}
