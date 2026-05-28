import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import { kaohsiungChengcingLakeSpots } from "@/lib/kaohsiung-spots";
import RouteMapPageTemplate from "@/components/RouteMapPageTemplate";
import { SpotCards } from "./SpotCards";
import { ChengcingLakeMapSection } from "./ChengcingLakeMapSection";

export const metadata: Metadata = {
  title: "高雄澄清湖皮克敏明信片散步路線｜九曲橋中興塔與湖景地標",
  description:
    "高雄澄清湖皮克敏散步路線，九曲橋、中興塔、三亭攬勝等湖景地標，適合半日散步收集明信片。",
};

/** Map marker positions from reference/chengcing-lake-map-spots-ah.json */
const mapPins = [
  { id: "chengcing-A", shortId: "A", name: "海洋奇珍園", left: 66.6, top: 66.1 },
  { id: "chengcing-B", shortId: "B", name: "九曲橋", left: 56.7, top: 71.1 },
  { id: "chengcing-C", shortId: "C", name: "泡茶區", left: 16.6, top: 75.7 },
  { id: "chengcing-D", shortId: "D", name: "雙蓮亭", left: 30.5, top: 61.5 },
  { id: "chengcing-E", shortId: "E", name: "富國島", left: 43.7, top: 37 },
  { id: "chengcing-F", shortId: "F", name: "烤肉區", left: 26.9, top: 42.6 },
  { id: "chengcing-G", shortId: "G", name: "中興塔", left: 11.3, top: 36.7 },
  { id: "chengcing-H", shortId: "H", name: "三亭攬勝", left: 53.2, top: 12.2 },
];

export default function Page() {
  const route = getRouteBySlug("chengcing-lake");
  if (!route) return null;

  return (
    <RouteMapPageTemplate
      route={route}
      mapTitle="澄清湖地圖區"
      mapContent={
        <ChengcingLakeMapSection pins={mapPins} spots={kaohsiungChengcingLakeSpots} />
      }
      spotCardsContent={<SpotCards spots={kaohsiungChengcingLakeSpots} />}
    />
  );
}
