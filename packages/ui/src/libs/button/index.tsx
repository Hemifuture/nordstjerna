// import { A } from "@solidjs/router";
import {
  type ParentProps,
  mergeProps,
  type JSXElement,
  ParentComponent,
} from "solid-js";
import style from "./style.module.scss";
import { CommonProps } from "../../common/types";
import { Dynamic } from "solid-js/web";

type CustomButtonProps = {
  type?: "success" | "danger" | "warning" | "primary";
  level?: "low" | "medium" | "high";
  size?: "small" | "default" | "large";
  href?: string;
  icon?: JSXElement;
  disabled?: boolean;
  onClick?: () => void;
};

interface ButtonProps extends ParentProps, CustomButtonProps, CommonProps {}

const Button: ParentComponent<ButtonProps> = (props: ButtonProps) => {
  const defaults = {
    type: "primary",
    size: "default",
    level: "low",
    disabled: false,
  };

  const merged = mergeProps(defaults, props);

  const Tag = merged.href ? "a" : "button";

  return (
    <>
      <Dynamic
        component={Tag}
        id={props.id}
        type="button"
        class={`relative ${style.button} ${style[merged.type as string]} ${
          merged.class
        } level-${props.level}`}
        href={merged.href}
        target={merged.href ? "_blank" : undefined}
        classList={{
          [style.disabled]: merged.disabled,
          glass: merged.icon === undefined,
          [style.icon]: merged.icon !== undefined,
          "px3 py1": merged.size === "small",
          "px5 py2": merged.size === "default",
          "px8 py3": merged.size === "large",
        }}
        onclick={merged.disabled ? undefined : merged.onClick}
      >
        {merged.icon ? merged.icon : merged.children}
      </Dynamic>
    </>
  );
};

export default Button;
