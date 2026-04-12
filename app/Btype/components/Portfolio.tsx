"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const PROJECTS = [
  {
    id: 1,
    name: "대한임상병리사협회",
    scope: "홈페이지 유지관리",
    desc: "보수교육 및 출결시스템 기반 운영관리",
    tag: "운영",
    img: "/medical-sys.png",
  },
  {
    id: 2,
    name: "한국생명존중희망재단",
    scope: "통합 홈페이지",
    desc: "홈페이지 기능 개발 및 운영관리",
    tag: "개발",
    img: "/gov-sys.png",
  },
  {
    id: 3,
    name: "가평군시설관리공단",
    scope: "홈페이지 구축",
    desc: "홈페이지 신규 구축 및 운영관리",
    tag: "구축",
    img: "/gov-sys.png",
  },
  {
    id: 4,
    name: "한국문화관광연구원",
    scope: "대표 누리집",
    desc: "기능개선 및 운영관리",
    tag: "개선",
    img: "/gov-sys.png",
  },
  {
    id: 5,
    name: "고위공직자범죄수사처",
    scope: "대표홈페이지 구축",
    desc: "국문/영문 홈페이지 구축 및 운영",
    tag: "구축",
    img: "/gov-sys.png",
  },
  {
    id: 6,
    name: "명지전문대학",
    scope: "홈페이지 유지관리",
    desc: "홈페이지 운영관리",
    tag: "운영",
    img: "/edu-sys.png",
  },
  {
    id: 7,
    name: "금융규제민원포털",
    scope: "대표홈페이지 구축",
    desc: "홈페이지 구축 및 운영관리",
    tag: "구축",
    img: "/gov-sys.png",
  },
  {
    id: 8,
    name: "한국노인인력개발원",
    scope: "대표 홈페이지",
    desc: "대표 홈페이지 운영관리",
    tag: "운영",
    img: "/gov-sys.png",
  },
  {
    id: 9,
    name: "K-오션MOOC",
    scope: "홈페이지 구축",
    desc: "한국형 온라인 해양공개강좌 구축 및 운영",
    tag: "구축",
    img: "/edu-sys.png",
  },
];

import "swiper/css";
import "swiper/css/pagination";

export default function Portfolio() {
  const swiperRef = useRef<any>(null);

  return (
    <section
      id="portfolio"
      className="py-28 lg:py-36 section-white overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="mb-16">
          <div className="flex justify-between items-end">
            <div>
              <div>
                <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[#57C1D8] mb-3 block">
                  Portfolio
                </span>
                <h2 className="text-[2rem] sm:text-[2.5rem] font-bold text-slate-900 tracking-[-0.02em] leading-tight">
                  포트폴리오
                </h2>
              </div>
              <p className="text-[16px] text-slate-500 font-light max-w-md mt-4 lg:mt-0">
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
          // modules={[Pagination]}
          slidesPerView="auto"
          spaceBetween={24}
          loop={true}
          // pagination={{ clickable: true }}
          className="w-[calc(100%+3rem)]"
        >
          {PROJECTS.map((p) => (
            <SwiperSlide key={p.id} className="!w-[300px] lg:!w-[380px]">
              <div className="relative w-full aspect-[4/3] rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden shadow-xl group cursor-pointer">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent transition-all duration-300 group-hover:from-slate-900 group-hover:via-slate-900/60" />

                <div className="absolute bottom-8 left-8 right-8 text-white transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase opacity-70 mb-2 block">
                    {p.tag} Project
                  </span>
                  <h4 className="text-xl font-bold">{p.name}</h4>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                    {p.desc}
                  </p>
                  <p className="mt-1 text-xs text-white/40 transition-colors duration-300 group-hover:text-white/70">
                    {p.scope}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
