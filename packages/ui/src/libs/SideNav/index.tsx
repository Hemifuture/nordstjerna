import { ParentProps } from "solid-js";
import style from "./style.module.scss";

interface SideNavProps extends ParentProps {
  level?: "low" | "medium" | "high";
}

const SideNav = (props: SideNavProps) => {
  return (
    <>
      <aside class={`glass hfull level-${props.level} ${style.sidenav}`}>
        {props.children}
      </aside>
    </>
  );
};

export default SideNav;
