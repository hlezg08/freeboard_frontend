import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import BoardCommentListUIItem from "./BoardCommentListItem.presenter";
import InfiniteScroll from "react-infinite-scroller";
import * as D from "./BoardCommentList.styles";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={props.loadComment}
      hasMore={true || false}
      useWindow={false}
    >
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
    </InfiniteScroll>
  );
}
