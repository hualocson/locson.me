import { CSSProperties, type FC, Fragment, useMemo } from "react";

import Link from "next/link";

import formatDate from "@/lib/format-date";
import { ExternalLinkIcon } from "lucide-react";

function PostItem({ post }: { post: IPostFrontmatter }) {
  return (
    <>
      <li className="flex flex-col gap-2 no-underline md:flex-row md:items-center">
        {/* Title Row */}
        <div className="title flex flex-wrap gap-2 text-lg leading-[1.2em]">
          <span>{post.title}</span>
          {post.redirect && (
            <ExternalLinkIcon className="-ml-[6px] size-4 opacity-50" />
          )}
        </div>

        {/* Metadata Row */}
        <div className="flex items-center gap-2">
          {post.inperson && (
            <span className="opacity-50" title="In person">
              👥
            </span>
          )}
          <span className="text-sm whitespace-nowrap opacity-50">
            {formatDate(post.date, true)}
          </span>
          {post.duration && (
            <span className="text-sm whitespace-nowrap opacity-40">
              · {post.duration}
            </span>
          )}
          {post.platform && (
            <span className="text-sm whitespace-nowrap opacity-40">
              · {post.platform}
            </span>
          )}
          {post.place && (
            <span className="text-sm whitespace-nowrap opacity-40 md:hidden">
              · {post.place}
            </span>
          )}
        </div>
      </li>

      {post.place && (
        <div className="mt-[-0.5rem] hidden text-sm opacity-50 md:block">
          {post.place}
        </div>
      )}
    </>
  );
}

interface IListPosts {
  items: IPostFrontmatter[];
}
const ListPosts: FC<IListPosts> = ({ items }) => {
  const posts = useMemo(
    () => items.sort((a, b) => +new Date(b.date) - +new Date(a.date)),
    []
  );

  const getYear = (a: Date | string | number) => new Date(a).getFullYear();
  const isFuture = (a?: Date | string | number) =>
    a && new Date(a) > new Date();
  const isSameYear = (a?: Date | string | number, b?: Date | string | number) =>
    a && b && getYear(a) === getYear(b);
  function isSameGroup(a: IPostFrontmatter, b?: IPostFrontmatter) {
    return (
      isFuture(a.date) === isFuture(b?.date) && isSameYear(a.date, b?.date)
    );
  }

  function getGroupName(p: IPostFrontmatter) {
    if (isFuture(p.date)) {
      return "Upcoming";
    }
    return getYear(p.date);
  }
  return (
    <ul>
      {items.length === 0 ? (
        <div className="py-2 opacity-50">nothing here yet</div>
      ) : (
        items.map((post, idx) => (
          <Fragment key={post.path}>
            {!isSameGroup(post, posts[idx - 1]) && (
              <div
                className="slide-enter pointer-events-none relative h-20 select-none"
                style={
                  {
                    "--enter-stage": idx - 2,
                    "--enter-step": "60ms",
                  } as CSSProperties
                }
              >
                <span className="text-stroke absolute top-[-2rem] left-[-3rem] text-[8em] font-bold text-transparent opacity-10">
                  {getGroupName(post)}
                </span>
              </div>
            )}

            {/* Post Item */}
            <div
              className="animate-slide-enter"
              style={
                {
                  ["--enter-stage"]: idx,
                  ["--enter-step"]: "60ms",
                } as CSSProperties
              }
            >
              {post.path.includes("://") ? (
                <Link
                  href={post.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 mb-6 block border-none opacity-60"
                >
                  <PostItem post={post} />
                </Link>
              ) : (
                <Link
                  href={post.path}
                  className="mt-2 mb-6 block border-none opacity-60"
                >
                  <PostItem post={post} />
                </Link>
              )}
            </div>
          </Fragment>
        ))
      )}
    </ul>
  );
};

export default ListPosts;
