import { A } from "@solidjs/router";
import { NSideNav, SideNavListItem } from "@nordstjerna/ui";

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
          // const routerMap = [
          //   { key: "Introduction", path: "/" },
          //   { key: "Style", path: "/style" },
          //   {
          //     key: "Components", children: [
          //       { key: "Button", path: "/button" },
          //       { key: "Toast", path: "/toast" },
          //       { key: "Tooltip", path: "/tooltip" },
          //       { key: "Tabs", path: "/tabs" },
          //       { key: "Link", path: "/link" },
          //     ]
          //   },
          // ]
          const routeMap: { [key: string]: string } = {
            Introduction: "/",
            Style: "/style",
            Button: "/components/button",
            Toast: "/components/toast",
            Tooltip: "/components/tooltip",
            Tabs: "/components/tabs",
            Link: "/components/link",
          };
          const route = routeMap[item.key] || '/';
          const baseRoute = `/nordstjerna`;

          if (item.children) {
            return ele;
          } else {
            return <A href={baseRoute + route}>{ele}</A>;
          }
        }}
      />
    </>
  );
};

export default SideNav;
