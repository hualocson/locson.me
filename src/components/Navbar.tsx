"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Mail } from "lucide-react";

import ToggleThemeButton from "./ToggleThemeButton";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="grid w-full grid-cols-[auto_max-content] p-8">
      <div className="m-auto" />
      <div className="grid grid-flow-col place-items-center gap-5">
        {/* Navigation Links */}
        <Link
          href="/posts"
          className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
        >
          Blog
        </Link>
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
        >
          Projects
        </Link>

        {/* Mail and theme toggle */}
        {/* Mail Icon */}
        <a
          href="mailto:hualocson@gmail.com"
          className="text-muted-foreground hover:text-foreground p-1 transition-colors duration-200"
          aria-label="Email"
        >
          <Mail className="size-5" />
        </a>

        {/* Theme Toggle */}
        {mounted ? (
          <ToggleThemeButton />
        ) : (
          <span className="bg-muted/60 inline-flex size-5 rounded" />
        )}
      </div>
    </nav>
  );
}
