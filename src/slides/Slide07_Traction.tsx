import VideoBackground from "../components/VideoBackground";

const BG = "https://assets.mixkit.co/videos/preview/mixkit-futuristic-glowing-grid-floor-1290-large.mp4";

export default function Slide07_Traction() {
  const stats = [
    ["100K+", "Production hours saved"],
    ["$20M+", "Cost savings for clients"],
    ["1,000+", "Sponsors activated"],
    ["15+", "Sports supported"]
  ];

  return (
    <div className="relative h-full w-full px-[5%] py-[4%] z-10">
      <VideoBackground src={BG} />
      <h1 className="text-[clamp(32px,4vw,72px)] font-bold max-w-[60%]">
        Powering the biggest names in live sport. It’s just the beginning.
      </h1>
      <div className="grid grid-cols-4 gap-[4%] mt-[5%]">
        {stats.map(([val, label], i) => (
          <div key={i}>
            <h2 className="text-[clamp(36px,4vw,60px)] font-bold">{val}</h2>
            <p className="opacity-70 text-[clamp(14px,1vw,20px)]">{label}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-[4%] mt-[6%]">
        <div className="flex-1">
          <h3 className="text-[clamp(20px,2vw,32px)] font-bold">DAZN — English National League</h3>
          <p className="opacity-80 text-[clamp(14px,1vw,20px)] mt-[1%]">
            640+ live matches with automated graphics, highlights, low‑latency distribution and MCR control.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="text-[clamp(20px,2vw,32px)] font-bold">Football Australia — World‑First</h3>
          <p className="opacity-80 text-[clamp(14px,1vw,20px)] mt-[1%]">
            3,500+ growing to 20K games/year. Centralised gatekeeper model across all tiers.
          </p>
        </div>
      </div>
    </div>
  );
}
