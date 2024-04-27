import Button from "../Button";
import useList, { ToastProps } from "./data";
import style from "./style.module.scss";

interface ToastItemProps {
  item: ToastProps;
}

const ToastItem = ({ item }: ToastItemProps) => {
  const { remove } = useList();

  return (
    <>
      <div class={`glass ${style.toast} ${style[item.type as string]}`}>
        <div class="max-w-xs break-words">{item.content}</div>
        <Button
          size="small"
          icon={<div class="i-ion-close w6 h6"></div>}
          onClick={() => remove(item.id)}
        />
      </div>
    </>
  );
};

export default ToastItem;
export type { ToastItemProps };
