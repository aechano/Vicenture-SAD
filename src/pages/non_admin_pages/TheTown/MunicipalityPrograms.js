import React from "react";
import Banner from "../../../components/Banner";
import SectionContent from "../../../components/SectionContent";
import { Link } from "react-router-dom/dist";
import BackToTop from "../../../components/BackToTop";
import { PATH_NAME } from "../../../Variables/GLOBAL_VARIABLE";

export default function MunicipalityPrograms() {
    return (
        <div>
            <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Municipality Programs</p>
            </Banner>


            <SectionContent
                title="Community Assistance"
                src={require("../../../res/img/assistance.jpg")}
                alt="Community Assistance"
                arrow={true}>
                Engage in the vibrant conversations surrounding San Vicente, Camarines Norte, as you join our forums and discussions. Connect with fellow travelers, adventurers, and culture enthusiasts to share experiences, gather recommendations, and embrace diverse perspectives within our community. Explore the rich culture, history, and natural wonders of this coastal town through these insightful dialogues, finding inspiration for your next adventure. Join us now and immerse yourself in a world of captivating stories and connections waiting to be discovered in San Vicente, Camarines Norte.
            </SectionContent>

            <SectionContent
                left={true}
                title="Safety Programs"
                src={require("../../../res/img/programs.jpg")}
                alt="Safety Programs"
                arrow={true}>
                Engage in the vibrant conversations surrounding San Vicente, Camarines Norte, as you join our forums and discussions. Connect with fellow travelers, adventurers, and culture enthusiasts to share experiences, gather recommendations, and embrace diverse perspectives within our community. Explore the rich culture, history, and natural wonders of this coastal town through these insightful dialogues, finding inspiration for your next adventure. Join us now and immerse yourself in a world of captivating stories and connections waiting to be discovered in San Vicente, Camarines Norte.
            </SectionContent>


            <div className='relative bg-fixed bg-cover p-5'
                style={{
                    backgroundImage: "url(" + require("../../../res/img/sports_cover.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}>
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-2">
                    <div>
                        <div>
                            <img src={require("../../../res/img/kAWAT-KITA.png")} alt="banner" className="relative z-10 rounded-md"/>
                        </div>
                        <div className="sm:flex sm:flex-col relative z-10">
                            <h1 className="text-4xl font-bold text-left mt-10 pb-6 text-white">SPORTS ACTIVITIES</h1>
                            <p className="text-white text-md leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper eget nulla facilisi etiam dignissim. In nulla posuere sollicitudin aliquam ultrices. Varius quam quisque id diam vel quam elementum pulvinar. Eu tincidunt tortor aliquam nulla facilisi cras. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.</p>

                        </div>
                        <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
                            <div>
                                <div className="block p-1 mt-3">
                                    <div className="w-full relative z-10 p-2">
                                        <div className="flex flex-col justify-between h-full ">
                                            <Link to="/activities" className="block flex-1 p-8 bg-lgu-green border rounded-lg shadow">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-lgu-lime text-center dark:text-white ">Sport Activity</h5>
                                                <p className="font-normal text-lgu-lime text-center dark:text-white transition-all duration-400 hover:scale-105">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="w-full relative z-10 p-2">
                                        <div className="flex flex-col justify-between h-full">
                                            <Link to="/activities" className="block flex-1 p-8 bg-lgu-yellow border rounded-lg shadow">
                                                <h5 className="mb-2 text-2xl font-bold text-black text-center tracking-tight">Sport Activity</h5>
                                                <p className="font-normal text-black text-center transition-all duration-400 hover:scale-105">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="w-full relative z-10 p-2">
                                        <div className="flex flex-col justify-between h-full">
                                            <Link to="/activities" className="block flex-1 p-8 bg-lgu-green border rounded-lg shadow">
                                                <h5 className="mb-2 text-2xl font-bold text-lgu-lime text-center tracking-tight">Sport Activity</h5>
                                                <p className="font-normal text-lgu-lime text-center transition-all duration-400 hover:scale-105">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div
                                    className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-green-700 sm:shrink-0 sm:grow sm:basis-0 relative z-10">
                                    <a href="/activities">
                                        <img
                                            className="rounded-t-lg w-full object-cover h-96 "
                                            src={require("../../../res/img/sports.jpg")}
                                            alt="Different Sports Vector" />
                                    </a>
                                    <div className="p-6">
                                        <h5
                                            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                            Card title
                                        </h5>
                                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 transition-all duration-400 hover:scale-105">
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </div>

            <BackToTop />
        </div>
    )
}