import React from "react";
import Banner from "../../../components/Banner";
import Sections from "../../../components/Sections";
import { Link } from "react-router-dom/dist";
import BackToTop from "../../../components/BackToTop";
import { PATH_NAME } from "../../../Variables/GLOBAL_VARIABLE";

export default function MunicipalityPrograms() {
    return (
        <div>
            <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Municipality Programs</p>
            </Banner>


            <Sections
                title="Community Assistance"
                src={require("../../../res/img/assistance.jpg")}
                alt="Community Assistance"
                arrow={true}>
                Engage in the vibrant conversations surrounding San Vicente, Camarines Norte, as you join our forums and discussions. Connect with fellow travelers, adventurers, and culture enthusiasts to share experiences, gather recommendations, and embrace diverse perspectives within our community. Explore the rich culture, history, and natural wonders of this coastal town through these insightful dialogues, finding inspiration for your next adventure. Join us now and immerse yourself in a world of captivating stories and connections waiting to be discovered in San Vicente, Camarines Norte.
            </Sections>

            <Sections
                left={true}
                title="Safety Programs"
                src={require("../../../res/img/programs.jpg")}
                alt="Safety Programs"
                arrow={true}>
                Engage in the vibrant conversations surrounding San Vicente, Camarines Norte, as you join our forums and discussions. Connect with fellow travelers, adventurers, and culture enthusiasts to share experiences, gather recommendations, and embrace diverse perspectives within our community. Explore the rich culture, history, and natural wonders of this coastal town through these insightful dialogues, finding inspiration for your next adventure. Join us now and immerse yourself in a world of captivating stories and connections waiting to be discovered in San Vicente, Camarines Norte.
            </Sections>


            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                <div>
                    <div className="sm:flex items-center">
                        <h1 className="text-center font-bold p-0 text-2xl mb-0 mt-0 lg:text-3xl md:p-2">Sports Activities</h1>
                        <div className="sm:flex-grow sm:border-b-4 sm:border-gray-900"></div>
                    </div>
                    <div className="block sm:flex justify-center items-center">
                        <div className="w-full sm:w-1/2 p-5 sm:p-10">
                            <div className="flex flex-col justify-between h-full">
                                <Link to="/activities" className="block flex-1 p-8 bg-lgu-green border rounded-lg shadow">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-lgu-lime text-center dark:text-white">Sport Activity</h5>
                                    <p className="font-normal text-lgu-lime text-center dark:text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 p-5 sm:p-10">
                            <div className="flex flex-col justify-between h-full">
                                <Link to="/activities" className="block flex-1 p-8 bg-lgu-yellow border rounded-lg shadow">
                                    <h5 className="mb-2 text-2xl font-bold text-black text-center tracking-tight">Sport Activity</h5>
                                    <p className="font-normal text-black text-center">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>











            <BackToTop />
        </div>
    )
}