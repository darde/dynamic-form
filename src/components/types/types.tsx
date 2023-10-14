
export type InputType = {
  inputtype: string;
  type?: string;
  required: boolean;
  label: string;
  errorMessage?: string;
  options?: string[];
};

export type FormType = InputType[]