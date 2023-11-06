import React, { useState } from "react";
import { HiDotsHorizontal } from 'react-icons/hi'
import { AiOutlineComment } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import { PATH_NAME } from '../Variables/GLOBAL_VARIABLE';


export default function TourismCards({ content, onClick }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle the dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Function to close the dropdown when clicking outside of it
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };
    return (
        <>
            <div className="m-3 flex flex-col items-center bg-white border border-gray-100 rounded-sm shadow md:flex-row md:mx-auto hover:bg-gray-100 dark:border-gray-200 dark:bg-gray-100 dark:hover:hover:bg-gray-200" onClick={onClick}>
                <img className="object-cover w-full h-96 md:h-auto md:w-48 md:rounded-sm m-3" src={content.pic} alt="Mananap Falls" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className='flex justify-between'>
                        <NavLink to={PATH_NAME.Home} className="hover:underline"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{content.title}</h5></NavLink>
                        <div className='relative'>
                            <div className='text-2xl' onClick={toggleDropdown}>
                                <HiDotsHorizontal />
                            </div>
                            <div
                                className={'absolute top-5 -right-2 z-10 block w-32 bg-white border border-gray-300 rounded-lg shadow py-2 px-4' + (isDropdownOpen ? '' : ' hidden')}
                            >
                                <NavLink to="#">Report</NavLink>
                            </div>
                        </div>

                    </div>
                    <p className="mb-3 font-normal text-stone-500 dark:text-gray-800">{content.body}</p>

                    {/* Hindi pa kasama itong rating sa pagpasa nung argument, d ko alam pano haha */}
                    <div className="flex items-center">
                        <svg className="w-2 h-4 text-yellow-300 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" />
                        </svg>
                        <svg className="w-2 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M0 2 3.09 8.26 10 9.27 5 14.14 6.18 21.02 0 17.77" />
                        </svg>
                        <svg className="w-2 h-4 text-yellow-300 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" />
                        </svg>
                        <svg className="w-2 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M0 2 3.09 8.26 10 9.27 5 14.14 6.18 21.02 0 17.77" />
                        </svg>
                        <svg className="w-2 h-4 text-yellow-300 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" />
                        </svg>
                        <svg className="w-2 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M0 2 3.09 8.26 10 9.27 5 14.14 6.18 21.02 0 17.77" />
                        </svg>
                        <svg className="w-2 h-4 text-yellow-300 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" />
                        </svg>
                        <svg className="w-2 h-4 text-gray-300" aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M0 2 3.09 8.26 10 9.27 5 14.14 6.18 21.02 0 17.77" />
                        </svg>
                        <svg className="w-2 h-4 text-gray-300 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" />
                        </svg>
                        <svg className="w-2 h-4 text-gray-300" aria-hidden="true" fill="currentColor" viewBox="0 0 11 20">
                            <path d="M0 2 3.09 8.26 10 9.27 5 14.14 6.18 21.02 0 17.77" />
                        </svg>

                        <div className='flex w-auto h-4'>
                            <p className='text-sm font-semibold pl-2'>{content.rate}</p>
                            <p className='text-sm font-semibold pl-2'>|</p>
                            <p className='text-sm font-semibold pl-2'>{content.vote} votes</p>

                            <div className='flex pl-2'>
                                <AiOutlineComment />
                                <p className='text-sm font-semibold pl-2'>{content.comments} comments</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}