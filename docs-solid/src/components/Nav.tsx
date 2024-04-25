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

  const tail = (
    <>
      <Switch>
        <Match when={app.theme === Theme.Dark}>
          <Button
            class="level-high"
            icon={<div class="i-ion:sunny w6 h6"></div>}
            onClick={handleThemeChange}
          />
        </Match>
        <Match when={app.theme === Theme.Light}>
          <Button
            class="level-high"
            icon={<div class="i-ion:moon w6 h6"></div>}
            onClick={handleThemeChange}
          />
        </Match>
      </Switch>
    </>
  );

  return (
    <>
      <TopNav
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
