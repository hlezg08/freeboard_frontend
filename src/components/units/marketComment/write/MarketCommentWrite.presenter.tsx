import ButtonWhite from "../../../commons/buttons/white";
import InputComment from "../../../commons/inputs/comment";
import * as S from "./MarketCommentWrite.styles";
export default function MarketCommentWriteUI(props: any) {
  const onClickRollBack = () => {
    props.setIsEdit((prev) => !prev);
  };
  return (
    <S.Form
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdateQuestion)
          : props.handleSubmit(props.onClickCreateQuestion)
      }
    >
      <S.CommentWrapper isEdit={props.isEdit}>
        {props.isEdit || <S.CommentTitle>문의하기</S.CommentTitle>}
        <InputComment
          register={props.register("contents")}
          onChange={props.onChangeContents}
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.CommentAttach>
          <span>{props.length}/100</span>
          <div>
            {props.isEdit && <S.RollBackButton onClick={onClickRollBack} />}
            <ButtonWhite type="button" title={props.isEdit ? "수정" : "등록"} />
          </div>
        </S.CommentAttach>
      </S.CommentWrapper>
    </S.Form>
  );
}
