// ─── Portfolio Data ────────────────────────────────────────
// Adalberto Silveira Napoles — Senior Software Engineer

export const PERSONAL = {
  name: "Adalberto Silveira Napoles",
  title: "Senior Software Engineer",
  roles: [
    "Java & Spring Boot Architect",
    "Reactive Programming · Spring WebFlux",
    "Cloud-Native Systems Engineer",
    "AI Systems Builder",
    "Event-Driven Microservices Expert",
    "Full-Stack Engineer",
  ],
  tagline:
    "18+ years building enterprise-grade cloud-native systems. Specializing in Java, Spring Boot, AWS, and AI-powered automation.",
  summary:
    "Senior Software Engineer with 18+ years of experience designing and delivering enterprise-grade, cloud-native applications across the full SDLC. Specialized in Java (8–25), Spring Boot, Spring WebFlux, and event-driven microservices on AWS — handling 50,000+ daily transactions at 99.9% uptime in production financial and identity-validation platforms. Active AI practitioner: built an autonomous job-application agent using Python and the Claude/Anthropic API, and an AWS infrastructure monitor powered by Amazon Bedrock with anomaly detection and natural-language incident summaries.",
  email: "adalbertosn1982@gmail.com",
  phone: "+1 (812) 901-8687",
  location: "Hialeah, FL 33015",
  linkedin: "https://linkedin.com/in/adalbertosilveiranapoles",
  github: "https://github.com/silveiraSoft",
  blog: "http://adalbertosilveira.blogspot.com",
  avatar: "https://avatars.githubusercontent.com/u/23501762?v=4",
  available: true,
};

export const STATS = [
  { value: "18+", label: "Years Experience", suffix: "" },
  { value: "50K", label: "Daily Transactions", suffix: "+" },
  { value: "99.9", label: "Uptime SLA", suffix: "%" },
  { value: "5", label: "Languages", suffix: "" },
];

export const SKILLS = [
  {
    category: "Backend",
    icon: "Server",
    color: "primary",
    items: [
      { name: "Java 8/11/17/21/25", level: 95 },
      { name: "Spring Boot", level: 95 },
      { name: "Spring WebFlux / Project Reactor", level: 90 },
      { name: "Spring Security", level: 88 },
      { name: "Spring Cloud", level: 85 },
      { name: "Spring Data JPA / Hibernate", level: 90 },
      { name: "Microservices Architecture", level: 92 },
      { name: "Event-Driven Architecture", level: 90 },
      { name: "REST APIs / gRPC", level: 92 },
    ],
  },
  {
    category: "Cloud & AWS",
    icon: "Cloud",
    color: "cyan",
    items: [
      { name: "AWS Lambda", level: 88 },
      { name: "SNS / SQS", level: 90 },
      { name: "S3 / API Gateway", level: 88 },
      { name: "Amazon RDS / DynamoDB", level: 85 },
      { name: "Amazon Cognito", level: 85 },
      { name: "CloudWatch", level: 85 },
      { name: "Amazon Bedrock", level: 80 },
      { name: "AWS CDK", level: 75 },
      { name: "CloudFront", level: 82 },
    ],
  },
  {
    category: "AI Engineering",
    icon: "Brain",
    color: "violet",
    items: [
      { name: "Claude API (Anthropic)", level: 85 },
      { name: "Amazon Bedrock Agents", level: 82 },
      { name: "Python AI Orchestration", level: 80 },
      { name: "Multi-Agent Systems", level: 78 },
      { name: "Claude Code", level: 85 },
      { name: "Amazon Q", level: 82 },
      { name: "GitHub Copilot", level: 85 },
    ],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    color: "emerald",
    items: [
      { name: "TypeScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 80 },
      { name: "Node.js 22", level: 82 },
      { name: "Angular", level: 70 },
      { name: "HTML5 / CSS3", level: 88 },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "primary",
    items: [
      { name: "PostgreSQL", level: 92 },
      { name: "MySQL", level: 90 },
      { name: "DynamoDB", level: 82 },
      { name: "Redis", level: 85 },
      { name: "SQL Server", level: 88 },
      { name: "Oracle", level: 75 },
    ],
  },
  {
    category: "DevOps & Quality",
    icon: "Layers",
    color: "cyan",
    items: [
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 80 },
      { name: "Jenkins CI/CD", level: 85 },
      { name: "SonarQube", level: 85 },
      { name: "JUnit 5 / Mockito", level: 90 },
      { name: "Git", level: 92 },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    name: "AWS Partner Business Accreditation",
    issuer: "Amazon Web Services",
    status: "active",
    icon: "aws",
    color: "#FF9900",
    year: "2023",
  },
  {
    name: "AWS Partner Technical Accreditation",
    issuer: "Amazon Web Services",
    status: "active",
    icon: "aws",
    color: "#FF9900",
    year: "2023",
  },
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    status: "in-progress",
    icon: "aws",
    color: "#FF9900",
    year: "2026",
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    status: "in-progress",
    icon: "aws",
    color: "#FF9900",
    year: "2026",
  },
];

export const EXPERIENCE = [
  {
    company: "3HTP Cloud Services",
    website: "https://www.3htp.com/",
    role: "Senior Java Full-Stack Software Engineer",
    location: "Miami, FL (Remote)",
    period: "December 2021 – Present",
    duration: "4+ years",
    type: "full-time",
    current: true,
    color: "#6366F1",
    description:
      "Architecting cloud-native financial and identity-validation platforms handling 50,000+ daily transactions across 5 distributed microservices with 99.9% uptime on AWS.",
    highlights: [
      "Architected voice-biometric authentication for banking transactions integrating Spring Security and Amazon Cognito into the Talos identity platform — zero security incidents since launch",
      "Built event-driven microservices on AWS (SNS/SQS, Lambda, DynamoDB, S3) with Redis caching, reducing async event processing latency by 35% and achieving sub-200ms response times",
      "Designed distributed Complaints Management System with 3 Spring WebFlux microservices, reducing complaint resolution time by 40%",
      "Full-stack architect on Protección digital savings platform (Next.js + TypeScript + Spring WebFlux) serving 200,000+ end users",
      "Cut deployment cycle from 45 to 12 minutes via Docker + Kubernetes + Jenkins CI/CD pipelines with SonarQube quality gates",
      "Secured 500,000+ encrypted records using AES/RSA, OAuth 2.0, and JWT",
      "Accelerated development 30%+ using Amazon Q, GitHub Copilot, and Claude Code",
    ],
    tech: ["Java 21", "Spring Boot", "Spring WebFlux", "AWS", "SNS/SQS", "React", "Next.js", "Docker", "Kubernetes"],
  },
  {
    company: "Cooper Tec",
    website: "https://www.instagram.com/cooper_tec/",
    role: "Senior Software Engineer",
    location: "Brazil (Hybrid)",
    period: "May 2021 – November 2021",
    duration: "7 months",
    type: "full-time",
    current: false,
    color: "#8B5CF6",
    description:
      "Developed and maintained online card-management systems for a leading Brazilian credit operator serving 50,000+ cardholders.",
    highlights: [
      "Designed AES/RSA encryption securing front-end/back-end interactions, reducing unauthorized access attempts by 90% and achieving full PCI-DSS compliance",
      "Built dynamic web applications with JavaScript, HTML5, CSS3, Bootstrap, and Materialize",
      "Managed card-management systems (credit, gift, customer accounts) across PostgreSQL, MySQL, SQL Server, and Oracle",
    ],
    tech: ["PHP 8", "PostgreSQL", "MySQL", "Docker", "JavaScript", "AES/RSA"],
  },
  {
    company: "UniCesumar",
    website: "https://www.unicesumar.edu.br/english",
    role: "Senior Software Developer",
    location: "Brazil (Hybrid)",
    period: "December 2016 – April 2021",
    duration: "4+ years",
    type: "full-time",
    current: false,
    color: "#22D3EE",
    description:
      "Developed and maintained large-scale academic, financial, and administrative systems for one of Brazil's largest private universities — 80,000+ students and 2,000+ faculty.",
    highlights: [
      "Built two-step authentication with Google Authenticator, reducing unauthorized account access by 95%",
      "Automated multiple workflows cutting manual processing by 60%",
      "Introduced SonarQube quality gates that reduced production defect rate by 45%",
      "Developed REST and SOAP APIs with SLIM and Laravel for student portal systems",
    ],
    tech: ["Java", "Spring Boot", "PHP", "JavaScript", "MySQL", "Docker", "Jenkins"],
  },
  {
    company: "Universidades de Angola",
    website: "https://ucan.edu.ao/",
    role: "University Professor (Part-Time)",
    location: "Angola (Onsite)",
    period: "2010 – 2016",
    duration: "6 years",
    type: "part-time",
    current: false,
    color: "#10B981",
    description:
      "Taught Data Structures & Algorithms, C++, Database I & II, Systems Architecture, and Data Warehousing to 500+ students/year across three universities.",
    highlights: [
      "Universidade Metodista de Angola, Universidade Católica de Angola, Universidade Lusíada",
      "Courses: Data Structures, C++, Database I & II, Systems Architecture I & II, Data Warehousing",
      "500+ students per year",
    ],
    tech: ["C++", "MySQL", "Database Design", "Computer Architecture"],
  },
  {
    company: "ETECSA",
    website: "https://www.etecsa.cu/",
    role: "Specialist B in Computer Science",
    location: "Cuba (Onsite)",
    period: "September 2006 – 2010",
    duration: "4 years",
    type: "full-time",
    current: false,
    color: "#F59E0B",
    description:
      "Full-stack development on internal systems including CMS and SAGEC — a web system for managing academic training deployed organization-wide.",
    highlights: [
      "Built internal and external websites, custom CMS, and SAGEC academic training system",
      "Systems administration on Linux and Windows environments",
      "Delivered internal developer training courses",
    ],
    tech: ["PHP", "JavaScript", "MySQL", "PostgreSQL", "Linux"],
  },
];

export const FEATURED_PROJECTS = [
  {
    id: "aws-monitor",
    title: "AWS Monitor Agent",
    subtitle: "AI-Powered Infrastructure Intelligence",
    featured: true,
    badge: "⭐ Featured",
    description:
      "Chat-based AWS health monitoring powered by Amazon Bedrock Agents and Claude 3.5 Haiku. Non-technical users interact in natural language to get intelligent analysis of EC2, Lambda, and CloudWatch health — with anomaly detection and auto-generated incident summaries.",
    longDescription: `Built to solve a real problem: AWS is powerful but complex. Non-technical stakeholders need to understand infrastructure health without diving into the console. This system lets anyone ask "Are all my services healthy?" and get an intelligent, human-readable answer.

Amazon Bedrock Agents orchestrate the reasoning — they parse natural language questions, call action-group Lambdas that query EC2, Lambda, and CloudWatch metrics, and return contextual summaries. The frontend is deployed on CloudFront/S3, serverless from top to bottom.`,
    github: "https://github.com/silveiraSoft/aws-monitor",
    demo: null,
    status: "live",
    year: "2025",
    stack: [
      "Python",
      "Amazon Bedrock",
      "Claude 3.5 Haiku",
      "AWS Lambda",
      "API Gateway",
      "CloudFront",
      "S3",
      "CloudWatch",
      "AWS CDK",
      "TypeScript",
    ],
    metrics: [
      { label: "Test Coverage", value: "121 tests" },
      { label: "Cost at Rest", value: "< $0.02/mo" },
      { label: "Architecture", value: "Serverless" },
      { label: "AI Model", value: "Claude 3.5 Haiku" },
    ],
    architecture: {
      diagram: "aws-monitor",
      layers: [
        "Browser → CloudFront/S3 (TypeScript frontend)",
        "API Gateway POST /chat + API Key auth",
        "Lambda: aws-monitor-chat-proxy",
        "Amazon Bedrock Agent (Claude 3.5 Haiku)",
        "Action Group Lambda: EC2, Lambda, CloudWatch queries",
      ],
    },
    highlights: [
      "4 action groups: get_overall_health, get_ec2_health, get_lambda_health, get_cloudwatch_alarms",
      "Multi-region support — optional `region` param on all actions (all 30+ AWS regions)",
      "CloudWatch Logs Insights queries + X-Ray trace analysis built into action Lambda",
      "2 CDK stacks: AwsMonitorAgentStack + AwsMonitorFrontendStack — re-deployable in minutes",
      "121 tests (unit + integration + e2e) — zero pip dependencies, Python stdlib only",
      "Serverless — < $0.02/month at rest; cleanup scripts for cost-free dev teardown",
    ],
    color: "from-indigo-600 to-violet-600",
    icon: "☁️",
  },
  {
    id: "job-agent",
    title: "JobHunter AI Agent",
    subtitle: "Autonomous LinkedIn Job Application Pipeline",
    featured: true,
    badge: "⭐ Featured",
    description:
      "Fully autonomous job application agent built on Claude AI that searches multiple job boards, generates ATS-optimized personalized resumes with Claude Haiku, applies via LinkedIn Easy Apply automation, and sends weekly HTML email digests — zero human intervention after setup.",
    longDescription: `This project explores how far Claude can act as a truly autonomous agent for a complex, multi-step real-world workflow. The answer: very far.

Every Wednesday at 10am, the agent wakes up, searches Indeed/Dice/ZipRecruiter via MCP connectors, de-duplicates across sources, personalizes each resume using Claude Haiku to mirror the job description's exact language, applies autonomously via LinkedIn Easy Apply through Claude in Chrome, and sends a full HTML digest with Match% scores.`,
    github: "https://github.com/silveiraSoft/agent-linkedin-candidate",
    demo: null,
    status: "live",
    year: "2025",
    stack: [
      "Python 3.10+",
      "Claude API (Anthropic)",
      "Claude Haiku",
      "Claude in Chrome",
      "Cowork Scheduled Tasks",
      "MCP Connectors",
      "Gmail MCP",
      "python-docx",
    ],
    metrics: [
      { label: "Weekly Applications", value: "50+" },
      { label: "AI Model", value: "Claude Haiku" },
      { label: "Phases", value: "5-phase pipeline" },
      { label: "Automation", value: "100%" },
    ],
    architecture: {
      diagram: "job-agent",
      layers: [
        "Phase 0: MCP health check + LinkedIn session verify",
        "Phase 1: Multi-board search (Indeed, Dice, ZipRecruiter)",
        "Phase 2: Claude Haiku resume personalization + Match%",
        "Phase 3: LinkedIn Easy Apply via Claude in Chrome",
        "Phase 4: Gmail HTML digest via MCP",
        "Phase 5: Live Cowork artifact dashboard",
      ],
    },
    highlights: [
      "Multi-board job search with cross-MCP deduplication",
      "Claude Haiku generates tailored resume per job description",
      "Match% scoring before applying",
      "LinkedIn Easy Apply automation via Claude in Chrome",
      "Weekly HTML email digest with applied/pending status",
      "Live Chart.js dashboard via Cowork artifact",
    ],
    color: "from-violet-600 to-cyan-500",
    icon: "🤖",
  },
  {
    id: "springboot-dockerized",
    title: "Spring Boot Dockerized Project",
    subtitle: "Containerized Spring Boot Reference Architecture",
    featured: false,
    badge: "Open Source",
    description:
      "Production-ready Spring Boot microservice template with Docker containerization, demonstrating Clean Architecture, REST API best practices, and CI/CD readiness.",
    github: "https://github.com/silveiraSoft/springboot-dockerized-project",
    demo: null,
    status: "live",
    year: "2024",
    stack: ["Java 21", "Spring Boot", "Docker", "PostgreSQL", "JUnit 5"],
    metrics: [],
    highlights: [
      "Clean Architecture layers",
      "Docker multi-stage build",
      "Environment-based config",
      "Health checks and readiness probes",
    ],
    color: "from-indigo-500 to-blue-500",
    icon: "🐳",
  },
  {
    id: "webclient-upload",
    title: "Spring Boot WebClient File Upload",
    subtitle: "Reactive File Upload with Spring WebFlux",
    featured: false,
    badge: "Open Source",
    description:
      "Demonstrates reactive document upload using WebClient and Spring WebFlux — the same pattern used in the production Document Management System.",
    github: "https://github.com/silveiraSoft/springBoot-uploadFile-WebClient",
    demo: null,
    status: "live",
    year: "2024",
    stack: ["Java 21", "Spring WebFlux", "Project Reactor", "WebClient"],
    metrics: [],
    highlights: [
      "Non-blocking reactive uploads",
      "WebClient multipart form data",
      "Backpressure-aware streaming",
      "S3-compatible storage integration",
    ],
    color: "from-cyan-500 to-teal-500",
    icon: "📁",
  },
  {
    id: "job-application-system",
    title: "Application Management System",
    subtitle: "Full CRUD API with Advanced Spring Boot Patterns",
    featured: false,
    badge: "Open Source",
    description:
      "Spring Boot CRUD API for a job application system with relational mappings, MapStruct DTO mapping, and exception handling — showcasing production-grade API design.",
    github: "https://github.com/silveiraSoft/application-management-system",
    demo: null,
    status: "live",
    year: "2024",
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "MapStruct", "JUnit 5", "Mockito"],
    metrics: [],
    highlights: [
      "MapStruct for DTO mapping",
      "Global exception handling",
      "Relational entity mappings",
      "Full test coverage with Mockito",
    ],
    color: "from-violet-500 to-purple-600",
    icon: "📋",
  },
  {
    id: "springboot4-versioning",
    title: "Spring Boot 4 API Versioning Demo",
    subtitle: "All URI Versioning Strategies in One Project",
    featured: false,
    badge: "Open Source",
    description:
      "Demonstrates every API versioning approach in Spring Boot 4 — URI path, request parameter, header, and content negotiation — with working examples for each.",
    github: "https://github.com/silveiraSoft/springboot4-versioning-demo",
    demo: null,
    status: "live",
    year: "2025",
    stack: ["Java 21", "Spring Boot 4", "REST APIs"],
    metrics: [],
    highlights: [
      "URI path versioning (/v1/resource)",
      "Request parameter versioning (?version=1)",
      "Header-based versioning",
      "Content negotiation versioning",
    ],
    color: "from-emerald-500 to-teal-500",
    icon: "🔢",
  },
  {
    id: "dev-utils",
    title: "dev-utils — Open Source Contribution",
    subtitle: "Pure PHP Data Validation & Formatting Library",
    featured: false,
    badge: "OSS Contributor",
    description:
      "Contributed new utility functions to brunoconte3/dev-utils — a widely-used pure PHP library for data validation, string formatting, and array manipulation. The library is validated with PHPUnit, PHPStan level 10, SonarQube, and PHPCS.",
    github: "https://github.com/brunoconte3/dev-utils",
    demo: "https://packagist.org/packages/brunoconte3/dev-utils",
    status: "live",
    year: "2021",
    stack: ["PHP 8.3", "PHPUnit", "PHPStan Level 10", "SonarQube", "PHPCS", "Composer"],
    metrics: [
      { label: "Stars", value: "35 ⭐" },
      { label: "Forks", value: "19" },
      { label: "Commits", value: "256" },
      { label: "Test Level", value: "PHPStan L10" },
    ],
    highlights: [
      "Implemented Compare::beginUrlWith() — validates if a URL starts with a given path",
      "Implemented Compare::finishUrlWith() — validates if a URL ends with a given path",
      "Implemented Compare::compareStringFrom() — extracts and compares substrings from URLs",
      "Implemented Utility::buildUrl() — builds full HTTP/HTTPS URLs from host and path",
      "Fixed bug in validateFieldMandatory() in the Rules class",
      "Wrote PHPUnit tests for all contributed functions — PHPStan level 10 compliant",
    ],
    color: "from-purple-500 to-pink-500",
    icon: "🐘",
  },
];

export const CASE_STUDIES = [
  {
    id: "talos-platform",
    title: "Talos Identity Validation Platform",
    company: "3HTP Cloud Services",
    subtitle: "Voice Biometrics + Multi-Factor Identity Validation at Banking Scale",
    description:
      "Designed and built a multi-factor identity-validation platform for banking transactions supporting OTP, facial recognition, voice biometrics, and survey-based validation — with risk-based authentication routing.",
    challenge:
      "A Brazilian financial institution needed a flexible identity-validation layer that could apply different authentication factors based on client risk level and transaction type — without rebuilding it for each use case.",
    solution:
      "Architected the Talos platform as a composable Spring WebFlux microservice. Authentication factors (OTP, voice, facial, survey) are pluggable modules. Risk-based routing dynamically selects the required combination based on configurable rules.",
    impact: [
      "Zero security incidents since launch (2023)",
      "500,000+ encrypted records secured",
      "Sub-200ms authentication response times",
      "99.9% uptime across 5 distributed services",
    ],
    stack: [
      "Java 21",
      "Spring WebFlux",
      "Spring Security",
      "Amazon Cognito",
      "AWS Lambda",
      "DynamoDB",
      "Redis",
      "AES/RSA",
      "OAuth 2.0",
      "JWT",
    ],
    patterns: ["Clean Architecture", "SOLID", "DDD", "CQRS", "Event Sourcing", "Saga Pattern"],
    architecture: [
      "API Gateway → Spring WebFlux Auth Orchestrator",
      "Risk Engine: evaluates client level + transaction type",
      "Factor Modules: OTP (SNS), Voice (AWS), Facial (Rekognition), Survey",
      "Amazon Cognito: token issuance and session management",
      "Audit Log: DynamoDB append-only event stream",
    ],
    color: "#6366F1",
    year: "2022–2024",
  },
  {
    id: "complaints-system",
    title: "Distributed Complaints Management System",
    company: "3HTP Cloud Services",
    subtitle: "3-Microservice Event-Driven Architecture on AWS SNS/SQS",
    description:
      "Designed a fault-tolerant, distributed complaint-processing system with configurable transformation rules and multi-destination routing — built on Spring WebFlux and AWS messaging.",
    challenge:
      "A single complaint might need to be routed to 3–5 different external systems, each requiring different data transformations. Processing failures could not block the complaint intake pipeline.",
    solution:
      "Split responsibilities across three dedicated microservices: Receiver (intake), Worker (transform + validate), and Sender (dispatch). Each communicates via AWS SNS topics/SQS queues for complete decoupling. S3 stores attached documents.",
    impact: [
      "40% reduction in complaint resolution time",
      "Fault-tolerant — Receiver never blocked by downstream failures",
      "Configurable mapping rules — new destinations deployed without code changes",
      "Complete document audit trail in S3",
    ],
    stack: ["Java 21", "Spring WebFlux", "AWS SNS", "AWS SQS", "AWS S3", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    patterns: ["Event-Driven Architecture", "CQRS", "Saga Pattern", "Dead Letter Queues", "Retry with Backoff"],
    architecture: [
      "Receiver Service: validates + stores complaint + uploads docs to S3",
      "SNS Topic: complaint.received → Worker queue + Audit queue",
      "Worker Service: applies configurable mapping rules",
      "Sender Service: dispatches to external systems via REST / SNS",
      "Error Service: retry policies with configurable backoff",
    ],
    color: "#8B5CF6",
    year: "2022–2023",
  },
  {
    id: "aws-monitor-arch",
    title: "AWS Monitor — Serverless AI Architecture",
    company: "Personal Project",
    subtitle: "Full Serverless Stack with Bedrock Agents on AWS",
    description:
      "End-to-end serverless architecture for natural-language AWS health monitoring — designed with CDK Infrastructure as Code, zero persistent compute, and < $0.02/month at rest.",
    challenge:
      "AWS monitoring tools exist, but they're built for engineers. Non-technical stakeholders and clients needed to understand infrastructure health in plain English, on demand, without logging into the console.",
    solution:
      "Amazon Bedrock Agents handle the orchestration: they parse natural language queries, invoke action-group Lambdas that call EC2/Lambda/CloudWatch APIs, and return contextualized summaries. CloudFront serves the TypeScript frontend from S3.",
    impact: [
      "< $0.02/month infrastructure cost at rest",
      "Natural language → AWS health in seconds",
      "121 automated tests passing",
      "Full CDK IaC — re-deployable in minutes",
    ],
    stack: [
      "Python 3.12",
      "Amazon Bedrock",
      "Claude 3.5 Haiku",
      "AWS Lambda",
      "API Gateway",
      "CloudFront",
      "S3",
      "CloudWatch",
      "AWS CDK",
      "TypeScript",
    ],
    patterns: ["Serverless Architecture", "Event-Driven", "Infrastructure as Code", "AI Agents", "Action Groups"],
    architecture: [
      "CloudFront → S3 TypeScript SPA (HTTPS, OAI)",
      "API Gateway: POST /chat + API Key auth + CORS",
      "Lambda proxy: validates request → calls Bedrock",
      "Bedrock Agent: Claude 3.5 Haiku reasoning engine",
      "Action Group Lambda: EC2, Lambda, CloudWatch APIs",
      "CDK IaC: 2 stacks (Agent + Frontend), idempotent bootstrap",
    ],
    color: "#22D3EE",
    year: "2025",
  },
];

export const BLOG_POSTS = [
  {
    title: "Building an Autonomous Job Agent with Claude AI: Lessons from 5 Phases",
    slug: "autonomous-job-agent-claude-ai",
    date: "June 2026",
    readTime: "12 min",
    tags: ["AI Agents", "Claude API", "Python", "Automation"],
    excerpt:
      "How I built a fully autonomous job application pipeline with Claude Haiku resume generation, LinkedIn Easy Apply automation, and a live Cowork dashboard — and what I learned about multi-phase agent orchestration.",
    color: "#6366F1",
    content: `## The Problem

Job hunting is repetitive, time-consuming, and mentally exhausting. After spending weeks manually tailoring resumes, writing cover letters, and clicking through LinkedIn Easy Apply forms, I decided to automate the entire pipeline — from job discovery to application submission.

The result: **JobHunter Agent** — a 1,233-line Python agent that runs every Wednesday at 10am, searches multiple job boards, generates a custom-tailored resume for each position using Claude Haiku, applies autonomously via LinkedIn Easy Apply, and sends a full HTML email digest — all without touching the keyboard.

## The 6-Phase Pipeline

The agent executes six phases in sequence, each with a clear contract and failure boundary.

**Phase 0 — Pre-flight Checks**
Before searching for a single job, the agent probes all MCP connectors for health and verifies that LinkedIn has an active session in Chrome. If any check fails, the run aborts with a structured error log — no wasted Haiku tokens.

**Phase 1 — Multi-Board Job Search**
Using Model Context Protocol connectors, the agent queries Indeed, Dice, and ZipRecruiter simultaneously. Results are deduplicated by URL normalization and company+title pair — so the same role posted on three boards appears once.

Jobs are filtered against a location config defined in a single block:

\`\`\`python
LOCATION_CONFIG = {
    "base_address": "6955 NW 186th St, Hialeah, FL 33015",
    "radius_miles": 28,
    "cities_in_radius": [
        "miami", "hialeah", "doral", "kendall", "coral gables",
        "pembroke pines", "miramar", "hollywood, fl", ...
    ],
}
\`\`\`

Change \`radius_miles\` and update \`cities_in_radius\` and the entire agent adapts — filter, resume footer, and email digest all read from this single config.

**Phase 2 — Claude Haiku Resume Personalization**
For each job, Claude Haiku receives the base resume and the full job description. It generates:
- A personalized professional summary mirroring the JD's exact language
- STAR-method achievement bullets with quantified metrics
- Dynamic skill-group reordering (most-matched skills moved to top)
- A one-paragraph cover letter
- A Match% score (0–100) based on skill and keyword overlap

\`\`\`python
response = client.messages.create(
    model="claude-haiku-4-5-20251001",
    max_tokens=4096,
    system=get_current_ats_techniques(),  # refreshed monthly
    messages=[{"role": "user", "content": prompt}]
)
\`\`\`

ATS resume techniques auto-refresh every 30 days via \`ats_updater.py\` — a separate module that queries Claude Haiku for the latest ATS best practices and caches them in \`ats_techniques_cache.json\`. The system prompt stays current with AI-era ATS systems (Workday, Greenhouse, LinkedIn AI) without any manual updates.

**Phase 3 — LinkedIn Easy Apply via Claude in Chrome**
Claude in Chrome navigates the LinkedIn Easy Apply flow autonomously — filling form fields, handling multi-step modals, and uploading the personalized resume. The agent updates \`applications_log.json\` with the job ID and status via \`--update-status\`.

**Phase 4 — Gmail HTML Digest**
After applications complete, the agent builds a structured HTML email with two sections: ✅ Applied (green) and 📋 Resume Ready (orange), sorted by Match%. The Gmail MCP creates the draft — the only manual step is clicking Send.

**Phase 5 — Live Cowork Dashboard**
A persistent Cowork artifact displays real-time stats with Chart.js: applications by source (bar chart), priority distribution (doughnut), and a full table with Match%, status, salary, and source per job. It reads \`applications_log.json\` on every open — no refresh needed.

## What I Learned Building This

**Architectural handoff matters.** Claude (MCP caller) and Python (executor) needed an explicit contract. We used \`jobs_input.json\` as the boundary and \`--jobs-file\` as the entry point. Without this separation, Claude's context window and Python's execution state would be tangled.

**Email timing is a silent bug.** Early versions built the email digest before Easy Apply completed — so applied jobs showed "Resume Ready" in the email. Fix: explicit \`--build-email --run-id <uuid>\` as a separate phase after all status updates.

**FileLock is non-negotiable.** Concurrent writes to \`applications_log.json\` corrupted the file on the first parallel run. Cross-platform \`os.O_EXCL\` atomic locking solved it for both Windows and Linux:

\`\`\`python
def _acquire_lock(lock_path: Path) -> bool:
    try:
        fd = os.open(str(lock_path), os.O_CREAT | os.O_EXCL | os.O_WRONLY)
        os.close(fd)
        return True
    except FileExistsError:
        return False
\`\`\`

**run_id beats date filtering.** Runs that start before midnight and finish after break date-based email filtering. A UUID per run (\`run_id = str(uuid.uuid4())\`) fixes this permanently — every log entry carries the UUID, email builds filter by UUID.

**AI-era ATS reads semantics, not keywords.** LLMs now evaluate resumes for semantic alignment with the JD. Having Claude Haiku mirror the JD's exact language and framing is measurably better than keyword stuffing — the match is contextual, not lexical.

## Results

The agent runs fully autonomously every week. Personalized resumes are auto-cleaned up after 90 days. Run history persists in \`run_history.json\` (last 52 runs) for auditing.

Source: [github.com/silveiraSoft/agent-linkedin-candidate](https://github.com/silveiraSoft/agent-linkedin-candidate)`,
  },
  {
    title: "AWS Infrastructure Monitoring with Amazon Bedrock Agents: A Serverless Approach",
    slug: "aws-monitor-bedrock-agents",
    date: "May 2026",
    readTime: "10 min",
    tags: ["AWS", "Amazon Bedrock", "Claude", "Serverless"],
    excerpt:
      "Deep dive into using Amazon Bedrock Agents + Claude 3.5 Haiku to build a natural-language AWS health dashboard — with CDK IaC, action groups, and a < $0.02/mo cost profile.",
    color: "#22D3EE",
    content: `## The Problem

AWS is powerful but complex. Non-technical stakeholders — PMs, founders, support leads — need to understand infrastructure health without diving into CloudWatch dashboards. Engineers need fast anomaly summaries during incidents, not raw metric graphs.

I built **AWS Monitor**: a chat interface where anyone can type "Are all my Lambdas healthy?" and get an intelligent, human-readable answer — backed by Amazon Bedrock Agents, Claude 3.5 Haiku, and a fully serverless AWS stack.

## Architecture: Fully Serverless, Two CDK Stacks

The system is split into two deployable CDK stacks:

\`\`\`
Browser → CloudFront/S3 (TypeScript frontend, HTTPS + OAI)
       → API Gateway: POST /chat (API Key auth + CORS)
       → Lambda: aws-monitor-chat-proxy
       → Bedrock Agent: us.anthropic.claude-3-5-haiku-20241022-v1:0
       → Action Group Lambda: aws-monitor-agent-actions
            ├─ EC2: DescribeInstances
            ├─ Lambda: ListFunctions + GetMetricStatistics
            ├─ CloudWatch: DescribeAlarms + GetMetricStatistics
            ├─ CloudWatch Logs Insights queries
            ├─ X-Ray: GetTraceSummaries
            └─ ELBv2 + CloudTrail
\`\`\`

**\`AwsMonitorAgentStack\`** provisions the Bedrock agent, IAM role, action group Lambda, and the S3 bucket that holds the OpenAPI schema. **\`AwsMonitorFrontendStack\`** provisions the chat proxy Lambda, API Gateway, S3 UI bucket, and CloudFront distribution.

**Cost at rest: < $0.02/month.** No EC2, no containers. You pay for invocations only.

## The Action Group: 4 Real AWS Queries

The action group Lambda (\`index.py\`) handles four distinct API paths, each backed by real boto3 calls:

| Action | What it queries |
|--------|----------------|
| \`get_overall_health\` | EC2 instance states + active alarm count + Lambda count |
| \`get_ec2_health\` | All instances or filtered by state (running / stopped / all) |
| \`get_lambda_health\` | Error rates, invocations, throttles — configurable prefix + hours |
| \`get_cloudwatch_alarms\` | Alarms filtered by ALARM / OK / INSUFFICIENT_DATA / ALL |

Every action supports an optional \`region\` parameter for multi-region queries. Boto3 clients are created per-request:

\`\`\`python
def _make_clients(region):
    return {
        "ec2":        boto3.client("ec2",        region_name=region),
        "lambda":     boto3.client("lambda",     region_name=region),
        "cloudwatch": boto3.client("cloudwatch", region_name=region),
        "logs":       boto3.client("logs",       region_name=region),
        "xray":       boto3.client("xray",       region_name=region),
    }
\`\`\`

All inputs are validated against allowlists before hitting AWS — region names, EC2 states, alarm states, prefix length — to prevent injection and enforce sane query bounds.

## CDK: Reproducible in One Command

Both stacks are defined in TypeScript CDK. The Bedrock agent configuration includes the foundation model, instruction, and action group binding:

\`\`\`typescript
const agent = new bedrock.CfnAgent(this, 'MonitorAgent', {
  agentName: 'aws-monitor-agent',
  foundationModel: 'us.anthropic.claude-3-5-haiku-20241022-v1:0',
  instruction:
    'You are an AWS infrastructure health assistant. ' +
    'Analyze metrics, identify anomalies, and respond in plain English. ' +
    'Always include severity level and a recommended action.',
  actionGroups: [{
    actionGroupName: 'MonitorActions',
    apiSchema: { s3: { s3BucketName: schemaBucket.bucketName, s3ObjectKey: 'monitor-openapi.json' }},
    actionGroupExecutor: { lambda: actionLambda.functionArn },
  }],
});
\`\`\`

Deploy both stacks with \`npm run deploy\`. CloudFront URL and API URL appear in the CDK outputs.

## How Bedrock Agents Orchestrate the Reasoning Loop

When a user asks "Which Lambda functions had errors in the last hour?", the Bedrock Agent:

1. Parses the natural language intent using Claude 3.5 Haiku
2. Matches the intent to \`get_lambda_health\` in the OpenAPI schema
3. Extracts parameters: \`hours=1\`, optional \`prefix\`
4. Calls the action group Lambda with a structured JSON payload
5. Receives raw CloudWatch data
6. Generates a human-readable summary: "2 Lambdas had errors in the last hour: \`payment-processor\` (error rate 4.2%) and \`auth-validator\` (throttled 18 times). Recommend checking DLQ for payment-processor."

This reasoning loop — intent → tool selection → structured call → synthesis — replaces hundreds of lines of hand-coded routing logic.

## 121 Tests: Unit + Integration + E2E

The test suite runs with zero pip installs (Python stdlib only):

\`\`\`bash
python run_tests.py all      # 121 tests: unit + integration + e2e + tsc check
python run_tests.py unit     # Lambda logic, input validation, response format
python run_tests.py e2e      # Full chat flow with mocked Bedrock responses
\`\`\`

The integration suite includes a \`tsc --noEmit\` check to validate all CDK TypeScript before any deployment.

## Cleanup-First Development

One lesson from building this: Bedrock agents accumulate version history and alias artifacts that cost nothing but clutter the account. The project ships with explicit cleanup scripts:

\`\`\`bash
python cleanup_deploy.py      # removes Lambdas, API GW, CloudFront, S3, Bedrock agent
python cleanup_bootstrap.py   # removes CDKToolkit stack (only if re-bootstrapping)
\`\`\`

Running \`cleanup_deploy.py\` then \`npm run deploy\` gives a clean environment in minutes — useful when iterating on the action group schema.

## Key Takeaway

Bedrock Agents replace the orchestration loop you'd otherwise build by hand: intent parsing → tool selection → structured execution → synthesis. For monitoring where queries are open-ended and unpredictable, this is far more maintainable than rule-based routing — and it scales to new AWS services by just adding a path to the OpenAPI schema and a function to the Lambda.

Source: [github.com/silveiraSoft/aws-monitor](https://github.com/silveiraSoft/aws-monitor)`,
  },
  {
    title: "Spring WebFlux vs Spring MVC: When to Go Reactive",
    slug: "spring-webflux-vs-mvc",
    date: "March 2026",
    readTime: "8 min",
    tags: ["Spring WebFlux", "Java", "Reactive", "Performance"],
    excerpt:
      "Based on 4+ years of production reactive systems: when Spring WebFlux genuinely wins, when it's overkill, and the architectural patterns that make reactive microservices maintainable.",
    color: "#8B5CF6",
    content: `## The Default Answer is Wrong

Most articles frame Spring WebFlux vs Spring MVC as a performance question. "WebFlux handles more concurrent users" — and then they show a benchmark. This misses the real decision.

After 4+ years running reactive microservices in production (handling 50,000+ daily transactions at 3HTP Cloud Services), here is what actually determines the right choice.

## When WebFlux Genuinely Wins

**1. High-concurrency I/O-bound services**

WebFlux's non-blocking model shines when threads would otherwise sit idle waiting for database responses, external API calls, or message queue reads. Our Complaints Management System handles bursts of 500+ concurrent complaint submissions with 3 WebFlux microservices and never saturates its thread pool.

\`\`\`java
// WebFlux: thread released immediately, resumed on response
public Mono<ComplaintResponse> submitComplaint(ComplaintRequest req) {
    return complaintRepository.save(req.toEntity())
        .flatMap(saved -> notificationService.notify(saved))
        .map(ComplaintResponse::from);
}
\`\`\`

**2. Service-to-service fan-out**

When one request triggers parallel calls to multiple downstream services, WebFlux's \`Flux.zip\` and \`Mono.zip\` are dramatically cleaner than \`CompletableFuture.allOf\`:

\`\`\`java
return Mono.zip(
    identityService.validate(userId),
    accountService.getBalance(userId),
    riskService.score(userId)
).map(tuple -> buildResponse(tuple.getT1(), tuple.getT2(), tuple.getT3()));
\`\`\`

**3. Streaming responses**

Server-Sent Events and WebSocket endpoints are first-class in WebFlux. Our real-time dashboard streams CloudWatch metrics as a \`Flux<MetricEvent>\` — impossible to do cleanly in Spring MVC without hacks.

## When Spring MVC is the Right Call

**1. CRUD services with simple request/response cycles**

If your service reads from a database and returns JSON, Spring MVC is simpler, better understood by your team, and easier to debug. Reactive stack complexity is a real cost.

**2. Blocking third-party libraries**

WebFlux breaks when you call blocking code on the event loop. If your dependencies — legacy JDBC drivers, old SDKs — are blocking, you end up wrapping everything in \`Mono.fromCallable(...).subscribeOn(Schedulers.boundedElastic())\`. At that point you've paid the WebFlux complexity tax without the performance benefit.

**3. Team unfamiliarity with reactive programming**

Project Reactor has a steep learning curve. \`flatMap\` vs \`concatMap\` vs \`switchMap\`, hot vs cold publishers, backpressure — these are real concepts that take time to internalize. Shipping bugs in reactive chains that only surface under load is worse than using Spring MVC.

## Production Patterns That Work

**Pattern 1: Separate the reactive core from the imperative shell**

Keep business logic in pure functions that operate on data, not on \`Mono/Flux\`. This makes unit testing trivial:

\`\`\`java
// Pure function — testable without reactor-test
public ComplaintStatus calculateStatus(Complaint complaint, List<Action> actions) { ... }

// Thin reactive shell
public Mono<ComplaintStatus> getStatus(String id) {
    return complaintRepository.findById(id)
        .zipWith(actionRepository.findByComplaintId(id).collectList())
        .map(t -> calculateStatus(t.getT1(), t.getT2()));
}
\`\`\`

**Pattern 2: Always set timeouts**

Reactive chains that hang silently are production nightmares. Every external call gets a timeout:

\`\`\`java
return webClient.get().uri("/api/data")
    .retrieve()
    .bodyToMono(Response.class)
    .timeout(Duration.ofSeconds(3))
    .onErrorReturn(TimeoutException.class, Response.fallback());
\`\`\`

**Pattern 3: Use \`StepVerifier\` for every reactive test**

Never test reactive code by blocking with \`.block()\` in tests. Use Project Reactor's test utilities:

\`\`\`java
StepVerifier.create(service.submitComplaint(request))
    .expectNextMatches(r -> r.status() == PENDING)
    .verifyComplete();
\`\`\`

## The Honest Summary

Go WebFlux if: high concurrency, service fan-out, streaming, and your team knows reactive patterns.

Go Spring MVC if: CRUD, blocking dependencies, or team expertise is elsewhere.

The worst outcome is choosing WebFlux for its reputation and then fighting it for six months. The second worst is dismissing it and missing 35% latency improvements on the services that genuinely benefit.`,
  },
  {
    title: "Event-Driven Architecture on AWS: SNS, SQS, and the Saga Pattern",
    slug: "event-driven-aws-sns-sqs-saga",
    date: "January 2026",
    readTime: "9 min",
    tags: ["AWS", "Event-Driven", "Microservices", "Saga Pattern"],
    excerpt:
      "Practical guide to distributed transaction management with SNS/SQS: designing the Complaints Management System, handling failures with dead letter queues, and implementing configurable retry policies.",
    color: "#10B981",
    content: `## The Problem with Distributed Transactions

When you split a monolith into microservices, you lose the database transaction that kept everything consistent. A "submit complaint" operation that touches 3 services — intake, notification, and audit — can now fail halfway through, leaving data in an inconsistent state.

Two-phase commit (2PC) solves this but introduces tight coupling and is effectively incompatible with cloud-native architectures. The Saga pattern is the production answer.

## What We Built

At 3HTP Cloud Services, our Complaints Management System handles 500+ concurrent submissions across three Spring WebFlux microservices coordinated entirely through AWS SNS/SQS. Complaint resolution time dropped 40% after migration from the monolith. Here's how it works.

## The Choreography Saga

We chose choreography over orchestration — each service reacts to events rather than being told what to do by a central coordinator. This keeps services decoupled:

\`\`\`
User → ComplaintService → SNS: complaint.submitted
                         ↓
              NotificationService subscribes → sends email → SNS: notification.sent
                         ↓
              AuditService subscribes → logs → SNS: audit.recorded
\`\`\`

Each step publishes an event on success. If \`NotificationService\` fails, the Saga rolls back via a compensating transaction — a \`notification.failed\` event that triggers \`ComplaintService\` to mark the complaint as pending-retry.

## SNS Fan-out + SQS Buffering

SNS topics deliver events to multiple SQS queues simultaneously. This gives us:

- **Decoupling**: Publishers don't know about subscribers
- **Buffering**: SQS absorbs traffic spikes without dropping events
- **At-least-once delivery**: Messages are retried automatically if processing fails

\`\`\`java
// Publishing an event
snsClient.publish(PublishRequest.builder()
    .topicArn(complaintSubmittedTopicArn)
    .message(objectMapper.writeValueAsString(event))
    .messageAttributes(Map.of(
        "eventType", MessageAttributeValue.builder()
            .dataType("String")
            .stringValue("complaint.submitted")
            .build()
    ))
    .build());
\`\`\`

## Dead Letter Queues: Your Safety Net

Every SQS queue has a DLQ configured with a \`maxReceiveCount\` of 3. After 3 failed processing attempts, the message moves to the DLQ instead of disappearing:

\`\`\`typescript
// CDK definition
const dlq = new sqs.Queue(this, 'ComplaintDLQ', {
  retentionPeriod: Duration.days(14),
});

const mainQueue = new sqs.Queue(this, 'ComplaintQueue', {
  deadLetterQueue: { queue: dlq, maxReceiveCount: 3 },
  visibilityTimeout: Duration.seconds(30),
});
\`\`\`

A CloudWatch alarm fires when DLQ depth exceeds 0 — that's our signal that something is systematically wrong, not just a transient failure.

## Configurable Retry Policy

Rather than hardcoding retry behavior, we externalize it to AWS Parameter Store:

\`\`\`java
@Value("\${retry.max-attempts:3}")
private int maxAttempts;

@Value("\${retry.backoff-seconds:5}")
private int backoffSeconds;

public Mono<Void> processWithRetry(SQSMessage message) {
    return process(message)
        .retryWhen(Retry.backoff(maxAttempts, Duration.ofSeconds(backoffSeconds))
            .filter(ex -> ex instanceof TransientException));
}
\`\`\`

Changing retry behavior in production requires no deployment — just a Parameter Store update.

## Idempotency is Non-Negotiable

With at-least-once delivery, your consumers will process the same message more than once. Every handler checks for duplicate processing using a DynamoDB idempotency table:

\`\`\`java
public Mono<Void> handleComplaintSubmitted(ComplaintSubmittedEvent event) {
    return idempotencyService.checkAndMark(event.getEventId())
        .flatMap(isNew -> isNew
            ? processNewComplaint(event)
            : Mono.empty() // Already processed, skip
        );
}
\`\`\`

## Observability: Tracing Across Services

AWS X-Ray propagates trace context across SNS/SQS boundaries automatically when you enable active tracing. Every message carries a \`X-Amzn-Trace-Id\` header that stitches the full journey — from HTTP request through 3 services — into a single trace.

Combined with structured logging (correlation ID on every log line), debugging a failed complaint now takes minutes instead of hours.

## Results

- **40% reduction** in complaint resolution time
- **Zero message loss** since launch (DLQ catches what retries don't)
- **Sub-200ms** end-to-end latency at p99 for the happy path
- **35% reduction** in async event processing latency vs. the previous polling approach

The Saga pattern with SNS/SQS choreography is now our default for any operation that crosses service boundaries. The observability investment — X-Ray, structured logs, DLQ alarms — is what makes it manageable in production.`,
  },
];

export const EDUCATION = [
  {
    degree: "Master in Business Informatics",
    institution: "CUJAE (Technological University José Antonio Echeverría)",
    location: "Havana, Cuba",
    year: "2013",
    description: "Enterprise information systems, business process management, IT strategy, and applied research methods.",
  },
  {
    degree: "B.Sc. in Computer Sciences",
    institution: "University of Santiago de Cuba",
    location: "Santiago de Cuba, Cuba",
    year: "2006",
    description: "Computer science fundamentals, algorithms, data structures, systems architecture.",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
