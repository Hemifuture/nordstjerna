import { For, Show, createSignal } from "solid-js";
import { SideNavListItem } from "../types";
import { Transition } from "solid-transition-group";
import style from "../style.module.scss";

interface MenuItemProps {
  item: SideNavListItem;
  isSub?: boolean;
  onClick?: (item: SideNavListItem) => void;
}

const MenuItem = (props: MenuItemProps) => {
  const [open, setOpen] = createSignal(false);

  const handleClick = () => {
    if (props.item.items && !props.isSub) {
      setOpen(!open());
    } else {
      props.onClick?.(props.item);
    }
  };

  return (
    <>
      <div
        class="flex gap-1 items-center link px2 py2 select-none"
        onClick={handleClick}
      >
        <Show when={props.item.icon}>
          <div class="mr1">{props.item.icon}</div>
        </Show>
        <span classList={{ "text-xl": !props.isSub }} class="flex-1">
          {props.item.title}
        </span>
        <Show when={!props.isSub && props.item.items }>
          <div
            class="i-fa6-solid:chevron-down ml8"
            classList={{
              [style["arrow-rotate-0"]]: !open(),
              [style["arrow-rotate-180"]]: open(),
            }}
          ></div>
        </Show>
      </div>
      <Transition
        name="subnav"
        mode="outin"
        enterActiveClass={style["subnav-enter-active"]}
        exitActiveClass={style["subnav-exit-active"]}
        enterClass={style["subnav-enter-from"]}
        exitClass={style["subnav-exit-from"]}
        enterToClass={style["subnav-enter-to"]}
        exitToClass={style["subnav-exit-to"]}
      >
        <Show when={props.item.items && open()}>
          <div class={`${style["subnav-panel"]}`}>
            <For each={props.item.items}>
              {(item) => <MenuItem isSub item={{ title: item }} onClick={props.onClick} />}
            </For>
          </div>
        </Show>
      </Transition>
    </>
  );
};

export default MenuItem;
