import { Background } from "@nordstjerna/ui";
import { ParentProps } from "solid-js";
import Nav from "~/components/Nav";

const RootLayout = (props: ParentProps) => {
  return (
    <>
      <Background />
      <div class="flex flex-col w-screen h-screen">
        <Nav />
        {props.children}
      </div>
    </>
  );
};

export default RootLayout;
