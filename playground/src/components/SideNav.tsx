import { NSideNav, SideNavListItem } from "../../../packages/ui/src";

const SideNav = () => {
  const menu: SideNavListItem[] = [
    {
      title: "Dashboard",
      icon: <div class="i-fa6-solid:house"></div>,
      items: ["Home", "Overview", "Analytics"],
    },
    {
      title: "Projects",
      //   icon: <div class="i-fa6-solid:project-diagram"></div>,
      items: ["Active", "Archived", "All"],
    },
    {
      title: "Team",
      icon: <div class="i-fa6-solid:users"></div>,
      items: ["Members", "Roles", "Groups"],
    },
    {
      title: "Settings",
      //   icon: <div class="i-fa6-solid:cog"></div>,
    //   items: ["Profile", "Preferences", "Notifications"],
    },
  ];

  const handleClick = (item: SideNavListItem) => {
    console.log(item);
  };

  return (
    <>
      <NSideNav items={menu} onClick={handleClick} />
    </>
  );
};

export default SideNav;
