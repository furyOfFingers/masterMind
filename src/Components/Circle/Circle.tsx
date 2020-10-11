import React from "react";
import so from "Assets/outerStyle.styl";
import c from "classnames";

interface ICircleProps {
  /** Circle size. */
  size?: "small" | "normal" | "big";
  /** Circle clickable */
  active?: boolean;
  /** Additional style component. */
  extraClass?: string[];
  /** onClick function */
  onClick?: () => void;
  /** Clickable circle. */
  clicked?: boolean;
  /** Sign of the selected color */
  isColorSelected?: boolean;
}

/**
 * Component circle.
 */
const Circle = React.memo(
  ({
    size = "big",
    clicked,
    active,
    onClick,
    isColorSelected,
    extraClass = [],
  }: ICircleProps): JSX.Element => {
    const cn = c(
      so[`size__${size}`],
      { [so["active"]]: active },
      { [so["clicked"]]: clicked },
      { [so["color-selected"]]: isColorSelected },
      ...extraClass
    );

    return <div onClick={onClick} className={cn}></div>;
  }
);

export default Circle;
