import type { Metadata } from "next";
import { getTainanRouteBySlug } from "@/lib/tainan-routes";
import TainanRouteMapPageTemplate from "@/components/TainanRouteMapPageTemplate";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = {
  title: "安平古堡 | Bloom Walk Taiwan",
  description:
    "安平古堡散步路線，適合皮克敏玩家收集臺南景點明信片、散步種花。",
};

export default function Page() {
  const route = getTainanRouteBySlug("anping-old-fort");
  if (!route) return null;

  return (
    <TainanRouteMapPageTemplate
      route={route}
      mapTitle="安平古堡地圖區"
      mapContent={
        <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
          <div className="text-center">
            <p className="text-sm font-medium text-slate-400">
              安平古堡地圖待補
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

