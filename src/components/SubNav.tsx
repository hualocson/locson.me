"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const SubNav: React.FC = () => {
  const pathname = usePathname();

  const inactiveStyle = "opacity-20 hover:opacity-50";
  const activeStyle = "opacity-100 underline";

  return (
    <div className="prose m-auto mb-8 select-none">
      {/* Navigation */}
      <div className="mb-0 flex flex-col flex-wrap gap-1 text-3xl sm:flex-row sm:gap-3">
        <Link
          href="/posts"
          className={cn(
            "border-none",
            pathname === "/posts" ? activeStyle : inactiveStyle
          )}
        >
          Blog
        </Link>
        {/* <Link
          href="/notes"
          className={cn(
            "border-none",
            pathname === "/notes" ? activeStyle : inactiveStyle
          )}
        >
          Notes
        </Link> */}
      </div>
    </div>
  );
};

export default SubNav;
