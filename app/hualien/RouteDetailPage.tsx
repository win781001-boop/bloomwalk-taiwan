import type { RouteData } from "@/lib/route-types";
import { hualienRoutes } from "@/lib/hualien-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function HualienRouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={hualienRoutes}
      countySlug="hualien"
      countyName="花蓮縣"
      hideHeader={hideHeader}
    />
  );
}