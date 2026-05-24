import type { RouteData } from "@/lib/route-types";
import { nantouRoutes } from "@/lib/nantou-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function 南投縣RouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={nantouRoutes}
      countySlug="nantou"
      countyName="南投縣"
      hideHeader={hideHeader}
    />
  );
}