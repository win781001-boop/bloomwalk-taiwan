import type { RouteData } from "@/lib/route-types";
import { yunlinRoutes } from "@/lib/yunlin-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function 雲林縣RouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={yunlinRoutes}
      countySlug="yunlin"
      countyName="雲林縣"
      hideHeader={hideHeader}
    />
  );
}