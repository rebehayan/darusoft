"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ConceptSelector() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 selection:bg-[#57C1D8] selection:text-black">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#57C1D8]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#77B263]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#57C1D8] to-[#77B263] flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-2xl font-bold tracking-tighter">DARUSOFT</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
          >
            Design Concept Selection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-500 text-lg font-medium"
          >
            다루소프트의 가치를 담은 두 가지 시안을 확인해보세요.
          </motion.p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Concept A Card */}
          <Link href="/Atype">
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group relative bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 cursor-pointer overflow-hidden aspect-[4/5] flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="relative z-10">
                <span className="text-[10px] font-black tracking-[.3em] uppercase text-[#57C1D8] mb-4 block">Concept 01</span>
                <h2 className="text-3xl font-bold mb-4 tracking-tight">A. Classic Editorial</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  전문적이고 신뢰감 있는 분위기의 클래식한 스타일.<br />
                  안정적인 인프라 전문가의 면모를 강조합니다.
                </p>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Concept B Card */}
          <Link href="/Btype">
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="group relative bg-[#121212] border border-white/10 rounded-[2.5rem] p-10 cursor-pointer overflow-hidden aspect-[4/5] flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#57C1D8]/10 to-[#77B263]/10 opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] opacity-80" />
              <div className="relative z-10">
                <span className="text-[10px] font-black tracking-[.3em] uppercase text-[#77B263] mb-4 block">Concept 02</span>
                <h2 className="text-3xl font-bold mb-4 tracking-tight">B. Modern Immersive</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  가장 트렌디하고 가동성이 뛰어난 인터랙티브 스타일.<br />
                  혁신적인 기술력과 미래 지향적 비전을 경험하세요.
                </p>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#57C1D8] to-[#77B263] flex items-center justify-center text-white scale-125 group-hover:scale-150 transition-transform">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>

        <footer className="mt-20 text-center">
          <p className="text-[9px] font-bold tracking-[.8em] text-gray-600 uppercase">
            © 2026 DARUSOFT RE-DEFINING INFRASTRUCTURE.
          </p>
        </footer>
      </div>
    </div>
  );
}
