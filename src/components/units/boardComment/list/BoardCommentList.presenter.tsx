import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import * as D from "./BoardCommentList.styles";
import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <D.Wrapper>
      <D.CommentWrapper>
        {props.data?.fetchBoardComments.map((el: any) => (
          <BoardCommentListUIItem
            key={el._id}
            el={el}
            data={props.data}
            isModalVisible={props.isModalVisible}
            showModal={props.showModal}
            onClickDeleteComment={props.onClickDeleteComment}
            onChangeCommentPassword={props.onChangeCommentPassword}
          ></BoardCommentListUIItem>
        ))}
      </D.CommentWrapper>
    </D.Wrapper>
  );
}
