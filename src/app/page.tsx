import KakaoMap from "./KakaoMap";

export default function Home() {
  return (
    <main>
      {/* Hero Section - Full Width Image with Overlay */}
      <section className="relative min-h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/DosaGirlLanding.png" alt="메인 비주얼" className="w-full h-full object-cover" />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between py-8 md:py-12 px-8 md:px-24 lg:px-32">
          {/* Top Left - Title */}
          <div className="text-left">
            <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.85] drop-shadow-lg">
              LIVE<br />
              PIXEL<br />
              MARKET
            </p>
            <div className="inline-block mt-4">
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold leading-none text-white drop-shadow-lg">
                점집
              </h1>
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-2 drop-shadow-lg text-right">
                JUMPZIP
              </p>
            </div>
          </div>

          {/* Bottom Right - Info */}
          <div className="text-right text-white">
            <div className="space-y-1 mb-6">
              <p className="text-xl md:text-2xl">2026.04.25 - 26</p>
              <p className="text-xl md:text-2xl">이태원 1289BUNKER</p>
              <p className="text-xl md:text-2xl">10:00 - 18:00</p>
              <p className="text-xl md:text-2xl">입장료 ₩5,000</p>
            </div>

            <p className="leading-relaxed max-w-md ml-auto text-white/80">
              형형색색의 간판<br />
              오고가는 대화 소리<br />
              울려 퍼지는 멜로디<br />
              비밀스러운 골목길을 따라 걸으면<br />
              펼쳐지는 특별한 시장
            </p>
          </div>
        </div>
      </section>

      {/* What is Pixel Art */}
      <section className="p-8 md:p-12 flex justify-center">
        <div className="max-w-3xl w-full flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <h2 className="section-title">WHAT IS PIXELART?</h2>
            <p className="section-subtitle">픽셀아트란?</p>

            <div className="content-box">
              <p className="leading-relaxed">
                픽셀아트는 대상을 최소한의 격자 단위로 표현하는 디지털 아트입니다.
                담아내는 것보다 덜어내는 것이 더 많기에,
                남겨진 빈자리는 보는 사람의 상상력이 채웁니다.
              </p>
              <p className="leading-relaxed mt-4">
                비디오게임의 리소스에서 출발했지만,
                지금은 그 용도를 넘어 독립적인 창작으로 확장되고 있습니다.
              </p>
            </div>
          </div>
          <div className="w-80 flex items-center justify-center flex-shrink-0">
            <img src="/Drawing_169_3.png" alt="점집 캐릭터" className="w-full object-contain" style={{ imageRendering: 'pixelated' }} />
          </div>
        </div>
      </section>

      {/* About JUMPZIP */}
      <section className="p-8 md:p-12 flex justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="section-title">ABOUT JUMPZIP</h2>
          <p className="section-subtitle">점집이란?</p>

          <div className="content-box">
            <p className="leading-relaxed">
              용도가 분명했던 창작물을 전시하려면 어디로 가야 할까요.
              박물관일까요, 미술관일까요.
              점집은 다른 답을 제안합니다. 장터입니다.
            </p>
            <p className="leading-relaxed mt-4">
              점집은 픽셀아트를 전시하는 데서 멈추지 않습니다.
              굿즈로 만들고, 사고, 건네고, 가져갑니다.
              상상력으로 완성되는 창작물이
              다시 그 상상력의 주인인 관객에게 전달될 때,
              작품은 또 한 번 완성됩니다.
            </p>
            <p className="leading-relaxed mt-4">
              그래서 점집은 전시이면서, 동시에 장터입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Hall Map */}
      <section className="p-8 md:p-12 flex justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="section-title">HALL MAP</h2>
          <p className="section-subtitle">회장 맵</p>

          <div className="content-box">
            <img src="/1289BUNKERx3.png" alt="회장 배치도 - B1F, B2F" className="w-full" style={{ imageRendering: 'pixelated' }} />
            <div className="mt-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <p className="text-sm">서울 용산구 이태원로 174 지하 1층</p>
                <a
                  href="https://map.kakao.com/link/map/1289BUNKER,37.53430,126.993181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#2b4c7e] hover:opacity-70 transition-opacity"
                >
                  카카오맵에서 보기 →
                </a>
              </div>
              <KakaoMap />
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
          2026년 2-3월 전시자 모집 중
        </p>
      </section>

      {/* Updates */}
      <section className="p-8 md:p-12 flex justify-center">
        <div className="max-w-3xl w-full flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <h2 className="section-title">UPDATES</h2>
            <p className="section-subtitle">소식</p>

            <div className="flex items-center gap-4">
              <a
                href="https://x.com/JumpZipOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#e63946] text-white px-6 py-3 font-bold hover:opacity-90 transition-opacity"
              >
                X (Twitter)
              </a>
            </div>
          </div>
          <div className="w-40 h-40 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
            <span className="text-gray-300 text-sm">IMG</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 md:p-12 text-center text-[#2b4c7e]">
        <p>© 2026 점집 - Live Pixel Market</p>
      </footer>
    </main>
  );
}
