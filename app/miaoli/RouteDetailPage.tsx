import type { RouteData } from "@/lib/route-types";
import { miaoliRoutes } from "@/lib/miaoli-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function 苗栗縣RouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={miaoliRoutes}
      countySlug="miaoli"
      countyName="苗栗縣"
      hideHeader={hideHeader}
    />
  );
}