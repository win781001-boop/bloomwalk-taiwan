type EntryCard = {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  href: string;
  buttonLabel: string;
  decoration: string;
};

const CARDS: EntryCard[] = [
  {
    title: "種花散步地圖",
    description: "整理適合邊走邊收集、順路補給與輕鬆拍照的散步路線。",
    icon: "🌸",
    bgColor: "#FDE8EC",
    href: "/map",
    buttonLabel: "查看散步路線",
    decoration: "/logo/home-map.png",
  },
  {
    title: "假日放電路線",
    description: "整理適合週末出門走走、放鬆心情與順路吃喝的景區路線。",
    icon: "☀️",
    bgColor: "#FFF3DC",
    href: "/kaohsiung/community-day",
    buttonLabel: "查看放電路線",
    decoration: "/logo/home-sun-road.png",
  },
  {
    title: "熱門散步景點",
    description: "從港邊、公園、老街與熱門景區開始，慢慢補上適合散步的地點。",
    icon: "🌿",
    bgColor: "#E8F4FA",
    href: "/kaohsiung",
    buttonLabel: "查看景點",
    decoration: "/logo/home-leaves.png",
  },
  {
    title: "散步路線指南",
    description: "用路線長度、停留時間、補給點與拍照點，幫你挑一條好走的行程。",
    icon: "🧭",
    bgColor: "#E8F0DE",
    href: "#",
    buttonLabel: "即將整理",
    decoration: "/logo/home-compass.png",
  },
];

const decorationSizeMap: Record<string, string> = {
  "/logo/home-map.png": "h-14 w-14 sm:h-20 sm:w-20",
  "/logo/home-leaves.png": "h-10 w-10 sm:h-16 sm:w-16",
  "/logo/home-sun-road.png": "h-16 w-16 sm:h-24 sm:w-24",
  "/logo/home-compass.png": "h-16 w-16 sm:h-24 sm:w-24",
};

export default function HomeEntryCards() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3">
      {CARDS.map((card) => (
        <a
          key={card.title}
          href={card.href}
          className="group flex flex-row overflow-hidden rounded-3xl border border-bloom-green-light/50 p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-bloom-green/8 hover:-translate-y-0.5 min-h-[140px] sm:min-h-[180px]"
          style={{ backgroundColor: card.bgColor }}
        >
          {/* Left: text area (65%) */}
          <div className="flex w-[65%] flex-col">
            {/* Title */}
            <h3 className="text-base font-bold tracking-tight text-bloom-text sm:text-lg">
              {card.title}
            </h3>

            {/* Description */}
            <p className="mt-1.5 text-xs leading-relaxed text-bloom-text-light sm:text-sm">
              {card.description}
            </p>

            {/* Button */}
            <span className="mt-auto flex items-center gap-1 pt-3 text-sm font-medium text-bloom-green transition-all duration-300 group-hover:gap-2">
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
          </div>

          {/* Right: decorative image area (35%) */}
          <div className="flex w-[35%] items-center justify-center">
            <img
              src={card.decoration}
              alt=""
              aria-hidden="true"
              className={`${decorationSizeMap[card.decoration] ?? "h-16 w-16 sm:h-24 sm:w-24"} object-contain`}
            />
          </div>
        </a>
      ))}
    </div>
  );
}
