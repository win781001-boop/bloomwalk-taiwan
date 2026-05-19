import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import { RouteDetailPage } from "../RouteDetailPage";

export const metadata: Metadata = {
  title: "高雄大港橋・棧貳庫皮克敏明信片路線｜港灣地標散步",
  description:
    "高雄大港橋與棧貳庫港灣路線，適合皮克敏玩家收集港邊明信片、欣賞海景、夜景與安排鹽埕散步。",
};

export default function Page() {
  const route = getRouteBySlug("dagang-bridge");
  if (!route) return null;
  return <RouteDetailPage route={route} />;
}
