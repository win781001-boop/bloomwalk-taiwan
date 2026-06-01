/* ═══════════════════════════════════════════
   Kaohsiung 路线资料 — 共用资料档
   用于 /kaohsiung 列表页与各单一路线页
   ═══════════════════════════════════════════ */

import type { RouteCategory } from "./category-icons";

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
  primaryCategory: RouteCategory;
  whyVisit: string;
  routeSteps: string[];
  pikminReasons: string[];
  tips: string[];
  supplies: string[];
  nearbyRoutes: string[];
  mapUrl: string;
  spotIds?: string[];
  status?: "draft" | "published";
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
    primaryCategory: "waterfront",
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

    nearbyRoutes: ["sizihwan"],
    mapUrl: "https://www.google.com/maps/search/駁二藝術特區+高雄",
  },
  {
    slug: "qiaotou-sugar-refinery",
    name: "橋頭糖廠藝術散步路線",
    area: "高雄 / 橋頭區",
    summary: "糖業博物館、老街、日式建築，橋頭糖廠半日散步",
    status: "published",
    postcardAppeal: 5,
    postcardReason:
      "橋頭糖廠有糖業博物館、日式建築群與鐵道元素，歷史氛圍濃厚、畫面辨識度高，適合收集帶有糖業文化感的明信片。",
    walkingComfort: 4,
    transportConvenience: 5,
    duration: "約 60～120 分鐘",
    bestTime: "早上 / 下午",
    transport: "捷運橋頭糖廠站（R22A），出站步行約 5 分鐘",
    tags: ["歷史", "糖廠", "日式建築", "拍照", "捷運可達", "散步"],
    icon: "🏭",
    primaryCategory: "industry",
    whyVisit:
      "橋頭糖廠是台灣第一座現代化糖廠，園區內保留了日式宿舍、紅磚倉庫、鐵道景觀與防空洞等歷史遺跡。對皮克敏玩家來說，這裡景點集中、範圍適中，適合半日散步收集具有糖業文化特色的明信片，捷運直達也讓交通門檻很低。",
    routeSteps: [
      "從捷運橋頭糖廠站（R22A）出站，步行至橋頭糖廠園區入口",
      "先走訪橋頭老街，感受在地市場與傳統氛圍",
      "進入糖廠園區，參觀糖業博物館了解糖業歷史",
      "走訪與糖面室與吉照故里茶道院，欣賞日式建築空間",
      "前往台糖展售中心與社宅事務所一帶",
      "經興糖車站與鐵園迷城，體驗鐵道景觀與藝術空間後結束",
    ],
    pikminReasons: [
      "園區範圍適中，景點步行可達，適合半日輕鬆散步",
      "糖業博物館、日式建築、鐵道各有不同畫面感，明信片素材豐富",
      "捷運直達、交通門檻低，適合臨時安排",
      "園區樹蔭較多，散步舒適度高",
    ],
    tips: [
      "週末與假日人潮較多，建議上午前往較清幽",
      "部分日式建築為歷史保留空間，入內參觀請留意開放時間",
      "夏天雖有樹蔭，仍建議攜帶飲水與防曬",
      "橋頭老街下午市場較熱鬧，可安排回程順逛",
    ],
    supplies: [
      "橋頭糖廠捷運站周邊",
      "橋頭老街",
      "園區內便利商店",
      "公共廁所",
      "日式庭園休憩空間",
    ],
    spotIds: ["qiaotou-A", "qiaotou-B", "qiaotou-C", "qiaotou-D", "qiaotou-E", "qiaotou-F", "qiaotou-G", "qiaotou-H"],
    nearbyRoutes: ["lotus-pond"],
    mapUrl: "https://www.google.com/maps/search/橋頭糖廠+高雄",
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
    primaryCategory: "coast",
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
    nearbyRoutes: ["pier-2"],
    spotIds: ["sizihwan-A", "sizihwan-B", "sizihwan-C", "sizihwan-D", "sizihwan-E", "sizihwan-F", "sizihwan-G", "sizihwan-H"],
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
    primaryCategory: "heritage",
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
    nearbyRoutes: ["chengcing-lake"],
    mapUrl: "https://www.google.com/maps/search/蓮池潭龍虎塔+高雄",
  },
  {
    slug: "haramasen-railway",
    name: "?????????",
    area: "?? / ???",
    summary: "??????????????",
    status: "draft",
    postcardAppeal: 0,
    postcardReason: "",
    walkingComfort: 0,
    transportConvenience: 0,
    duration: "?",
    bestTime: "?",
    transport: "?",
    tags: [],
    icon: "??",
    primaryCategory: "railway",
    whyVisit: "",
    routeSteps: [],
    pikminReasons: [],
    tips: [],
    supplies: [],
    nearbyRoutes: ["pier-2","sizihwan"],
    mapUrl: "https://www.google.com/maps/search/?????????+??",
  },
  {
    slug: "chengcing-lake",
    name: "澄清湖・九曲橋・三亭攬勝散步路線",
    area: "高雄 / 鳥松區",
    summary: "九曲橋、中興塔、三亭攬勝，澄清湖散步",
    status: "published",
    postcardAppeal: 5,
    postcardReason: "澄清湖九曲橋、中興塔與三亭攬勝各有湖景特色，是高雄辨識度很高的經典地標群，適合收集具有台灣感的湖泊風景明信片。",
    walkingComfort: 4,
    transportConvenience: 3,
    duration: "約 90～150 分鐘",
    bestTime: "早上 / 下午",
    transport: "高雄市區開車或騎車約 20～30 分鐘可達；公車 70、紅 70、217 等路線",
    tags: ["湖景", "地標", "公園", "散步", "拍照", "半日"],
    icon: "🏞️",
    primaryCategory: "park",
    whyVisit: "澄清湖的特色不是單一景點，而是湖面、曲橋、亭台、樹蔭與展望景色可以連續收集。九曲橋與雙蓮亭具有明顯的中式湖景氛圍，中興塔與三亭攬勝則讓路線增加遠望湖區與停留休息的節奏，是高雄市區周邊適合安排半日散步的綠地型路線。",
    routeSteps: [
      "從海洋奇珍園周邊開始，先進入澄清湖湖區散步氛圍。",
      "前往九曲橋，停留欣賞橋面與湖景構圖。",
      "沿線走訪泡茶區與雙蓮亭，安排中段休息與拍照。",
      "接著前往富國島與烤肉區一帶，感受較開闊的湖畔休憩區域。",
      "延伸至中興塔與三亭攬勝，作為路線後段的景觀收尾。",
    ],
    pikminReasons: [
      "湖景、曲橋、亭台與塔景畫面差異明顯，沿途拍照素材豐富。",
      "八個點位分布在同一個澄清湖景區主題內，路線辨識度清楚。",
      "適合以散步節奏慢慢收集景觀，不需要頻繁切換城市街區。",
      "有湖畔休憩區域，可依體力彈性縮短或延伸行程。",
    ],
    tips: [
      "澄清湖範圍較大，八個點位完整走訪需要預留足夠步行時間。",
      "天氣炎熱時，建議避開正午時段並準備飲水與防曬。",
      "海洋奇珍園屬獨立展示館，是否入內參觀請依現場開放與售票資訊為準。",
      "烤肉區、泡茶區或園區設施如遇施工、管制或開放異動，請以現場及官方最新公告為準。",
    ],
    supplies: [
      "澄清湖園區入口周邊",
      "園區內便利商店",
      "公共廁所",
      "湖畔休憩涼亭",
      "停車場",
    ],
    spotIds: ["chengcing-A", "chengcing-B", "chengcing-C", "chengcing-D", "chengcing-E", "chengcing-F", "chengcing-G", "chengcing-H"],
    nearbyRoutes: ["lotus-pond"],
    mapUrl: "https://www.google.com/maps/search/澄清湖+高雄",
  },
  {
    slug: "qijin",
    name: "旗津海岸散步路線",
    area: "高雄 / 旗津區",
    summary: "渡輪、老街、燈塔、砲台，旗津半日散步",
    postcardAppeal: 5,
    postcardReason:
      "旗津有渡輪、燈塔、砲台、彩虹教堂等多樣地標，畫面辨識度高，適合收集帶有高雄港與海岸元素的明信片。",
    walkingComfort: 4,
    transportConvenience: 4,
    duration: "約 90～150 分鐘",
    bestTime: "早上 / 下午 / 傍晚",
    transport: "鼓山渡輪站搭渡輪至旗津，或開車經過港隧道",
    tags: ["海景", "渡輪", "老街", "歷史", "拍照", "半日"],
    icon: "🏖️",
    primaryCategory: "coast",
    whyVisit:
      "旗津是高雄最具代表性的離島沙洲，搭渡輪本身就是一趟風景。從渡輪站出發，可以走訪天后宮、老街、燈塔、星空隧道與旗後砲台，再到海邊欣賞台灣海峽。對皮克敏玩家來說，這裡景點密集、路線清楚，很適合半日散步收集明信片。",
    routeSteps: [
      "從鼓山渡輪站搭渡輪前往旗津",
      "出站後走訪旗津渡輪站周邊與天后宮",
      "沿旗津老街步行，沿途品嚐在地小吃",
      "走上旗後山，參觀旗津燈塔與旗後砲台",
      "下山後探訪旗津星空隧道",
      "沿海岸步道向南，欣賞旗津海岸景觀",
      "最後抵達旗津彩虹教堂，拍照後返回",
    ],
    pikminReasons: [
      "渡輪往返本身就有風景，適合拍照",
      "景點沿著碼頭到海岸呈直線分布，路線單純",
      "燈塔、砲台、彩虹教堂各具明信片潛力",
      "老街小吃補給方便，適合半日安排",
    ],
    tips: [
      "假日渡輪排隊人潮較多，建議上午出發",
      "旗後山路段有階梯，穿好走的鞋",
      "夏天海邊日曬強，注意防曬與補水",
      "彩虹教堂靠近出口端，可依體力決定是否走到底",
    ],
    supplies: [
      "旗津渡輪站周邊",
      "旗津老街",
      "便利商店",
      "公共廁所",
      "海岸步道休息區",
    ],
    spotIds: ["qijin-A", "qijin-B", "qijin-C", "qijin-D", "qijin-E", "qijin-F", "qijin-G", "qijin-H"],
    nearbyRoutes: ["pier-2", "sizihwan"],
    mapUrl: "https://www.google.com/maps/search/旗津+高雄",
  },
];


/** 根据 slug 取得单一路线资料 */
export function getRouteBySlug(
  slug: string,
): KaohsiungRoute | undefined {
  return kaohsiungRoutes.find((r) => r.slug === slug);
}

