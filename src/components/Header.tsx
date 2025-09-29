"use client";

import Link from "next/link";

import useWindowScroll from "@/app/hooks/useWindownScroll";
import { cn } from "@/lib/utils";
import { ArrowUpIcon } from "lucide-react";

import Navbar from "./Navbar";
import NewLogo from "./NewLogo";

const Header = () => {
  const { scrollPosition, scrollTo } = useWindowScroll();
  return (
    <header className="z-40">
      <Link
        className="absolute m-5 flex h-12 w-12 items-center justify-center outline-none select-none xl:fixed"
        href={"/"}
      >
        <NewLogo />
      </Link>
      <button
        title="Scroll to top"
        onClick={() => scrollTo(0, 0)}
        className={cn(
          "fixed right-3 bottom-3 z-50 flex size-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:bg-[#8883] hover:opacity-100 active:bg-[#8882] active:opacity-100 print:hidden",
          scrollPosition.y > 300
            ? "opacity-30"
            : "pointer-events-none opacity-0"
        )}
      >
        <ArrowUpIcon className="size-5" />
      </button>
      <Navbar />
    </header>
  );
};

export default Header;
