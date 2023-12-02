import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const CarouselComponent = ({ images, autoSlideInterval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, autoSlideInterval);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentIndex, autoSlideInterval, images.length]);

    return (
        <div className="w-full object-cover h-screen lg:h-auto">
            <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out transform -translate-x-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover rounded-md"
                        />
                    ))}
                </div>
            </div>

            {/* Arrow buttons removed */}
            <button className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prevSlide}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lgu-green group-hover:bg-green-600 group-focus:ring-4 group-focus:ring-green-500 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white tl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextSlide}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lgu-green group-hover:bg-green-600 group-focus:ring-4 group-focus:ring-green-500 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default CarouselComponent;
