import React from "react";
import model1 from "../../assets/model-5.png";
import model2 from "../../assets/model-6.png";
import Model from "../Model";

export default function NewSeason() {
  return (
    <section className=" w-[90%] py-20 my-7 mx-auto">
      <div className="flex  items-center justify-around gap-5">
        <Model model={model2} category={"Blouses"} />
        <div className="flex flex-col gap-5 items-center ">
          <h3 className="title text-3xl font-trust">
            New Season <br /> Styles
          </h3>
          <p className="text-center text-md text-graphite-950/70">
            Discover the latest additions to our best <br />
            -selling Loungewear collection
          </p>
          <button className="rounded-4xl bg-graphite-950 text-sm  text-white px-6 py-2 hover:bg-white hover:text-graphite-950   transition-colors duration-500">
            SHOP NOW
          </button>
        </div>
        <Model model={model1} category={"Dresses"} />
      </div>
    </section>
  );
}
