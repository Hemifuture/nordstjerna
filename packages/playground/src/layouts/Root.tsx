import { NBackground } from "@nordstjerna/ui";
import { ParentProps } from "solid-js";
import TopNav from "~/components/TopNav";

const RootLayout = (props: ParentProps) => {
  return (
    <>
      <NBackground />
      {/* <NStarfieldBackground /> */}
      <div class="flex flex-col wfull hfull">
        <TopNav />
        <div class="flex-1">{props.children}</div>
      </div>
    </>
  );
};

export default RootLayout;
