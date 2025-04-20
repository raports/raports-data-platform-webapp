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
    description:
      "Centralized metadata platform to catalog, govern, and manage Raports data ecosystem. Enables data discovery, lineage tracking, and quality monitoring. Deployed on my private Kubernetes cluster.",
    url: "https://openmetadata.raports.net",
    image: "/images/tools/openmetadata.png",
    visitButtonText: "Go to Open Metadata",
    tags: ["Data Governance"],
  },
  {
    id: 2,
    title: "Power BI",
    description:
      "Microsoft's analytics platform for visualizing data and sharing insights across teams. Offers rich dashboards and seamless integration with Microsoft 365 tools. I am using Microsoft's Power BI pro subscription",
    url: "https://app.powerbi.com/groups/d49841a8-89ba-493c-aa12-6ee0d90533aa/list?experience=power-bi",
    image: "/images/tools/powerbi.png",
    visitButtonText: "Go to Power BI",
    tags: ["BI"],
  },
  {
    id: 3,
    title: "Superset",
    description:
      "Open-source data exploration and visualization platform. Ideal for creating interactive dashboards and running SQL queries against various data sources. I'm using Preset.io's Superset cloud service.",
    url: "https://4100ea0a.us1a.app.preset.io/superset/welcome/?pageIndex=0&sortColumn=changed_on_delta_humanized&sortOrder=desc",
    image: "/images/tools/superset.png",
    visitButtonText: "Go to Preset",
    tags: ["BI"],
  },
  {
    id: 4,
    title: "Airflow",
    description:
      "Workflow orchestration tool that enables the creation, scheduling, and monitoring of data pipelines. Built around Python for flexible pipeline logic. Deployed on my private Kubernetes cluster.",
    url: "https://airflow.raports.net",
    image: "/images/tools/airflow.png",
    visitButtonText: "Go to Airflow",
    tags: ["ETL"],
  },
  {
    id: 5,
    title: "Airbyte",
    description:
      "Open-source data integration platform that supports syncing data from APIs and databases into warehouses. Extensible and well-suited for Extract and Load workflows. Deployed on my private Kubernetes cluster.",
    url: "https://airbyte.raports.net",
    image: "/images/tools/airbyte.png",
    visitButtonText: "Go to Airbyte",
    tags: ["ETL"],
  },
  {
    id: 6,
    title: "Nifi",
    description:
      "Dataflow automation tool for routing, transforming, and managing data flows. Offers a visual interface for building complex streaming and batch pipelines. Deployed on my private Kubernetes cluster.",
    url: "https://nifi.raports.net/nifi",
    image: "/images/tools/nifi.png",
    visitButtonText: "Go to NiFi",
    tags: ["ETL"],
  },
  {
    id: 7,
    title: "Kafka",
    description:
      "Distributed event streaming platform used for real-time data pipelines and stream processing. Supports high-throughput, fault-tolerant messaging between services. Deployed on my private Kubernetes cluster. Access using Conduktor.",
    url: "https://conduktor.raports.net",
    image: "/images/tools/kafka.png",
    visitButtonText: "Go to Conduktor",
    tags: ["Messaging"],
  },
  {
    id: 8,
    title: "Spark",
    description:
      "Unified analytics engine for big data processing, with built-in modules for SQL, streaming, machine learning, and graph processing. Deployed on my private Kubernetes cluster",
    url: "https://spark.raports.net",
    image: "/images/tools/spark.png",
    visitButtonText: "Go to Spark",
    tags: ["ETL"],
  },
  {
    id: 9,
    title: "MinIO",
    description:
      "High-performance object storage solution compatible with Amazon S3. Ideal for storing unstructured data like files, backups, and logs. Deployed on my private Kubernetes cluster.",
    url: "https://minio.raports.net",
    image: "/images/tools/minio.png",
    visitButtonText: "Go to Minio",
    tags: ["Storage", "S3"],
  },
  {
    id: 10,
    title: "Elasticsearch",
    description:
      "Distributed search and analytics engine designed for horizontal scalability, reliability, and real-time search capabilities. Ideal for log and event data analysis. Deployed on my private Kubernetes cluster.",
    url: "https://kibana.raports.net",
    image: "/images/tools/elasticsearch.png",
    visitButtonText: "Go to Kibana",
    tags: ["Search", "Analytics"],
  },
  {
    id: 11,
    title: "PostgreSQL",
    description:
      "Advanced open-source relational database with robust SQL support. Suitable for transactional and analytical workloads with strong community backing. Deployed on my private Kubernetes cluster. Access using pgAdmin.",
    url: "https://pgadmin.raports.net",
    image: "/images/tools/postgres.png",
    visitButtonText: "Go to pgAdmin",
    tags: ["Database", "SQL"],
  },
  {
    id: 12,
    title: "Clickhouse",
    description:
      "Column-oriented database management system optimized for OLAP workloads. Offers lightning-fast query performance on large-scale datasets. Deployed on my private Kubernetes cluster. Access using clickhouse's playground.",
    url: "https://clickhouse.raports.net/play",
    image: "/images/tools/clickhouse.png",
    visitButtonText: "Go to Clickhouse",
    tags: ["Database", "SQL"],
  },
  {
    id: 13,
    title: "NocoDB",
    description:
      "Turns any SQL database into a smart spreadsheet-like interface. Helps teams collaborate on data without needing to write queries. Deployed on my private Kubernetes cluster.",
    url: "https://nocodb.raports.net",
    image: "/images/tools/nocodb.png",
    visitButtonText: "Go to NocoDB",
    tags: ["Editor"],
  },
];
