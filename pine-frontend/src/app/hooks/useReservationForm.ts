// src/app/hooks/useReservationForm.ts
import { useState, ChangeEvent } from 'react';

interface ReservationFormValues {
  name: string;
  email: string;
  date: string;
  time: string;
  numberOfGuests: number;
}

const useReservationForm = (initialValues: ReservationFormValues) => {
  const [values, setValues] = useState<ReservationFormValues>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (callback: (values: ReservationFormValues) => void) => (e: React.FormEvent) => {
    e.preventDefault();
    // Add any specific validation logic for reservation here
    callback(values);
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useReservationForm;
