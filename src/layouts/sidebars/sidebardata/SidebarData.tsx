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
  { caption: "Projects Requirements" },
  {
    title: "Projects Requirements",
    href: "/dashboards/general",
    id: 2,
    suffixColor: "bg-primary",
    icon: <Icon.Clipboard />,
    collapisble: true,
  },
  {
    title: "Place an Offer",
    href: "/dashboards/general",
    id: 3,
    suffixColor: "bg-primary",
    icon: <Icon.MessageCircle />,
    collapisble: false,
  },
  { caption: "Hall Of Fame" },
  {
    title: "Hall Of Fame",
    href: "/dashboards/general",
    icon: <Icon.Award/>,
    id: 4,
    collapisble: false,
  },
];

export default SidebarData;
