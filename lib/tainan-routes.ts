/* Tainan route data --- shared data file
   Used by /tainan listing page and individual route pages
*/

export type TainanRoute = {
  slug: string;
  name: string;
  area: string;
  summary: string;
  postcardAppeal: number;
  postcardReason: string;
  walkingComfort: number;
  transportConvenience: number;
  duration: string;
  bestTime: string;
  transport: string;
  tags: string[];
  icon: string;
  whyVisit: string;
  routeSteps: string[];
  pikminReasons: string[];
  tips: string[];
  supplies: string[];
  nearbyRoutes: string[];
  mapUrl: string;
};

export const tainanRoutes: TainanRoute[] = [
  {
    slug: "anping-old-fort",
    name: "安平古堡・老街・樹屋散步路線",
    area: "臺南 / 安平區",
    summary: "古蹟、老街、巷弄、樹屋、港區文化",
    postcardAppeal: 5,
    postcardReason: "安平古堡、樹屋與安平老街是臺南最具代表性的歷史景點，磚牆與老榕樹畫面辨識度高。",
    walkingComfort: 4,
    transportConvenience: 4,
    duration: "約 60～120 分鐘",
    bestTime: "早上 / 下午",
    transport: "臺南火車站前搭 2 路公車或台灣好行99路至安平古堡站",
    tags: ["古蹟", "老街", "歷史", "拍照", "親子"],
    icon: "🏰",
    whyVisit: "安平古堡、安平樹屋與安平老街是臺南歷史散步的核心區域。紅磚古堡、老榕樹根盤據的樹屋與老街巷弄各有不同氛圍，適合想收集臺南歷史文化景點明信片的玩家。",
    routeSteps: ["從安平古堡出發沿周邊散步", "步行至安平樹屋與德記洋行", "延伸走訪安平老街巷弄", "最後可到安平港濱看海景"],
    pikminReasons: ["臺南經典歷史地標，明信片辨識度高", "老街與樹屋畫面有特色", "適合短程散步與拍照", "交通相對方便"],
    tips: ["假日安平老街人潮較多，步行速度會變慢", "夏天白天較熱，建議早上或午後", "樹屋區域有戶外空間，可搭配安排"],
    supplies: ["安平古堡周邊", "安平老街商圈", "便利商店", "公共廁所", "樹屋旁休憩空間"],
    nearbyRoutes: ["chihkan-old-town"],
    mapUrl: "https://www.google.com/maps/search/安平古堡+臺南",
  },
  {
    slug: "chihkan-old-town",
    name: "赤崁樓・祀典武廟府城古蹟路線",
    area: "臺南 / 中西區",
    summary: "赤崁樓、祀典武廟、大天后宮、傳統街區",
    postcardAppeal: 5,
    postcardReason: "赤崁樓與祀典武廟是府城核心地標，傳統建築與廟宇細節辨識度高，適合收集具有臺灣歷史感的明信片。",
    walkingComfort: 4,
    transportConvenience: 5,
    duration: "約 60～90 分鐘",
    bestTime: "早上 / 下午",
    transport: "臺南火車站前搭 3 路公車至赤崁樓站",
    tags: ["古蹟", "廟宇", "歷史", "府城", "街區"],
    icon: "⛩️",
    whyVisit: "赤崁樓、祀典武廟與大天后宮集中在府城核心區域，是臺南密度最高的歷史景點群。傳統建築細節豐富，適合想收集古蹟明信片與慢走街區的玩家。",
    routeSteps: ["從赤崁樓出發參觀周邊", "步行至祀典武廟與大天后宮", "延伸走訪永福路與民生路傳統街區", "最後沿巷弄回到赤崁樓周邊"],
    pikminReasons: ["府城核心古蹟密度高", "傳統建築與廟宇畫面適合作為明信片素材", "街區適合短程慢走", "交通方便，公車可達"],
    tips: ["假日廟宇區域遊客較多", "部分巷弄較窄，請留意車輛", "可與神農街路線串聯安排"],
    supplies: ["赤崁樓周邊", "祀典武廟附近商圈", "便利商店", "公共廁所", "廟埕休憩空間"],
    nearbyRoutes: ["shennong-haian-hele"],
    mapUrl: "https://www.google.com/maps/search/赤崁樓+臺南",
  },
  {
    slug: "shennong-haian-hele",
    name: "神農街・海安路・河樂廣場夜間路線",
    area: "臺南 / 中西區",
    summary: "老屋巷弄、藝術街、夜間散步、美食",
    postcardAppeal: 4,
    postcardReason: "神農街老屋與海安路藝術裝置在夜間燈光下別有氛圍，適合喜歡文創感與夜間景點的玩家。",
    walkingComfort: 5,
    transportConvenience: 5,
    duration: "約 45～90 分鐘",
    bestTime: "傍晚 / 夜間",
    transport: "臺南火車站前搭 2 路公車至協進國小站步行可達",
    tags: ["夜間", "老街", "藝術", "美食", "文創"],
    icon: "🌃",
    whyVisit: "神農街老屋巷弄、海安路藝術裝置與河樂廣場串聯成一條夜間散步路線。街道氛圍悠閒，沿途有各種美食與文創小店，適合飯後散步、種花與收集夜間景點明信片。",
    routeSteps: ["從河樂廣場出發", "沿海安路走訪藝術裝置", "轉入神農街散步老屋巷弄", "最後回到河樂廣場周邊休息"],
    pikminReasons: ["夜間散步氛圍佳", "藝術裝置與老屋畫面有特色", "美食與補給選擇多", "適合飯後短程種花"],
    tips: ["傍晚至夜間是最佳時段", "假日神農街遊客較多", "可與赤崁樓路線串聯安排半日散步"],
    supplies: ["河樂廣場周邊", "海安路商圈", "神農街商圈", "便利商店", "公共廁所"],
    nearbyRoutes: ["chihkan-old-town"],
    mapUrl: "https://www.google.com/maps/search/神農街+臺南",
  },
  {
    slug: "chimei-metropolitan-park",
    name: "奇美博物館・臺南都會公園路線",
    area: "臺南 / 仁德區",
    summary: "博物館、湖景、草地、開闊步道",
    postcardAppeal: 5,
    postcardReason: "奇美博物館正面廣場、阿波羅噴泉與都會公園湖景畫面壯觀，是臺南辨識度很高的拍照地標。",
    walkingComfort: 5,
    transportConvenience: 4,
    duration: "約 90～150 分鐘",
    bestTime: "午後 / 傍晚",
    transport: "臺南火車站搭區間車至保安站，步行約 15 分鐘",
    tags: ["博物館", "公園", "草地", "湖景", "散步"],
    icon: "🏛️",
    whyVisit: "奇美博物館與臺南都會公園結合在同一片散步範圍內。博物館歐式建築、阿波羅噴泉廣場、都會公園湖景與大片草地區域各有不同景觀，適合想慢慢種花、拍照的玩家。",
    routeSteps: ["從奇美博物館正面廣場出發", "繞行博物館周邊與噴泉區", "延伸至都會公園湖畔步道", "最後回到博物館區或湖畔休憩"],
    pikminReasons: ["博物館建築與噴泉畫面辨識度高", "都會公園步行空間寬廣", "適合種花與慢走", "湖畔景觀適合作為明信片素材"],
    tips: ["公園範圍較大，建議依停留時間選擇步行區域", "午後與傍晚較適合戶外散步與拍照", "週末遊客較多，建議平日前往更悠閒"],
    supplies: ["奇美博物館館內", "保安火車站周邊", "都會公園休憩區", "館內飲水機與洗手間"],
    nearbyRoutes: [],
    mapUrl: "https://www.google.com/maps/search/奇美博物館+臺南",
  },
  {
    slug: "shuijiaoshe-zhuxi",
    name: "水交社・竹溪水岸・哈赫拿爾森林路線",
    area: "臺南 / 南區",
    summary: "眷村文化、都市森林、水岸步道、生態",
    postcardAppeal: 4,
    postcardReason: "水交社眷村文化園區與竹溪水岸步道組合有都市森林感，適合喜歡生態與文化混搭路線的玩家。",
    walkingComfort: 4,
    transportConvenience: 3,
    duration: "約 60～120 分鐘",
    bestTime: "早上 / 傍晚",
    transport: "臺南火車站搭 6 路公車至水交社站步行可達",
    tags: ["眷村", "森林", "生態", "水岸", "文化"],
    icon: "🌳",
    whyVisit: "水交社眷村文化園區與竹溪水岸步道串聯成一條文化與生態混搭的散步路線。眷村宿舍群、竹溪水岸與哈赫拿爾森林各有不同氛圍，適合想收集特色景點明信片的玩家。",
    routeSteps: ["從水交社眷村文化園區出發", "沿竹溪水岸步道散步", "進入哈赫拿爾森林區域", "最後回到水交社周邊休息"],
    pikminReasons: ["眷村文化與都市森林組合有特色", "水岸步道適合慢走種花", "人潮較少，散步品質佳", "適合喜歡生態路線的玩家"],
    tips: ["部分森林步道路面較自然，建議穿適合的鞋子", "夏天請注意防蚊", "竹溪步道有部分遮蔭"],
    supplies: ["水交社文化園區周邊", "竹溪水岸步道入口", "便利商店", "公共廁所", "水岸休憩長椅"],
    nearbyRoutes: [],
    mapUrl: "https://www.google.com/maps/search/水交社+臺南",
  },
  {
    slug: "blueprint-art-museum",
    name: "藍晒圖・臺南美術館・孔廟文化路線",
    area: "臺南 / 中西區",
    summary: "文創、藝術館舍、古城街區、文化散步",
    postcardAppeal: 4,
    postcardReason: "藍晒圖文創園區、臺南市美術館與孔廟串聯成一條文化散步路線，藝術與歷史影像多元。",
    walkingComfort: 4,
    transportConvenience: 5,
    duration: "約 60～120 分鐘",
    bestTime: "上午 / 下午",
    transport: "臺南火車站前搭 1 路公車至孔廟站步行可達",
    tags: ["文創", "藝術", "歷史", "廟宇", "街區"],
    icon: "🎨",
    whyVisit: "藍晒圖文創園區、臺南市美術館與孔廟集中在市中心區域，步行可串聯。文創小店、現代藝術館舍與歷史建築交錯，適合想收集臺南文化景點明信片的玩家。",
    routeSteps: ["從藍晒圖文創園區出發", "步行至臺南市美術館周邊", "延伸至孔廟與府中街", "最後沿南門路回到孔廟周邊"],
    pikminReasons: ["文創園區與美術館畫面有特色", "孔廟歷史建築適合拍照", "市中心交通方便", "短程散步可彈性安排"],
    tips: ["美術館週一休館，請留意開放時間", "假日孔廟周邊遊客較多", "可與赤崁樓路線串聯安排"],
    supplies: ["孔廟周邊", "南門路商圈", "便利商店", "公共廁所", "臺南市美術館內休憩空間"],
    nearbyRoutes: ["chihkan-old-town"],
    mapUrl: "https://www.google.com/maps/search/藍晒圖文創園區+臺南",
  },
];

/** Get a single route by slug */
export function getTainanRouteBySlug(slug: string): TainanRoute | undefined {
  return tainanRoutes.find((r) => r.slug === slug);
}
