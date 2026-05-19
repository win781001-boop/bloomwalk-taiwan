import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import { RouteDetailPage } from "../RouteDetailPage";

export const metadata: Metadata = {
  title: "高雄駁二皮克敏明信片散步路線｜文創港邊與拍照景點",
  description:
    "高雄駁二藝術特區皮克敏散步路線，適合收集景點明信片、港邊散步、拍照順遊與社群日短程安排。",
};

export default function Page() {
  const route = getRouteBySlug("pier-2");
  if (!route) return null;
  return <RouteDetailPage route={route} />;
}
