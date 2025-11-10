import React, { useRef, useState, useEffect } from "react";
import Wrapper from "./wrapper";
import video from "../assets/image/vid1.mp4";
import { Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from "lucide-react";

const Labwox = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    isPlaying ? v.pause() : v.play();
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

  const forward = () => videoRef.current && (videoRef.current.currentTime += 5);
  const backward = () => videoRef.current && (videoRef.current.currentTime -= 5);

  const handleProgress = (e) => {
    const v = videoRef.current;
    if (!v) return;
    const time = e.target.value;
    v.currentTime = time;
    setProgress(time);
  };

  const toggleFullscreen = () => {
    const container = document.getElementById("video-container");
    !document.fullscreenElement
      ? container.requestFullscreen()
      : document.exitFullscreen();
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
      <section className="font-manrope w-full bg-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="relative w-full mt-10" id="video-container">
            <div className="w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden relative shadow-xl bg-black">

              <video
                ref={videoRef}
                src={video}
                onClick={togglePlay}
                className="w-full h-full object-cover object-center brightness-75 contrast-[1.3] saturate-[1.25] transition-all duration-700">
              </video>
              <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 px-3 sm:px-4 bg-gray-700/70 py-2 sm:py-3 rounded-lg mx-3 sm:mx-4 flex flex-col gap-2">

                <input
                  type="range"
                  min="0"
                  max={duration}
                  value={progress}
                  onChange={handleProgress}
                  className="w-full h-1 rounded-full bg-gray-400 accent-yellow-400 cursor-pointer"
                  />
                <div className="flex items-center gap-2 sm:gap-3">
                  <button onClick={togglePlay} className="p-2 rounded-full text-white hover:bg-white/20">
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                  <button onClick={backward} className="p-2 rounded-full text-white hover:bg-white/20">
                    <SkipBack size={18} />
                  </button>
                  <button onClick={forward} className="p-2 rounded-full text-white hover:bg-white/20">
                    <SkipForward size={18} />
                  </button>
                  <button onClick={toggleMute} className="p-2 rounded-full text-white hover:bg-white/20">
                    {muted || volume == 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={muted ? 0 : volume}
                    onChange={handleVolume}
                    className="w-20 sm:w-24 h-1 rounded-full bg-gray-400 accent-yellow-400 cursor-pointer"
                  />
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 rounded-full text-white hover:bg-white/20 ml-auto"
                  >
                    <Maximize size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-base sm:text-lg md:text- text-gray-700 max-w-3xl leading-relaxed text-left">
              We are a science consulting company dedicated to improving research
              productivity, training, and laboratory excellence across Nigeria and
              beyond. 
            </p>
          </div>

        </div>
      </section>
    </Wrapper>
  );
};

export default Labwox;
