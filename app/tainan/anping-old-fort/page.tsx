import type { Metadata } from "next";
import { getTainanRouteBySlug } from "@/lib/tainan-routes";
import { tainanAnpingSpots } from "@/lib/tainan-spots";
import TainanRouteMapPageTemplate from "@/components/TainanRouteMapPageTemplate";
import { TainanMapSection } from "@/components/TainanMapSection";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = {
  title: "安平古堡 | Bloom Walk",
  description: "安平古堡散步路線，適合皮克敏玩家收集臺南景點明信片、散步種花。",
};

const mapPins = [
  { id: "tainan-anping-A", shortId: "A", left: 61.2, top: 21.8 },
  { id: "tainan-anping-B", shortId: "B", left: 79.7, top: 8.8 },
  { id: "tainan-anping-C", shortId: "C", left: 32.5, top: 40.6 },
  { id: "tainan-anping-D", shortId: "D", left: 25, top: 44.6 },
  { id: "tainan-anping-E", shortId: "E", left: 58.2, top: 61.2 },
  { id: "tainan-anping-F", shortId: "F", left: 80.5, top: 35.4 },
  { id: "tainan-anping-G", shortId: "G", left: 90.4, top: 70.5 },
  { id: "tainan-anping-H", shortId: "H", left: 73.2, top: 22.4 },
];

export default function Page() {
  const route = getTainanRouteBySlug("anping-old-fort");
  if (!route) return null;

  return (
    <TainanRouteMapPageTemplate
      route={route}
      mapTitle="安平古堡地圖區"
      mapContent={
        <TainanMapSection pins={mapPins} spots={tainanAnpingSpots} mapImage="/maps/anping-old-fort/map.webp" />
      }
      spotCardsContent={<SpotCards spots={tainanAnpingSpots} />}
    />
  );
}
