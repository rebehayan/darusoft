"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const SOLUTIONS = [
  {
    image: "/card1.jpeg",
    name: "DARU-CMS",
    tagline: "콘텐츠 관리시스템",
    desc: "효율적인 콘텐츠 관리시스템 구축을 위한 솔루션으로, 전자정부 표준 프레임워크 호환(레벨2)을 지원합니다.",
    features: [
      "콘텐츠 관리시스템 구축",
      "전자정부 표준 프레임워크 호환",
      "GS 인증 예정 (2026)",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
  },
  {
    image: "/card2.jpeg",
    name: "DARU-WA",
    tagline: "웹 접근성 솔루션",
    desc: "웹 접근성 진단 및 개선을 위한 솔루션으로, 전자정부 표준 프레임워크와 호환됩니다.",
    features: [
      "웹 접근성 자동 진단",
      "전자정부 표준 프레임워크 호환",
      "접근성 개선 리포트",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    image: "/card3.jpeg",
    name: "DARU-AI CHAT",
    tagline: "AI 챗봇 솔루션",
    desc: "AI 기반 대화형 서비스 구축을 위한 솔루션으로, 전자정부 표준 프레임워크와 호환됩니다.",
    features: [
      "AI 기반 자동 응답",
      "전자정부 표준 프레임워크 호환",
      "맞춤형 시나리오 설계",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    ),
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative overflow-hidden">
      {/* BG Image + overlay */}
      <Image
        src="/solutions-tech.png"
        alt=""
        fill
        className="object-cover opacity-40 grayscale"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-slate-950/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(87,193,216,0.08),transparent_60%)]" />

      <div className="relative z-10 py-28 lg:py-36">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection className="mb-20">
            <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[#57C1D8] mb-3 block">
              Solutions
            </span>
            <h2 className="text-[2rem] sm:text-[2.5rem] font-bold text-white tracking-[-0.02em] leading-tight">
              솔루션
            </h2>
            <p className="mt-4 text-[17px] text-slate-400 font-light">
              전자정부 표준 프레임워크 호환 자체 솔루션
            </p>
          </AnimatedSection>

          <div className="space-y-20 lg:space-y-28">
            {SOLUTIONS.map((sol, idx) => (
              <AnimatedSection key={sol.name} delay={0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
                >
                  <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#57C1D8]">
                        {sol.icon}
                      </div>
                      <span className="text-[12px] font-semibold tracking-widest uppercase text-slate-500">
                        {sol.tagline}
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      {sol.name}
                    </h3>
                    <p className="mt-4 text-[16px] text-slate-400 leading-relaxed max-w-md">
                      {sol.desc}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {sol.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-3 text-[15px] text-slate-300"
                        >
                          <div className="w-5 h-5 rounded-full bg-[#77B263]/20 flex items-center justify-center shrink-0">
                            <svg
                              className="w-3 h-3 text-[#77B263]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={idx % 2 !== 0 ? "lg:order-1" : ""}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.06] overflow-hidden flex items-center justify-center  p-5 box-border"
                    >
                      <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                          backgroundSize: "40px 40px",
                        }}
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(87,193,216,0.06),transparent_70%)]" />

                      <img
                        src={sol.image}
                        alt=""
                        className="w-full h-full object-cover rounded-xl"
                      />
                      {/* <div className="text-6xl sm:text-7xl font-bold text-white/[0.05] tracking-tight">
                          {sol.name}
                        </div>
                        <div className="mt-2 text-[13px] text-slate-600 font-medium tracking-widest uppercase">
                          {sol.tagline}
                        </div> */}
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
