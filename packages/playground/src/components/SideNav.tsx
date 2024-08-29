import { A } from "@solidjs/router";
import { NSideNav, SideNavListItem } from "@nordstjerna/ui";
// import { base } from "vite.config";

const SideNav = () => {
  const menu: SideNavListItem[] = [
    {
      key: "Introduction",
      title: "Introduction",
      icon: <div class="i-ion:book"></div>,
    },
    {
      key: "Style",
      title: "Style",
      icon: <div class="i-ion:book"></div>,
    },
    {
      key: "Components",
      title: "Components",
      icon: <div class="i-fa6-solid:clone"></div>,
      children: [
        {
          key: "Button",
          title: "Button",
        },
        {
          key: "Toast",
          title: "Toast",
        },
        {
          key: "Tooltip",
          title: "Tooltip",
        },
        {
          key: "Tabs",
          title: "Tabs",
        },
      ],
    },
    {
      key: "Team",
      title: "Team",
      icon: <div class="i-fa6-solid:users"></div>,
      children: [
        { key: "Roles", title: "Roles" },
        {
          key: "Members",
          title: "Members",
          icon: <div class="i-fa6-solid:users"></div>,
          children: [
            {
              key: "Invite Members",
              title: "Invite Members",
            },
            {
              key: "All Members",
              title: "All Members",
            },
          ],
        },
      ],
    },
  ];

  const handleClick = (item: SideNavListItem) => {
    console.log(item);
  };

  return (
    <>
      <NSideNav
        items={menu}
        onClick={handleClick}
        renderWrapper={(ele, item) => {
          const routeMap: { [key: string]: string } = {
            Introduction: "/",
            Style: "/style",
            Button: "/",
            Toast: "/about",
            Tooltip: "/tooltip",
            Tabs: "/tabs",
          };

          const baseRoute = routeMap[item.key] || '/';
          const route = import.meta.env.DEV ? `/nordstjerna${baseRoute}` : baseRoute;
          
          if (item.children) {
            return ele;
          } else {
            return <A href={route}>{ele}</A>;
          }
        }}
      />
    </>
  );
};

export default SideNav;
