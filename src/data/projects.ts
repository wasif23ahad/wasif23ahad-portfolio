export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  challenges: string[];
  futurePlans: string[];
}

export const projects: Project[] = [
  {
    id: "planora",
    title: "Planora — Full-Stack Events Platform",
    description: "Modern full-stack event management platform with Google OAuth, RBAC, and SSLCommerz payment integration.",
    longDescription: "A robust event management ecosystem allowing users to discover, join, and pay for events. Implements comprehensive authentication (JWT + Google OAuth 2.0), strict Role-Based Access Control (User, Owner, Admin), and secure real-time ticket purchases via SSLCommerz. Features a dedicated admin moderation dashboard for platform oversight and user management.",
    image: "/Projects/planora.png",
    techStack: ["Next.js", "Tailwind CSS", "Axios", "Zod", "SSLCommerz", "Google OAuth", "Express.js"],
    liveLink: "https://planora-frontend-green.vercel.app",
    githubLink: "https://github.com/wasif23ahad/planora-frontend",
    challenges: [
      "Integrating SSLCommerz for secure, real-time ticket purchases and handling complex redirect flows.",
      "Implementing seamless Role-Based Access Control across User, Owner, and Admin tiers with JWT + Google OAuth.",
      "Synchronizing payment states and participant approvals across distributed services without data loss."
    ],
    futurePlans: [
      "Implement multi-currency support and localized tax handling for international events.",
      "Real-time participant analytics and capacity heatmaps for event owners.",
      "Automated email invitations and push notification reminders for upcoming events."
    ]
  },
  {
    id: "foodhub",
    title: "FoodHub — Delicious Meals Delivered",
    description: "Multi-role food ordering platform with role-scoped dashboards, real-time cart, and secure checkout.",
    longDescription: "A modern, full-stack food ordering platform designed for a premium user experience. Connects local food providers with customers through a sleek interface. Features include real-time persistent cart (Zustand), dietary-filtered meal browsing, and role-scoped dashboards for Customers, Providers, and Admins. Built with Next.js 15, TanStack Query, and Better-Auth for fortified session management.",
    image: "/Projects/FoodHub.png",
    techStack: ["Next.js 15", "TanStack Query", "Zustand", "Better-Auth", "Prisma", "PostgreSQL", "Cloudinary"],
    liveLink: "https://foodhub-frontend-sand.vercel.app/",
    githubLink: "https://github.com/wasif23ahad/foodHub-frontend",
    challenges: [
      "Coordinating a complex order state machine across three user roles without invalid state transitions.",
      "Resolving cross-domain session cookie authentication issues between frontend and backend on serverless deployments.",
      "Managing complex PostgreSQL relationships with cascade deletion protocols for clean data lifecycle management."
    ],
    futurePlans: [
      "WebSocket-driven real-time order status updates and live delivery tracking for customers.",
      "Integration of Stripe payment gateway to replace the current cash-on-delivery system.",
      "AI-driven meal recommendations based on user dietary preferences and order history."
    ]
  },
  {
    id: "quick-hire",
    title: "QuickHire — Full-Stack Job Board Application",
    description: "A modern, comprehensive, and responsive job board application built with Next.js 15, Express.js, and PostgreSQL.",
    longDescription: "A comprehensive job board application supporting job seekers and admins. Features include advanced search & filter for 1000+ jobs, detailed job pages, secure JWT-based authentication, and a dedicated admin panel for job moderation and application tracking. Built with a clean architecture using Next.js 15, Express, and Neon PostgreSQL.",
    image: "/Projects/QuickHire.png",
    techStack: ["Next.js 15", "Express.js", "PostgreSQL", "Prisma", "TypeScript", "JWT", "Tailwind CSS"],
    liveLink: "https://quick-hire-job-portal-frontend.vercel.app/",
    githubLink: "https://github.com/wasif23ahad/quick-hire-jobPortal",
    challenges: [
      "Resolving cross-domain session cookie auth between the frontend and backend on Vercel deployments.",
      "Coordinating a complex job state machine across user and admin roles without invalid transitions.",
      "Optimizing database queries and pagination for high-volume job listings and filtering."
    ],
    futurePlans: [
      "Real-time application status updates and notifications via WebSockets.",
      "Integrated resume builder and AI-driven job matching for candidates.",
      "Automated email alerts for new job postings based on user preferences."
    ]
  },
  {
    id: "rag-chatbot",
    title: "RAG-Powered Custom AI Chatbot",
    description: "Custom RAG architecture with FAISS embeddings and LangChain tool-calling for context-aware document question answering.",
    longDescription: "A production Retrieval-Augmented Generation chatbot built to answer questions over private document collections. Uses FAISS vector embeddings, LangChain tool-calling for structured retrieval, and Pyramid Summary documentation patterns for token-efficient context window selection. Exposed via a FastAPI backend with streaming-ready response handling.",
    image: "/Projects/RagPoweredCustomAiChatbot.png",
    techStack: ["FastAPI", "FAISS", "LangChain", "Python", "Hugging Face"],
    liveLink: "https://rag-chatbot-frontend-6dv6.onrender.com/",
    githubLink: "https://github.com/wasif23ahad/ai-rag-chatbot-pdf",
    challenges: [
      "Optimizing context window usage without losing semantic retrieval accuracy.",
      "Handling chunk overlap and semantic boundaries during PDF and document indexing.",
      "Reducing end-to-end latency across embedding, retrieval, and generation stages."
    ],
    futurePlans: [
      "Hybrid search combining dense embeddings with BM25 sparse retrieval.",
      "Multi-tenant and multi-document collection support with isolated indices.",
      "Streaming token responses with citation highlighting for source transparency."
    ]
  },
  {
    id: "parksmart",
    title: "ParkSmart — IoT + AI Real-Time Monitoring",
    description: "Smart parking monitoring system ingesting IoT telemetry with real-time alerts and sensor health scoring.",
    longDescription: "A full-stack IoT telemetry platform that ingests occupancy and sensor data from parking-spot devices. Performs real-time validation, threshold-based alert detection, and sensor health scoring, surfacing everything through a live monitoring dashboard. Built with a Django REST backend, React + Vite frontend, and a carefully scoped data model to keep dashboard polling efficient.",
    image: "/Projects/ParkSmart.png",
    techStack: ["React", "TypeScript", "Django", "DRF", "PostgreSQL", "MQTT"],
    githubLink: "https://github.com/wasif23ahad/smart-parking-system-fullstack",
    challenges: [
      "Validating noisy and intermittent sensor telemetry without triggering false alerts.",
      "Designing efficient query patterns to keep real-time dashboard polling responsive at scale.",
      "Building a flexible health-scoring algorithm to detect gradual sensor degradation."
    ],
    futurePlans: [
      "WebSocket push updates to replace polling and reduce backend load.",
      "Predictive occupancy forecasting using time-series ML on historical telemetry.",
      "End-user mobile app for finding and reserving available spots in real time."
    ]
  },

  {
    id: "velocity-rentals",
    title: "Velocity Rentals",
    description: "Full-stack vehicle rental platform with JWT auth, RBAC, and cron-driven booking automation.",
    longDescription: "A full-stack vehicle rental platform with role-based access control, secure JWT authentication, Zod-validated APIs, and cron-based automation for booking lifecycle events such as reminders, overdue detection, and status transitions. Built across React frontend and Node.js + Express backend with Prisma ORM over PostgreSQL.",
    image: "/Projects/VelocityRentals.png",
    techStack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Prisma"],
    liveLink: "https://velocity-rentals.vercel.app/",
    githubLink: "https://github.com/wasif23ahad/vehicleRentalSystem",
    challenges: [
      "Designing booking conflict detection that handles overlapping reservations without race conditions.",
      "Building reliable cron jobs for automated booking state transitions and reminder dispatch.",
      "Implementing a flexible RBAC layer across customers, fleet owners, and platform admins."
    ],
    futurePlans: [
      "Stripe integration for booking deposits, refunds, and final payments.",
      "Real-time vehicle availability syncing via WebSockets.",
      "Map-based vehicle discovery using PostGIS geospatial queries."
    ]
  }
];
