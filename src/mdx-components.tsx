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
    <img
      className={cn(
        className,
        "mx-0 my-[2.6em] w-full scale-105 rounded-lg shadow"
      )}
      {...props}
    />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
