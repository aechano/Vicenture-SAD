import React from "react";
import Banner from "../../../components/Banner";
import Sections from "../../../components/Sections";
import { Link } from "react-router-dom/dist";
import BackToTop from "../../../components/BackToTop";

export default function MunicipalityPrograms() {
    return (
        <div>
            {/* Hero Section */}
            <Banner
                src={require("../../../res/img/mananap_falls.png")}
                alt="Mananap Falls"
                searchBar={true}
            >
                <div className="text-white justify-center items-center text-center">
                <h1 className="lg:text-6xl font-bold p-0 md:text-5xl text-2xl md:p-2 mb-0 mt-0">
                    Municipality Programs
                </h1>
                </div>
            </Banner>


            <Sections
                title="Community Assistance"
                src={require("../../../res/img/population.jpg")}
                alt="Community Assistance"
                arrow={true}>
                Engage in the vibrant conversations surrounding San Vicente, Camarines Norte, as you join our forums and discussions. Connect with fellow travelers, adventurers, and culture enthusiasts to share experiences, gather recommendations, and embrace diverse perspectives within our community. Explore the rich culture, history, and natural wonders of this coastal town through these insightful dialogues, finding inspiration for your next adventure. Join us now and immerse yourself in a world of captivating stories and connections waiting to be discovered in San Vicente, Camarines Norte.
            </Sections>

            <Sections
                left={true}
                title="Safety Programs"
                src={require("../../../res/img/geography.png")}
                alt="Safety Programs"
                arrow={true}>
                Engage in the vibrant conversations surrounding San Vicente, Camarines Norte, as you join our forums and discussions. Connect with fellow travelers, adventurers, and culture enthusiasts to share experiences, gather recommendations, and embrace diverse perspectives within our community. Explore the rich culture, history, and natural wonders of this coastal town through these insightful dialogues, finding inspiration for your next adventure. Join us now and immerse yourself in a world of captivating stories and connections waiting to be discovered in San Vicente, Camarines Norte.
            </Sections>


            <Sections title="Sport Activities" arrow={true}>
                <div className="flex justify-center"> {/* Center the cards horizontally */}
                    <div className="w-1/2 p-5">
                        <div className="flex flex-col justify-between h-full">
                            <Link to="/activities" className="block flex-1 p-8 bg-lgu-green border border-gray-200 rounded-lg shadow hover:bg-zinc-500 dark:bg-gray-800 dark:border-gray-700 dark:hover-bg-zinc-500">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-lgu-lime text-center dark:text-white">Sport Activity</h5>
                            <p className="font-normal text-lgu-lime text-center dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2 p-5">
                        <div className="flex flex-col justify-between h-full">
                            <Link to="/activities" className="block flex-1 p-8 bg-lgu-yellow border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover-bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold text-black text-center tracking-tight">Sport Activity</h5>
                            <p className="font-normal text-black text-center">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </Link>
                        </div>
                    </div>
                </div>
                </Sections>








        <BackToTop />
        </div>
    )
}