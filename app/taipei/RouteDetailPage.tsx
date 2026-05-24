import type { RouteData } from "@/lib/route-types";
import { taipeiRoutes } from "@/lib/taipei-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function 臺北市RouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={taipeiRoutes}
      countySlug="taipei"
      countyName="臺北市"
      hideHeader={hideHeader}
    />
  );
}