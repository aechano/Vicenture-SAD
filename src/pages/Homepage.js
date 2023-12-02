import React, { useState, useEffect } from "react";
import Sections from "../components/Sections";
import Banner from "../components/Banner";
import BackToTop from "../components/BackToTop";
import { NavLink, useLocation } from "react-router-dom";
import { PATH_NAME, USER_TYPES } from "../Variables/GLOBAL_VARIABLE";
import CalendarModal from "../components/CalendarModal";
import CarouselComponent from "../components/CarouselComponent";
import ChatIcon from "../components/ChatIcon";
import RevealOnScroll from './../components/RevealOnScroll';
import SurveyIcon from "../components/SurveyIcon";

export default function Homepage({ userType, surveyShowing, setSurveyShowing }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());

    const images = [
        require("./../res/img/0.png"),
        require("./../res/img/1.png"),
        require("./../res/img/2.png"),
        require("./../res/img/3.png"),
        require("./../res/img/4.png"),
        require("./../res/img/5.png"),
        require("./../res/img/6.png"),
        // Add more image URLs as needed
    ];


    const openModal = () => {
        console.log("Opening modals");
        setModalOpen(true);

    };

    const closeModal = () => {
        console.log("Closing modal");
        setModalOpen(false);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    const formattedDate = currentDate.toLocaleDateString(undefined, {
        month: 'long',
        year: 'numeric',
    });

    const [surveyClose, setSurveyClose] = useState(!surveyShowing);
    const [backToTopShowing, setBackToTopShowing] = useState(false);
    const handleSurveyClose = () => {
        setSurveyClose(true);
        setSurveyShowing(false);
    }

    return (
        <div>
            {/* Hero Section */}
            <div>
                <CarouselComponent images={images} />
                {/* <img src={require("./../res/img/LGU-PERS.jpg")}/> */}
            </div>

            <div>
                {/* Other components */}
                <ChatIcon />
                {
                    surveyClose ?
                        null
                        :
                        <SurveyIcon setClose={handleSurveyClose} backToTopShowing={backToTopShowing} />
                }
                <BackToTop setShowing={setBackToTopShowing} loc="homepage" />
            </div>

            {/* Event Section */}

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">

                <div>
                    <div className="sm:flex items-center">
                        <h1 className="text-center font-bold p-0 text-2xl mb-0 mt-0 lg:text-4xl md:p-2">What's Happening?</h1>
                        <div className="sm:flex-grow sm:border-b-4 sm:border-gray-900"></div>
                    </div>
                    <div className="lg:flex">
                        <div className="space-y-2 md:space-y-0 lg:space-y-2 md:space-x-2 lg:space-x-0  md:flex lg:block lg:w-[18rem] lg:p-4 mt-5">
                            <div className="p-4 rounded-2xl border-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div className="border-b-2 border-[#0000002d] rounded-md bg-emergency px-6 py-3 text-white dark:text-neutral-50 font-bold text-center">
                                    Emergency
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-2 text-xl font-medium leading-tight text-black">
                                        Heavy Rainfall Warning
                                    </h5>
                                    <p className="text-base text-black overflow-y-scroll no-scrollbar h-40">
                                        A "Heavy Rainfall Warning" has been issued, urging residents to exercise caution and take necessary precautions as intense precipitation is anticipated in the forecast.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl lg:mt-5 border-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div className="border-b-2 border-[#0000002d] rounded-md bg-event px-6 py-3 text-white dark:text-neutral-50 font-bold text-center">
                                    {formattedDate}
                                </div>
                                <button className="p-6 mx-auto flex items-center justify-center" onClick={openModal}>
                                    <div className="flex flex-col items-center">
                                        <div className="text-5xl font-bold">{currentDate.getDate()}</div>
                                        <div className="text-sm">Current Day</div>
                                        <div className="text-lg mt-2">
                                            {currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'})}
                                            <p className="text-sm mt-2">Click to See Events</p>
                                        </div>
                                    </div>
                                </button>
                                <CalendarModal isOpen={isModalOpen} onRequestClose={closeModal} />

                            </div>

                        </div>
                        <div className="lg:flex-1 pb-4">
                            <video class="w-full h-full p-4" autoPlay loop controls muted>
                                <source src={require("./../res/vid/san-vicente.mp4")} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="border-b-2 border-gray-900"></div>
                    <div className="flex flex-col mt-5 space-y-4 lg:space-y-0 lg:justify-between lg:flex-row">
                        <div className="py-8 px-8 lg:max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                            <NavLink to={PATH_NAME.Articles} onClick={() => window.scrollTo({ top: 0, left: 0 })} className="transition-all duration-400 hover:scale-110 text-left space-y-2 sm:text-left">
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
                                <p className="text-xs text-red-500"> Read more...</p>
                            </NavLink>
                        </div>

                        <div className="py-8 px-8 lg:max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                            <NavLink to={PATH_NAME.Articles} onClick={() => window.scrollTo({ top: 0, left: 0 })} className="transition-all duration-400 hover:scale-110 text-left space-y-2 sm:text-left">
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
                                <p className="text-xs text-red-500"> Read more...</p>
                            </NavLink>
                        </div>

                        <NavLink to={PATH_NAME.Articles} onClick={() => window.scrollTo({ top: 0, left: 0 })} className="transition-all duration-400 hover:scale-110 py-8 px-8 max-w-sm bg-lgu-yellow rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
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

            <div className='relative bg-fixed bg-cover'
                style={{
                    backgroundImage: "url(" + require("./../res/img/tourism_cover.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}>

                <div className="absolute inset-0 bg-gray-600 bg-opacity-70"></div>
                <RevealOnScroll>
                    <div className="text-center pt-5 pb-5">
                        <h1 className="lg:text-5xl font-bold p-0 text-4xl md:p-2 mb-0 mt-0 relative z-10 text-white">Must Have for Your Next Chapter</h1>
                    </div>
                </RevealOnScroll>


                <div className='grid grid-cols-1 md:grid-cols-4 gap-10 md:flex md:flex-wrap md:justify-center relative z-10 p-5'>


                    <RevealOnScroll>
                        <div class="relative grid h-[30rem] w-full max-w-[21rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 mx-auto">
                            <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
                                style={{
                                    backgroundImage: "url(" + require('./../res/img/business_invest.jpeg') + ")",
                                }}
                            >
                                <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div class="relative p-6 md:px-12 md:py-14">
                                <h2 class="mb-6 block text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    Invest Wisely, Thrive Lavishly at San Vicente, Awaits You!
                                </h2>
                                <div className="mx-auto m-5">
                                    <NavLink to={PATH_NAME.Invest.InvestmentOpportunities} onClick={() => window.scrollTo({ top: 0, left: 0 })} className=" transition-all duration-400 hover:scale-110 text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
                                        Go to Invest Page
                                        <svg
                                            className="w-3.5 h-3.5 ml-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll>
                        <div class="relative grid h-[30rem] w-full max-w-[21rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 mx-auto">
                            <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
                                style={{
                                    backgroundImage: "url(" + require('./../res/img/sample_falls.jpeg') + ")",
                                }}
                            >
                                <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div class="relative p-6 md:px-12 md:py-14">
                                <h2 class="mb-6 block text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    Wanna Know our Tourist Spots, Festivals, and Resorts?
                                </h2>
                                <div className="mx-auto m-5">
                                    <NavLink to={PATH_NAME.Tourism.PlacesToVisit} onClick={() => window.scrollTo({ top: 0, left: 0 })} className=" transition-all duration-400 hover:scale-110 text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
                                        Go to Places To Visit
                                        <svg
                                            className="w-3.5 h-3.5 ml-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <div class="relative grid h-[30rem] w-full max-w-[21rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 mx-auto">
                            <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
                                style={{
                                    backgroundImage: "url(" + require('./../res/img/hiking.jpg') + ")",
                                }}
                            >
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div className="relative p-6 md:px-12 md:py-14">
                                <h2 className="mb-6 block text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    Let's embark on exciting adventures and engage in enjoyable activities!
                                </h2>
                                <div className="mx-auto m-5">
                                    <NavLink to={PATH_NAME.Tourism.Activities} onClick={() => window.scrollTo({ top: 0, left: 0 })} className="transition-all duration-400 hover:scale-110 text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
                                        Go to Activities
                                        <svg
                                            className="w-3.5 h-3.5 ml-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <div className="relative grid h-[30rem] w-full max-w-[21rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 mx-auto">
                            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
                                style={{
                                    backgroundImage: "url(" + require('./../res/img/dunk.jpeg') + ")",
                                }}
                            >
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>
                            <div className="relative p-6 md:px-12 md:py-14">
                                <h2 className="mb-6 block text-3xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    Contribute your enthusiasm and expertise by joining in various sports festivals
                                </h2>
                                <div className="mx-auto m-2">
                                    <NavLink to={PATH_NAME.TheTown.MunicipalityPrograms} onClick={() => window.scrollTo({ top: 0, left: 0 })} className="transition-all duration-400 hover:scale-110 text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
                                        Go to Sports Activities
                                        <svg
                                            className="w-3.5 h-3 ml-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                    </NavLink>
                                </div>
                            </div>


                        </div>
                    </RevealOnScroll>
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
                href="/the-town/about" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                Journey through the captivating tapestry of San Vicente, Camarines Norte, where time and culture intertwine to unveil a rich and enchanting tale. This hidden gem, with its roots dating back to the late 18th century, is a place of history, traditions, and breathtaking natural beauty. As you stroll through its historic streets, you'll be transported to an era of colonial architecture and cobblestone pathways, each telling a story of its own. San Vicente isn't just a location on a map; it's a living connection to the past, where the spirits of the ancestors seem to guide your way. This town embodies the enduring spirit of the Filipino people, celebrated through ancient festivals, rituals, and vibrant traditions that have thrived for generations. And the beauty of San Vicente's landscapes, from pristine coastlines meeting the Pacific's azure waters to lush mountains and untamed wilderness, will leave you in awe.
            </Sections>

            {/* Tourism Section */}

            <Sections
                title="Your Tourism Escape"
                src={require("./../res/img/waterfalls.png")}
                alt="Mananap Falls"
                altDisplay="Mananap Falls"
                button="View more details"
                arrow={true}
                href="/tourism/san-vicente-tourism" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
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
                button={userType === USER_TYPES.Investor ? "View Opportunities" : "Sign Up as an Investor"}
                arrow={true}
                href={userType === USER_TYPES.Investor ? PATH_NAME.Invest.InvestmentOpportunities : PATH_NAME.Accounts.SignUp.SignUp}
                onClick={() => window.scrollTo({ top: 0, left: 0 })}>
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
                href="/forums" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                Engage in the vibrant conversations surrounding San Vicente, Camarines Norte, as you join our forums and discussions. Connect with fellow travelers, adventurers, and culture enthusiasts to share experiences, gather recommendations, and embrace diverse perspectives within our community. Explore the rich culture, history, and natural wonders of this coastal town through these insightful dialogues, finding inspiration for your next adventure. Join us now and immerse yourself in a world of captivating stories and connections waiting to be discovered in San Vicente, Camarines Norte.
            </Sections>
        </div>

    );
}
