export const skills = [
  {

    title: "System Design & Architecture",
    description: "Designing scalable, resilient services, clear boundaries, and data models; pragmatic trade‑offs documented via ADRs/RFCs.",
  },
  {

    title: "Full‑Stack Development",
    description: "End‑to‑end features with React/Next.js, Node.js, and TypeScript, with strong UX, accessibility, and performance.",
  },
  {

    title: "APIs & Distributed Systems",
    description: "Designing REST/GraphQL APIs, background jobs, queues, idempotency, retries, and observability for reliability.",
  },
  {

    title: "Databases & Caching",
    description: "Schema design, migrations, and performance tuning with Postgres; caching and rate‑limiting with Redis.",
  },
  {

    title: "Testing & CI/CD",
    description: "Unit, integration, and E2E tests (Jest, Playwright) with GitHub Actions pipelines, preview envs, and quality gates.",
  },
  {

    title: "Cloud & DevOps",
    description: "AWS, Docker, and Terraform; secure deployments, monitoring/alerts, and cost‑aware operations.",
  },
];

export type Skill = (typeof skills)[number];

