import React from "react";
import BannerItem from "./BannerItem";
import { Truck, Info, CreditCard, ShoppingCart } from "lucide-react";

export default function Banner() {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      desc: "Enjoy free shipping on everything.",
    },
    {
      icon: Info,
      title: "Customer Support",
      desc: "Always here to assist you.",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      desc: "Fast, safe, and secure payments.",
    },
    {
      icon: ShoppingCart,
      title: "Seamless Shopping",
      desc: "Smooth, easy, and convenient.",
    },
  ];

  return (
    <div className="w-[90%] mx-auto flex flex-wrap justify-around gap-6 py-10 bg-gradient-to-b from-linen-100 to-white rounded-md">
      {features.map((item) => (
        <BannerItem icon={item.icon} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
}
