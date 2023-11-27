import React, { useState } from 'react'
import WebpagePath from './WebpagePath';

export default function Banner(props) {

    /*
    <Banner> component has the following attributes:
    bannerType (Required) - type of banner used. Either "common" or "special".
    searchBar (Required) - if searchbar is needed. Either `true` or `false`.
    breadCrumbs (Conditional Optional) - when using common-type banner, include
                    breadcrumbs if necessary. This is a list of objects that have the
                    attributes `title` (Required) and `to` (Optional)
    src (Optional) - path to local storage of the image. Note: Use `require()` function.
    alt (Conditional Required) - alternate text for the image. Must use when using a
                    non-default image to make alt text accurate.

    This takes a children component where it can be a <p> tag of what text to pass onto here.
    */

    const [search, setSearch] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log(search);
            //HANDLE SEARCH QUERY HERE.
        }
    };
    var isCommonBanner = props.bannerType === "common";

    return (
        <div className="relative flex items-center justify-center">
            {/*Banner image resizes depending on the bannerType*/}
            <div className={"w-full relative overflow-hidden " + (isCommonBanner ? "h-80" : "h-full")}>
                {/*Displays the image from local storage. Will show Municipal Office as default image.*/}
                <img
                    src={props.src !== undefined ? props.src : require("./../res/img/LGU-PERS.jpg")}
                    alt={props.alt !== undefined ? props.alt : "Municipal Office"}
                    className={"w-full object-cover " + (isCommonBanner ? "h-80" : "h-screen lg:h-auto")}
                />
                <div className="absolute inset-0 bg-lgu-green bg-opacity-50"></div>
                {/*Banner overlay*/}
                <div className='bg-opacity-50 bg-black inset-0 absolute flex flex-col justify-center items-center my-auto'>
                    {/*Big title text for special-type banners*/}
                    {isCommonBanner ?
                        null
                        :
                        <div className="text-white justify-center items-center text-center">
                            {props.children}
                        </div>
                    }
                    {/*If banner has a searchbar for general searching*/}
                    {/*{props.searchBar ?
                        <form className={"w-7/12 lg:w-5/12 pt-4 " + (isCommonBanner ? "my-auto" : "mt-5")}>
                            <div class="relative">
                                {/*SVG image of a magnifying glass*/}
                                {/*<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                               {/* <input
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
                    {/*Bottom-left text for common-type banners*/}
                    {isCommonBanner ?
                        <>
                            <div className="text-lgu-lime text-left mt-auto w-full text-5xl mb-5 pl-5">
                                {/*If common-type banners has a breadcrumb attribute, include that breadcrumb using <WebpagePath> component*/}
                                {props.breadcrumbs !== undefined ?
                                    <WebpagePath previous={props.breadcrumbs} className="text-base" />
                                    :
                                    null
                                }
                                <div className='font-semibold'>
                                    {props.children}
                                </div>

                            </div>
                        </>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}
