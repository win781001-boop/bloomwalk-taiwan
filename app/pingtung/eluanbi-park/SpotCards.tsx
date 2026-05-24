type Spot = {
  id: string;
  name: string;
  type: string;
  desc: string;
  image?: string;
  mapUrl?: string;
};

const placeholderSpots: Spot[] = [
  { id: "A", name: "待補景點", type: "—", desc: "景點資訊待補充" },
  { id: "B", name: "待補景點", type: "—", desc: "景點資訊待補充" },
  { id: "C", name: "待補景點", type: "—", desc: "景點資訊待補充" },
  { id: "D", name: "待補景點", type: "—", desc: "景點資訊待補充" },
  { id: "E", name: "待補景點", type: "—", desc: "景點資訊待補充" },
  { id: "F", name: "待補景點", type: "—", desc: "景點資訊待補充" },
  { id: "G", name: "待補景點", type: "—", desc: "景點資訊待補充" },
  { id: "H", name: "待補景點", type: "—", desc: "景點資訊待補充" },
];

function SpotCard({ spot }: { spot: Spot }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-slate-100">
        <div className="flex h-full items-center justify-center text-xs font-medium text-slate-400">尚未加入照片</div>
        <span className="absolute left-2 top-2" style={{ width: 28, height: 28, borderRadius: "999px", background: "#2f8fd8", border: "3px solid white", color: "white", fontWeight: 900, boxShadow: "0 4px 10px rgba(21,90,140,.24)", display: "grid", placeItems: "center" }}>{spot.id}</span>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-bold leading-tight text-slate-800">{spot.name}</h3>
        <p className="mt-1 text-xs text-slate-500">{spot.type}</p>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-400">{spot.desc}</p>
      </div>
    </article>
  );
}

export function SpotCards({ spots = placeholderSpots }: { spots?: Spot[] }) {
  return (
    <section className="rounded-3xl bg-white p-4 shadow-xl">
      <h2 className="mb-4 text-lg font-bold text-slate-800">鵝鑾鼻景點卡</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {spots.map((spot) => (<SpotCard key={spot.id} spot={spot} />))}
      </div>
    </section>
  );
}