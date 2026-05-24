import type { RouteData } from "@/lib/route-types";
import { penghuRoutes } from "@/lib/penghu-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function 澎湖縣RouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={penghuRoutes}
      countySlug="penghu"
      countyName="澎湖縣"
      hideHeader={hideHeader}
    />
  );
}