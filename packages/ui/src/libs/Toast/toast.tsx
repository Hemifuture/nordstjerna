import { JSXElement, createRoot, createUniqueId } from "solid-js";
import useList, { ToastType } from "./list";

const mountId = "n-toast-mount";

const toast = (
  type: keyof typeof ToastType,
  message: string,
  duration = 5000,
  autoClose?: boolean
) => {
  const id = createUniqueId();
  const { list, add, remove } = useList();
  let mountPoint = document.getElementById(mountId);

  add({ id, type, message, duration, autoClose });

  if (!mountPoint) {
    console.log("mountPoint not found");
    mountPoint = document.createElement("div");
    mountPoint.id = mountId;
    document.body.appendChild(mountPoint);
    mountPoint.attachShadow({ mode: "open" });
  }
};

export default toast;
