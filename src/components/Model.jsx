import React from "react";

export default function Model({ model, category }) {
  return (
    <div className="flex flex-col  overflow-hidden shadow-sm hover:shadow-xs transition-shadow duration-300 border border-gray-200/50">
      <div className="bg-sand-100 p-5 py-0">
        <img src={model} alt="Model" className="w-full  object-cover" />
      </div>
      <div className="flex justify-between items-center bg-white p-4">
        <h6 className="text-graphite-950 font-medium text-lg">{category}</h6>
        <p className="text-sm text-gray-600 hover:text-graphite-950 cursor-pointer transition-colors duration-200">
          Discover more
        </p>
      </div>
    </div>
  );
}
