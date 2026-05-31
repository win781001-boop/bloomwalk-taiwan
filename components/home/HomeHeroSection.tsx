import HomeEntryCards from "./HomeEntryCards";

export default function HomeHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bloom-sky-light via-bloom-cream to-bloom-green-light/40 px-4 pb-12 pt-12 sm:px-6 sm:pb-14 sm:pt-14 lg:pb-16 lg:pt-20">
      {/* Full-section background image */}
      <img
        src="/home/hero-park-dog.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 sm:opacity-45"
      />
      {/* Light overlay to ensure text/card readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bloom-sky-light/70 via-bloom-cream/60 to-bloom-green-light/40"
      />
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

      <div className="relative mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:items-start lg:gap-10">
        {/* ── Left: Hero text ─────────────────── */}
        <div className="text-center lg:text-left">
          {/* Tagline */}
          <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-[0.25em] text-bloom-green">
            WEEKEND BLOOM MAP
          </p>

          {/* Main heading */}
          <h1 className="animate-fade-in-up-delay-1 mt-3 text-3xl font-extrabold leading-tight tracking-tight text-bloom-text sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight">
            假日放電、散步、種花的
            <br />
            <span className="text-bloom-green">旅遊</span>地圖
          </h1>

          {/* Sub heading */}
          <p className="animate-fade-in-up-delay-2 mx-auto mt-3 max-w-xl text-base leading-relaxed text-bloom-text-light lg:mx-0">
            整理適合假日出門、輕鬆散步、順路種花與補給的景區路線，
            從城市、公園、港邊與老街開始，慢慢補齊更多地點。
          </p>
        </div>

        {/* ── Right: Entry cards 2×2 ─────────── */}
        <div className="mt-6 lg:mt-0">
          <HomeEntryCards />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bloom-cream to-transparent"
      />
    </section>
  );
}
