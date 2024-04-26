import type { ParentProps } from "solid-js";
import { CommonProps } from "../../common/types";

interface FooterProps extends CommonProps, ParentProps {}

const Footer = (props: FooterProps) => {
  return (
    <>
      <footer class={`px4 py4 mt20 ${props.class}`}>{props.children}</footer>
    </>
  );
};

export default Footer;
