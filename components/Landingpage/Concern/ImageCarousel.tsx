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
            const nextIndex = prevIndex + imagesPerPage;
            return nextIndex < concernData.length ? nextIndex : 0;
        });
    };

    // Handle navigation to the previous group of images
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
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
            <div className="overflow-hidden relative">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${(currentIndex / imagesPerPage) * 100}%)` }}
                >
                    {concernData.map(({ id, title, image }) => (
                        <div
                            key={id}
                            className="w-[calc(100%/3)] flex-shrink-0 px-2 relative group"
                        >
                            {/* Image */}
                            <Image
                                src={image}
                                alt={title}
                                className="w-full h-[500px] object-cover rounded-lg"
                            />

                            {/* Title Overlay */}
                            <div className="absolute inset-0 left-5 bottom-5 gap-5 flex items-end">

                                <h2 className="pl-2 text-3xl text-white font-semibold">{title}</h2>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 flex items-center justify-center text-white bg-gray-800 border border-gray-600 rounded-full hover:bg-gray-700 focus:outline-none shadow-lg transition-transform transform hover:scale-110"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 flex items-center justify-center text-white bg-gray-800 border border-gray-600 rounded-full hover:bg-gray-700 focus:outline-none shadow-lg transition-transform transform hover:scale-110"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                {Array.from({ length: totalGroups }).map((_, groupIndex) => (
                    <button
                        key={groupIndex}
                        onClick={() => handleDotClick(groupIndex)}
                        className={`w-3 h-3 rounded-full ${currentIndex / imagesPerPage === groupIndex ? "bg-black" : "bg-white"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
