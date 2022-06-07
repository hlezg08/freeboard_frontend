import { ChangeEvent } from "react";
export interface ILoginUIProps {
  errorEmail: string;
  errorPassword: string;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignup: () => void;
  onClickSubmit: () => void;
}
