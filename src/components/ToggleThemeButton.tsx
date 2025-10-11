"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";

function ToggleThemeButton() {
  const ref = useRef<HTMLButtonElement>(null);

  const { theme, setTheme } = useTheme();

  const toggleDarkMode = async (isDarkMode: boolean) => {
    /**
     * Return early if View Transition API is not supported
     * or user prefers reduced motion
     */
    if (
      !ref.current ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(isDarkMode ? "dark" : "light");
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(isDarkMode ? "dark" : "light");
      });
    }).ready;

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <button
      ref={ref}
      onClick={() => toggleDarkMode(theme === "dark" ? false : true)}
      className={cn(
        "text-muted-foreground hover:text-foreground relative cursor-pointer rounded-md p-2 transition-all duration-200 ease-in-out active:scale-[0.97] active:brightness-110"
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
