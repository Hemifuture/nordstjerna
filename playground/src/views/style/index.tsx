import "@nordstjerna/style";
import { NButton } from "~/nordstjerna";

const StyleView = () => {
  return (
    <>
      <div class=" p12 m4 flex flex-row gap-2">
      <div class="ns-glass ns-level-none rounded-md p4">asdf</div>
      <div class="ns-glass ns-level-low rounded-md p4">asdf</div>
        <div class="ns-glass ns-level-medium rounded-md p4">asdf</div>
        <div class="ns-glass ns-level-high rounded-md p4">asdf</div>
        <NButton level="low">Button</NButton>
        <a href="#" class="link" style="font-size: 4rem;">Link</a>
      </div>
    </>
  );
};

export default StyleView;
