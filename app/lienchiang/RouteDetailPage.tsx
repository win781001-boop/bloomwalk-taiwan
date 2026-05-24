import type { RouteData } from "@/lib/route-types";
import { lienchiangRoutes } from "@/lib/lienchiang-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function 連江縣RouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={lienchiangRoutes}
      countySlug="lienchiang"
      countyName="連江縣"
      hideHeader={hideHeader}
    />
  );
}