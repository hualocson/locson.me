import Fuse, { type IFuseOptions } from "fuse.js";

import type { TCommand } from "./types";

const fuseOptions: IFuseOptions<TCommand> = {
  keys: ["title", "subtitle", "keywords", "group"],
  threshold: 0.35,
  ignoreLocation: true,
};

export const createFuse = (commands: TCommand[]) =>
  new Fuse(commands, fuseOptions);
