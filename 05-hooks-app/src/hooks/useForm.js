import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = (event) => {
    const value = event.target.value;
    const inputName = event.target.name;

    setFormState({
      ...formState,
      [inputName]: value
    });
  }

  const resetForm = () => setFormState(initialForm);

  return {
    ...formState,
    formState,
    resetForm,
    onInputChange,
  };
}