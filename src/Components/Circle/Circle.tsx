import React from "react";
import c from "classnames";
import so from "Assets/outerStyle.styl";

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
const Circle = ({
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
};
export default React.memo(Circle);
