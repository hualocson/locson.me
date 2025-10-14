"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import {
  Github,
  Keyboard,
  LightbulbIcon,
  Mail,
  NotebookPenIcon,
} from "lucide-react";

import ToggleThemeButton from "./ToggleThemeButton";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="grid w-full grid-cols-[auto_max-content] p-8">
      <div className="m-auto" />
      <div className="grid grid-flow-col place-items-center gap-1 md:gap-4">
        {/* Navigation Links */}
        <Link
          href="/posts"
          className="text-muted-foreground hover:text-foreground md:bg-background flex items-center justify-center font-medium transition-colors duration-200 md:rounded-full md:px-2"
        >
          <span className="hidden md:inline-block">Blog</span>
          <span className="glass-card active:text-foreground flex size-8 items-center justify-center transition-all duration-150 active:scale-[0.96] md:hidden">
            <NotebookPenIcon className="size-4" />
          </span>
        </Link>
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-foreground md:bg-background flex items-center justify-center font-medium transition-colors duration-200 md:rounded-full md:px-2"
        >
          <span className="hidden md:inline-block">Projects</span>
          <span className="glass-card active:text-foreground flex size-8 items-center justify-center transition-all duration-150 active:scale-[0.96] md:hidden">
            <LightbulbIcon className="size-4" />
          </span>
        </Link>
        <Link
          href="/shortcuts"
          className="text-muted-foreground hover:text-foreground md:bg-background flex items-center justify-center font-medium transition-colors duration-200 md:rounded-full md:px-2"
        >
          <span className="hidden md:inline-block">Shortcuts</span>
          <span className="glass-card active:text-foreground flex size-8 items-center justify-center transition-all duration-150 active:scale-[0.96] md:hidden">
            <Keyboard className="size-4" />
          </span>
        </Link>

        <div className="glass-card grid grid-flow-col place-items-center gap-1 px-2 [&_a]:relative">
          {/* Mail Icon */}
          <Link
            href="https://github.com/hualocson"
            className="text-muted-foreground hover:text-foreground flex size-8 items-center justify-center transition-colors duration-200"
            aria-label="Github"
            title="Github"
          >
            <Github className="size-4" />
          </Link>
          <Link
            href="mailto:hualocson@gmail.com"
            className="text-muted-foreground hover:text-foreground flex size-8 items-center justify-center transition-colors duration-200"
            aria-label="Email"
            title="Email"
          >
            <Mail className="size-4" />
          </Link>

          {/* Theme Toggle */}
          {mounted ? (
            <ToggleThemeButton />
          ) : (
            <span className="inline-flex size-8 rounded" />
          )}
        </div>
      </div>
    </nav>
  );
}
