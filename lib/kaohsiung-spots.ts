/* ═══════════════════════════════════════════
   Kaohsiung Spot 资料 — 共用景点资料档
   各路线页引用此档取得景点资讯
   ═══════════════════════════════════════════ */

import type { Spot } from "./spot-types";

/** 高雄莲池潭路线景点资料 */
export const kaohsiungLotusPondSpots: Spot[] = [
  {
    id: "lotus-dragon-tiger-pagoda",
    name: "龍虎塔",
    city: "高雄",
    district: "左營區",
    typeTags: ["明信片", "拍照點"],
    useTags: ["明信片收集", "拍照"],
    tags: ["postcard", "walk", "heritage"],
    googleMapsUrl: "https://www.google.com/maps/search/龍虎塔+蓮池潭+高雄",
    suggestedStayMinutes: 20,
    notes: "蓮池潭代表地標，適合拍照與明信片收集。",
    imagePlaceholder: "/maps/lotus-pond/longhu-tower.jpg",
  },
  {
    id: "lotus-chunqiu-pavilion",
    name: "春秋閣",
    city: "高雄",
    district: "左營區",
    typeTags: ["景點", "步行路線"],
    useTags: ["散步", "拍照"],
    tags: ["walk", "postcard", "heritage"],
    googleMapsUrl: "https://www.google.com/maps/search/春秋閣+蓮池潭+高雄",
    suggestedStayMinutes: 15,
    notes: "靠近湖岸步道，可接續龍虎塔安排散步。",
    imagePlaceholder: "/maps/lotus-pond/chunqiu-pavilion.jpg",
  },
  {
    id: "lotus-beiji-pavilion",
    name: "元帝廟北極亭",
    city: "高雄",
    district: "左營區",
    typeTags: ["景點", "湖中"],
    useTags: ["散步", "拍照"],
    tags: ["walk", "heritage"],
    googleMapsUrl: "https://www.google.com/maps/search/元帝廟北極亭+蓮池潭+高雄",
    suggestedStayMinutes: 10,
    notes: "湖面視角焦點，可作為路線中段停留點。",
    imagePlaceholder: "/maps/lotus-pond/yuandi-temple.jpg",
  },
  {
    id: "lotus-lakeside-trail",
    name: "蓮池潭環潭步道",
    city: "高雄",
    district: "左營區",
    typeTags: ["種花路線"],
    useTags: ["種花", "散步"],
    tags: ["walk", "pikmin"],
    googleMapsUrl: "https://www.google.com/maps/search/蓮池潭環潭步道+高雄",
    suggestedStayMinutes: 30,
    notes: "適合 Pikmin Bloom 玩家任務種花與散步。",
    imagePlaceholder: "/maps/lotus-pond/lakeside-trail.jpg",
  },
  {
    id: "lotus-zuoying-temple",
    name: "左營孔廟",
    city: "高雄",
    district: "左營區",
    typeTags: ["文化景點"],
    useTags: ["散步", "文化"],
    tags: ["walk", "heritage", "postcard"],
    googleMapsUrl: "https://www.google.com/maps/search/左營孔廟+蓮池潭+高雄",
    suggestedStayMinutes: 30,
    notes: "蓮池潭北側文化景點，適合半日遊延伸。",
    imagePlaceholder: "/maps/lotus-pond/zuoying-temple.jpg",
  },
  {
    id: "lotus-lotus-pond",
    name: "蓮池潭",
    city: "高雄",
    district: "左營區",
    typeTags: ["湖泊"],
    useTags: ["散步", "親子"],
    tags: ["walk", "postcard"],
    googleMapsUrl: "https://www.google.com/maps/search/蓮池潭+高雄",
    suggestedStayMinutes: 20,
    notes: "湖區自然景觀，適合散步與親子路線。",
    imagePlaceholder: "/maps/lotus-pond/lotus-pond.jpg",
  },
  {
    id: "lotus-children-park",
    name: "蓮池潭兒童公園",
    city: "高雄",
    district: "左營區",
    typeTags: ["公園", "休息"],
    useTags: ["親子", "休息"],
    tags: ["walk"],
    googleMapsUrl: "https://www.google.com/maps/search/蓮池潭兒童公園+高雄",
    suggestedStayMinutes: 20,
    notes: "兒童遊戲場所，適合放風。",
    imagePlaceholder: "/maps/lotus-pond/children-park.jpg",
  },
  {
    id: "lotus-zhouzai-wetland",
    name: "洲仔濕地",
    city: "高雄",
    district: "左營區",
    typeTags: ["自然", "公園"],
    useTags: ["生態教育", "散步"],
    tags: ["walk", "pikmin"],
    googleMapsUrl: "https://www.google.com/maps/search/洲仔濕地+蓮池潭+高雄",
    suggestedStayMinutes: 25,
    notes: "自然景觀，適合生態教育。",
    imagePlaceholder: "/maps/lotus-pond/zhouzai-wetland.jpg",
  },
];

/** 根据 id 从指定景点列表中查找 */
export function getSpotById(
  spots: Spot[],
  id: string,
): Spot | undefined {
  return spots.find((s) => s.id === id);
}
