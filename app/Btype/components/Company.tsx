"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let s = 0;
          const d = 1600;
          const step = (t: number) => {
            if (!s) s = t;
            const p = Math.min((t - s) / d, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const HISTORY = [
  {
    year: "2026",
    events: [
      "DARU-CMS GS 인증 (4월말 예정)",
      "국제품질인증 CMMI 인증 (4월말 예정)",
    ],
    hl: true,
  },
  {
    year: "2024",
    events: ["DARU-CMS 호환성 인증 (전자정부표준프레임워크)"],
    hl: false,
  },
  { year: "2023", events: ["CMS S/W 등록"], hl: false },
  {
    year: "2021",
    events: ["웹플래너 서울평생교육원 LMS 기술지원 파트너"],
    hl: false,
  },
  {
    year: "2020",
    events: ["배화여자대학교 가족회사 GUQDIR", "대한결핵협회 파트너쉽"],
    hl: false,
  },
  {
    year: "2018",
    events: ["RPA 업무자동화시스템 컨설팅 솔루션 Partner"],
    hl: false,
  },
  { year: "2016", events: ["한국디지털접근성진흥원 기술지원협약"], hl: false },
  { year: "2015", events: ["여성기업등록"], hl: false },
  { year: "2014", events: ["법인설립"], hl: false },
];

export default function Company() {
  return (
    <section
      id="company"
      className="py-28 lg:py-36 section-gray overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="mb-20">
          <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[#57C1D8] mb-3 block">
            About Us
          </span>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-bold text-slate-900 tracking-[-0.02em] leading-tight">
            회사소개
          </h2>
        </AnimatedSection>
        <div className="flex gap-20">
          <AnimatedSection className="mb-24">
            <div className="grid grid-cols-2 gap-px bg-slate-200 rounded-2xl overflow-hidden">
              {[
                { val: 2014, suf: "", label: "설립연도", raw: 2014 },
                { val: 30, suf: "+", label: "수행 프로젝트", raw: 30 },
                { val: 3, suf: "종", label: "자체 솔루션", raw: 3 },
                { val: 3, suf: "개", label: "사업 분야", raw: 3 },
              ].map((s) => (
                <div key={s.label} className="bg-white p-8 lg:p-15 text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                    <Counter target={s.raw} suffix={s.suf} />
                  </div>
                  <div className="mt-3 text-[14px] text-slate-400 font-medium tracking-wider uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h3 className="text-lg font-bold text-slate-900 mb-12 tracking-tight">
              연혁
            </h3>
            <div className="relative">
              <div className="absolute top-[6px] sm:top-[6px] left-[65px] sm:left-[85px] top-0 bottom-0 w-px bg-gradient-to-b from-[#57C1D8] via-slate-200 to-slate-100" />
              <div className="space-y-0">
                {HISTORY.map((item, idx) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.04 }}
                    className="flex items-start group"
                  >
                    <div className="w-[60px] sm:w-[80px] shrink-0 text-right pr-6">
                      <span
                        className={`text-[15px] font-bold ${item.hl ? "text-[#57C1D8]" : "text-slate-300"}`}
                      >
                        {item.year}
                      </span>
                    </div>
                    <div className="relative shrink-0 mt-1.5">
                      <div
                        className={`w-3 h-3 rounded-full border-[2.5px] ${item.hl ? "bg-[#57C1D8] border-[#57C1D8]/30" : "bg-white border-slate-300 group-hover:border-[#57C1D8]/40"} transition-colors duration-300`}
                      />
                    </div>
                    <div className="pl-6 pb-10">
                      {item.events.map((ev) => (
                        <p
                          key={ev}
                          className={`text-[14px] leading-relaxed ${item.hl ? "text-slate-800 font-medium" : "text-slate-500"}`}
                        >
                          {ev}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
