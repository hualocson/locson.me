"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ToggleThemeButton() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-muted-foreground hover:text-foreground cursor-pointer rounded-md transition-colors duration-200"
      aria-label="Toggle theme"
      title="Toggle Color Schema"
    >
      {theme === "light" ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </button>
  );
}
export default ToggleThemeButton;
