export interface Question {
  id: number;
  text: string;
}

export interface Dimension {
  id: string;
  name: string;
  subtitle: string;
  questions: Question[];
  threshold: number; // score at or below this = show reflection
  reflection: string;
  reflectionPrompt: string;
}

export type Status = "green" | "amber" | "red";

export interface DimensionResult {
  dimension: Dimension;
  score: number;
  maxScore: number;
  status: Status;
  percentage: number;
}

export interface PatternInterpretation {
  id: string;
  label: string;
  description: string;
  condition: (results: DimensionResult[]) => boolean;
}

export interface ValueType {
  id: string;
  name: string;
  tagline: string;
  decisionMaker: string;
  proofRequired: string;
  closingSpeed: string;
  warningSign: string;
}

export const DIMENSIONS: Dimension[] = [
  {
    id: "articulation-clarity",
    name: "Articulation Clarity",
    subtitle:
      "Can you say it in one sentence a buyer would repeat?",
    questions: [
      {
        id: 1,
        text: "Can you express your value proposition in a single sentence — without jargon, acronyms, or technical architecture?",
      },
      {
        id: 2,
        text: "Does your value proposition describe an outcome the buyer gets, rather than a feature your product has?",
      },
      {
        id: 3,
        text: "Could your buyer repeat your value proposition to their boss in a sentence that would make the boss want to learn more?",
      },
      {
        id: 4,
        text: "If you removed your company name from your value proposition, would it still be clear that it's about you — not a competitor?",
      },
    ],
    threshold: 2,
    reflection:
      "Your value proposition is either too complex to transmit or too generic to differentiate. In enterprise sales, your champion must sell internally without you in the room. If they can't repeat your value in one sentence, the deal dies in a corridor conversation.",
    reflectionPrompt:
      "What would your best customer say if someone asked them 'why did you buy this'?",
  },
  {
    id: "buyer-centricity",
    name: "Buyer-Centricity",
    subtitle:
      "Is the value framed in the buyer's world, not yours?",
    questions: [
      {
        id: 5,
        text: "Does your value proposition describe the buyer's problem before it describes your solution?",
      },
      {
        id: 6,
        text: "Is the language in your value proposition drawn from how buyers describe the problem — not how your team describes the product?",
      },
      {
        id: 7,
        text: "Does your value proposition address a pain the buyer already knows they have — rather than a problem you need to educate them about?",
      },
      {
        id: 8,
        text: "Have you validated that your value proposition resonates with buyers through direct feedback (not just internal team agreement)?",
      },
    ],
    threshold: 2,
    reflection:
      "You're describing what you built, not what the buyer needs. The most common value proposition failure is a product description disguised as a benefit statement. Buyers don't care about your architecture — they care about their problem.",
    reflectionPrompt:
      "Read your current pitch deck's first three slides. Count how many sentences start with 'we' versus 'you'. If 'we' dominates, you're pitching inward.",
  },
  {
    id: "differentiation",
    name: "Differentiation",
    subtitle:
      "Does your buyer know why you and not the alternatives?",
    questions: [
      {
        id: 9,
        text: "Can you name the specific alternatives your buyer considers — including doing nothing, using Excel, or hiring someone?",
      },
      {
        id: 10,
        text: "Can you articulate what you do that those specific alternatives cannot — in terms the buyer cares about?",
      },
      {
        id: 11,
        text: "Is your differentiation grounded in something defensible (proprietary data, unique access, regulatory advantage, network effects) rather than just execution quality?",
      },
      {
        id: 12,
        text: "If a competitor described their product using your value proposition's words, would it still sound like it's about you?",
      },
    ],
    threshold: 2,
    reflection:
      "Your value proposition doesn't answer the question that matters most: 'compared to what?' Every buyer has alternatives — including doing nothing. If your value proposition doesn't defeat the alternatives in the buyer's mind, you're competing on price or relationships, neither of which scales.",
    reflectionPrompt:
      "When a prospect chose not to buy from you, what did they do instead? That's your real competitor.",
  },
  {
    id: "quantifiability",
    name: "Quantifiability",
    subtitle:
      "Can the buyer build an internal business case from your value?",
    questions: [
      {
        id: 13,
        text: "Can you attach a number to the value you create for the buyer (cost saved, revenue generated, time recovered, risk reduced)?",
      },
      {
        id: 14,
        text: "Is that number based on actual client outcomes rather than projections or estimates?",
      },
      {
        id: 15,
        text: "Could your buyer use that number to justify the purchase in a budget request or business case?",
      },
      {
        id: 16,
        text: "Do you know the ROI framing your buyer needs to hear — not the one you prefer to tell?",
      },
    ],
    threshold: 2,
    reflection:
      "Your value proposition creates conviction but not budget. In enterprise sales, the champion's internal task is to write a business case. If your value can't be quantified in terms the finance team accepts, the deal stalls at procurement — not because they don't believe you, but because they can't prove it.",
    reflectionPrompt:
      "What number would appear in the subject line of the email your champion sends to their CFO to justify this purchase?",
  },
  {
    id: "value-type-alignment",
    name: "Value Type Alignment",
    subtitle:
      "Does the value you articulate match the value your buyer decides on?",
    questions: [
      {
        id: 17,
        text: "Do you know which type of value your buyer primarily makes decisions on — financial impact, operational efficiency, strategic positioning, compliance/credibility, or team wellbeing?",
      },
      {
        id: 18,
        text: "Does your pitch lead with the value type your buyer decides on — not the one you find most impressive about your product?",
      },
      {
        id: 19,
        text: "If your product delivers multiple types of value, have you identified which one closes the deal versus which ones are supporting arguments?",
      },
      {
        id: 20,
        text: "Have you tested whether changing the value framing (e.g., from operational efficiency to financial impact) changes buyer engagement?",
      },
    ],
    threshold: 2,
    reflection:
      "You're articulating the value you're proud of. Your buyer is deciding on different value entirely. This is the most common — and most invisible — value proposition failure. A startup that pitches operational elegance to a buyer who decides on financial impact will get enthusiastic demos and no contracts.",
    reflectionPrompt:
      "Think about your last won deal. What number or outcome did the buyer's internal champion use to justify the purchase? That's your actual value type — regardless of what your pitch deck says.",
  },
];

export const PATTERN_INTERPRETATIONS: PatternInterpretation[] = [
  {
    id: "clear-but-generic",
    label: "Clear but generic",
    description:
      "Your value proposition is clean and clear — but a competitor could say the same thing. Clarity without differentiation is a category description, not a competitive position.",
    condition: (results) => {
      const art = results.find((r) => r.dimension.id === "articulation-clarity");
      const diff = results.find((r) => r.dimension.id === "differentiation");
      return (
        art !== undefined &&
        diff !== undefined &&
        art.status === "green" &&
        diff.status === "red"
      );
    },
  },
  {
    id: "internally-validated",
    label: "Internally validated",
    description:
      "Your value proposition sounds right to you and resonates with buyers in conversation. But it can't survive the internal business case process. The champion who loves your product needs a number to put in a budget request.",
    condition: (results) => {
      const art = results.find((r) => r.dimension.id === "articulation-clarity");
      const buyer = results.find((r) => r.dimension.id === "buyer-centricity");
      const quant = results.find((r) => r.dimension.id === "quantifiability");
      return (
        art !== undefined &&
        buyer !== undefined &&
        quant !== undefined &&
        (art.status === "green" || art.status === "amber") &&
        (buyer.status === "green" || buyer.status === "amber") &&
        quant.status === "red"
      );
    },
  },
  {
    id: "value-type-mismatch",
    label: "Value type mismatch",
    description:
      "You're describing value from your perspective, not the buyer's — and the type of value you lead with doesn't match how the buyer makes decisions. This is a compounding problem: the framing is wrong AND it's aimed at the wrong value type.",
    condition: (results) => {
      const vta = results.find((r) => r.dimension.id === "value-type-alignment");
      const buyer = results.find((r) => r.dimension.id === "buyer-centricity");
      return (
        vta !== undefined &&
        buyer !== undefined &&
        vta.status === "red" &&
        buyer.status === "red"
      );
    },
  },
  {
    id: "features-as-benefits",
    label: "Features disguised as benefits",
    description:
      "Your value proposition is a product description wearing a benefits costume. The test: could a non-technical buyer explain what you do and why it matters? If they'd need your slide deck, start over.",
    condition: (results) => {
      const buyer = results.find((r) => r.dimension.id === "buyer-centricity");
      const art = results.find((r) => r.dimension.id === "articulation-clarity");
      return (
        buyer !== undefined &&
        art !== undefined &&
        buyer.status === "red" &&
        art.status === "red"
      );
    },
  },
  {
    id: "universally-weak",
    label: "Universally weak",
    description:
      "Your value proposition needs fundamental rework, not refinement. This is not a messaging problem — it's a positioning problem. Before wordsmithing, answer three questions: Who exactly is the buyer? What exactly do they get? Why exactly you and not the alternatives?",
    condition: (results) => {
      const totalScore = results.reduce((sum, r) => sum + r.score, 0);
      return totalScore <= 9;
    },
  },
];

export const VALUE_TYPES: ValueType[] = [
  {
    id: "financial",
    name: "Financial",
    tagline: "Revenue increased, costs reduced, risk mitigated",
    decisionMaker: "CFO, procurement, business unit P&L owner",
    proofRequired: "ROI model, cost comparison, revenue attribution",
    closingSpeed: "Fastest — if the numbers work, the case builds itself",
    warningSign:
      "If your buyer says 'interesting' but doesn't ask about pricing, you're probably not speaking Financial",
  },
  {
    id: "operational",
    name: "Operational",
    tagline: "Simpler, faster, more reliable",
    decisionMaker: "Operations head, team lead, end-user manager",
    proofRequired: "Time savings, error reduction, process comparison",
    closingSpeed: "Medium — requires pilot to demonstrate",
    warningSign:
      "If your buyer loves the demo but their boss doesn't take the meeting, you're solving Operational for the user but not Financial for the decision-maker",
  },
  {
    id: "strategic",
    name: "Strategic",
    tagline: "Market entry, trend adaptation, competitive positioning",
    decisionMaker: "CEO, CSO, board, innovation leadership",
    proofRequired: "Market analysis, competitive intelligence, trend alignment",
    closingSpeed: "Slow — requires strategic alignment at leadership level",
    warningSign:
      "If your buyer says 'this is the future' but can't get budget, Strategic value without Financial translation doesn't close",
  },
  {
    id: "positional",
    name: "Positional",
    tagline: "Trust, compliance, credibility, risk mitigation",
    decisionMaker: "Legal, compliance, risk, public affairs",
    proofRequired: "Certification, audit results, regulatory mapping",
    closingSpeed: "Variable — urgent when triggered by regulatory pressure",
    warningSign:
      "If your buyer already meets compliance requirements, Positional value is insurance, not urgency",
  },
  {
    id: "human",
    name: "Human",
    tagline: "Less stress, better culture, improved wellbeing",
    decisionMaker: "CHRO, team lead, culture/people operations",
    proofRequired: "Employee satisfaction, retention, engagement scores",
    closingSpeed: "Slowest — hardest to quantify, easiest to deprioritise",
    warningSign:
      "If your buyer agrees it's important but keeps postponing, Human value alone rarely creates purchase urgency",
  },
];

export const COI_COPY = {
  heading: "The Downstream Cost of a Weak Value Proposition",
  intro:
    "A value proposition that can't be repeated becomes a pipeline that can't be built. A value proposition that can't be quantified becomes a deal that can't close. A value proposition that speaks the wrong value type becomes a champion who can't sell internally.",
  body: "These are Layer 3 symptoms with a Layer 1 cause. Every 'no' in this diagnostic is a compounding risk — one that surfaces downstream as pipeline problems, stalled deals, and enthusiastic meetings that never convert.",
};

export const CTA_COPY = {
  heading: "What This Diagnostic Doesn't Tell You",
  body: `This tool reveals where your value proposition is weak. It doesn't tell you how to fix it — because the answer depends on your specific market, your buyer's decision process, and the alternatives they're actually considering.

Value proposition work is positioning work. It requires understanding not just what you do, but who you do it for, what they compare you to, and how they justify the purchase internally. A generic rewrite won't fix a structural positioning gap.`,
  callout:
    "If your profile shows two or more dimensions in the red zone, a structured conversation can help you identify whether this is a messaging problem or a positioning problem — and what to address first.",
  triangleReminder:
    "Your value proposition doesn't exist in isolation. It must cohere with your ICP (who you sell to) and your pricing (what they pay). If you haven't assessed your ICP clarity, start there.",
  contact: {
    name: "Alexandra N.",
    title: "Founder, Aieutics",
    subtitle: "Executive coaching & strategic transformation",
    website: "aieutics.com",
    email: "hello@aieutics.com",
  },
};

export const ATTRIBUTION =
  "Developed by Aieutics from the Critical Path Layers framework, integrating Philippe Meda's value type taxonomy. Based on patterns observed across executive coaching, corporate accelerator programmes, and consulting engagements.";
