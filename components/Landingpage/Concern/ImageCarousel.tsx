"use client"
import { concernData } from "@/data/data";
import Image from "next/image";
import React, { useState } from "react";

const ImageCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % concernData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 3 + concernData.length) % concernData.length);
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full">
            {/* Carousel Image */}
            <div className="w-1/3">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {concernData.map(({ id, title, image }) => (
                        <Image
                            key={id}
                            src={image}
                            alt={title}
                            className="min-w-[300px] h-[200px] object-cover"
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                {concernData.map(({ id }) => (
                    <button
                        key={id}
                        onClick={() => handleDotClick(id)}
                        className={`w-3 h-3 rounded-full ${currentIndex === id ? "bg-blue-500" : "bg-gray-400"
                            }`}
                    >
                    </button>
                ))}
            </div>

            {/* Left & Right Navigation */}
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
