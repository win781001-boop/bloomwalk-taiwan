import type { RouteCategory } from "./category-icons";



export type PingtungRoute = {
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
  primaryCategory: RouteCategory;
  whyVisit: string;
  routeSteps: string[];
  pikminReasons: string[];
  tips: string[];
  supplies: string[];
  nearbyRoutes: string[];
  mapUrl: string;
};

export const pingtungRoutes: PingtungRoute[] = [
  {
    slug: "dapeng-bay",
    primaryCategory: "coast",
    name: "大鵬灣環灣散步路線",
    area: "屏東 / 待補充",
    summary: "潟湖、水岸、跨海橋",
    postcardAppeal: 0,
    postcardReason: "待補充",
    walkingComfort: 0,
    transportConvenience: 0,
    duration: "待補充",
    bestTime: "待補充",
    transport: "待補充",
    tags: [],
    icon: "🌊",
    whyVisit: "待補充",
    routeSteps: ["待補充"],
    pikminReasons: ["待補充"],
    tips: ["待補充"],
    supplies: ["待補充"],
    nearbyRoutes: [],
    mapUrl: "#",
  },
  {
    slug: "donggang-harbor",
    primaryCategory: "heritage",
    name: "東港漁港・東隆宮街區路線",
    area: "屏東 / 待補充",
    summary: "漁港、廟宇、美食街區",
    postcardAppeal: 0,
    postcardReason: "待補充",
    walkingComfort: 0,
    transportConvenience: 0,
    duration: "待補充",
    bestTime: "待補充",
    transport: "待補充",
    tags: [],
    icon: "⛩️",
    whyVisit: "待補充",
    routeSteps: ["待補充"],
    pikminReasons: ["待補充"],
    tips: ["待補充"],
    supplies: ["待補充"],
    nearbyRoutes: [],
    mapUrl: "#",
  },
  {
    slug: "victory-star-village",
    primaryCategory: "heritage",
    name: "勝利星村眷村文化路線",
    area: "屏東 / 待補充",
    summary: "歷史建築、文創、城市散步",
    postcardAppeal: 0,
    postcardReason: "待補充",
    walkingComfort: 0,
    transportConvenience: 0,
    duration: "待補充",
    bestTime: "待補充",
    transport: "待補充",
    tags: [],
    icon: "🏘️",
    whyVisit: "待補充",
    routeSteps: ["待補充"],
    pikminReasons: ["待補充"],
    tips: ["待補充"],
    supplies: ["待補充"],
    nearbyRoutes: [],
    mapUrl: "#",
  },
  {
    slug: "eluanbi-park",
    primaryCategory: "coast",
    name: "墾丁鵝鑾鼻海岸公園路線",
    area: "屏東 / 待補充",
    summary: "燈塔、草地、海岸景觀",
    postcardAppeal: 0,
    postcardReason: "待補充",
    walkingComfort: 0,
    transportConvenience: 0,
    duration: "待補充",
    bestTime: "待補充",
    transport: "待補充",
    tags: [],
    icon: "🗼",
    whyVisit: "待補充",
    routeSteps: ["待補充"],
    pikminReasons: ["待補充"],
    tips: ["待補充"],
    supplies: ["待補充"],
    nearbyRoutes: [],
    mapUrl: "#",
  },
  {
    slug: "xiaoliuqiu-vase-rock",
    primaryCategory: "coast",
    name: "小琉球花瓶岩海岸路線",
    area: "屏東 / 待補充",
    summary: "離島海岸、地標、步行",
    postcardAppeal: 0,
    postcardReason: "待補充",
    walkingComfort: 0,
    transportConvenience: 0,
    duration: "待補充",
    bestTime: "待補充",
    transport: "待補充",
    tags: [],
    icon: "🏝️",
    whyVisit: "待補充",
    routeSteps: ["待補充"],
    pikminReasons: ["待補充"],
    tips: ["待補充"],
    supplies: ["待補充"],
    nearbyRoutes: [],
    mapUrl: "#",
  },
  {
    slug: "linhousilin-forest-park",
    primaryCategory: "mountain",
    name: "林後四林平地森林路線",
    area: "屏東 / 待補充",
    summary: "森林、公園、平坦綠地",
    postcardAppeal: 0,
    postcardReason: "待補充",
    walkingComfort: 0,
    transportConvenience: 0,
    duration: "待補充",
    bestTime: "待補充",
    transport: "待補充",
    tags: [],
    icon: "🌲",
    whyVisit: "待補充",
    routeSteps: ["待補充"],
    pikminReasons: ["待補充"],
    tips: ["待補充"],
    supplies: ["待補充"],
    nearbyRoutes: [],
    mapUrl: "#",
  },
];

/** Get a single route by slug */
export function getPingtungRouteBySlug(slug: string): PingtungRoute | undefined {
  return pingtungRoutes.find((r) => r.slug === slug);
}