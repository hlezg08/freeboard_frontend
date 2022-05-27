import { PageButton, LeftIcon, RightIcon } from "./BoardPagination.styles";
interface IBoardPaginationUIProps {
  startPage: number;
  lastPage: number;
  onClickPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
export default function BoardPaginationUI(props: IBoardPaginationUIProps) {
  return (
    <>
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
    </>
  );
}
