import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { HiDotsHorizontal } from 'react-icons/hi'
import { PATH_NAME, USER_TYPES } from '../Variables/GLOBAL_VARIABLE';

export default function InvestContent({ data }) {


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle the dropdown
    const toggleDropdown = (event) => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                
                <div
                    className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-lgu-green m-5 w-5/6 mx-auto">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg w-full h-1/2"
                            src={data.source}
                            alt={data.alt} />
                    </div>
                    <NavLink to={data.ref} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>

                        <div className="p-6">
                            <div className='flex justify-between'>
                                <h5
                                    className="mb-2 text-3xl font-medium leading-tight text-neutral-50">
                                    {data.title}
                                </h5>
                                <div className='relative' onClick={(event) => event.stopPropagation()}>
                                    <div className='text-2xl' onClick={toggleDropdown}>
                                        <HiDotsHorizontal className="text-white" />
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

                            <p className="mb-4 text-base text-neutral-200 text-justify line-clamp-3">
                                {data.body}
                            </p>
                            <p className="text-base text-neutral-600 dark:text-neutral-200">
                                <small className="text-neutral-400 hover:text-lgu-lime">Read more...</small>
                            </p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    );
}