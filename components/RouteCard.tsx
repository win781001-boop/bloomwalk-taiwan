import type { RouteCategory } from "@/lib/category-icons";
import { categoryIconMap, categoryNames } from "@/lib/category-icons";

/* ── Types ────────────────────────────────── */

/** Fields a route must provide to be rendered by RouteCard */
export interface RouteCardRoute {
  slug: string;
  name: string;
  area: string;
  summary: string;
  primaryCategory: RouteCategory;
  postcardAppeal: number;
  walkingComfort: number;
  transportConvenience: number;
  tags: string[];
}

interface Props {
  route: RouteCardRoute;
  /** Background image URL (computed by the parent page) */
  backgroundImage?: string | null;
  /** Base path for route detail links, e.g. "/kaohsiung" */
  baseHref: string;
  /** Optional per-county appeal label generator */
  appealLabel?: (score: number) => string;
}

/* ── 评分条 ──────────────────────────────── */

function RatingBar({
  value,
  max = 5,
  color = "bg-bloom-gold",
}: {
  value: number;
  max?: number;
  color?: string;
}) {
  return (
    <div className="flex gap-1" aria-label={`${value}/${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 w-5 rounded-full ${i < value ? color : "bg-bloom-green-light/50"}`}
        />
      ))}
    </div>
  );
}

/* ── Route Card ───────────────────────────── */

function defaultAppealLabel(score: number) {
  if (score === 5) return "代表地標，值得特地收集";
  if (score === 4) return "有特色，適合順路安排";
  return "實用散步點，明信片吸引力普通";
}

export function RouteCard({
  route,
  backgroundImage,
  baseHref,
  appealLabel = defaultAppealLabel,
}: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-bloom-green-light/50 p-5 shadow-sm transition-all duration-300 hover:shadow-md sm:p-7" style={{ backgroundColor: "#FEFCF5" }}>
      {backgroundImage != null && (
        <>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.50,
              filter: "brightness(1.05) saturate(0.9) contrast(0.95) blur(1px)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(farthest-corner at 100% 100%, rgba(255,250,240,0.15) 0%, rgba(255,250,240,0.40) 35%, rgba(255,250,240,0.72) 65%, rgba(255,250,240,0.88) 100%)",
            }}
          />
        </>
      )}
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div
            className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-2xl border border-amber-100/60"
            style={{ backgroundColor: "#fff7e8" }}
          >
            <img
              src={categoryIconMap[route.primaryCategory]}
              alt={categoryNames[route.primaryCategory]}
              className="h-[60px] w-[60px] object-contain"
            />
          </div>
          <div className="min-w-0 flex-1">
            <a
              href={`${baseHref}/${route.slug}`}
              className="text-lg font-bold tracking-tight text-bloom-text sm:text-xl hover:underline hover:opacity-70 transition-all"
            >
              {route.name}
            </a>
            <p className="mt-0.5 text-xs font-medium text-bloom-green">
              {route.area}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-bloom-text-light sm:text-base">
              {route.summary}
            </p>
          </div>
        </div>

        <hr className="my-5 border-bloom-green-light/30" />

        <div className="space-y-3">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-bloom-text-light">
              ⭐ 明信片吸引力
            </p>
            <RatingBar value={route.postcardAppeal} />
            <p className="mt-1 text-xs font-medium text-bloom-gold">
              {route.postcardAppeal}/5 — {appealLabel(route.postcardAppeal)}
            </p>
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-bloom-text-light">
              🚶 散步舒適度
            </p>
            <RatingBar value={route.walkingComfort} color="bg-bloom-green" />
            <p className="mt-1 text-xs text-bloom-text-light/70">
              {route.walkingComfort}/5
            </p>
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-bloom-text-light">
              🚇 交通便利度
            </p>
            <RatingBar
              value={route.transportConvenience}
              color="bg-bloom-sky"
            />
            <p className="mt-1 text-xs text-bloom-text-light/70">
              {route.transportConvenience}/5
            </p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {route.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full border border-bloom-green-light/40 bg-bloom-green-light/30 px-3 py-0.5 text-xs text-bloom-green-dark"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
