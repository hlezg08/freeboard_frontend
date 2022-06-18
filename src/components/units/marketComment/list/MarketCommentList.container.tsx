import MarketCommentListUI from "./MarketCommentList.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./MarketCommentList.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
export default function MarketCommentList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });
  const loadComment = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult?.fetchUseditemQuestions,
          ],
        };
      },
    });
  };
  return (
    <MarketCommentListUI
      data={data}
      loadComment={loadComment}
    ></MarketCommentListUI>
  );
}
