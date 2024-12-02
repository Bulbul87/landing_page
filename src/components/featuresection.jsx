import React from "react";
import img1 from "../assets/advanced-feature-1.jpg";
import img2 from "../assets/advanced-feature-2.jpg";
import img3 from "../assets/advanced-feature-3.jpg";
const FeatureSection = () => {
  return (
    <div className=" py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="md:w-1/2  animate-slide-left ">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
          </h2>
          <p className="text-gray-600 mb-6">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <p className="text-gray-600">
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={img1}
            alt="Feature"
            className="rounded-lg shadow-lg animate-pulse "
          />
        </div>
      </div>
      {/* second section */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={img2}
            alt="Feature"
            className="rounded-lg shadow-lg  animate-pulse"
          />
        </div>
        {/* Text Section */}
        <div className="md:w-1/2  animate-slide-right">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
          </h2>
          <p className="text-gray-600 mb-6">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <p className="text-gray-600">
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </div>
      </div>
      {/* third section */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="md:w-1/2  animate-slide-left ">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
          </h2>
          <p className="text-gray-600 mb-6">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <p className="text-gray-600">
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={img3}
            alt="Feature"
            className="rounded-lg shadow-lg animate-pulse "
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
