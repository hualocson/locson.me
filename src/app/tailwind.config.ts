import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "var(--fg)",

            a: {
              color: "var(--fg-deeper)",
              fontWeight: "inherit",
              textDecoration: "none",
              borderBottom: "1px solid rgba(125, 125, 125, 0.3)",
              transition: "border 0.3s ease-in-out",
            },
            "a:hover": {
              borderBottom: "1px solid var(--fg)",
            },

            "a code": { color: "inherit" },

            strong: {
              color: "var(--fg-deep)",
              fontWeight: "600",
            },

            h1: {
              color: "var(--fg-deeper)",
              fontWeight: "800",
              fontSize: "2.25em",
              lineHeight: "1.111111",
              marginBottom: "0.9em",
            },
            h2: {
              color: "var(--fg-deep)",
              fontWeight: "700",
              fontSize: "1.5em",
              marginTop: "2em",
              marginBottom: "1em",
            },
            h3: {
              color: "inherit",
              fontWeight: "600",
              fontSize: "1.25em",
              marginTop: "1.6em",
              marginBottom: "0.6em",
              lineHeight: "1.6",
              opacity: "0.7",
            },
            h4: {
              fontWeight: "600",
            },

            code: {
              fontFamily:
                "DM Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
              color: "var(--fg-deep)",
              fontWeight: "500",
              fontSize: "0.92em",
              backgroundColor: "#aaaaaa18",
              borderRadius: "0.25rem",
              padding: "0.2em 0.3em",
              margin: "-0.2em 0",
            },

            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },

            pre: {
              color: "#e5e7eb",
              overflowX: "auto",
              borderRadius: "0.375rem",
              padding: "1em",
              fontSize: "0.875em",
              lineHeight: "1.7",
              marginTop: "1.714em",
              marginBottom: "1.714em",
              paddingTop: "0.8571em",
              paddingRight: "1.142em",
              paddingLeft: "1.142em",
              paddingBottom: "0.8571em",
            },

            ".shiki": {
              fontFamily: "'DM Mono', 'Input Mono', 'Fira Code', monospace",
              fontSize: "0.92em",
              lineHeight: "1.4",
              margin: "0.5em 0",
            },

            ".shiki.has-highlighted .line:not(.highlighted)": {
              opacity: "0.75",
            },

            "pre:not(.shiki)": {
              padding: 0,
              margin: 0,
              background: "transparent",
            },

            "pre code::before": {
              content: "none",
            },
            "pre code::after": {
              content: "none",
            },

            blockquote: {
              fontWeight: "normal",
              fontStyle: "normal",
              color: "inherit",
              borderLeftWidth: "0.25rem",
              borderColor: "rgba(125, 125, 125, 0.3)",
              quotes: "'\\201C' '\\201D' '\\2018' '\\2019'",
              marginTop: "1.6em",
              marginBottom: "1.6em",
              marginLeft: "-1.1em",
              padding: "0.5em 1em",
              lineHeight: "1.6",
            },

            "blockquote > *": {
              opacity: "0.7",
            },

            "blockquote > :first-child": {
              marginTop: "0",
            },
            "blockquote > :last-child": {
              marginBottom: "0",
            },

            "blockquote p:first-of-type::before": {
              content: "none",
            },

            "blockquote p:first-of-type::after": {
              content: "none",
            },

            hr: {
              borderColor: "rgba(125,125,125,0.3)",
              width: "50px",
              marginTop: "2em",
              marginBottom: "2em",
              marginLeft: "auto",
              marginRight: "auto",
            },

            table: {
              width: "100%",
              fontSize: "0.875em",
              lineHeight: "1.7",
            },
            thead: {
              color: "var(--fg-deep)",
              fontWeight: "600",
            },

            ul: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
              listStyleType: "none",
              paddingInlineStart: "0",
            },
            "ul > li": {
              position: "relative",
              paddingLeft: "1.5em",
            },

            li: {
              marginTop: "0.5em",
              marginBottom: "0.5em",
            },
          },
        },

        sm: {
          css: {
            fontSize: "0.875rem",
            lineHeight: "1.7",

            h1: { fontSize: "2.1em", marginBottom: "0.8em", lineHeight: "1.2" },
            h2: { fontSize: "1.4em" },
            h3: { fontSize: "1.25em" },
            pre: { fontSize: "0.85em" },
            "ul ul, ul ol, ol ul, ol ol": {
              marginTop: "0.5714em",
              marginBottom: "0.5714em",
            },
            ul: {
              paddingInlineStart: "0",
            },
            blockquote: {
              marginTop: "1.3333333em",
              marginBottom: "1.3333333em",
              paddingLeft: "1.1111111em",
            },
          },
        },
      },
    },
  },
} satisfies Config;
