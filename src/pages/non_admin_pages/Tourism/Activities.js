import React, { useState } from 'react'
import Banner from '../../../components/Banner'
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';
import { FaFilter } from 'react-icons/fa6'
import TourismCards from '../../../components/TourismCards';


export default function Activities() {
    const [search, setSearch] = useState('');
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log(search);
            //HANDLE SEARCH QUERY HERE.
        }
    };

    var contents = [
        {
            pic: require("../../../res/img/mapIcon.png"),
            title: "Abasig Matognon Natural Biotic Area (Hiking)",
            body: "Experience this 8.0-km out-and-back trail near San Vicente, Camarines Norte. Generally considered a moderately challenging route, it takes an average of 2 h 22 min to complete. This trail is great for birding, hiking, and mountain biking, and it's unlikely you'll encounter many other people while exploring.",
            rate: "4.7",
            vote: "213",
            comments: "16",
        },
        {
            pic: require("../../../res/img/mapIcon.png"),
            title: "Abasig Matognon Natural Biotic Area (Hiking)",
            body: "Experience this 8.0-km out-and-back trail near San Vicente, Camarines Norte. Generally considered a moderately challenging route, it takes an average of 2 h 22 min to complete. This trail is great for birding, hiking, and mountain biking, and it's unlikely you'll encounter many other people while exploring.",
            rate: "4.7",
            vote: "213",
            comments: "16",
        },
        {
            pic: require("../../../res/img/mapIcon.png"),
            title: "Abasig Matognon Natural Biotic Area (Hiking)",
            body: "Experience this 8.0-km out-and-back trail near San Vicente, Camarines Norte. Generally considered a moderately challenging route, it takes an average of 2 h 22 min to complete. This trail is great for birding, hiking, and mountain biking, and it's unlikely you'll encounter many other people while exploring.",
            rate: "4.7",
            vote: "213",
            comments: "16",
        },
        {
            pic: require("../../../res/img/mapIcon.png"),
            title: "Abasig Matognon Natural Biotic Area (Hiking)",
            body: "Experience this 8.0-km out-and-back trail near San Vicente, Camarines Norte. Generally considered a moderately challenging route, it takes an average of 2 h 22 min to complete. This trail is great for birding, hiking, and mountain biking, and it's unlikely you'll encounter many other people while exploring.",
            vote: "213",
            comments: "16",
        },
        {
            pic: require("../../../res/img/mapIcon.png"),
            title: "Abasig Matognon Natural Biotic Area (Hiking)",
            body: "Experience this 8.0-km out-and-back trail near San Vicente, Camarines Norte. Generally considered a moderately challenging route, it takes an average of 2 h 22 min to complete. This trail is great for birding, hiking, and mountain biking, and it's unlikely you'll encounter many other people while exploring.",
            vote: "213",
            comments: "16",
        },
        {
            pic: require("../../../res/img/mapIcon.png"),
            title: "Abasig Matognon Natural Biotic Area (Hiking)",
            body: "Experience this 8.0-km out-and-back trail near San Vicente, Camarines Norte. Generally considered a moderately challenging route, it takes an average of 2 h 22 min to complete. This trail is great for birding, hiking, and mountain biking, and it's unlikely you'll encounter many other people while exploring.",
            rate: "4.7",
            vote: "213",
            comments: "16",
        },
    ];

    return (
        <>
            <Banner bannerType="common" src={require("../../../res/img/mananap_falls.png")} alt="Mananap Falls" searchBar={false} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }, { title: "Tourism" }]}>
                <p>Activities</p>
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
                
                <div className='pt-12'>
                    {contents.map((content, index) => {
                        return <TourismCards key={index} content={content} />;
                    })}
                </div>




            </div>
        </>

    )
}
