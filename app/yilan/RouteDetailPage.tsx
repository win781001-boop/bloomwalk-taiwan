import type { RouteData } from "@/lib/route-types";
import { yilanRoutes } from "@/lib/yilan-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function YilanRouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={yilanRoutes}
      countySlug="yilan"
      countyName="宜蘭縣"
      hideHeader={hideHeader}
    />
  );
}