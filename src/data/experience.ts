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
    role: "Software Engineer — AI & Agentic Systems",
    duration: "Jul 2025 – Present",
    location: "Remote/Dhaka",
    description: [
      "Designed modular pipelines handling 50K+ ETH2/PoS validator data points, integrating trust scoring and reinforcement learning for validator selection, and supported reproducible workflows for blockchain ML research.",
      "Built internal automation workflows with n8n, Python, and third-party APIs to streamline data ingestion, reporting, and operational tasks across the team.",
      "Contributed to a scalable e-commerce platform — backend services, API integrations, and optimized data flows to support growing transaction and catalog volume."
    ]
  },
  {
    company: "Bondstein Technologies",
    role: "Jr. Machine Learning Engineer",
    duration: "Jul 2024 – Nov 2024",
    location: "Dhaka, Bangladesh",
    description: [
      "Developed and deployed computer vision models using YOLO for real-time object detection.",
      "Implemented ML pipelines for large-scale image processing and classification.",
      "Collaborated with IoT teams to integrate ML models into edge devices.",
      "Optimized model inference times for production environments."
    ]
  },
  {
    company: "Bondstein Technologies",
    role: "ML Engineer Intern",
    duration: "Apr 2024 – Jul 2024",
    location: "Dhaka, Bangladesh",
    description: [
      "Built ML solutions in computer vision, synthetic audio generation, voice cloning, and lip-syncing.",
      "Gained hands-on expertise in deep learning frameworks, full project lifecycle, and deployment."
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
    duration: "2025 – Present",
    description: "CGPA: 3.45/4.00 | Focusing on Artificial Intelligence, Machine Learning, and Advanced Algorithms."
  },
  {
    degree: "BSc in Electrical and Electronic Engineering",
    institution: "Ahsanullah University of Science and Technology (AUST)",
    duration: "Jan 2019 – Oct 2023",
    description: "CGPA: 2.982/4.00 | Specialized in Electronics and embedded systems."
  }
];
