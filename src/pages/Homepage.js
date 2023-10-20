import React from "react";
import Sections from "../components/Sections";


function Homepage() {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative flex items-center justify-center">
                <div className="h-full w-full relative overflow-hidden">
                    <img
                        src={require("./../res/img/LGU-PERS.jpg")}
                        alt="Mananap Falls"
                        className="h-screen lg:h-auto w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col items-center justify-center text-white">
                        <h1 className="lg:text-6xl font-bold p-0 md:text-5xl text-2xl md:p-2 mb-0 mt-0">
                            Welcome to San Vicente,
                        </h1>
                        <h1 className="lg:text-6xl font-bold p-0 md:text-5xl text-2xl md:p-2 mt-0">
                            Camarines Norte
                        </h1>
                        <form className="w-7/12 lg:w-5/12 mt-5">
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Event Section */}

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                <div>
                    <div className="flex items-center">
                        <h1 className="lg:text-3xl font-bold p-0 text-2xl md:p-2 mb-0 mt-0">What's Happening?</h1>
                        <div className="flex-grow border-b-4 border-gray-900"></div>
                    </div>
                    <div className="flex">
                        <div className="w-[18rem] p-4 mt-5">
                            <div className="p-4 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div className="border-b-2 border-[#0000002d] rounded-t-xl bg-emergency px-6 py-3 text-white dark:text-neutral-50 font-bold">
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

                            <div className="p-4 mt-5 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div className="border-b-2 border-[#0000002d] rounded-t-xl bg-event px-6 py-3 text-white dark:text-neutral-50 font-bold">
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

                        <div className="flex-1 pt-4 pb-4 pr-4 pl-4">
                            <video class="w-full h-full rounded-2xl shadow-lg p-4" autoplay loop controls muted>
                                <source src="https://tecdn.b-cdn.net/img/video/Sail-Away.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className=" border-b-2 border-gray-900"></div>
                    <div className="flex mt-5 justify-between">
                        <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
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
                                <a href="#" className="text-xs text-red-500"> Read more...</a>
                            </div>
                        </div>

                        <div className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
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
                                <a href="#" className="text-xs text-red-500"> Read more...</a>
                            </div>
                        </div>

                        <div className="py-8 px-8 max-w-sm bg-lgu-yellow rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                            <div className="text-center space-y-2 sm:text-left">
                                <div className="space-y-0.5 flex">
                                    <p className="text-lg text-black font-semibold mr-5">
                                        More San Vicente Article
                                    </p>
                                    <a href="#">
                                        <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
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
                href="/">
                San Vicente, formally recognized as the Municipality of San Vicente, is a town of the 5th class located in the province of Camarines Norte, Philippines. As of the 2020 census, it is home to a population of approximately 12,579 residents. The Mananap Falls is approximately 20–25 ft tall, tucked inside the thick forest and mountains. The water was ice cold, and there is a small raft tied which will lead you near the falls and a ladder to get to the top of the falls. There is a jumping point as well. It is more than this we-attitude that is practiced by the people, each one treating the other as more than a neighbor. A large segment of the population is related by blood.
            </Sections>

            {/* Tourism Section */}

            <Sections
                title="Your Tourism Escape"
                src={require("./../res/img/waterfalls.jpg")}
                alt="Mananap Falls"
                altDisplay="Mananap Falls"
                button="View more details"
                arrow={true}
                href="/">
                We cordially extend an invitation to experience the serene and captivating beauty of San Vicente, a remarkable destination that promises a rejuvenating departure from the everyday routine.
                Tucked away in the embrace of nature, this tranquil paradise calls out to wanderers, urging them to pause, explore, and become one with a realm of stunning natural vistas, a rich tapestry of local culture,
                and indelible memories waiting to be etched in your heart. Whether your heart craves adventure or craves serenity, San Vicente stands ready to offer you the quintessential escape, a portal to a world where
                the very essence of tourism blends harmoniously with your blissful journey.
            </Sections>

            {/* Invest Section */}

            <Sections
                left={true}
                title="Invest Now"
                src={require("./../res/img/capital_investment.png")}
                alt="Vector image of a hand holding a coin with the peso sign on it."
                button="Sign Up as an Investor"
                arrow={true}
                href="/sign-up">
                Investing in the tourism potential of San Vicente, Camarines Norte, is like planting the seeds of opportunity in a flourishing garden of natural beauty.
                As this captivating destination continues to reveal its hidden gems, your investment not only promises growth and prosperity but also contributes to the sustainable development of a place destined
                to become a sought-after haven for travelers seeking unique and authentic experiences. By investing in San Vicente's tourism, you're nurturing a brighter future for both the community and the
                discerning adventurers who will soon call it their ultimate getaway.
            </Sections>

            {/* Forum Section */}

            <Sections
                title="Join the Discussions"
                src={require("./../res/img/Group.png")}
                alt="Vector image of a group of people talking."
                button="Read Forums and Discussions"
                arrow={true}
                href="/">
                Engage in the vibrant conversations surrounding San Vicente, Camarines Norte, as you join our forums and discussions. Connect with fellow travelers, adventurers, and culture enthusiasts to share experiences, gather recommendations, and embrace diverse perspectives within our community. Explore the rich culture, history, and natural wonders of this coastal town through these insightful dialogues, finding inspiration for your next adventure. Join us now and immerse yourself in a world of captivating stories and connections waiting to be discovered in San Vicente, Camarines Norte.
            </Sections>
        </div>

    );
}

export default Homepage;
