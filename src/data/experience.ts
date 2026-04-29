export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  location: string;
  isCurrent?: boolean;
}

export const experiences: Experience[] = [
  {
    company: "QzenTech",
    role: "Software Engineer - AI & Agentic Systems",
    duration: "2024 - Present",
    location: "Remote/Dhaka",
    isCurrent: true,
    description: [
      "Architecting AI-driven agentic workflows for blockchain data pipelines.",
      "Developing LLM-based tools for automated smart contract validation and monitoring.",
      "Optimizing RAG (Retrieval-Augmented Generation) systems for high-throughput data processing.",
      "Leading the transition to agent-based microservices architecture."
    ]
  },
  {
    company: "Bondstein Technologies",
    role: "Jr. ML Engineer",
    duration: "2023 - 2024",
    location: "Dhaka, Bangladesh",
    description: [
      "Developed and deployed computer vision models using YOLO for real-time object detection.",
      "Implemented ML pipelines for large-scale image processing and classification.",
      "Collaborated with IoT teams to integrate ML models into edge devices.",
      "Optimized model inference times for production environments."
    ]
  }
];

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
}

export const education: Education[] = [
  {
    degree: "MSc in Computer Science and Engineering",
    institution: "Brac University",
    duration: "2024 - Present",
    description: "Focusing on Artificial Intelligence, Machine Learning, and Advanced Algorithms."
  },
  {
    degree: "BSc in Electrical and Electronic Engineering",
    institution: "Ahsanullah University of Science and Technology (AUST)",
    duration: "2018 - 2022",
    description: "Graduated with honors. Specialized in signal processing and embedded systems."
  }
];
