import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import { RouteDetailPage } from "../RouteDetailPage";

export const metadata: Metadata = {
  title: "衛武營藝術公園散步路線｜Bloom Walk Taiwan",
  description:
    "衛武營藝術公園散步路線，適合皮克敏玩家收集高雄藝術建築明信片、都會公園種花散步、捷運直達短程或長程安排。",
};

export default function Page() {
  const route = getRouteBySlug("weiwuying");
  if (!route) return null;
  return <RouteDetailPage route={route} />;
}
