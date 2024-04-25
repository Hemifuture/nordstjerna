import { Button } from "@nordstjerna/ui";

const HomeView = () => {
  return (
    <>
      <div class="mx-auto mt10">
        <h1 class="text-[var(--color-primary)] text-xl mb8 text-center">
          Buttons
        </h1>
        <section>
          <h2 class="text-[var(--color-primary)] text-lg mt4 mb4 text-center">
            Level
          </h2>
          <div class="flex gap2 justify-center items-center">
            <Button level="low">Low</Button>
            <Button level="medium">Medium</Button>
            <Button level="high">High</Button>
          </div>
          <div class="flex gap2 justify-center items-center mt4">
            <Button
              level="low"
              icon={<div class="i-ion:information-circle w8 h8"></div>}
            ></Button>
            <Button
              level="medium"
              icon={<div class="i-ion:information-circle w8 h8"></div>}
            ></Button>
            <Button
              level="high"
              icon={<div class="i-ion:information-circle w8 h8"></div>}
            ></Button>
          </div>
        </section>
        <section class="mt8">
          <h2 class="text-[var(--color-primary)] text-lg mt4 mb4 text-center">
            Size
          </h2>
          <div class="flex gap2 justify-center items-center">
            <Button size="small">Small</Button>
            <Button size="default">Default</Button>
            <Button size="large">Large</Button>
          </div>
        </section>
        <section class="mt8">
          <h2 class="text-[var(--color-primary)] text-lg mt4 mb4 text-center">
            Type
          </h2>
          <div class="flex gap2 justify-center items-center">
            <Button>Normal</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="danger">Danger</Button>
            <Button
              level="high"
              icon={<div class="i-ion:camera w8 h8"></div>}
            ></Button>
            <Button>
              <div class="i-ion:information-circle w8 h8"></div>
            </Button>
            <Button href="https://baidu.com">Link</Button>
          </div>
          <div class="flex gap2 justify-center items-center mt4">
            <Button
              icon={<div class="i-ion:information-circle w8 h8"></div>}
            ></Button>
            <Button
              icon={<div class="i-ion:information-circle w8 h8"></div>}
              type="success"
            ></Button>
            <Button
              icon={<div class="i-ion:information-circle w8 h8"></div>}
              type="warning"
            ></Button>
            <Button
              icon={<div class="i-ion:information-circle w8 h8"></div>}
              type="danger"
            ></Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeView;
