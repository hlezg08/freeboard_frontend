import styled from "@emotion/styled";
import Slider from "react-slick";
export const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
`;
export const MySlider = styled(Slider)`
  width: 100%;
  height: 320px;
  .slick-dots {
    .slick-active {
      button::before {
        color: #c1c1c1;
      }
    }
    button::before {
      color: #e9e9e9;
    }
    li {
      margin: 5px;
    }
  }
  .slick-prev {
    z-index: 1;
    left: 15px;
  }
  .slick-prev::before {
    content: "<";
    color: #f2f2f2;
    font-size: 40px;
  }
  .slick-next {
    z-index: 1;
    right: 15px;
  }
  .slick-next::before {
    content: ">";
    color: #f2f2f2;
    font-size: 40px;
  }
`;
export const SliderImg = styled.img`
  width: 100%;
  height: 350px;
`;
