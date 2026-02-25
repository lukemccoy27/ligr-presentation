import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";

export default function Presentation({ slides }: { slides: React.ReactElement[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const hideTimer = React.useRef<number | null>(null);

  const next = useCallback(() => setIndex(i => Math.min(i + 1, slides.length - 1)), [slides.length]);
  const prev = useCallback(() => setIndex(i => Math.max(i - 1, 0)), []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen?.();
  };

  const onKey = useCallback((e: KeyboardEvent) => {
    if (["ArrowRight", "ArrowDown", " "].includes(e.key)) next();
    if (["ArrowLeft", "ArrowUp"].includes(e.key)) prev();
    if (e.key.toLowerCase() === "f") toggleFullscreen();
  }, [next, prev]);

  const showControls = () => {
    setVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setVisible(false), 3000);
  };

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousemove", showControls);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousemove", showControls);
    };
  }, [onKey]);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`
            absolute inset-0 transition-all duration-500
            ${i === index ? "opacity-100 scale-100" : "opacity-0 pointer-events-none"}
            ${i < index ? "scale-95" : ""}
            ${i > index ? "scale-105" : ""}
          `}
        >{s}</div>
      ))}

      <div className={`
        absolute top-0 right-0 p-[2%] text-white/40 text-[clamp(10px,1vw,14px)]
        transition-opacity ${visible ? "opacity-100" : "opacity-0"}
      `}>
        \u2190 \u2192 Navigate \u00b7 F Fullscreen
      </div>

      <div className={`
        absolute bottom-0 left-0 right-0 flex justify-between items-center
        px-[5%] py-[1.5%] bg-gradient-to-t from-black/80 to-transparent
        transition-opacity ${visible ? "opacity-100" : "opacity-0"}
      `}>
        <div className="text-white/60 font-mono text-[clamp(12px,1vw,14px)]">
          {index + 1} / {slides.length}
        </div>
        <div className="flex gap-[clamp(6px,0.8vw,12px)]">
          {slides.map((_, i) => (
            <div key={i} className={`
              rounded-full transition-all
              ${i === index
                ? "bg-ligr-red w-[clamp(22px,2.4vw,30px)] h-[clamp(6px,0.8vw,10px)]"
                : "bg-white/30 w-[clamp(6px,0.8vw,10px)] h-[clamp(6px,0.8vw,10px)]"}
            `} />
          ))}
        </div>
        <div className="flex gap-[clamp(12px,1vw,18px)]">
          <button onClick={prev} className="text-white/60 hover:text-white/90 hover:bg-white/10 p-1 rounded-md">
            <ChevronLeft />
          </button>
          <button onClick={next} className="text-white/60 hover:text-white/90 hover:bg-white/10 p-1 rounded-md">
            <ChevronRight />
          </button>
          <button onClick={toggleFullscreen} className="text-white/60 hover:text-white/90 hover:bg-white/10 p-1 rounded-md">
            <Maximize size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
