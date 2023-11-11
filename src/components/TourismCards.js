import React, { useState } from "react";
import { HiDotsHorizontal } from 'react-icons/hi'
import { AiOutlineComment } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import { PATH_NAME } from '../Variables/GLOBAL_VARIABLE';


export default function TourismCards({ content, onClick }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle the dropdown
    const toggleDropdown = (event) => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Function to close the dropdown when clicking outside of it
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };
    return (
        <>
            <div className="m-3 flex flex-col items-center bg-white border border-gray-100 rounded-sm shadow md:flex-row md:mx-auto hover:bg-gray-100 dark:border-gray-200 dark:bg-gray-100 dark:hover:hover:bg-gray-200 select-none cursor-pointer" onClick={onClick}>
                <img className="object-cover w-full h-96 md:h-auto md:w-48 md:rounded-lg m-3 p-2" src={content.pic} alt="Mananap Falls" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className='flex justify-between'>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{content.title}</h5>
                        <div className='relative' onClick={(event) => event.stopPropagation()}>
                            <div className='text-2xl' onClick={toggleDropdown}>
                                <HiDotsHorizontal />
                            </div>
                            <div
                                className={'absolute top-5 -right-2 z-10 block w-32 bg-white border border-gray-300 rounded-lg shadow py-2 px-4' + (isDropdownOpen ? '' : ' hidden')}
                            >
                                <div className="mb-2">
                                    <NavLink to="#">Report</NavLink>
                                </div>
                                <div className="mb-2">
                                    <NavLink to="#">Edit</NavLink> {/* Add an "Edit" link */}
                                </div>
                                <div>
                                    <NavLink to="#">Delete</NavLink> {/* Add a "Delete" link */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mb-3 font-normal text-stone-500 dark:text-gray-800 line-clamp-3">{content.body}</p>
                    <div className="flex items-center">
                        <svg className={"w-2 h-4 ml-1 " + (content.rate >= 0.5 ? "text-yellow-300" : "text-gray-300")}
                            aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" />
                        </svg>
                        <svg className={"w-2 h-4 " + (content.rate >= 1.0 ? "text-yellow-300" : "text-gray-300")}
                            aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M0 2 3.09 8.26 10 9.27 5 14.14 6.18 21.02 0 17.77" />
                        </svg>
                        <svg className={"w-2 h-4 ml-1 " + (content.rate >= 1.5 ? "text-yellow-300" : "text-gray-300")}
                            aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" />
                        </svg>
                        <svg className={"w-2 h-4 " + (content.rate >= 2.0 ? "text-yellow-300" : "text-gray-300")}
                            aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M0 2 3.09 8.26 10 9.27 5 14.14 6.18 21.02 0 17.77" />
                        </svg>
                        <svg className={"w-2 h-4 ml-1 " + (content.rate >= 2.5 ? "text-yellow-300" : "text-gray-300")}
                            aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" />
                        </svg>
                        <svg className={"w-2 h-4 " + (content.rate >= 3.0 ? "text-yellow-300" : "text-gray-300")}
                            aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M0 2 3.09 8.26 10 9.27 5 14.14 6.18 21.02 0 17.77" />
                        </svg>
                        <svg className={"w-2 h-4 ml-1 " + (content.rate >= 3.5 ? "text-yellow-300" : "text-gray-300")}
                            aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" />
                        </svg>
                        <svg className={"w-2 h-4 " + (content.rate >= 4.0 ? "text-yellow-300" : "text-gray-300")}
                            aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M0 2 3.09 8.26 10 9.27 5 14.14 6.18 21.02 0 17.77" />
                        </svg>
                        <svg className={"w-2 h-4 ml-1 " + (content.rate >= 4.5 ? "text-yellow-300" : "text-gray-300")}
                            aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" />
                        </svg>
                        <svg className={"w-2 h-4 " + (content.rate >= 5.0 ? "text-yellow-300" : "text-gray-300")}
                            aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M0 2 3.09 8.26 10 9.27 5 14.14 6.18 21.02 0 17.77" />
                        </svg>

                        <div className='flex w-auto h-4'>
                            <p className='text-xs sm:text-sm font-semibold pl-2'>{content.rate.toFixed(1)}</p>
                            <p className='text-xs sm:text-sm font-semibold pl-2'>|</p>
                            <div className="flex">
                                <p className='text-xs sm:text-sm font-semibold pl-2'>{content.vote}</p>
                                <p className='text-xs sm:text-sm font-semibold pl-1'>votes</p>
                            </div>


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