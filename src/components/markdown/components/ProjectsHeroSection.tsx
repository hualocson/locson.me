interface IProjectsHeroSectionProps {
  title: string;
}
const ProjectsHeroSection: React.FC<IProjectsHeroSectionProps> = ({
  title,
}) => {
  return (
    <div className="mx-auto mt-24 grid max-w-[75ch] grid-cols-12 grid-rows-1 place-items-center gap-2 text-center text-sm leading-none">
      <div className="col-span-3 uppercase">Selected Projects I Have Done</div>
      <div className="col-span-6 text-5xl font-bold italic">{title}</div>
      <div className="col-span-3 uppercase">hold and drag to discover</div>
    </div>
  );
};

export default ProjectsHeroSection;
