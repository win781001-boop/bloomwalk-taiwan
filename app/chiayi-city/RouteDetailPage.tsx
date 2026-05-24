import type { RouteData } from "@/lib/route-types";
import { chiayiCityRoutes } from "@/lib/chiayi-city-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function ChiayiCityRouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={chiayiCityRoutes}
      countySlug="chiayi-city"
      countyName="嘉義市"
      hideHeader={hideHeader}
    />
  );
}