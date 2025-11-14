import React from "react";
import model from "../../assets/Model.png";
// import discount from "../../assets/discount.png";

const Hero = () => {
  return (
    <section className="p-4">
      <div className="  h-[90vh] flex flex-col items-center pt-32 relative">
        <h1 className="text-8xl font-extrabold font-ubuntu text-graphite-950  [word-spacing:200px] relative left-17">
          NEW SEASON
        </h1>
        <img src={model} alt="Hero Model" className="absolute top-0 left-94" />
        <h1 className="text-8xl font-extrabold font-ubuntu text-graphite-950  [word-spacing:280px]  relative right-18  translate-x-6">
          STYLE HERE
        </h1>
        <div className="flex justify-around items-center w-[70%] mt-3">
          <p></p>

          <button className="rounded-4xl bg-graphite-950 text-sm  text-white px-6 py-2 hover:bg-white hover:text-graphite-950   transition-colors duration-500">
            DISCOVER HERE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
