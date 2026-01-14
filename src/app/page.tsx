export default function Home() {
  return (
    <main>
      {/* Hero Section - 2 Column Layout */}
      <section className="min-h-screen flex flex-col md:flex-row">
        {/* Left: Title & Info */}
        <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#2b4c7e]">
            LIVE<br />
            PIXEL<br />
            MARKET
          </h1>
          <p className="text-[#e63946] font-bold text-2xl mb-4">점집</p>

          <div className="space-y-1 mb-8 text-[#2b4c7e]">
            <p>2025.04 (예정)</p>
            <p>용산 인근</p>
            <p>10:00 - 18:00</p>
            <p>입장료 ₩10,000</p>
          </div>

          <p className="leading-relaxed text-gray-700">
            형형색색의 간판, 오고가는 대화 소리, 울려 퍼지는 멜로디.
            비밀스러운 골목길을 따라 걸으면 펼쳐지는 특별한 시장.
            점과 점이 모여 만들어낸 작은 세계들이 당신을 기다립니다.
          </p>
        </div>

        {/* Right: Hero Image Placeholder */}
        <div className="w-full md:w-2/3 bg-[#2b4c7e] flex items-center justify-center min-h-[400px] md:min-h-0">
          <div className="text-center p-8">
            <div className="w-full max-w-lg aspect-video bg-[#1a3a5c] border-4 border-[#f5e6a3] flex items-center justify-center">
              <span className="text-[#f5e6a3] text-sm">메인 비주얼 이미지</span>
            </div>
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
      <section className="p-8 md:p-12">
        <h2 className="section-title">HALL MAP</h2>
        <p className="section-subtitle">회장 맵</p>

        <div className="content-box">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Map Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-4 gap-1 mb-4">
                {/* Zone Labels */}
                <div className="col-span-4 grid grid-cols-4 gap-1 text-center font-bold mb-2">
                  <span className="text-[#e63946]">G</span>
                  <span className="text-[#2b4c7e]">N</span>
                  <span className="text-green-600">B</span>
                  <span className="text-amber-600">R</span>
                </div>
                {/* Placeholder booth grid */}
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"
                  />
                ))}
              </div>
              <p className="text-gray-500">전시자 확정 후 공개</p>
            </div>

            {/* Zone Legend */}
            <div className="w-full md:w-64 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-[#e63946]"></span>
                <span><strong>[G]</strong> 그림판</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-[#2b4c7e]"></span>
                <span><strong>[N]</strong> 놀자판</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-green-600"></span>
                <span><strong>[B]</strong> 게시판</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-amber-500"></span>
                <span><strong>[R]</strong> 휴식</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Schedule */}
      <section className="p-8 md:p-12">
        <h2 className="section-title">LIVE</h2>
        <p className="section-subtitle">라이브</p>

        <div className="content-box">
          <div className="space-y-4">
            {[
              { time: "11:00", name: "오프닝" },
              { time: "13:00", name: "게스트 토크" },
              { time: "15:00", name: "라이브 드로잉" },
              { time: "17:00", name: "클로징" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 py-2 border-b border-gray-100 last:border-0">
                <span className="font-mono w-20 text-[#2b4c7e] font-bold">{item.time}</span>
                <div className="w-14 h-14 bg-[#2b4c7e]"></div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 mt-4">* 일정은 변경될 수 있습니다</p>
        </div>
      </section>

      {/* Exhibitors */}
      <section className="p-8 md:p-12">
        <h2 className="section-title">EXHIBITORS</h2>
        <p className="section-subtitle">전시자</p>

        {/* Exhibitor Grid */}
        <div className="exhibitor-grid">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-white hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center border border-gray-200"
            >
              <span className="text-gray-300 text-sm">#{String(i + 1).padStart(2, '0')}</span>
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
