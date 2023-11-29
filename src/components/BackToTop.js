import React, { useState, useEffect } from 'react';

export default function BackToTop({ loc, setShowing }) {
    const [showBackToTopButton, setShowBackToTopButton] = useState(false);

    // Scroll to the top of the page when the "Back to Top" button is clicked.
    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle scrolling and decide when to show the button.
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowBackToTopButton(true);
            if (setShowing){
                setShowing(true);
            }
        } else {
            setShowBackToTopButton(false);
            if (setShowing){
                setShowing(false);
            }
        }
    };

    // Add a scroll event listener to call handleScroll when the user scrolls.
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {showBackToTopButton && (
                <button
                    onClick={handleBackToTop}
                    className={`fixed border-black text-black text-4xl rounded-full cursor-pointer ${loc === "homepage" ? 'bottom-24 right-4' : 'bottom-4 right-4'}`}
                >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white text-3xl">
                        &uarr;
                    </div>
                </button>
            )}
        </div>
    );
}
