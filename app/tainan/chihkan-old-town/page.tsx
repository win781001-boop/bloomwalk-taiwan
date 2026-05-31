import type { Metadata } from "next";
import { getTainanRouteBySlug } from "@/lib/tainan-routes";
import TainanRouteMapPageTemplate from "@/components/TainanRouteMapPageTemplate";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = {
  title: "赤崁樓 | Bloom Walk",
  description:
    "赤崁樓散步路線，適合皮克敏玩家收集臺南景點明信片、散步種花。",
};

export default function Page() {
  const route = getTainanRouteBySlug("chihkan-old-town");
  if (!route) return null;

  return (
    <TainanRouteMapPageTemplate
      route={route}
      mapTitle="赤崁樓地圖區"
      mapContent={
        <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
          <div className="text-center">
            <p className="text-sm font-medium text-slate-400">
              赤崁樓地圖待補
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

