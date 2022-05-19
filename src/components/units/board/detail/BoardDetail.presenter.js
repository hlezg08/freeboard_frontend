import * as S from "../BoardComponent.styles";
import * as D from "../detail/BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <>
      <S.App>
        <D.DetailHeader>
          <D.WriterWrapper>
            <D.Icon src="../../profile.svg"></D.Icon>
            <D.WriterText>
              <D.WriterName>{props.data?.fetchBoard.writer}</D.WriterName>
              <D.Date>Date : {props.createdAt}</D.Date>
            </D.WriterText>
          </D.WriterWrapper>
          <D.IconWrapper>
            <D.Icon src="../../file.svg"></D.Icon>
            <D.Icon src="../../location.svg"></D.Icon>
          </D.IconWrapper>
        </D.DetailHeader>
        <D.Hr></D.Hr>

        <D.DetailBody>
          <D.Title>{props.data?.fetchBoard.title}</D.Title>
          <D.ImgWrapper src={props.data?.fetchBoard.images}></D.ImgWrapper>
          <D.Contents>{props.data?.fetchBoard.contents}</D.Contents>
          <D.YoutubeWrapper>
            {/* 샘플 비디오 하드코딩 */}
            <D.Youtube
              src="https://www.youtube.com/embed/Tm73xgjc95A"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></D.Youtube>
          </D.YoutubeWrapper>
          <D.ThumbWrapper>
            <D.ThumbUpWrapper>
              <D.Icon src="../../thumb_up.svg"></D.Icon>
              <D.ThumbUpText>{props.data?.fetchBoard.likeCount}</D.ThumbUpText>
            </D.ThumbUpWrapper>
            <D.ThumbDownWrapper>
              <D.Icon src="../../thumb_down.svg"></D.Icon>
              <D.ThumbDownText>
                {props.data?.fetchBoard.dislikeCount}
              </D.ThumbDownText>
            </D.ThumbDownWrapper>
          </D.ThumbWrapper>
        </D.DetailBody>
        <D.ButtonWrapper>
          <D.Button>목록으로</D.Button>
          <D.Button onClick={props.onClickUpdateBoard}>수정하기</D.Button>
          <D.Button onClick={props.onClickDeleteBoard}>삭제하기</D.Button>
        </D.ButtonWrapper>
      </S.App>
    </>
  );
}
