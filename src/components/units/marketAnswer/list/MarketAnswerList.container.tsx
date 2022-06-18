import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        name
      }
      createdAt
    }
  }
`;
export default function MarketAnswerList(props) {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props._id },
  });
  console.log(props._id);
  console.log(data);
  return <div></div>;
}
