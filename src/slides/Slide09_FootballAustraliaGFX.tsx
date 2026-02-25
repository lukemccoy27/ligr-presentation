import VideoBackground from "../components/VideoBackground";

const BG = "https://assets.mixkit.co/videos/preview/mixkit-futuristic-glowing-grid-floor-1290-large.mp4";

export default function Slide09_FootballAustraliaGFX() {
  const gfx = [
    "Australian Championship",
    "Australian Cup",
    "National Premier League",
    "NPL — 9 Skins, 9 Federations",
    "Team Lineups Builder",
    "Full-Time Scoreboard",
    "Custom GFX Themes",
    "Match Promo Templates"
  ];

  return (
    <div className="relative h-full w-full px-[5%] py-[4%] z-10">
      <VideoBackground src={BG} />
      <h1 className="text-[clamp(32px,4vw,72px)] font-bold">
        Broadcast GFX for Every Tier — Football Australia
      </h1>
      <div className="grid grid-cols-4 grid-rows-2 gap-[3%] mt-[5%]">
        {gfx.map((name, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5
                       backdrop-blur-xl p-[clamp(16px,1.8vw,32px)]"
          >
            <div className="w-full h-[clamp(120px,14vw,220px)] rounded-lg bg-white/10 mb-[6%]" />
            <h3 className="font-bold text-[clamp(14px,1.2vw,20px)]">{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
