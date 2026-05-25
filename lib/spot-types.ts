/** Shared Spot data structure used across all routes. */
export interface Spot {
  id: string;
  name: string;
  city: string;
  district: string;
  /** Categories describing what kind of place this is (e.g. "湖泊", "文化景點"). */
  typeTags: string[];
  /** Suggested use cases for Pikmin Bloom players (e.g. "散步", "明信片收集", "種花"). */
  useTags: string[];
  googleMapsUrl: string;
  suggestedStayMinutes: number;
  notes: string;
  imagePlaceholder: string;
}
