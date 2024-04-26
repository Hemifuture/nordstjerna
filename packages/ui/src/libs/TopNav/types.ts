import { JSXElement } from "solid-js";

interface NavItem {
  title: string;
  path: string;
  icon?: JSXElement;
}

interface TopNavProps {
  level?: "high" | "medium" | "low";
  logo?: string;
  items: NavItem[];
  tail?: JSXElement;
  itemsWrapper?: (
    title: string,
    path: string,
    icon: JSXElement | undefined
  ) => JSXElement;
}

export type { NavItem, TopNavProps };
