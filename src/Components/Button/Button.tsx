import React from "react";
import s from "./Button.styl";
import c from "classnames";

interface IButtonProps {
  text?: string;
  onClick: (event: React.MouseEvent) => void;
  disabled?: boolean;
  extraClass?: string[];
}

const Button = ({
  text,
  onClick,
  disabled,
  extraClass = [],
}: IButtonProps): JSX.Element => {
  const style = c({ [s["disabled"]]: disabled }, ...extraClass);

  return (
    <button onClick={onClick} disabled={disabled} className={style}>
      {text}
    </button>
  );
};

export default Button;
