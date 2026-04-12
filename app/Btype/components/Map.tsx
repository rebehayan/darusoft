"use client";

import { useEffect, useState, useRef } from "react";
import AnimatedSection from "./AnimatedSection";

export default function LocationMap() {
  const [isMounted, setIsMounted] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !mapRef.current) return;

    const initMap = () => {
      if (window.naver && window.naver.maps) {
        const center = new window.naver.maps.LatLng(37.5665, 126.978);
        
        if (mapInstanceRef.current) {
          mapInstanceRef.current.setCenter(center);
          return;
        }

        const map = new window.naver.maps.Map(mapRef.current, {
          center: center,
          zoom: 15,
          zoomControl: true,
          mapTypeControl: true,
        });

        const marker = new window.naver.maps.Marker({
          position: center,
          map: map,
          title: "다루소프트",
        });

        mapInstanceRef.current = map;
      }
    };

    const scriptId = "naver-map-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID&submodules=geocoder`;
      script.charset = "UTF-8";
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, [isMounted]);

  return (
    <section id="map" className="py-20 bg-slate-50">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="mb-12">
          <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[#57C1D8] mb-3 block">Location</span>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold text-slate-900 tracking-[-0.02em] leading-tight">오시는 길</h2>
        </AnimatedSection>
        
        <div className="w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
          {!isMounted ? (
            <div className="w-full h-full bg-slate-200 animate-pulse" />
          ) : (
            <div ref={mapRef} className="w-full h-full" />
          )}
        </div>
      </div>
    </section>
  );
}