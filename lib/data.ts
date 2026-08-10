// Central source of truth for all site content.
// Edit values here to update the site — no need to touch component files.

export const site = {
  name: "Abdulsamod Azeez",
  initials: "AA",
  roles: [
    "Machine Learning Engineer",
    "Data Scientist",
    "Software Engineer",
    "Python Engineer",
  ],
  tagline:
    "Machine Learning Engineer with years of experience designing, building, and deploying production AI, from LLM applications and retrieval-augmented generation (RAG) pipelines to full ML lifecycles on AWS, Docker, and Kubernetes. I turn complex data into reliable, scalable systems that solve real problems in healthcare, education, and digital access.",
  location: "Lagos State, Nigeria",
  email: "abdulsamod2@gmail.com",
  phones: ["+234 815 650 9251", "+234 813 058 3872"],
  resumeUrl: "/resume.pdf",
  blogHost: process.env.NEXT_PUBLIC_HASHNODE_HOST || "abdulsamodazeez.hashnode.dev",
  blogUrl: "https://abdulsamodazeez.hashnode.dev",
};

export const socials = {
  github: "https://github.com/abdulsamodazeez",
  linkedin: "https://www.linkedin.com/in/abdulsamodazeez",
  twitter: "https://twitter.com/abdulsamodazeez",
  hashnode: "https://abdulsamodazeez.hashnode.dev",
};

export const about = {
  summary: [
    "I'm a Machine Learning Engineer with years of experience building and deploying AI-powered systems, including LLM applications and retrieval-augmented generation (RAG) pipelines. I'm passionate about leveraging data and AI to solve real-world challenges in emerging markets, particularly in healthcare, education, and digital access.",
    "I work across the full ML lifecycle, from data engineering and modelling to scalable deployment using AWS, Docker, and Kubernetes. I have a strong background in NLP and transformer-based systems, and a proven ability to translate complex data into actionable insights. As a mentor, researcher, and community contributor, I've guided 50+ learners and supported the growth of data science ecosystems.",
  ],
  highlights: [
    { value: "3+", label: "Years building & deploying ML" },
    { value: "50+", label: "Learners mentored" },
    { value: "LLM", label: "RAG & GenAI systems in production" },
    { value: "KCNA", label: "Kubernetes certified" },
  ],
};

export type SkillGroup = { category: string; skills: string[] };

export const skills: SkillGroup[] = [
  {
    category: "AI / Machine Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Hugging Face Transformers",
      "NLP",
      "LLM Integration (Gemini, Claude)",
      "RAG",
      "NVIDIA RAPIDS",
    ],
  },
  {
    category: "Data Science",
    skills: ["NumPy", "Pandas", "scikit-learn", "Statistical Analysis"],
  },
  {
    category: "Programming",
    skills: ["Python", "FastAPI", "Flask", "JavaScript", "Type Hinting", "MyPy"],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS SageMaker",
      "Docker",
      "Kubernetes",
      "Oracle Cloud (OCI)",
      "MLflow",
      "BentoML",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Qdrant"],
  },
  {
    category: "Big Data & Streaming",
    skills: ["Apache Kafka", "Redis Pub/Sub & Streams", "Real-time Pipelines"],
  },
  {
    category: "Data Visualisation",
    skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau"],
  },
  {
    category: "Test Automation",
    skills: ["Playwright", "Appium", "pytest", "Selenium"],
  },
];

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "5G Root-Cause Diagnosis with an Edge-Sized LLM",
    description:
      "An end-to-end fault-diagnosis system for 5G networks: deterministic code measures raw drive-test telemetry, and a fine-tuned Qwen3-4B — small enough for edge servers — weighs the measurements and explains the root cause.",
    highlights: [
      "99.1% accuracy on an independent benchmark (2nd of 130 teams, Cassava AI / Deep Learning Indaba 2026)",
      "Feature verbalization took the same 4B model from ~12% (raw tables) to 99%",
      "LoRA fine-tuning with self-consistency voting; general capability preserved by construction",
    ],
    tags: ["Qwen3-4B", "LoRA", "Telecom", "Edge AI", "PyTorch"],
    links: [
      { label: "GitHub", href: "https://github.com/abdulsamodazeez/5g-root-cause-llm" },
      { label: "Model", href: "https://huggingface.co/abdulsamod/qwen3-4b-5g-root-cause" },
      { label: "Write-up", href: "https://abdulsamodazeez.hashnode.dev/listening-to-the-network-teaching-a-4b-model-to-diagnose-5g-faults" },
    ],
    featured: true,
  },
  {
    title: "AI-Powered Heart Disease Prediction System",
    description:
      "An end-to-end ML pipeline for early cardiovascular risk detection, designed to support data-driven healthcare decisions in resource-constrained environments.",
    highlights: [
      "Achieved 92% accuracy and 0.91 AUC",
      "Full pipeline: preprocessing, modelling, and deployment",
      "Deployed on AWS SageMaker with automated CI/CD",
    ],
    tags: ["scikit-learn", "AWS SageMaker", "CI/CD", "Healthcare"],
    featured: true,
  },
  {
    title: "GenAI Chatbot with Retrieval-Augmented Generation",
    description:
      "An AI-powered chatbot that combines Hugging Face Transformers with vector search to deliver accurate, context-aware conversational responses.",
    highlights: [
      "Embedding-based retrieval for stronger contextual understanding",
      "Backend APIs with interactive interfaces",
      "Improved task completion and user experience",
    ],
    tags: ["Hugging Face", "RAG", "Vector Search", "LLM"],
    featured: true,
  },
  {
    title: "Natural-Language → Salesforce Test Generation",
    description:
      "A RAG pipeline that turns plain-English prompts into executable Salesforce test cases, with streaming output and multi-tenant retrieval (built at SimpleTest).",
    highlights: [
      "FastAPI + Gemini + Qdrant RAG with streaming output",
      "Kafka/Redis orchestration with at-least-once delivery",
      "Autonomous browser agent using Claude + a ReAct loop",
    ],
    tags: ["FastAPI", "Gemini", "Qdrant", "Kafka", "Playwright"],
    featured: true,
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "SimpleTest",
    period: "2024",
    description: [
      "Built a RAG pipeline (FastAPI, Gemini, Qdrant) converting natural-language prompts into executable Salesforce test cases with streaming output and multi-tenant retrieval.",
      "Designed the test orchestration service around Kafka and Redis producer/consumer flows with at-least-once delivery and MongoDB state persistence.",
      "Developed browser/mobile automation engines (Playwright, Appium) with AI-generated locator evaluation, MFA handling, and an autonomous browser agent powered by Claude.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Turing",
    period: "Oct 2025 — Apr 2026",
    description: [
      "Built end-to-end ML pipelines (ingestion → training → evaluation → deployment → monitoring) on AWS, reducing iteration time and standardising the path from prototype to production.",
      "Deployed and monitored LLM/ML services with Docker + Kubernetes; instrumented drift, latency, and accuracy via MLflow with automated retraining on threshold breach.",
      "Optimised inference performance (batching, caching, quantisation) to meet strict latency SLOs in production.",
    ],
  },
  {
    role: "Data Scientist",
    company: "GOMYCODE",
    period: "Jan 2023 — Jul 2025",
    description: [
      "Mentored 50+ students across diverse backgrounds, improving access to data science education.",
      "Delivered project-based learning emphasising practical application and deep understanding of data science concepts, tools, and methodologies.",
    ],
  },
  {
    role: "Data Scientist & ML Engineer",
    company: "Andela",
    period: "Jan 2023 — May 2024",
    description: [
      "Built and deployed scikit-learn / PyTorch models for classification and forecasting, owning the full lifecycle from data prep to production monitoring.",
      "Automated data pipelines with pandas and enforced data quality with Great Expectations, improving reliability and reducing manual effort.",
      "Deployed and scaled ML solutions with Docker, Kubernetes, and AWS for high availability and performance.",
    ],
  },
];

export const education = [
  {
    degree: "BSc, Computer Science",
    school: "Federal University Lokoja",
    period: "Sep 2017 — Jan 2023",
  },
];

export const certifications = [
  {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "The Linux Foundation",
    date: "May 2025",
    credentialId: "LF-hij9qahoqh",
  },
];

export const community = [
  { role: "Mentor", org: "KaggleX BIPOC Mentorship Program", period: "2023 — Present" },
  { role: "Pioneer Campus Lead", org: "Data Science Nigeria, FULokoja Chapter", period: "2022 — 2024" },
  { role: "Core Team & Mentor", org: "Meta Developer Circles Lokoja", period: "" },
];

export const publications = [
  {
    title: "Performance and Accessibility Evaluation of University Websites in Nigeria",
    href: "https://doi.org/10.1109/ITED56637.2022.10051461",
    venue: "IEEE — DOI: 10.1109/ITED56637.2022.10051461",
  },
];
