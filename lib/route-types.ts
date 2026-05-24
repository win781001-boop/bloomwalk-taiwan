/* Shared route data type used by all skeleton counties */

export interface RouteData {
  slug: string;
  name: string;
  area: string;
  summary: string;
  postcardAppeal: number;
  postcardReason: string;
  walkingComfort: number;
  transportConvenience: number;
  duration: string;
  bestTime: string;
  transport: string;
  tags: string[];
  icon: string;
  whyVisit: string;
  routeSteps: string[];
  pikminReasons: string[];
  tips: string[];
  supplies: string[];
  nearbyRoutes: string[];
  mapUrl: string;
}