export type RouteCategory =
  | "urban"
  | "waterfront"
  | "coast"
  | "mountain"
  | "park"
  | "heritage"
  | "railway"
  | "industry"
  | "museum"
  | "night"
  | "family"
  | "wetland";

export const categoryIconMap: Record<RouteCategory, string> = {
  urban: "/icons/categories/urban.png",
  waterfront: "/icons/categories/waterfront.png",
  coast: "/icons/categories/coast.png",
  mountain: "/icons/categories/mountain.png",
  park: "/icons/categories/park.png",
  heritage: "/icons/categories/heritage.png",
  railway: "/icons/categories/railway.png",
  industry: "/icons/categories/industry.png",
  museum: "/icons/categories/museum.png",
  night: "/icons/categories/night.png",
  family: "/icons/categories/family.png",
  wetland: "/icons/categories/wetland.png",
};

export const categoryNames: Record<RouteCategory, string> = {
  urban: "都市散步",
  waterfront: "水岸",
  coast: "海岸",
  mountain: "山景",
  park: "公園",
  heritage: "歷史文化",
  railway: "鐵道",
  industry: "產業",
  museum: "博物館",
  night: "夜景",
  family: "親子",
  wetland: "濕地",
};
