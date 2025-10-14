# Keyboard Shortcuts Data

This directory contains keyboard shortcuts organized by application in JSON format.

## Structure

```
shortcuts/
├── README.md          # This file
├── types.ts           # TypeScript type definitions
├── index.ts           # Exports all shortcuts
├── vscode.json        # VSCode shortcuts
├── chrome.json        # Chrome browser shortcuts
├── terminal.json      # Terminal/shell shortcuts
├── macos.json         # macOS system shortcuts
└── figma.json         # Figma design tool shortcuts
```

## Adding a New Application

1. Create a new JSON file (e.g., `notion.json`):

```json
{
  "app": "Notion",
  "icon": "BookOpen",
  "description": "Notion productivity tool shortcuts",
  "shortcuts": [
    {
      "keys": ["Cmd", "N"],
      "description": "Create new page",
      "category": "Pages"
    }
  ]
}
```

2. Import and export it in `index.ts`:

```typescript
import notionData from "./notion.json";

export const notionShortcuts = notionData as AppShortcuts;

export const allShortcuts: AppShortcuts[] = [
  vscodeShortcuts,
  chromeShortcuts,
  terminalShortcuts,
  macosShortcuts,
  figmaShortcuts,
  notionShortcuts, // Add here
];
```

That's it! The page will automatically display your new shortcuts.

## JSON Schema

### AppShortcuts

```typescript
{
  "app": string,              // Application name (displayed as section title)
  "icon": string,            // Optional: Lucide icon name
  "description": string,     // Optional: App description
  "shortcuts": Shortcut[]    // Array of shortcuts
}
```

### Shortcut

```typescript
{
  "keys": string[],          // Array of keys (e.g., ["Cmd", "Shift", "P"])
  "description": string,     // What the shortcut does
  "category": string         // Optional: Category for grouping
}
```

## Tips

- Use consistent key names: `Cmd`, `Ctrl`, `Shift`, `Alt`, `Option`
- Keep descriptions concise and action-oriented
- Group related shortcuts using the `category` field
- The order of apps in `allShortcuts` determines display order
- Use arrow symbols for special keys: `↑`, `↓`, `←`, `→`
