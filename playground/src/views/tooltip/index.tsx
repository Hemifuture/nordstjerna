import { NTooltip } from "../../../../packages/ui/src";

const TooltipView = () => {
  return (
    <>
      <div class="mx-auto mt10">
        <h1 class="text-[var(--color-primary)] text-xl mb8 text-center">
          NTooltips
        </h1>
        <div>
          <NTooltip>Hello?</NTooltip>
        </div>
      </div>
    </>
  );
};

export default TooltipView;
