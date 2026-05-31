import { kaohsiungRoutes } from "@/lib/kaohsiung-routes";

import {
  kaohsiungLotusPondSpots,
  kaohsiungPier2Spots,
  kaohsiungQijinSpots,
  kaohsiungChengcingLakeSpots,
  kaohsiungSizihwanSpots,
  kaohsiungQiaotouSugarRefinerySpots,
} from "@/lib/kaohsiung-spots";
import type { Spot } from "@/lib/spot-types";
import { RouteCard } from "@/components/RouteCard";

/* ── 路线背景图辅助 ────────────────────────── */

const kaohsiungSpotsById = new Map<string, Spot>();
[
  ...kaohsiungLotusPondSpots,
  ...kaohsiungPier2Spots,
  ...kaohsiungQijinSpots,
  ...kaohsiungChengcingLakeSpots,
  ...kaohsiungSizihwanSpots,
  ...kaohsiungQiaotouSugarRefinerySpots,
].forEach((s) => kaohsiungSpotsById.set(s.id, s));

function getRouteBgImage(route: { slug: string; spotIds?: string[] }): string | null {
  if (!route.spotIds || route.spotIds.length === 0) return null;
  const idx = route.slug.length % route.spotIds.length;
  const id = route.spotIds[idx];
  const spot = kaohsiungSpotsById.get(id);
  return spot?.imagePlaceholder ?? null;
}

function appealLabel(score: number) {
  if (score === 5) return "高雄代表地標，值得特地去收集";
  if (score === 4) return "有特色，適合順路安排";
  return "實用散步點，明信片吸引力普通";
}

export default function KaohsiungPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-bloom-green-light/60 bg-bloom-cream/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a
            href="/"
            className="flex items-center gap-2.5 text-bloom-green-dark no-underline"
          >
            <span className="text-2xl" role="img" aria-hidden="true">
              🌼
            </span>
            <span className="text-lg font-bold tracking-tight">
              Bloom Walk
            </span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-bloom-text-light sm:flex">
            <a
              href="/map"
              className="transition-colors hover:text-bloom-green"
            >
              探索地圖
            </a>
            <a
              href="/kaohsiung/community-day"
              className="transition-colors hover:text-bloom-green"
            >
              社群日
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-b from-bloom-sky-light via-bloom-cream to-bloom-cream px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-bloom-green">
              高雄 Kaohsiung
            </p>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-bloom-text sm:text-5xl">
              高雄皮克敏明信片散步路線
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-bloom-text-light sm:text-lg">
              整理高雄長期存在、適合皮克敏玩家散步、種花、補步數與收集景點明信片的路線。
              第一版優先收錄不容易過期的港灣、海景、湖景與地標型景點。
            </p>
            <div className="mx-auto mt-6 max-w-xl rounded-xl border border-bloom-gold/30 bg-bloom-gold-light/40 px-5 py-3 text-left text-sm leading-relaxed text-bloom-text-light">
              <span className="font-semibold text-bloom-text">
                📌 長期景點原則
              </span>
              <br />
              本站優先整理長期景點，不追逐期間限定活動，避免路線內容因活動結束而失效。
            </div>
          </div>
        </section>

        <section className="bg-bloom-cream px-4 pb-24 sm:px-6 sm:pb-32">
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">
            {kaohsiungRoutes.filter(r => r.status !== "draft").map((route) => (
              <RouteCard
                key={route.slug}
                route={route}
                backgroundImage={getRouteBgImage(route)}
                baseHref="/kaohsiung"
                appealLabel={appealLabel}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-bloom-green-light/40 bg-bloom-cream px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-sm text-bloom-text-light">
            <span role="img" aria-hidden="true">🌼</span>
            <span>Bloom Walk</span>
          </div>
          <p className="max-w-lg text-xs leading-relaxed text-bloom-text-light/60">
            BloomWalk 是玩家自製的散步路線整理網站，非官方網站，與 Nintendo、
            Niantic 或 Pikmin Bloom 官方無關。路線內容僅供參考，實際交通、開放時間
            與現場狀況請以官方公告及現場資訊為準。
          </p>
          <p className="text-xs text-bloom-text-light/50">
            &copy; {new Date().getFullYear()} Bloom Walk.
          </p>
        </div>
      </footer>
    </div>
  );
}