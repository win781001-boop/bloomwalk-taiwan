import type { RouteData } from "@/lib/route-types";
import { hsinchuRoutes } from "@/lib/hsinchu-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function 新竹縣RouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={hsinchuRoutes}
      countySlug="hsinchu"
      countyName="新竹縣"
      hideHeader={hideHeader}
    />
  );
}