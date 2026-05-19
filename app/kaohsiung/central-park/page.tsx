import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import { RouteDetailPage } from "../RouteDetailPage";

export const metadata: Metadata = {
  title: "高雄中央公園皮克敏散步路線｜捷運可達短時間補步數",
  description:
    "高雄中央公園皮克敏散步路線，適合短時間補步數、捷運可達、傍晚散步與社群日備案。",
};

export default function Page() {
  const route = getRouteBySlug("central-park");
  if (!route) return null;
  return <RouteDetailPage route={route} />;
}
