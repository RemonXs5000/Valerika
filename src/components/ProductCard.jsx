import React from "react";

export default function ProductCard({
  modelPic,
  title,
  category,
  price,
  index,
}) {
  return (
    <div key={index} className="flex flex-col gap-2  rounded-xl p-5   ">
      <div className="bg-sand-100  overflow-hidden max-h-90">
        <img
          src={modelPic}
          alt={title}
          className="w-full object-cover scale-120"
        />
      </div>

      <p className="text-md font-[500] text-gray-800 mt-2 font-trust">
        {title}
      </p>

      <div className="flex items-center gap-2 text-sm text-graphite-950">
        <p>{category}</p>
        <span className="text-graphite-950 font-ubuntu">|</span>
        <p>${price}</p>
      </div>
    </div>
  );
}
