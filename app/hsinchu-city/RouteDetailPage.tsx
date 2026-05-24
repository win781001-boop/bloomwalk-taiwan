import type { RouteData } from "@/lib/route-types";
import { hsinchuCityRoutes } from "@/lib/hsinchu-city-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function 新竹市RouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={hsinchuCityRoutes}
      countySlug="hsinchu-city"
      countyName="新竹市"
      hideHeader={hideHeader}
    />
  );
}