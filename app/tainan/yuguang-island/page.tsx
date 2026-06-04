import type { Metadata } from "next";
import { getTainanRouteBySlug } from "@/lib/tainan-routes";
import { tainanYuguangSpots } from "@/lib/tainan-spots";
import TainanRouteMapPageTemplate from "@/components/TainanRouteMapPageTemplate";
import { TainanMapSection } from "@/components/TainanMapSection";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = {
  title: "漁光島・億載金城海景路線 | Bloom Walk",
  description: "漁光島散步路線，適合皮克敏玩家收集臺南景點明信片、散步種花。",
};

const mapPins = [
  { id: "tainan-yuguang-A", shortId: "A", left: 13, top: 10.1 },
  { id: "tainan-yuguang-B", shortId: "B", left: 20.5, top: 30.9 },
  { id: "tainan-yuguang-C", shortId: "C", left: 32.1, top: 26.9 },
  { id: "tainan-yuguang-D", shortId: "D", left: 40, top: 67.5 },
  { id: "tainan-yuguang-E", shortId: "E", left: 31.6, top: 58.8 },
  { id: "tainan-yuguang-F", shortId: "F", left: 26.4, top: 86.2 },
];

export default function Page() {
  const route = getTainanRouteBySlug("yuguang-island");
  if (!route) return null;

  return (
    <TainanRouteMapPageTemplate
      route={route}
      mapTitle="漁光島地圖區"
      mapContent={
        <TainanMapSection pins={mapPins} spots={tainanYuguangSpots} mapImage="/maps/yuguang-island/map.webp" />
      }
      spotCardsContent={<SpotCards spots={tainanYuguangSpots} />}
    />
  );
}
