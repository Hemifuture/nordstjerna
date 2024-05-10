import { NBackground } from "~/nordstjerna";
import { ParentProps } from "solid-js";
import Nav from "~/components/Nav";

const RootLayout = (props: ParentProps) => {
  return (
    <>
      <NBackground />
      <div class="flex flex-col wfull hfull">
        <Nav />
        <div class="flex-1">{props.children}</div>
      </div>
    </>
  );
};

export default RootLayout;
