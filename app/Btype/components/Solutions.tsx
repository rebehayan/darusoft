"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const SOLUTIONS = [
  {
    color: "#41586e",
    textColor: ["#5ba4d8", "#7f9eb4", "#5ba4d8"],
    image: "/card1.jpeg",
    name: "DARU-CMS",
    tagline: "콘텐츠 관리시스템",
    desc: "효율적인 콘텐츠 관리시스템 구축을 위한 솔루션으로, 전자정부 표준 프레임워크 호환(레벨2)을 지원합니다.",
    features: [
      "콘텐츠 관리시스템 구축",
      "전자정부 표준 프레임워크 호환",
      "GS 인증 예정 (2026)",
    ],
  },
  {
    color: "#8f9fa9",
    textColor: ["#c8dde6", "#c8dde6", "#a6c0d0"],
    image: "/card2.jpeg",
    name: "DARU-WA",
    tagline: "웹 접근성 솔루션",
    desc: "웹 접근성 진단 및 개선을 위한 솔루션으로, 전자정부 표준 프레임워크와 호환됩니다.",
    features: [
      "웹 접근성 자동 진단",
      "전자정부 표준 프레임워크 호환",
      "접근성 개선 리포트",
    ],
  },
  {
    color: "#6f7b82",
    textColor: ["#93b1c2", "#adcde0", "#93b1c2"],
    image: "/card3.jpeg",
    name: "DARU-AI CHAT",
    tagline: "AI 챗봇 솔루션",
    desc: "AI 기반 대화형 서비스 구축을 위한 솔루션으로, 전자정부 표준 프레임워크와 호환됩니다.",
    features: [
      "AI 기반 자동 응답",
      "전자정부 표준 프레임워크 호환",
      "맞춤형 시나리오 설계",
    ],
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative  min-h-screen content-center bg-gradient-to-r from-[#55b2c9] to-[#6ad7bb] scroll-mt-12"
    >
      <div className="relative z-10 py-28 lg:py-30">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8">
          <AnimatedSection className=" mb-10 lg:mb-15">
            <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-white mb-3 block opacity-70">
              Solutions
            </span>
            <div className="block lg:flex gap-10 items-end">
              <h2 className="text-[2rem] sm:text-[64px] font-bold text-white tracking-[-0.02em] leading-none">
                솔루션
              </h2>
              <p className="mt-4 text-[17px] text-white opacity-70 font-light">
                전자정부 표준 프레임워크 호환 자체 솔루션
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-10 lg:space-y-20 lg:space-y-28 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-15">
            {SOLUTIONS.map((sol, idx) => (
              <AnimatedSection key={sol.name} delay={0.1}>
                <div
                  className=" text-white rounded-2xl  shadow-[0_15px_20px_0_rgba(0,0,0,0.19)]"
                  style={{
                    background: `url(${sol.image}) no-repeat bottom / 120% auto`,
                  }}
                >
                  <div
                    style={
                      { "--start-color": sol.color } as React.CSSProperties
                    }
                    className="bg-[image:linear-gradient(to_bottom,var(--start-color)_65%,transparent_75%)] lg:bg-[image:linear-gradient(to_bottom,var(--start-color)_55%,transparent_70%)] p-6 lg:p-10 rounded-2xl "
                  >
                    <div>
                      <div className="inline-flex items-center gap-3 mb-6">
                        <span
                          className={`text-[12px] font-semibold tracking-widest uppercase`}
                          style={{ color: sol.textColor[0] }}
                        >
                          {sol.tagline}
                        </span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        {sol.name}
                      </h3>
                      <p
                        className="mt-4 text-[16px] leading-relaxed max-w-md"
                        style={{ color: sol.textColor[1] }}
                      >
                        {sol.desc}
                      </p>
                      <ul className="mt-8 space-y-3">
                        {sol.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-3 text-[15px] text-slate-300"
                          >
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                              style={{ background: sol.textColor[2] }}
                            >
                              <svg
                                className="w-3 h-3 text-white"
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
                    <div className="mt-5">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                        className="relative aspect-[6/3] rounded-2xl"
                      ></motion.div>
                    </div>
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
