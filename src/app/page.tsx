export default function Home() {
  return (
    <main>
      {/* Hero Section - Full Width Image with Overlay */}
      <section className="relative min-h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[#2b4c7e] flex items-center justify-center">
          <span className="text-[#f5e6a3] text-sm">메인 비주얼 이미지</span>
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between py-8 md:py-12 px-8 md:px-24 lg:px-32">
          {/* Top Left - Title */}
          <div className="text-left">
            <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white/80 leading-[0.85] drop-shadow-lg">
              LIVE<br />
              PIXEL<br />
              MARKET
            </p>
            <div className="inline-block mt-4">
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold leading-none text-[#f5e6a3] drop-shadow-lg">
                점집
              </h1>
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f5e6a3] mt-2 drop-shadow-lg text-right">
                JUMPZIP
              </p>
            </div>
          </div>

          {/* Bottom Right - Info */}
          <div className="text-right text-white">
            <div className="space-y-1 mb-6">
              <p className="text-xl md:text-2xl">2025.04 (예정)</p>
              <p className="text-xl md:text-2xl">용산 인근</p>
              <p className="text-xl md:text-2xl">10:00 - 18:00</p>
              <p className="text-xl md:text-2xl">입장료 ₩10,000</p>
            </div>

            <p className="leading-relaxed max-w-md ml-auto text-white/80">
              형형색색의 간판, 오고가는 대화 소리, 울려 퍼지는 멜로디.
              비밀스러운 골목길을 따라 걸으면 펼쳐지는 특별한 시장.
            </p>
          </div>
        </div>
      </section>

      {/* What is Pixel Art */}
      <section className="p-8 md:p-12 flex justify-center">
        <div className="max-w-xl">
          <h2 className="section-title">WHAT IS PIXELART?</h2>
          <p className="section-subtitle">픽셀아트란?</p>

          <div className="content-box">
            <p className="leading-relaxed">
              픽셀아트(도트 그림)는 작은 점(픽셀)을 하나하나 찍어 만드는 디지털 아트입니다.
              비디오 게임 문화와 함께 태어났으며, 하드웨어의 제약 속에서 발전해왔습니다.
              오늘날에는 기술적 제한을 넘어 하나의 예술 장르로 자리잡아,
              일러스트레이션, 애니메이션, 게임, 굿즈 등 다양한 분야에서 활용되고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Hall Map */}
      <section className="p-8 md:p-12 flex justify-center">
        <div className="max-w-md w-full">
          <h2 className="section-title">HALL MAP</h2>
          <p className="section-subtitle">회장 맵</p>

          <div className="content-box">
            <div className="flex gap-4 mb-4">
              <span className="text-[#e63946]">[G] 그림판</span>
              <span className="text-[#2b4c7e]">[N] 놀자판</span>
              <span className="text-green-600">[B] 게시판</span>
            </div>
            <div className="bg-gray-100 border border-gray-200 p-8 text-center text-gray-400">
              전시자 확정 후 공개
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitors */}
      <section className="p-8 md:p-12">
        <h2 className="section-title">EXHIBITORS</h2>
        <p className="section-subtitle">전시자</p>

        {/* Exhibitor Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-full aspect-square bg-white border border-gray-200 mb-2 flex items-center justify-center">
                <span className="text-gray-300 text-xs">IMG</span>
              </div>
              <span className="text-sm text-center truncate w-full">전시자{i + 1}</span>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-[#2b4c7e]">
          2025년 1월 전시자 모집 예정
        </p>
      </section>

      {/* Updates */}
      <section className="p-8 md:p-12">
        <h2 className="section-title">UPDATES</h2>
        <p className="section-subtitle">소식</p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#e63946] text-white px-6 py-3 font-bold hover:opacity-90 transition-opacity"
          >
            X (Twitter)
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 md:p-12 text-center text-[#2b4c7e]">
        <p>© 2025 점집 - Live Pixel Market</p>
      </footer>
    </main>
  );
}
