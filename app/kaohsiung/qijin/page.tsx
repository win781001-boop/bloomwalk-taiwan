import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import { kaohsiungQijinSpots } from "@/lib/kaohsiung-spots";
import RouteMapPageTemplate from "@/components/RouteMapPageTemplate";
import { SpotCards } from "./SpotCards";
import { QijinMapSection } from "./QijinMapSection";

export const metadata: Metadata = {
  title: "高雄旗津皮克敏明信片散步路線｜渡輪老街與海岸景點",
  description:
    "高雄旗津皮克敏散步路線，從渡輪站出發走訪天后宮、老街、燈塔、星空隧道、旗後砲台與彩虹教堂，適合半日散步收集明信片。",
};

/** Map marker positions from reference/qijin-map-spots-ah.json */
const mapPins = [
  { id: "qijin-A", shortId: "A", name: "旗津渡輪站", left: 37.6, top: 15.4 },
  { id: "qijin-B", shortId: "B", name: "旗津天后宮", left: 29.3, top: 28.6 },
  { id: "qijin-C", shortId: "C", name: "旗津老街", left: 33.2, top: 40.6 },
  { id: "qijin-D", shortId: "D", name: "旗津燈塔", left: 27.7, top: 52.1 },
  { id: "qijin-E", shortId: "E", name: "旗津星空隧道", left: 13, top: 59.3 },
  { id: "qijin-F", shortId: "F", name: "旗後砲台", left: 9.8, top: 29.8 },
  { id: "qijin-G", shortId: "G", name: "旗津海岸景觀", left: 44.8, top: 61.3 },
  { id: "qijin-H", shortId: "H", name: "旗津彩虹教堂", left: 89.9, top: 75.4 },
];

export default function Page() {
  const route = getRouteBySlug("qijin");
  if (!route) return null;

  return (
    <RouteMapPageTemplate
      route={route}
      mapTitle="旗津地圖區"
      mapContent={
        <QijinMapSection pins={mapPins} spots={kaohsiungQijinSpots} />
      }
      spotCardsContent={<SpotCards spots={kaohsiungQijinSpots} />}
    />
  );
}
