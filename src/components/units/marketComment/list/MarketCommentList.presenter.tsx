import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";
import MarketCommentListUIItem from "./MarketCommentListItem.presenter";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const CommentWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
`;
export default function MarketCommentListUI(props) {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={props.loadComment}
      hasMore={true || false}
      useWindow={false}
    >
      <Wrapper>
        <CommentWrapper>
          {props.data?.fetchUseditemQuestions.map((el: any) => (
            <MarketCommentListUIItem
              key={el._id}
              el={el}
              data={props.data}
            ></MarketCommentListUIItem>
          ))}
        </CommentWrapper>
      </Wrapper>
    </InfiniteScroll>
  );
}
