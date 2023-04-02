import * as Icon from "react-feather";

const SidebarData = [
  { caption: "Home" },
  {
    title: "Home",
    href: "/",
    id: 1,
    suffixColor: "bg-info",
    icon: <Icon.Home />,
    collapisble: false,
  },
  { caption: "Projects Cards" },
  {
    title: "Projects Cards",
    href: "/Projects/",
    id: 1,
    suffixColor: "bg-info",
    icon: <Icon.Search />,
    collapisble: false,
  },
];

export default SidebarData;
