import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";
import MarketCommentListItem from "./MarketCommentListItem.container";
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
            <MarketCommentListItem
              key={el._id}
              el={el}
              data={props.data}
            ></MarketCommentListItem>
          ))}
        </CommentWrapper>
      </Wrapper>
    </InfiniteScroll>
  );
}
