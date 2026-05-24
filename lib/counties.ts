export type County = {
  slug: string;
  name: string;
  nameEn: string;
  status: "draft" | "published";
  routeCount: number;
};

export const counties: County[] = [
  { slug: "taipei",          name: "臺北市", nameEn: "Taipei",         status: "draft", routeCount: 6 },
  { slug: "new-taipei",      name: "新北市", nameEn: "New Taipei",    status: "draft", routeCount: 6 },
  { slug: "taoyuan",         name: "桃園市", nameEn: "Taoyuan",       status: "draft", routeCount: 6 },
  { slug: "taichung",        name: "臺中市", nameEn: "Taichung",      status: "draft", routeCount: 6 },
  { slug: "tainan",          name: "臺南市", nameEn: "Tainan",        status: "draft", routeCount: 6 },
  { slug: "kaohsiung",       name: "高雄市", nameEn: "Kaohsiung",     status: "draft", routeCount: 6 },
  { slug: "keelung",         name: "基隆市", nameEn: "Keelung",       status: "draft", routeCount: 6 },
  { slug: "hsinchu-city",    name: "新竹市", nameEn: "Hsinchu City",  status: "draft", routeCount: 6 },
  { slug: "chiayi-city",     name: "嘉義市", nameEn: "Chiayi City",   status: "draft", routeCount: 6 },
  { slug: "yilan",           name: "宜蘭縣", nameEn: "Yilan",         status: "draft", routeCount: 6 },
  { slug: "hsinchu",         name: "新竹縣", nameEn: "Hsinchu County",status: "draft", routeCount: 6 },
  { slug: "miaoli",          name: "苗栗縣", nameEn: "Miaoli",        status: "draft", routeCount: 6 },
  { slug: "changhua",        name: "彰化縣", nameEn: "Changhua",      status: "draft", routeCount: 6 },
  { slug: "nantou",          name: "南投縣", nameEn: "Nantou",        status: "draft", routeCount: 6 },
  { slug: "yunlin",          name: "雲林縣", nameEn: "Yunlin",        status: "draft", routeCount: 6 },
  { slug: "chiayi",          name: "嘉義縣", nameEn: "Chiayi County", status: "draft", routeCount: 6 },
  { slug: "pingtung",        name: "屏東縣", nameEn: "Pingtung",      status: "draft", routeCount: 6 },
  { slug: "taitung",         name: "臺東縣", nameEn: "Taitung",       status: "draft", routeCount: 6 },
  { slug: "hualien",         name: "花蓮縣", nameEn: "Hualien",       status: "draft", routeCount: 6 },
  { slug: "penghu",          name: "澎湖縣", nameEn: "Penghu",        status: "draft", routeCount: 6 },
  { slug: "kinmen",          name: "金門縣", nameEn: "Kinmen",        status: "draft", routeCount: 6 },
  { slug: "lienchiang",      name: "連江縣", nameEn: "Lienchiang",    status: "draft", routeCount: 6 },
];

/** 依 slug 查詢單一縣市資料 */
export function getCountyBySlug(slug: string): County | undefined {
  return counties.find((c) => c.slug === slug);
}
