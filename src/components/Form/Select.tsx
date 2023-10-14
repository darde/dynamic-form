import {
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";

type SelectProps = {
  label: string;
  options: string[];
  errorMessage?: string | undefined;
  register: (
    name: string,
    options?: RegisterOptions<FieldValues, string> | undefined
  ) => UseFormRegisterReturn<string>;
};

const Select = ({
  label,
  options,
  errorMessage,
  register,
}: SelectProps): JSX.Element => (
  <div className="flex flex-col">
    <label htmlFor={label.toLowerCase()}>{label}</label>
    <select
      className="h-8 rounded border-zinc-500 text-white px-3 border"
      id={label.toLowerCase()}
      {...register(label.toLowerCase())}
    >
      <option>Select</option>
      {options.map((option) => (
        <option key={option} value={option.toLowerCase()}>
          {option}
        </option>
      ))}
    </select>
    {errorMessage && <label className="text-red-500">{errorMessage}</label>}
  </div>
);

export default Select;
