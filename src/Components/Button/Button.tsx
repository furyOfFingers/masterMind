import React from "react";
import s from "./Button.styl";
import c from "classnames";

interface IButtonProps {
  type?: string;
  text?: string;
  onClick: (event: React.MouseEvent) => void;
  disabled?: boolean;
  extraClass?: string[];
}

const Button = ({
  type = "confirm",
  text,
  onClick,
  disabled,
  extraClass = [],
}: IButtonProps): JSX.Element => {
  const style = c(
    { [s["disabled"]]: disabled },
    s[`type__${type}`],
    ...extraClass
  );

  return (
    <button onClick={onClick} disabled={disabled} className={style}>
      {text}
    </button>
  );
};

export default React.memo(Button);
