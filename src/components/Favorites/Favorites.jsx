import React, { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ProductCard from "../ProductCard";
// slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { dummyProducts } from "../../../Data/Products.js";

export default function Favorites() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-[90%] mx-auto my-10 p-5 ">
      <div className="flex justify-between mb-2">
        <h3 className="title">Our Favorites</h3>

        <div className="flex gap-4 items-center ">
          <button
            ref={prevRef}
            aria-label="Previous"
            className="p-2 rounded-full border border-graphite-950/50"
          >
            <ChevronLeft />
          </button>
          <button
            ref={nextRef}
            aria-label="Next"
            className="p-2 rounded-full border border-graphite-950/50"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="p-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // assign the refs to swiper params
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          className="pb-10"
        >
          {dummyProducts.map((p, i) => (
            <SwiperSlide key={i}>
              <ProductCard {...p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
