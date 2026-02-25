import VideoBackground from "../components/VideoBackground";

const BG = "https://assets.mixkit.co/videos/preview/mixkit-futuristic-glowing-grid-floor-1290-large.mp4";

export default function Slide04_Opportunity2() {
  const bars = [
    { label: "Remote/cloud production tools", pct: 70 },
    { label: "CDNs", pct: 59 },
    { label: "Mixed reality / fan experiences", pct: 44 },
    { label: "Automated cameras/workflows", pct: 41 },
    { label: "AI clipping tools", pct: 38 },
    { label: "AI statistics/graphics", pct: 35 },
    { label: "5G networking", pct: 32 },
    { label: "AI personalisation", pct: 27 }
  ];

  return (
    <div className="relative h-full w-full px-[5%] py-[4%] z-10">
      <VideoBackground src={BG} />
      <h1 className="text-[clamp(32px,4vw,72px)] font-bold">THE OPPORTUNITY</h1>
      <p className="text-[clamp(18px,1.5vw,26px)] opacity-85 mt-[2%]">
        Technology adoption is accelerating.
      </p>
      <div className="flex flex-col gap-[1.8%] w-[70%] mt-[4%]">
        {bars.map((b, i) => (
          <div key={i}>
            <div className="flex justify-between mb-[0.4%]">
              <span className="text-[clamp(13px,1vw,18px)] opacity-85">{b.label}</span>
              <span className="text-[clamp(13px,1vw,18px)] opacity-85">{b.pct}%</span>
            </div>
            <div className="w-full h-[clamp(12px,1vw,18px)] bg-white/10 rounded-full">
              <div
                className="h-full bg-ligr-red rounded-full"
                style={{ width: `${b.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-[clamp(15px,1.2vw,22px)] opacity-80 mt-[4%] max-w-[60%]">
        LIGR addresses 4 of the top 6: cloud production, automated workflows, AI clipping, and AI graphics.
      </p>
    </div>
  );
}

