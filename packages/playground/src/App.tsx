import { createEffect, lazy, onMount, type Component } from "solid-js";

import { Route, RouteDefinition, Router } from "@solidjs/router";
import Nav from "./components/TopNav";
import HomeView from "./views/home";
import RootLayout from "./layouts/Root";
import AboutView from "./views/about";
import { Theme, app } from "./models/app";
import DemoLayout from "./layouts/Demo";
import TooltipView from "./views/tooltip";
import StyleView from "./views/style";

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
      path: "/",
      component: lazy(() => import("./layouts/Root")),
      children: [
        {
          path: "/",
          component: lazy(() => import("./layouts/Demo")),
          children: [
            { path: "/", component: lazy(() => import("./views/home")) },
            { path: "/about", component: lazy(() => import("./views/about")) },
            {
              path: "/tooltip",
              component: lazy(() => import("./views/tooltip")),
            },
            { path: "/style", component: lazy(() => import("./views/style")) },
          ],
        },
      ],
    },
  ];

  // return <Router>{routes}</Router>;
  return (
    <Router base="/nordstjerna">
      <Route path="/" component={lazy(() => import("./layouts/Root"))}>
        <Route path="/" component={lazy(() => import("./layouts/Demo"))}>
          <Route path="/" component={lazy(() => import("./views/home"))} />
          <Route
            path="/about"
            component={lazy(() => import("./views/about"))}
          />
          <Route
            path="/tooltip"
            component={lazy(() => import("./views/tooltip"))}
          />
          <Route
            path="/style"
            component={lazy(() => import("./views/style"))}
          />
        </Route>
      </Route>
    </Router>
  );
};

export default App;
