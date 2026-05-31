import type { Metadata } from "next";
import { getPingtungRouteBySlug } from "@/lib/pingtung-routes";
import PingtungRouteMapPageTemplate from "@/components/PingtungRouteMapPageTemplate";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = {
  title: "小琉球花瓶岩海岸路線 | Bloom Walk",
  description:
    "小琉球花瓶岩散步路線，適合皮克敏玩家收集屏東景點明信片、散步種花。",
};

export default function Page() {
  const route = getPingtungRouteBySlug("xiaoliuqiu-vase-rock");
  if (!route) return null;

  return (
    <PingtungRouteMapPageTemplate
      route={route}
      mapTitle="小琉球地圖區"
      mapContent={
        <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
          <div className="text-center">
            <p className="text-sm font-medium text-slate-400">
              小琉球地圖待補
            </p>
            <p className="mt-1 text-xs text-slate-300">
              地圖底圖上傳後即可加入景點資訊
            </p>
          </div>
        </div>
      }
      spotCardsContent={<SpotCards />}
    />
  );
}