import { Article } from '../types';

export const ARTICLES: Article[] = [
  {
    title: 'The accountability problem with AI agents',
    slug: 'the-accountability-problem-with-ai-agents',
    date: '2026-09-17',
    formattedDate: 'September 17, 2026',
    category: 'AI',
    readingTime: '7 min read',
    excerpt: 'An AI agent without verifiable accountability is just an automated promise. The agent says it sent the email. Gmail says it didn’t. Why internal reasoning traces are not evidence.',
    pullQuote: 'The agent’s output is not evidence. What happened in the real world is.',
    toc: [
      { id: 'the-illusion-of-autonomy', text: 'The illusion of autonomy' },
      { id: 'probabilistic-promises', text: 'Probabilistic outputs vs deterministic reality' },
      { id: 'the-verification-gap', text: 'The verification gap' },
      { id: 'the-five-subsystems', text: 'The 5 subsystems of machine accountability' },
      { id: 'the-future-of-work', text: 'Where the industry goes next' }
    ],
    codeSnippet: {
      lang: 'typescript',
      caption: 'COGEXT Verifier Loop: Enforcing external confirmation before state transition closes',
      code: `// The agent says it sent the email. Gmail says it didn’t.
// The agent cannot close its own loop.
async function verifyCommitment(commitment: AgentCommitment): Promise<AuditReceipt> {
  const externalEvidence = await ExternalProvider.query({
    provider: commitment.targetSystem, // e.g. 'gmail_api' | 'stripe'
    criteria: commitment.acceptanceProof,
    expectedTimestampWindow: commitment.timeRange
  });

  if (!externalEvidence.confirmed) {
    // Abort with deterministic conflict. Agent output is rejected as proof.
    throw new VerificationFailureException({
      code: 409,
      reason: 'TRANSITION_REJECTED: External state mismatch',
      claimedState: commitment.agentClaim,
      externalState: externalEvidence.rawResponse
    });
  }

  return AuditReceipt.seal(commitment, externalEvidence);
}`
    },
    tags: ['AI Infrastructure', 'Verification', 'COGEXT', 'Distributed Systems'],
    relatedProjectId: 'cogext',
    relatedTweetId: 'tweet-05',
    relatedBuildLogId: 'log-02',
    relatedIdeaId: 'idea-01',
    content: [
      "Over the past eighteen months, the tech industry has become captivated by autonomous AI agents. Systems that plan, tool-call, and supposedly execute real work on behalf of enterprises.",
      "Yet when you look under the hood of production agent deployments, you find an uncomfortable truth: we are chaining non-deterministic language models to production databases and external APIs with virtually zero formal accountability.",
      "The agent says it sent the email. Gmail says it didn't. The agent says the database migration ran. PostgreSQL says the table was dropped. Who audits the agent? In most architectures today, the agent audits itself by inspecting its own thought scratchpad.",
      "This is a fatal architectural flaw. The agent's output is not evidence. What happened in the real world is.",
      "In classical distributed computing, we solved consistency through protocols like Paxos, Raft, and write-ahead logs. We never accepted a node's word that a commit succeeded without an evidentiary quorum. Why should an autonomous LLM agent be granted more blind trust than a simple key-value database?",
      "At COGEXT, we set out to build the external accountability layer for autonomous machine work. If an agent promises an outcome, it cannot mark that commitment as fulfilled until an independent verifier queries the external system of record, matches deterministic criteria, and issues a cryptographically verifiable Audit Receipt.",
      "The next decade will not belong to the agents that talk the most convincingly. It will belong to the infrastructure that makes their promises verifiable."
    ]
  },
  {
    title: 'The equation for intelligence is changing',
    slug: 'the-equation-for-intelligence-is-changing',
    date: '2026-09-15',
    formattedDate: 'September 15, 2026',
    category: 'AI',
    readingTime: '6 min read',
    excerpt: 'The future of AI won’t be defined by who has the most chips or burns the most megawatts, but by who can turn every unit of compute into more useful intelligence.',
    pullQuote: 'The future won’t be defined by who burns the most energy, but by who turns every unit of compute into useful intelligence.',
    toc: [
      { id: 'the-brute-force-era', text: 'The end of brute force scaling' },
      { id: 'useful-intelligence-defined', text: 'Defining useful intelligence per compute' },
      { id: 'infrastructure-bottleneck', text: 'Why the bottleneck moved to verification' },
      { id: 'the-next-five-years', text: 'The next 5 years' }
    ],
    tags: ['Compute Efficiency', 'Intelligence Equation', 'AI Systems', 'Philosophy'],
    relatedTweetId: 'tweet-02',
    relatedIdeaId: 'idea-05',
    content: [
      "For the last four years, the prevailing wisdom in artificial intelligence has been simple: scale. More cluster parameters, more H100s, more gigawatts of power, more token corpus.",
      "In the next 5 years, I believe we’ll see a new equation for intelligence.",
      "Brute force parameter scaling hits thermodynamic and financial realities. When an enterprise is spending millions on model inference, they quickly discover that 90% of model energy is wasted re-generating things the model already knew, or hallucinations that downstream systems have to filter out.",
      "The future won't be defined by who has the most chips or burns the most energy, but by who can turn every unit of compute into more useful intelligence.",
      "What is 'useful intelligence'? It is intelligence that closes loops. It is intelligence that produces deterministic state changes, verifies its own assertions against external reality, and leaves behind an auditable trace.",
      "When you optimize for useful intelligence per unit of compute, the architectural priority shifts dramatically: from monolithic foundation models to small, agile reasoning models coupled with robust verification and memory infrastructure.",
      "The equation is going to change. And builders who prepare for the efficiency and infrastructure era will outlast those relying on infinite compute budgets."
    ]
  },
  {
    title: 'Why AI agents are solving stateful problems with stateless infrastructure',
    slug: 'why-ai-agents-are-solving-stateful-problems-with-stateless-infrastructure',
    date: '2026-08-25',
    formattedDate: 'August 25, 2026',
    category: 'INFRASTRUCTURE',
    readingTime: '8 min read',
    excerpt: '30 Trillion TAM. Cool. But AI agents still can’t finish what they start. The line is long for “AI Agent” because people are building stateless agents on top of stateful problems.',
    pullQuote: 'The line is long for “AI Agent” because people are building stateless agents on top of stateful problems. Fix the infrastructure layer first.',
    toc: [
      { id: 'the-30-trillion-tam', text: 'The $30 Trillion illusion' },
      { id: 'the-stateless-trap', text: 'The stateless agent trap' },
      { id: 'what-enterprise-state-requires', text: 'What enterprise state actually requires' },
      { id: 'infrastructure-first', text: 'Fixing the infrastructure layer first' }
    ],
    tags: ['AI Agents', 'State Management', 'Enterprise Systems', 'Infrastructure'],
    relatedProjectId: 'cogext',
    relatedTweetId: 'tweet-08',
    relatedIdeaId: 'idea-04',
    content: [
      "Venture presentations love to proclaim a '$30 Trillion Total Addressable Market' for autonomous knowledge work. It is an impressive number. But AI agents still cannot finish what they start.",
      "They lose track of their commitments. They drop context across long-running API tasks. They promise an outcome, encounter a rate limit, hallucinate a completion state, and quietly terminate without notifying the user.",
      "Why does this keep happening? Because the entire ecosystem is trying to solve fundamentally stateful enterprise problems with stateless infrastructure.",
      "An LLM call is stateless by definition. You feed it a prompt token array, it returns a completion, and the runtime context ceases to exist. Developers attempt to paper over this with vector retrieval and ephemeral chat history arrays. But real business processes are not chat histories.",
      "Real business processes are state machines: transactions with lock phases, idempotency requirements, multi-day temporal latencies, and explicit failure recoveries.",
      "Until we build infrastructure that tracks the lifecycle of an agent's commitments, persists operational state across disconnects, and demands external verification before closing loops, agents will remain entertaining demos.",
      "Fix the infrastructure layer first. Then agents earn their hype."
    ]
  },
  {
    title: 'Building organisational memory',
    slug: 'building-organisational-memory',
    date: '2026-09-12',
    formattedDate: 'September 12, 2026',
    category: 'SYSTEMS',
    readingTime: '7 min read',
    excerpt: 'THRYVIX isn’t just health tech. Health is our first vertical. The bigger vision is organisational memory infrastructure that helps organisations preserve, understand, and use the knowledge they create.',
    pullQuote: 'Organisations remember poorly because memory is attached to people. We make memory attached to infrastructure.',
    toc: [
      { id: 'why-organisations-forget', text: 'Why organisations suffer from amnesia' },
      { id: 'why-health-first', text: 'Why health is our first vertical' },
      { id: 'context-at-the-source', text: 'Capturing context without manual logging' },
      { id: 'the-larger-thesis', text: 'The larger direction of THRYVIX' }
    ],
    tags: ['THRYVIX', 'Organisational Memory', 'Health Tech', 'Systems Design'],
    relatedProjectId: 'thryvix',
    relatedTweetId: 'tweet-06',
    relatedBuildLogId: 'log-04',
    relatedIdeaId: 'idea-03',
    content: [
      "Every modern organisation is an amnesiac entity. They solve the same operational problems every eighteen months because the engineer, physician, or operator who figured it out the first time walked out the door or switched departments.",
      "We try to solve this with documentation. We create Notion workspaces, Confluence pages, and Jira tickets. But documentation is an unnatural human act. When work gets intense, nobody stops to write a clean retrospective. Memory evaporates into transient chats and meetings.",
      "Here is what I believe we’re actually building with THRYVIX: THRYVIX isn't just health tech. Health is our first vertical.",
      "We chose health first because the consequences of memory failure in healthcare are immediate and severe. When a clinician hands off a patient, missing operational and diagnostic context degrades care. If you can build persistent memory infrastructure that physicians trust without forcing them to spend two hours typing notes, you have solved the hardest problem in enterprise state.",
      "The bigger vision is organisational memory infrastructure that helps organisations preserve, understand, and use the knowledge they create.",
      "Instead of forcing people to log what they did, THRYVIX ingests communication and operational streams directly, maps the causal relationships, and constructs a permanent institutional memory graph.",
      "When organisations can remember, software stops being a passive tool and becomes an active institutional partner."
    ]
  },
  {
    title: 'What shipping COGEXT taught me about verification',
    slug: 'what-shipping-cogext-taught-me-about-verification',
    date: '2026-09-14',
    formattedDate: 'September 14, 2026',
    category: 'ENGINEERING',
    readingTime: '8 min read',
    excerpt: 'COGEXT v2.0 is live with 5 core features and 8/8 tests passed in production. What happens when an autonomous agent tries to force-fulfill a commitment without evidence.',
    pullQuote: 'The agent says it sent the email. Gmail says it didn’t. This is the whole product in one post.',
    toc: [
      { id: 'the-five-features', text: 'The 5 features of COGEXT v2.0' },
      { id: 'how-the-verifier-works', text: 'How the Verifier Engine works' },
      { id: 'the-http-409-experiment', text: 'The HTTP 409 Conflict experiment' },
      { id: 'kill-switch-and-contradiction', text: 'Kill Switch and Contradiction Radar' }
    ],
    codeSnippet: {
      lang: 'bash',
      caption: 'Simulation test: Agent attempts forced fulfillment without evidence payload',
      code: `$ curl -X POST https://api.cogextai.com/v2/commitments/com_982b1/fulfill \\
  -H "Authorization: Bearer agent_tok_live" \\
  -H "Content-Type: application/json" \\
  -d '{"claim": "Invoice email delivered to client", "evidence": null}'

HTTP/2 409 Conflict
Content-Type: application/json
{
  "status": "REJECTED",
  "error": "UNVERIFIED_FULFILLMENT_BLOCKED",
  "subsystem": "VERIFIER_ENGINE",
  "audit": {
    "target": "gmail_api",
    "verified_in_real_world": false,
    "kill_switch_status": "ARMED",
    "receipt": null
  },
  "message": "The agent’s output is not evidence. What happened in the real world is."
}`
    },
    tags: ['COGEXT', 'Verification', 'Engineering', 'Production'],
    relatedProjectId: 'cogext',
    relatedTweetId: 'tweet-03',
    relatedBuildLogId: 'log-01',
    content: [
      "Last week, COGEXT v2.0 went live in production. 5 features. 8 out of 8 integration test suites passed.",
      "The five subsystems we shipped:",
      "1. Verifier Engine: Checks external reality (Gmail, Stripe, PostgreSQL), not what the agent claims happened.",
      "2. Kill Switch: Shuts down autonomous runtime permissions the microsecond an anomaly or threshold trip occurs.",
      "3. Contradiction Radar: Detects subtle logical drifts between the agent's explicit promise and its execution trail.",
      "4. Failure Predictor: Statistical pre-flight check flagging unfulfillable promises before API calls dispatch.",
      "5. Audit Receipt: Cryptographically sealed ledger proving what actually happened.",
      "The core architectural insight can be summarized in one interaction: The agent says it sent the email. Gmail says it didn't.",
      "When we tested adversarial agent behavior—attempting to force-fulfill a task by outputting 'Email successfully dispatched' without evidence—the verifier returned HTTP 409 Conflict. The transaction was aborted. The agent could not close its own loop.",
      "Building this taught me that the hardest part of AI engineering isn't prompt engineering. It is building rock-solid deterministic harnesses around non-deterministic engines."
    ]
  },
  {
    title: 'Building a company when you’re the entire company',
    slug: 'building-a-company-when-youre-the-entire-company',
    date: '2026-09-02',
    formattedDate: 'September 02, 2026',
    category: 'STARTUPS',
    readingTime: '6 min read',
    excerpt: 'Solitude in engineering is where original architecture forms. Reflections on solo founder conviction, building deep infrastructure, and staying outside consensus in Kerala, India.',
    pullQuote: 'Hiring too early does not accelerate product discovery; it turns unvalidated technical hypotheses into coordination meetings.',
    toc: [
      { id: 'the-consensus-trap', text: 'The Silicon Valley consensus trap' },
      { id: 'solo-architecture', text: 'Why solo engineering produces tighter systems' },
      { id: 'building-from-kerala', text: 'Building from Kerala, India' },
      { id: 'the-honest-standard', text: 'The honest standard of building' }
    ],
    tags: ['Solo Founder', 'Startups', 'Kerala', 'Independent Builder'],
    relatedBuildLogId: 'log-05',
    content: [
      "There is an orthodox view in tech that the first metric of progress is headcount. You write job postings, set up interview loops, and celebrate team expansion before the core software even compiles.",
      "I have chosen a radically different path while building THRYVIX and COGEXT from Kerala.",
      "When you are in the 0-to-1 phase of deep infrastructure, your most valuable asset is not headcount—it is architectural coherence. A single mind holding the entire stack, from the database schema down to the UI interaction model, can make radical systemic pivots in minutes without scheduling three sync meetings.",
      "Building solo forces extreme honesty. You cannot delegate away broken abstractions. If your deployment scripts are brittle, your own screen freezes at 2 AM. If the API is confusing, you feel the friction immediately. That tight sensory feedback loop produces durable code.",
      "Building from Malappuram, Kerala provides natural insulation from Silicon Valley hype cycles. You don't build features just because everyone on Twitter is talking about them this week. You build what solves real, stubborn operational problems.",
      "When the foundations are solid and the engine is running in production, expansion is earned. Until then, stay lean, stay focused, and build from first principles."
    ]
  },
  {
    title: 'NPCI and the anatomy of irreversible infrastructure',
    slug: 'npci-and-the-anatomy-of-irreversible-infrastructure',
    date: '2026-09-16',
    formattedDate: 'September 16, 2026',
    category: 'INDIA',
    readingTime: '7 min read',
    excerpt: 'NPCI built an incredible funnel: make digital payments free, get billions of transactions flowing, make businesses dependent on the rails, then monetize the ecosystem around it.',
    pullQuote: 'Once everyone is inside the system, going back becomes almost impossible.',
    toc: [
      { id: 'the-npci-funnel', text: 'The genius of the NPCI funnel' },
      { id: 'irreversible-rails', text: 'What makes infrastructure irreversible' },
      { id: 'monetizing-the-periphery', text: 'Monetizing the ecosystem around the free core' },
      { id: 'lessons-for-builders', text: 'What software founders can learn' }
    ],
    tags: ['NPCI', 'UPI', 'India Stack', 'Infrastructure', 'Systems'],
    relatedTweetId: 'tweet-01',
    relatedIdeaId: 'idea-06',
    content: [
      "Yesterday, I wrote a note on X about the National Payments Corporation of India (NPCI) and the architecture of UPI.",
      "NPCI built an incredible funnel: make digital payments free, get billions of transactions flowing, make businesses and users dependent on the infrastructure, then monetize the ecosystem around it.",
      "Once everyone is inside the system, going back becomes almost impossible.",
      "Think about the audacity of that architectural strategy. Instead of extracting micro-tolls at the gate when adoption was fragile, India built digital public goods that eliminated transaction friction entirely. The merchant didn't have to buy a costly POS terminal; the street vendor could print a QR code on laminated paper.",
      "By keeping the core transaction rail zero-cost, NPCI established irrevocable network gravity. Today, banks, fintech unicorns, global giants like Google and Walmart, and hundreds of millions of citizens are deeply embedded in the rails.",
      "Now, the monetization doesn't come from taxing UPI transactions directly; it comes from credit on UPI, merchant value-added services, cross-border settlements, and the surrounding financial ecosystem.",
      "For software founders in India, this is the blueprint: don't build shallow wrappers that can be commoditized overnight. Build deep, irreversible infrastructure that sits at the center of critical operational flows."
    ]
  },
  {
    title: 'Why I still like building everything myself',
    slug: 'why-i-still-like-building-everything-myself',
    date: '2026-09-04',
    formattedDate: 'September 04, 2026',
    category: 'BUILDING',
    readingTime: '6 min read',
    excerpt: 'Modern web development has outsourced basic understanding to hundreds of megabytes of dependencies. Why writing from first principles produces better software.',
    pullQuote: 'When you build something from scratch, you don’t just acquire a feature. You acquire the mental model of the failure modes.',
    toc: [
      { id: 'the-dependency-delusion', text: 'The dependency delusion' },
      { id: 'knowing-the-edges', text: 'Knowing where the edges break' },
      { id: 'long-term-speed', text: 'Long-term speed vs immediate convenience' }
    ],
    tags: ['First Principles', 'TypeScript', 'Systems Design', 'Craft'],
    content: [
      "A junior developer imports a library to center a modal. A mid-level engineer installs an entire state management framework to pass a boolean through three components. A systems engineer asks: how few moving parts can this system possibly have?",
      "As a self-taught engineer who learned by dissecting running systems rather than memorizing textbook proofs, I developed a visceral aversion to black boxes.",
      "When you pull in an external dependency for a core operational concern, you are not saving time; you are taking a loan against future debugging sessions. You now depend on the maintenance habits and architectural tastes of strangers whose constraints rarely match your own.",
      "When you write the code yourself, you know every single allocation. When latency spikes in production, you don't file a GitHub issue and wait three weeks. You open the file, inspect the loop, and fix the memory leak.",
      "There is deep dignity and operational advantage in understanding the ground beneath your code."
    ]
  }
];
