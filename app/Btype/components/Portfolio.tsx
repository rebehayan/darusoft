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
    img: "/port1.jpg",
  },
  {
    id: 2,
    name: "한국생명존중희망재단",
    scope: "통합 홈페이지",
    desc: "홈페이지 기능 개발 및 운영관리",
    tag: "개발",
    img: "/port2.svg",
  },
  {
    id: 3,
    name: "가평군시설관리공단",
    scope: "홈페이지 구축",
    desc: "홈페이지 신규 구축 및 운영관리",
    tag: "구축",
    img: "/port2.svg",
  },
  {
    id: 4,
    name: "한국문화관광연구원",
    scope: "대표 누리집",
    desc: "기능개선 및 운영관리",
    tag: "개선",
    img: "/port2.svg",
  },
  {
    id: 5,
    name: "고위공직자범죄수사처",
    scope: "대표홈페이지 구축",
    desc: "국문/영문 홈페이지 구축 및 운영",
    tag: "구축",
    img: "/port2.svg",
  },
  {
    id: 6,
    name: "명지전문대학",
    scope: "홈페이지 유지관리",
    desc: "홈페이지 운영관리",
    tag: "운영",
    img: "/port2.svg",
  },
  {
    id: 7,
    name: "금융규제민원포털",
    scope: "대표홈페이지 구축",
    desc: "홈페이지 구축 및 운영관리",
    tag: "구축",
    img: "/port2.svg",
  },
  {
    id: 8,
    name: "한국노인인력개발원",
    scope: "대표 홈페이지",
    desc: "대표 홈페이지 운영관리",
    tag: "운영",
    img: "/port2.svg",
  },
  {
    id: 9,
    name: "K-오션MOOC",
    scope: "홈페이지 구축",
    desc: "한국형 온라인 해양공개강좌 구축 및 운영",
    tag: "구축",
    img: "/port2.svg",
  },
];

import "swiper/css";
import "swiper/css/pagination";

export default function Portfolio() {
  const swiperRef = useRef<any>(null);

  return (
    <section
      id="portfolio"
      className="py-40 lg:py-45 section-white overflow-hidden"
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
            <SwiperSlide key={p.id} className="!w-[300px] lg:!w-[380px] pb-2">
              <div className="relative w-full aspect-[4/5] overflow-hidden pt-[62px] px-[32px] pb-[56px] border border-solid border-[#E5E5E5] shadow-[3px_4px_7px_rgba(0,0,0,0.08)] rounded-[16px] group cursor-pointer transition-all duration-300">
                <div
                  className="absolute inset-0 rounded-[16px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none p-[2px] bg-gradient-to-br from-[#14B8A6] via-[#0EA5E9] to-[#2563EB]"
                  style={{
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                <div className="absolute bottom-8 left-8 right-8 text-black transition-all duration-300 group-hover:-translate-y-1">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-55 pb-5 h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="text-[12px] font-bold tracking-widest uppercase opacity-70 mb-2 block">
                    {p.tag} Project
                  </span>
                  <h4 className="text-2xl font-bold">{p.name}</h4>
                  <p className="mt-2 text-sm text-black/60 leading-relaxed">
                    {p.desc}
                  </p>
                  <p className="mt-1 text-xs text-black/40">{p.scope}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
