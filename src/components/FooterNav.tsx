"use client";

import { FC } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface IFooterNavProps {
  isFullWidth?: boolean;
}

const FooterNav: FC<IFooterNavProps> = ({ isFullWidth = false }) => {
  const pathname = usePathname();

  const parentPath = pathname.split("/").slice(0, -1).join("/") || "/";
  return (
    pathname !== "/" && (
      <div
        className={cn(
          "prose slide-enter-content mx-auto mt-8 px-7 print:hidden",
          isFullWidth && "md:px-0"
        )}
      >
        <span className="font-mono opacity-50">&gt; </span>
        <Link href={parentPath}>
          <span className="font-mono opacity-50 hover:opacity-75">cd ..</span>
        </Link>
      </div>
    )
  );
};

export default FooterNav;
