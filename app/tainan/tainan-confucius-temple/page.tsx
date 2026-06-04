import type { Metadata } from "next";
import { getTainanRouteBySlug } from "@/lib/tainan-routes";
import { tainanConfuciusSpots } from "@/lib/tainan-spots";
import TainanRouteMapPageTemplate from "@/components/TainanRouteMapPageTemplate";
import { TainanMapSection } from "@/components/TainanMapSection";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = {
  title: "臺南孔廟・文學館文化路線 | Bloom Walk",
  description: "臺南孔廟散步路線，適合皮克敏玩家收集臺南景點明信片、散步種花。",
};

const mapPins = [
  { id: "tainan-confucius-A", shortId: "A", left: 24.4, top: 23 },
  { id: "tainan-confucius-B", shortId: "B", left: 32.4, top: 12.7 },
  { id: "tainan-confucius-C", shortId: "C", left: 43.1, top: 27.9 },
  { id: "tainan-confucius-D", shortId: "D", left: 57.8, top: 14.4 },
  { id: "tainan-confucius-E", shortId: "E", left: 60, top: 73.9 },
  { id: "tainan-confucius-F", shortId: "F", left: 74.6, top: 11.2 },
  { id: "tainan-confucius-G", shortId: "G", left: 86.9, top: 14.2 },
  { id: "tainan-confucius-H", shortId: "H", left: 45.3, top: 69.4 },
];

export default function Page() {
  const route = getTainanRouteBySlug("tainan-confucius-temple");
  if (!route) return null;

  return (
    <TainanRouteMapPageTemplate
      route={route}
      mapTitle="孔廟文化地圖區"
      mapContent={
        <TainanMapSection pins={mapPins} spots={tainanConfuciusSpots} mapImage="/maps/tainan-confucius-temple/map.webp" />
      }
      spotCardsContent={<SpotCards spots={tainanConfuciusSpots} />}
    />
  );
}
