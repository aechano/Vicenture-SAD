import React, { useState } from 'react'

export default function Banner(props) {
    const [search, setSearch] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log(search);
            //HANDLE SEARCH QUERY HERE.
        }
    };

    return (
        <div className="relative flex items-center justify-center">
            <div className={"w-full relative overflow-hidden "+(props.bottomLeft?"h-80":"h-full")}>
                <img
                    src={props.src !== undefined ? props.src : require("./../res/img/LGU-PERS.jpg")}
                    alt={props.alt !== undefined ? props.alt : "Banner Image"}
                    className={"w-full object-cover "+(props.bottomLeft?"h-80":"h-screen lg:h-auto")}
                />
                <div className='bg-opacity-50 bg-black inset-0 absolute flex flex-col justify-center items-center my-auto'>
                    {props.bottomLeft !== undefined && props.bottomLeft ?
                        null
                        :
                        <div className="text-white justify-center items-center text-center">
                            {props.children}
                        </div>
                    }
                    {props.searchBar ?
                        <form className="w-7/12 lg:w-5/12 mt-5">
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
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
                        :
                        null
                    }
                    {props.bottomLeft !== undefined && props.bottomLeft ?
                        <div className="text-lgu-lime text-left mt-auto w-full text-5xl mb-5 pl-5 ">
                            {props.children}
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}
