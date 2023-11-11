import React from "react";
import Sections from "../components/Sections";
import Banner from "../components/Banner";
import BackToTop from "../components/BackToTop";
import { NavLink } from "react-router-dom";
import { PATH_NAME } from "../Variables/GLOBAL_VARIABLE";

function Homepage() {
    return (
        <div>
            {/* Hero Section */}
            <Banner
                src={require("./../res/img/LGU-PERS.jpg")}
                alt="Image of San Vicente LGU Municipal Building"
                searchBar={true}
                bannerType="special"
            >
                <h1 className="lg:text-6xl font-bold p-0 md:text-5xl text-2xl md:p-2 mb-0 mt-0">
                    Welcome to San Vicente,
                </h1>
                <h1 className="lg:text-6xl font-bold p-0 md:text-5xl text-2xl md:p-2 mt-0">
                    Camarines Norte
                </h1>
            </Banner>

            {/* Event Section */}

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                <div>
                    <div className="sm:flex items-center">
                        <h1 className="text-center font-bold p-0 text-2xl mb-0 mt-0 lg:text-3xl md:p-2">What's Happening?</h1>
                        <div className="sm:flex-grow sm:border-b-4 sm:border-gray-900"></div>
                    </div>
                    <div className="lg:flex">
                        <div className="md:flex lg:block lg:w-[18rem] lg:p-4 mt-5">
                            <div className="p-4 rounded-2xl border-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div className="border-b-2 border-[#0000002d] rounded-md bg-emergency px-6 py-3 text-white dark:text-neutral-50 font-bold">
                                    Emergency
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-2 text-xl font-medium leading-tight text-black">
                                        Success card title
                                    </h5>
                                    <p className="text-base text-black">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl lg:mt-5 border-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div className="border-b-2 border-[#0000002d] rounded-md bg-event px-6 py-3 text-white dark:text-neutral-50 font-bold">
                                    September
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-2 text-xl font-medium leading-tight text-black">
                                        Success card title
                                    </h5>
                                    <p className="text-base text-black">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:flex-1 pb-4">
                            <video class="w-full h-full p-4" autoPlay loop controls muted>
                                <source src="https://tecdn.b-cdn.net/img/video/Sail-Away.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="border-b-2 border-gray-900"></div>
                    <div className="flex flex-col mt-5 space-y-4 lg:space-y-0 lg:justify-between lg:flex-row">
                        <div className="py-8 px-8 lg:max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                            <div className="text-left space-y-2 sm:text-left">
                                <div className="space-y-0.5">
                                    <p className="text-lg text-black font-semibold">
                                        Article Title
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        October 1, 2023 | 9:50 AM
                                    </p>
                                    <p class="text-black font-medium">
                                        This is a one-sentence overview of the activity, which can be multi-line.
                                    </p>
                                </div>
                                <NavLink to="/" className="text-xs text-red-500"> Read more...</NavLink>
                            </div>
                        </div>

                        <div className="py-8 px-8 lg:max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                            <div className="text-left space-y-2 sm:text-left">
                                <div className="space-y-0.5">
                                    <p className="text-lg text-black font-semibold">
                                        Article Title
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        October 1, 2023 | 9:50 AM
                                    </p>
                                    <p class="text-black font-medium">
                                        This is a one-sentence overview of the activity, which can be multi-line.
                                    </p>
                                </div>
                                <NavLink to="/" className="text-xs text-red-500"> Read more...</NavLink>
                            </div>
                        </div>

                        <NavLink to={PATH_NAME.Articles} className="py-8 px-8 max-w-sm bg-lgu-yellow rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                            <div className="text-center space-y-2 sm:text-left">
                                <div className="space-y-0.5 flex">
                                    <p className="text-lg text-black font-semibold mr-5">
                                        More San Vicente Article
                                    </p>
                                    <div>
                                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* About San Vicente */}

            <Sections
                left={true}
                title="Discover San Vicente"
                src={require("./../res/img/logo.png")}
                alt="San Vicente Logo"
                button="About San Vicente"
                arrow={true}
                href="/the-town/about" onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
                Embark on a journey through time and culture as you discover the enchanting secrets of San Vicente. This hidden gem, nestled in the heart of Camarines Norte, offers a rich tapestry of history, tradition, and natural beauty. From its roots dating back to the late 18th century to the modern-day marvels that make it a thriving community, San Vicente has countless stories to tell.
            </Sections>

            {/* Tourism Section */}

            <Sections
                title="Your Tourism Escape"
                src={require("./../res/img/waterfalls.png")}
                alt="Mananap Falls"
                altDisplay="Mananap Falls"
                button="View more details"
                arrow={true}
                href="/tourism/san-vicente-tourism" onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
                We cordially extend an invitation to experience the serene and captivating beauty of San Vicente, a remarkable destination that promises a rejuvenating departure from the everyday routine.
                Tucked away in the embrace of nature, this tranquil paradise calls out to wanderers, urging them to pause, explore, and become one with a realm of stunning natural vistas, a rich tapestry of local culture,
                and indelible memories waiting to be etched in your heart. Whether your heart craves adventure or craves serenity, San Vicente stands ready to offer you the quintessential escape, a portal to a world where
                the very essence of tourism blends harmoniously with your blissful journey.
            </Sections>

            {/* Invest Section */}

            <Sections
                left={true}
                title="Invest Now"
                src={require("./../res/img/invest.png")}
                alt="Vector image of a hand holding a coin with the peso sign on it."
                button="Sign Up as an Investor"
                arrow={true}
                href="/sign-up" onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
                Investing in the tourism potential of San Vicente, Camarines Norte, is like planting the seeds of opportunity in a flourishing garden of natural beauty.
                As this captivating destination continues to reveal its hidden gems, your investment not only promises growth and prosperity but also contributes to the sustainable development of a place destined
                to become a sought-after haven for travelers seeking unique and authentic experiences. By investing in San Vicente's tourism, you're nurturing a brighter future for both the community and the
                discerning adventurers who will soon call it their ultimate getaway.
            </Sections>

            {/* Forum Section */}

            <Sections
                title="Join the Discussions"
                src={require("./../res/img/forUm.png")}
                alt="Vector image of a group of people talking."
                button="Read Forums and Discussions"
                arrow={true}
                href="/forums" onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
                Engage in the vibrant conversations surrounding San Vicente, Camarines Norte, as you join our forums and discussions. Connect with fellow travelers, adventurers, and culture enthusiasts to share experiences, gather recommendations, and embrace diverse perspectives within our community. Explore the rich culture, history, and natural wonders of this coastal town through these insightful dialogues, finding inspiration for your next adventure. Join us now and immerse yourself in a world of captivating stories and connections waiting to be discovered in San Vicente, Camarines Norte.
            </Sections>

        <BackToTop />
        </div>

    );
}

export default Homepage;
