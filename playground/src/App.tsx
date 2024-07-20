import { createEffect, onMount, type Component } from "solid-js";

import { Route, Router } from "@solidjs/router";
import Nav from "./components/TopNav";
import HomeView from "./views/home";
import RootLayout from "./layouts/Root";
import AboutView from "./views/about";
import { Theme, app } from "./models/app";
import DemoLayout from "./layouts/Demo";
import TooltipView from "./views/tooltip";

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

  return (
    <>
      <Router>
        <Route path="/" component={RootLayout}>
          <Route path="/" component={DemoLayout}>
            <Route path="/" component={HomeView} />
            <Route path="/about" component={AboutView} />
            <Route path="/tooltip" component={TooltipView} />
          </Route>
        </Route>
      </Router>
    </>
  );
};

export default App;
