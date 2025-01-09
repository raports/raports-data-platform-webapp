import {
  BiHome,
  BiLineChart,
  BiBarChartSquare,
  BiWindowAlt,
  BiData,
  BiEdit,
  BiCctv,
  BiAbacus,
  BiChat,
  BiCustomize,
  BiBookOpen,
  BiWrench,
} from "react-icons/bi";

export const navigationLinks = [
  {
    title: "",
    links: [
      {
        icon: BiHome,
        route: "/",
        label: "Home",
      },
    ],
  },
  {
    title: "BI",
    links: [
      {
        icon: BiLineChart,
        route: "/main-kpis",
        label: "Main KPIs",
      },
      {
        icon: BiBarChartSquare,
        route: "/bi-dashboards",
        label: "BI Dashboards",
      },
      {
        icon: BiWindowAlt,
        route: "/bi-apps",
        label: "BI Apps",
      },
    ],
  },
  {
    title: "Data",
    links: [
      {
        icon: BiData,
        route: "/data-marts",
        label: "Data Marts",
      },
      {
        icon: BiEdit,
        route: "/provide-data",
        label: "Provide Data",
      },
      {
        icon: BiCctv,
        route: "/data-quality",
        label: "Quality Control",
      },
    ],
  },
  {
    title: "ML",
    links: [
      {
        icon: BiAbacus,
        route: "/forecasting",
        label: "Forecasting",
      },
      {
        icon: BiChat,
        route: "/raports-gpt",
        label: "Raports GPT",
      },
      {
        icon: BiCustomize,
        route: "/ml-apps",
        label: "ML Apps",
      },
    ],
  },
  {
    title: "Misc.",
    links: [
      {
        icon: BiBookOpen,
        route: "/wiki",
        label: "Wiki",
      },
      {
        icon: BiWrench,
        route: "/tools",
        label: "Tools",
      },
    ],
  },
];
