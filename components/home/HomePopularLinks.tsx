type PopularItem = {
  icon: string;
  text: string;
  href: string;
};

const POPULAR_ITEMS: PopularItem[] = [
  {
    icon: "/icons/categories/heritage.png",
    text: "蓮池潭散步路線",
    href: "/kaohsiung/lotus-pond",
  },
  {
    icon: "/icons/categories/waterfront.png",
    text: "駁二哈瑪星散步路線",
    href: "/kaohsiung/pier-2",
  },
  {
    icon: "/icons/categories/coast.png",
    text: "西子灣散步路線",
    href: "/kaohsiung/sizihwan",
  },
];

export default function HomePopularLinks() {
  return (
    <section className="bg-bloom-green-light/30 px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-block rounded-full border border-bloom-green/30 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-bloom-green">
          熱門閱覽
        </span>

        <div className="mx-auto mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {POPULAR_ITEMS.map((item) => (
            <a
              key={item.text}
              href={item.href}
              className="group flex items-center gap-3 rounded-xl border border-bloom-green-light/50 bg-white/80 px-5 py-4 text-left shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <img
                src={item.icon}
                alt=""
                className="h-8 w-8 flex-shrink-0 object-contain"
              />
              <p className="flex-1 text-sm text-bloom-text">{item.text}</p>
              <svg
                className="h-3.5 w-3.5 flex-shrink-0 text-bloom-green-light transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-bloom-green"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
