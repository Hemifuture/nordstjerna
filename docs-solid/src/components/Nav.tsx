import { Button, TopNav, NavItem } from "@nordstjerna/ui";
import { A } from "@solidjs/router";
import { Switch, Match } from "solid-js";
import { Theme, app } from "~/models/app";

const Nav = () => {
  const items: NavItem[] = [
    {
      title: "Home",
      path: "/",
      icon: <div class="i-ion:home w4 h4"></div>,
    },
    {
      title: "About",
      path: "/about",
      icon: <div class="i-ion:information-circle w5 h5"></div>,
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const handleThemeChange = () => {
    app.toggleTheme();
  };

  const icon = () => (app.theme === Theme.Dark ? "sunny" : "moon");

  const tail = (
    <>
      <Button
        level="high"
        icon={<div class={`i-ion:${icon()} w6 h6`}></div>}
        onClick={handleThemeChange}
      />
    </>
  );

  return (
    <>
      {/* <TopNav.Pill
        logo="/logo.jpeg"
        items={items}
        itemsWrapper={(title, path, icon) => (
          <A class="link flex gap1 items-center" href={path}>
            {icon}
            {title}
          </A>
        )}
        tail={tail}
      /> */}
      <TopNav.Block
        level="low"
        logo="/logo.jpeg"
        items={items}
        itemsWrapper={(title, path, icon) => (
          <A class="link flex gap1 items-center" href={path}>
            <span>{icon}</span>
            {title}
          </A>
        )}
        tail={tail}
      />
    </>
  );
};

export default Nav;
