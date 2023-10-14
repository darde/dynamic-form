import { useEffect, useState } from "react";
import Form from "./components/Form";
import { FormContextProvider } from "./components/context/FormContext";
import { fetchData } from "./components/repositories/InMemoryRepository";
import "./components/styles/global.css";
import { FormType } from "./components/types/types";

function App() {
  const [formData, setFormData] = useState<FormType>([]);

  useEffect(() => {
    async function getData(): Promise<void> {
      const data: FormType = await fetchData();
      setFormData(data);
    }

    getData();
  }, []);

  return (
    <FormContextProvider value={formData}>
      <Form />
    </FormContextProvider>
  );
}

export default App;
