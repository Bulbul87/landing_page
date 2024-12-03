import React, { useState } from "react";
import gallery1 from '../assets/gallery-2.jpg'
import gallery2 from '../assets/gallery-3.jpg'
import gallery3 from '../assets/gallery-4.jpg'
const images = [
  { image: gallery1, alt: "Image 1" },
  { image: gallery2, alt: "Image 2" },
  { image: gallery3, alt: "Image 3" },
];

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="gallery" className="bg-gray-100 py-40 my-40">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-4">
          Gallery
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 ${
                activeIndex === index ? "shadow-xl scale-105" : "shadow-sm"
              }`}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image.image}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
