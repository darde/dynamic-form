import { createContext } from "react";
import { FormType } from "../types/types";

const INITIAL_STATE: FormType = []

export const FormContext = createContext(INITIAL_STATE)

export const FormContextProvider:React.FC<{ children: React.ReactNode, value: FormType }> = ({ children, value}) => {
  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}