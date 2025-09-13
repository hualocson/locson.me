"use client";

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";

import formatDate from "@/lib/format-date";
import { cn } from "@/lib/utils";

import { MDXRenderer } from "./markdown/MDXRenderer";

// Dynamically import art components
const ArtDots = dynamic(() => import("./ArtDots"), { ssr: false });
const ArtPlum = dynamic(() => import("./ArtPlum"), { ssr: false });

interface PostWrapperProps {
  frontmatter: Frontmatter;
  code: string;
}

export default function PostWrapper({ frontmatter, code }: PostWrapperProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const parentPath = pathname.split("/").slice(0, -1).join("/") || "/";

  // Simple art component selection
  const getArtComponent = () => {
    if (!mounted) {
      return null;
    }

    if (frontmatter.art === "plum") {
      return <ArtPlum />;
    }
    if (frontmatter.art === "dots") {
      return <ArtDots />;
    }
    if (frontmatter.art === "random") {
      return Math.random() > 0.5 ? <ArtPlum /> : <ArtDots />;
    }
    return null;
  };

  return (
    <>
      {/* Art Component */}
      {mounted && (
        <div className="pointer-events-none fixed inset-0 -z-10">
          {getArtComponent()}
        </div>
      )}

      {/* Header */}
      {(frontmatter.display ?? frontmatter.title) && (
        <div className={cn("prose mx-auto mb-8", frontmatter.wrapperClass)}>
          <h1 className="mb-0">{frontmatter.display ?? frontmatter.title}</h1>

          {frontmatter.date && (
            <p className="!-mt-6 opacity-50">
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
      <article className={cn(frontmatter.class)}>
        <div className="prose slide-enter-content m-auto">
          <MDXRenderer code={code} />
        </div>
      </article>

      {/* Footer */}
      {pathname !== "/" && (
        <div className="prose slide-enter-content mx-auto mt-8 mb-8 print:hidden">
          <span className="font-mono opacity-50">&gt; </span>
          <Link
            href={parentPath}
            className="font-mono opacity-50 hover:opacity-75"
          >
            cd ..
          </Link>
        </div>
      )}
    </>
  );
}
