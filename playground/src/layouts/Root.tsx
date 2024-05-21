import { NBackground } from "~/nordstjerna";
import { ParentProps } from "solid-js";
import TopNav from "~/components/TopNav";

const RootLayout = (props: ParentProps) => {
  return (
    <>
      <NBackground />
      <div class="flex flex-col wfull hfull">
        <TopNav />
        <div class="flex-1">{props.children}</div>
      </div>
    </>
  );
};

export default RootLayout;
