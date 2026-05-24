import type { Metadata } from "next";
import { getRouteBySlug } from "@/lib/kaohsiung-routes";
import { RouteDetailPage } from "../RouteDetailPage";
import { SpotCards } from "./SpotCards";

export const metadata: Metadata = {
  title: "高雄哈瑪星鐵道文化園區皮克敏散步路線｜鐵道草地與港區散步",
  description:
    "高雄哈瑪星鐵道文化園區皮克敏散步路線，適合鐵道景觀、草地慢走、親子散步與港區順遊。",
};

export default function Page() {
  const route = getRouteBySlug("haramasen-railway");
  if (!route) return null;

  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-50 border-b border-bloom-green-light/60 bg-bloom-cream/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2.5 text-bloom-green-dark no-underline">
            <span className="text-2xl" role="img" aria-hidden="true">🌼</span>
            <span className="text-lg font-bold tracking-tight">Bloom Walk Taiwan</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-bloom-text-light sm:flex">
            <a href="/map" className="transition-colors hover:text-bloom-green">探索地圖</a>
            <a href="/kaohsiung/community-day" className="transition-colors hover:text-bloom-green">社群日</a>
          </nav>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-6 px-4 py-8 lg:grid-cols-[minmax(0,1fr)_680px]">
        <aside className="lg:order-2">
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-4 shadow-xl">
              <h2 className="mb-4 text-lg font-bold text-bloom-text">哈瑪星鐵道文化園區地圖區</h2>
              <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
                <div className="text-center">
                  <p className="text-sm font-medium text-slate-400">哈瑪星鐵道文化園區地圖待補</p>
                  <p className="mt-1 text-xs text-slate-300">地圖底圖上傳後即可加入景點標記</p>
                </div>
              </div>
            </div>
            <SpotCards />
          </div>
        </aside>
        <div className="min-w-0 lg:order-1">
          <RouteDetailPage route={route} hideHeader />
        </div>
      </div>
    </div>
  );
}
