import { useEffect } from "react";
declare const window: typeof globalThis & {
  kakao: any;
};
export default function KakaoMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=ab4668c53d915a37573a1dc942b53459&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.5256, 126.9256), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });
        // 마커가 지도 위에 표시되도록 설정
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            const latlng = mouseEvent.latLng;
            marker.setPosition(latlng);
          }
        );
      });
    };
  }, []);
  return (
    <>
      <div id="map" style={{ width: 380, height: 250 }}></div>
    </>
  );
}
