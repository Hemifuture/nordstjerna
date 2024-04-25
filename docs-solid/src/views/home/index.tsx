import { Button } from "@nordstjerna/ui";

const HomeView = () => {
  return (
    <>
      <div class="mx-auto mt10">
        '<h1 class="text-[var(--primary-color)] text-xl mb4">Buttons</h1>
        <div class="flex gap2">
          <Button class="level-high">Normal</Button>
          <Button type="success">Success</Button>
          <Button type="warning">Warning</Button>
          <Button type="danger">Danger</Button>
          <Button
            class="level-high"
            icon={<div class="i-ion:information-circle w8 h8"></div>}
          ></Button>
          <Button href="https://baidu.com">Link</Button>
        </div>
      </div>
    </>
  );
};

export default HomeView;
