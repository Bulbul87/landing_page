import React from "react";
import Cards from "./Cards";
export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center text-center py-20 bg-teal-500 text-white  "
    >
      <h2 className="text-4xl font-bold pt-6">Welcome to Avilon</h2>
      <p className="text-lg mt-4">
        We can build a responsive website using tailwind css
      </p>
      <button className="mt-8 px-6 py-2 bg-white text-teal-500 font-semibold rounded-full shadow-md transition transform hover:scale-105">
        Get Started
      </button>
      <Cards />
    </section>
  );
}
