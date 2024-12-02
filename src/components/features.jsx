import React, { useEffect, useRef } from "react";
import img from "../assets/product-features.png";
import "./features.css";

const Features = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              imageRef.current.classList.add("animate-slide-bottom", "visible");
              observer.unobserve(entry.target);
            }
            if (entry.target === contentRef.current) {
              contentRef.current.classList.add(
                "animate-slide-right",
                "visible"
              );
              observer.unobserve(entry.target);
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
      id="features"
      className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Left Side - Image with Scroll Animation */}
      <div
        ref={imageRef}
        className="w-full md:w-1/2 flex justify-center opacity-0"
      >
        <img src={img} alt="Hand holding phone" className="max-w-xs" />
      </div>

      {/* Right Side - Content with Scroll Animation */}
      <div ref={contentRef} className="w-full md:w-1/2 mt-8 md:mt-0 opacity-0">
        <h2 className="text-4xl text-teal-400 font-bold mb-4">
          Product Features
        </h2>
        {/* Flex container to divide content into two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-600">Lorem Ipsum</h3>
            <p className="text-gray-600">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident clarida perendo.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-600">
              Dolor Sit Amet
            </h3>
            <p className="text-gray-600">
              Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat tarad limino ata noble dynala
              mark.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-600">
              Sed ut Perspiciatis
            </h3>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur teleca starter sinode park
              ledo.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-600">
              Magni Dolores
            </h3>
            <p className="text-gray-600">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum dinoun trade capsule.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
