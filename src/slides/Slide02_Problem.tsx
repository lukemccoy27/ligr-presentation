import VideoBackground from "../components/VideoBackground";

const BG = "https://assets.mixkit.co/videos/preview/mixkit-futuristic-glowing-grid-floor-1290-large.mp4";

export default function Slide02_Problem() {
  return (
    <div className="relative w-full h-full px-[5%] py-[4%] z-10">
      <VideoBackground src={BG} />

      <h1 className="text-[clamp(32px,4vw,72px)] font-bold">THE PROBLEM</h1>

      <div className="mt-[4%]">
        <h2 className="text-[clamp(48px,6vw,96px)] font-bold">95%</h2>
        <p className="text-[clamp(16px,1.2vw,24px)] opacity-85 max-w-[60%] mt-[1%]">
          of live sport have low quality broadcast graphics + no ability to inject commercial sponsors or track its delivery.
        </p>
      </div>

      <div className="flex gap-[4%] mt-[6%]">
        {[
          ["Too Expensive", "$5K\u201350K+ per match for production"],
          ["Too Complex", "Requires designers, operators, hardware"],
          ["No Monetisation", "No scalable ad/integration pipeline"]
        ].map(([title, desc], i) => (
          <div key={i} className="flex-1">
            <h3 className="text-[clamp(20px,2vw,32px)] font-bold">{title}</h3>
            <p className="text-[clamp(14px,1vw,20px)] mt-[1%]">{desc}</p>
          </div>
        ))}
      </div>

      <p className="text-[clamp(14px,1vw,20px)] opacity-70 mt-[4%] max-w-[70%]">
        Professional broadcasting has been locked behind six\u2011figure budgets.
      </p>
    </div>
  );
}
