"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const PROJECTS = [
  {
    id: 1,
    name: "대한임상병리사협회",
    scope: "홈페이지 유지관리",
    desc: "보수교육 및 출결시스템 기반 운영관리",
    tag: "Solution",
    img: "/logo-1.png",
  },
  {
    id: 2,
    name: "한국생명존중희망재단",
    scope: "통합 홈페이지 기능 개발 및 유지관리",
    desc: "재단 홈페이지 기능 개발 및 운영관리",
    tag: "Website",
    img: "/logo-2.png",
  },
  {
    id: 3,
    name: "가평군시설관리공단",
    scope: "홈페이지 구축 및 유지관리",
    desc: "공단 홈페이지 구축 및 운영관리",
    tag: "Website",
    img: "/logo-3.png",
  },
  {
    id: 4,
    name: "한국문화관광연구원",
    scope: "대표 누리집 기능 개선 및 운영",
    desc: "대표 누리집 기능개선 및 운영관리",
    tag: "Website",
    img: "/logo-4.png",
  },
  {
    id: 5,
    name: "공수처",
    scope: "대표홈페이지 구축 및 유지관리",
    desc: "국문/영문 홈페이지 구축 및 운영관리",
    tag: "Website",
    img: "/logo-5.png",
  },
  {
    id: 6,
    name: "명지전문대학",
    scope: "홈페이지 유지관리",
    desc: "홈페이지 운영관리",
    tag: "Website",
    img: "/logo-6.jpg",
  },
  {
    id: 7,
    name: "금융규제민원포털",
    scope: "대표홈페이지 구축 및 유지관리",
    desc: "홈페이지 구축 및 운영관리",
    tag: "Solution",
    img: "/logo-7.png",
  },
  {
    id: 8,
    name: "한국노인인력개발원",
    scope: "대표 홈페이지 유지관리",
    desc: "대표 홈페이지 운영관리",
    tag: "Website",
    img: "/logo-8.jpg",
  },
  {
    id: 9,
    name: "K-오션MOOC",
    scope: "홈페이지 구축 및 운영관리",
    desc: "한국형 온라인 해양공개강좌 홈페이지 구축 및 운영관리",
    tag: "Application",
    img: "/logo-9.png",
  },
];

const TAG_COLORS: Record<string, string> = {
  Website: "text-[#0032a5]",
  Solution: "text-[#5f9d01]",
  Application: "text-[#ea1ba3]",
};

import "swiper/css";
import "swiper/css/pagination";

export default function Portfolio() {
  const swiperRef = useRef<any>(null);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const toggleAutoplay = () => {
    if (swiperRef.current?.swiper.autoplay) {
      if (isAutoplay) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
      setIsAutoplay(!isAutoplay);
    }
  };

  return (
    <section
      id="portfolio"
      className="py-40 lg:py-45 section-white overflow-hidden bg-stone-100"
    >
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="mb-16">
          <div className="flex justify-between items-end">
            <div>
              <div>
                <span className="text-[15px] font-semibold tracking-[0.15em] uppercase text-[#57C1D8] mb-3 block">
                  Portfolio
                </span>
                <h2 className="text-[2rem] sm:text-[64px] font-bold text-slate-900 tracking-[-0.02em] leading-none">
                  포트폴리오
                </h2>
              </div>
              <p className="text-lg text-gray-500 mt-10">
                공공기관과 기업을 위한 다양한 프로젝트를 수행해왔습니다
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => swiperRef.current?.swiper.slidePrev()}
                className="w-12 h-12 cursor-pointer rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#57C1D8] hover:border-[#57C1D8] hover:text-white transition-all"
                aria-label="이전 슬라이드"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={toggleAutoplay}
                className="w-12 h-12 cursor-pointer rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#57C1D8] hover:border-[#57C1D8] hover:text-white transition-all"
                aria-label={isAutoplay ? "자동재생 정지" : "자동재생 재생"}
              >
                {isAutoplay ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.swiper.slideNext()}
                className="w-12 h-12 cursor-pointer rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#57C1D8] hover:border-[#57C1D8] hover:text-white transition-all"
                aria-label="다음 슬라이드"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <div className="relative -mx-6 sm:-mx-8 lg:-mx-12 px-6 sm:px-8 lg:px-12">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          slidesPerView="auto"
          spaceBetween={35}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // pagination={{ clickable: true }}
          className="w-[calc(100%+3rem)]"
        >
          {PROJECTS.map((p) => (
            <SwiperSlide key={p.id} className="!w-[300px] lg:!w-[380px] pb-2">
              <div className="w-full aspect-[4/5] overflow-hidden p-8 border border-solid border-[#E5E5E5] shadow-[3px_4px_7px_rgba(0,0,0,0.08)] rounded-3xl group cursor-pointer transition-all duration-300">
                <div className=" text-black">
                  <span
                    className={`text-[15px] font-bold tracking-widest opacity-70 mb-2 block underline underline-offset-4 ${TAG_COLORS[p.tag] || ""}`}
                  >
                    {p.tag}
                  </span>
                  <div className="h-[215px] flex justify-center items-center border-b-[1] border-gray-200">
                    <img src={p.img} alt={p.name} className="w-52" />
                  </div>
                  <h4 className="pt-10 pb-6 text-2xl font-bold text-gray-900">
                    {p.name}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {p.desc}
                  </p>
                  {/* <p className="mt-1 text-xs text-black/40">{p.scope}</p> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
