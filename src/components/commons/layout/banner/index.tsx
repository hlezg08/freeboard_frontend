import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Wrapper = styled.div`
  height: 350px;
  display: flex;
  justify-content: center;
`;
const MySlider = styled(Slider)`
  width: 90%;
  height: 320px;
`;
const SliderImg = styled.img`
  width: 100%;
  height: 350px;
`;
function Prev(props) {
  const { onClick } = props;
  return (
    <LeftOutlined
      style={{
        position: "absolute",
        top: "50%",
        left: "-40px",
        display: "block",
        fontSize: "40px",
        background: "transparent",
        cursor: "pointer",
        transition: "200ms ease-in-out",
      }}
      onClick={onClick}
    />
  );
}
function Next(props) {
  const { onClick } = props;
  return (
    <RightOutlined
      style={{
        position: "absolute",
        top: "50%",
        right: "-40px",
        display: "block",
        fontSize: "40px",
        background: "transparent",
        cursor: "pointer",
        transition: "200ms ease-in-out",
      }}
      onClick={onClick}
    />
  );
}

export default function LayoutBanner() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1500,
    slidesTsoShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoSpeed: 1500,
    prevArrow: <Prev />,
    nextArrow: <Next />,
  };
  return (
    <Wrapper>
      <MySlider {...settings}>
        <div>
          <SliderImg src={"../../images/carousel-01.png"} />
        </div>
        <div>
          <SliderImg src={"../../images/carousel-02.png"} />
        </div>
        <div>
          <SliderImg src={"../../images/carousel-03.png"} />
        </div>
        <div>
          <SliderImg src={"../../images/carousel-04.png"} />
        </div>
      </MySlider>
    </Wrapper>
  );
}
