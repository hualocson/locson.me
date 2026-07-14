import React from "react";

const ListProjects: React.FC = () => {
  return (
    <div className="hide-scrollbar-x mt-20 flex w-full items-center gap-2 overflow-x-auto">
      {Array.from({ length: 50 }).map((_, index) => (
        <span
          key={index}
          className="aspect-square w-40 flex-shrink-0 bg-gray-400"
        ></span>
      ))}
    </div>
  );
};

export default ListProjects;
