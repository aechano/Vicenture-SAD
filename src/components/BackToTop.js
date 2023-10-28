// BackToTop.js

import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  // Scroll to the top of the page when the "Back to Top" button is clicked.
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle scrolling and decide when to show the button.
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTopButton(true);
    } else {
      setShowBackToTopButton(false);
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
      {/* Back to Top button */}
      {showBackToTopButton && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-4 right-4 border-black text-black text-4xl p-2 rounded-full cursor-pointer"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white text-3xl">
            {/* Center the arrow inside the circle */}
            &uarr; {/* Use the up arrow character */}
          </div>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
