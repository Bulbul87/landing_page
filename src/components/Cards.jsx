import React from "react";
import img3 from "../assets/product-screen-3.png";
import img2 from "../assets/product-screen-2.png";
import img1 from "../assets/product-screen-1.png";
import "./customcss.css";
export default function Cards() {
  return (
    <div className="flex justify-center mt-10 space-x-4 ">
      {/* Card 1 - Slide in from left */}
      <div className="bg-white p-4 rounded-lg shadow-lg transform transition duration-700 ease-out animate-slide-left hover:shadow-slate-100">
        <img className="size-80" src={img1} alt="Card 1" />
      </div>

      {/* Card 2 - Slide in from bottom */}
      <div className="bg-white p-4 rounded-lg shadow-lg transform transition duration-700 ease-out animate-slide-bottom hover:shadow-slate-100">
        <img  className="size-80" src={img2} alt="Card 2" />
      </div>

      {/* Card 3 - Slide in from right */}
      <div className="bg-white p-4  rounded-lg shadow-lg transform transition duration-700 ease-out animate-slide-right hover:shadow-slate-100">
        <img  className="size-80" src={img3} alt="Card 3" />
      </div>
    </div>
  );
}
