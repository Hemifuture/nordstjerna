import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import "./styles/global.scss";

// import { default as NButton } from "./libs/Button";
// import { default as NBackground } from "./libs/Background";
// import { default as NToast } from "./libs/Toast";
// import { default as NTopNav, NavItem } from "./libs/TopNav";
// import { default as NCard } from "./libs/Card";

export { default as Button } from "./libs/Button";
export { default as Background } from "./libs/Background";
export { default as Toast } from "./libs/Toast";
export {
  default as TopNav,
  type NavItem,
  type TopNavProps,
} from "./libs/TopNav";
export { default as Card } from "./libs/Card";
export { default as SideNav } from "./libs/SideNav";
export { default as Footer } from "./libs/Footer";

export { type ColorType } from "./common/types";

// export { NButton, NBackground, NToast, NTopNav, NCard };
// export type { NavItem };
