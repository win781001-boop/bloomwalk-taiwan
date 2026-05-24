import type { RouteData } from "@/lib/route-types";
import { chiayiRoutes } from "@/lib/chiayi-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function ChiayiRouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={chiayiRoutes}
      countySlug="chiayi"
      countyName="嘉義縣"
      hideHeader={hideHeader}
    />
  );
}