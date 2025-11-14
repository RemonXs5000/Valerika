import React from "react";
import Model from "../Model";

import model1 from "../../assets/model-10.png";
import model2 from "../../assets/model-11.jpg";
import model3 from "../../assets/model-13.png";
import model4 from "../../assets/model-14.png";
import model5 from "../../assets/clothing.png";
import model6 from "../../assets/clothing2.png";

export default function Banner3() {
  return (
    <section className="flex gap-5 w-[85%] mx-auto my-10">
      {/* Left side models */}
      <div className="flex gap-1 flex-[3]">
        <Model model={model3} category={"Skirt"} />
        <Model model={model4} category={"Skirt"} />
      </div>

      {/* Right side content */}
      <div className="flex flex-col gap-3 flex-[2] p-5">
        <h2 className="font-semibold font-arvo text-5xl">
          New Styles for a Modern look
        </h2>

        <p className="text-graphite-950 text-sm">
          Explore curated outfits to perfect your style effortlessly
        </p>

        {/* 2x2 GRID FIXED SIZE FRAMES */}
        <div className="grid grid-cols-2 gap-3 my-5">
          {[model1, model5, model6, model2].map((img, i) => (
            <div
              key={i}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-lg"
            >
              <img
                src={img}
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
