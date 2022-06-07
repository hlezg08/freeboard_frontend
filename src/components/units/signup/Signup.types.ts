import { ChangeEvent } from "react";
export interface ISingupUIProps {
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  errorEmail: string;
  errorName: string;
  errorPassword: string;
  errorPasswordAgain: string;
  onClickSubmit: () => void;
}
