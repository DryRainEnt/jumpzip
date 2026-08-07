import KakaoMap from "./KakaoMap";

export default function Home() {
  return (
    <main className="relative">
      {/* Left Stripes */}
      <div className="fixed left-0 top-0 h-full z-50 flex">
        <div className="w-2 md:w-3 bg-[#e63946]"></div>
        <div className="w-2 md:w-3 bg-[#3da35d]"></div>
        <div className="w-2 md:w-3 bg-[#2b4c7e]"></div>
      </div>
      {/* Hero Section - Full Width Image with Overlay */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/DosaGirlLanding.png" alt="메인 비주얼" className="w-full h-full object-cover" />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 h-full flex flex-col justify-between py-6 md:py-8 px-8 md:px-24 lg:px-32">
          {/* Top Left - Title */}
          <div className="text-left">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[0.85] drop-shadow-lg">
              LIVE<br />
              PIXEL<br />
              MARKET
            </p>
            <div className="inline-block mt-3">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none text-white drop-shadow-lg">
                점집
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-1 drop-shadow-lg text-right">
                JUMPZIP
              </p>
            </div>
          </div>

          {/* Bottom Right - Tagline */}
          <div className="text-right text-white">
            <div className="max-w-md ml-auto text-white/80 space-y-1 text-sm md:text-base">
              <p>형형색색의 간판</p>
              <p>오고가는 대화 소리</p>
              <p>울려 퍼지는 멜로디</p>
              <p>비밀스런 골목길 따라 걸으면</p>
              <p>펼쳐지는 특별한 시장</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recap Video */}
      <section className="px-8 py-6 md:px-12 md:py-8 flex justify-center">
        <div className="max-w-3xl w-full">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/UdEgTilabhw"
              title="점집 1회 회고 영상"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Next Edition Teaser */}
      <section className="px-8 py-12 md:px-12 md:py-16 flex justify-center">
        <div className="max-w-3xl w-full text-center">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2b4c7e] leading-tight">2026.10</p>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#2b4c7e]/70 mt-2 tracking-widest">COMING SOON...</p>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="px-8 py-4 md:px-12 md:py-6 flex justify-center">
        <div className="max-w-3xl w-full flex flex-col sm:flex-row gap-3">
          <a
            href="https://witchform.com/payform/?uuid=TRTLYUTPJE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-[#e63946] px-4 py-3 font-bold hover:opacity-90 transition-opacity"
            style={{ color: '#ffffff' }}
          >
            앤솔로지 구매하기
          </a>
          <a
            href="https://discord.gg/QUsmwz4E77"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-[#5865F2] px-4 py-3 font-bold hover:opacity-90 transition-opacity"
            style={{ color: '#ffffff' }}
          >
            디스코드 입장
          </a>
        </div>
      </section>

      {/* What is Pixel Art */}
      <section className="p-8 md:p-12 flex justify-center">
        <div className="max-w-3xl w-full flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <h2 className="section-title">픽셀아트란?</h2>
            <p className="section-subtitle">WHAT IS PIXELART?</p>

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
          <div className="w-56 flex items-center justify-center flex-shrink-0">
            <img src="/Drawing_169_3.png" alt="점집 캐릭터" className="w-full object-contain" style={{ imageRendering: 'pixelated' }} />
          </div>
        </div>
      </section>

      {/* About JUMPZIP */}
      <section className="p-8 md:p-12 flex justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="section-title">점집이란?</h2>
          <p className="section-subtitle">ABOUT JUMPZIP</p>

          <div className="content-box flex flex-col md:flex-row gap-6 items-center">
          <div className="w-56 flex flex-col items-center flex-shrink-0">
            <img src="/Logo_t.png" alt="점집 로고" className="w-full object-contain" style={{ imageRendering: 'pixelated' }} />
            <img src="/Logo_t-desc.png" alt="Logo by Bbungsik" className="w-full object-contain mt-2" style={{ imageRendering: 'pixelated' }} />
          </div>
          <div>
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
        </div>
      </section>

      {/* Hall Map */}
      <section className="p-8 md:p-12 flex justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="section-title">회장 맵</h2>
          <p className="section-subtitle">HALL MAP</p>

          <div className="content-box">
            <img src="/booth_layout.png" alt="부스 배치도 - B1F, B2F" className="w-full" style={{ imageRendering: 'pixelated' }} />
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
      <section className="p-8 md:p-12 flex justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="section-title">전시자</h2>
          <p className="section-subtitle">EXHIBITORS</p>

          {(() => {
            const exhibitors = [
              { booth: '2', name: '알토스', image: '/profiles/알토스.png' },
              { booth: '3', name: '도트초보', image: '/profiles/도트초보.png' },
              { booth: '4', name: '슬프다맨', image: '/profiles/슬프다맨.png' },
              { booth: '5', name: 'wipel의플', image: '/profiles/wipel의플.png' },
              { booth: '6-7', name: 'Twintooth 쌍생치', image: '/profiles/Twintooth 쌍생치.png' },
              { booth: '8-9', name: '빗빛', image: '/profiles/빗빛.png' },
              { booth: '10', name: 'Wheezy', image: '/profiles/Wheezy.png' },
              { booth: '11', name: 'Elise', image: '/profiles/Elise.png' },
              { booth: '12', name: '도도앤디드', image: '/profiles/도도앤디드.png' },
              { booth: '13', name: 'Barend', image: '/profiles/Barend.png' },
              { booth: '14', name: 'Resu', image: '/profiles/Resu.png' },
              { booth: '15', name: 'Pixel_dot', image: '/profiles/Pixel_dot.png' },
              { booth: '16', name: '화소', image: '/profiles/화소.png' },
              { booth: '17', name: '베네수엘라 푸들나방', image: '/profiles/베네수엘라 푸들나방.png' },
              { booth: '18', name: '박박스', image: '/profiles/박박스.png' },
              { booth: '19', name: '아크네르', image: '/profiles/아크네르.png' },
              { booth: '20', name: '미정', image: '/profiles/미정.png' },
              { booth: '21', name: '4분의1', image: '/profiles/4분의1.png' },
              { booth: '22', name: 'EB', image: null },
              { booth: '23', name: 'All Day Jam', image: '/profiles/All Day Jam.png' },
              { booth: '25', name: '이뿡식', image: '/profiles/이뿡식.jpg' },
              { booth: '26', name: '마야골드', image: '/profiles/마야골드.png' },
              { booth: '27', name: '아르페', image: '/profiles/아르페.jpg' },
              { booth: '28', name: 'MKstudio', image: '/profiles/MKstudio.png' },
              { booth: '29', name: 'ZIK', image: '/profiles/ZIK.png' },
              { booth: '30', name: 'Yong', image: '/profiles/Yong.png' },
              { booth: '31', name: 'Hadahada', image: '/profiles/Hadahada.jpg' },
            ];
            return (
              <div className="exhibitor-grid mb-6">
                {exhibitors.map((e) => (
                  <div key={e.name} className="bg-[#fff8d6] border border-[#2b4c7e]/20 text-center">
                    {e.image ? (
                      <img src={e.image} alt={e.name} className="exhibitor-thumb" style={{ imageRendering: 'pixelated' }} />
                    ) : (
                      <div className="exhibitor-thumb" />
                    )}
                    <p className="text-base text-[#2b4c7e] py-1">
                      <span className="font-bold mr-1">{e.booth}.</span>{e.name}
                    </p>
                  </div>
                ))}
              </div>
            );
          })()}


          <div className="text-center">
            <span
              className="inline-flex items-center gap-2 bg-[#2b4c7e] px-6 py-3 font-bold opacity-40 cursor-not-allowed"
              style={{ color: '#f5e6a3' }}
            >
              전시 참가 신청 마감
            </span>
          </div>
        </div>
      </section>

      {/* DJ Lineup */}
      <section className="p-8 md:p-12 flex justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="section-title">디제잉 세션</h2>
          <p className="section-subtitle">DJ LINEUP</p>

          <div className="text-center">
            <img src="/DJ Lineup.png" alt="2026 점집 디제잉 세션 GOOD PAN - DJ Lineup" className="w-full max-w-2xl mx-auto" style={{ imageRendering: 'pixelated' }} />
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="p-8 md:p-12 flex justify-center">
        <div className="max-w-3xl w-full">
          <h2 className="section-title">후원</h2>
          <p className="section-subtitle">FUNDING</p>

          <div className="text-center">
            <img src="/head_image.png" alt="점집 펀딩 포스터" className="w-full max-w-md mx-auto mb-4" style={{ imageRendering: 'pixelated' }} />
            <p className="text-[#0f1f3a] font-bold mb-4">펀딩 114% 달성!</p>
            <a
              href="https://tum.bg/WDKqih"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0f1f3a] px-6 py-3 font-bold hover:opacity-90 transition-opacity"
              style={{ color: '#ffffff' }}
            >
              펀딩 마감
            </a>
          </div>

          <div className="text-center mt-12">
            <img src="/anthology_preview.png" alt="점집 아트북 제 1편 - 판" className="w-full max-w-md mx-auto mb-4" style={{ imageRendering: 'pixelated' }} />
            <p className="text-[#e63946] font-bold mb-4">상시 판매 중</p>
            <a
              href="https://witchform.com/payform/?uuid=TRTLYUTPJE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] px-6 py-3 font-bold hover:opacity-90 transition-opacity"
              style={{ color: '#ffffff' }}
            >
              앤솔로지 구매하기
            </a>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="p-8 md:p-12 flex justify-center">
        <div className="max-w-3xl w-full flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <h2 className="section-title">소식</h2>
            <p className="section-subtitle">UPDATES</p>

            <div className="flex items-center gap-4">
              <a
                href="https://x.com/JumpZipOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1DA1F2] text-white px-6 py-3 font-bold hover:opacity-90 transition-opacity"
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="w-40 h-40 flex items-center justify-center flex-shrink-0">
            <img src="/Logo.png" alt="점집 로고" className="w-full h-full object-contain" style={{ imageRendering: 'pixelated' }} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-8 md:p-12 flex flex-col items-center text-[#2b4c7e]">
        <div className="max-w-3xl w-full mb-6">
          <h2 className="section-title">협력</h2>
          <p className="section-subtitle">PARTNERS</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <img src="/gamepinglogo.png" alt="게임핑" style={{ height: '102px' }} className="object-contain" />
            <img src="/psychofluxlogo.gif" alt="사이코플럭스 엔터테인먼트" style={{ height: '154px' }} className="object-contain" />
          </div>
        </div>
        <p className="text-center text-sm opacity-80 mb-4">© 2026 점집 - Live Pixel Market</p>
        <div className="max-w-3xl w-full text-xs opacity-60 leading-relaxed">
          <p>상호: 플레이타르트 | 대표: 이건우 | 사업자등록번호: 563-05-02993</p>
          <p>통신판매업신고번호: 2025-서울성북-1324</p>
          <p>주소: 서울특별시 성북구 장위로19길 25, 2동 403호</p>
          <p>전화: 010-2896-0188 | 이메일: support@play-t.art</p>
        </div>
      </footer>
    </main>
  );
}
