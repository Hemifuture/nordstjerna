import { A } from "@solidjs/router";
import { NButton, NCard } from "~/nordstjerna";

const HomeView = () => {
  return (
    <>
      <div class="mx-auto mt10">
        <h1 class="text-[var(--color-primary)] text-xl mb8 text-center">
          NButtons
        </h1>
        <section>
          <h2 class="text-[var(--color-primary)] text-lg mt4 mb4 text-center">
            Level
          </h2>
          <div class="flex gap2 justify-center items-center">
            <NButton>None</NButton>
            <NButton level="low">Low</NButton>
            <NButton level="medium">Medium</NButton>
            <NButton level="high">High</NButton>
          </div>
          <div class="flex gap2 justify-center items-center mt4">
            <NButton
              level="low"
              icon={<div class="i-ion:information-circle w8 h8"></div>}
            ></NButton>
            <NButton
              level="medium"
              icon={<div class="i-ion:information-circle w8 h8"></div>}
            ></NButton>
            <NButton
              level="high"
              icon={<div class="i-ion:information-circle w8 h8"></div>}
            ></NButton>
          </div>
        </section>
        <section class="mt8">
          <h2 class="text-[var(--color-primary)] text-lg mt4 mb4 text-center">
            Size
          </h2>
          <div class="flex gap2 justify-center items-center">
            <NButton size="small">Small</NButton>
            <NButton size="default">Default</NButton>
            <NButton size="large">Large</NButton>
          </div>
        </section>
        <section class="mt8">
          <h2 class="text-[var(--color-primary)] text-lg mt4 mb4 text-center">
            Type
          </h2>
          <div class="flex gap2 justify-center items-center">
            <NButton>Normal</NButton>
            <NButton type="success">Success</NButton>
            <NButton type="warning">Warning</NButton>
            <NButton type="danger">Danger</NButton>
            <NButton
              level="high"
              icon={<div class="i-ion:camera w8 h8"></div>}
            ></NButton>
            <NButton>
              <div class="i-ion:information-circle w8 h8"></div>
            </NButton>
            <NButton href="https://baidu.com">Link</NButton>
          </div>
          <div class="flex gap2 justify-center items-center mt4">
            <NButton
              icon={<div class="i-ion:information-circle w8 h8"></div>}
            ></NButton>
            <NButton
              icon={<div class="i-ion:information-circle w8 h8"></div>}
              type="success"
            ></NButton>
            <NButton
              icon={<div class="i-ion:information-circle w8 h8"></div>}
              type="warning"
            ></NButton>
            <NButton
              icon={<div class="i-ion:information-circle w8 h8"></div>}
              type="danger"
            ></NButton>
          </div>
        </section>
        <section class="px8">
          <NCard level="high" class="p4">
            <h1>alksdjf</h1>
            <NButton>None</NButton>
            <div>
              <NCard level="high" class="p4">
                <h1>alksdjf</h1>
                <NButton>None</NButton>
              </NCard>
            </div>
          </NCard>
        </section>
      </div>
    </>
  );
};

export default HomeView;
