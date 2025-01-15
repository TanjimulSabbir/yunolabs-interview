"use client";
import { concernData } from "@/data/data";
import Image from "next/image";
import React, { useState } from "react";

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 3; // Number of images in each group

  // Handle navigation to the next group of images
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      // Ensure we don't go beyond the last group
      const nextIndex = prevIndex + imagesPerPage;
      return nextIndex < concernData.length ? nextIndex : 0;
    });
  };

  // Handle navigation to the previous group of images
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      // Ensure we loop back to the last group if going negative
      const prevIndexAdjusted = prevIndex - imagesPerPage;
      return prevIndexAdjusted >= 0
        ? prevIndexAdjusted
        : Math.max(0, concernData.length - imagesPerPage);
    });
  };

  // Handle dot click to navigate to a specific group
  const handleDotClick = (groupIndex: number) => {
    setCurrentIndex(groupIndex * imagesPerPage);
  };

  const totalGroups = Math.ceil(concernData.length / imagesPerPage);

  return (
    <div className="relative w-full">
      {/* Carousel Images */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(currentIndex / imagesPerPage) * 100}%)` }}
        >
          {concernData.map(({ id, title, image }) => (
            <div
              key={id}
              className="w-[calc(100%/3)] h-[200px] flex-shrink-0"
            >
              <Image
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
        {Array.from({ length: totalGroups }).map((_, groupIndex) => (
          <button
            key={groupIndex}
            onClick={() => handleDotClick(groupIndex)}
            className={`w-3 h-3 rounded-full ${
              currentIndex / imagesPerPage === groupIndex
                ? "bg-blue-500"
                : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 focus:outline-none"
        >
          &#x2190;
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 focus:outline-none"
        >
          &#x2192;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
