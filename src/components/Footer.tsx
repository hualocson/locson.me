import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="prose slide-enter m-auto mt-16 mb-6 delay-[1200ms]">
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
  );
};

export default Footer;
