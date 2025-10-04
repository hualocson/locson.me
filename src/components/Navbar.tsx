"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Github, LightbulbIcon, Mail, NotebookPenIcon } from "lucide-react";

import ToggleThemeButton from "./ToggleThemeButton";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="grid w-full grid-cols-[auto_max-content] p-8">
      <div className="m-auto" />
      <div className="grid grid-flow-col place-items-center gap-4">
        {/* Navigation Links */}
        <Link
          href="/posts"
          className="text-muted-foreground hover:text-foreground flex items-center justify-center font-medium transition-colors duration-200"
        >
          <span className="hidden md:inline-block">Blog</span>
          <span className="inline-block md:hidden">
            <NotebookPenIcon className="size-4" />
          </span>
        </Link>
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-foreground flex items-center justify-center font-medium transition-colors duration-200"
        >
          <span className="hidden md:inline-block">Projects</span>
          <span className="inline-block md:hidden">
            <LightbulbIcon className="size-4" />
          </span>
        </Link>

        {/* Mail Icon */}
        <Link
          href="https://github.com/hualocson"
          className="text-muted-foreground hover:text-foreground p-1 transition-colors duration-200"
          aria-label="Github"
          title="Github"
        >
          <Github className="size-4" />
        </Link>
        <Link
          href="mailto:hualocson@gmail.com"
          className="text-muted-foreground hover:text-foreground p-1 transition-colors duration-200"
          aria-label="Email"
          title="Email"
        >
          <Mail className="size-4" />
        </Link>

        {/* Theme Toggle */}
        {mounted ? (
          <ToggleThemeButton />
        ) : (
          <span className="bg-muted/60 inline-flex size-8 rounded" />
        )}
      </div>
    </nav>
  );
}
