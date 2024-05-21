import { For } from "solid-js";
import style from "./style.module.scss";
import { SideNavListItem } from "./types";
import MenuItem from "./comoponents/MenuItem";
import { CommonProps } from "../../common/types";

interface SideNavProps extends CommonProps {
  level?: "low" | "medium" | "high";
  items: SideNavListItem[];
  onClick?: (item: SideNavListItem) => void;
  render?: () => void;
}

const SideNav = (props: SideNavProps) => {
  return (
    <>
      <aside
        id={props.id}
        class={`glass level-${props.level} ${style.sidenav} ${props.class}`}
      >
        <For each={props.items}>{(item) => <MenuItem item={item} onClick={props.onClick} />}</For>
      </aside>
    </>
  );
};

export default SideNav;
export type { SideNavListItem };
