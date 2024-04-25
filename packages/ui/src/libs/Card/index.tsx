import { ParentProps } from "solid-js";

interface CardProps extends ParentProps {
  class?: string;
  level?: "low" | "medium" | "high";
}

const Card = (props: CardProps) => {
  return (
    <>
      <div class={`relative ${props.class}`}>
        <div
          class="absolute left-0 top-0 z-[-1] glass wfull hfull  rounded-xl"
          classList={{
            "level-low": props.level === "low",
            "level-medium": props.level === "medium",
            "level-high": props.level === "high",
          }}
        ></div>
        {props.children}
      </div>
    </>
  );
};

export default Card;
