"use client";
import { testimonials } from "@/data/data";
import React, { useState } from "react";


const TestimonialCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerGroup = 2;

    const groupedTestimonials = testimonials.reduce<{
        description: string;
        userName: string;
        companyName: string;
        profession: string;
    }[][]>((acc, curr, index) => {
        if (index % itemsPerGroup === 0) {
            acc.push([curr]);
        } else {
            acc[acc.length - 1].push(curr);
        }
        return acc;
    }, []);

    const totalGroups = groupedTestimonials.length;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalGroups);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalGroups) % totalGroups);
    };

    return (
        <div className="relative w-full mx-auto">
            <div>
                <div className="flex space-x-4 flex-wrap justify-center">
                    {groupedTestimonials[currentIndex].map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[45%] mx-auto px-5 text-center mb-4"
                        >
                            <p className="italic text-xs sm:text-sm lg:text-lg text-gray-600 mb-4">
                                {testimonial.description}
                            </p>
                            <p className="font-bold text-xl text-gray-800">{testimonial.userName}</p>
                            <p className="text-md text-gray-500">
                                {testimonial.profession} at {testimonial.companyName}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 flex items-center justify-center text-white bg-gray-800 rounded-full hover:bg-gray-700"
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
                        className="w-10 h-10 flex items-center justify-center text-white bg-gray-800 rounded-full hover:bg-gray-700"
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
        </div>
    );
};

export default TestimonialCarousel;
