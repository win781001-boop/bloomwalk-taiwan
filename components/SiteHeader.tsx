export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-bloom-green-light/60 bg-bloom-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6">
        <a
          href="/"
          className="flex items-center gap-2.5 text-bloom-green-dark no-underline"
        >
          <span className="text-2xl" role="img" aria-hidden="true">
            🌼
          </span>
          <span className="text-lg font-bold tracking-tight">
            Bloom Walk Taiwan
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
  );
}
