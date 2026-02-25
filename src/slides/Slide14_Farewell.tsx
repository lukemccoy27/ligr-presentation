import VideoBackground from "../components/VideoBackground";

const BG = "https://assets.mixkit.co/videos/preview/mixkit-futuristic-glowing-grid-floor-1290-large.mp4";

export default function Slide14_Farewell() {
  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center text-center px-[5%] py-[4%] z-10">
      <VideoBackground src={BG} />
      <h1 className="text-[clamp(36px,5vw,92px)] font-bold">Thank You</h1>
      <p className="text-[clamp(18px,1.8vw,32px)] opacity-80 mt-[2%]">
        The future of sports broadcasting is automated.
      </p>
      <p className="text-[clamp(14px,1vw,20px)] opacity-70 mt-[4%]">
        Contact: <span className="italic">luke@ligrsystems.com</span>
      </p>
    </div>
  );
}

