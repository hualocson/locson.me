"use client";

import * as React from "react";
import * as runtime from "react/jsx-runtime";

import { useMDXComponents } from "@/mdx-components";
import { run } from "@mdx-js/mdx";
import { MDXModule } from "mdx/types";

function MDXRenderer({ code }: { code: string }) {
  const [mdxModule, setMdxModule] = React.useState<MDXModule>();
  const Component = mdxModule ? mdxModule.default : React.Fragment;

  React.useEffect(
    function () {
      (async function () {
        setMdxModule(
          await run(code, {
            ...runtime,
            baseUrl: import.meta.url,
            useMDXComponents,
          })
        );
      })();
    },
    [code]
  );

  return <Component />;
}
export default MDXRenderer;
