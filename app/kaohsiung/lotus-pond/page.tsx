import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import { RouteDetailPage } from "../RouteDetailPage";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = {
  title: "高雄蓮池潭龍虎塔皮克敏明信片路線｜湖景與傳統地標",
  description:
    "高雄蓮池潭與龍虎塔皮克敏散步路線，適合收集湖景、傳統地標與高雄經典觀光明信片。",
};

const spots = [
  {
    id: "A",
    name: "龍虎塔",
    type: "明信片 / 拍照點",
    desc: "蓮池潭代表地標，適合拍照與明信片收集。",
    left: 31.5,
    top: 35.6,
    image: "",
    mapUrl: "",
  },
  {
    id: "B",
    name: "春秋閣",
    type: "景點 / 步行路線",
    desc: "靠近湖岸步道，可接續龍虎塔安排散步。",
    left: 38.3,
    top: 26.4,
    image: "",
    mapUrl: "",
  },
  {
    id: "C",
    name: "元帝廟北極亭",
    type: "湖中景點",
    desc: "湖面視覺焦點，可作為路線中段停留點。",
    left: 57.5,
    top: 32.9,
    image: "",
    mapUrl: "",
  },
  {
    id: "D",
    name: "蓮池潭環潭步道",
    type: "種花路線",
    desc: "適合 Pikmin Bloom 玩家規劃種花與散步。",
    left: 65.8,
    top: 21.8,
    image: "",
    mapUrl: "",
  },
  {
    id: "E",
    name: "左營孔廟",
    type: "文化景點",
    desc: "蓮池潭東北側文化景點，適合半日遊延伸。",
    left: 81.1,
    top: 22.7,
    image: "",
    mapUrl: "",
  },
  {
    id: "F",
    name: "蓮池潭",
    type: "湖泊",
    desc: "湖畔自然景觀，適合散步與親子路線。",
    left: 47.9,
    top: 43.5,
    image: "",
    mapUrl: "",
  },
  {
    id: "G",
    name: "蓮池潭兒童公園",
    type: "公園 / 休息",
    desc: "兒童遊憩場所，適合放風。",
    left: 85.8,
    top: 45,
    image: "",
    mapUrl: "",
  },
  {
    id: "H",
    name: "洲仔濕地",
    type: "自然 / 公園",
    desc: "自然景觀，適合生態教育。",
    left: 51.9,
    top: 72.2,
    image: "",
    mapUrl: "",
  },
];

export default function Page() {
  const route = getRouteBySlug("lotus-pond");
  if (!route) return null;

  return (
    <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 px-4 py-8 lg:grid-cols-[minmax(0,1fr)_680px]">
      {/* 手机版：卡片在主内容上方；桌机版：grid 自动推到右侧 */}
      <aside className="lg:order-2">
        <div className="space-y-6 lg:mt-16">
          {/* 上方：手繪地圖區 */}
          <div className="rounded-3xl bg-white p-4 shadow-xl">
            <h2 className="mb-4 text-lg font-bold text-bloom-text">蓮池潭地圖區</h2>

            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
              <img
                src="/maps/lianchihtan.png"
                alt="蓮池潭手繪地圖"
                className="h-full w-full object-contain"
              />
              {spots.map((spot) => (
                <div
                  key={spot.id}
                  title={spot.name}
                  className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white shadow-md"
                  style={{ left: `${spot.left}%`, top: `${spot.top}%` }}
                >
                  {spot.id}
                </div>
              ))}
            </div>
          </div>

          {/* 下方：景點卡 */}
          <SpotCards />
        </div>
      </aside>

      {/* 主内容：桌面版在左侧，手机版在卡片下方 */}
      <div className="min-w-0 lg:order-1">
        <RouteDetailPage route={route} />
      </div>
    </div>
  );
}

