"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    daum: any;
  }
}

export default function LocationMap() {
  useEffect(() => {
    const timestamp = "1776011902051";
    const key = "kkvpz2k9neh";
    const scriptId = "daum-roughmap-script";

    const renderMap = () => {
      // 1. 객체 존재 여부와 Lander 함수 여부 정밀 체크
      if (typeof window !== "undefined" && window.daum?.roughmap?.Lander) {
        const container = document.getElementById(
          `daumRoughmapContainer${timestamp}`,
        );

        if (container) {
          // 2. 이미 지도가 그려졌다면 중복 실행 방지
          if (container.children.length > 0) return;

          new window.daum.roughmap.Lander({
            timestamp: timestamp,
            key: key,
            mapWidth: "100%", // 혹은 컨테이너의 너비
            mapHeight: "500", // 숫자로 입력 (문자열도 가능)
          }).render();
        }
      } else {
        // 객체가 생성될 때까지 짧은 주기로 재시도
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
      script.onload = renderMap;
      document.head.appendChild(script);
    } else {
      renderMap();
    }
  }, []);

  return (
    <section id="map" className="py-20 bg-slate-50">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* 부모 div에 확실한 높이(h-[500px])를 부여하세요 */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
          <div
            id="daumRoughmapContainer1776011902051"
            className="root_daum_roughmap root_daum_roughmap_landing"
            style={{ width: "100%", height: "100%" }} // CSS 우선순위 확보
          />
        </div>
      </div>
    </section>
  );
}
