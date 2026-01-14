export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          점집
        </h1>
        <p className="text-xl text-gray-500 mb-8">
          Live Pixel Market
        </p>

        <div className="text-sm text-gray-600 space-y-1">
          <p>2025년 4월 개최 예정</p>
          <p>용산 인근 | 10:00 - 18:00</p>
          <p>입장료 10,000원</p>
        </div>
      </header>

      <hr className="section-divider" />

      {/* Introduction */}
      <section className="mb-12">
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          형형색색의 간판, 오고가는 대화 소리, 울려 퍼지는 멜로디.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          비밀스러운 골목길을 따라 걸으면 펼쳐지는 특별한 시장.
          <br />
          점과 점이 모여 만들어낸 작은 세계들이 당신을 기다립니다.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          약 <strong>30팀</strong>의 픽셀 아티스트와 게임 개발자들이
          한자리에 모이는 한국 최초의 픽셀아트 마켓, <strong>점집</strong>에 오신 것을 환영합니다.
        </p>
      </section>

      <hr className="section-divider" />

      {/* What is Pixel Art */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">픽셀아트란?</h2>
        <p className="text-gray-700 leading-relaxed">
          픽셀아트(도트 그림)는 작은 점(픽셀)을 하나하나 찍어 만드는 디지털 아트입니다.
          비디오 게임 문화와 함께 태어났으며, 하드웨어의 제약 속에서 발전해왔습니다.
          오늘날에는 기술적 제한을 넘어 하나의 예술 장르로 자리잡아,
          일러스트레이션, 애니메이션, 게임, 굿즈 등 다양한 분야에서 활용되고 있습니다.
        </p>
      </section>

      <hr className="section-divider" />

      {/* Zones */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">구획 안내</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-2">
              <span className="text-pink-500">[그림판]</span> 순수 아트 & 굿즈
            </h3>
            <p className="text-gray-600">
              픽셀 일러스트레이션, 아트 프린트, 스티커, 아크릴 굿즈 등
              순수 아트 창작 및 굿즈 판매가 메인인 부스들의 구획입니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">
              <span className="text-blue-500">[놀자판]</span> 인디게임 데모
            </h3>
            <p className="text-gray-600">
              인디 도트게임 데모를 직접 플레이할 수 있는 부스들의 구획입니다.
              개발자와 직접 소통하며 게임을 체험해보세요.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">
              <span className="text-green-500">[게시판]</span> 도서 & 휴식
            </h3>
            <p className="text-gray-600">
              픽셀아트 관련 도서, 음반, 기업 부스 및 쉼터가 있는 구획입니다.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Hall Map Placeholder */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">회장 맵</h2>
        <div className="bg-gray-100 border border-gray-200 rounded p-12 text-center text-gray-400">
          <p>전시자 확정 후 공개 예정</p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Exhibitors Placeholder */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">전시자</h2>
        <p className="text-gray-500 mb-8">
          2025년 1월부터 전시자 모집 예정
        </p>

        {/* Example exhibitor card structure */}
        <div className="exhibitor-card">
          <div className="flex gap-6">
            <div className="w-24 h-24 bg-gray-200 rounded flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">전시자명</h3>
              <p className="text-gray-600 text-sm mb-3">
                전시자 소개글이 들어갑니다. 어떤 작품을 전시하는지,
                어떤 활동을 하는지에 대한 간단한 설명입니다.
              </p>
              <div className="flex gap-4 text-sm text-gray-500">
                <a href="#" className="hover:text-gray-900">home</a>
                <a href="#" className="hover:text-gray-900">X</a>
                <a href="#" className="hover:text-gray-900">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          · · ·
        </p>
      </section>

      <hr className="section-divider" />

      {/* Participation Info */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">참가 안내</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-3">전시자</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>· 개최 3개월 전부터 1개월간 모집</li>
              <li>· 참가비 무료 또는 소정의 비용</li>
              <li>· 판매 수익은 전적으로 전시자에게</li>
              <li>· 굿즈 제작 지원 (견적/디자인)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">참관자</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>· 입장료 10,000원</li>
              <li>· 텀블벅 얼리버드 또는 현장구매</li>
              <li>· 후원 굿즈: 스티커, 토트백, 티셔츠</li>
              <li>· 다양한 픽셀아트 체험 및 구매</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm py-8">
        <p className="mb-2">점집 - Live Pixel Market</p>
        <p>한국 픽셀아트의 확장성과 자생력 강화를 위해 노력합니다.</p>
        <p className="mt-4">
          <a href="#" className="hover:text-gray-600">X(Twitter)</a>
        </p>
      </footer>
    </main>
  );
}
