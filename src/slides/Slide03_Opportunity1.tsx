import VideoBackground from "../components/VideoBackground";

const BG = "https://assets.mixkit.co/videos/preview/mixkit-futuristic-glowing-grid-floor-1290-large.mp4";

export default function Slide03_Opportunity1() {
  const stats = [
    ["$78B", "Sports broadcast tech"],
    ["$75B", "Streaming revenue by 2030"],
    ["65%", "Cloud broadcasting adoption"],
    ["12.6%", "CAGR streaming growth"]
  ];

  return (
    <div className="relative h-full w-full px-[5%] py-[4%] z-10">
      <VideoBackground src={BG} />
      <h1 className="text-[clamp(32px,4vw,72px)] font-bold">THE OPPORTUNITY</h1>
      <h2 className="text-[clamp(26px,3vw,52px)] opacity-90 mt-[1%]">A massive market shifting to the cloud.</h2>
      <p className="text-[clamp(15px,1.2vw,22px)] opacity-80 max-w-[60%] mt-[2%]">
        Sports broadcasting is moving from hardware to software to automation to AI \u2014 and the market is enormous.
      </p>
      <div className="grid grid-cols-4 gap-[3%] mt-[6%]">
        {stats.map(([value, label], i) => (
          <div key={i}>
            <h3 className="text-[clamp(36px,4vw,72px)] font-bold">{value}</h3>
            <p className="text-[clamp(14px,1vw,18px)] opacity-75">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
