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
  bodyClass?: string;
  tocAlwaysOn?: boolean;
  fixedScreen?: boolean;
  fullWidth?: boolean;
  art?: "plum" | "dots" | "random";
  hideFooter?: boolean;
}

interface IPostFrontmatter {
  path: string; // slug
  filePath?: string; // file path
  title: string;
  display?: string;
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
  bodyClass?: string;
  fixedScreen?: boolean;
  fullWidth?: boolean;
  art: "plum" | "dots" | "random";
  hideFooter?: boolean;
}

interface IProjectInfo {
  name: string;
  year: number;
  role: string;
  category: string;
  desc: string;
  url: string;
}
