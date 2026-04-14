"use client";

import AnimatedSection from "./AnimatedSection";

export default function LocationMap() {
  const mapUrl =
    "https://map.kakao.com/?urlX=527308.0000000027&urlY=1119843.0000000005&name=%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EC%84%B1%EB%82%B4%EB%A1%9C5%EA%B8%B8%2021&map_type=TYPE_MAP&from=roughmap";
  const routeUrl =
    "https://map.kakao.com/?from=roughmap&eName=%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%8F%99%EA%B5%AC%20%EC%84%B1%EB%82%B4%EB%A1%9C5%EA%B8%B8%2021&eX=527308.0000000027&eY=1119843.0000000005";
  const mapImgSrc =
    "http://t1.daumcdn.net/roughmap/imgmap/33c80765ed63e97cac61374a083399a40b0e0ebb9a4519d81028635926f1f8b1";

  return (
    <section id="map" className="py-25 lg:py-38 bg-stone-100">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-3">
        <AnimatedSection className="mb-10 lg:mb-20 lg:flex justify-between items-end gap-2.5">
          <div className="mb-4 lg:mb-0">
            <span className="text-[15px] font-semibold tracking-[0.15em] uppercase text-[#57C1D8] mb-3 block">
              Location
            </span>
            <h2 className="text-[2rem] sm:text-[64px] font-bold text-slate-900 tracking-[-0.02em] leading-none">
              오시는 길
            </h2>
          </div>
          <div className="text-lg lg:text-2xl text-stone-700 flex items-center whitespace-nowrap gap-2">
            <img src="/point.png" alt="" /> 서울시 강동구 성내로 5길 21 2F
          </div>
        </AnimatedSection>

        <div className="w-full font-sans  border border-slate-200 rounded-xl overflow-hidden group">
          <div className="relative w-full aspect-[21/9] sm:aspect-[3/1] overflow-hidden">
            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={mapImgSrc}
                alt="지도 약도"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </a>
          </div>

          <div className="flex items-center justify-between px-6 py-4 bg-white border-t border-slate-100">
            <a
              href="https://map.kakao.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="//t1.kakaocdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                alt="카카오맵"
                className="h-4 opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>

            <a
              href={routeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-[#57C1D8] transition-colors"
            >
              길찾기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
