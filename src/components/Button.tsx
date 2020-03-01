import React from 'react';

interface IButtonProps {
  /** Текст кнопки. */
  text: string;
  /** Метод onClick кнопки. */
  onClick: () => void;
  /** свойство disabled кнопки. */
  disabled?: boolean;
  /** Параметр принимающий стиль кнопки. */
  className?: any;
}

const Button = ({
  text,
  onClick,
  disabled,
  className
}: IButtonProps) => {

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {text}
    </button>
  )
};

export default Button;