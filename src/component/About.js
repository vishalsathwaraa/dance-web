import React from "react";
import { Link } from "react-router-dom";

const About = () => {

  return (
    <section
      className="text-red-50 h-auto 2xl:h-screen body-font overflow-hidden"
      style={{ backgroundColor: "#1e1e1e" }}
    >
      <div className="container mx-auto flex px-5 pt-24 pb-10 items-center justify-center flex-col">
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="sm:w-48 lg:w-2/6 md:w-3/6 w-56 mb-12 object-cover object-center "
          alt="hero"
          src="/images/about/about.png"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1
            data-aos="fade-right"
            data-aos-duration="700"
            className="title-font sm:text-4xl text-3xl mb-4 pb-5 font-medium text-yellow-600"
          >
            Vishal Sathwara
          </h1>
          <p
            className="mb-8 text-lg pb-5 sm:text-base tracking-wider"
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-delay="600"
          >
           <div className="flex flex-col leading-9">
             <span>Dancer / Choreographer / Garba Instructor</span>
             <span>Beatmaker</span>
             <span></span>
             <span>Front End Developer</span>
           </div>
            {/* Hey Everyone.
            <br /> I'm an I.T(information technology) Engineer by profession but
            I'm so much passionate about Music And Dancing.
            <br />
            So as a Music producer , Dancer and Choreographer I would love to
            teach and share the knowledge with you all. */}
          </p>
          <div className="flex justify-center">
            <Link to="/musicplayer"  className="hover-animate">
              <button
                data-aos="fade-left"
                data-aos-duration="1500"
                className="inline-flex text-black bg-gray-300 hover:bg-yellow-600 hover:text-white  border-0 mr-10 py-2 px-6 focus:outline-none rounded"
              >
                My Music
              </button>
            </Link>
            <Link to="/videos">
              {" "}
              <button
                data-aos="fade-up"
                data-aos-duration="1500"
                className="inline-flex text-black bg-gray-300 hover:bg-yellow-600 hover:text-white  border-0 py-2 px-6  rounded text"
              >
                Watch Videos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
