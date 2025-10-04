"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ToggleThemeButton() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      style={
        {
          "--border-width": "1px",
        } as React.CSSProperties
      }
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "text-muted-foreground hover:text-foreground glass-card relative cursor-pointer rounded-md p-2 transition-all duration-200 ease-in-out active:scale-[0.97] active:brightness-110"
      )}
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
