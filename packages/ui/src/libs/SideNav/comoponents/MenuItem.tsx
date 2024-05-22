import { For, Show, createSignal, mergeProps } from "solid-js";
import { SideNavListItem, SubNavRenderFunction } from "../types";
import { Transition } from "solid-transition-group";
import style from "../style.module.scss";
import { currentActiveKey } from "../data";

interface MenuItemProps {
  item: SideNavListItem;
  level?: number;
  // isSub?: boolean;
  onClick?: (item: SideNavListItem) => void;
  renderWrapper?: SubNavRenderFunction;
}

const MenuItem = (props: MenuItemProps) => {
  const defaultProps = {
    level: 0,
  };
  const merged = mergeProps(defaultProps, props);

  const indentUnit = 0.25;
  const indent = merged.level * indentUnit;
  const indentClass = `pl-[${indent}rem]`;

  const [activeKey, setActiveKey] = currentActiveKey;

  console.log(activeKey());
  const [open, setOpen] = createSignal(false);

  const handleClick = () => {
    console.log(merged.item);
    if (merged.item.children) {
      setOpen(!open());
    } else {
      setActiveKey(merged.item.key);
      merged.onClick?.(merged.item);
    }
  };

  const iconPlaceholderCount = merged.item.icon
    ? Math.max(merged.level - 1, 0)
    : merged.level;

  const item = (
    <div
      class={`${style["subnav-item"]} link`}
      classList={{
        [style.active]:
          activeKey() === merged.item.key &&
          !merged.item.children &&
          !merged.renderWrapper,
      }}
      onClick={handleClick}
    >
      <For each={Array.from(Array(iconPlaceholderCount).keys())}>
        {(_, _idx) => <div class="mr1 w6 h6"></div>}
      </For>
      <Show when={merged.item.icon}>
        <div class="mr1 w6 h6 flex justify-center items-center">
          {merged.item.icon}
        </div>
      </Show>
      <span classList={{ "font-bold": merged.level === 0 }} class="flex-1">
        {merged.item.title}
      </span>
      <Show when={merged.item.children && merged.item.children}>
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
        when={!merged.renderWrapper}
        fallback={merged.renderWrapper!(item, merged.item)}
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
        <Show when={merged.item.children && open()}>
          <div class={`${style["subnav-panel"]} ${indentClass}`}>
            <For each={merged.item.children}>
              {(item) => (
                <MenuItem
                  level={merged.level + 1}
                  // isSub={merged.item.children !== undefined}
                  item={item}
                  onClick={merged.onClick}
                  renderWrapper={merged.renderWrapper}
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
