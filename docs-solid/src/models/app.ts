import { createStore } from "solid-js/store";

enum Theme {
  Light = "light",
  Dark = "dark",
}

interface Site {
  title: string;
  description: string;
  motto: string;
}

interface App {
  theme: Theme;
  site: Site;
  toggleTheme: () => void;
}

const [app, setApp] = createStore<App>({
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? Theme.Dark
    : Theme.Light,
  site: {
    title: "Stjernestøv",
    description: "A Full-stack <%= Developer %>.",
    motto: "Programme A Better World.",
  },
  toggleTheme: () => {
    setApp("theme", app.theme === Theme.Light ? Theme.Dark : Theme.Light);
  },
});

export { app, setApp, Theme };
