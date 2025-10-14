import macosData from "./macos.json";
import terminalData from "./terminal.json";
import type { AppShortcuts } from "./types";
import vscodeData from "./vscode.json";

export * from "./types";

// Cast JSON imports to the correct type
export const vscodeShortcuts = vscodeData as AppShortcuts;
export const terminalShortcuts = terminalData as AppShortcuts;
export const macosShortcuts = macosData as AppShortcuts;

// Export all shortcuts in order
export const allShortcuts: AppShortcuts[] = [
  vscodeShortcuts,
  terminalShortcuts,
  macosShortcuts,
];
