import React, { useRef, useState, useEffect } from "react";
import Wrapper from "./wrapper";
import video from "../assets/image/trainingvid.mp4";
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from "lucide-react";

const Labwox = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const benefitItems = [
    { desc: "Practical, hands-on guidance" },
    { desc: "Covers both theory and real-world practice" },
    { desc: "Delivered onsite or online" },
    { desc: "Certification included" },
  ];

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) v.pause();
    else v.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
  };

  const handleVolume = (e) => {
    const v = videoRef.current;
    if (!v) return;
    const val = e.target.value;
    v.volume = val;
    setVolume(val);
    if (val > 0) setMuted(false);
  };

  const forward = () => {
    if (videoRef.current) videoRef.current.currentTime += 5;
  };

  const backward = () => {
    if (videoRef.current) videoRef.current.currentTime -= 5;
  };

  const handleProgress = (e) => {
    const v = videoRef.current;
    if (!v) return;
    const time = e.target.value;
    v.currentTime = time;
    setProgress(time);
  };

  const toggleFullscreen = () => {
    const container = document.getElementById("video-container");
    if (!document.fullscreenElement) container.requestFullscreen();
    else document.exitFullscreen();
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const updateProgress = () => setProgress(v.currentTime);
    const setDur = () => setDuration(v.duration);

    v.addEventListener("timeupdate", updateProgress);
    v.addEventListener("loadedmetadata", setDur);

    return () => {
      v.removeEventListener("timeupdate", updateProgress);
      v.removeEventListener("loadedmetadata", setDur);
    };
  }, []);

  return (
    <Wrapper>
      <section className="font-manrope w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-black max-w-4xl">
            Application Training for <br /> Professionals and Academics
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 my-4 max-w-3xl">
            Build capability with expert-led training on essential analytical instruments.
            Labwox equips science professionals and academic teams with the skills needed
            to confidently operate, troubleshoot, and optimize laboratory workflows.
          </p>

          {/* VIDEO WRAPPER */}
          <div className="relative w-full mt-12" id="video-container">
            <div className="w-full h-[400px] sm:h-[500px] md:h-[620px] rounded-2xl overflow-hidden relative shadow-xl bg-black">
              
              {/* VIDEO */}
              <video
                ref={videoRef}
                src={video}
                onClick={togglePlay}
                className="w-full h-full object-cover object-center brightness-75 contrast-[1.35] saturate-[1.3] transition-all duration-700"
              ></video>

              {/* CONTROL BAR */}
              <div className="absolute bottom-4 left-0 right-0 px-4 bg-gray-700/70 py-2 rounded-lg flex flex-col gap-2">
                
                {/* Progress bar */}
                <input
                  type="range"
                  min="0"
                  max={duration}
                  value={progress}
                  onChange={handleProgress}
                  className="w-full h-1 rounded-full bg-gray-400 accent-yellow-400 cursor-pointer"
                />

                {/* Buttons row */}
                <div className="flex items-center gap-3">
                  <button onClick={togglePlay} className="p-2 rounded-full text-white hover:bg-white/20">
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>

                  <button onClick={backward} className="p-2 rounded-full text-white hover:bg-white/20">
                    <SkipBack size={20} />
                  </button>

                  <button onClick={forward} className="p-2 rounded-full text-white hover:bg-white/20">
                    <SkipForward size={20} />
                  </button>

                  <button onClick={toggleMute} className="p-2 rounded-full text-white hover:bg-white/20">
                    {muted || volume == 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>

                  {/* Volume slider */}
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={muted ? 0 : volume}
                    onChange={handleVolume}
                    className="w-24 h-1 rounded-full bg-gray-400 accent-yellow-400 cursor-pointer"
                  />

                  <button
                    onClick={toggleFullscreen}
                    className="p-2 rounded-full text-white hover:bg-white/20 ml-auto"
                  >
                    <Maximize size={20} />
                  </button>
                </div>
              </div>

            </div>
            </div>
            <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefitItems.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  backdrop-blur-xl 
                  bg-white/40 
                  border border-white/60
                  hover:border-yellow-500/70
                  rounded-2xl 
                  py-2
                  px-3
                  shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]
                  transition-all 
                  duration-300 
                  hover:-translate-y-2
                  hover:bg-white/70
                  cursor-pointer
                  relative
                  overflow-hidden
                "
              >
                <div
                  className="
                    absolute inset-0 
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-500
                    bg-gradient-to-br from-yellow-300/20 via-yellow-400/10 to-transparent
                    blur-xl
                  "
                ></div>
                <p className="relative text-[18x] font-manrope text-[#010d1f] text-center leading-relaxed z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
            
        </div>
        
      </section>
    </Wrapper>
  );
};

export default Labwox;
