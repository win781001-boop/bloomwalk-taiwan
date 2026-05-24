import type { Metadata } from "next";
import { chiayiCityRoutes } from "@/lib/chiayi-city-routes";
import type { RouteData } from "@/lib/route-types";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  robots: { index: false },
};

function RatingBar({
  value,
  max = 5,
  color = "bg-bloom-gold",
}: {
  value: number;
  max?: number;
  color?: string;
}) {
  return (
    <div className="flex gap-1" aria-label={`${value}/${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 w-5 rounded-full ${i < value ? color : "bg-bloom-green-light/50"}`}
        />
      ))}
    </div>
  );
}

function appealLabel(score: number) {
  if (score === 5) return "嘉義市代表地標，值得特地收集";
  if (score === 4) return "有特色，適合順路安排";
  return "實用散步點，明信片吸引力普通";
}

export default function Page() {
  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-bloom-sky-light via-bloom-cream to-bloom-cream px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-bloom-green">
              嘉義市 Chiayi City
            </p>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-bloom-text sm:text-5xl">
              嘉義市皮克敏明信片散步路線
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-bloom-text-light sm:text-lg">
              整理嘉義市長期存在、適合皮克敏玩家散步、種花、補步數與收集景點明信片的路線。
              本縣市路線骨架已建立，內容待後續更新上線。
            </p>
            <div className="mx-auto mt-6 max-w-xl rounded-xl border border-bloom-gold/30 bg-bloom-gold-light/40 px-5 py-3 text-left text-sm leading-relaxed text-bloom-text-light">
              <span className="font-semibold text-bloom-text">
                🗇 長期景點為源
              </span>
              <br />
              本站優先整理長期景點，不追逐期間限定活動，避免路線內容因活動結束而失效。
            </div>
          </div>
        </section>

        <section className="bg-bloom-cream px-4 pb-24 sm:px-6 sm:pb-32">
          <div className="mx-auto max-w-3xl space-y-6">
            {chiayiCityRoutes.map((route) => (
              <Card key={route.slug} route={route} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-bloom-green-light/40 bg-bloom-cream px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-sm text-bloom-text-light">
            <span role="img" aria-hidden="true">🌼</span>
            <span>Bloom Walk Taiwan</span>
          </div>
          <p className="max-w-lg text-xs leading-relaxed text-bloom-text-light/60">
            BloomWalk 是玩家自製的散步路線整理網站，非官方網站，與 Nintendo、
            Niantic 或 Pikmin Bloom 官方無關。路線內容僅供參考，實際交通、開放時間
            與場地狀況請以官方公告及現場資訊為準。
          </p>
          <p className="text-xs text-bloom-text-light/50">
            &copy; {new Date().getFullYear()} Bloom Walk Taiwan.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Card({ route }: { route: RouteData }) {
  return (
    <div className="rounded-2xl border border-bloom-green-light/50 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-7">
      <div className="flex items-start gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl sm:h-14 sm:w-14 sm:text-3xl"
          style={{ backgroundColor: "#E8F0DE" }}
        >
          <span role="img" aria-hidden="true">{route.icon}</span>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold tracking-tight text-bloom-text sm:text-xl">
            {route.name}
          </h2>
          <p className="mt-0.5 text-xs font-medium text-bloom-green">
            {route.area}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-bloom-text-light sm:text-base">
            {route.summary}
          </p>
        </div>
      </div>

      <hr className="my-5 border-bloom-green-light/30" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-bloom-text-light">
            📸 明信片吸引力
          </p>
          <RatingBar value={route.postcardAppeal} />
          <p className="mt-1 text-xs font-medium text-bloom-gold">
            {route.postcardAppeal}/5 — {appealLabel(route.postcardAppeal)}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-bloom-text-light/70">
            {route.postcardReason}
          </p>
        </div>

        <div className="space-y-3">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-bloom-text-light">
              🚶 散步舒適度
            </p>
            <RatingBar value={route.walkingComfort} color="bg-bloom-green" />
            <p className="mt-0.5 text-xs text-bloom-text-light/70">{route.walkingComfort}/5</p>
          </div>
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-bloom-text-light">
              🚌 交通便利度
            </p>
            <RatingBar value={route.transportConvenience} color="bg-bloom-sky" />
            <p className="mt-0.5 text-xs text-bloom-text-light/70">{route.transportConvenience}/5</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-xs text-bloom-text-light">
        <span>⏱️ 建議時間：{route.duration}</span>
        <span>🌤️ 適合時段：{route.bestTime}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {route.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block rounded-full border border-bloom-green-light/40 bg-bloom-green-light/30 px-3 py-0.5 text-xs text-bloom-green-dark"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5">
        <a
          href={"/chiayi-city/" + route.slug}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-bloom-green transition-all duration-300 hover:gap-2.5 hover:text-bloom-green-dark"
        >
          查看路線
          <svg className="h-3.5 w-3.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}