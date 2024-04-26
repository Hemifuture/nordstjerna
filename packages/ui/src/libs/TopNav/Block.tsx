import { For, Match, Show, Switch } from "solid-js";
import { TopNavProps } from "./types";
import style from "./style.module.scss";

const Block = (props: TopNavProps) => {
  const levelClass = props.level ? `level-${props.level}` : "level-low";

  return (
    <>
      <nav class={`${style["navbar-full"]} glass ${levelClass}`}>
        <div class="flex flex-1 gap10">
          <Show when={props.logo}>
            <div>
              <img
                class="w-10 h-10 rounded-full! level-high"
                src={props.logo}
                alt="logo"
              />
            </div>
          </Show>

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
        <div class={`${style.actions}`}>{props.tail}</div>
      </nav>
    </>
  );
};

export default Block;
