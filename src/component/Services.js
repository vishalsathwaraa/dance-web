import React from "react";

const Services = () => {
  return (
    <section className="w-full pb-10" style={{ backgroundColor: "#1e1e1e" }}>
      {/* HEADING */}

      <div className="relative sm:px-10">
        <div
          className="relative top-28"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl text-yellow-600 pb-6">Services</h2>
          <span className="text-red-50 text-lg sm:text-base">
            New Music Production And Dance Batch will Start from this March.{" "}
            <br /> So make sure to register yourself if you are intrested and
            want to learn new your skills.
          </span>
          <div className="w-full flex justify-center py-10">
            <hr className="w-20 text-center rounded-full border-2" />
          </div>
        </div>

        {/* FIRST ROW */}
        <div className="relative mt-32 mb ">
          <div className="px-52 mt-2 flex items-center justify-around  flex-wrap  w-full  sm:px-2">
            <div className=" w-80 h-auto top-4">
              <img
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
                src="/images/services/dancer.png"
                className="object-cover w-3/4 mx-4"
                alt="dncer"
              />
              <header className="py-4 pt-8 text-xl tracking-wide text-yellow-500">
                Dance Training
              </header>
              <p className="py-2 text-red-50">
                Learn and Groove your feet with different dance styles including
                Popping , Tutting Hip-Hop , Bollywood Breaking , Urban and Old
                School
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

              <header className="py-4 pt-4 text-xl tracking-wide text-yellow-500">
                Garba Classes
              </header>
              <p className="py-2 text-red-50">
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
                Your Wedding Celebrations will remain incomplete without dance
                and music.so don't make it boring and Contact us for Solo,Group
                and Couple Dance Choreography.
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
              <p className="py-2 text-red-50">
                Learn music production with the latest technology using
                Flstudio.I'll teach you basic piano skills,how to create
                melody,various plugins and Vst's,make your own beat from Scratch
                and many more.
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
                Remix any type of song very quickly and easily with
                flstudio.Also learn various sampling techniques and chopping of
                vocals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
