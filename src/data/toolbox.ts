export interface ToolItem {
  name: string;
  category: 'BACKEND' | 'FRONTEND' | 'DATABASE & CLOUD' | 'AI & PROTOCOLS';
  usage: string;
  focus: string;
}

export const TOOLBOX_ITEMS: ToolItem[] = [
  {
    name: 'Python',
    category: 'BACKEND',
    usage: 'Core backend services, data pipelines, graph manipulation, and agent execution runtimes.',
    focus: 'Asyncio · Typing · Pydantic'
  },
  {
    name: 'FastAPI',
    category: 'BACKEND',
    usage: 'High-throughput async REST & WebSocket gateways powering THRYVIX and COGEXT microservices.',
    focus: 'Low latency · OpenAPI schema · WebSockets'
  },
  {
    name: 'TypeScript',
    category: 'FRONTEND',
    usage: 'Primary language for all client applications, contract verification logic, and strict schema validation.',
    focus: 'Strict typing · AST parsers · Isomorphic runtimes'
  },
  {
    name: 'React',
    category: 'FRONTEND',
    usage: 'Building clean, high-density interfaces, interactive dashboards, and real-time visualization views.',
    focus: 'Hooks · State primitives · Custom rendering'
  },
  {
    name: 'PostgreSQL',
    category: 'DATABASE & CLOUD',
    usage: 'Primary relational and vector storage engine with strict consistency, ACID guarantees, and JSONB graph models.',
    focus: 'pgvector · Indexing · Connection pooling'
  },
  {
    name: 'Docker',
    category: 'DATABASE & CLOUD',
    usage: 'Reproducible local development, isolated worker execution sandboxes, and immutable production images.',
    focus: 'Multi-stage builds · Minimal images · Alpine'
  },
  {
    name: 'AWS',
    category: 'DATABASE & CLOUD',
    usage: 'Core cloud footprint: EC2 compute, RDS PostgreSQL clusters, S3 persistence, and VPC networking.',
    focus: 'VPC peering · Security groups · IAM'
  },
  {
    name: 'Cloudflare',
    category: 'DATABASE & CLOUD',
    usage: 'Global edge routing, DNS, DDoS mitigation, and low-latency edge worker orchestration.',
    focus: 'Edge workers · DNS · SSL/TLS termination'
  },
  {
    name: 'LLMs',
    category: 'AI & PROTOCOLS',
    usage: 'Semantic extraction, graph entity deduction, natural language parsing, and conversational synthesis.',
    focus: 'Prompt engineering · Function calling · Structured outputs'
  },
  {
    name: 'Voice AI',
    category: 'AI & PROTOCOLS',
    usage: 'Full duplex voice interaction pipelines with streaming STT, LLM reasoning, and neural TTS synthesis.',
    focus: 'WebRTC · Silero VAD · Streaming latency < 200ms'
  },
  {
    name: 'WhatsApp APIs',
    category: 'AI & PROTOCOLS',
    usage: 'Direct-to-consumer conversational channels for business context ingestion and automated task updates.',
    focus: 'Webhook listeners · Media upload · Session management'
  }
];
