import type { RouteData } from "@/lib/route-types";

const routes: RouteData[] = [
  { slug: "route-1", name: "待命名路線一", area: "金門縣 / 待補充", summary: "待補充", postcardAppeal: 0, postcardReason: "待補充", walkingComfort: 0, transportConvenience: 0, duration: "待補充", bestTime: "待補充", transport: "待補充", tags: [], icon: "📍", primaryCategory: "urban", whyVisit: "待補充", routeSteps: ["待補充"], pikminReasons: ["待補充"], tips: ["待補充"], supplies: ["待補充"], nearbyRoutes: [], mapUrl: "#" },
  { slug: "route-2", name: "待命名路線二", area: "金門縣 / 待補充", summary: "待補充", postcardAppeal: 0, postcardReason: "待補充", walkingComfort: 0, transportConvenience: 0, duration: "待補充", bestTime: "待補充", transport: "待補充", tags: [], icon: "📍", primaryCategory: "urban", whyVisit: "待補充", routeSteps: ["待補充"], pikminReasons: ["待補充"], tips: ["待補充"], supplies: ["待補充"], nearbyRoutes: [], mapUrl: "#" },
  { slug: "route-3", name: "待命名路線三", area: "金門縣 / 待補充", summary: "待補充", postcardAppeal: 0, postcardReason: "待補充", walkingComfort: 0, transportConvenience: 0, duration: "待補充", bestTime: "待補充", transport: "待補充", tags: [], icon: "📍", primaryCategory: "urban", whyVisit: "待補充", routeSteps: ["待補充"], pikminReasons: ["待補充"], tips: ["待補充"], supplies: ["待補充"], nearbyRoutes: [], mapUrl: "#" },
  { slug: "route-4", name: "待命名路線四", area: "金門縣 / 待補充", summary: "待補充", postcardAppeal: 0, postcardReason: "待補充", walkingComfort: 0, transportConvenience: 0, duration: "待補充", bestTime: "待補充", transport: "待補充", tags: [], icon: "📍", primaryCategory: "urban", whyVisit: "待補充", routeSteps: ["待補充"], pikminReasons: ["待補充"], tips: ["待補充"], supplies: ["待補充"], nearbyRoutes: [], mapUrl: "#" },
  { slug: "route-5", name: "待命名路線五", area: "金門縣 / 待補充", summary: "待補充", postcardAppeal: 0, postcardReason: "待補充", walkingComfort: 0, transportConvenience: 0, duration: "待補充", bestTime: "待補充", transport: "待補充", tags: [], icon: "📍", primaryCategory: "urban", whyVisit: "待補充", routeSteps: ["待補充"], pikminReasons: ["待補充"], tips: ["待補充"], supplies: ["待補充"], nearbyRoutes: [], mapUrl: "#" },
  { slug: "route-6", name: "待命名路線六", area: "金門縣 / 待補充", summary: "待補充", postcardAppeal: 0, postcardReason: "待補充", walkingComfort: 0, transportConvenience: 0, duration: "待補充", bestTime: "待補充", transport: "待補充", tags: [], icon: "📍", primaryCategory: "urban", whyVisit: "待補充", routeSteps: ["待補充"], pikminReasons: ["待補充"], tips: ["待補充"], supplies: ["待補充"], nearbyRoutes: [], mapUrl: "#" },
];

export const kinmenRoutes = routes;

export function getKinmenRouteBySlug(slug: string): RouteData | undefined {
  return routes.find((r) => r.slug === slug);
}