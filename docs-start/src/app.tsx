import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import { NBackground } from "@nordstjerna/ui";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <NBackground />
          <Nav />
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
