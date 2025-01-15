"use client";
import { testimonials } from "@/data/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const TestimonialCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerGroup, setItemsPerGroup] = useState(2);

    useEffect(() => {
        const updateItemsPerGroup = () => setItemsPerGroup(window.innerWidth < 768 ? 1 : 2);
        updateItemsPerGroup();
        window.addEventListener("resize", updateItemsPerGroup);
        return () => window.removeEventListener("resize", updateItemsPerGroup);
    }, []);

    const groupedTestimonials = testimonials.reduce<{
        description: string;
        userName: string;
        companyName: string;
        profession: string;
    }[][]>((acc, curr, index) => {
        if (index % itemsPerGroup === 0) acc.push([curr]);
        else acc[acc.length - 1].push(curr);
        return acc;
    }, []);

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % groupedTestimonials.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + groupedTestimonials.length) % groupedTestimonials.length);

    return (
        <div className="relative w-full mx-auto">
            <div className="flex flex-wrap justify-center">
                {groupedTestimonials[currentIndex].map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-[45%] px-5 text-center mb-4">
                        <p className="italic text-xs sm:text-sm lg:text-lg text-gray-700 mb-4"><q>
                            {testimonial.description}</q></p>
                        <p className="font-bold text-xl text-gray-800">{testimonial.userName}</p>
                        <p className="text-md text-gray-500">{testimonial.profession} at {testimonial.companyName}</p>
                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
                <button onClick={handlePrev} className="w-10 h-10 flex items-center justify-center text-white bg-gray-800 rounded-full hover:bg-gray-700">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={handleNext} className="w-10 h-10 flex items-center justify-center text-white bg-gray-800 rounded-full hover:bg-gray-700">
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
