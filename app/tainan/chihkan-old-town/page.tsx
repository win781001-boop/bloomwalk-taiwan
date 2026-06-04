import type { Metadata } from "next";
import { getTainanRouteBySlug } from "@/lib/tainan-routes";
import { tainanChihkanSpots } from "@/lib/tainan-spots";
import TainanRouteMapPageTemplate from "@/components/TainanRouteMapPageTemplate";
import { TainanMapSection } from "@/components/TainanMapSection";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = {
  title: "赤崁樓・府城古蹟 | Bloom Walk",
  description: "赤崁樓散步路線，適合皮克敏玩家收集臺南景點明信片、散步種花。",
};

const mapPins = [
  { id: "tainan-chihkan-A", shortId: "A", left: 79.8, top: 13.7 },
  { id: "tainan-chihkan-B", shortId: "B", left: 26.6, top: 17.8 },
  { id: "tainan-chihkan-C", shortId: "C", left: 5.5, top: 87.2 },
  { id: "tainan-chihkan-D", shortId: "D", left: 26.9, top: 72 },
  { id: "tainan-chihkan-E", shortId: "E", left: 59.4, top: 89.4 },
  { id: "tainan-chihkan-F", shortId: "F", left: 79.7, top: 52.3 },
];

export default function Page() {
  const route = getTainanRouteBySlug("chihkan-old-town");
  if (!route) return null;

  return (
    <TainanRouteMapPageTemplate
      route={route}
      mapTitle="赤崁樓地圖區"
      mapContent={
        <TainanMapSection pins={mapPins} spots={tainanChihkanSpots} mapImage="/maps/chihkan-old-town/map.webp" />
      }
      spotCardsContent={<SpotCards spots={tainanChihkanSpots} />}
    />
  );
}
