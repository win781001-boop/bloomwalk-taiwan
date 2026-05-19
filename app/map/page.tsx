export default function MapPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* ═══════════════════════════════════════════
          Header / Nav
          ═══════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 border-b border-bloom-green-light/60 bg-bloom-cream/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 text-bloom-green-dark no-underline">
            <span className="text-2xl" role="img" aria-hidden="true">
              🌼
            </span>
            <span className="text-lg font-bold tracking-tight">Bloom Walk Taiwan</span>
          </a>

          {/* Nav links */}
          <nav className="hidden gap-6 text-sm font-medium text-bloom-text-light sm:flex">
            <a
              href="/map"
              className="font-semibold text-bloom-green transition-colors hover:text-bloom-green-dark"
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

      {/* ═══════════════════════════════════════════
          Main Content
          ═══════════════════════════════════════════ */}
      <main className="flex-1">
        <section className="bg-bloom-cream px-4 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-bloom-text sm:text-5xl">
              全台皮克敏散步地圖
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-bloom-text-light sm:text-lg">
              BloomWalk Taiwan
              將逐步整理全台適合皮克敏玩家散步、種花與社群日活動的地點。
              第一階段先開放高雄路線。
            </p>
          </div>

          {/* City list */}
          <div className="mx-auto mt-14 max-w-md space-y-4">
            <a
              href="/kaohsiung"
              className="flex items-center justify-between rounded-xl border border-bloom-green-light/50 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="font-semibold text-bloom-text">高雄</span>
              <span className="text-sm font-medium text-bloom-green">
                已開放 →
              </span>
            </a>

            {["台南", "嘉義", "台中", "台北"].map((city) => (
              <div
                key={city}
                className="flex items-center justify-between rounded-xl border border-bloom-green-light/30 bg-white/60 px-5 py-4 text-bloom-text-light/60"
              >
                <span className="font-medium">{city}</span>
                <span className="text-sm">即將整理</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════════════════
          Footer
          ═══════════════════════════════════════════ */}
      <footer className="border-t border-bloom-green-light/40 bg-bloom-cream px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          {/* Brand */}
          <div className="flex items-center gap-2 text-sm text-bloom-text-light">
            <span role="img" aria-hidden="true">
              🌼
            </span>
            <span>Bloom Walk Taiwan</span>
          </div>

          {/* Disclaimer */}
          <p className="max-w-lg text-xs leading-relaxed text-bloom-text-light/60">
            BloomWalk 是玩家自製的散步路線整理網站，非官方網站，與 Nintendo、
            Niantic 或 Pikmin Bloom 官方無關。路線內容僅供參考，實際交通、開放時間
            與現場狀況請以官方公告及現場資訊為準。
          </p>

          <p className="text-xs text-bloom-text-light/50">
            © {new Date().getFullYear()} Bloom Walk Taiwan.
          </p>
        </div>
      </footer>
    </div>
  );
}
