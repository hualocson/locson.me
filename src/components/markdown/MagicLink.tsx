"use client";

const MagicLink: React.FC<{
  link: string;
  text: string;
  imageUrl: string;
}> = ({ link, text, imageUrl }) => {
  return (
    <a
      href={link}
      className="!text-fg-light relative inline-flex translate-y-[3px] items-center gap-1 rounded border-b-0 bg-[#8882] px-1.5 py-1 font-mono leading-[100%] transition-all duration-300 hover:bg-[#8883] hover:!text-(--fg)"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span
        className="relative inline-block size-[1.1em] rounded-[2px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      {text}
    </a>
  );
};

export default MagicLink;
