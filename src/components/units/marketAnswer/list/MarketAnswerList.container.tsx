import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./MarketAnswerList.queries";
import MarketAnswerListItem from "./MarketAnswerListItem.container";

export default function MarketAnswerList(props: any) {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props._id },
  });

  return (
    <>
      {data?.fetchUseditemQuestionAnswers.map((el) => (
        <MarketAnswerListItem
          onClickActiveAnswer={props.onClickActiveAnswer}
          key={el._id}
          questionId={props._id}
          el={el}
        />
      ))}
    </>
  );
}
