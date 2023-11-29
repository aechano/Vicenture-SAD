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
        </div>
    );
};

export default CarouselComponent;
