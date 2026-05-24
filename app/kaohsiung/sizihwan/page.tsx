import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import RouteMapPageTemplate from "@/components/RouteMapPageTemplate";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = {
  title: "高雄西子灣皮克敏明信片散步路線｜夕陽海景與港口景點",
  description:
    "高雄西子灣皮克敏散步路線，適合夕陽海景、港口景觀、半日散步與收集高雄經典明信片景點。",
};

export default function Page() {
  const route = getRouteBySlug("sizihwan");
  if (!route) return null;

  return (
    <RouteMapPageTemplate
      route={route}
      mapTitle="西子灣地圖區"
      mapContent={
        <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
          <div className="text-center">
            <p className="text-sm font-medium text-slate-400">
              西子灣地圖待補
            </p>
            <p className="mt-1 text-xs text-slate-300">
              地圖底圖上傳後即可加入景點標記
            </p>
          </div>
        </div>
      }
      spotCardsContent={<SpotCards />}
    />
  );
}
