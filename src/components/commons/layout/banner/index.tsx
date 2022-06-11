import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wrapper, MySlider, SliderImg } from "./LayoutBanner.styles";

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoSpeed: 2000,
  };
  return (
    <Wrapper>
      <MySlider {...settings}>
        <div>
          <SliderImg src={"../../images/carousel-cat-01.jpeg"} />
        </div>
        <div>
          <SliderImg src={"../../images/carousel-cat-02.jpeg"} />
        </div>
        <div>
          <SliderImg src={"../../images/carousel-cat-03.jpeg"} />
        </div>
        <div>
          <SliderImg src={"../../images/carousel-cat-04.jpeg"} />
        </div>
      </MySlider>
    </Wrapper>
  );
}
