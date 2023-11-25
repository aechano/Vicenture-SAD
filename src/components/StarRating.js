// StarRating.js

import React, { useState } from 'react';

const StarRating = ({ totalStars = 5, onRatingChange }) => {
    const [rating, setRating] = useState(0);

    const handleClick = (selectedRating) => {
        // If the same star is clicked again, reset the rating
        const newRating = selectedRating === rating ? 0 : selectedRating;

        setRating(newRating);

        if (onRatingChange) {
            onRatingChange(newRating);
        }
    };

    return (
        <ul className="my-1 flex list-none gap-1 p-0">
            {[...Array(totalStars).keys()].map((index) => (
                <li key={index} onClick={() => handleClick(index + 1)}>
                    <span
                        className={`cursor-pointer`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke="black"
                            strokeWidth="1.5"
                            className={`text-primary h-10 w-10  ${index < rating ? 'text-yellow-500' : ''
                                }`} 
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                        </svg>
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default StarRating;
