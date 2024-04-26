import { JSXElement, createRoot, createSignal } from "solid-js";
import { ColorType } from "../../common/types";

interface ToastProps {
  id: string;
  type?: keyof typeof ColorType;
  content?: JSXElement;
  duration?: number;
  autoClose?: boolean;
}

const useListFn = createRoot(() => {
  const [list, setList] = createSignal<ToastProps[]>([]);

  const add = (toast: ToastProps) => {
    setList((prev) => [toast, ...prev]);
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
export type { ToastProps };
