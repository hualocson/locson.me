import React from "react";

import Link from "next/link";

import { GithubIcon, RocketIcon } from "lucide-react";

const ListProjects: React.FC = () => {
  return (
    <div className="mx-auto max-w-[75rem]">
      <p className="-mt-6 mb-5 text-center text-lg italic opacity-50">
        Projects that I created or maintaining.
      </p>

      <div className="prose mx-auto mt-10 pb-5 text-center">
        <div className="flex justify-center gap-2">
          <Link
            href="https://github.com/hualocson"
            target="_blank"
            className="group inline-flex items-center gap-2 rounded-md border border-gray-400/30 px-2.5 py-1 opacity-50 transition-all duration-300 ease-in-out hover:border-sky-300 hover:bg-sky-300/10 hover:text-sky-300 hover:opacity-100 hover:[&>svg]:fill-current hover:[&>svg]:stroke-current"
          >
            <GithubIcon className="size-4" />
            GitHub
          </Link>
          <Link
            href="https://releases.antfu.me"
            target="_blank"
            className="group inline-flex items-center gap-2 rounded-md border border-gray-400/30 px-2.5 py-1 opacity-50 transition-all duration-300 ease-in-out hover:border-amber-300 hover:bg-amber-300/10 hover:text-amber-300 hover:opacity-100 hover:[&>svg]:fill-current hover:[&>svg]:stroke-current"
          >
            <RocketIcon className="size-4" />
            Recent Releases
          </Link>
        </div>
        <hr />
      </div>

      {/* list projects (empty state) */}
      <div className="prose relative flex flex-col gap-4 perspective-distant">
        <span className="glass-card absolute inset-0 z-0" />

        <div className="relative z-10 flex flex-col gap-2 p-4">
          <h5 className="text-sm text-shadow-sm md:text-base">
            No projects found
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ListProjects;
