"use client";

import * as React from "react";

import Link from "next/link";

import { MDXProvider, useMDXComponents } from "@mdx-js/react";
import { getMDXComponent } from "mdx-bundler/client";

import ListProjects from "../ListProjects";
import SubNav from "../SubNav";
import MagicLink from "./MagicLink";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const MDX_GLOBAL_CONFIG = {
  MdxJsReact: {
    useMDXComponents,
  },
};

export function MDXRenderer({ code }: { code: string }) {
  const Component = React.useMemo(
    () => getMDXComponent(code, MDX_GLOBAL_CONFIG),
    [code, MDX_GLOBAL_CONFIG]
  );

  return (
    <MDXProvider
      components={{
        MagicLink,
        SubNav,
        ListProjects,
        a: (props: LinkProps) => {
          const { href, ...rest } = props;
          if (!href) {
            return <a {...props} />;
          }
          return <Link href={href} {...rest} />;
        },
      }}
    >
      <Component />
    </MDXProvider>
  );
}
