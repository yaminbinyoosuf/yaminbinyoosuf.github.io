import { GardenQuestion } from '../types';

export const GARDEN_QUESTIONS: GardenQuestion[] = [
  {
    id: 'g-01',
    question: 'Can software maintain organisational memory indefinitely?',
    thought: 'Human institutions die when original knowledge fades into myth. If software can continuously observe operational changes, extract underlying trade-offs, and reconcile contradictions over decades, could a 100-year-old institution operate with the agility of day one?',
    category: 'INSTITUTIONAL MEMORY',
    dateAdded: 'SEP 2026'
  },
  {
    id: 'g-02',
    question: 'How should AI agents prove that something actually happened?',
    thought: 'The world runs on contracts and receipts. If autonomous systems cannot generate non-repudiable cryptographic proof of what they executed, their real-world utility in finance, law, and critical infrastructure will remain severely capped.',
    category: 'AGENT VERIFICATION',
    dateAdded: 'AUG 2026'
  },
  {
    id: 'g-03',
    question: 'What infrastructure does a world full of AI require?',
    thought: 'Everyone is thinking about GPU compute. Far fewer people are thinking about state persistence, cache coherence, audit trails, and execution safety when millions of synthetic agents generate petabytes of transient decisions every second.',
    category: 'INFRASTRUCTURE',
    dateAdded: 'JUL 2026'
  },
  {
    id: 'g-04',
    question: 'What does it mean to build technology from India?',
    thought: 'Not serving as an outsourcing back-office, and not building cheap domestic clones of Silicon Valley apps. True technological sovereignty comes from writing fundamental protocols, distributed databases, and core AI infrastructure from first principles.',
    category: 'SOVEREIGNTY & CRAFT',
    dateAdded: 'JUN 2026'
  }
];

export const MENTAL_MODELS = [
  {
    name: 'Asymmetric Verification',
    principle: 'Generating a solution can be non-deterministic and probabilistic, but verification must always be deterministic and binary.'
  },
  {
    name: 'Passive Ingestion Over Manual Logging',
    principle: 'Any operational documentation system that requires humans to fill forms will inevitably rot. Ingestion must happen invisibly at the communication layer.'
  },
  {
    name: 'State Coherence Over Headcount',
    principle: 'A small group or solo builder with a single unfragmented mental model of the codebase will consistently ship faster than a fragmented team of twenty.'
  }
];
