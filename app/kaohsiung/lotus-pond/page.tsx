import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import { kaohsiungLotusPondSpots } from "@/lib/kaohsiung-spots";
import RouteMapPageTemplate from "@/components/RouteMapPageTemplate";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = {
  title: "高雄蓮池潭龍虎塔皮克敏明信片路線｜湖景與經典地標",
  description:
    "高雄蓮池潭與龍虎塔皮克敏散步路線，適合收集湖景、經典地標與高雄經典觀光明信片。",
};

/** Map marker positions specific to the lotus-pond hand-drawn map */
const mapPins = [
  { id: "lotus-dragon-tiger-pagoda", shortId: "A", name: "龍虎塔", left: 31.5, top: 35.6 },
  { id: "lotus-chunqiu-pavilion", shortId: "B", name: "春秋閣", left: 38.3, top: 26.4 },
  { id: "lotus-beiji-pavilion", shortId: "C", name: "元帝廟北極亭", left: 57.5, top: 32.9 },
  { id: "lotus-lakeside-trail", shortId: "D", name: "蓮池潭環潭步道", left: 65.8, top: 21.8 },
  { id: "lotus-zuoying-temple", shortId: "E", name: "左營孔廟", left: 81.1, top: 22.7 },
  { id: "lotus-lotus-pond", shortId: "F", name: "蓮池潭", left: 47.9, top: 43.5 },
  { id: "lotus-children-park", shortId: "G", name: "蓮池潭兒童公園", left: 85.8, top: 45 },
  { id: "lotus-zhouzai-wetland", shortId: "H", name: "洲仔濕地", left: 51.9, top: 72.2 },
];

export default function Page() {
  const route = getRouteBySlug("lotus-pond");
  if (!route) return null;

  return (
    <RouteMapPageTemplate
      route={route}
      mapTitle="蓮池潭地圖區"
      mapContent={
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
          <img
            src="/maps/lianchihtan.png"
            alt="蓮池潭手繪地圖"
            className="h-full w-full object-contain"
          />
          {mapPins.map((pin) => (
            <div
              key={pin.id}
              title={pin.name}
              className="absolute"
              style={{
                left: `${pin.left}%`,
                top: `${pin.top}%`,
                width: 32,
                height: 32,
                borderRadius: "999px 999px 999px 8px",
                transform: "translate(-50%, -100%) rotate(-45deg)",
                border: "3px solid white",
                background: "#2f8fd8",
                color: "white",
                fontWeight: 900,
                boxShadow: "0 8px 18px rgba(21,90,140,.32)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <span style={{ rotate: "45deg", display: "block" }}>
                {pin.shortId}
              </span>
            </div>
          ))}
        </div>
      }
      spotCardsContent={<SpotCards spots={kaohsiungLotusPondSpots} />}
    />
  );
}
