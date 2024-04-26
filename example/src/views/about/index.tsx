import { NButton, ColorType, NToast } from "~/nordstjerna";
import { onMount } from "solid-js";

const AboutView = () => {
  const handleToast = (type: keyof typeof ColorType) => {
    switch (type) {
      case "success":
        NToast.success("Success");
        break;
      case "danger":
        NToast.danger("Danger");
        break;
      case "warning":
        NToast.warning("Warning");
        break;
      case "info":
        NToast.info("Hello Woaklsj dlkf akls sdlfkj asldkfj srld");
        break;
    }
  };

  return (
    <>
      <div class="mt8 flex flex-col gap10 items-center">
        <h1 class="text-center text-2xl text-[var(--color-primary)]">Toast</h1>
        <div class="flex justify-center gap4">
          <NButton onClick={() => handleToast("info")}>Info</NButton>
          <NButton type="success" onClick={() => handleToast("success")}>
            Success
          </NButton>
          <NButton type="warning" onClick={() => handleToast("warning")}>
            Warning
          </NButton>
          <NButton type="danger" onClick={() => handleToast("danger")}>
            Danger
          </NButton>
        </div>
        <div class="">
          <NToast.Item item={{ id: "1", content: "This is a success toast." }} />
          <NToast.Item
            item={{
              id: "2",
              type: "success",
              content: "This is a success toast.",
            }}
          />
          <NToast.Item
            item={{
              id: "3",
              type: "warning",
              content: "This is a warning toast.",
            }}
          />
          <NToast.Item
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
