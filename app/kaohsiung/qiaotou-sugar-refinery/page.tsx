import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import { kaohsiungQiaotouSugarRefinerySpots } from "@/lib/kaohsiung-spots";
import RouteMapPageTemplate from "@/components/RouteMapPageTemplate";
import { SpotCards } from "./SpotCards";
import { QiaotouMapSection } from "./QiaotouMapSection";

export const metadata: Metadata = {
  title: "高雄橋頭糖廠皮克敏明信片散步路線｜糖業博物館與日式建築景點",
  description:
    "高雄橋頭糖廠皮克敏散步路線，從橋頭老街出發，走訪糖業博物館、與糖面室、吉照故里茶道院、鐵園迷城，適合半日散步收集糖業文化明信片。",
};

/** Map marker positions from reference/qiaotou-sugar-refinery-map-spots-ah.json */
const mapPins = [
  { id: "qiaotou-A", shortId: "A", name: "橋頭老街", left: 40.5, top: 81.8 },
  { id: "qiaotou-B", shortId: "B", name: "糖業博物館", left: 46.6, top: 44.7 },
  { id: "qiaotou-C", shortId: "C", name: "與糖面室", left: 57.1, top: 53.3 },
  { id: "qiaotou-D", shortId: "D", name: "吉照故里茶道院", left: 54.1, top: 39 },
  { id: "qiaotou-E", shortId: "E", name: "台糖展售中心", left: 61.3, top: 33.2 },
  { id: "qiaotou-F", shortId: "F", name: "社宅事務所", left: 48.5, top: 26.2 },
  { id: "qiaotou-G", shortId: "G", name: "興糖車站", left: 76.8, top: 54.4 },
  { id: "qiaotou-H", shortId: "H", name: "鐵園迷城", left: 31.5, top: 28.3 },
];

export default function Page() {
  const route = getRouteBySlug("qiaotou-sugar-refinery");
  if (!route) return null;

  return (
    <RouteMapPageTemplate
      route={route}
      mapTitle="橋頭糖廠地圖區"
      mapContent={
        <QiaotouMapSection pins={mapPins} spots={kaohsiungQiaotouSugarRefinerySpots} />
      }
      spotCardsContent={<SpotCards spots={kaohsiungQiaotouSugarRefinerySpots} />}
    />
  );
}
