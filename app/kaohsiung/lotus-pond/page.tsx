import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import { RouteDetailPage } from "../RouteDetailPage";

export const metadata: Metadata = {
  title: "高雄蓮池潭龍虎塔皮克敏明信片路線｜湖景與傳統地標",
  description:
    "高雄蓮池潭與龍虎塔皮克敏散步路線，適合收集湖景、傳統地標與高雄經典觀光明信片。",
};

export default function Page() {
  const route = getRouteBySlug("lotus-pond");
  if (!route) return null;
  return <RouteDetailPage route={route} />;
}
