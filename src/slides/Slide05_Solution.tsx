import VideoBackground from "../components/VideoBackground";

const BG = "https://assets.mixkit.co/videos/preview/mixkit-futuristic-glowing-grid-floor-1290-large.mp4";

export default function Slide05_Solution() {
  const cards = [
    ["Graphics", "Broadcast-quality overlays for 20+ sports"],
    ["Streaming", "Cloud GPU encoding to any destination"],
    ["Highlights", "Automated clips, compilations, social posting"],
    ["Monetisation", "Dynamic ads and sponsor tracking"],
    ["Data", "Live scores, stats, official feeds"]
  ];

  return (
    <div className="relative h-full w-full px-[5%] py-[4%] z-10">
      <VideoBackground src={BG} />
      <h1 className="text-[clamp(32px,4vw,72px)] font-bold">THE SOLUTION</h1>
      <h2 className="text-[clamp(26px,3vw,52px)] opacity-90 mt-[1%]">
        One platform. Every sport. All tiers.
      </h2>
      <p className="opacity-75 text-[clamp(14px,1.2vw,20px)] max-w-[50%] mt-[2%]">
        LIGR replaces the entire broadcast stack with a single software platform.
      </p>
      <div className="grid grid-cols-5 gap-[2%] mt-[5%]">
        {cards.map(([title, desc], i) => (
          <div
            key={i}
            className="rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5
                       backdrop-blur-xl p-[clamp(20px,2vw,40px)]"
          >
            <div className="w-[clamp(40px,4vw,60px)] h-[clamp(40px,4vw,60px)]
                           rounded-full bg-ligr-red/30 mb-[10%]" />
            <h3 className="text-[clamp(16px,1.6vw,28px)] font-bold">{title}</h3>
            <p className="text-[clamp(13px,1vw,18px)] opacity-85 mt-[4%]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

