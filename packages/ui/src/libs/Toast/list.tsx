import { JSXElement, createRoot, createSignal } from "solid-js";

enum ToastType {
  info = "info",
  success = "success",
  warning = "warning",
  error = "error",
}

interface ToastProps {
  id: string;
  type: keyof typeof ToastType;
  message?: string;
  duration?: number;
  autoClose?: boolean;
}

const useListFn = createRoot(() => {
  const [list, setList] = createSignal<ToastProps[]>([]);

  const add = (toast: ToastProps) => {
    setList((prev) => [...prev, toast]);
  };

  const remove = (id: string) => {
    setList((prev) => prev.filter((toast) => toast.id !== id));
  };

  return { list, add, remove };
});

const useList = () => {
  return useListFn;
};

export default useList;
export type { ToastProps, ToastType };
