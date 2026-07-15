import React from "react";

import { cn } from "@/lib/utils";

import FooterNav from "./FooterNav";

interface IFooterProps {
  isFullWidth?: boolean;
}

const Footer: React.FC<IFooterProps> = ({ isFullWidth = false }) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <FooterNav isFullWidth={isFullWidth} />
      <footer
        className={cn(
          "prose slide-enter m-auto my-6 px-7 delay-[1200ms]",
          isFullWidth && "md:px-0"
        )}
      >
        <div className="text-muted-foreground flex items-center justify-between text-sm">
          <span>© {currentYear} Loc Son</span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/hualocson"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:hualocson@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
