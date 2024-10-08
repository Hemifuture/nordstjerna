import { NButton, NTopNav } from "@nordstjerna/ui";
import { A } from "@solidjs/router";
import { Theme, app } from "~/models/app";
import { Match, Switch } from "solid-js";
import logo from "/logo.jpeg";

const TopNav = () => {
  const items= [
    {
      title: "Home",
      path: import.meta.env.DEV ? "/nordstjerna/" : "/",
      icon: <div class="i-ion:home w4 h4"></div>,
    },
    {
      title: "About",
      path: import.meta.env.DEV ? "/nordstjerna/about" : "/about",
      icon: <div class="i-ion:information-circle w5 h5"></div>,
    },
  ];

  const handleThemeChange = () => {
    app.toggleTheme();
  };

  const icon = () => (app.theme === Theme.Dark ? "sunny" : "moon");

  const tail = (
    <>
      <Switch>
        <Match when={app.theme === Theme.Dark}>
          <NButton
            onClick={handleThemeChange}
            icon={<div class="i-ion:sunny w6 h6"></div>}
          />
        </Match>
        <Match when={app.theme === Theme.Light}>
          <NButton
            onClick={handleThemeChange}
            icon={<div class="i-ion:moon w6 h6"></div>}
          />
        </Match>
      </Switch>
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
      <NTopNav.Block
        level="low"
        logo={logo}
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

export default TopNav;
