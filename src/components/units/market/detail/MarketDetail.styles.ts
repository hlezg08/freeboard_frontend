import Slider from "react-slick";
import styled from "@emotion/styled";
import { Image } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0px;
`;
export const DetailWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 60px;
  background-color: white;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  border-radius: 15px;
`;
export const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const ItemTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const ItemTagButton = styled.button`
  width: auto;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 15px;
  background: white;
  font-size: 18px;
  margin: 5px;
  padding-left: 15px;
  padding-right: 15px;
`;
export const ItemButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  justify-content: center;
`;
export const SellerWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const ContentsWrapper = styled.div`
  flex-grow: 1;
  width: 60%;
  padding-left: 30px;
`;
export const Hr = styled.div`
  height: 1px;
  border-top: 1px solid #555555;
  margin: 10px 0px;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  padding: 50px 0px;
`;
export const Title1 = styled.div`
  font-size: 24px;
  overflow: scroll;
`;
export const Title2 = styled.div`
  font-size: 20px;
  overflow: scroll;
`;
export const Remarks = styled.p`
  overflow: scroll;
  width: 100%;
  font-size: 18px;
  height: 100px;
  margin: 0px;
`;
export const Contents = styled.p`
  width: 100%;
  font-size: 20px;
  padding-left: 20px;
  height: auto;
  overflow: scroll;
  margin: 0;
`;
export const CarouselWrapper = styled.div`
  width: 320px;
  height: 320px;
  display: flex;
  justify-content: center;
`;
export const ImageSlider = styled(Slider)`
  width: 100%;
  height: 290px;
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
export const CarouselImage = styled(Image)`
  width: 320px;
  height: 320px;
`;
export const ProductDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid lightgray;
  padding-right: 20px;
`;
