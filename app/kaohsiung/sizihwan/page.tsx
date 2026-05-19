import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import { RouteDetailPage } from "../RouteDetailPage";

export const metadata: Metadata = {
  title: "高雄西子灣皮克敏明信片散步路線｜夕陽海景與港口景點",
  description:
    "高雄西子灣皮克敏散步路線，適合夕陽海景、港口景觀、半日散步與收集高雄經典明信片景點。",
};

export default function Page() {
  const route = getRouteBySlug("sizihwan");
  if (!route) return null;
  return <RouteDetailPage route={route} />;
}
