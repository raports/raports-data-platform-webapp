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

export const tools = [
  {
    id: 1,
    title: "Open Metadata",
    description: "",
    url: "https://openmetadata.raports.net",
    image: "/images/tools/openmetadata.png",
  },
  {
    id: 2,
    title: "Power BI",
    description: "",
    url: "https://app.powerbi.com/groups/d49841a8-89ba-493c-aa12-6ee0d90533aa/list?experience=power-bi",
    image: "/images/tools/powerbi.png",
  },
  {
    id: 3,
    title: "Superset",
    description: "",
    url: "https://4100ea0a.us1a.app.preset.io/superset/welcome/?pageIndex=0&sortColumn=changed_on_delta_humanized&sortOrder=desc",
    image: "/images/tools/superset.png",
  },
  {
    id: 4,
    title: "Airflow",
    description: "",
    url: "https://airflow.raports.net",
    image: "/images/tools/airflow.png",
  },
  {
    id: 5,
    title: "Airbyte",
    description: "",
    url: "https://airbyte.raports.net",
    image: "/images/tools/airbyte.png",
  },
  {
    id: 6,
    title: "Nifi",
    description: "",
    url: "https://nifi.raports.net/nifi",
    image: "/images/tools/nifi.png",
  },
  {
    id: 7,
    title: "Kafka",
    description: "",
    url: "https://conduktor.raports.net",
    image: "/images/tools/kafka.png",
  },
  {
    id: 8,
    title: "MinIO",
    description: "",
    url: "https://minio.raports.net",
    image: "/images/tools/minio.png",
  },
  {
    id: 9,
    title: "PostgreSQL",
    description: "",
    url: "https://bytebase.raports.net",
    image: "/images/tools/postgres.png",
  },
  {
    id: 10,
    title: "Clickhouse",
    description: "",
    url: "https://bytebase.raports.net",
    image: "/images/tools/clickhouse.png",
  },
  {
    id: 11,
    title: "NocoDB",
    description: "",
    url: "https://nocodb.raports.net",
    image: "/images/tools/nocodb.png",
  },
];
