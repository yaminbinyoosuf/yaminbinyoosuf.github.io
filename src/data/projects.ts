import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'thryvix',
    number: '01',
    title: 'THRYVIX',
    tagline: 'Your organisation finally has memory.',
    description: 'THRYVIX is building organisational intelligence infrastructure. Health is the first vertical. The larger direction is infrastructure that helps organisations preserve, understand, and use the knowledge they create.',
    year: '2026',
    role: 'Founder',
    categories: ['Software', 'AI', 'Organisational Memory', 'Infrastructure'],
    linkText: 'thryvixai.com',
    url: 'https://thryvixai.com',
    status: 'ACTIVE DEVELOPMENT',
    thesis: 'Every modern organisation leaks critical knowledge through fragmented communications, clinical documents, and human turnover. THRYVIX captures operational and diagnostic context at the point of origin, creating persistent organizational intelligence so teams preserve, understand, and use the knowledge they create.',
    corePrinciple: 'Organisations remember poorly because memory is attached to people. We make memory attached to infrastructure.',
    architectureDetails: [
      {
        label: 'Clinical & Operational Memory Ingestion',
        desc: 'Extracts decisions, implicit commitments, and operational context directly from real-time communication streams and clinical records without manual logging overhead.'
      },
      {
        label: 'Causal Graph Reconciliation Layer',
        desc: 'Reconciles conflicting signals across team channels and turns temporal events into an indexed causal entity-relationship graph.'
      },
      {
        label: 'Zero-Drift Knowledge Retainer',
        desc: 'Sub-system designed to ensure clinical state and organisational facts retain strict provenance, contextual recall, and deterministic auditability.'
      }
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'TypeScript', 'Docker', 'AWS', 'LLMs'],
    relatedIdeaId: 'idea-03',
    relatedTweetId: 'tweet-06',
    relatedNoteSlug: 'building-organisational-memory',
    relatedBuildLogId: 'log-04'
  },
  {
    id: 'cogext',
    number: '02',
    title: 'COGEXT',
    tagline: 'The accountability layer for machine intelligence.',
    description: 'COGEXT extracts commitments, tracks their lifecycle, verifies evidence, and creates an auditable record for machine-generated work.',
    year: '2026',
    role: 'Founder',
    categories: ['AI', 'Verification', 'Infrastructure', 'Systems'],
    linkText: 'cogextai.com',
    url: 'https://cogextai.com',
    status: 'VERSION 2.0 LIVE',
    thesis: 'As autonomous AI agents execute tasks across systems, businesses cannot operate on probabilistic claims. The agent says it sent the email; Gmail says it didn’t. The agent’s output is not evidence. What happened in the real world is. COGEXT enforces an external verification loop before state transitions close.',
    corePrinciple: 'The agent’s output is not evidence. What happened in the real world is.',
    architectureDetails: [
      {
        label: 'Verifier Engine',
        desc: 'Checks external reality (e.g. Gmail API, Stripe, DB transaction log), not what the agent claims happened.'
      },
      {
        label: 'Kill Switch',
        desc: 'Circuit breaker mechanism that immediately freezes autonomous runtime permissions when anomaly or contradiction thresholds trip.'
      },
      {
        label: 'Contradiction Radar',
        desc: 'Continuous real-time differential analysis between the agent’s stated commitment and its actual runtime traces.'
      },
      {
        label: 'Failure Predictor',
        desc: 'Statistical pre-flight engine that models execution probability and predicts unfulfillable commitments before tasks are dispatched.'
      },
      {
        label: 'Audit Receipt',
        desc: 'Cryptographically sealed receipt proving what the agent did, which external system confirmed it, and exact temporal timestamps.'
      }
    ],
    stack: ['TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Distributed State', 'REST/Webhooks'],
    relatedIdeaId: 'idea-01',
    relatedTweetId: 'tweet-05',
    relatedNoteSlug: 'the-accountability-problem-with-ai-agents',
    relatedBuildLogId: 'log-02'
  }
];

