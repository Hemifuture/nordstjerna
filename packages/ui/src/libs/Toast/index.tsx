import toast from "./toast";

const Toast = {
  info: toast.bind(null, "info"),
  success: toast.bind(null, "success"),
  warning: toast.bind(null, "warning"),
  error: toast.bind(null, "error"),
};

export default Toast;
