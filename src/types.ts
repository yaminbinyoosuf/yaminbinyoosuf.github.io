export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; id: string; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'callout'; title: string; items: string[] }
  | { type: 'quote'; text: string; citation?: string }
  | { type: 'code'; code: string; caption?: string; lang?: string }
  | { type: 'table'; headers: string[]; rows: string[][] };

export interface Article {
  title: string;
  slug: string;
  date: string;
  formattedDate: string;
  category: 'ALL' | 'AI' | 'ENGINEERING' | 'SYSTEMS' | 'STARTUPS' | 'INFRASTRUCTURE' | 'INDIA' | 'BUILDING' | 'SOCIETY';
  excerpt: string;
  summary?: string;
  readingTime: string;
  content?: string[];
  body?: ArticleBlock[];
  tags: string[];
  toc?: { id: string; text: string; paragraphIndex?: number }[];
  pullQuote?: string;
  codeSnippet?: {
    lang: string;
    code: string;
    caption?: string;
  };
  relatedProjectId?: 'thryvix' | 'cogext';
  relatedTweetId?: string;
  relatedBuildLogId?: string;
  relatedIdeaId?: string;
}

export interface Project {
  id: 'thryvix' | 'cogext';
  number: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  categories: string[];
  linkText: string;
  url: string;
  status: string;
  thesis: string;
  architectureDetails: {
    label: string;
    desc: string;
  }[];
  stack: string[];
  corePrinciple?: string;
  relatedIdeaId?: string;
  relatedTweetId?: string;
  relatedNoteSlug?: string;
  relatedBuildLogId?: string;
}

export interface BuildLogEntry {
  id: string;
  date: string;
  title: string;
  category: string;
  shortDescription: string;
  detailedLog?: string[];
  commitRef?: string;
  tags: string[];
  relatedProjectId?: 'thryvix' | 'cogext';
  relatedArticleSlug?: string;
  relatedTweetId?: string;
}

export interface IdeaItem {
  id: string;
  statement: string;
  date: string;
  category: string;
  context?: string;
  relatedProjectId?: 'thryvix' | 'cogext';
  relatedArticleSlug?: string;
  tweetUrl?: string;
  relatedTweetId?: string;
}

export interface TweetItem {
  id: string;
  number: string;
  date: string;
  text: string;
  url: string;
  category: string;
  isProminent?: boolean;
  devToUrl?: string;
  relatedProjectId?: 'thryvix' | 'cogext';
  relatedArticleSlug?: string;
  relatedBuildLogId?: string;
  relatedIdeaId?: string;
}

export interface ExperimentItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  problem: string;
  hypothesis: string;
  whatIBuilt: string;
  whatHappened: string;
  whatILearned: string;
  status: 'EXPLORING' | 'ACTIVE' | 'SHIPPED' | 'PAUSED';
  tech: string[];
}

export interface GardenQuestion {
  id: string;
  question: string;
  thought: string;
  category: string;
  dateAdded: string;
}
