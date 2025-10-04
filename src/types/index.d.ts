interface Frontmatter {
  title?: string;
  display?: string;
  date?: string;
  duration?: string;
  place?: string;
  placeLink?: string;
  subtitle?: string;
  draft?: boolean;
  lang?: string;
  wrapperClass?: string;
  class?: string;
  tocAlwaysOn?: boolean;
  art?: "plum" | "dots" | "random";
}

interface IPostFrontmatter {
  path: string; // slug
  title: string;
  place?: string;
  date: string;
  lang?: string;
  desc?: string;
  platform?: string;
  duration?: string;
  inperson?: boolean;
  redirect?: string; // external link
  toc?: boolean; // show toc
  tocAlwaysOn?: boolean; // show toc always on (use when have toc = true)
  wrapperClass?: string;
  art: "plum" | "dots" | "random";
}
