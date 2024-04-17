import { createSignal } from "solid-js";
import style from "./style.module.scss";

function NButton() {
  const [count, setCount] = createSignal(0);
  const doubleCount = () => count() * 2;

  console.log("The body of the function runs once...");

  return (
    <>
      <button class={style.button} onClick={() => setCount((c) => c + 1)}>
        {doubleCount()} {33323123}
      </button>
    </>
  );
}

export default NButton;
