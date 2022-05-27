import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 250px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
`;
const MySlider = styled(Slider)`
  width: 80%;
  height: 200px;
`;
const SliderImg = styled.img`
  width: auto;
  height: 200px;
  display: block;
  margin: 0px auto;
`;
const PrevSlick = styled.button`
  position: absolute;
  top: 50%;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
  cursor: pointer;
  color: white;
  border: none;
  outline: none;
  background: black;
  border-radius: 10px;
  :before {
    content: "<";
  }
`;
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
      }}
      onClick={onClick}
    />
  );
}

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    prevArrow: <Arrow />,
    nextArrow: <Arrow />,
  };
  return (
    <Wrapper>
      <MySlider {...settings}>
        <div>
          <SliderImg src={"/01.png"} />
        </div>
        <div>
          <SliderImg src={"/02.png"} />
        </div>
        <div>
          <SliderImg src={"/03.png"} />
        </div>
        <div>
          <SliderImg src={"/04.jpeg"} />
        </div>
      </MySlider>
    </Wrapper>
  );
}
