import {
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";
import { ErrorType } from ".";

type InputProps = {
  label: string;
  type: string;
  errorMessage?: string | undefined;
  errors: ErrorType[];
  register: (
    name: string,
    options?: RegisterOptions<FieldValues, string> | undefined
  ) => UseFormRegisterReturn<string>;
};

const Input = ({ label, type, errorMessage, errors, register }: InputProps) => (
  <div className="flex flex-col">
    <label htmlFor={label.toLowerCase()}>{label}</label>
    <input
      type={type}
      className="h-8 rounded border-zinc-500 text-white px-3 border"
      id={label.toLowerCase()}
      {...register(label.toLowerCase())}
    />
    {errorMessage &&
      errors.find((error) =>
        Object.keys(error).includes(label.toLowerCase())
      ) && <label className="text-red-500">{errorMessage}</label>}
  </div>
);

export default Input;
