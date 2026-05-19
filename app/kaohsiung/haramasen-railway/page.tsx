import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import { RouteDetailPage } from "../RouteDetailPage";

export const metadata: Metadata = {
  title: "高雄哈瑪星鐵道文化園區皮克敏散步路線｜鐵道草地與港區散步",
  description:
    "高雄哈瑪星鐵道文化園區皮克敏散步路線，適合鐵道景觀、草地慢走、親子散步與港區順遊。",
};

export default function Page() {
  const route = getRouteBySlug("haramasen-railway");
  if (!route) return null;
  return <RouteDetailPage route={route} />;
}
