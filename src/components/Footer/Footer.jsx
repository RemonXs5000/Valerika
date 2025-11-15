import React from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f4f2ec] py-16 mt-20 text-[#1a1a1a]">
      <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Subscribe to get 10% OFF
          </h3>
          <p className="text-sm mb-5">
            Subscribe for store updates and discounts.
          </p>

          <div className="flex items-center bg-white rounded-full shadow-sm px-5 py-3 w-full max-w-xs">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 outline-none bg-transparent text-sm"
            />
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>Career</li>
            <li>Social projects</li>
            <li>Sustainability</li>
          </ul>
        </div>

        {/* Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Service</h3>
          <ul className="space-y-2 text-sm">
            <li>Newsletter</li>
            <li>My Account</li>
            <li>Wishlist</li>
            <li>Shipping & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Support</li>
            <li>Showroom & contact</li>
            <li>Press contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="w-[85%] mx-auto mt-16 flex flex-col md:flex-row justify-between items-center border-t pt-6 text-sm">
        <p>© Valerika 2025. All Rights Reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <button className="rounded-full w-8 h-8 border flex items-center justify-center">
            f
          </button>
          <button className="rounded-full w-8 h-8 border flex items-center justify-center">
            
          </button>
          <button className="rounded-full w-8 h-8 border flex items-center justify-center">
            ⌾
          </button>
        </div>
      </div>
    </footer>
  );
}
