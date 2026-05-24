import type { RouteData } from "@/lib/route-types";
import { newTaipeiRoutes } from "@/lib/new-taipei-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function 新北市RouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={newTaipeiRoutes}
      countySlug="new-taipei"
      countyName="新北市"
      hideHeader={hideHeader}
    />
  );
}