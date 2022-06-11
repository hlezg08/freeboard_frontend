import { getDateTime } from "../../../../commons/libraries/utils";
import ReactPlayer from "react-player";
import * as D from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import ButtonWhite from "../../../commons/buttons/white";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <>
      <D.DetailWrapper>
        <D.DetailBody>
          <D.WriterWrapper>
            <D.Icon src="../../icons/ic-profile.svg"></D.Icon>
            <D.WriterText>
              <D.WriterName>{props.data?.fetchBoard.writer}</D.WriterName>
              <D.Date>
                Date : {getDateTime(props.data?.fetchBoard.createdAt)}
              </D.Date>
            </D.WriterText>
          </D.WriterWrapper>
          <D.Hr></D.Hr>
          <D.Title>{props.data?.fetchBoard.title}</D.Title>
          <D.Contents>{props.data?.fetchBoard.contents}</D.Contents>

          <D.ImgWrapper>
            {props.data?.fetchBoard.images.map((el: any, index: number) => {
              return (
                // 배열 요소 중 빈값이 아니면 이미지 보여주기
                el && (
                  <D.Img
                    onError={(event) => (event.target.style.display = "none")}
                    key={index}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                )
              );
            })}
          </D.ImgWrapper>

          {/* youtubeUrl이 비어있지 않고 재생 가능하면 컴포넌트 보이기 */}
          {props.data?.fetchBoard.youtubeUrl && (
            <D.YoutubeWrapper>
              {ReactPlayer.canPlay(props.data?.fetchBoard.youtubeUrl) && (
                <ReactPlayer
                  width="480px"
                  height="240px"
                  muted
                  url={props.data?.fetchBoard.youtubeUrl}
                />
              )}
            </D.YoutubeWrapper>
          )}

          <D.ThumbWrapper>
            <D.ThumbUpWrapper>
              <D.LikeIcon onClick={props.onClickLikeBoard} />
              <D.ThumbUpText>{props.data?.fetchBoard.likeCount}</D.ThumbUpText>
            </D.ThumbUpWrapper>
            <D.ThumbDownWrapper>
              <D.DisLikeIcon onClick={props.onClickDislikeBoard} />
              <D.ThumbDownText>
                {props.data?.fetchBoard.dislikeCount}
              </D.ThumbDownText>
            </D.ThumbDownWrapper>
          </D.ThumbWrapper>
        </D.DetailBody>
      </D.DetailWrapper>

      <D.ButtonWrapper>
        <ButtonWhite title="목록" onClick={props.onClickListBoard} />
        <ButtonWhite title="수정" onClick={props.onClickUpdateBoard} />
        <ButtonWhite title="삭제" onClick={props.onClickDeleteBoard} />
      </D.ButtonWrapper>
    </>
  );
}
