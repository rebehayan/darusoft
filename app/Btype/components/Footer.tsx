const NAV_LINKS = [
  { label: "사업분야", href: "#business" },
  { label: "솔루션", href: "#solutions" },
  { label: "포트폴리오", href: "#portfolio" },
  { label: "회사소개", href: "#company" },
  { label: "문의하기", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/logo2.svg"
                alt="Darusoft"
                className="h-10 w-auto brightness-0 invert opacity-90"
              />
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-slate-500">
              공공·기관과 의료 분야의 디지털 인프라를 구축하고,
              <br />
              RPA·AI 기반 혁신으로 더 나은 업무 환경을 만듭니다.
            </p>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider mb-5">
              바로가기
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-slate-500 hover:text-[#57C1D8] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider mb-5">
              연락처
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <a
                  href="mailto:CONTACT@darusoft.co.kr"
                  className="text-slate-500 hover:text-[#57C1D8] transition-colors duration-300"
                >
                  CONTACT@darusoft.co.kr
                </a>
              </li>
              <li className="text-slate-500">서울특별시</li>
            </ul>
          </div>
        </div>
        <div className="py-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          <p className="text-[12px] text-slate-600 text-center sm:text-left">
            &copy; {new Date().getFullYear()} 다루소프트. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[12px] text-slate-600">
            <span className="hover:text-slate-400 transition-colors cursor-pointer whitespace-nowrap">
              개인정보처리방침
            </span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer whitespace-nowrap">
              이메일주소 무단 수집 거부
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
