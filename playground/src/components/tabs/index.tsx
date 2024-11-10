import {
  NSTabs,
  NSTabsContent,
  NSTabsList,
  NSTabsTrigger,
} from "@nordstjerna/ui";

const TabsView = () => {
  return (
    <>
      <div class="flex flex-col p-4 gap-4 w-[700px]">
        <div class="flex flex-col p-4 gap-4 w-[700px]">
          <h2 class="text-[var(--color-primary)] font-bold text-2xl">Tabs</h2>
          <NSTabs orientation="vertical">
            <NSTabsList>
              <NSTabsTrigger value="tab1">Tab 1</NSTabsTrigger>
              <NSTabsTrigger value="tab2">Tab 2</NSTabsTrigger>
              <NSTabsTrigger value="tab3">Tab 3</NSTabsTrigger>
            </NSTabsList>
            <NSTabsContent value="tab1">Tab 1 content</NSTabsContent>
            <NSTabsContent value="tab2">Tab 2 content</NSTabsContent>
            <NSTabsContent value="tab3">Tab 3 content</NSTabsContent>
          </NSTabs>
        </div>
        <div class="flex flex-col p-4 gap-4 w-[700px]">
          <h2 class="text-[var(--color-primary)] font-bold text-2xl">Tabs</h2>
          <NSTabs orientation="horizontal">
            <NSTabsList class="flex flex-col gap-2">
              <NSTabsTrigger value="tab1">Tab 1</NSTabsTrigger>
              <NSTabsTrigger value="tab2">Tab 2</NSTabsTrigger>
              <NSTabsTrigger value="tab3">Tab 3</NSTabsTrigger>
            </NSTabsList>
            <NSTabsContent value="tab1" class="flex-grow">Tab 1 content</NSTabsContent>
            <NSTabsContent value="tab2">Tab 2 content</NSTabsContent>
            <NSTabsContent value="tab3">Tab 3 content</NSTabsContent>
          </NSTabs>
        </div>
      </div>
    </>
  );
};

export default TabsView;
