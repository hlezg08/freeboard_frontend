import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { latLngState } from "../../../commons/store";
declare const window: typeof globalThis & {
  kakao: any;
};
interface KaKaoMapPros {
  address?: string;
}
export default function KakaoMap(props: KaKaoMapPros) {
  const [latLng, setLatLng] = useRecoilState(latLngState);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=ab4668c53d915a37573a1dc942b53459&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        // 지도를 담을 영역의 DOM 레퍼런스
        const container = document.getElementById("map");
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.4849, 126.8966), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        // 지도 생성 및 객체 리턴
        const map = new window.kakao.maps.Map(container, options);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(props.address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map,
              position: coords,
            });

            // 인포 윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new window.kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">거래 장소</div>',
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
            setLatLng(coords);
          }
        });
      });
    };
  }, [props.address]);

  return (
    <>
      <div id="map" style={{ width: 380, height: 250 }}></div>
    </>
  );
}
