import type { EndpointGroup } from "../store/service/types";

export const GROUP_ORDER: ReadonlyArray<EndpointGroup> = [
  "aggregator",
  "overseas",
  "china",
  "local",
  "codingPlan",
] as const;

export const GROUP_LABELS: Record<EndpointGroup, string> = {
  overseas: "Overseas",
  china: "China",
  aggregator: "Aggregator API",
  local: "Local / Subscription",
  codingPlan: "CodingPlan",
};

export const GROUP_DESCRIPTIONS: Partial<Record<EndpointGroup, string>> = {
  aggregator: "Aggregates major LLM providers worldwide. Suitable for accessing multiple models with a single API key.",
};

export const GROUP_SHORT_LABELS: Record<EndpointGroup, string> = {
  overseas: "Overseas",
  china: "China",
  aggregator: "Aggregator",
  local: "Local",
  codingPlan: "CodingPlan",
};
