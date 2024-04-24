interface CommonProps {
  id?: string;
  class?: string;
  style?: string;
}

enum ColorType {
  success = "success",
  danger = "danger",
  warning = "warning",
  info = "info",
}

export type { CommonProps, ColorType };
