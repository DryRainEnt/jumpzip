export default function Home() {
  return (
    <main>
      {/* Hero Section - 2 Column Layout */}
      <section className="min-h-screen flex flex-col md:flex-row">
        {/* Left: Title & Info */}
        <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            LIVE<br />
            PIXEL<br />
            MARKET
          </h1>
          <p className="text-yellow-400 font-bold mb-4">점집</p>

          <div className="text-sm space-y-1 mb-8">
            <p>2025.04 (예정)</p>
            <p>용산 인근</p>
            <p>10:00 - 18:00</p>
            <p>입장료 ₩10,000</p>
          </div>

          <p className="text-sm leading-relaxed opacity-90">
            형형색색의 간판, 오고가는 대화 소리, 울려 퍼지는 멜로디.
            비밀스러운 골목길을 따라 걸으면 펼쳐지는 특별한 시장.
            점과 점이 모여 만들어낸 작은 세계들이 당신을 기다립니다.
          </p>
        </div>

        {/* Right: Hero Image Placeholder */}
        <div className="w-full md:w-2/3 bg-[#1a1a8a] flex items-center justify-center min-h-[400px] md:min-h-0">
          <div className="text-center p-8">
            <div className="w-full max-w-lg aspect-video bg-[#2a2a9a] border-4 border-yellow-400 flex items-center justify-center">
              <span className="text-yellow-400 text-sm">메인 비주얼 이미지</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is Pixel Art */}
      <section className="p-8 md:p-12">
        <h2 className="section-title">WHAT IS PIXELART?</h2>
        <p className="section-subtitle">픽셀아트란?</p>

        <div className="content-box flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="text-sm leading-relaxed">
              픽셀아트(도트 그림)는 작은 점(픽셀)을 하나하나 찍어 만드는 디지털 아트입니다.
              비디오 게임 문화와 함께 태어났으며, 하드웨어의 제약 속에서 발전해왔습니다.
              오늘날에는 기술적 제한을 넘어 하나의 예술 장르로 자리잡아,
              일러스트레이션, 애니메이션, 게임, 굿즈 등 다양한 분야에서 활용되고 있습니다.
            </p>
          </div>
          <div className="w-full md:w-48 h-48 bg-gray-200 flex items-center justify-center flex-shrink-0">
            <span className="text-gray-400 text-xs">이미지</span>
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
                <div className="col-span-4 grid grid-cols-4 gap-1 text-center text-xs font-bold mb-2">
                  <span className="text-pink-500">G</span>
                  <span className="text-blue-500">N</span>
                  <span className="text-green-500">B</span>
                  <span className="text-yellow-600">R</span>
                </div>
                {/* Placeholder booth grid */}
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer"
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500">전시자 확정 후 공개</p>
            </div>

            {/* Zone Legend */}
            <div className="w-full md:w-48 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-pink-500"></span>
                <span><strong>[G]</strong> 그림판</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-blue-500"></span>
                <span><strong>[N]</strong> 놀자판</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-green-500"></span>
                <span><strong>[B]</strong> 게시판</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-yellow-500"></span>
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
                <span className="text-sm font-mono w-16">{item.time}</span>
                <div className="w-12 h-12 bg-gray-200"></div>
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">* 일정은 변경될 수 있습니다</p>
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
              className="aspect-square bg-white hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center"
            >
              <span className="text-gray-300 text-xs">#{String(i + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8 opacity-70">
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
            className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 text-sm font-bold hover:bg-red-600 transition-colors"
          >
            X (Twitter)
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 md:p-12 text-center text-sm opacity-70">
        <p>© 2025 점집 - Live Pixel Market</p>
      </footer>
    </main>
  );
}
