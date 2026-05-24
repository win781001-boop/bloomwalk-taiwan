import type { Metadata } from "next";
import { getNewTaipeiRouteBySlug } from "@/lib/new-taipei-routes";
import GenericRouteMapPageTemplate from "@/components/GenericRouteMapPageTemplate";
import 新北市RouteDetailPage from "../RouteDetailPage";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = { title: "待命名路線四 | Bloom Walk Taiwan", description: "待補充", robots: { index: false } };

export default function Page() {
  const route = getNewTaipeiRouteBySlug("route-4");
  if (!route) return null;
  return (
    <GenericRouteMapPageTemplate
      mapTitle="地圖區（待補充）"
      mapContent={<div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-slate-100"><div className="text-center"><p className="text-sm font-medium text-slate-400">地圖待補</p><p className="mt-1 text-xs text-slate-300">地圖底圖上傳後即可加入景點資訊</p></div></div>}
      spotCardsContent={<SpotCards />}
    >
      <新北市RouteDetailPage route={route} hideHeader />
    </GenericRouteMapPageTemplate>
  );
}