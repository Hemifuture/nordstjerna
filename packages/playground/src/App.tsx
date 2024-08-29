import { createEffect, lazy, onMount, type Component } from "solid-js";
import { Route, RouteDefinition, Router } from "@solidjs/router";
import { Theme, app } from "./models/app";

const App: Component = () => {
  createEffect(() => {
    if (app.theme === Theme.Dark) {
      // document.body.classList.add("dark");
      document.body.dataset.theme = "dark";
    } else {
      // document.body.classList.remove("dark");
      document.body.dataset.theme = "light";
    }
  });

  const routes: RouteDefinition[] = [
    {
      path: "/nordstjerna",
      component: lazy(() => import("./layouts/Root")),
      children: [
        {
          path: "/",
          component: lazy(() => import("./layouts/Demo")),
          children: [
            { path: "/", component: lazy(() => import("./views/home")) },
            { path: "/about", component: lazy(() => import("./views/about")) },
            { path: "/tooltip", component: lazy(() => import("./views/tooltip")) },
            { path: "/tabs", component: lazy(() => import("./views/tabs")) },
            { path: "/style", component: lazy(() => import("./views/style")) },
          ],
        },
      ],
    },
  ];

  return <Router>{routes}</Router >;
};

export default App;
