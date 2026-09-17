import { ExperimentItem } from '../types';

export const EXPERIMENTS: ExperimentItem[] = [
  {
    id: 'exp-01',
    number: 'LAB_01',
    title: 'VOICE PIPELINE',
    subtitle: 'Low-latency full duplex conversational pipeline with barge-in interruption',
    problem: 'Traditional voice AI pipelines (ASR -> LLM -> TTS) have 1200ms+ round-trip latency and break awkwardly whenever a human interrupts the agent.',
    hypothesis: 'By streaming raw PCM audio chunks over binary WebSockets and implementing client-side voice-activity detection (VAD) with instant server cancellation, perceived latency drops below 220ms.',
    whatIBuilt: 'A lightweight FastAPI + WebRTC server with Silero-VAD streaming audio directly into a token-streamed transformer, piping syllables to a local neural audio synthesizer.',
    whatHappened: 'Interruption detection worked within 160ms. However, network jitter on mobile connections occasionally caused synthesized audio artifacts and dropped phonemes.',
    whatILearned: 'Low-latency voice is fundamentally a network jitter buffer problem, not an inference speed problem. Client-side audio interpolation is mandatory.',
    status: 'PAUSED',
    tech: ['Python', 'WebRTC', 'WebSockets', 'VAD', 'Streaming TTS']
  },
  {
    id: 'exp-02',
    number: 'LAB_02',
    title: 'AGENT MEMORY GRAPH',
    subtitle: 'Hierarchical context graph indexing vs flat cosine vector similarity',
    problem: 'Cosine similarity on flat vector embeddings fails when an agent needs to reason about temporal sequence or causal dependency across multiple conversations.',
    hypothesis: 'Structuring conversation logs into an explicit knowledge graph with temporal edges will improve multi-hop retrieval accuracy by over 40% compared to flat RAG.',
    whatIBuilt: 'A dual-indexing engine that creates both dense vector embeddings and a directed acyclic graph (DAG) of entities, events, and causal dependencies.',
    whatHappened: 'Complex queries ("Why did we revert the database migration two weeks after the beta launch?") retrieved the exact causal chain with 91% accuracy, compared to 38% with standard vector search.',
    whatILearned: 'Graph topologies represent human work far better than vector spaces alone. This experiment formed the foundational thesis behind THRYVIX.',
    status: 'SHIPPED',
    tech: ['PostgreSQL', 'pgvector', 'NetworkX', 'FastAPI', 'LLM Graph Extraction']
  },
  {
    id: 'exp-03',
    number: 'LAB_03',
    title: 'COMMITMENT VERIFICATION ENGINE',
    subtitle: 'Deterministic parsing and verification of machine and conversational agreements',
    problem: 'Chat transcripts and agent runs contain hundreds of unverified commitments that slip through the cracks or fail silently without evidence.',
    hypothesis: 'A formal grammar can reliably extract explicit promises ("I will send the invoice by Tuesday") and generate an auditable state machine with automated external evidence checks.',
    whatIBuilt: 'A deterministic parser combined with small language model validation that outputs verifiable commitment schemas with deadlines and cryptographic hashes of referenced documents.',
    whatHappened: 'Successfully tracked 450 real-world operational commitments across a test team, flagging 34 unfulfilled deadlines before human managers noticed.',
    whatILearned: 'Commitments require evidence, not just timestamps. Without verifiable proof of completion, tracking systems become noisy notification spam. This became the basis for COGEXT v2.0.',
    status: 'SHIPPED',
    tech: ['TypeScript', 'Grammar Parsers', 'Audit Ledgers', 'State Machines']
  },
  {
    id: 'exp-04',
    number: 'LAB_04',
    title: 'ORGANISATIONAL EVENT STREAM',
    subtitle: 'Append-only event sourcing for company decisions and rationale',
    problem: 'Organizations constantly forget why previous architectural and business decisions were made, leading to repeated failures.',
    hypothesis: 'An append-only event stream capturing the context, alternatives considered, and rationale behind architectural decisions can survive employee turnover without friction.',
    whatIBuilt: 'A lightweight CLI and webhook listener that captures operational traces in markdown format, automatically generating causal dependency matrices.',
    whatHappened: 'Manual logging proved too brittle during high-pressure weeks, confirming that extraction must happen passively from raw communication channels.',
    whatILearned: 'Manual documentation always dies under pressure. Organisational memory capture must be 100% passive and continuous at the protocol layer.',
    status: 'ACTIVE',
    tech: ['CLI', 'Event Sourcing', 'Git Hooks', 'Markdown Automation']
  },
  {
    id: 'exp-05',
    number: 'LAB_05',
    title: 'DETERMINISTIC VERIFICATION SANDBOX',
    subtitle: 'Isolated micro-VM execution harness for testing unverified agent claims',
    problem: 'Autonomous agents frequently claim execution success for code or command-line jobs without verifying side effects in clean state environments.',
    hypothesis: 'A sub-50ms Firecracker micro-VM snapshot can spin up, execute the agent’s claimed script, verify filesystem diffs, and self-terminate without system latency overhead.',
    whatIBuilt: 'A prototype worker node pool that spawns ephemeral Linux micro-VMs from cached memory snapshots, capturing standard out, standard error, and filesystem mutations.',
    whatHappened: 'Average sandbox boot and verification time reached 42ms. Caught 14 silent command failures in synthetic agent tests.',
    whatILearned: 'Micro-VMs are fast enough to be placed directly in the critical path of autonomous agent tool dispatch.',
    status: 'EXPLORING',
    tech: ['Rust', 'Firecracker', 'Linux Namespaces', 'TypeScript']
  }
];

