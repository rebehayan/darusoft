"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const PROJECTS = [
  { id: 1, name: "대한임상병리사협회", scope: "홈페이지 유지관리", desc: "보수교육 및 출결시스템 기반 운영관리", tag: "운영", img: "/medical-sys.png" },
  { id: 2, name: "한국생명존중희망재단", scope: "통합 홈페이지", desc: "홈페이지 기능 개발 및 운영관리", tag: "개발", img: "/gov-sys.png" },
  { id: 3, name: "가평군시설관리공단", scope: "홈페이지 구축", desc: "홈페이지 신규 구축 및 운영관리", tag: "구축", img: "/gov-sys.png" },
  { id: 4, name: "한국문화관광연구원", scope: "대표 누리집", desc: "기능개선 및 운영관리", tag: "개선", img: "/gov-sys.png" },
  { id: 5, name: "고위공직자범죄수사처", scope: "대표홈페이지 구축", desc: "국문/영문 홈페이지 구축 및 운영", tag: "구축", img: "/gov-sys.png" },
  { id: 6, name: "명지전문대학", scope: "홈페이지 유지관리", desc: "홈페이지 운영관리", tag: "운영", img: "/edu-sys.png" },
  { id: 7, name: "금융규제민원포털", scope: "대표홈페이지 구축", desc: "홈페이지 구축 및 운영관리", tag: "구축", img: "/gov-sys.png" },
  { id: 8, name: "한국노인인력개발원", scope: "대표 홈페이지", desc: "대표 홈페이지 운영관리", tag: "운영", img: "/gov-sys.png" },
  { id: 9, name: "K-오션MOOC", scope: "홈페이지 구축", desc: "한국형 온라인 해양공개강좌 구축 및 운영", tag: "구축", img: "/edu-sys.png" },
];

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="portfolio" className="py-28 lg:py-36 section-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-[#57C1D8] mb-3 block">Portfolio</span>
            <h2 className="text-[2rem] sm:text-[2.5rem] font-bold text-slate-900 tracking-[-0.02em] leading-tight">포트폴리오</h2>
          </div>
          <p className="text-[16px] text-slate-500 font-light max-w-md lg:text-right">공공기관과 기업을 위한 다양한 프로젝트를 수행해왔습니다</p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* List Area */}
          <AnimatedSection className="flex-1">
            <div className="border-t-2 border-slate-900">
              {PROJECTS.map((p, idx) => (
                <motion.div 
                  key={p.id} 
                  initial={{ opacity: 0, x: -20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  onMouseEnter={() => setHoveredProject(p)}
                >
                  <div className="group grid grid-cols-12 items-center gap-4 py-6 border-b border-slate-100 hover:bg-[#57C1D8]/[0.03] transition-colors duration-300 cursor-default px-2 -mx-2 rounded-lg">
                    <div className="col-span-1 text-[13px] font-bold text-slate-300 group-hover:text-[#57C1D8] transition-colors duration-300">{String(p.id).padStart(2, "0")}</div>
                    <div className="col-span-5 sm:col-span-4"><span className="text-[15px] font-semibold text-slate-800 group-hover:text-[#3EA8BF] transition-colors duration-300">{p.name}</span></div>
                    <div className="col-span-6 sm:col-span-5 hidden sm:block"><span className="text-[13px] text-slate-500">{p.scope}</span></div>
                    <div className="col-span-6 sm:col-span-2 text-right"><span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 group-hover:text-[#77B263] transition-colors duration-300">{p.tag}</span></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Preview Area (Sticky) */}
          <div className="hidden lg:block w-[400px] h-[500px] sticky top-[120px]">
            <div className="relative w-full h-full rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredProject?.id || 'placeholder'}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  {hoveredProject ? (
                    <>
                      <img src={hoveredProject.img} alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8 text-white">
                         <span className="text-[10px] font-bold tracking-widest uppercase opacity-70 mb-2 block">{hoveredProject.tag} Project</span>
                         <h4 className="text-xl font-bold">{hoveredProject.name}</h4>
                         <p className="mt-2 text-sm text-white/60 leading-relaxed">{hoveredProject.desc}</p>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-slate-300">
                      <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      <p className="text-sm font-medium tracking-widest uppercase opacity-40">Hover to preview</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
