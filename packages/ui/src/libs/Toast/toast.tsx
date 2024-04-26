import {
  For,
  JSXElement,
  // Show,
  // createEffect,
  // createRoot,
  createUniqueId,
  mergeProps,
} from "solid-js";
import { TransitionGroup } from "solid-transition-group";
import { render } from "solid-js/web";
import useList from "./data";
import style from "./style.module.scss";
import { ColorType } from "../../common/types";
import ToastItem from "./ToastItem";

const mountId = "n-toast-mount";

interface ToastParams {
  duration?: number;
  autoClose?: boolean;
}

const { list, add, remove } = useList();
let mountPoint = document.getElementById(mountId);

if (!mountPoint) {
  console.log("mountPoint not found");
  mountPoint = document.createElement("div");
  mountPoint.id = mountId;
  // mountPoint.className = "fixed top-4 right-4 z-50 flex flex-col items-end";
  mountPoint.className = style["mount-point"];

  document.body.appendChild(mountPoint);

  setTimeout(() => {
    render(() => {
      // createEffect(() => {
      //   if (list().length === 0) {
      //     setTimeout(() => {
      //       unmount();
      //       mountPoint?.remove();
      //     }, 500);
      //   }
      // });

      return (
        // <Show when={list().length}>
        <TransitionGroup
          name="toast"
          enterActiveClass={style["toast-enter-active"]}
          exitActiveClass={style["toast-exit-active"]}
          enterClass={style["toast-enter-from"]}
          exitClass={style["toast-exit-from"]}
          enterToClass={style["toast-enter-to"]}
          exitToClass={style["toast-exit-to"]}
        >
          <For each={list()}>
            {(item) => {
              return <ToastItem item={item} />;
            }}
          </For>
        </TransitionGroup>
        // </Show>
      );
    }, mountPoint!);
  }, 500);
}

const toast = (
  type: keyof typeof ColorType,
  content: JSXElement,
  props?: ToastParams
) => {
  const defaultProps = { duration: 3000, autoClose: true };
  const { duration, autoClose } = mergeProps(defaultProps, props);

  const id = createUniqueId();
  // const { list, add, remove } = useList();
  // let mountPoint = document.getElementById(mountId);

  add({
    id,
    type,
    content,
    duration,
    autoClose,
  });

  if (duration && duration > 0 && autoClose) {
    const timer = setTimeout(() => {
      remove(id);
      clearTimeout(timer);
    }, duration);
  }
};

export default toast;
