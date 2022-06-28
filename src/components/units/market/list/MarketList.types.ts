import { ChangeEvent } from "react";
export interface IMarketListUIProps {
  data?: any;
  refetch?: any;
  dataSoldOut?: any;
  refetchSoldOut?: any;
  loadProducts: () => void;
  loadProductsSoldOut: () => void;
  onChangeKeyword?: (value: string) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
