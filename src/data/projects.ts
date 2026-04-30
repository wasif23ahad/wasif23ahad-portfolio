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
    id: "agentic-llm-validator",
    title: "Agentic LLM Validator",
    description: "A robust validation framework for Large Language Models using agentic workflows.",
    longDescription: "This project implements a multi-agent system designed to validate and benchmark LLM outputs against specific business logic and safety constraints. It uses a reflective architecture where agents critique each other's validations to minimize false positives.",
    image: "/Projects/validator.jpg",
    techStack: ["Next.js", "Python", "LangGraph", "OpenAI API", "PostgreSQL"],
    liveLink: "https://validator.wasifahad.com",
    githubLink: "https://github.com/wasif23ahad/agentic-validator",
    challenges: [
      "Handling non-deterministic outputs from the validator agents.",
      "Optimizing token usage while maintaining high validation accuracy.",
      "Implementing real-time feedback loops for the validation process."
    ],
    futurePlans: [
      "Support for multi-modal model validation.",
      "Integration with more vector databases for RAG-based validation.",
      "Automated prompt optimization based on validation failure patterns."
    ]
  },
  {
    id: "parksmart-iot",
    title: "ParkSmart IoT",
    description: "Smart parking management system using IoT sensors and real-time monitoring.",
    longDescription: "ParkSmart is an end-to-end IoT solution for urban parking management. It leverages ultrasonic sensors and ESP32 microcontrollers to detect parking spot availability, which is then broadcasted to a central dashboard for users to find spots in real-time.",
    image: "/Projects/parksmart.jpg",
    techStack: ["React", "Node.js", "MQTT", "ESP32", "MongoDB"],
    liveLink: "https://parksmart.wasifahad.com",
    githubLink: "https://github.com/wasif23ahad/parksmart-iot",
    challenges: [
      "Ensuring low-latency communication between IoT devices and the backend.",
      "Managing power consumption for battery-operated sensor nodes.",
      "Handling concurrent sensor updates in a high-traffic parking environment."
    ],
    futurePlans: [
      "Implement computer vision for license plate recognition.",
      "Add automated billing and payment integration.",
      "Expand to multi-level parking lot support with 3D visualization."
    ]
  },
  {
    id: "reflective-trading-agent",
    title: "Reflective Trading Agent",
    description: "AI-powered trading bot that uses self-reflection to optimize strategy.",
    longDescription: "A sophisticated trading agent that doesn't just follow static rules. It analyzes its own past performance and market trends using LLMs to 'reflect' on why certain trades failed or succeeded, adjusting its risk parameters dynamically.",
    image: "/Projects/trading.jpg",
    techStack: ["TypeScript", "Python", "FastAPI", "Pinecone", "Claude 3.5 Sonnet"],
    liveLink: "https://trading-agent.wasifahad.com",
    githubLink: "https://github.com/wasif23ahad/reflective-trading",
    challenges: [
      "Integrating financial market data with LLM context windows efficiently.",
      "Building a safe execution environment for automated trades.",
      "Reducing hallucinations in market sentiment analysis."
    ],
    futurePlans: [
      "Backtesting against historical data from multiple exchanges.",
      "Implement a governance layer for human-in-the-loop approvals.",
      "Develop a dashboard for visualizing the agent's internal 'thought process'."
    ]
  }
];
