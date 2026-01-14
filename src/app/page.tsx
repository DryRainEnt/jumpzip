export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black pt-16">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(250, 204, 21, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(250, 204, 21, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="pixel-text text-6xl md:text-8xl font-bold text-yellow-400 mb-4 pixel-blink">
            점집
          </h1>
          <p className="pixel-text text-xl md:text-2xl text-white mb-2">
            Live Pixel Market
          </p>
          <p className="text-gray-400 text-lg mb-8">
            한국 픽셀아트 마켓
          </p>

          <div className="pixel-box p-6 max-w-md mx-auto mb-8">
            <p className="text-yellow-400 pixel-text text-lg mb-2">2025년 개최 예정</p>
            <p className="text-gray-300">용산 인근 | 오전 10시 - 오후 6시</p>
          </div>

          <a
            href="#about"
            className="inline-block px-8 py-3 bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-colors"
          >
            자세히 보기
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="pixel-text text-3xl md:text-4xl text-yellow-400 text-center mb-12">
            핵심 가치
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="pixel-box p-6 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-yellow-400 font-bold mb-2">확장성</h3>
              <p className="text-gray-300 text-sm">
                한국 픽셀아트의 확장성과 자생력 강화를 위해 노력합니다.
              </p>
            </div>

            <div className="pixel-box p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-yellow-400 font-bold mb-2">수익화</h3>
              <p className="text-gray-300 text-sm">
                아티스트들에게 픽셀아트를 통한 수익화 경험을 제공합니다.
              </p>
            </div>

            <div className="pixel-box p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-yellow-400 font-bold mb-2">친숙함</h3>
              <p className="text-gray-300 text-sm">
                일반 소비자들에게 픽셀아트를 친숙하게 받아들이도록 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zones Section */}
      <section id="zones" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="pixel-text text-3xl md:text-4xl text-yellow-400 text-center mb-4">
            구획 안내
          </h2>
          <p className="text-gray-400 text-center mb-12">
            전시장은 세 가지 테마로 나뉩니다
          </p>

          <div className="space-y-6">
            {/* 그림판 */}
            <div className="border-4 border-pink-500 bg-black/50 p-6 hover:bg-pink-500/10 transition-colors">
              <div className="flex items-start gap-4">
                <span className="pixel-text text-4xl text-pink-500">[그림판]</span>
                <div>
                  <h3 className="text-pink-400 font-bold text-xl mb-2">순수 아트 & 굿즈</h3>
                  <p className="text-gray-300">
                    픽셀 일러스트레이션, 아트 프린트, 스티커, 키링 등
                    순수 아트 창작 및 굿즈 판매가 메인인 부스들의 구획입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 놀자판 */}
            <div className="border-4 border-blue-500 bg-black/50 p-6 hover:bg-blue-500/10 transition-colors">
              <div className="flex items-start gap-4">
                <span className="pixel-text text-4xl text-blue-500">[놀자판]</span>
                <div>
                  <h3 className="text-blue-400 font-bold text-xl mb-2">도트게임 데모</h3>
                  <p className="text-gray-300">
                    인디 도트게임 데모를 직접 플레이할 수 있는 부스들의 구획입니다.
                    개발자와 직접 소통하며 게임을 체험해보세요.
                  </p>
                </div>
              </div>
            </div>

            {/* 게시판 */}
            <div className="border-4 border-green-500 bg-black/50 p-6 hover:bg-green-500/10 transition-colors">
              <div className="flex items-start gap-4">
                <span className="pixel-text text-4xl text-green-500">[게시판]</span>
                <div>
                  <h3 className="text-green-400 font-bold text-xl mb-2">도서 & 휴식</h3>
                  <p className="text-gray-300">
                    픽셀아트 관련 도서, 음반, 기업 부스 및 쉼터가 있는 구획입니다.
                    잠시 쉬어가며 다양한 콘텐츠를 만나보세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="pixel-text text-3xl md:text-4xl text-yellow-400 text-center mb-12">
            참가 안내
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 전시자 */}
            <div className="pixel-box p-6">
              <h3 className="pixel-text text-2xl text-yellow-400 mb-4">전시자</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">▶</span>
                  <span>개최 3개월 전부터 1개월간 모집</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">▶</span>
                  <span>참가비 무료 또는 소정의 비용</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">▶</span>
                  <span>판매 수익은 전적으로 전시자에게</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">▶</span>
                  <span>굿즈 제작 견적 및 디자인 지원</span>
                </li>
              </ul>
            </div>

            {/* 참관자 */}
            <div className="pixel-box p-6">
              <h3 className="pixel-text text-2xl text-yellow-400 mb-4">참관자</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">▶</span>
                  <span>입장료: 10,000원</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">▶</span>
                  <span>텀블벅 얼리버드 티켓 또는 현장구매</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">▶</span>
                  <span>후원 굿즈: 스티커, 토트백, 티셔츠 등</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">▶</span>
                  <span>현장에서 다양한 픽셀아트 체험</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-center">
        <div className="pixel-box max-w-2xl mx-auto p-8">
          <h2 className="pixel-text text-2xl text-yellow-400 mb-4">
            소식을 받아보세요
          </h2>
          <p className="text-gray-400 mb-6">
            전시자 모집, 티켓 오픈 등 점집의 소식을 가장 먼저 받아보세요.
          </p>
          <p className="text-gray-500 text-sm">
            (SNS 연동 예정)
          </p>
        </div>
      </section>
    </main>
  );
}
