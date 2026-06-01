import { counties } from "@/lib/counties";
import SiteHeader from "@/components/SiteHeader";

function landmarkImage(slug: string): string {
  // two county slugs differ from their filename
  const map: Record<string, string> = {
    hsinchu: "hsinchu-county",
    chiayi: "chiayi-county",
  };
  return `/city-landmarks-webp/${map[slug] ?? slug}.webp`;
}

export default function MapPage() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-bloom-cream px-4 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28">
          <div className="mx-auto max-w-6xl">
            {/* Page header */}
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-bloom-text sm:text-5xl">
                散步路線地圖
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-bloom-text-light sm:text-lg">
                BloomWalk
                正在逐一整理適合散步、種花與社群日活動的景區路線。
                各縣市路線骨架已預留，內容將在後續更新中陸續上線。
              </p>
            </div>

            {/* 22-county grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
              {counties.map((county) => {
                const href =
                  county.slug === "kaohsiung"
                    ? "/kaohsiung"
                    : `/${county.slug}`;

                return (
                  <a
                    key={county.slug}
                    href={href}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-bloom-green-light/40 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 sm:p-5 md:p-6"
                  >
                    {/* Landmark background — full card */}
                    <img
                      src={landmarkImage(county.slug)}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      decoding="async" className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover opacity-[0.45]"
                    />
                    {/* White overlay for text readability */}
                    <div className="pointer-events-none absolute inset-0 z-[1] bg-white/42" />

                    {/* Content wrapper — above the overlay */}
                    <div className="relative z-[2]">
                      {/* County name */}
                      <h2 className="text-xl font-bold tracking-tight text-bloom-text md:text-2xl">
                        {county.name}
                      </h2>
                      <p className="mt-0.5 text-xs text-[#1f3a5f]">
                        {county.nameEn}
                      </p>

                      {/* Spacer */}
                      <div className="mt-4 flex items-center gap-2">
                        <span className="inline-block rounded-full border border-bloom-gold/30 bg-bloom-gold-light/40 px-2.5 py-0.5 text-xs text-bloom-text-light">
                          骨架建立中
                        </span>
                        <span className="text-xs text-slate-500">
                          {county.routeCount} 條路線
                        </span>
                      </div>
                    </div>

                    {/* Hover CTA — outside content wrapper to keep mt-auto in flex */}
                    <span className="mt-auto flex items-center gap-1 pt-4 text-sm font-medium text-[#1f3a5f] transition-all duration-300 group-hover:gap-2">
                      查看縣市頁面
                      <svg
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-bloom-green-light/40 bg-bloom-cream px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-sm text-bloom-text-light">
            <span role="img" aria-hidden="true">🌼</span>
            <span>Bloom Walk</span>
          </div>
          <p className="max-w-lg text-xs leading-relaxed text-bloom-text-light/60">
            BloomWalk 是玩家自製的散步路線整理網站，非官方網站，與 Nintendo、
            Niantic 或 Pikmin Bloom 官方無關。路線內容僅供參考，實際交通、開放時間
            與場地狀況請以官方公告及現場資訊為準。
          </p>
          <p className="text-xs text-bloom-text-light/50">
            &copy; {new Date().getFullYear()} Bloom Walk.
          </p>
        </div>
      </footer>
    </div>
  );
}






