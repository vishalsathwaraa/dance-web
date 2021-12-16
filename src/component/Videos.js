import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../style/modal-video.min.css";

const Videos = () => {
  const [isOpen, setOpen] = useState(false);

  const [id, setId] = useState(null);
  const data = [
    { title: "dance", img: "/images/video/kya.png", id: "F4cw0Cl_g-Y" },
    { title: "dance", img: "/images/video/garba.png", id: "c6UqVwZfNwM" },
    { title: "dance", img: "/images/video/shinra.png", id: "M7cUBKjQNuo" },
    { title: "dance", img: "/images/video/tod.png", id: "PNjXY6uQSKg" },
    {
      title: "beatmaking",
      img: "/images/video/tadipaar.png",
      id: "iQ4kGaD5OVA",
    },
    {
      title: "beatmaking",
      img: "/images/video/pyaarhua.png",
      id: "3oMD_5HRaAQ",
    },
    {
      title: "beatmaking",
      img: "/images/video/deathnote.jpg",
      id: "xvT1qp17W5Q",
    },
    {
      title: "beatmaking",
      img: "/images/video/lostwithout.png",
      id: "FQTqzG4tCpc",
    },
  ];
  const [filterData, setFilterData] = useState([...data]);

  return (
    <section
      className="text-red-50 md:h-auto body-font"
      style={{ backgroundColor: "#1e1e1e" }}
    >
      {/* Switch Tab */}
      <div className="relative">
        <div className="flex justify-center pt-32">
          <span
            onClick={() => setFilterData(data)}
            className="px-8 py-2 mx-6 text-base font-medium text-black duration-500 cursor-pointer sm:px-4 sm:mx-0 bg-yellow-50 hover:bg-yellow-500 sm:text-yellow-600 rounded-3xl w-min sm:bg-transparent sm:hover:bg-green-50 sm:hover:text-black"
          >
            All
          </span>
          <span
            onClick={() => {
              setFilterData(data.filter((val) => val.title === "dance"));
            }}
            className="px-8 py-2 mx-6 text-base font-medium text-black duration-500 cursor-pointer bg-yellow-50 hover:bg-yellow-500 sm:text-yellow-600 rounded-3xl w-min sm:bg-transparent sm:hover:bg-green-50 sm:hover:text-black"
          >
            Dance
          </span>
          <span
            onClick={() =>
              setFilterData(data.filter((val) => val.title === "beatmaking"))
            }
            className="px-8 py-2 mx-6 text-base font-medium text-black duration-500 cursor-pointer sm:px-4 sm:mx-0 bg-yellow-50 hover:bg-yellow-500 sm:text-yellow-600 rounded-3xl w-min sm:bg-transparent sm:hover:bg-green-50 sm:hover:text-black"
          >
            Beatmaking
          </span>
        </div>

        {/* Gird Data */}
        <div className="grid grid-cols-3 min-h-full px-48 p-14 2xl:px-28 sm:px-14 sm:grid-cols-1 md:px-20 gap-14">
          {filterData.map(({ img, id }, index) => (
            <div
              key={id}
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="800"
              className="flex items-center justify-center"
            >
              <img
                className="absolute z-20 w-4/12 cursor-pointer"
                src="/images/video/play.png"
                alt="play"
                onClick={() => {
                  setOpen(true);
                  setId(id);
                }}
              />
              <LazyLoadImage src={img}  effect="blur" alt={img} className="rounded-2xl" />
            </div>
          ))}
        </div>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={`${id}`}
          onClose={() => setOpen(false)}
        />
      </div>
    </section>
  );
};

export default Videos;
