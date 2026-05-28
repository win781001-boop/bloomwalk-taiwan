import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import RouteMapPageTemplate from "@/components/RouteMapPageTemplate";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = {
  robots: { index: false },

  title: "衛武營藝術公園散步路線｜Bloom Walk Taiwan",
  description:
    "衛武營藝術公園散步路線，適合皮克敏玩家收集高雄藝術建築明信片、都會公園種花散步、捷運直達短程或長程安排。",
};

export default function Page() {
  const route = getRouteBySlug("weiwuying");
  if (!route) return null;

  return (
    <RouteMapPageTemplate
      route={route}
      mapTitle="衛武營地圖區"
      mapContent={
        <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
          <div className="text-center">
            <p className="text-sm font-medium text-slate-400">
              衛武營地圖待補
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
