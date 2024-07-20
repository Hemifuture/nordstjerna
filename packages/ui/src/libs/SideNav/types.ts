import { JSXElement } from "solid-js";

interface SideNavListItem {
  key: string;
  title: string;
  icon?: JSXElement;
  children?: SideNavListItem[];
}

interface SideNavListItemSub {
  key: string;
  title: string;
  op?: SubNavListItemSubOp;
}

interface SubNavListItemSubOp {
  icon: JSXElement;
  children: SideNavListItemSub[];
}

type SubNavRenderFunction = (
  ele: JSXElement,
  item: SideNavListItem
) => JSXElement;

export type { SideNavListItem, SideNavListItemSub, SubNavRenderFunction };
