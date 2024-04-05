// src/app/hooks/useForm.ts
import { useState, ChangeEvent } from 'react';

type FormFields = Record<string, any>;

const useForm = <T extends FormFields>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (callback: (values: T) => void) => (e: React.FormEvent) => {
    e.preventDefault();
    callback(values);
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
