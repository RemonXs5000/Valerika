import React from "react";
import model1 from "../../assets/model-7.jpg";
import model2 from "../../assets/model-8.jpg";

export default function Banner2() {
  return (
    <section className="min-h-[65vh] bg-linen-100 flex justify-center items-center my-10 relative">
      <div className="flex items-center flex-col text-center gap-4">
        <h3 className="text-2xl font-semibold font-arvo">
          Tailored ,high-quality custom <br /> clothing From Valerika
        </h3>
        <p className="font-normal   text-graphite-950/70">
          Custom-designed, high-quality Clothing tailored to reflect the unique
          <br /> style of Valerika, Crafted with precision and attention to
          detail
          <br />
          ,ensuring both comfort and durability
        </p>
        <button className="rounded-4xl bg-graphite-950 text-white px-6 py-2 hover:bg-white hover:text-graphite-950 text-sm  transition-colors duration-500">
          SHOP NOW
        </button>
      </div>
      <div className="flex justify-between absolute w-[70%] -bottom-15 ">
        <img
          src={model1}
          width={150}
          alt="Model-picture"
          className="rounded-sm -rotate-10"
        />
        <img
          src={model2}
          width={150}
          alt="Model-picture"
          className="rounded-sm rotate-10"
        />
      </div>
    </section>
  );
}
