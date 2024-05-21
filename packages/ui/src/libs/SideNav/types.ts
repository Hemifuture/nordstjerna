import { JSXElement } from "solid-js";

interface SideNavListItem {
  key: string;
  title: string;
  icon?: JSXElement;
  children?: SideNavListItem[];
}

type SubNavRenderFunction = (
  ele: JSXElement,
  item: SideNavListItem
) => JSXElement;

export type { SideNavListItem, SubNavRenderFunction };
