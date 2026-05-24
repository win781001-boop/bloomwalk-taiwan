import { notFound } from "next/navigation";
import { getCountyBySlug } from "@/lib/counties";
import SiteHeader from "@/components/SiteHeader";

export default async function CountyPage({
  params,
}: {
  params: Promise<{ county: string }>;
}) {
  const { county: slug } = await params;
  const county = getCountyBySlug(slug);
  if (!county) notFound();

  return (
    <div className="flex flex-col flex-1">
      <SiteHeader />

      <main className="flex-1">
        {/* County header */}
        <section className="bg-gradient-to-b from-bloom-sky-light via-bloom-cream to-bloom-cream px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-bloom-green">
              {county.nameEn}
            </p>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-bloom-text sm:text-5xl">
              {county.name}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-bloom-text-light sm:text-lg">
              {county.name}
              的散步路線骨架已預留，內容與照片待補。各地景區路線將在後續更新中逐一上線。
            </p>
            <div className="mx-auto mt-6 inline-block rounded-full border border-bloom-gold/30 bg-bloom-gold-light/40 px-5 py-2 text-sm text-bloom-text-light">
              骨架建立中 · 路線規劃已預留
            </div>
          </div>
        </section>

        {/* Placeholder route cards */}
        <section className="bg-bloom-cream px-4 pb-24 sm:px-6 sm:pb-32">
          <div className="mx-auto max-w-3xl space-y-6">
            {Array.from({ length: county.routeCount }, (_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-bloom-green-light/30 bg-white/70 p-5 shadow-sm sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-bloom-green-light/30 text-lg text-bloom-text-light sm:h-14 sm:w-14 sm:text-xl">
                    {i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-bold tracking-tight text-bloom-text/50 sm:text-xl">
                      路線 {i + 1} 待命名
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-bloom-text-light/50">
                      此路線內容尚未整理，將在後續更新中補上詳細資訊、地圖與景點標記。
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
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
