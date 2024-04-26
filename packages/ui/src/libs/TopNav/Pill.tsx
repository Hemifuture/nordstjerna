import { TopNavProps } from "./types";
import style from "./style.module.scss";
import { For, Match, Show, Switch } from "solid-js";

const Pill = (props: TopNavProps) => {
  const levelClass = props.level ? `level-${props.level}` : "level-high";

  return (
    <>
      <nav class={`${style.navbar}`}>
        <Show when={props.logo}>
          <div>
            <img
              class={`w-10 h-10 rounded-full! level-${props.level ? props.level : "high"}`}
              src={props.logo}
              alt="logo"
            />
          </div>
        </Show>

        <div
          class={`glass rounded-full! px4 py2 border-[var(--color-border)] dark:border-[var(--color-border-dark)] mx-auto ${levelClass}`}
        >
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
                    <li>
                      {props.itemsWrapper!(item.title, item.path, item.icon)}
                    </li>
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

export default Pill;
