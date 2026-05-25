import { kaohsiungLotusPondSpots } from "@/lib/kaohsiung-spots";
import type { Spot } from "@/lib/spot-types";

/** Generate short display letter from index (0 -> A, 1 -> B, etc.) */
function spotBadge(index: number): string {
  return String.fromCharCode(65 + index);
}

function SpotCard({ spot, index }: { spot: Spot; index: number }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-slate-100">
        {spot.imagePlaceholder ? (
          <img
            src={spot.imagePlaceholder}
            alt={spot.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs font-medium text-slate-400">
            尚未加入照片
          </div>
        )}

        <span
          className="absolute left-2 top-2"
          style={{
            width: 28,
            height: 28,
            borderRadius: "999px",
            background: "#2f8fd8",
            border: "3px solid white",
            color: "white",
            fontWeight: 900,
            boxShadow: "0 4px 10px rgba(21,90,140,.24)",
            display: "grid",
            placeItems: "center",
          }}
        >
          {spotBadge(index)}
        </span>
      </div>

      <div className="p-3">
        <h3 className="text-sm font-bold leading-tight text-slate-800">
          {spot.name}
        </h3>
        <p className="mt-1 text-xs text-slate-500">
          {spot.typeTags.join(" / ")}
        </p>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-400">
          {spot.notes}
        </p>
      </div>
    </article>
  );
}

export function SpotCards({
  spots = kaohsiungLotusPondSpots,
}: {
  spots?: Spot[];
}) {
  return (
    <section className="rounded-3xl bg-white p-4 shadow-xl">
      <h2 className="mb-4 text-lg font-bold text-slate-800">
        蓮池潭景點卡
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {spots.map((spot, i) => (
          <SpotCard key={spot.id} spot={spot} index={i} />
        ))}
      </div>
    </section>
  );
}
