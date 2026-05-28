import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import RouteMapPageTemplate from "@/components/RouteMapPageTemplate";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = {
  robots: { index: false },

  title: "高雄哈瑪星鐵道文化園區皮克敏散步路線｜鐵道草地與港區散步",
  description:
    "高雄哈瑪星鐵道文化園區皮克敏散步路線，適合鐵道景觀、草地慢走、親子散步與港區順遊。",
};

export default function Page() {
  const route = getRouteBySlug("haramasen-railway");
  if (!route) return null;

  return (
    <RouteMapPageTemplate
      route={route}
      mapTitle="哈瑪星鐵道文化園區地圖區"
      mapContent={
        <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
          <div className="text-center">
            <p className="text-sm font-medium text-slate-400">
              哈瑪星鐵道文化園區地圖待補
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
