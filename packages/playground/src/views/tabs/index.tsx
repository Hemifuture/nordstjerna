import {
  NSTabs,
  NSTabsContent,
  NSTabsList,
  NSTabsTrigger,
} from "../../../../ui/src";

const TabsView = () => {
  return (
    <>
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
    </>
  );
};

export default TabsView;
