import { JSXElement } from "solid-js";

interface SideNavListItem {
  title: string;
  icon?: JSXElement;
  items?: string[];
}

export type { SideNavListItem };
