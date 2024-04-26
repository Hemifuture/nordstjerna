import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import "./styles/global.scss";

export {
  default as NTopNav,
  type NavItem,
  type TopNavProps,
} from "./libs/TopNav";

export { default as NButton } from "./libs/Button";
export { default as NBackground } from "./libs/Background";
export { default as NToast } from "./libs/Toast";

export { default as NCard } from "./libs/Card";
export { default as NSideNav } from "./libs/SideNav";
export { default as NFooter } from "./libs/Footer";

export { type ColorType } from "./common/types";
