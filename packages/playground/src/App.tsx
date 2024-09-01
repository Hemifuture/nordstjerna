import { createEffect, lazy, onMount, type Component } from "solid-js";
import { Route, RouteDefinition, Router } from "@solidjs/router";
import { Theme, app } from "./models/app";

const App: Component = () => {
  createEffect(() => {
    if (app.theme === Theme.Dark) {
      document.body.dataset.theme = "dark";
    } else {
      document.body.dataset.theme = "light";
    }
  });

  const routes: RouteDefinition[] = [
    {
      path: "/nordstjerna",
      component: lazy(() => import("./layouts/Home")),
      children: [
        { path: "/", component: lazy(() => import("./view/home")) },
        { path: "/about", component: lazy(() => import("./view/about")) },
        { path: "/style", component: lazy(() => import("./view/style")) },
        {
          path: "/components",
          children: [
            { path: "/button", component: lazy(() => import("./components/button")) },
            { path: "/link", component: lazy(() => import("./components/link")) },
            { path: "/tabs", component: lazy(() => import("./components/tabs")) },
            { path: "/toast", component: lazy(() => import("./components/toast")) },
            { path: "/tooltip", component: lazy(() => import("./components/tooltip")) },
          ],
        },
        { path: "/tooltip", component: lazy(() => import("./components/tooltip")) },
      ],
    },
  ];

  return <Router>{routes}</Router >;
};

export default App;
