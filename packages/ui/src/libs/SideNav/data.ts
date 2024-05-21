import { createSignal } from "solid-js";

const currentActiveKey = createSignal<string | null>(null);

export { currentActiveKey };
