# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint the codebase
npm run lint
```

## Project Architecture

This is a **Next.js 15 (App Router)** data platform webapp for managing and visualizing data tools and services. The application uses modern React patterns with TypeScript and server-side rendering.

### Key Technologies
- **Next.js 15** with App Router and React 19
- **NextAuth.js v5** with Keycloak authentication
- **Tailwind CSS v4** for styling with custom design tokens
- **Shadcn/ui** components with Radix UI primitives
- **React Hook Form** with Zod validation
- **Lucide React** and **React Icons** for iconography

### Application Structure

The app is organized around a **data platform dashboard** that provides access to various data tools and services:

#### Navigation Structure (`constants/index.tsx`)
- **BI Section**: Main KPIs, BI Dashboards, BI Apps
- **Data Section**: Data Marts, Provide Data, Quality Control
- **ML Section**: Forecasting, Raports GPT, ML Apps
- **Misc Section**: Wiki, Tools

#### Core Components
- **ToolCard** (`components/cards/ToolCard.tsx`): Displays data platform tools
- **Navigation**: Left sidebar and responsive mobile navigation
- **Theme**: Dark/light mode with system preference support
- **GlobalSearch**: Search functionality across the platform

### Data Platform Tools Integration

The application serves as a centralized hub for accessing 13+ data platform tools including:
- **Analytics**: Power BI, Superset, Open Metadata
- **ETL/Pipeline**: Airflow, Airbyte, NiFi, Spark
- **Storage**: MinIO (S3-compatible), PostgreSQL, ClickHouse
- **Messaging**: Kafka (via Conduktor)
- **Search**: Elasticsearch (via Kibana)
- **Collaboration**: NocoDB

All tools are deployed on a private Kubernetes cluster with URLs defined in `constants/index.tsx`.

### Authentication & Routing

- **NextAuth.js v5** with Keycloak provider (`auth.ts`)
- **Middleware** (`middleware.ts`) protects all routes via NextAuth
- **Route structure** follows Next.js 15 App Router conventions with grouped routes:
  - `(root)/(bi)/*` - Business Intelligence pages
  - `(root)/(data)/*` - Data management pages  
  - `(root)/(ml)/*` - Machine Learning pages
  - `(root)/(home)/*` - Homepage

### Styling & Theming

- **Tailwind CSS v4** with custom configuration
- **Custom fonts**: OpenSans (primary), SpaceGrotesk (accent)
- **Theme system**: Context-based with next-themes integration
- **Component library**: Shadcn/ui components in `components/ui/`

### Type Safety & Validation

- **TypeScript** with strict mode enabled
- **Zod schemas** for form validation (`lib/validations.ts`)
- **Path mapping**: `@/*` alias for clean imports