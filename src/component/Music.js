import React, { useEffect, useRef, useState } from "react";
import {
  Previous,
  Next,
  Play,
  Playlist,
  Like,
  Pause,
  Close,
  SongList,
} from "../svg/MediaButtons";
import { musicData } from "../musicData";
import PlayList from "./PlayList";

const Music = () => {
  //state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [openPlaylist, setOpenPlaylist] = useState(false);

  //Refrences
  const audioPlayer = useRef(); // access audio tag
  const progressBar = useRef(); // Progress Bar
  const animationRef = useRef(); // countinues progressbar

  //useEffect

  useEffect(() => {
    console.log("load");
    audioPlayer.current.onloadedmetadata = function () {
      const second = Math.floor(audioPlayer.current.duration);
      setDuration(second);
      progressBar.current.max = second;
    };
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [currentIndex]);

  //Functions

  const togglePlayPause = () => {
    let prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const renderMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const renderSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${renderMinutes}:${renderSeconds}`;
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    ProgressTrack();
  };

  const whilePlaying = () => {
    if (audioPlayer.current.currentTime === audioPlayer.current.duration) {
      resetAudio();
    } else {
      progressBar.current.value = audioPlayer.current.currentTime;
      ProgressTrack();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };
  const resetAudio = () => {
    audioPlayer.current.currentTime = 0; // Reset Audio Track
    progressBar.current.value = 0;
    setIsPlaying(false);
    ProgressTrack();
    cancelAnimationFrame(animationRef.current);
  };

  const ProgressTrack = () => {
    let width = (progressBar.current.value / duration) * 100;
    progressBar.current.style.background = `linear-gradient(to right, #fa4f83 ${width}%, #fa4f83 ${width}%, #fff 0%, #fff 100%)`;
    setCurrentTime(progressBar.current.value);
  };

  const nextTrack = () => {
    if (currentIndex < musicData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
    resetAudio();
  };

  const previousTrack = () => {
    if (currentIndex === 0) {
      setCurrentIndex(musicData.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    resetAudio();
  };

  // const closePlaylist = (e) => {
  //   if (!e.target.classList.contains("playlist__container")) {
  //     setOpenPlaylist(false);
  //   }
  // };
  //Component
  return (
    <>
      <section
        className="text-red-50 h-screen 2xl:h-screen sm:h-full body-font overflow-hidden"
        style={{ backgroundColor: "#1e1e1e" }}
      >
        {/* ---------- Audio Tag ---------- */}
        <audio
          src={`${musicData[currentIndex].url}`}
          preload="auto"
          ref={audioPlayer}
        ></audio>

        <div className="music-container relative w-full flex flex-col top-28 justify-center items-center">
          {/*------------ Cover Art ------------------ */}
          <div
            className="coverart rounded-3xl relative top-3 w-72 h-72 overflow-hidden sm:w-60 sm:h-60"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src={`${musicData[currentIndex].cover}`}
              alt=""
              className="relative object-cover object-center w-full h-full select-none"
            />
          </div>

          {/*------------ Music Details ------------------ */}
          <div
            className="relative top-3 music-details sm:top-10"
            data-aos="fadeIn"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <p className="relative text-white font-sans text-2xl sm:text-xl pt-8">
              {`${musicData[currentIndex].name}`}
            </p>
            <p className="relative text-white font-sans text-1xl pt-2">
              Vsl on the beat
            </p>
          </div>

          {/*------------ Playlist and like button ------------------ */}
          <div
            className="relative w-2/6 sm:w-3/5  top-12 px-2  sm:top-24 flex justify-between items-center"
            // data-aos="zoom-in"
            // data-aos-duration="1000"
            // data-aos-delay="300"
          >
            <span onClick={() => setOpenPlaylist(!openPlaylist)}>
              <SongList/>
            </span>
            <Like />
          </div>
          {/*------------ Music Progress Bar ------------------ */}
          <div
            className="relative w-full top-20 sm:top-40 flex justify-center items-center"
            // data-aos="zoom-in"
            // data-aos-duration="1000"
            // data-aos-delay="300"
          >
            <span className="select-none">{calculateTime(currentTime)}</span>
            <div className="relative cursor-pointer rounded-lg w-2/6 sm:w-7/12 mx-4 mr-4 h-3  ">
              <input
                type="range"
                defaultValue="0"
                className="absolute top-0 left-0 w-full rounded-full appearance-none h-3 cursor-pointer"
                // style={{
                //   background: `linear-gradient(to right, #fa4f83 ${width}%, #fa4f83 ${width}%, #fff 0%, #fff 100%)`,
                // }}
                ref={progressBar}
                onChange={changeRange}
              />
            </div>
            <span className="select-none">
              {/* {!isNaN(Number(duration)) && calculateTime(duration)} */}
              {duration && !isNaN(duration) && calculateTime(duration)}
            </span>
          </div>
          {/*------------ Music Play/Pause Button ------------------ */}
          <div className="relative w-3/12 sm:w-2/4 top-24 sm:top-56 flex justify-between items-center">
            <span onClick={() => previousTrack()}>
              <Previous />
            </span>
            <span onClick={togglePlayPause}>
              {isPlaying ? <Pause /> : <Play />}
            </span>
            <span onClick={() => nextTrack()}>
              <Next />
            </span>
          </div>
        </div>
      </section>
      {openPlaylist && (
        <PlayList
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          resetAudio={resetAudio}
          setOpenPlaylist={setOpenPlaylist}
          audioPlayer={audioPlayer}
        />
      )}
    </>
  );
};

export default Music;
