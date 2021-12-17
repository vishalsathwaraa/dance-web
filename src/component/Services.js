import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ImageLoader } from "./Loader";

const Services = () => {
  const [showBanner, setShowBanner] = useState(false);
  
  useEffect(() => {
    const listener = (e) => {
      console.log(e.target.classList.contains("banner"));
      if (!e.target.classList.contains("banner")) {
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, []);
  return (
    <section className="w-full pb-10" style={{ backgroundColor: "#1e1e1e" }}>
      {/* HEADING */}
      {showBanner && (
        <div className="absolute left-1/2 top-1/2 w-2/6 sm:w-11/12 z-10 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <LazyLoadImage
            effect="blur"
            src="../images/services/banner.jpg"
            alt=""
            className="banner z-10"
          />
        </div>
      )}

      <div className="relative sm:px-10">
        <div
          className="relative top-28"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl text-yellow-600 pb-6">Services</h2>
          <span className="text-red-50 text-lg sm:text-base">
            New Dance Batch will Start from 1st of January. <br /> Make sure to
            register yourself if you are intrested{" "}
            <span
              className="cursor-pointer text-yellow-500 italic"
              onClick={() => setShowBanner(true)}
            >
              Click For More Details
            </span>
          </span>
          <div className="w-full flex justify-center py-10">
            <hr className="w-20 text-center rounded-full border-2" />
          </div>
        </div>

        {/* FIRST ROW */}
        <div className="relative mt-32 mb ">
          <div className="px-52 mt-2 flex items-center justify-around  flex-wrap  w-full  sm:px-2">
            <div className=" w-80 h-auto top-4">
              <LazyLoadImage
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
                placeholder={<ImageLoader />}
                src="/images/services/dancer.png"
                className="object-cover w-3/4 mx-4"
                alt="dncer"
              />
              <header className="py-4 pt-8 text-xl tracking-wide text-yellow-500">
                Dance Training
              </header>
              <p className="py-2 text-red-50">
                Learn and Groove your feet with different dance styles including
                Popping , Tutting , Hip-Hop , Bollywood , Urban and Old School
              </p>
            </div>

            <div className=" h-auto w-80">
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
                src="/images/services/garba1.png"
                className="object-cover w-full"
                alt="dncer"
              />

              <header className="pt-10 text-xl tracking-wide text-yellow-500">
                Garba Classes
              </header>
              <p className="pt-7 sm:pb-8 text-red-50">
                Learn Basic to Advance level Garba steps including be taali
                garba (2-clap garba), tran taali garba (3-clap garba), raas,
                hinch, dodhiya and many more.
              </p>
            </div>

            <div className="w-80">
              <img
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="300"
                src="/images/services/couple.png"
                className="object-contain w-full h-64"
                alt="dncer"
              />
              <header className="pt-12 text-xl tracking-wide text-yellow-500">
                Wedding Choreography
              </header>
              <p className=" text-red-50 relative top-5">
                Your Wedding Celebrations will remain incomplete without dancing
                and Music.Leave the medley creation to us and we’ll help you
                with the songs also.
              </p>
            </div>
          </div>

          {/* SECOND ROW*/}
          <div className="px-80 mt-10 flex items-center justify-around  flex-wrap  w-full  sm:px-20">
            <div className="w-56 my-2">
              <img
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
                src="/images/services/remix.png"
                className="object-cover w-full pb-4"
                alt="dncer"
              />

              <header className="py-4 text-xl tracking-wide text-yellow-500">
                Music Production
              </header>
              <p className="py-2 text-red-50 sm:w-44">
                Learn fundamentals of music production using Flstudio, Basic
                Piano lessons, Create melody with wide range of plugins and make
                your own beat from scratch and many more.
              </p>
            </div>
            <div className="mt-8 w-44">
              <img
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="300"
                src="/images/services/flstudio.png"
                className="object-cover w-full pb-7"
                alt="dncer"
              />
              <header className="text-xl pt-5 tracking-wide text-yellow-500">
                Song Remix
              </header>
              <p className="py-6 text-red-50">
                Remix songs with base patterns and learn different sampling
                techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
