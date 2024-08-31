import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import * as TabsPrimitive from "@kobalte/core/tabs";
import { splitProps, ValidComponent } from "solid-js";
import style from "./style.module.css";
import Card from "../Card";

// const Tabs = TabsPrimitive.Root;
type TabsProps<T extends ValidComponent = "div"> =
  TabsPrimitive.TabsRootProps<T> & {
    class?: string | undefined;
  };
const Tabs = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsProps<T>>
) => {
  const [local, others] = splitProps(props as TabsProps, ["class"]);
  return (
    <TabsPrimitive.Root class={`${style.tabs} ${local.class}`} {...others} />
  );
};

type TabsListProps<T extends ValidComponent = "div"> =
  TabsPrimitive.TabsListProps<T> & {
    class?: string | undefined;
  };

const TabsList = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsListProps<T>>
) => {
  const [local, others] = splitProps(props as TabsListProps, ["class"]);
  return (
    <TabsPrimitive.List
      class={`${style["tabs-list"]} gap-2 items-center rounded-md ${local.class}`}
      {...others}
    />
  );
};

type TabsTriggerProps<T extends ValidComponent = "button"> =
  TabsPrimitive.TabsTriggerProps<T> & {
    class?: string | undefined;
  };

const TabsTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, TabsTriggerProps<T>>
) => {
  const [local, others] = splitProps(props as TabsTriggerProps, ["class"]);
  return (
    <TabsPrimitive.Trigger
      // as={Button}
      class={`ns-glass ns-border rounded-md px-3 py-1 ns-indicator ${style.trigger} ${local.class}`}
      {...others}
    />
  );
};

type TabsContentProps<T extends ValidComponent = "div"> =
  TabsPrimitive.TabsContentProps<T> & {
    class?: string | undefined;
  };

const TabsContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsContentProps<T>>
) => {
  const [local, others] = splitProps(props as TabsContentProps, ["class"]);
  return (
    <TabsPrimitive.Content
      as={Card}
      class={`p-4 flex-grow ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${local.class}`}
      {...others}
    />
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
