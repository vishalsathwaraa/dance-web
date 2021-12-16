import { useEffect, useState } from "react";
import { musicData } from "../musicData";
import { Close } from "../svg/MediaButtons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ImageLoader } from "./Loader";
const PlayList = ({
  setCurrentIndex,
  currentIndex,
  resetAudio,
  setOpenPlaylist,
}) => {
  const [musicInfo, setMusicInfo] = useState(musicData);
  const onSongChange = (id) => {
    setCurrentIndex(id);
    setOpenPlaylist(false);
    resetAudio();
  };
  useEffect(() => {
    const temp = musicInfo.map((val) => {
      if (val.id === currentIndex) {
        return { ...val, isActive: "active" };
      } else {
        return { ...val, isActive: null };
      }
    });
    setMusicInfo(temp);
  }, [currentIndex]);

  return (
    <section
      className="playlist__container w-full  bg-white 
    absolute top-0 z-10 overflow-y-auto overflow-x-hidden sm:absolute  sm:overflow-hidden sm:right-0 sm:w-full"
    >
      {/* Container  */}
      {/* <h3 className="relative right-28 p-5 text-xl">Song List</h3> */}
      <div className="flex flex-col h-full sm:h-screen overflow-y-auto overflow-x-hidden">
        {/* Playlist */}
        <span className="fixed sm:text-gray-800  right-8 sm:right-5 top-4" onClick={() => setOpenPlaylist(false)}>
          <Close />
        </span>
        {musicInfo.map((music) => (
          <div
            key={music.id}
            className={`p-5 sm:p-3 song__list__box ${music.isActive}`}
          >
            <div
              className="flex cursor-pointer"
              onClick={() => onSongChange(music.id)}
            >
              <div className="box w-20 h-20 sm:w-20 sm:h-20 overflow-hidden">
                <LazyLoadImage
                  src={music.cover}
                  effect="blur"
                  alt={music.cover}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="relative">
                <span className="text-black text-base mx-4 absolute min-w-max top-4 sm:top-1">
                  {music.name}
                </span>
                <span className="text-black text-base mx-4 absolute min-w-max top-10 sm:top-7">
                  {music.artist}
                </span>
              </div>
            </div>
            {/* <hr className="bg-black" /> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlayList;
