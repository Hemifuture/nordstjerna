import { For, Show, createSignal } from "solid-js";
import { SideNavListItem, SubNavRenderFunction } from "../types";
import { Transition } from "solid-transition-group";
import style from "../style.module.scss";
import { currentActiveKey } from "../data";

interface MenuItemProps {
  item: SideNavListItem;
  isSub?: boolean;
  onClick?: (item: SideNavListItem) => void;
  renderWrapper?: SubNavRenderFunction;
}

const MenuItem = (props: MenuItemProps) => {
  const [activeKey, setActiveKey] = currentActiveKey;

  console.log(activeKey());
  const [open, setOpen] = createSignal(false);

  const handleClick = () => {
    if (props.item.children && !props.isSub) {
      setOpen(!open());
    } else {
      setActiveKey(props.item.key);
      props.onClick?.(props.item);
    }
  };

  const item = (
    <div
      class={`${style["subnav-item"]} link`}
      classList={{
        [style.active]: activeKey() === props.item.key && !props.item.children && !props.renderWrapper,
      }}
      onClick={handleClick}
    >
      <Show when={props.item.icon} fallback={<div class="mr1 w6 h6"></div>}>
        <div class="mr1 w6 h6 flex justify-center items-center">
          {props.item.icon}
        </div>
      </Show>
      <span classList={{ "font-bold": !props.isSub }} class="flex-1">
        {props.item.title}
      </span>
      <Show when={!props.isSub && props.item.children}>
        <div
          class="i-fa6-solid:chevron-down ml8 w3 h3"
          classList={{
            [style["arrow-rotate-0"]]: !open(),
            [style["arrow-rotate-180"]]: open(),
          }}
        ></div>
      </Show>
    </div>
  );

  return (
    <>
      <Show
        when={!props.renderWrapper}
        fallback={props.renderWrapper!(item, props.item)}
      >
        {item}
      </Show>
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
        <Show when={props.item.children && open()}>
          <div class={`${style["subnav-panel"]}`}>
            <For each={props.item.children}>
              {(item) => (
                <MenuItem
                  isSub
                  item={{ key: item.key, title: item.title }}
                  onClick={props.onClick}
                  renderWrapper={props.renderWrapper}
                />
              )}
            </For>
          </div>
        </Show>
      </Transition>
    </>
  );
};

export default MenuItem;
