export type KeyboardShortcut = {
  keys: string[];
  description: string;
  category?: string;
};

export type AppShortcuts = {
  app: string;
  icon?: string;
  description?: string;
  shortcuts: KeyboardShortcut[];
};
