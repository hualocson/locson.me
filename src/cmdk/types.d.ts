export type TCommand = {
  id: string;
  title: string;
  subtitle?: string;
  keywords?: string[];
  group?: string;
  shortcut?: string;
  // action must be serializable/callable only in FE context
  action: () => void;
};
