"use client";

import React, { FC, PropsWithChildren, useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import formatDate from "@/lib/format-date";
import { cn } from "@/lib/utils";
import { useLayoutTransition } from "@/providers/TransitionProvider";

import ArtBackground from "./ArtBackground";
import BlurComponent from "./BlurComponent";
import Footer from "./Footer";
import MDXRenderer from "./markdown/MDXRenderer";

interface IPostWrapperProps {
  frontmatter: Frontmatter;
  code: string;
}

const PostWrapper: FC<PropsWithChildren<IPostWrapperProps>> = ({
  frontmatter,
  children,
  code,
}) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { finished } = useLayoutTransition();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <BlurComponent />
      {/* Art Component */}
      {mounted && (
        <div className="pointer-events-none fixed inset-0 -z-10">
          <ArtBackground art={frontmatter.art} />
        </div>
      )}

      {/* Header */}
      {(frontmatter.display ?? frontmatter.title) && (
        <div
          data-finished={finished}
          className={cn(
            finished ? "opacity-100" : "opacity-0",
            "prose slide-enter mx-auto mb-8 px-7",
            frontmatter.wrapperClass
          )}
        >
          <h1 className="slide-enter-50">
            {frontmatter.display ?? frontmatter.title}
          </h1>

          {frontmatter.date && (
            <p className="slide-enter-50 !-mt-5 opacity-50">
              {formatDate(frontmatter.date, false)}
              {frontmatter.duration && <span> · {frontmatter.duration}</span>}
            </p>
          )}

          {frontmatter.place && (
            <p className="!-mt-4">
              <span className="opacity-50">at </span>
              {frontmatter.placeLink ? (
                <a
                  href={frontmatter.placeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {frontmatter.place}
                </a>
              ) : (
                <span className="font-bold">{frontmatter.place}</span>
              )}
            </p>
          )}

          {frontmatter.subtitle && (
            <p className="!-mt-6 italic opacity-50">{frontmatter.subtitle}</p>
          )}

          {frontmatter.draft && (
            <div className="border-l-4 border-orange-400 bg-orange-100 px-4 py-2 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
              This is a draft post, the content may be incomplete.
            </div>
          )}
        </div>
      )}

      {/* Article Content */}
      <article
        style={
          {
            "--main-padding": "3rem",
            "--footer": "70px",
            "--page-header": !!(frontmatter.display ?? frontmatter.title)
              ? "96px"
              : 0,
            "--page-footer-nav": pathname !== "/" ? "20px" : 0,
          } as React.CSSProperties
        }
        className={cn(
          frontmatter.fixedScreen &&
            "md:h-[calc(100svh-var(--footer)-var(--page-header)-var(--page-footer-nav)-var(--main-padding))]"
        )}
      >
        <div
          data-finished={finished}
          className={cn(
            finished ? "opacity-100" : "opacity-0",
            "prose slide-enter-content m-auto px-7",
            frontmatter.bodyClass,
            frontmatter.fullWidth && "md:px-0"
          )}
        >
          <MDXRenderer code={code} />
          {children}
        </div>
      </article>
      {!frontmatter.hideFooter && (
        <Footer isFullWidth={frontmatter.fullWidth} />
      )}
    </>
  );
};

export default PostWrapper;
