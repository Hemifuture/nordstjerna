import ToastItem, { ToastItemProps } from "./ToastItem";
import toast from "./toast";

const Toast = {
  Item: ToastItem,
  info: toast.bind(null, "info"),
  success: toast.bind(null, "success"),
  warning: toast.bind(null, "warning"),
  danger: toast.bind(null, "danger"),
};

export default Toast;
export type { ToastItemProps };
