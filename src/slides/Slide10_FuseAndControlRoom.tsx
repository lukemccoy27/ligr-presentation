import VideoBackground from "../components/VideoBackground";

const BG = "https://assets.mixkit.co/videos/preview/mixkit-futuristic-glowing-grid-floor-1290-large.mp4";

export default function Slide10_FuseAndControlRoom() {
  const blocks = [
    ["FUSE — GFX Building with AI", "Design, assemble, and deploy pro GFX themes."],
    ["Pro Broadcast Control Room", "Full production automation with real-time control."]
  ];

  return (
    <div className="relative h-full w-full px-[5%] py-[4%] z-10">
      <VideoBackground src={BG} />
      <h1 className="text-[clamp(32px,4vw,72px)] font-bold">Broadcast GFX for Every Tier</h1>
      <div className="flex gap-[4%] mt-[6%]">
        {blocks.map(([title, desc], i) => (
          <div
            key={i}
            className="flex-1 rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5
                       backdrop-blur-xl p-[clamp(20px,2vw,40px)]"
          >
            <div className="w-full h-[clamp(200px,20vw,300px)] rounded-lg bg-white/10 mb-[6%]" />
            <h2 className="text-[clamp(20px,2vw,32px)] font-bold">{title}</h2>
            <p className="text-[clamp(14px,1vw,18px)] opacity-80 mt-[3%]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

