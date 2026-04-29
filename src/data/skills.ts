export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'AI Engineering' | 'Full-Stack' | 'Tools';
}

export const skills: Skill[] = [
  // AI Engineering
  { name: "LLMs (GPT-4, Claude 3.5)", level: 95, category: "AI Engineering" },
  { name: "RAG Pipelines", level: 90, category: "AI Engineering" },
  { name: "Agentic Workflows (LangGraph)", level: 92, category: "AI Engineering" },
  { name: "Vector Databases (Pinecone, Chroma)", level: 85, category: "AI Engineering" },
  { name: "Python / PyTorch", level: 88, category: "AI Engineering" },
  
  // Full-Stack
  { name: "React / Next.js", level: 96, category: "Full-Stack" },
  { name: "TypeScript", level: 94, category: "Full-Stack" },
  { name: "Node.js / Express", level: 90, category: "Full-Stack" },
  { name: "PostgreSQL / MongoDB", level: 85, category: "Full-Stack" },
  { name: "Tailwind CSS", level: 95, category: "Full-Stack" },
  
  // Tools
  { name: "Docker", level: 80, category: "Tools" },
  { name: "Git / GitHub", level: 95, category: "Tools" },
  { name: "Vercel / AWS", level: 85, category: "Tools" },
  { name: "Claude Code / Cursor", level: 98, category: "Tools" },
  { name: "Antigravity", level: 100, category: "Tools" }
];

export const radarData = [
  { subject: 'LLMs', A: 95, fullMark: 100 },
  { subject: 'RAG', A: 90, fullMark: 100 },
  { subject: 'Agents', A: 92, fullMark: 100 },
  { subject: 'Infra', A: 85, fullMark: 100 },
  { subject: 'Frontend', A: 96, fullMark: 100 },
  { subject: 'Backend', A: 90, fullMark: 100 },
];
