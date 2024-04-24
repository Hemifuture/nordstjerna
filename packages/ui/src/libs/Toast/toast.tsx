import {
  For,
  JSXElement,
  // Show,
  // createEffect,
  // createRoot,
  createUniqueId,
} from "solid-js";
import { TransitionGroup } from "solid-transition-group";
import { render } from "solid-js/web";
import useList, { ToastType } from "./list";
import Button from "../Button";
import style from "./style.module.scss";

const mountId = "n-toast-mount";

const toast = (
  type: keyof typeof ToastType,
  content: JSXElement,
  duration = 3000,
  autoClose = true
) => {
  const id = createUniqueId();
  const { list, add, remove } = useList();
  let mountPoint = document.getElementById(mountId);

  add({ id, type, content, duration, autoClose });

  console.log(list());

  if (duration && duration > 0 && autoClose) {
    const timer = setTimeout(() => {
      remove(id);
      clearTimeout(timer);
    }, duration);
  }

  if (!mountPoint) {
    console.log("mountPoint not found");
    mountPoint = document.createElement("div");
    mountPoint.id = mountId;
    mountPoint.className = "fixed top-4 right-4 z-50 flex flex-col items-end";

    document.body.appendChild(mountPoint);

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
              return (
                <div class="glass backdrop-blur-sm! px3 py2 my2 rounded-lg shadow-2xl flex gap4">
                  {/* <Show when={item.icon}>{item.icon}</Show> */}
                  <div>{item.content}</div>
                  {/* <Show when={item.autoClose}> */}
                  <Button
                    icon={<div class="i-ion-close w6 h6"></div>}
                    onClick={() => remove(item.id)}
                  />
                  {/* <span class="close" onClick={() => remove(item.id)} /> */}
                  {/* </Show> */}
                </div>
              );
            }}
          </For>
        </TransitionGroup>
        // </Show>
      );
    }, mountPoint!);
  }
};

export default toast;
