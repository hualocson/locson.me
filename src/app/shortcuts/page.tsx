import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { allShortcuts } from "@/data/shortcuts";

import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";

import GroupIcons from "./components/GroupIcons";

const ArtPlum = dynamic(() => import("@/components/ArtPlum"));

export const metadata: Metadata = {
  title: "Keyboard Shortcuts - Loc Son",
  description:
    "Essential keyboard shortcuts for VSCode, Chrome, Terminal, macOS, and Figma. Quick reference guide for developers.",
};

export default function ShortcutsPage() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <ArtPlum />
      </div>
      <div className="mx-auto max-w-[65ch]">
        <div className="mb-8">
          <h1 className="slide-enter-50 mb-2 font-mono text-2xl font-semibold">
            Keyboard Shortcuts
          </h1>
          <p className="slide-enter-50 text-muted-foreground">
            Essential keyboard shortcuts I use daily, organized by application
          </p>
        </div>

        <div className="space-y-8">
          {allShortcuts.map((appData) => (
            <div key={appData.app} className="slide-enter-100">
              <div className="mb-3 flex items-center gap-3">
                <GroupIcons icon={appData.icon} />
                <h3 className="text-muted-foreground/70 shrink-0 text-xs leading-none font-bold tracking-widest uppercase">
                  {appData.app}
                </h3>
                <Separator className="flex-1" />
              </div>

              <div className="space-y-0">
                {appData.shortcuts.map((shortcut, index) => (
                  <div
                    key={`${appData.app}-${index}`}
                    className="group border-border/50 flex items-center justify-between gap-4 px-3 py-3 transition-colors last:border-b-0"
                  >
                    <span className="text-foreground/90 flex-1 text-sm">
                      {shortcut.description}
                    </span>
                    <KbdGroup className="shrink-0">
                      {shortcut.keys.map((key, keyIndex) => (
                        <Kbd key={`${key}-${keyIndex}`} className="text-xs">
                          {key}
                        </Kbd>
                      ))}
                    </KbdGroup>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
