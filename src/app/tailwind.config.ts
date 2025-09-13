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

            strong: {
              color: "var(--fg-deep)",
              fontWeight: "600",
            },

            h1: {
              color: "var(--fg-deeper)",
              fontWeight: "800",
              fontSize: "2.25em",
              lineHeight: "1.1",
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
              fontWeight: "600",
              fontSize: "1.25em",
              opacity: "0.7",
            },
            h4: {
              fontWeight: "600",
            },

            code: {
              fontWeight: "500",
              fontSize: "0.92em",
              backgroundColor: "#aaaaaa18",
              borderRadius: "0.25rem",
              padding: "0.2em 0.3em",
            },
            pre: {
              backgroundColor: "#111",
              color: "#e5e7eb",
              borderRadius: "0.375rem",
              padding: "1em",
              fontSize: "0.875em",
              lineHeight: "1.7",
            },

            blockquote: {
              fontStyle: "italic",
              borderLeftColor: "rgba(125,125,125,0.3)",
              fontWeight: "500",
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
          },
        },

        sm: {
          css: {
            fontSize: "0.875rem",
            lineHeight: "1.7",

            h1: { fontSize: "2.1em" },
            h2: { fontSize: "1.4em" },
            h3: { fontSize: "1.25em" },
            pre: { fontSize: "0.85em" },
          },
        },
      },
    },
  },
} satisfies Config;
