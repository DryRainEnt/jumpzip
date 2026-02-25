"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const KAKAO_APP_KEY = "b179206fb24577cec5aee4f1353477a0";

function loadKakaoSDK(): Promise<void> {
  return new Promise((resolve) => {
    if (window.kakao?.maps) {
      window.kakao.maps.load(() => resolve());
      return;
    }

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`;
    script.onload = () => {
      window.kakao.maps.load(() => resolve());
    };
    document.head.appendChild(script);
  });
}

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadKakaoSDK().then(() => {
      if (!mapRef.current) return;

      const coords = new window.kakao.maps.LatLng(37.53430, 126.993181);
      const map = new window.kakao.maps.Map(mapRef.current, {
        center: coords,
        level: 3,
      });

      const marker = new window.kakao.maps.Marker({
        map,
        position: coords,
      });

      const infowindow = new window.kakao.maps.InfoWindow({
        content:
          '<div style="padding:5px;font-size:12px;white-space:nowrap;">1289BUNKER</div>',
      });
      infowindow.open(map, marker);
    });
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-64 md:h-80"
    />
  );
}
