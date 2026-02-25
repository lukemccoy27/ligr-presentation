import VideoBackground from "../components/VideoBackground";

const BG = "https://assets.mixkit.co/videos/preview/mixkit-futuristic-glowing-grid-floor-1290-large.mp4";

export default function Slide06_ProductSuite() {
  const features = [
    ["Live Streaming", "End-to-end cloud production"],
    ["Graphics", "Professional overlays across 20+ sports"],
    ["Sponsorship", "Ad sets, campaigns, brand control"],
    ["Scoring & Data", "Live scoring, match events"],
    ["Auto Highlights", "Automated clips + sponsored moments"],
    ["Video Editing", "Browser-based edit suite"]
  ];

  return (
    <div className="relative h-full w-full px-[5%] py-[4%] z-10">
      <VideoBackground src={BG} />
      <h1 className="text-[clamp(32px,4vw,72px)] font-bold">Product: UI</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-[3%] mt-[5%]">
        {features.map(([title, desc], i) => (
          <div
            key={i}
            className="rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5
                       backdrop-blur-xl p-[clamp(20px,2vw,40px)]"
          >
            <div className="w-full h-[clamp(160px,18vw,240px)] rounded-lg bg-white/10 mb-[8%]" />
            <h3 className="text-[clamp(18px,1.8vw,30px)] font-bold">{title}</h3>
            <p className="opacity-80 text-[clamp(13px,1vw,18px)] mt-[3%]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

