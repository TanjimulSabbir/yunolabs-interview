"use client";
import { useState, useEffect } from "react";
import { concernData } from "@/data/data";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesPerPage, setImagesPerPage] = useState(3);

    useEffect(() => {
        const updateImagesPerPage = () => {
            if (window.innerWidth < 575) setImagesPerPage(1);
            else if (window.innerWidth < 992) setImagesPerPage(2);
            else setImagesPerPage(3);
        };

        updateImagesPerPage();
        window.addEventListener("resize", updateImagesPerPage);

        return () => window.removeEventListener("resize", updateImagesPerPage);
    }, []);

    const handleNext = () => {
        setCurrentIndex(prev => (prev + imagesPerPage) % concernData.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prev => (prev - imagesPerPage + concernData.length) % concernData.length);
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index * imagesPerPage);
    };

    const totalGroups = Math.ceil(concernData.length / imagesPerPage);

    return (
        <div className="relative w-full">
            <div className="overflow-hidden relative">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${(currentIndex / imagesPerPage) * 100}%)` }}>
                    {concernData.map(({ id, title, image }) => (
                        <div key={id} className="w-full sm:w-[calc(100%/2)] lg:w-[calc(100%/3)] flex-shrink-0 px-2 relative">
                            <Image
                                src={image}
                                alt={title}
                                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 flex items-end justify-center text-center">
                                <div className="w-full px-5 pb-10 sm:text-2xl lg:text-3xl text-white font-semibold overflow-hidden truncate">
                                    <h2 className="text-xl w-full">{title}</h2>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
                    <button onClick={handlePrev} className="w-10 h-10 flex items-center justify-center text-white bg-gray-800 border border-gray-600 rounded-full hover:bg-gray-700 focus:outline-none shadow-lg transform hover:scale-110">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={handleNext} className="w-10 h-10 flex items-center justify-center text-white bg-gray-800 border border-gray-600 rounded-full hover:bg-gray-700 focus:outline-none shadow-lg transform hover:scale-110">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div className="hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 md:flex items-center space-x-2">
                {Array.from({ length: totalGroups }).map((_, groupIndex) => (
                    <button
                        key={groupIndex}
                        onClick={() => handleDotClick(groupIndex)}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3 lg:h-3 rounded-full ${currentIndex / imagesPerPage === groupIndex ? "bg-black" : "bg-white"}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
