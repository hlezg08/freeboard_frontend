import { useEffect } from "react";
declare const window: typeof globalThis & {
  kakao: any;
};
interface KaKaoMapPros {
  width?: number;
  height?: number;
  lat?: number;
  lng?: number;
  address?: string;
}

export default function KakaoMap(props: KaKaoMapPros) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=ab4668c53d915a37573a1dc942b53459&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.4849, 126.8966), // 지도의 중심좌표.
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        if (props.address) {
          const geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.addressSearch(props.address, function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
              });

              map.setCenter(coords);
              marker.setMap(map);
            }
          });
        } else {
          const markerPosition = new window.kakao.maps.LatLng(
            props.lat,
            props.lng
          );
          const marker = new window.kakao.maps.Marker({
            map,
            position: markerPosition,
          });
          marker.setMap(map);
        }
      });
    };
  }, [props.address]);

  return (
    <>
      <div id="map" style={{ width: props.width, height: props.height }}></div>
    </>
  );
}
