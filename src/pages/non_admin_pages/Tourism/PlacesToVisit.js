import React, { useState } from 'react'
import Banner from '../../../components/Banner'
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';
import { FaFilter } from 'react-icons/fa6'
import { HiDotsHorizontal } from 'react-icons/hi'
import { AiOutlineComment } from 'react-icons/ai'

export default function PlacesToVisit() {
    const [search, setSearch] = useState('');
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log(search);
            //HANDLE SEARCH QUERY HERE.
        }
    };
    return (
        <>
            <Banner bannerType="common" src={require("../../../res/img/mananap_falls.png")} alt="Mananap Falls" searchBar={false} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }, { title: "Tourism" }]}>
                <p>Places to Visit</p>
            </Banner>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                <div className='flex items-center justify-center'>

                    <form className="w-7/12 my-auto p-3">
                        <div class="relative">
                            {/*SVG image of a magnifying glass*/}
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            {/*Search input box*/}
                            <input
                                type="search"
                                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-lgu-green rounded-full bg-gray-100 focus:ring-lgu-green focus:border-lgu-green"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                }}
                                required
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                    </form>

                    <div className='text-4xl'>
                        <FaFilter />
                    </div>
                </div>


                <a href="#" className="flex flex-col items-center bg-white border border-gray-100 rounded-lg shadow md:flex-row md:mx-auto hover:bg-gray-100 dark:border-gray-200 dark:bg-gray-100 dark:hover:hover:bg-gray-200">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-lg m-3" src={require("../../../res/img/mananap.jpg")} alt="Mananap Falls" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <div className='flex justify-between'>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Mananap Falls</h5>
                            <HiDotsHorizontal />
                        </div>
                        <p className="mb-3 font-normal text-stone-500 dark:text-gray-800">Mananap is a 60-feet high waterfalls with a deep swimming pool basin. The place is ideal for swimming, fishing, camping and just getting away from the busy and noisy city life. It is a 2 km hike from the town of Barangay Fabrica in San Vicente, Camarines Norte.</p>

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

                            <div className='flex w-auto h-4 items-center'>
                                <p className='text-sm font-semibold pl-2'>4.7</p>
                                <p className='text-sm font-semibold pl-2'>|</p>
                                <p className='text-sm font-semibold pl-2'>213 votes</p>

                                <div className='flex items-center pl-2'>
                                    <AiOutlineComment />
                                    <p className='text-sm font-semibold pl-2'>16 comments</p>
                                </div>

                            </div>

                        </div>


                    </div>
                </a>




            </div>
        </>

    )
}
