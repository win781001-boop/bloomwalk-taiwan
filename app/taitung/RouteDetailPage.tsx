import type { RouteData } from "@/lib/route-types";
import { taitungRoutes } from "@/lib/taitung-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function TaitungRouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={taitungRoutes}
      countySlug="taitung"
      countyName="臺東縣"
      hideHeader={hideHeader}
    />
  );
}