import type { RouteData } from "@/lib/route-types";
import { taoyuanRoutes } from "@/lib/taoyuan-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function 桃園市RouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={taoyuanRoutes}
      countySlug="taoyuan"
      countyName="桃園市"
      hideHeader={hideHeader}
    />
  );
}