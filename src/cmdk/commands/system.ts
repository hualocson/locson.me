import type { TCommand } from "../types";

export const systemCommands = (toggleTheme: () => void): TCommand[] => [
  {
    id: "sys-toggle-theme",
    title: "Toggle theme",
    subtitle: "Switch between dark and light mode",
    keywords: ["theme", "dark", "light"],
    group: "System",
    action: toggleTheme,
  },
  {
    id: "sys-clear-cache",
    title: "Clear site cache",
    subtitle: "Reset saved preferences and reload page",
    keywords: ["clear", "cache", "localstorage"],
    group: "System",
    action: () => {
      localStorage.removeItem("cmdk_recents_v1");
      location.reload();
    },
  },
];
