import { For, JSXElement, Match, Show, Switch } from "solid-js";
import style from "./style.module.scss";

interface NavItem {
  title: string;
  path: string;
}

interface NavBarProps {
  logo?: string;
  items: NavItem[];
  tail?: JSXElement;
  itemsWrapper?: (title: string, path: string) => JSXElement;
}

const TopNav = (props: NavBarProps) => {
  return (
    <>
      <nav class={style.navbar}>
        <Show when={props.logo}>
          <div>
            <img
              class="w-10 h-10 rounded-full! level-high"
              src={props.logo}
              alt="logo"
            />
          </div>
        </Show>

        <div class="glass rounded-full! px4 py2 shadow-lg border-[var(--color-border)] dark:border-[var(--color-border-dark)] mx-auto">
          <ul>
            <Switch
              fallback={
                <For each={props.items}>
                  {(item) => (
                    <li>
                      <a class="link" href={item.path}>
                        {item.title}
                      </a>
                    </li>
                  )}
                </For>
              }
            >
              <Match when={props.itemsWrapper}>
                <For each={props.items}>
                  {(item) => (
                    <li>{props.itemsWrapper!(item.title, item.path)}</li>
                  )}
                </For>
              </Match>
            </Switch>
          </ul>
        </div>
        <Show when={props.tail}>{props.tail}</Show>
      </nav>
    </>
  );
};

export default TopNav;

export { type NavItem };
