import React from "react";

export default function FashionNews() {
  return (
    <section className="min-h-[50%] w-[85%] mx-auto">
      <div className="flex justify-between items-center">
        <h3 className="title my-10">Fashion News</h3>
        <button className="rounded-4xl bg-graphite-950 text-sm  text-white px-6 py-2 hover:bg-white hover:text-graphite-950   transition-colors duration-500">
          Read More
        </button>
      </div>
    </section>
  );
}
