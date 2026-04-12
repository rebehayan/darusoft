"use client";

import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import AnimatedSection from "./AnimatedSection";

export default function LocationMap() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section id="map" className="py-20 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection className="mb-12">
            <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[#57C1D8] mb-3 block">Location</span>
            <h2 className="text-[2rem] sm:text-[2.5rem] font-bold text-slate-900 tracking-[-0.02em] leading-tight">오시는 길</h2>
          </AnimatedSection>
          <div className="w-full h-[400px] lg:h-[500px] bg-slate-200 rounded-2xl" />
        </div>
      </section>
    );
  }

  return (
    <section id="map" className="py-20 bg-slate-50">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="mb-12">
          <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[#57C1D8] mb-3 block">Location</span>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold text-slate-900 tracking-[-0.02em] leading-tight">오시는 길</h2>
        </AnimatedSection>
        
        <div className="w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-sm">
          <Map
            center={{ lat: 37.5665, lng: 126.978 }}
            level={3}
            style={{ width: "100%", height: "100%" }}
          >
            <MapMarker position={{ lat: 37.5665, lng: 126.978 }}>
              <div style={{ padding: "8px", textAlign: "center" }}>
                <strong>다루소프트</strong>
              </div>
            </MapMarker>
          </Map>
        </div>
      </div>
    </section>
  );
}