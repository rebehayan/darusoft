"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let s = 0;
          const d = 1800;
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

const METRICS = [
  { value: 12, suffix: "년+", label: "업력" },
  { value: 30, suffix: "+", label: "프로젝트" },
  { value: 3, suffix: "종", label: "자체 솔루션" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <Image
        src="/visual3.png"
        alt=""
        fill
        priority
        className="object-cover scale-110"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black0" />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 pt-[80px]">
        <div className="py-20 lg:py-28 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16">
          <div className="lg:max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-[13px] font-semibold tracking-[0.2em] uppercase text-[#77B263] mb-6"
            >
              Digital Innovation Partner
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] font-bold text-gray-800 leading-[1.1] tracking-[-0.03em]"
            >
              신뢰를 설계하고,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#57C1D8] to-[#77B263]">
                혁신을 연결합니다
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-7 max-w-lg text-[16px] sm:text-[17px] text-gray-600 leading-[1.8] font-light"
            >
              공공·기관과 의료 분야의 디지털 인프라를 구축하고,
              <br className="hidden sm:block" />
              RPA·AI 기반 혁신으로 더 나은 업무 환경을 만듭니다.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#business"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-[14px] tracking-wide hover:bg-gray-50 transition-all duration-300"
              >
                서비스 알아보기
                <span className="w-5 h-5 rounded-full bg-gradient-to-r from-[#57C1D8] to-[#77B263] text-white flex items-center justify-center">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white rounded-full bg-gray-800 font-medium text-[14px] tracking-wide hover:bg-gray-700 transition-all duration-300"
              >
                문의하기
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="flex gap-8 lg:gap-12 lg:pb-2"
          >
            {METRICS.map((m, i) => (
              <div key={i} className="text-center lg:text-right">
                <div className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
                  <Counter target={m.value} suffix={m.suffix} />
                </div>
                <div className="mt-1 text-[16px] text-gray-500 font-medium tracking-wider uppercase">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="hidden">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="relative z-10 mt-auto"
        >
          <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
              {[
                {
                  num: "01",
                  title: "공공/기관 웹 고도화",
                  desc: "웹 사이트 구축·리뉴얼, 시스템 통합, 웹 접근성 진단",
                },
                {
                  num: "02",
                  title: "클라우드 & 솔루션",
                  desc: "안전한 클라우드 기반 구축, 검증된 솔루션 유통",
                },
                {
                  num: "03",
                  title: "AI · RPA 혁신",
                  desc: "AI 서비스 도입, RPA 업무 자동화, 디지털 전환",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`group py-7 px-1 flex items-start gap-5 ${i < 2 ? "md:border-r border-white/10" : ""} ${i > 0 ? "border-t md:border-t-0 border-white/10 md:pl-8" : ""}`}
                >
                  <span className="text-[11px] font-bold text-[#57C1D8]/30 tracking-widest mt-1">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white group-hover:text-[#57C1D8] transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] text-white/35 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}
