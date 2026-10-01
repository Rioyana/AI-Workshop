// The six fixed skill tags. Every task gets exactly one.
// The database table only accepts these same six words.
export const SKILLS = [
  "Listening",
  "Speaking",
  "Reading",
  "Writing",
  "Vocabulary",
  "Grammar",
] as const;

export type Skill = (typeof SKILLS)[number];
