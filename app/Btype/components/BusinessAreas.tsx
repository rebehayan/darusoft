"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const TABS = [
  {
    id: "public", label: "공공 / 기관",
    headline: "공공·기관 디지털 인프라의\n안정적 설계와 구축",
    items: [
      { title: "SI (시스템 통합)", desc: "공공·기관 업무에 맞는 시스템을 안정적으로 설계하고 구축합니다." },
      { title: "SM (시스템 관리)", desc: "안정적인 운영과 지속적인 개선으로 시스템 가치를 높입니다." },
      { title: "클라우드 구축", desc: "공공 환경에 맞는 유연하고 안전한 클라우드 기반을 구축합니다." },
      { title: "솔루션 유통", desc: "검증된 솔루션을 공공 환경에 맞게 연결하고 제공합니다." },
    ],
    color: "teal",
  },
  {
    id: "medical", label: "의료기관",
    headline: "의료 현장의 디지털 전환을\n위한 맞춤 IT 서비스",
    items: [
      { title: "SI (시스템 통합)", desc: "의료 현장의 업무 흐름에 맞춘 시스템을 설계하고 구축합니다." },
      { title: "SM (시스템 관리)", desc: "의료 서비스의 연속성을 위해 시스템 운영을 안정적으로 지원합니다." },
      { title: "클라우드 구축", desc: "의료기관에 적합한 안전하고 유연한 클라우드 환경을 구축합니다." },
      { title: "솔루션 유통", desc: "의료 현장에 필요한 솔루션을 최적의 방식으로 제안하고 공급합니다." },
    ],
    color: "green",
  },
  {
    id: "airpa", label: "AI / RPA",
    headline: "AI와 RPA로 실현하는\n업무 혁신과 자동화",
    items: [
      { title: "AI 서비스", desc: "AI 기술로 더 빠르고 스마트한 업무 환경을 만듭니다." },
      { title: "RPA 구축", desc: "반복 업무를 자동화해 효율과 정확성을 함께 높입니다." },
      { title: "RPA 컨설팅", desc: "업무 진단부터 자동화 전략까지 RPA 도입 방향을 함께 설계합니다." },
    ],
    color: "mixed",
  },
];

const COLOR: Record<string, { active: string; num: string }> = {
  teal: { active: "bg-[#57C1D8]", num: "text-[#57C1D8]/25" },
  green: { active: "bg-[#77B263]", num: "text-[#77B263]/25" },
  mixed: { active: "bg-gradient-to-r from-[#57C1D8] to-[#77B263]", num: "text-[#57C1D8]/25" },
};

export default function BusinessAreas() {
  const [activeIdx, setActiveIdx] = useState(0);
  const tab = TABS[activeIdx];
  const c = COLOR[tab.color];

  return (
    <section id="business" className="py-28 lg:py-36 section-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[#57C1D8] mb-3 block">Business Areas</span>
              <h2 className="text-[2rem] sm:text-[2.5rem] font-bold text-slate-900 tracking-[-0.02em] leading-tight">사업분야</h2>
            </div>
            <div className="flex gap-1 p-1 bg-slate-100 rounded-xl self-start lg:self-auto">
              {TABS.map((t, i) => (
                <button key={t.id} onClick={() => setActiveIdx(i)}
                  className={`relative px-5 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-300 ${i === activeIdx ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div key={tab.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35, ease: "easeInOut" }}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
              <div className="lg:col-span-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug tracking-tight whitespace-pre-line">{tab.headline}</h3>
                <div className={`mt-6 w-12 h-1 rounded-full ${c.active}`} />
              </div>
              <div className="lg:col-span-3">
                <div className="space-y-0 divide-y divide-slate-100">
                  {tab.items.map((item, i) => (
                    <div key={item.title} className="group flex gap-5 py-6 first:pt-0 last:pb-0">
                      <span className={`text-[40px] font-bold leading-none ${c.num} select-none`}>{String(i + 1).padStart(2, "0")}</span>
                      <div className="pt-1">
                        <h4 className="text-[16px] font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">{item.title}</h4>
                        <p className="mt-1.5 text-[14px] text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
