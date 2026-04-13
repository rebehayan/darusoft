"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "사업분야", href: "#business" },
  { label: "솔루션", href: "#solutions" },
  { label: "포트폴리오", href: "#portfolio" },
  { label: "회사소개", href: "#company" },
  { label: "문의하기", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-[80px]">
          <a href="#hero" className="flex items-center gap-2.5 shrink-0">
            <div className="relative h-8 md:h-10 w-auto">
              <img
                src="/logo1.svg"
                alt="Darusoft Logo"
                className="h-auto w-[160px] md:w-[200px] object-contain"
              />
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-7 py-2 rounded-lg text-[22px] font-medium transition-all duration-300 text-slate-900 hover:text-[#57C1D8] hover:bg-[#57C1D8]/5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-[16px] font-semibold tracking-wide transition-all duration-300 bg-gradient-to-r from-[#0032a5] to-[#0032a5] text-white hover:opacity-90 shadow-sm shadow-[#57C1D8]/20"
          >
            상담 문의
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 transition-colors text-slate-900"
            aria-label="메뉴"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-xl border-t border-slate-100/50 ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="max-w-7xl mx-auto px-6 py-5 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3.5 text-slate-700 hover:text-[#57C1D8] hover:bg-[#57C1D8]/5 rounded-xl text-[18px] font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 px-4">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-4 rounded-xl bg-[#0032a5] text-white font-bold text-[16px] shadow-lg shadow-[#0032a5]/20"
              >
                상담 문의하기
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
