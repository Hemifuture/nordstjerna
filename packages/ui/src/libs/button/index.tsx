// import { A } from "@solidjs/router";
import {
  type ParentProps,
  mergeProps,
  type JSXElement,
  Switch,
  Match,
  ParentComponent,
} from "solid-js";
import style from "./style.module.scss";

type CustomButtonProps = {
  class?: string;
  type?: "success" | "danger" | "warning" | "primary";
  href?: string;
  icon?: JSXElement;
  disabled?: boolean;
  onClick?: () => void;
};

type ButtonProps = ParentProps & CustomButtonProps;

const Button: ParentComponent<ButtonProps> = (props: ButtonProps) => {
  const defaults = {
    type: "primary",
    disabled: false,
  };

  const merged = mergeProps(defaults, props);
  // console.log(merged);

  return (
    <>
      <Switch
        fallback={
          <button
            type="button"
            class={`${style.button} glass ${style[merged.type as string]} ${
              merged.class
            }`}
            classList={{
              [style.disabled]: merged.disabled,
            }}
            onclick={merged.disabled ? undefined : merged.onClick}
          >
            {merged.children}
          </button>
        }
      >
        <Match when={merged.href}>
          <a
            href={merged.href as string}
            target="_blank"
            class={`${style.button} glass  ${style[merged.type as string]} ${
              merged.class
            }`}
            classList={{
              [style.icon]: merged.icon !== undefined,
              disabled: merged.disabled,
            }}
          >
            <Switch>
              <Match when={merged.icon}>{merged.icon}</Match>
              <Match when={merged.children}>{merged.children}</Match>
            </Switch>
            {/* {merged.children} */}
          </a>
        </Match>
        <Match when={merged.icon}>
          <button
            type="button"
            class={`${style.button} ${style.icon} ${
              style[merged.type as string]
            } ${merged.class}`}
            onclick={merged.onClick}
          >
            {merged.icon}
          </button>
        </Match>
      </Switch>
    </>
  );
};

export default Button;
