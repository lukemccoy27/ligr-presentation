import VideoBackground from "../components/VideoBackground";

const BG = "https://assets.mixkit.co/videos/preview/mixkit-futuristic-glowing-grid-floor-1290-large.mp4";

export default function Slide08_SportsPyramid() {
  const tiers = [
    ["Tier 1 — Premium Broadcast", "Multi-cam, MCR, full production"],
    ["Tier 2 — Professional", "Multi-cam + manual GFX"],
    ["Tier 3 — Semi-Pro", "Single cam or AI cameras + automation"],
    ["Tier 4 — Grassroots", "Phone/auto-cam + self-service + AI GFX"]
  ];

  return (
    <div className="relative h-full w-full px-[5%] py-[4%] z-10">
      <VideoBackground src={BG} />
      <h1 className="text-[clamp(32px,4vw,72px)] font-bold">Broadcast-quality at every tier.</h1>
      <div className="flex flex-col gap-[3%] mt-[5%] max-w-[60%]">
        {tiers.map(([tier, desc], i) => (
          <div key={i}>
            <h2 className="text-[clamp(24px,2.5vw,40px)] font-bold">{tier}</h2>
            <p className="opacity-80 text-[clamp(14px,1vw,20px)]">{desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-[6%] text-[clamp(14px,1vw,20px)] opacity-70 max-w-[70%]">
        From 640+ match deals to 2nd Division Australia to French 5th division self-service with AI cameras — LIGR powers every tier end-to-end.
      </p>
    </div>
  );
}
