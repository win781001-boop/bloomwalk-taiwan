import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import RouteMapPageTemplate from "@/components/RouteMapPageTemplate";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = {
  title: "高雄中央公園皮克敏散步路線｜捷運可達短時間補步數",
  description:
    "高雄中央公園皮克敏散步路線，適合短時間補步數、捷運可達、傍晚散步與社群日備案。",
};

export default function Page() {
  const route = getRouteBySlug("central-park");
  if (!route) return null;

  return (
    <RouteMapPageTemplate
      route={route}
      mapTitle="中央公園地圖區"
      mapContent={
        <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
          <div className="text-center">
            <p className="text-sm font-medium text-slate-400">
              中央公園地圖待補
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
