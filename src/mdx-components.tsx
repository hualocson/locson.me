import Link from "next/link";

import type { MDXComponents } from "mdx/types";

import ListProjects from "./components/ListProjects";
import SubNav from "./components/SubNav";
import MagicLink from "./components/markdown/MagicLink";
import { cn } from "./lib/utils";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const components = {
  MagicLink,
  SubNav,
  ListProjects,
  a: (props: LinkProps) => {
    const { href, ...rest } = props;
    if (!href) {
      return <a {...rest} />;
    }
    return <Link href={href} {...rest} />;
  },
  img: ({ className, ...props }) => (
    <div className="relative rounded-xl">
      <img
        className={cn(
          className,
          "mx-0 my-[2.6em] w-full scale-105 rounded-[inherit] shadow"
        )}
        {...props}
      />
      <div className="pointer-events-none absolute inset-0 scale-105 rounded-[inherit] ring-1 ring-black/10 ring-inset dark:ring-white/10" />
    </div>
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
