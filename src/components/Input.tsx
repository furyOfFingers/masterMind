import React, { ChangeEvent } from 'react';

interface IInputProps {
  /** Наименование компонента input. */
  value: any;
  /** Тип компонента input. */
  type: string;
  /** Placeholder компонента input. */
  placeholder: string;
  /** Метод onChange компонента input */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, type, placeholder, onChange }: IInputProps) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
