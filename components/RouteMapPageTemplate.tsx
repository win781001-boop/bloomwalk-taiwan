import type { ReactNode } from "react";
import type { KaohsiungRoute } from "@/lib/kaohsiung-routes";
import { RouteDetailPage } from "@/app/kaohsiung/RouteDetailPage";
import SiteHeader from "./SiteHeader";

interface Props {
  route: KaohsiungRoute;
  mapTitle: string;
  mapContent: ReactNode;
  spotCardsContent: ReactNode;
}

export default function RouteMapPageTemplate({
  route,
  mapTitle,
  mapContent,
  spotCardsContent,
}: Props) {
  return (
    <div className="flex flex-col">
      <SiteHeader />
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-6 px-4 py-8 lg:grid-cols-[minmax(0,1fr)_680px]">
        <aside className="lg:order-2">
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-4 shadow-xl">
              <h2 className="mb-4 text-lg font-bold text-bloom-text">
                {mapTitle}
              </h2>
              {mapContent}
            </div>
            {spotCardsContent}
          </div>
        </aside>
        <div className="min-w-0 lg:order-1">
          <RouteDetailPage route={route} hideHeader />
        </div>
      </div>
    </div>
  );
}
