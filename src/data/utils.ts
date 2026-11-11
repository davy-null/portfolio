export function readingTime(text: string): number {
  const words = text.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 210));
}
export function fmtDate(d: Date, opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }) {
  return d.toLocaleDateString('en-GB', { timeZone: 'UTC', ...opts });
}
/** Deterministic PRNG so generated art is stable between builds. */
export function seeded(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  return () => {
    h += 0x6d2b79f5; let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
