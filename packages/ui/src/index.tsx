import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import "./styles/global.scss";
import "@nordstjerna/style";

export {
  default as NTopNav,
  type NavItem,
  type TopNavProps,
} from "./libs/TopNav";

export { default as NButton } from "./libs/Button";
export { default as NBackground } from "./libs/Background";
export { default as NStarfieldBackground } from "./libs/StarfieldBackground";
export {
  Tabs as NSTabs,
  TabsList as NSTabsList,
  TabsTrigger as NSTabsTrigger,
  TabsContent as NSTabsContent,
} from "./libs/Tabs";
export { default as NToast } from "./libs/Toast";
export { default as NTooltip } from "./libs/Tooltip";

export { default as NCard } from "./libs/Card";
export { default as NSideNav } from "./libs/SideNav";
export { default as NFooter } from "./libs/Footer";

// Types
export { type ColorType } from "./common/types";
export type { SideNavListItem } from "./libs/SideNav";
