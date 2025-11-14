import React from "react";
import { UserRound, Search, Heart, ShoppingBasket } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-[90%] mx-auto px-2 py-6 ">
      <p className="text-2xl font-playfair font-black">Valerika</p>
      <ul className="flex gap-5 font-ubuntu text-[16px] font-extralight">
        <li>New</li>
        <li>Categories</li>
        <li>Inspirations</li>
        <li>Fashion Cards</li>
        <li>Sales</li>
        <li>About us</li>
      </ul>
      <ul className="flex gap-5">
        <li>
          <UserRound size={18} />
        </li>
        <li>
          <Search size={18} />
        </li>
        <li>
          <Heart size={18} />
        </li>
        <li>
          <ShoppingBasket size={18} />
        </li>
      </ul>
    </nav>
  );
}
