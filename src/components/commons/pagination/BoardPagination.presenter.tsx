import {
  PaginationWrapper,
  PageButton,
  LeftIcon,
  RightIcon,
  DoubleLeftIcon,
  DoubleRightIcon,
} from "./BoardPagination.styles";
import { IBoardPaginationUIProps } from "./BoardPagination.types";

export default function BoardPaginationUI(props: IBoardPaginationUIProps) {
  return (
    <PaginationWrapper>
      <DoubleLeftIcon onClick={props.onClickFirstPage} />
      <LeftIcon
        disabled={props.startPage === 1}
        onClick={props.onClickPrevPage}
      >
        이전
      </LeftIcon>
      {new Array(10).fill(1).map((_, index) => {
        return (
          index + props.startPage <= props.lastPage && (
            <PageButton
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
              isActive={index + props.startPage === props.activedPage}
            >
              {index + props.startPage}
            </PageButton>
          )
        );
      })}
      <RightIcon
        disabled={props.startPage + 10 > props.lastPage}
        onClick={props.onClickNextPage}
      >
        다음
      </RightIcon>
      <DoubleRightIcon onClick={props.onClickLastPage} />
    </PaginationWrapper>
  );
}
