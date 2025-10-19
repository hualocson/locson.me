// client-agnostic registry (callable from client components)
import type { TCommand } from "../types";

export const navCommands = (routerPush: (path: string) => void): TCommand[] => [
  {
    id: "nav-home",
    title: "Go to Home",
    subtitle: "Return to the main page",
    keywords: ["home", "index", "main"],
    group: "Navigation",
    action: () => routerPush("/"),
  },
  {
    id: "nav-blog",
    title: "Open Blog",
    subtitle: "Browse all blog posts and articles",
    keywords: ["blog", "posts", "articles"],
    group: "Navigation",
    action: () => routerPush("/posts"),
  },
  {
    id: "nav-projects",
    title: "Open Projects",
    subtitle: "View my portfolio and projects",
    keywords: ["projects", "showcase"],
    group: "Navigation",
    action: () => routerPush("/projects"),
  },
];
