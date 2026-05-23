type Spot = {
  id: string;
  name: string;
  type: string;
  desc: string;
  image?: string;
  mapUrl?: string;
};

const defaultSpots: Spot[] = [
  {
    id: "A",
    name: "龍虎塔",
    type: "明信片 / 拍照點",
    desc: "蓮池潭代表地標，適合拍照與明信片收集。",
    image: "/maps/lotus-pond/longhu-tower.jpg",
    mapUrl: "",
  },
  {
    id: "B",
    name: "春秋閣",
    type: "景點 / 步行路線",
    desc: "靠近湖岸步道，可接續龍虎塔安排散步。",
    image: "/maps/lotus-pond/chunqiu-pavilion.jpg",
    mapUrl: "",
  },
  {
    id: "C",
    name: "元帝廟北極亭",
    type: "湖中景點",
    desc: "湖面視覺焦點，可作為路線中段停留點。",
    image: "/maps/lotus-pond/yuandi-temple.jpg",
    mapUrl: "",
  },
  {
    id: "D",
    name: "蓮池潭環潭步道",
    type: "種花路線",
    desc: "適合 Pikmin Bloom 玩家規劃種花與散步。",
    image: "/maps/lotus-pond/lakeside-trail.jpg",
    mapUrl: "",
  },
  {
    id: "E",
    name: "左營孔廟",
    type: "文化景點",
    desc: "蓮池潭東北側文化景點，適合半日遊延伸。",
    image: "/maps/lotus-pond/zuoying-temple.jpg",
    mapUrl: "",
  },
  {
    id: "F",
    name: "蓮池潭",
    type: "湖泊",
    desc: "湖畔自然景觀，適合散步與親子路線。",
    image: "/maps/lotus-pond/lotus-pond.jpg",
    mapUrl: "",
  },
  {
    id: "G",
    name: "蓮池潭兒童公園",
    type: "公園 / 休息",
    desc: "兒童遊憩場所，適合放風。",
    image: "/maps/lotus-pond/children-park.jpg",
    mapUrl: "",
  },
  {
    id: "H",
    name: "洲仔濕地",
    type: "自然 / 公園",
    desc: "自然景觀，適合生態教育。",
    image: "/maps/lotus-pond/zhouzai-wetland.jpg",
    mapUrl: "",
  },
];

function SpotCard({ spot }: { spot: Spot }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-slate-100">
        {spot.image ? (
          <img
            src={spot.image}
            alt={spot.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs font-medium text-slate-400">
            尚未加入照片
          </div>
        )}

        <span className="absolute left-2 top-2" style={{ width: 28, height: 28, borderRadius: '999px', background: '#2f8fd8', border: '3px solid white', color: 'white', fontWeight: 900, boxShadow: '0 4px 10px rgba(21,90,140,.24)', display: 'grid', placeItems: 'center' }}>
          {spot.id}
        </span>
      </div>

      <div className="p-3">
        <h3 className="text-sm font-bold leading-tight text-slate-800">
          {spot.name}
        </h3>
        <p className="mt-1 text-xs text-slate-500">{spot.type}</p>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-400">
          {spot.desc}
        </p>
      </div>
    </article>
  );
}

export function SpotCards({ spots = defaultSpots }: { spots?: Spot[] }) {
  return (
    <section className="rounded-3xl bg-white p-4 shadow-xl">
      <h2 className="mb-4 text-lg font-bold text-slate-800">
        蓮池潭景點卡
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {spots.map((spot) => (
          <SpotCard key={spot.id} spot={spot} />
        ))}
      </div>
    </section>
  );
}
