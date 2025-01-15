"use client";
import { concernData } from "@/data/data";
import Image from "next/image";
import React, { useState } from "react";

const ImageCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const imagesPerPage = window.innerWidth < 575 ? 1 : window.innerWidth < 992 ? 2 : 3;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = prevIndex + imagesPerPage;
            return nextIndex < concernData.length ? nextIndex : 0;
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            const prevIndexAdjusted = prevIndex - imagesPerPage;
            return prevIndexAdjusted >= 0
                ? prevIndexAdjusted
                : Math.max(0, concernData.length - imagesPerPage);
        });
    };

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
                            className="w-full sm:w-[calc(100%/2)] lg:w-[calc(100%/3)] flex-shrink-0 px-2 relative group"
                        >
                            {/* Image */}
                            <Image
                                src={image}
                                alt={title}
                                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-lg"
                            />

                            {/* Title Overlay */}
                            <div className="absolute inset-0 left-5 bottom-5 gap-5 flex items-end">
                                <h2 className="pl-2 text-xl sm:text-2xl lg:text-3xl text-white font-semibold">{title}</h2>
                            </div>
                        </div>
                    ))}
                </div>

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
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                {Array.from({ length: totalGroups }).map((_, groupIndex) => (
                    <button
                        key={groupIndex}
                        onClick={() => handleDotClick(groupIndex)}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3 lg:h-3 rounded-full ${currentIndex / imagesPerPage === groupIndex ? "bg-black" : "bg-white"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
