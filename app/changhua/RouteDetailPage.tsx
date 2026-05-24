import type { RouteData } from "@/lib/route-types";
import { changhuaRoutes } from "@/lib/changhua-routes";
import RouteDetailPageShell from "@/components/RouteDetailPageShell";

export default function 彰化縣RouteDetailPage({ route, hideHeader }: { route: RouteData; hideHeader?: boolean }) {
  return (
    <RouteDetailPageShell
      route={route}
      routes={changhuaRoutes}
      countySlug="changhua"
      countyName="彰化縣"
      hideHeader={hideHeader}
    />
  );
}