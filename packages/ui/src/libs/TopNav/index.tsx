import { For, JSXElement } from "solid-js";
import style from "./style.module.scss";
import { A } from "@solidjs/router";

interface NavItem {
  title: string;
  path: string;
}

interface NavBarProps {
  logo?: string;
  items: NavItem[];
  tail?: JSXElement;
}

const TopNav = (props: NavBarProps) => {
  return (
    <>
      <nav class={style.navbar}>
        <div>
          <img
            class="w-10 h-10 rounded-full! level-high"
            src={props.logo}
            alt="logo"
          />
        </div>

        <div class="glass rounded-full! px4 py2 shadow-lg border-[var(--border-color)] dark:border-[var(--border-color-dark)]">
          <ul>
            <For each={props.items}>
              {(item) => (
                <li>
                  <A class="link" href={item.path}>
                    {item.title}
                  </A>
                </li>
              )}
            </For>
          </ul>
        </div>
        <div class="actions">{props.tail}</div>
      </nav>
    </>
  );
};

export default TopNav;

export { type NavItem };
