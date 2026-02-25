"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=b179206fb24577cec5aee4f1353477a0&autoload=false";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (!mapRef.current) return;

        const coords = new window.kakao.maps.LatLng(37.53406, 126.99458);
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
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-64 md:h-80"
    />
  );
}
