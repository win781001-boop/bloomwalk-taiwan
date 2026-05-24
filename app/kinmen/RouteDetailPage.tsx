import type { RouteData } from "@/lib/route-types";
import { kinmenRoutes } from "@/lib/kinmen-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function 金門縣RouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={kinmenRoutes}
      countySlug="kinmen"
      countyName="金門縣"
      hideHeader={hideHeader}
    />
  );
}