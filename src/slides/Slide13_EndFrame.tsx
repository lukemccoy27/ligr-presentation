import VideoBackground from "../components/VideoBackground";

const BG = "https://assets.mixkit.co/videos/preview/mixkit-futuristic-glowing-grid-floor-1290-large.mp4";

export default function Slide13_EndFrame() {
  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center text-center px-[5%] py-[4%] z-10">
      <VideoBackground src={BG} />
      <h1 className="text-[clamp(40px,6vw,96px)] font-bold">LIGR</h1>
      <h2 className="text-[clamp(26px,4vw,64px)] font-bold mt-[2%]">Every sport. Every tier.</h2>
      <p className="text-[clamp(18px,1.8vw,32px)] opacity-85 mt-[1.5%]">Broadcast-quality. Automated.</p>
      <div className="flex flex-col gap-[1%] mt-[5%] text-[clamp(14px,1.2vw,22px)] opacity-80">
        <p>☑ AI-powered graphic creation — 2026</p>
        <p>☑ Fuse Broadcast Graphic integration with Rive</p>
        <p>☑ SaaS self-serve for all sport tiers</p>
        <p>☑ Scaling Football Australia model globally</p>
      </div>
      <p className="text-[clamp(14px,1vw,20px)] opacity-70 mt-[5%]">
        Luke McCoy • <span className="italic">luke@ligrsystems.com</span>
      </p>
    </div>
  );
}

