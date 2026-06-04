'use client'

import { useState, useEffect, useRef } from "react";
import type { Spot } from "@/lib/spot-types";

interface MapPin {
  id: string;
  shortId: string;
  left: number;
  top: number;
}

export function TainanMapSection({
  pins,
  spots,
  mapImage,
}: {
  pins: MapPin[];
  spots: Spot[];
  mapImage: string;
}) {
  const [previewPinId, setPreviewPinId] = useState<string | null>(null);
  const isTouchRef = useRef(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => { isTouchRef.current = true; };
    document.addEventListener("touchstart", handler, { once: true });
    return () => document.removeEventListener("touchstart", handler);
  }, []);

  useEffect(() => {
    const close = (e: TouchEvent | MouseEvent) => {
      if (
        previewPinId &&
        mapRef.current &&
        !mapRef.current.contains(e.target as Node)
      ) {
        setPreviewPinId(null);
      }
    };
    document.addEventListener("touchstart", close);
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("touchstart", close);
      document.removeEventListener("mousedown", close);
    };
  }, [previewPinId]);

  const activeSpot = previewPinId
    ? spots.find((s) => s.id === previewPinId)
    : null;

  return (
    <div className="relative">
      <div
        ref={mapRef}
        className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100"
        onMouseLeave={() => {
          if (!isTouchRef.current) setPreviewPinId(null);
        }}
      >
        <img
          src={mapImage}
          alt="路線手繪地圖"
          className="h-full w-full object-contain"
        />

        {pins.map((pin) => {
          const spot = spots.find((s) => s.id === pin.id);
          return (
            <div
              key={pin.id}
              className="absolute z-10"
              style={{ left: `${pin.left}%`, top: `${pin.top}%` }}
              onMouseEnter={() => {
                if (!isTouchRef.current && spot) setPreviewPinId(pin.id);
              }}
              onClick={() => {
                if (isTouchRef.current && spot) {
                  setPreviewPinId((prev) => (prev === pin.id ? null : pin.id));
                }
              }}
            >
              <div
                className="relative cursor-pointer select-none"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "999px 999px 999px 8px",
                  transform: "translate(-50%, -100%) rotate(-45deg)",
                  border: "3px solid white",
                  background: "#2f8fd8",
                  color: "white",
                  fontWeight: 900,
                  boxShadow: "0 8px 18px rgba(21,90,140,.32)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <span style={{ rotate: "45deg", display: "block" }}>
                  {pin.shortId}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {activeSpot && (
        <>
          {isTouchRef.current && (
            <div
              className="fixed inset-0 z-20"
              onClick={() => setPreviewPinId(null)}
            />
          )}

          <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
            <div className="w-56 overflow-hidden rounded-xl bg-white shadow-lg pointer-events-none">
              <div className="aspect-[4/3] bg-slate-100">
                <img
                  src={activeSpot.imagePlaceholder}
                  alt={activeSpot.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-2.5">
                <h4 className="text-sm font-bold leading-tight text-slate-800">
                  {activeSpot.name}
                </h4>
                <p className="mt-0.5 text-xs text-slate-500">
                  {activeSpot.typeTags.join(" / ")}
                </p>
                <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-slate-400">
                  {activeSpot.notes}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
