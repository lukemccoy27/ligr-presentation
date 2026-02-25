import VideoBackground from "../components/VideoBackground";

const BG = "https://assets.mixkit.co/videos/preview/mixkit-futuristic-glowing-grid-floor-1290-large.mp4";

export default function Slide12_WhyLIGRWins() {
  const items = [
    ["End-to-End Platform", "GFX, streaming, highlights, ads, data — one OS"],
    ["Full Automation + Manual Control", "Zero-operator to full control room"],
    ["AI-First Roadmap", "Natural language GFX creation"],
    ["Strategic Investors", "Major industry partners"],
    ["Global Reach", "15+ sports, all data suppliers"],
    ["Advertising Monetisation Built In", "Dynamic ads, sponsor tracking"]
  ];

  return (
    <div className="relative h-full w-full px-[5%] py-[4%] z-10">
      <VideoBackground src={BG} />
      <h1 className="text-[clamp(32px,4vw,72px)] font-bold">Why LIGR Wins</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-[4%] mt-[6%]">
        {items.map(([title, desc], i) => (
          <div
            key={i}
            className="rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5
                       backdrop-blur-xl p-[clamp(20px,2vw,40px)]"
          >
            <div className="w-[clamp(48px,4vw,64px)] h-[clamp(48px,4vw,64px)]
                           rounded-full bg-ligr-red/40 mb-[10%]" />
            <h2 className="text-[clamp(18px,1.8vw,30px)] font-bold">{title}</h2>
            <p className="opacity-80 text-[clamp(13px,1vw,18px)] mt-[4%]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

