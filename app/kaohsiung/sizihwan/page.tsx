import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import { kaohsiungSizihwanSpots } from "@/lib/kaohsiung-spots";
import RouteMapPageTemplate from "@/components/RouteMapPageTemplate";
import { SpotCards } from "./SpotCards";
import { SizihwanMapSection } from "./SizihwanMapSection";

export const metadata: Metadata = {
  title: "高雄西子灣皮克敏明信片散步路線｜夕陽海景與港口景點",
  description:
    "高雄西子灣皮克敏散步路線，從鼓山輪渡站出發，走訪哨船頭公園、雄鎮北門、西子灣觀景臺與打狗英國領事館，適合夕陽半日散步收集明信片。",
};

/** Map marker positions from reference/sizihwan-map-spots-ah.json */
const mapPins = [
  { id: "sizihwan-A", shortId: "A", name: "鼓山輪渡站", left: 25, top: 76 },
  { id: "sizihwan-B", shortId: "B", name: "一號船渠景觀橋", left: 42.3, top: 71.1 },
  { id: "sizihwan-C", shortId: "C", name: "西子灣隧道", left: 87.1, top: 62.2 },
  { id: "sizihwan-D", shortId: "D", name: "哨船頭公園", left: 22.5, top: 60 },
  { id: "sizihwan-E", shortId: "E", name: "雄鎮北門", left: 9.6, top: 14.5 },
  { id: "sizihwan-F", shortId: "F", name: "西子灣觀景臺", left: 16.2, top: 8.8 },
  { id: "sizihwan-G", shortId: "G", name: "打狗英國領事館文化園區", left: 26.3, top: 24.6 },
  { id: "sizihwan-H", shortId: "H", name: "國立中山大學牌樓", left: 40.9, top: 12.6 },
];

export default function Page() {
  const route = getRouteBySlug("sizihwan");
  if (!route) return null;

  return (
    <RouteMapPageTemplate
      route={route}
      mapTitle="西子灣地圖區"
      mapContent={
        <SizihwanMapSection pins={mapPins} spots={kaohsiungSizihwanSpots} />
      }
      spotCardsContent={<SpotCards spots={kaohsiungSizihwanSpots} />}
    />
  );
}
