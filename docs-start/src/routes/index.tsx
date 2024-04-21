import { A } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import Counter from "~/components/Counter";
import { NButton, NToast } from "@nordstjerna/ui";
import { createSignal } from "solid-js";

export default function Home() {
  const [counter, setCounter] = createSignal(0);

  const handleClick = () => {
    console.log("click");
    NToast.info("Hello world!" + counter(), 7000, false);
    setCounter((prev) => prev + 1);
  };

  return (
    <main class="text-center mx-auto p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        <div class="flex justify-center items-center">
          <span class="mr-5">Hello</span>{" "}
          <img
            class="w-12 h-12"
            src="https://unocss.dev/logo.svg"
            alt="UnoCSS logo"
          />
          !
        </div>
      </h1>

      <div class="p8">
        <NButton type="success" onClick={handleClick}>
          Click me
        </NButton>
      </div>

      <Counter />
      <p class="mt-8">
        Visit{" "}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
      <p class="mt-2">
        Visit{" "}
        <a
          href="https://unocss.dev"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          unocss.dev
        </a>{" "}
        to learn how to style your app.
      </p>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{" "}
      </p>
    </main>
  );
}
