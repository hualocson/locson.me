import type { TCommand } from "../types";
import { navCommands } from "./navigation";
import { systemCommands } from "./system";

/**
 * Build commands list in a single place. This function is called inside the client
 * CmdK component so you can pass runtime helpers (router, toggleTheme).
 */
export const buildCommands = (opts: {
  routerPush: (path: string) => void;
  toggleTheme: () => void;
}): TCommand[] => {
  return [...navCommands(opts.routerPush), ...systemCommands(opts.toggleTheme)];
};
