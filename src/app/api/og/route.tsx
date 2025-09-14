import { ImageResponse } from "next/og";

export function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Next.js Portfolio Starter";

  const lines = title
    .trim()
    .split(/(.{0,30})(?:\s|$)/g)
    .filter(Boolean);

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full item-start justify-center bg-[#050505] text-[#bbb] p-8 relative">
        <span tw="flex w-28 justify-center mx-4 item-center bg-[#8882] rounded-[8px] py-1.5">
          <img
            width="24"
            height="24"
            src={`https://github.com/hualocson.png`}
            style={{
              borderRadius: 24,
            }}
          />
          <span tw="ml-2 font-bold">Loc Son</span>
        </span>
        <div tw="flex flex-col md:flex-row w-full p-4 justify-between">
          {lines.map((line) => (
            <span
              key={line}
              tw="flex flex-col  text-4xl font-bold tracking-tight text-left"
            >
              {line}
            </span>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
