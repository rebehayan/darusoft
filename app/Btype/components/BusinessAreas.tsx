"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const SECTIONS = [
  {
    id: "public",
    label: "공공/기관",
    headline: "공공·기관 디지털 인프라의\n안정적 설계와 구축",
    items: [
      {
        title: "SI (시스템 통합)",
        desc: "공공·기관 업무에 맞는 시스템을 안정적으로 설계하고 구축합니다.",
      },
      {
        title: "SM (시스템 관리)",
        desc: "안정적인 운영과 지속적인 개선으로 시스템 가치를 높입니다.",
      },
      {
        title: "클라우드 구축",
        desc: "공공 환경에 맞는 유연하고 안전한 클라우드 기반을 구축합니다.",
      },
      {
        title: "솔루션 유통",
        desc: "검증된 솔루션을 공공 환경에 맞게 연결하고 제공합니다.",
      },
    ],
    color: "teal",
  },
  {
    id: "medical",
    label: "의료기관",
    headline: "의료 현장의 디지털 전환을\n위한 맞춤 IT 서비스",
    items: [
      {
        title: "SI (시스템 통합)",
        desc: "의료 현장의 업무 흐름에 맞춘 시스템을 설계하고 구축합니다.",
      },
      {
        title: "SM (시스템 관리)",
        desc: "의료 서비스의 연속성을 위해 시스템 운영을 안정적으로 지원합니다.",
      },
      {
        title: "클라우드 구축",
        desc: "의료기관에 적합한 안전하고 유연한 클라우드 환경을 구축합니다.",
      },
      {
        title: "솔루션 유통",
        desc: "의료 현장에 필요한 솔루션을 최적의 방식으로 제안하고 공급합니다.",
      },
    ],
    color: "green",
  },
  {
    id: "airpa",
    label: "AI / RPA",
    headline: "AI와 RPA로 실현하는\n업무 혁신과 자동화",
    items: [
      {
        title: "AI 서비스",
        desc: "AI 기술로 더 빠르고 스마트한 업무 환경을 만듭니다.",
      },
      {
        title: "AI 컨설팅",
        desc: "AI 전략수립 · 모델개발 · 운영체계 구축 및 지원",
      },
      {
        title: "RPA 구축",
        desc: "반복 업무를 자동화해 효율과 정확성을 함께 높입니다.",
      },
      {
        title: "RPA 컨설팅",
        desc: "업무 진단부터 자동화 전략까지 RPA 도입 방향을 함께 설계합니다.",
      },
    ],
    color: "mixed",
  },
];

const COLOR: Record<string, { active: string; num: string }> = {
  teal: { active: "bg-[#57C1D8]", num: "text-[#57C1D8]/25" },
  green: { active: "bg-[#77B263]", num: "text-[#77B263]/25" },
  mixed: {
    active: "bg-gradient-to-r from-[#57C1D8] to-[#77B263]",
    num: "text-[#57C1D8]/25",
  },
};

export default function BusinessAreas() {
  return (
    <section
      id="business"
      className="py-26 lg:py-30 section-white min-h-screen content-center"
    >
      <div className=" block lg:flex justify-between max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="mb-16">
          <div>
            <span className="text-[15px] font-semibold tracking-[0.15em] uppercase text-[#57C1D8] mb-3 block">
              Business Areas
            </span>
            <h2 className="text-[2rem] sm:text-[64px] font-bold text-slate-900 tracking-[-0.02em] leading-none">
              사업분야
            </h2>
            <p className="text-lg text-gray-500 mt-10">
              공공·기관 디지털 인프라의 <br />
              안정적 설계와 구축
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-7">
          {SECTIONS.map((section, idx) => {
            const c = COLOR[section.color];
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="  [&:nth-child(2)_h4]:bg-[#cdf0d9]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[190px_1fr]  bg-white rounded-lg lg:rounded-3xl gap-3 lg:gap-0 p-6 lg:p-7 border-[1px] border-slate-200 shadow-[0_15px_20px_0_rgba(0,0,0,0.05)]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#009aea] to-[#00aa38]">
                      {section.label}
                    </h3>
                  </div>
                  <div>
                    <div className="grid gap-4 lg:gap-2.5">
                      {section.items.map((item, i) => (
                        <div
                          key={item.title}
                          className="group flex gap-8 lg:gap-5 flex-col"
                        >
                          <div className="pt-1 grid grid-cols-1 lg:grid-cols-[158px_1fr] gap-1 lg:gap-5">
                            <h4 className="text-[15px] h-9 text-center content-center rounded-full font-semibold text-slate-800 group-hover:text-slate-900 transition-colors bg-[#d2ecf9]">
                              {item.title}
                            </h4>
                            <p className="mt-1.5 text-[15px] text-slate-700 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
