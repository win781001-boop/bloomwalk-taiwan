/* ═══════════════════════════════════════════
   单一路线页共用元件
   供 /kaohsiung/[slug] 各页面使用
   ═══════════════════════════════════════════ */

import type { KaohsiungRoute } from "@/lib/kaohsiung-routes";
import { kaohsiungRoutes } from "@/lib/kaohsiung-routes";
import { categoryIconMap, categoryNames } from "@/lib/category-icons";

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
  if (score === 5) return "高雄代表地標，值得特地去收集";
  if (score === 4) return "有特色，適合順路安排";
  return "實用散步點，明信片吸引力普通";
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-bold tracking-tight text-bloom-text sm:text-xl">
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-bloom-text-light sm:text-base">
        {children}
      </div>
    </div>
  );
}

export function RouteDetailPage({ route, hideHeader }: { route: KaohsiungRoute; hideHeader?: boolean }) {
  const nearby = route.nearbyRoutes
    .map((slug) => kaohsiungRoutes.find((r) => r.slug === slug))
    .filter(Boolean) as KaohsiungRoute[];

  return (
    <div className="flex flex-col flex-1">
      {!hideHeader && (<>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-bloom-green-light/60 bg-bloom-cream/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2.5 text-bloom-green-dark no-underline">
            <span className="text-2xl" role="img" aria-hidden="true">🌼</span>
            <span className="text-lg font-bold tracking-tight">Bloom Walk</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-bloom-text-light sm:flex">
            <a href="/map" className="transition-colors hover:text-bloom-green">探索地圖</a>
            <a href="/kaohsiung/community-day" className="transition-colors hover:text-bloom-green">社群日</a>
          </nav>
        </div>
      </header>
      </>)}

      <main className="flex-1">
        {/* Hero */}
        <section className={
  hideHeader
    ? 'bg-gradient-to-b from-bloom-sky-light via-bloom-cream to-bloom-cream px-4 pb-12 sm:px-6 sm:pb-16 pt-6 sm:pt-10'
    : 'bg-gradient-to-b from-bloom-sky-light via-bloom-cream to-bloom-cream px-4 pb-12 sm:px-6 sm:pb-16 pt-20 sm:pt-28'
}>
          <div className="mx-auto max-w-3xl">
            <nav className="mb-6 text-xs text-bloom-text-light/60">
              <a href="/" className="hover:text-bloom-green">首頁</a>
              <span className="mx-2">/</span>
              <a href="/kaohsiung" className="hover:text-bloom-green">高雄</a>
              <span className="mx-2">/</span>
              <span className="text-bloom-text-light">{route.name}</span>
            </nav>

            <div className="flex items-start gap-4">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl sm:h-16 sm:w-16"
                style={{ backgroundColor: "#E8F0DE" }}
              >
                <img src={categoryIconMap[route.primaryCategory]} alt={categoryNames[route.primaryCategory]} className="h-10 w-10 object-contain sm:h-12 sm:w-12" />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-bloom-text sm:text-4xl">
                  {route.name}
                </h1>
                <p className="mt-1 text-sm font-medium text-bloom-green">{route.area}</p>
                <p className="mt-2 text-base leading-relaxed text-bloom-text-light sm:text-lg">
                  {route.summary}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 rounded-xl border border-bloom-green-light/40 bg-white/70 p-5 sm:grid-cols-2">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-bloom-text-light">
                  ⭐ 明信片吸引力
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
                    🚇 交通便利度
                  </p>
                  <RatingBar value={route.transportConvenience} color="bg-bloom-sky" />
                  <p className="mt-0.5 text-xs text-bloom-text-light/70">{route.transportConvenience}/5</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detail sections */}
        <section className="bg-bloom-cream px-4 pb-24 sm:px-6 sm:pb-32">
          <div className="mx-auto max-w-3xl space-y-10">
            <div className="flex flex-wrap gap-x-8 gap-y-2 rounded-xl border border-bloom-green-light/30 bg-white/60 px-5 py-4 text-sm text-bloom-text-light">
              <span>⏱ 建議時間：{route.duration}</span>
              <span>🕐 適合時段：{route.bestTime}</span>
              <span>🚇 交通：{route.transport}</span>
            </div>

            <Section title="🍃 為什麼值得去">
              <p className="leading-relaxed">{route.whyVisit}</p>
            </Section>

            <Section title="🗺 建議走法">
              <ol className="list-decimal space-y-2 pl-5">
                {route.routeSteps.map((step, i) => (
                  <li key={i} className="leading-relaxed">{step}</li>
                ))}
              </ol>
            </Section>

            <Section title="🌼 適合皮克敏玩家的原因">
              <ul className="space-y-2">
                {route.pikminReasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-0.5 shrink-0 text-bloom-green">✓</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="⚠ 注意事項">
              <ul className="space-y-2">
                {route.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-0.5 shrink-0 text-bloom-gold">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="🍵 附近休息與補給">
              <p className="mb-3 text-xs leading-relaxed text-bloom-text-light/60">
                以下為周邊補給類型，非特定店家推薦。實際營業時間與狀況請以現場為準。
              </p>
              <ul className="space-y-2">
                {route.supplies.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-0.5 shrink-0 text-bloom-sky">▸</span>
                    {s}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Google Maps */}
            <div className="text-center">
              <a
                href={route.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-bloom-green bg-transparent px-6 py-3 text-sm font-semibold text-bloom-green transition-all duration-300 hover:bg-bloom-green hover:text-white"
              >
                📍 在 Google Maps 查看位置
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Related routes */}
            {nearby.length > 0 && (
              <Section title="🔗 相關路線">
                <div className="grid gap-3 sm:grid-cols-2">
                  {nearby.map((r) => (
                    <a
                      key={r.slug}
                      href={`/kaohsiung/${r.slug}`}
                      className="flex items-center gap-3 rounded-xl border border-bloom-green-light/40 bg-white px-4 py-3 text-sm font-medium text-bloom-text transition-all duration-300 hover:border-bloom-green hover:shadow-sm"
                    >
                      <img src={categoryIconMap[r.primaryCategory]} alt={categoryNames[r.primaryCategory]} className="h-6 w-6 object-contain" />
                      {r.name}
                      <svg className="ml-auto h-3.5 w-3.5 text-bloom-green" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </Section>
            )}

            {/* Back link */}
            <div className="text-center">
              <a
                href="/kaohsiung"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-bloom-text-light transition-colors hover:text-bloom-green"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                回到高雄路線列表
              </a>
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
            與現場狀況請以官方公告及現場資訊為準。
          </p>
          <p className="text-xs text-bloom-text-light/50">
            © {new Date().getFullYear()} Bloom Walk.
          </p>
        </div>
      </footer>
    </div>
  );
}
