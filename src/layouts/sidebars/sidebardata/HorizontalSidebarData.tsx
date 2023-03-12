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
  { caption: "Product Scorecard" },
  {
    title: "Product Metrics",
    href: "/dashboards",
    id: 2,
    suffix: "4",
    suffixColor: "bg-primary",
    icon: <Icon.BarChart2 />,
    collapisble: true,
    children: [
      {
        title: "Flow",
        href: "/dashboards/crypto",
        icon: <Icon.Disc />,
        id: 2.2,
        collapisble: false,
      },
      {
        title: "NFRs",
        href: "/dashboards/general",
        icon: <Icon.Disc />,
        id: 2.3,
        collapisble: false,
      },
      {
        title: "Performance",
        href: "/dashboards/classic",
        icon: <Icon.Disc />,
        id: 2.4,
        collapisble: false,
      },
    ],
  },
  {
    title: "Releases",
    href: "/dashboards/general",
    id: 3,
    suffixColor: "bg-primary",
    icon: <Icon.UploadCloud />,
    collapisble: false,
  },
  { caption: "Hall Of Fame" },
  {
    title: "Success Stories",
    href: "/dashboards/general",
    icon: <Icon.Award/>,
    id: 4,
    collapisble: false,
  },
];

export default SidebarData;
