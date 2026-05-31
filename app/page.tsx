export default function Home() {
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
            <span className="text-lg font-bold tracking-tight">Bloom Walk</span>
          </a>

          {/* Nav links */}
          <nav className="hidden gap-6 text-sm font-medium text-bloom-text-light sm:flex">
            <a href="/map" className="transition-colors hover:text-bloom-green">
              探索地圖
            </a>
            <a href="/kaohsiung/community-day" className="transition-colors hover:text-bloom-green">
              社群日
            </a>
          </nav>
        </div>
      </header>

      {/* ═══════════════════════════════════════════
          Main Content
          ═══════════════════════════════════════════ */}
      <main className="flex-1">
        {/* ── Hero ────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-bloom-sky-light via-bloom-cream to-bloom-green-light/40 px-4 pb-24 pt-20 sm:px-6 sm:pb-36 sm:pt-28">
          {/* Decorative blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-bloom-pink/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-12 h-64 w-64 rounded-full bg-bloom-gold/12 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-8 left-1/3 h-48 w-48 rounded-full bg-bloom-green/8 blur-3xl"
          />
          {/* Tiny floating dots */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[15%] top-[20%] h-3 w-3 rounded-full bg-bloom-pink/40 animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[20%] top-[30%] h-2 w-2 rounded-full bg-bloom-gold/50 animate-float"
            style={{ animationDelay: "1.2s" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[30%] left-[60%] h-2.5 w-2.5 rounded-full bg-bloom-sky/50 animate-float"
            style={{ animationDelay: "2.5s" }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Site name */}
            <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-[0.25em] text-bloom-green">
              WEEKEND BLOOM MAP
            </p>

            {/* Main heading */}
            <h1 className="animate-fade-in-up-delay-1 mt-5 text-3xl font-extrabold leading-tight tracking-tight text-bloom-text sm:text-5xl sm:leading-tight">
              假日放電、散步、種花的
              <br />
              <span className="text-bloom-green">旅遊</span>地圖
            </h1>

            {/* Sub-heading */}
            <p className="animate-fade-in-up-delay-2 mx-auto mt-6 max-w-xl text-base leading-relaxed text-bloom-text-light sm:text-lg">
              整理適合假日出門、輕鬆散步、順路種花與補給的景區路線，
              <br className="hidden sm:block" />
              從城市、公園、港邊與老街開始，慢慢補齊更多地點。
            </p>

            {/* CTA */}
            <div className="animate-fade-in-up-delay-3 mt-10">
              <a
                href="#explore"
                className="inline-flex items-center gap-2 rounded-full bg-bloom-green px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-bloom-green/25 transition-all duration-300 hover:bg-bloom-green-dark hover:shadow-xl hover:shadow-bloom-green/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                開始探索
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bloom-cream to-transparent"
          />
        </section>

        {/* ── Entry Cards ──────────────────────── */}
        <section id="explore" className="bg-bloom-cream px-4 pb-24 sm:px-6 sm:pb-32">
          <div className="mx-auto max-w-6xl">
            {/* Section header */}
            <div className="mb-14 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-bloom-text sm:text-3xl">
                探索你的 Bloom 地圖
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-bloom-text-light sm:text-base">
                點選下方入口，找到最適合你的散步路線、種花熱點與補給站資訊。
              </p>
            </div>

            {/* Card grid */}
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
              {CARDS.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="group flex flex-col rounded-2xl border border-bloom-green-light/50 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-bloom-green/8 hover:-translate-y-1 sm:p-8"
                >
                  {/* Icon */}
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl sm:h-16 sm:w-16 sm:text-3xl"
                    style={{
                      backgroundColor: card.bgColor,
                    }}
                  >
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold tracking-tight text-bloom-text sm:text-xl">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-relaxed text-bloom-text-light sm:text-base">
                    {card.description}
                  </p>

                  {/* Button */}
                  <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-bloom-green transition-all duration-300 group-hover:gap-2">
                    {card.buttonLabel}
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Latest Updates ───────────────────── */}
        <section className="bg-bloom-green-light/30 px-4 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-bloom-green/30 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-bloom-green">
              最新更新
            </span>

            <h2 className="mt-6 text-2xl font-bold tracking-tight text-bloom-text sm:text-3xl">
              近期路線更新
            </h2>

            <ul className="mx-auto mt-8 max-w-md space-y-4 text-left">
              <li className="flex items-center gap-3 rounded-xl border border-bloom-green-light/50 bg-white/80 px-5 py-3 text-sm text-bloom-text">
                <span className="text-lg" role="img" aria-hidden="true">
                  🌸
                </span>
                蓮池潭、西子灣、駁二哈瑪星等散步路線
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-bloom-green-light/50 bg-white/80 px-5 py-3 text-sm text-bloom-text">
                <span className="text-lg" role="img" aria-hidden="true">
                  🌿
                </span>
                高雄駁二藝術特區路線
              </li>
              <li className="flex items-center gap-3 rounded-xl border border-bloom-green-light/50 bg-white/80 px-5 py-3 text-sm text-bloom-text">
                <span className="text-lg" role="img" aria-hidden="true">
                  👥
                </span>
                高雄社群日推薦路線
              </li>
            </ul>
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
            <span>Bloom Walk</span>
          </div>

          {/* Disclaimer */}
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

/* ── Static card data ──────────────────────── */

type EntryCard = {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  href: string;
  buttonLabel: string;
};

const CARDS: EntryCard[] = [
  {
    title: "種花散步地圖",
    description: "先開放高雄路線，其他縣市將陸續整理。",
    icon: "🌸",
    bgColor: "#FDE8EC",
    href: "/map",
    buttonLabel: "查看高雄路線",
  },
  {
    title: "社群日活動路線",
    description:
      "整理適合社群日散步、補步數與休息的路線，第一階段先開放高雄版。",
    icon: "👥",
    bgColor: "#FFF3DC",
    href: "/kaohsiung/community-day",
    buttonLabel: "查看高雄社群日",
  },
  {
    title: "熱門散步景點",
    description:
      "從蓮池潭、西子灣、駁二等熱門景點開始，慢慢補上適合散步的地點。",
    icon: "🌿",
    bgColor: "#E8F4FA",
    href: "/kaohsiung",
    buttonLabel: "查看景點",
  },
  {
    title: "新手散步攻略",
    description:
      "整理適合剛加入 Pikmin Bloom 的玩家的散步、種花與路線選擇建議。",
    icon: "👣",
    bgColor: "#E8F0DE",
    href: "#",
    buttonLabel: "即將整理",
  },
];
