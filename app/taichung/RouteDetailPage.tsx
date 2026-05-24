import type { RouteData } from "@/lib/route-types";
import { taichungRoutes } from "@/lib/taichung-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function 臺中市RouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={taichungRoutes}
      countySlug="taichung"
      countyName="臺中市"
      hideHeader={hideHeader}
    />
  );
}