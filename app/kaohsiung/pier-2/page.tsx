import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import { kaohsiungPier2Spots } from "@/lib/kaohsiung-spots";
import RouteMapPageTemplate from "@/components/RouteMapPageTemplate";
import { SpotCards } from "./SpotCards";
import { Pier2MapSection } from "./Pier2MapSection";

export const metadata: Metadata = {
  title: "高雄駁二皮克敏明信片散步路線｜文創港邊與拍照景點",
  description:
    "高雄駁二藝術特區皮克敏散步路線，適合收集景點明信片、港邊散步、拍照順遊與社群日短程安排。",
};

/** Map marker positions from reference/map-spots-ah.json */
const mapPins = [
  { id: "pier2-A", shortId: "A", name: "高雄流行音樂中心", left: 83.3, top: 43.9 },
  { id: "pier2-B", shortId: "B", name: "駁二大勇區", left: 67.1, top: 46.1 },
  { id: "pier2-C", shortId: "C", name: "大港橋", left: 61.1, top: 62.5 },
  { id: "pier2-D", shortId: "D", name: "駁二大義區", left: 44.9, top: 51.2 },
  { id: "pier2-E", shortId: "E", name: "駁二蓬萊倉庫群", left: 29.4, top: 61.2 },
  { id: "pier2-F", shortId: "F", name: "哈瑪星鐵道園區", left: 15, top: 54.2 },
  { id: "pier2-G", shortId: "G", name: "舊打狗驛故事館", left: 13.4, top: 69.9 },
  { id: "pier2-H", shortId: "H", name: "棧貳庫KW2", left: 28, top: 81.6 },
];

export default function Page() {
  const route = getRouteBySlug("pier-2");
  if (!route) return null;

  return (
    <RouteMapPageTemplate
      route={route}
      mapTitle="駁二藝術特區地圖區"
      mapContent={
        <Pier2MapSection pins={mapPins} spots={kaohsiungPier2Spots} />
      }
      spotCardsContent={<SpotCards spots={kaohsiungPier2Spots} />}
    />
  );
}
