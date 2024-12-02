import React, { useEffect, useRef } from "react";
import img from "../assets/about-img.jpg";
import "./about.css";

export default function About() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              imageRef.current.classList.add("animate-slide-left", "visible");
              observer.unobserve(entry.target); // Stop observing after animation
            }
            if (entry.target === contentRef.current) {
              contentRef.current.classList.add(
                "animate-slide-right",
                "visible"
              );
              observer.unobserve(entry.target); // Stop observing after animation
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <div
      id="about"
      className="   max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Image Section with Scroll Animation */}
      <div ref={imageRef} className="w-full md:w-1/2 md:pl-10 opacity-0">
        <img src={img} alt="About Us" className="rounded-lg shadow-lg  " />
      </div>

      {/* Content Section with Scroll Animation */}
      <div ref={contentRef} className="w-full md:w-1/2 md:pl-10 opacity-0">
        <h1 className="text-4xl text-teal-400 font-bold">About us</h1>
        <h2 className="text-3xl font-bold mb-4 text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h2>
        <p className="text-gray-600 italic font-semibold mb-4">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <p className="text-gray-700 mb-4 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start text-gray-700 font-semibold">
            <span className="text-green-500 mr-2">✔</span>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </li>
          <li className="flex items-start text-gray-700 font-semibold">
            <span className="text-green-500 mr-2">✔</span>
            Duis aute irure dolor in reprehenderit in voluptate velit.
          </li>
          <li className="flex items-start text-gray-700 font-semibold">
            <span className="text-green-500 mr-2">✔</span>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </li>
        </ul>
      </div>
    </div>
  );
}
