import type { RouteData } from "@/lib/route-types";
import { keelungRoutes } from "@/lib/keelung-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function 基隆市RouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={keelungRoutes}
      countySlug="keelung"
      countyName="基隆市"
      hideHeader={hideHeader}
    />
  );
}