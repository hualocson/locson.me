"use client";

import React, { useCallback } from "react";

import { useRouter } from "next/navigation";

import { buildCommands } from "@/cmdk/commands";
import type { TCommand } from "@/cmdk/types";
import { useTheme } from "next-themes";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Kbd } from "@/components/ui/kbd";

const RECENTS_KEY = "cmdk_recents_v1";
const MAX_RECENTS = 8;

export default function CmdK() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [commands, setCommands] = React.useState<TCommand[]>([]);
  const [recents, setRecents] = React.useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(RECENTS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // runtime helpers
  const routerPush = (path: string) => router.push(path);
  const { setTheme, resolvedTheme } = useTheme();
  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme]);

  React.useEffect(() => {
    // build command registry with runtime helpers
    setCommands(buildCommands({ routerPush, toggleTheme }));
  }, [toggleTheme]);

  const saveRecent = (id: string) => {
    try {
      const next = [id, ...recents.filter((x) => x !== id)].slice(
        0,
        MAX_RECENTS
      );
      setRecents(next);
      localStorage.setItem(RECENTS_KEY, JSON.stringify(next));
    } catch (error) {
      console.log({ error });
    }
  };

  const execute = (cmd: TCommand) => {
    try {
      cmd.action();
      saveRecent(cmd.id);
    } catch (err) {
      console.error("cmdk: action failed", err);
    }
    setOpen(false);
  };

  // keyboard open/close
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // group commands by group name
  const grouped = commands.reduce<Record<string, TCommand[]>>((acc, cmd) => {
    const key = cmd.group ?? "Other";
    acc[key] ??= [];
    acc[key].push(cmd);
    return acc;
  }, {});

  return (
    <>
      {/* optional on-screen trigger */}
      <button
        aria-label="Open command palette"
        onClick={() => setOpen(true)}
        className="fixed right-6 bottom-6 z-50 rounded-full bg-slate-800 px-4 py-2 text-white shadow-lg"
      >
        ⌘K
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="scrollbar">
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(grouped).map(([groupName, items], groupIndex) => (
            <React.Fragment key={groupName}>
              <CommandGroup heading={groupName}>
                {items.map((cmd) => (
                  <CommandItem
                    key={cmd.id}
                    value={`${cmd.title} ${cmd.subtitle || ""}`}
                    onSelect={() => execute(cmd)}
                    className="flex cursor-pointer items-center justify-between rounded-xl"
                  >
                    <div className="flex flex-col">
                      <div className="text-sm font-medium">{cmd.title}</div>
                      {cmd.subtitle && (
                        <div className="text-muted-foreground text-xs">
                          {cmd.subtitle}
                        </div>
                      )}
                    </div>
                    {cmd.shortcut && <Kbd>{cmd.shortcut}</Kbd>}
                  </CommandItem>
                ))}
              </CommandGroup>
              {groupIndex < Object.keys(grouped).length - 1 && (
                <CommandSeparator />
              )}
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
