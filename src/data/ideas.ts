import { IdeaItem } from '../types';

export const IDEAS: IdeaItem[] = [
  {
    id: 'idea-01',
    statement: 'The agent’s output is not evidence. What happened in the real world is.',
    date: 'SEP 2026',
    category: 'AI / VERIFICATION',
    context: 'The agent says it sent the email. Gmail says it didn’t. The agent’s internal log or probabilistic output cannot close its own loop. Only independent confirmation from the external system counts as proof.',
    relatedProjectId: 'cogext',
    relatedArticleSlug: 'the-accountability-problem-with-ai-agents',
    tweetUrl: 'https://x.com/yaminbinyoosuf/status/2099526930735534092',
    relatedTweetId: 'tweet-05'
  },
  {
    id: 'idea-02',
    statement: 'More intelligence eventually means more infrastructure.',
    date: 'SEP 2026',
    category: 'INFRASTRUCTURE',
    context: 'When software generates code, actions, and decisions automatically, the bottleneck shifts entirely to verification, sandbox isolation, external state reconciliation, and execution guardrails. More intelligence demands more plumbing.',
    relatedProjectId: 'cogext',
    relatedArticleSlug: 'why-ai-agents-are-solving-stateful-problems-with-stateless-infrastructure'
  },
  {
    id: 'idea-03',
    statement: 'Organisations remember poorly because memory is attached to people.',
    date: 'SEP 2026',
    category: 'ORGANISATIONAL MEMORY',
    context: 'Every organization is an amnesiac entity that re-solves the same problems every eighteen months because employee context walked out the door. We need to attach memory to infrastructure, not to heads.',
    relatedProjectId: 'thryvix',
    relatedArticleSlug: 'building-organisational-memory',
    tweetUrl: 'https://x.com/yaminbinyoosuf/status/2098790759176810632',
    relatedTweetId: 'tweet-06'
  },
  {
    id: 'idea-04',
    statement: 'Build the infrastructure layer first, then agents earn their hype.',
    date: 'AUG 2026',
    category: 'AI / SYSTEMS',
    context: '30 Trillion TAM. Cool. But AI agents still can’t finish what they start. The line is long because people are building stateless agents on top of stateful problems. Fix the infrastructure layer first.',
    relatedProjectId: 'cogext',
    relatedArticleSlug: 'why-ai-agents-are-solving-stateful-problems-with-stateless-infrastructure',
    tweetUrl: 'https://x.com/yaminbinyoosuf/status/2092267157904339364',
    relatedTweetId: 'tweet-08'
  },
  {
    id: 'idea-05',
    statement: 'The equation for intelligence is changing: useful intelligence per unit of compute.',
    date: 'SEP 2026',
    category: 'AI / PHILOSOPHY',
    context: 'The future won’t be defined by who has the most chips or burns the most megawatts, but by who can turn every unit of compute into more durable, useful intelligence. The equation is going to change.',
    relatedArticleSlug: 'the-equation-for-intelligence-is-changing',
    tweetUrl: 'https://x.com/yaminbinyoosuf/status/2099956649901641855',
    relatedTweetId: 'tweet-02'
  },
  {
    id: 'idea-06',
    statement: 'India doesn’t need another wrapper. It needs infrastructure.',
    date: 'SEP 2026',
    category: 'INDIA / ECOSYSTEM',
    context: 'The temptation to build quick UI wrappers on top of American foundation models is high. But generational, irreversible companies from India will be built by engineers who write the storage engines, verification layers, and core protocols that the rest of the world relies upon.',
    relatedArticleSlug: 'npci-and-the-anatomy-of-irreversible-infrastructure',
    tweetUrl: 'https://x.com/yaminbinyoosuf/status/2100245847397335458',
    relatedTweetId: 'tweet-01'
  }
];

