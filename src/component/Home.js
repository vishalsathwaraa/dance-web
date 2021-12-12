import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Link } from "react-router-dom";

const Home = () => {
  const slides = [
    {
      image: "/images/home/1.png",
      title: "Beatmaker",
      explore: "Explore Music",
      link:"/musicplayer",
      count: "01",
    },
    {
      image: "/images/home/2.jpg",
      title: "Dancer",
      explore: "Explore Video",
      link:"/videos",
      count: "02",
    },
    {
      image: "/images/home/3.png",
      title: "Garba Lover",
      explore: "Explore Video",
      link:"/videos",
      count: "03",
    },
  ];
  return (
    <>
      <Slider infinite={true} className="slider-wrapper">
        {slides.map(({ image, title, count, explore, link }, index) => (
          <div key={index}>
            <div
              className="flex items-center  translate-y-2/4 absolute
                           content-center flex-wrap my-72 w-screen sm:flex-col "
            >
              {/* content 1 */}
              <div className="flex flex-col flex-1 text-justify">
                <p className="mb-6 mx-60 sm:mx-10 text-lg w-max text-white tracking-widest uppercase">
                  vishal sathwara
                </p>
                <p
                  className="mb-6 mx-60  sm:mx-10 text-5xl text-white w-max  font-bold uppercase leading-loose
                             text-whitetracking-wide "
                >
                  {title}
                </p>
                <Link to={link}>
                  <p className="text-lg text-center sm:mx-10  mx-60 w-48 bg-black  rounded-full px-8 py-3 text-white  tracking-wide  hover:bg-white hover:shadow-lg hover:text-gray-900 transition duration-300  ease-linear transform hover:scale-105">
                    {explore}
                  </p>
                </Link>
              </div>
              {/* content 2*/}
              <div className="flex-1 mx-5 text-lg ele text-white  tracking-wide">
                <sub className="text-6xl font-bold"> {count}</sub>{" "}
                <span className="text-xl">/ 03</span>
              </div>
            </div>
            <img
              src={`${image}`}
              alt=""
              className="w-full h-screen object-cover"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Home;
