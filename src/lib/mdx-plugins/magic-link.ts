import normalizeUrl from "normalize-url";

const reHtmlProtocol = /^https?:\/\//i;
const reGitHubScope = /^(?:https?:\/\/)?github\.com\/([\w_-]*?)(?:$|\/)/;

export interface ParsedMagicLink {
  text?: string;
  link: string;
  type?: string;
  imageUrl?: string;
}

export interface ResolvedMagicLink extends Required<ParsedMagicLink> {}

export interface MagicLinkHandler {
  name: string;
  handler: (content: string) => ParsedMagicLink | void | false;
  postprocess?: (parsed: ResolvedMagicLink) => ResolvedMagicLink | void;
}

export interface MagicLinkHandlerLinkOptions {
  /**
   * Map of link names to URLs. Case-sensitive.
   *
   * For example, `{ 'Google': 'https://google.com' }` will allow you to use `{Google}` in your markdown without specifying the URL
   */
  linksMap?: Record<string, string | { link: string; imageUrl?: string }>;
}

export interface PreProcessMDXOptions extends MagicLinkHandlerLinkOptions {
  handlers?: MagicLinkHandler[];

  /**
   * Array of RegExp and string pairs to override the default image URL
   */
  imageOverrides?: [RegExp | string, string][];
}

const GITHUB_SPECIAL_ROUTES = [
  "settings",
  "pulls",
  "issues",
  "discussions",
  "sponsor",
  "sponsors",
  "notifications",
];

export function handlerLink(
  options?: MagicLinkHandlerLinkOptions
): MagicLinkHandler {
  return {
    name: "link",
    handler(content: string) {
      const parts = content.split("|").map((i) => i.trim());
      let text = parts[0];
      let url: string | undefined = parts.length > 1 ? parts[1] : undefined;
      const type = "link";
      let imageUrl: string | undefined;

      let linkDefaults = text ? options?.linksMap?.[text] : undefined;
      if (typeof linkDefaults === "string") {
        linkDefaults = { link: linkDefaults };
      }

      url ||= linkDefaults?.link || parts[0];
      imageUrl ||= linkDefaults?.imageUrl;

      if (!url?.match(/^https?:\/\//)) {
        return false;
      }

      text ||= url.replace(reHtmlProtocol, "");
      imageUrl ||= `https://favicon.yandex.net/favicon/${new URL(url || "").hostname}`;

      return {
        text,
        link: url,
        type,
        imageUrl,
      };
    },
  };
}

export function handlerGitHubAt(): MagicLinkHandler {
  return {
    name: "github-at",
    handler(content: string) {
      const parts = content.split("|").map((i) => i.trim());
      const loginAt = parts[0];
      const text = parts[1];
      const link = parts[2];

      if (!loginAt.startsWith("@")) {
        return false;
      }

      const login = loginAt.slice(1);
      return {
        text: text || login.toUpperCase(),
        link: link || `https://github.com/${login}`,
        type: "github-at",
        imageUrl: `https://github.com/${login}.png`,
      };
    },
    postprocess(parsed: ResolvedMagicLink) {
      if (parsed.link.match(reGitHubScope) && parsed.type !== "github-at") {
        const login = parsed.link.match(reGitHubScope)![1];
        if (
          !GITHUB_SPECIAL_ROUTES.includes(login) &&
          parsed.imageUrl.startsWith("https://favicon.yandex.net")
        ) {
          parsed.imageUrl = `https://github.com/${login}.png`;
        }
      }
    },
  };
}

export function parseMagicLink(content: string, handlers: MagicLinkHandler[]) {
  for (const handler of handlers) {
    const parsed = handler.handler(content);
    if (parsed) {
      return parsed;
    }
  }
  return false;
}

const reCapture = /^\{([^{}\n]*?)\}([^[\]{}()]|$)/i;
export default function processMagicLink(
  source: string,
  options: PreProcessMDXOptions = {}
) {
  const { handlers = [handlerLink(options), handlerGitHubAt()] } = options;

  let output = "";
  let i = 0;

  while (i < source.length) {
    const char = source[i];
    if (char === "{") {
      const match = source.slice(i).match(reCapture);
      if (match) {
        const [fullMatch, inner, tail] = match;

        const parsed = parseMagicLink(inner, handlers);
        if (parsed) {
          let resolved = {
            ...parsed,
          } as ResolvedMagicLink;

          resolved.link = normalizeUrl(parsed.link);
          resolved.type = parsed.type ?? "link";
          resolved.text ||= resolved.link.replace(reHtmlProtocol, "");
          resolved.imageUrl ||= `https://favicon.yandex.net/favicon/${new URL(resolved.link || "").hostname}`;

          for (const handler of handlers) {
            resolved = handler.postprocess?.(resolved) || resolved;
          }

          for (const [regex, value] of options.imageOverrides || []) {
            if (
              typeof regex === "string"
                ? resolved.link === regex
                : resolved.link.match(regex)
            ) {
              resolved.imageUrl = value;
              break;
            }
          }

          const jsxElement = `<MagicLink link="${resolved.link}" text="${resolved.text}" imageUrl="${resolved.imageUrl}" />`;
          // replace the full match with the jsx element
          output += jsxElement;
          i += fullMatch.length - tail.length;
          continue;
        }
      }
    }
    output += char;
    i++;
  }
  return output;
}
