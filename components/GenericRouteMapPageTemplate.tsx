import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";

interface Props {
  mapTitle: string;
  mapContent: ReactNode;
  spotCardsContent: ReactNode;
  children: ReactNode;
}

export default function GenericRouteMapPageTemplate({
  mapTitle,
  mapContent,
  spotCardsContent,
  children,
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
          {children}
        </div>
      </div>
    </div>
  );
}