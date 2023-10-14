import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "../context/FormContext";
import { FormType } from "../types/types";
import Input from "./Input";
import Select from "./Select";

export type ErrorType = {
  [key: string]: string;
};

const Form = () => {
  const formData = useContext<FormType>(FormContext);
  const [output, setOutput] = useState("");
  const [errors, setErrors] = useState<ErrorType[]>([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const errorMessages: ErrorType[] = [];
    Object.values(formData).forEach((entry) => {
      if (entry.errorMessage) {
        errorMessages.push({ [entry.label.toLowerCase()]: entry.errorMessage });
      }
    });
    setErrors(errorMessages.slice());
  }, [formData]);

  type dataProps = {
    [key: string]: string;
  };
  function validateErrors(data: dataProps[]) {
    setErrors([]);
    setOutput("");
    let hasErrors = false;
    const updatedErrors: ErrorType[] = [];
    Object.values(formData).forEach((entry) => {
      if (entry.errorMessage && data[entry.label.toLowerCase()] === "") {
        hasErrors = true;
        updatedErrors.push({ [entry.label.toLowerCase()]: entry.errorMessage });
      }
    });
    if (hasErrors) {
      setErrors(updatedErrors.slice());
      return true;
    }
    return false;
  }

  function createUser(data: dataProps[]) {
    if (!validateErrors(data)) {
      setOutput(data);
    }
  }

  return (
    <div className="h-screen items-center justify-center flex flex-col w-screen w-max-sm">
      <form
        onSubmit={handleSubmit(createUser)}
        className="flex flex-col gap-4 w-screen max-w-sm"
      >
        {formData.map((item) => {
          switch (item.inputtype) {
            case "select":
              return (
                <Select
                  key={item.label}
                  label={item.label}
                  options={item.options!}
                  errorMessage={item.errorMessage}
                  register={register}
                />
              );
            default:
              return (
                <Input
                  key={item.label}
                  label={item.label}
                  type={item.type!}
                  errors={errors}
                  register={register}
                  errorMessage={item.errorMessage}
                />
              );
          }
        })}
        <div className="flex flex-col">
          <button type="submit" className="bg-emerald-600 hover:bg-emerald-400">
            Save
          </button>
        </div>
      </form>
      {output && (
        <div>
          <h1 className="text-xl pt-10 mb-4">Data submitted successfully!</h1>
          {Object.entries(output).map((entry) => (
            <h2 key={entry[0]}>
              <strong>{entry[0]}</strong>: {entry[1]}
            </h2>
          ))}
        </div>
      )}
    </div>
  );
};

export default Form;
