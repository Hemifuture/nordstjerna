import { Button, TopNav, NavItem } from "@nordstjerna/ui";
import { A } from "@solidjs/router";
import { Switch, Match } from "solid-js";
import { Theme, app } from "~/models/app";

const Nav = () => {
  const items: NavItem[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
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
      <TopNav
        logo="/logo.jpeg"
        items={items}
        itemsWrapper={(title, path) => (
          <A class="link" href={path}>
            {title}
          </A>
        )}
        tail={tail}
      />
    </>
  );
};

export default Nav;
