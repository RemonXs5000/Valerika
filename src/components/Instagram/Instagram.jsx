import React from "react";
import model2 from "../../assets/insta.png";
import model3 from "../../assets/insta2.png";
import { Instagram } from "lucide-react";

export default function InstagramBanner() {
  return (
    <section className="min-h-screen bg-linen-50 flex justify-center items-center">
      <div className="flex items-center gap-14">
        {/* Image 1 */}
        <img src={model2} alt="" className="w-80 h-auto rounded-2xl" />

        {/* Center Text */}
        <div className="flex flex-col gap-4 text-center">
          <p className="text-gray-600 text-sm tracking-wide">Follow Us</p>

          <h2 className="text-3xl  text-graphite-950 leading-tight font-arvo">
            We’re VALERIKA <br /> on Instagram
          </h2>

          <a href="instagram.com/Valerika%20store">Valerika</a>
        </div>

        {/* Image 2 */}
        <img src={model3} alt="" className="w-80 h-auto rounded-2xl" />
      </div>
    </section>
  );
}
