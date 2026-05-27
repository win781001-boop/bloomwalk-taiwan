/* ═══════════════════════════════════════════
   Kaohsiung 路线资料 — 共用资料档
   用于 /kaohsiung 列表页与各单一路线页
   ═══════════════════════════════════════════ */

export type KaohsiungRoute = {
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
  spotIds?: string[];
};

export const kaohsiungRoutes: KaohsiungRoute[] = [
  {
    slug: "pier-2",
    name: "駁二藝術特區",
    area: "高雄 / 鹽埕區",
    summary: "文創倉庫、港邊散步、拍照順遊",
    postcardAppeal: 5,
    postcardReason:
      "倉庫群、藝術裝置、港邊與輕軌元素明顯，是高雄最有辨識度的散步景點之一。",
    walkingComfort: 4,
    transportConvenience: 5,
    duration: "約 45～90 分鐘",
    bestTime: "下午 / 傍晚 / 夜間",
    transport: "輕軌可達（駁二大義站 / 駁二蓬萊站）",
    tags: ["港邊", "文創", "拍照", "輕軌可達", "觀光"],
    icon: "🎨",
    whyVisit:
      "駁二藝術特區有倉庫群、港邊、藝術裝置與輕軌元素，是高雄辨識度很高的散步景點。對皮克敏玩家來說，這裡適合邊走邊收集景點明信片，也適合拍照與順遊鹽埕港邊。",
    routeSteps: [
      "從輕軌駁二大義站或駁二蓬萊站出發",
      "沿駁二藝術特區倉庫群散步",
      "可延伸到大港橋或棧貳庫",
      "最後回到鹽埕周邊或輕軌站休息",
    ],
    pikminReasons: [
      "景點密集，容易安排短程散步",
      "港邊與倉庫畫面有明信片感",
      "適合拍照與順遊",
      "交通相對方便",
    ],
    tips: [
      "假日人潮較多，步行速度會變慢",
      "夏天白天較熱，建議下午後或傍晚",
      "可延伸安排棧貳庫與大港橋周邊散步",
    ],
    supplies: [
      "輕軌站周邊",
      "鹽埕商圈",
      "便利商店",
      "公共廁所",
      "港邊可短暫休息空間",
    ],    spotIds: ["pier2-A", "pier2-B", "pier2-C", "pier2-D", "pier2-E", "pier2-F", "pier2-G", "pier2-H"],

    nearbyRoutes: ["haramasen-railway", "sizihwan"],
    mapUrl: "https://www.google.com/maps/search/駁二藝術特區+高雄",
  },
  {
    slug: "weiwuying",
    name: "衛武營藝術公園散步路線",
    area: "高雄 / 鳳山區",
    summary: "藝術建築、都會公園、林蔭草地",
    postcardAppeal: 5,
    postcardReason:
      "衛武營流線型場館、榕樹廣場與大片綠地辨識度很高，適合收集兼具藝術感與公園景觀的高雄明信片。",
    walkingComfort: 5,
    transportConvenience: 5,
    duration: "約 60～120 分鐘",
    bestTime: "午後 / 傍晚",
    transport: "捷運橘線衛武營站 O10，6 號出口可達場館",
    tags: ["藝術建築", "公園", "綠地", "散步", "拍照"],
    icon: "🎭",
    whyVisit:
      "衛武營把大型藝術場館與都會公園結合在同一片散步範圍內。場館流線型外觀、榕樹廣場、戶外劇場與公園草地各有不同景觀，適合想慢慢種花、拍照並收集高雄藝文地標畫面的玩家。",
    routeSteps: [
      "從捷運衛武營站 6 號出口出發",
      "先繞行衛武營國家藝術文化中心外觀與榕樹廣場",
      "步行至戶外劇場與周邊開放空間",
      "再延伸進入衛武營都會公園的林蔭與草地步道",
    ],
    pikminReasons: [
      "藝術場館建築外觀辨識度高",
      "都會公園步行空間寬廣，適合慢走種花",
      "榕樹廣場與戶外劇場適合作為特色地標",
      "捷運直達，安排短程或長程散步都方便",
    ],
    tips: [
      "公園範圍較大，建議依停留時間選擇步行區域",
      "午後與傍晚較適合戶外散步與拍照",
      "若遇演出或活動時段，場館周邊人潮可能較多",
    ],
    supplies: [
      "衛武營國家藝術文化中心",
      "捷運衛武營站周邊",
      "場館內公共空間與洗手間",
      "衛武營都會公園休憩區",
    ],
    nearbyRoutes: [],
    mapUrl: "https://www.google.com/maps/search/衛武營+高雄",
  },
  {
    slug: "sizihwan",
    name: "西子灣夕陽海景路線",
    area: "高雄 / 鼓山區",
    summary: "夕陽、海景、港口、觀光",
    postcardAppeal: 5,
    postcardReason:
      "西子灣是高雄經典海景與夕陽地標，畫面辨識度高，適合特地安排半日散步。",
    walkingComfort: 3,
    transportConvenience: 4,
    duration: "約 60～120 分鐘",
    bestTime: "傍晚",
    transport: "捷運西子灣站，步行約 15～20 分鐘",
    tags: ["夕陽", "海景", "觀光", "半日", "拍照"],
    icon: "🌅",
    whyVisit:
      "西子灣是高雄經典海景與夕陽景點，適合安排半日散步。對皮克敏玩家來說，這裡的海景、港口與夕陽畫面很有明信片吸引力。",
    routeSteps: [
      "從捷運西子灣站或哈瑪星周邊出發",
      "前往西子灣海景區域",
      "視體力安排海岸周邊散步",
      "傍晚可停留看夕陽後返回",
    ],
    pikminReasons: [
      "高雄經典夕陽海景",
      "適合半日散步與拍照",
      "明信片辨識度高",
      "可與哈瑪星路線串聯",
    ],
    tips: [
      "傍晚是最佳時段，但人潮也較多",
      "夏天需注意防曬與補水",
      "部分路段可能需要較多步行體力",
    ],
    supplies: [
      "捷運站周邊",
      "哈瑪星周邊",
      "便利商店",
      "公共廁所",
      "海景周邊休息點",
    ],
    nearbyRoutes: ["haramasen-railway", "pier-2"],
    mapUrl: "https://www.google.com/maps/search/西子灣+高雄",
  },
  {
    slug: "lotus-pond",
    name: "蓮池潭龍虎塔路線",
    area: "高雄 / 左營區",
    summary: "湖景、龍虎塔、傳統地標",
    postcardAppeal: 5,
    postcardReason:
      "蓮池潭與龍虎塔是高雄辨識度很高的經典地標，適合收集具有台灣感的景點明信片。",
    walkingComfort: 4,
    transportConvenience: 4,
    duration: "約 60～120 分鐘",
    bestTime: "早上 / 傍晚",
    transport: "捷運左營站，步行約 15～20 分鐘；或台鐵左營站",
    tags: ["湖景", "地標", "傳統", "觀光", "長走"],
    icon: "🐉",
    whyVisit:
      "蓮池潭與龍虎塔是高雄經典地標，湖景和傳統建築辨識度高。這條路線適合想收集具有台灣感景點明信片的玩家，也適合安排較長時間慢走。",
    routeSteps: [
      "從蓮池潭周邊入口開始",
      "沿湖岸步行",
      "以龍虎塔周邊作為主要停留點",
      "視體力繼續延伸湖畔路線",
    ],
    pikminReasons: [
      "高雄傳統地標辨識度高",
      "湖景路線適合慢走",
      "明信片吸引力高",
      "適合觀光型玩家",
    ],
    tips: [
      "白天日曬較強，建議早上或傍晚",
      "湖畔路線較長，請自行控制距離",
      "假日觀光人潮較多",
    ],
    supplies: [
      "蓮池潭周邊",
      "公共廁所",
      "便利商店",
      "可短暫休息的湖畔空間",
      "交通站點周邊",
    ],
    spotIds: ["lotus-dragon-tiger-pagoda", "lotus-chunqiu-pavilion", "lotus-beiji-pavilion", "lotus-lakeside-trail", "lotus-zuoying-temple", "lotus-lotus-pond", "lotus-children-park", "lotus-zhouzai-wetland"],
    nearbyRoutes: ["central-park"],
    mapUrl: "https://www.google.com/maps/search/蓮池潭龍虎塔+高雄",
  },
  {
    slug: "haramasen-railway",
    name: "哈瑪星鐵道文化園區",
    area: "高雄 / 鼓山區",
    summary: "鐵道、草地、歷史感、親子散步",
    postcardAppeal: 4,
    postcardReason:
      "鐵道、草地與老港區氛圍明顯，適合慢走與拍照，也能和駁二、棧貳庫形成連續路線。",
    walkingComfort: 4,
    transportConvenience: 5,
    duration: "約 40～70 分鐘",
    bestTime: "早上 / 下午 / 傍晚",
    transport: "捷運西子灣站 / 輕軌哈瑪星站可達",
    tags: ["鐵道", "草地", "親子", "歷史", "慢走"],
    icon: "🚂",
    whyVisit:
      "哈瑪星鐵道文化園區有鐵道、草地和老港區氛圍，適合慢走、親子散步與拍照。它也能和駁二、大港橋、西子灣形成連續路線。",
    routeSteps: [
      "從哈瑪星周邊或輕軌站出發",
      "沿鐵道文化園區散步",
      "可停留草地與鐵道景觀區",
      "視體力延伸到駁二或西子灣",
    ],
    pikminReasons: [
      "鐵道景觀有特色",
      "草地與開放空間適合慢走",
      "可串聯多個高雄港區景點",
      "適合親子與輕鬆散步",
    ],
    tips: [
      "夏天白天較熱，注意遮蔭與補水",
      "假日親子人潮較多",
      "可與駁二或西子灣分段安排",
    ],
    supplies: [
      "哈瑪星周邊",
      "輕軌站周邊",
      "便利商店",
      "公共廁所",
      "草地周邊休息空間",
    ],
    nearbyRoutes: ["pier-2", "sizihwan"],
    mapUrl: "https://www.google.com/maps/search/哈瑪星鐵道文化園區+高雄",
  },
  {
    slug: "central-park",
    name: "中央公園短時間補步數路線",
    area: "高雄 / 前金區、新興區",
    summary: "捷運可達、市中心、短時間補步數",
    postcardAppeal: 3,
    postcardReason:
      "中央公園交通方便、適合短時間散步與社群日備案，但明信片吸引力不如港灣與觀光地標。",
    walkingComfort: 5,
    transportConvenience: 5,
    duration: "約 30～60 分鐘",
    bestTime: "傍晚 / 夜間",
    transport: "捷運中央公園站直達",
    tags: ["捷運可達", "短時間", "市中心", "備案", "輕鬆"],
    icon: "🌳",
    whyVisit:
      "中央公園不是最強的明信片景點，但它交通方便、位於市中心，很適合作為短時間補步數、臨時散步或社群日備案路線。",
    routeSteps: [
      "從捷運中央公園站出發",
      "沿中央公園周邊步道散步",
      "可延伸到城市光廊或新崛江周邊",
      "最後回到捷運站或商圈休息",
    ],
    pikminReasons: [
      "捷運可達，臨時安排方便",
      "適合短時間補步數",
      "周邊補給與休息點多",
      "適合社群日備案",
    ],
    tips: [
      "夏天白天較熱，建議傍晚後再走",
      "假日商圈人潮較多",
      "明信片吸引力普通，但實用性高",
    ],
    supplies: [
      "捷運中央公園站周邊",
      "新崛江商圈",
      "便利商店",
      "公共廁所",
      "商圈室內休息點",
    ],
    nearbyRoutes: ["lotus-pond"],
    mapUrl: "https://www.google.com/maps/search/中央公園+高雄",
  },
];

/** 根据 slug 取得单一路线资料 */
export function getRouteBySlug(
  slug: string,
): KaohsiungRoute | undefined {
  return kaohsiungRoutes.find((r) => r.slug === slug);
}




