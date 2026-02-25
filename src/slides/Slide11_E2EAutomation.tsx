import VideoBackground from "../components/VideoBackground";

const BG = "https://assets.mixkit.co/videos/preview/mixkit-futuristic-glowing-grid-floor-1290-large.mp4";

export default function Slide11_E2EAutomation() {
  const blocks = [
    ["E2E GFX Automation", "Trigger-based fully automated graphics workflows."],
    ["E2E Advertising Integration", "Dynamic ads with precise placement & timing."]
  ];

  return (
    <div className="relative h-full w-full px-[5%] py-[4%] z-10">
      <VideoBackground src={BG} />
      <h1 className="text-[clamp(32px,4vw,72px)] font-bold">End-to-End Automation</h1>
      <div className="flex gap-[4%] mt-[6%]">
        {blocks.map(([title, desc], i) => (
          <div
            key={i}
            className="flex-1 rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5
                       backdrop-blur-xl p-[clamp(20px,2vw,40px)]"
          >
            <div className="w-full h-[clamp(200px,22vw,320px)] rounded-lg bg-white/10 mb-[6%]" />
            <h2 className="text-[clamp(22px,2.4vw,38px)] font-bold">{title}</h2>
            <p className="opacity-80 text-[clamp(14px,1vw,20px)] mt-[3%]">{desc}</p>
          </div>
        ))}
      </div>
      <p className="opacity-75 text-[clamp(14px,1vw,20px)] max-w-[70%] mt-[3%]">
        Build, schedule, preview, and automate all graphics and ad sequences across leagues and competition levels.
      </p>
    </div>
  );
}

