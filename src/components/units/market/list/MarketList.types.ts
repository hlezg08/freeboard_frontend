import { ChangeEvent } from "react";
export interface IMarketListUIProps {
  data?: any;
  refetch?: any;
  onClickTodayProducts: (el: any) => () => void;
  loadProducts: () => void;
  todayProducts: any;
  onChangeKeyword?: (value: string) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
