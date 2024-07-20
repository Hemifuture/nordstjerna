import { ParentProps, mergeProps } from "solid-js";
import { ColorType, CommonProps } from "../../common/types";
import { Direction } from "./types";

interface TooltipProps extends CommonProps, ParentProps {
  direction?: Direction;
  type?: ColorType;
}

const Tooltip = (props: TooltipProps) => {
  const defaults = {
    direction: "top" as Direction,
    type: "info" as ColorType,
  };

  const merged = mergeProps(defaults, props);

  return <div>{merged.children}</div>;
};

export default Tooltip;
