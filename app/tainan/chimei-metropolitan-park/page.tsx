import type { Metadata } from "next";
import { getTainanRouteBySlug } from "@/lib/tainan-routes";
import { tainanChimeiSpots } from "@/lib/tainan-spots";
import TainanRouteMapPageTemplate from "@/components/TainanRouteMapPageTemplate";
import { TainanMapSection } from "@/components/TainanMapSection";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = {
  title: "奇美博物館・都會公園 | Bloom Walk",
  description: "奇美博物館散步路線，適合皮克敏玩家收集臺南景點明信片、散步種花。",
};

const mapPins = [
  { id: "tainan-chimei-A", shortId: "A", left: 52, top: 54.2 },
  { id: "tainan-chimei-B", shortId: "B", left: 42.5, top: 44.3 },
  { id: "tainan-chimei-C", shortId: "C", left: 36, top: 11.1 },
  { id: "tainan-chimei-D", shortId: "D", left: 42.5, top: 18.4 },
  { id: "tainan-chimei-E", shortId: "E", left: 26.1, top: 25.9 },
  { id: "tainan-chimei-F", shortId: "F", left: 38.5, top: 66.2 },
  { id: "tainan-chimei-G", shortId: "G", left: 34.3, top: 35 },
  { id: "tainan-chimei-H", shortId: "H", left: 95.3, top: 29.8 },
];

export default function Page() {
  const route = getTainanRouteBySlug("chimei-metropolitan-park");
  if (!route) return null;

  return (
    <TainanRouteMapPageTemplate
      route={route}
      mapTitle="奇美博物館地圖區"
      mapContent={
        <TainanMapSection pins={mapPins} spots={tainanChimeiSpots} mapImage="/maps/chimei-metropolitan-park/map.webp" />
      }
      spotCardsContent={<SpotCards spots={tainanChimeiSpots} />}
    />
  );
}
