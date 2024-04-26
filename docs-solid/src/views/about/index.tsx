import { Button, ColorType, Toast } from "@nordstjerna/ui";
import { onMount } from "solid-js";

const AboutView = () => {
  const handleToast = (type: keyof typeof ColorType) => {
    switch (type) {
      case "success":
        Toast.success("Success");
        break;
      case "danger":
        Toast.danger("Danger");
        break;
      case "warning":
        Toast.warning("Warning");
        break;
      case "info":
        Toast.info("Hello Woaklsj dlkf akls sdlfkj asldkfj srld");
        break;
    }
  };

  return (
    <>
      <div class="mt8 flex flex-col gap10 items-center">
        <h1 class="text-center text-2xl text-[var(--color-primary)]">Toast</h1>
        <div class="flex justify-center gap4">
          <Button onClick={() => handleToast("info")}>Info</Button>
          <Button type="success" onClick={() => handleToast("success")}>
            Success
          </Button>
          <Button type="warning" onClick={() => handleToast("warning")}>
            Warning
          </Button>
          <Button type="danger" onClick={() => handleToast("danger")}>
            Danger
          </Button>
        </div>
        <div class="">
          <Toast.Item item={{ id: "1", content: "This is a success toast." }} />
          <Toast.Item
            item={{
              id: "2",
              type: "success",
              content: "This is a success toast.",
            }}
          />
          <Toast.Item
            item={{
              id: "3",
              type: "warning",
              content: "This is a warning toast.",
            }}
          />
          <Toast.Item
            item={{
              id: "4",
              type: "danger",
              content: "This is a danger toast.",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AboutView;
