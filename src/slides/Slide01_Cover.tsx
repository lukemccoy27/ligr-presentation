import VideoBackground from "../components/VideoBackground";

const BG = "https://assets.mixkit.co/videos/preview/mixkit-futuristic-glowing-grid-floor-1290-large.mp4";

export default function Slide01_Cover() {
  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center text-center z-10">
      <VideoBackground src={BG} />
      <h1 className="text-[clamp(42px,6vw,96px)] font-bold">SPORTS INNOVATION 2026</h1>
      <h2 className="text-[clamp(32px,4vw,72px)] mt-[2%] font-bold">LIGR</h2>
      <p className="text-[clamp(20px,2vw,40px)] opacity-90 mt-[1.5%]">Sports broadcasting OS.</p>
      <p className="text-[clamp(18px,1.8vw,32px)] opacity-75 mt-[1%]">Any sport. Any tier.</p>
      <p className="text-[clamp(16px,1.4vw,28px)] opacity-70 mt-[2%] max-w-[60%]">
        The end-to-end operating system for live sports production, graphics, streaming, and monetisation.
      </p>
      <p className="text-[clamp(14px,1.2vw,22px)] opacity-60 mt-[3%]">Top 5 Startup Pitch</p>
      <p className="text-[clamp(14px,1.2vw,22px)] opacity-60">Luke McCoy \u2022 CEO & Founder \u2022 ligrsystems.com</p>
    </div>
  );
}
