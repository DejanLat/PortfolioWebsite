export const STUDIO_COMPLEXITIES = [
  { key: "simple", label: "Basic refinement / well-defined", factor: 1 },
  { key: "technical", label: "Technical / moderate detail", factor: 1.35 },
  { key: "advanced", label: "Advanced / high concept", factor: 1.8 },
];

export const STUDIO_USAGE = [
  { key: "academic", label: "Academic & Institutional", add: 0 },
  { key: "commercial", label: "Organizational & Promotional", add: 500 },
  { key: "extended", label: "Campaign, Fundraising & Large-Scale", add: 1250 },
];

export const STUDIO_TIMELINES = [
  { key: "standard", label: "Standard timeline", factor: 1, description: "The normal project schedule for the selected package and scope." },
  { key: "priority", label: "Priority", factor: 1.2, description: "Accelerated scheduling with a moderate timeline adjustment." },
  { key: "rush", label: "Rush", factor: 1.45, description: "A significantly compressed timeline accepted only when the scope is realistic." },
];

export const calculateStudioEstimate = ({ packageOption, complexityKey, usageKey, timelineKey }) => {
  const complexity = STUDIO_COMPLEXITIES.find((item) => item.key === complexityKey) || STUDIO_COMPLEXITIES[1];
  const usage = STUDIO_USAGE.find((item) => item.key === usageKey) || STUDIO_USAGE[0];
  const timeline = STUDIO_TIMELINES.find((item) => item.key === timelineKey) || STUDIO_TIMELINES[0];
  const rawLow = (packageOption.price * complexity.factor + usage.add) * timeline.factor;
  const isUnmodifiedBase = complexity.factor === 1 && usage.add === 0 && timeline.factor === 1;
  const low = isUnmodifiedBase ? packageOption.price : Math.ceil(rawLow / 50) * 50;
  const high = Math.ceil((low * 1.35) / 50) * 50;

  return {
    low,
    high,
    range: `$${low.toLocaleString()}-$${high.toLocaleString()} CAD`,
    complexity,
    usage,
    timeline,
  };
};
