import { customElement } from "solid-element";
import Button from ".";

const registerButton = () => {
  customElement("ns-button", Button);
};

const getInitialProps = () => {
  return {
    // type: "primary",
  };
};

export default registerButton;

// Component
