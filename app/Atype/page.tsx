import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] font-sans text-[#121212] selection:bg-primary selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-[100] bg-[#F8F8F8]/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Darusoft Logo" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <nav className="hidden lg:flex space-x-10 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">
              <a href="#business" className="hover:text-primary transition-colors">01 Field</a>
              <a href="#solution" className="hover:text-secondary transition-colors">02 Solution</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">03 Project</a>
              <a href="#history" className="hover:text-secondary transition-colors">04 Vision</a>
            </nav>
            <button className="px-6 py-2.5 bg-[#121212] text-white rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-primary transition-all shadow-lg">
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img 
            src="/hero-tech.png" 
            alt="Infrastructure"
            className="w-full h-full object-cover grayscale-[0.2] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-white" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-10 h-px bg-primary" />
              <span className="text-[10px] font-black tracking-[.4em] uppercase text-primary">Establishing Digital Trust</span>
            </div>
            <h1 className="text-5xl md:text-[6.8rem] font-black leading-[0.9] tracking-tighter mb-12">
              Engineering <br />
              <span className="text-gradient">Integrity</span>.
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-gray-500 leading-relaxed font-bold mb-16">
              공공 · 기관과 의료 분야의 디지털 인프라를 혁신하고,<br />
              RPA · AI 기반의 차세대 시스템 경험을 구축합니다.
            </p>
            {/* Metrics Aligned with Main Copy */}
            <div className="flex space-x-12 md:space-x-24">
              <div className="border-l-2 border-gray-100 pl-8">
                <span className="text-5xl md:text-6xl font-black block mb-2 text-[#121212] tracking-tighter">98.6%</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Satisfaction Rate</span>
              </div>
              <div className="border-l-2 border-gray-100 pl-8">
                <span className="text-5xl md:text-6xl font-black block mb-2 text-primary tracking-tighter">12+</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Years Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 Business Field */}
      <section id="business" className="py-32 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10 border-l-4 border-primary pl-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase whitespace-nowrap">
              // 01 <span className="text-primary">Fields</span>
            </h2>
            <div className="max-w-2xl">
              <p className="text-lg md:text-xl font-bold text-gray-400 leading-snug">
                전문화된 부문의 디지털 인프라 역량을 바탕으로 <br />
                기관별 맞춤형 변혁 가치를 제공합니다.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Public / Gov", kr: "공공 · 행정", desc: "정부 부처 및 공공기관의 대규모 SI/SM 프로젝트 수행 및 통합 운영 안정화" },
              { title: "Medical Tech", kr: "의료 정보 시스템", desc: "맞춤형 데이터 통합 및 지능형 의료 클라우드 연동 인프라 설계 및 구축" },
              { title: "AI / Automation", kr: "지능형 자동화", desc: "업무 생산성 혁신을 위한 AI 기반 자동화(RPA) 컨설팅 및 서비스 구현" }
            ].map((biz, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group overflow-hidden border border-gray-50 h-full">
                <div className="flex justify-between items-start mb-8">
                   <span className="text-[10px] font-black tracking-widest text-primary uppercase">Field 0{idx + 1}</span>
                   <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                </div>
                <h3 className="text-3xl font-black mb-2 tracking-tighter uppercase whitespace-nowrap">{biz.title}</h3>
                <h4 className="text-[10px] font-black tracking-[.2em] uppercase text-gray-300 mb-8">{biz.kr}</h4>
                <p className="text-gray-500 font-bold leading-[1.6] text-sm md:text-base">
                  {biz.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 Solutions (Split Layout) */}
      <section id="solution" className="relative min-h-[60vh] flex items-center bg-[#121212] overflow-hidden">
        {/* Split Background Image Section */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full order-last">
           <img 
            src="/solutions-tech.png" 
            alt="Solutions Tech"
            className="w-full h-full object-cover grayscale opacity-50 lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#121212]/30 via-transparent to-transparent hidden lg:block" />
        </div>
        
        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full h-full py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 h-full items-center">
            <div className="max-w-xl text-white">
              <div className="inline-block px-4 py-1.5 mb-8 border border-secondary/30 text-secondary text-[10px] font-black tracking-widest uppercase rounded-full">
                Core Assets
              </div>
              <h2 className="text-4xl md:text-[4.5rem] font-black tracking-tighter uppercase mb-6 leading-none">
                // 02 <br />
                <span className="text-secondary lowercase">Solutions</span>
              </h2>
              <p className="text-gray-400 font-bold text-base md:text-lg leading-relaxed mb-12 max-w-md">
                핵심 기술력을 담은 독자 솔루션으로 <br />
                디지털 환경의 완성도를 높입니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {[
                  { name: "DARU-CMS", desc: "통합 배포 시스템" },
                  { name: "DARU-WA", desc: "웹 접근성 진단 엔진" },
                  { name: "DARU-AI Agent", desc: "RPA 결합 챗봇" }
                ].map((sol, i) => (
                  <div key={i} className="group border-l border-white/10 pl-5 hover:border-secondary transition-all">
                    <h3 className="text-xl font-black tracking-tighter group-hover:text-secondary transition-colors uppercase whitespace-nowrap">{sol.name}</h3>
                    <p className="text-xs text-gray-500 font-bold mt-1 whitespace-nowrap">{sol.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Projects (Portfolio) */}
      <section id="portfolio" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
              // 03 <span className="text-primary">Portfolio</span>
            </h2>
            <div className="w-12 h-1.5 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "/medical-sys.png", cat: "Medical", title: "대한임상병리사협회 정보관리 유지보수", client: "Public / Medical" },
              { img: "/gov-sys.png", cat: "Government", title: "가평군시설관리공단 통합 홈페이지 구축", client: "Public / Portal" },
              { img: "/edu-sys.png", cat: "Education", title: "명지전문대학 대학시스템 개선 및 유지관리", client: "Edu / Platform" }
            ].map((port, idx) => (
              <div key={idx} className="group bg-[#F8F8F8] rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all flex flex-col h-full border border-gray-50">
                <div className="h-56 overflow-hidden grayscale group-hover:grayscale-0 transition-transform duration-700">
                  <img src={port.img} alt={port.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="p-12 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] font-black tracking-[.2em] text-primary mb-3 block uppercase">{port.cat} System</span>
                    <h3 className="text-xl md:text-[1.4rem] font-black leading-snug tracking-tighter mb-6 group-hover:text-primary transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                      {port.title}
                    </h3>
                  </div>
                  <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{port.client}</span>
                    <svg className="w-4 h-4 text-gray-200 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 History (Vertical Timeline) */}
      <section id="history" className="py-32 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-20 text-center leading-none">
              // 04 <br />
              <span className="text-secondary">History</span>
            </h2>
          <div className="relative w-full max-w-5xl mx-auto px-6">
            <div className="absolute left-6 md:left-1/2 md:-ml-px top-0 w-px h-full bg-gray-200" />
            
            <div className="space-y-16 relative">
              {[
                { era: "Innovation", yr: "2024 - 2026", txt: "전자정부 프레임워크 호환성 및 GS인증 획득, CMMI 신규 레벨 인증 추진", color: "text-secondary" },
                { era: "Expansion", yr: "2018 - 2021", txt: "공공 SI 부문 진출 및 RPA 혁신 컨설팅 개시, 교육 콘텐츠 기술 파트너십 구축", color: "text-primary" },
                { era: "Foundation", yr: "2014", txt: "다루소프트 주식회사 설립 및 기술 기반 구축", color: "text-gray-400" }
              ].map((his, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                  <div className={`hidden md:block w-1/2 ${idx % 2 === 0 ? "text-right pr-16" : "order-2 pl-16"}`}>
                    <span className={`text-[10px] font-black tracking-widest uppercase ${his.color} opacity-60 mb-2 block`}>{his.era} Stage</span>
                    <span className="text-5xl font-black block tracking-tighter whitespace-nowrap">{his.yr}</span>
                  </div>
                  <div className="absolute left-0 md:left-1/2 md:-ml-[0.5rem] w-4 h-4 rounded-full bg-white border-4 border-[#121212] z-10" />
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? "md:order-2 md:pl-16" : "md:text-right md:pr-16"}`}>
                    <div className="md:hidden mb-4">
                       <span className={`text-[9px] font-black tracking-widest uppercase ${his.color} mb-1 block`}>{his.era}</span>
                       <span className="text-4xl font-black block tracking-tighter">{his.yr}</span>
                    </div>
                    <p className="text-gray-600 font-bold leading-relaxed text-sm lg:text-base border-l-2 md:border-l-0 md:border-transparent pl-4 md:pl-0">
                      {his.txt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Navigator */}
      <div className="fixed bottom-12 right-12 z-[100]">
        <button className="w-20 h-20 bg-[#121212] text-white rounded-full flex items-center justify-center shadow-3xl hover:bg-primary transition-all group active:scale-90">
             <svg className="w-8 h-8 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
        </button>
      </div>

      {/* Footer */}
      <footer className="pt-24 pb-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
            <div className="lg:col-span-4">
              <img src="/logo.png" alt="Darusoft" className="h-10 w-auto mb-8 bg-transparent" />
              <p className="text-gray-400 font-bold text-xs md:text-sm leading-relaxed max-w-sm mb-10">
                다루소프트는 끊임없는 기술 혁신을 통해 공공 및 의료 분야의 디지털 아이덴티티를 재정의하는 인프라 전문가 그룹입니다.
              </p>
              <div className="flex space-x-8 text-[11px] font-black tracking-widest uppercase text-[#121212]">
                <a href="#" className="hover:text-primary underline underline-offset-4 decoration-1 decoration-gray-200">Instagram</a>
                <a href="#" className="hover:text-primary underline underline-offset-4 decoration-1 decoration-gray-200">Facebook</a>
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12 border-t md:border-t-0 pt-12 md:pt-0">
              <div>
                <span className="text-[10px] font-black tracking-widest text-primary mb-6 block uppercase whitespace-nowrap">Contact Us</span>
                <p className="text-gray-500 text-[11px] font-bold leading-loose whitespace-nowrap">
                  T. 02.123.4567<br />
                  F. 02.123.4568<br />
                  M. contact@darusoft.co.kr
                </p>
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest text-secondary mb-6 block uppercase whitespace-nowrap">Location</span>
                <p className="text-gray-500 text-[11px] font-bold leading-loose whitespace-nowrap">
                  서울특별시 금천구 가산디지털1로 1<br />
                  더스타밸리 1234호<br />
                  다루소프트 주식회사
                </p>
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest text-gray-400 mb-6 block uppercase whitespace-nowrap">Corporate</span>
                <p className="text-gray-500 text-[11px] font-bold leading-loose whitespace-nowrap">
                  사업자등록번호: 123-45-67890<br />
                  통신판매업: 제2026-서울가산-0000호<br />
                  대표이사: 홍길동
                </p>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-100 text-center">
            <p className="text-gray-200 text-[9px] font-black tracking-[1em] uppercase whitespace-nowrap">© 2026 DARUSOFT RE-DEFINING INFRASTRUCTURE.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
