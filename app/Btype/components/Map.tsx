"use client";

import { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

declare global {
  interface Window {
    daum: any;
  }
}

export default function LocationMap() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const timestamp = "1776011902051";
    const key = "kkvpz2k9neh";
    const scriptId = "daum-roughmap-script";

    const renderMap = () => {
      //
      if (window.daum && window.daum.roughmap && window.daum.roughmap.Lander) {
        const container = document.getElementById(
          `daumRoughmapContainer${timestamp}`,
        );
        if (container) {
          container.innerHTML = "";
          new window.daum.roughmap.Lander({
            timestamp: timestamp,
            key: key,
            mapWidth: "100%",
            mapHeight: "100%",
          }).render();
        }
      } else {
        setTimeout(renderMap, 200);
      }
    };

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js";
      script.charset = "UTF-8";
      script.async = true;
      script.onload = () => {
        setTimeout(renderMap, 300);
      };
      document.head.appendChild(script);
    } else {
      renderMap();
    }
  }, []);

  return (
    <section id="map" className="py-20 bg-slate-50">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="mb-12">
          <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[#57C1D8] mb-3 block">
            Location
          </span>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold text-slate-900 tracking-[-0.02em] leading-tight">
            오시는 길
          </h2>
        </AnimatedSection>

        <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
          {!isMounted ? (
            <div className="w-full h-full bg-slate-200 animate-pulse" />
          ) : (
            <div
              id="daumRoughmapContainer1776011902051"
              className="root_daum_roughmap root_daum_roughmap_landing w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
}
