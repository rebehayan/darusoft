"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="overflow-hidden  bg-stone-100">
      {/* CTA Band with BG image */}
      <div className="relative py-20 lg:py-24">
        <Image
          src="/visual1.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#57C1D8]/90 to-[#77B263]/85" />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-[-0.02em]">
              프로젝트를 함께 시작하세요
            </h2>
            <p className="mt-4 text-[17px] text-white/70 font-light mx-auto">
              자세한 문의사항 및 자료요청은 아래 양식을 이용해주세요. 빠른 시간
              내에 답변 드리겠습니다.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Form */}
      <div className="py-20 lg:py-28 section-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection>
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#77B263]/10 text-[#77B263] flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  문의가 접수되었습니다
                </h3>
                <p className="mt-3 text-slate-500">
                  빠른 시간 내에 답변 드리겠습니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-2">
                      이름 / 담당자명 *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-0 py-3 border-0 border-b-2 border-slate-200 bg-transparent text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-[#57C1D8] transition-colors duration-300"
                      placeholder="홍길동"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-0 py-3 border-0 border-b-2 border-slate-200 bg-transparent text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-[#57C1D8] transition-colors duration-300"
                      placeholder="example@company.com"
                    />
                  </div>
                </div>
                {/*
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-2">
                      소속 / 기관명
                    </label>
                    <input
                      type="text"
                      className="w-full px-0 py-3 border-0 border-b-2 border-slate-200 bg-transparent text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-[#57C1D8] transition-colors duration-300"
                      placeholder="다루소프트"
                    />
                  </div>
                   <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-2">
                      연락처
                    </label>
                    <input
                      type="tel"
                      className="w-full px-0 py-3 border-0 border-b-2 border-slate-200 bg-transparent text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-[#57C1D8] transition-colors duration-300"
                      placeholder="010-0000-0000"
                    />
                  </div> 
                </div>*/}
                <div>
                  <label className="block text-[13px] font-semibold text-slate-700 mb-2">
                    문의 내용 *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-0 py-3 border-0 border-b-2 border-slate-200 bg-transparent text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-[#57C1D8] transition-colors duration-300 resize-none"
                    placeholder="문의하실 내용을 입력해주세요."
                  />
                </div>
                <div className="flex items-start gap-2.5 pt-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#57C1D8] focus:ring-[#57C1D8]"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-[13px] text-slate-500"
                  >
                    개인정보 수집 및 이용에 동의합니다.
                  </label>
                </div>
                <div className="text-center sm:flex-row items-center gap-4 pt-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-[#57C1D8] to-[#77B263] text-white rounded-full font-semibold text-[15px] hover:opacity-90 transition-all duration-300"
                  >
                    문의 접수하기
                  </button>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
