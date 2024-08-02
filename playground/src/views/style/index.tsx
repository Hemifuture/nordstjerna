import "@nordstjerna/style";
import { NButton } from "~/nordstjerna";

const StyleView = () => {
  return (
    <>
      <div class=" p12 m4 flex flex-row gap-2 items-center">
        <div class="ns-glass rounded-md p4">asdf</div>
        <div class="ns-glass level-low rounded-md p4">asdf</div>
        <div class="ns-glass level-medium rounded-md p4">asdf</div>
        <div class="ns-glass level-high rounded-md p4">asdf</div>
        <NButton level="low">Button</NButton>
        <a href="#" class="link" style="font-size: 2rem;">
          Link
        </a>
        <div class="ns-border p2">边框</div>
        <div class="ns-border p2 ns-indicator bottom success">边框</div>
        <div class="ns-border py2 px3 ns-indicator left warning">边框</div>
        <div class="ns-border py2 px3 ns-indicator right danger">边框</div>
        <div class="ns-border p2 ns-indicator ns-indicator top disabled">边框</div>
      </div>
    </>
  );
};

export default StyleView;
