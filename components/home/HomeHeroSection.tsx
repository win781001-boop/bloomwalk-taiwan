import HomeEntryCards from "./HomeEntryCards";

export default function HomeHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bloom-sky-light via-bloom-cream to-bloom-green-light/40 px-4 pb-12 pt-12 sm:px-6 sm:pb-14 sm:pt-14 lg:pb-16 lg:pt-20">
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

      <div className="relative z-10 mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-10">
        {/* ── Left: Hero text module ────────────── */}
        <div className="relative overflow-hidden rounded-2xl text-center lg:text-left h-full px-4 pt-6 pb-6 sm:px-6 sm:pt-8 sm:pb-8">
          {/* Background image — covers entire left module */}
          <img
            src="/home/hero-park-dog.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom opacity-65 sm:opacity-75"
          />
          {/* Top-to-bottom gradient overlay: fades upper portion so text is readable */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/20"
          />

          {/* Tagline */}
          <p className="animate-fade-in-up relative z-10 text-sm font-semibold uppercase tracking-[0.25em] text-bloom-green">
            WEEKEND BLOOM MAP
          </p>

          {/* Main heading */}
          <h1 className="animate-fade-in-up-delay-1 relative z-10 mt-3 text-3xl font-extrabold leading-tight tracking-tight text-bloom-text sm:text-4xl sm:leading-tight lg:text-4xl lg:leading-tight">
            假日放電、散步、種花的
            <br />
            <span className="text-bloom-green">旅遊</span>地圖
          </h1>

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
