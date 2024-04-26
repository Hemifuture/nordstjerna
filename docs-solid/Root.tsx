import { Background, Card } from "@nordstjerna/ui";
import { ParentProps } from "solid-js";
import Nav from "~/components/Nav";

const RootLayout = (props: ParentProps) => {
  return (
    <>
      <Background />
      <div class="flex flex-col w-screen h-screen">
        <Nav />
        <div class="flex-1">{props.children}</div>
      </div>
    </>
  );
};

export default RootLayout;
