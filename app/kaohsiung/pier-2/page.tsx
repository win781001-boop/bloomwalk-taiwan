import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import RouteMapPageTemplate from "@/components/RouteMapPageTemplate";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = {
  title: "高雄駁二皮克敏明信片散步路線｜文創港邊與拍照景點",
  description:
    "高雄駁二藝術特區皮克敏散步路線，適合收集景點明信片、港邊散步、拍照順遊與社群日短程安排。",
};

export default function Page() {
  const route = getRouteBySlug("pier-2");
  if (!route) return null;

  return (
    <RouteMapPageTemplate
      route={route}
      mapTitle="駁二藝術特區地圖區"
      mapContent={
        <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
          <div className="text-center">
            <p className="text-sm font-medium text-slate-400">
              駁二藝術特區地圖待補
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
