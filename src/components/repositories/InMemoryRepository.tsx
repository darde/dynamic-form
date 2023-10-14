import { FormType } from "../types/types";

const formData: FormType = [
  {
    inputtype: "inputtext",
    type: "text",
    required: true,
    label: "Name",
    errorMessage: "The field name is required",
  },
  {
    inputtype: "inputtext",
    type: "email",
    required: true,
    label: "Email",
    errorMessage: "The field email is required",
  },
  {
    inputtype: "inputtext",
    type: "text",
    required: true,
    label: "role",
    errorMessage: "The field role is required",
  },
  {
    inputtype: "inputtext",
    type: "text",
    required: true,
    label: "Password",
    errorMessage: "The field password is required",
  },
  {
    inputtype: "select",
    required: true,
    label: "Languages",
    options: ["JavaScript", "Python"],
  },
  {
    inputtype: "select",
    required: true,
    label: "Years of experience",
    options: ["one", "two", "three", "four"],
  },
];

export const fetchData = async (): Promise<FormType> => {
  return Promise.resolve(formData);
};
