import React, { useEffect, useRef, useState } from "react";
import { HiDotsHorizontal } from 'react-icons/hi'
import { AiOutlineComment, AiTwotoneStar } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import { API, PATH_NAME, USER_TYPES } from '../Variables/GLOBAL_VARIABLE';
import axios from "axios";

export default function TourismCards({ content, onClick, userType }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [image, setImage] = useState({});
    const [contentRating, setContentRating] = useState({ rating: 0.0, votes: 0 });
    const [deleted, setDeleted] = useState(false);

    const wrapperRef = useRef(null);

    // Function to toggle the dropdown
    const toggleDropdown = (event) => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Function to close the dropdown when clicking outside of it
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                if (isDropdownOpen) {
                    setIsDropdownOpen(false);
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    useEffect(() => {
        for (var mediaID of content.mediaIDs) {
            if (mediaID.altText === "&thumbnail;") {
                setImage({
                    pic: mediaID.image,
                    alt: mediaID.altText
                })
                break;
            }
        }
        axios.get(API.contentRating(content.contentID), {})
            .then((response) => response.data)
            .then((data) => {
                setContentRating({
                    rating: data.rating !== "NaN" ? data.rating : 0.0,
                    votes: data.votes ? data.votes : 0
                });
            });
    }, []);

    const handleDelete = () => {
        axios.post(API.ContentDelete(content.contentID), {});
    }

    return (
        !deleted && <>
            <div className="m-3 flex flex-col items-center bg-white border border-gray-100 rounded-sm shadow md:flex-row md:mx-auto hover:bg-gray-100 dark:border-gray-200 dark:bg-gray-100 dark:hover:hover:bg-gray-200 select-none cursor-pointer" onClick={onClick}>
                {image.pic ?
                    <img className="object-cover w-full h-96 md:h-auto md:w-48 md:rounded-lg m-3 p-2" src={image.pic} alt={image.altText} />
                    :
                    null}
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className='flex justify-between'>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{content.title}</h5>
                        <div className='relative' onClick={(event) => event.stopPropagation()}>
                            {[USER_TYPES.LguSV, USER_TYPES.Admin].includes(userType) ?
                                <>
                                    <div className='text-2xl' onClick={toggleDropdown}>
                                        <HiDotsHorizontal />
                                    </div>
                                    <div
                                        className={'absolute top-5 -right-2 z-10 block w-32 bg-white border border-gray-300 rounded-lg shadow py-2 px-4' + (isDropdownOpen ? '' : ' hidden')}
                                        ref={wrapperRef}
                                    >
                                        <div>
                                            <div className="block">
                                                {/* Add an "Edit" link */}
                                                <button onClick={handleDelete} className={"mt-2 block"}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                null}
                        </div>
                    </div>
                    <p className="mb-3 font-normal text-stone-500 dark:text-gray-800 line-clamp-3">{content.body}</p>
                    <div className="flex items-center">
                        {contentRating.rating !== 0
                            ?
                            <>
                                <svg className={"w-2 h-4 ml-1 " + (contentRating.rating >= 0.5 ? "text-yellow-300" : "text-gray-300")}
                                    aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                                    <path d="M12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" />
                                </svg>
                                <svg className={"w-2 h-4 " + (contentRating.rating >= 1.0 ? "text-yellow-300" : "text-gray-300")}
                                    aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                                    <path d="M0 2 3.09 8.26 10 9.27 5 14.14 6.18 21.02 0 17.77" />
                                </svg>
                                <svg className={"w-2 h-4 ml-1 " + (contentRating.rating >= 1.5 ? "text-yellow-300" : "text-gray-300")}
                                    aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                                    <path d="M12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" />
                                </svg>
                                <svg className={"w-2 h-4 " + (contentRating.rating >= 2.0 ? "text-yellow-300" : "text-gray-300")}
                                    aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                                    <path d="M0 2 3.09 8.26 10 9.27 5 14.14 6.18 21.02 0 17.77" />
                                </svg>
                                <svg className={"w-2 h-4 ml-1 " + (contentRating.rating >= 2.5 ? "text-yellow-300" : "text-gray-300")}
                                    aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                                    <path d="M12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" />
                                </svg>
                                <svg className={"w-2 h-4 " + (contentRating.rating >= 3.0 ? "text-yellow-300" : "text-gray-300")}
                                    aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                                    <path d="M0 2 3.09 8.26 10 9.27 5 14.14 6.18 21.02 0 17.77" />
                                </svg>
                                <svg className={"w-2 h-4 ml-1 " + (contentRating.rating >= 3.5 ? "text-yellow-300" : "text-gray-300")}
                                    aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                                    <path d="M12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" />
                                </svg>
                                <svg className={"w-2 h-4 " + (contentRating.rating >= 4.0 ? "text-yellow-300" : "text-gray-300")}
                                    aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                                    <path d="M0 2 3.09 8.26 10 9.27 5 14.14 6.18 21.02 0 17.77" />
                                </svg>
                                <svg className={"w-2 h-4 ml-1 " + (contentRating.rating >= 4.5 ? "text-yellow-300" : "text-gray-300")}
                                    aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                                    <path d="M12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" />
                                </svg>
                                <svg className={"w-2 h-4 " + (contentRating.rating >= 5.0 ? "text-yellow-300" : "text-gray-300")}
                                    aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                                    <path d="M0 2 3.09 8.26 10 9.27 5 14.14 6.18 21.02 0 17.77" />
                                </svg>
                            </>
                            :
                            <>
                                <AiTwotoneStar />
                                <p>No Rating</p>
                            </>
                        }

                        <div className='flex w-auto h-4'>
                            {
                                contentRating.rating !== 0
                                    ?
                                    <>
                                        <p className='text-xs sm:text-sm font-semibold pl-2'>{contentRating.rating}</p>
                                        <p className='text-xs sm:text-sm font-semibold pl-2'>|</p>
                                        <div className="flex">
                                            <p className='text-xs sm:text-sm font-semibold pl-2'>{contentRating.votes}</p>
                                            <p className='text-xs sm:text-sm font-semibold pl-1'>votes</p>
                                        </div>
                                    </>
                                    :
                                    null

                            }
                            <div className='flex pl-2'>
                                <AiOutlineComment />
                                <div className="flex">
                                    <p className='text-xs sm:text-sm font-semibold pl-2'>{content.comments}</p>
                                    <p className='text-xs sm:text-sm font-semibold pl-1'>comments</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>

    );

}