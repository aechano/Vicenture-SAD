import React, { useState, useEffect } from 'react'
import Banner from '../../../components/Banner'
import { API, PATH_NAME, USER_TYPES } from '../../../Variables/GLOBAL_VARIABLE';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import TourismCards from '../../../components/TourismCards';
import { useNavigate } from 'react-router';
import BackToTop from '../../../components/BackToTop';
import { NavLink } from 'react-router-dom';
import { useParams, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';


export default function PlacesToVisit() {
    const placesPerPage = 5;
    const { page = 1 } = useParams();
    const currentPage = parseInt(page);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [contents, setContents] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [totalPages, setTotalPages] = useState(1);
    const [bottomPageNumbers, setBottomPageNumbers] = useState([]);
    const [userType, setuserType] = useState()

    useEffect(() => {
        var jwt = Cookies.get("token");
        if (jwt) {
            var payload = jwtDecode(jwt);
            setuserType(payload.AccountType);
        }
    }, [])


    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSearch(category);
        setShowDropdown(false);
    };

    const categories = ['Nature', 'Restaurants', 'Resorts', 'Cafe', 'Schools'];

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log(search);
            //HANDLE SEARCH QUERY HERE.
        }
    };

    const handlePageChange = (newPage) => {
        navigate(`/tourism/places-to-visit/${newPage}`);
    };

    useEffect(() => {
        axios.get(API.GetContentCount, {})
            .then((response) => response.data)
            .then((data) => {
                setTotalPages(data ? Math.ceil(data / placesPerPage) : 1);
            });
    }, [])

    useEffect(() => {
        // redirect to first page
        if (location.pathname === PATH_NAME.Tourism.PlacesToVisit) {
            navigate('/tourism/places-to-visit/1');
        }

        // generate bottom page numbers
        var newBottomPageNumbers = [currentPage];
        if (currentPage > 1) {
            newBottomPageNumbers.push(currentPage - 1);
        }
        if (currentPage + 1 <= totalPages) {
            newBottomPageNumbers.push(currentPage + 1);
        }
        newBottomPageNumbers.sort();
        setBottomPageNumbers(newBottomPageNumbers);

        // get contents for each pages
        axios.get(API.GetContentPages("places-to-visit", currentPage - 1), {})
            .then((response) => response.data)
            .then((data) => {
                console.log(data);
                setContents(data);
            });

    }, [location.pathname, totalPages]);

    return (
        <>
            <Banner bannerType="common" src={require("../../../res/img/i-love-sv.png")} alt="LGU" searchBar={false} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }, { title: "Tourism" }]}>
                <p>Places to Visit</p>
            </Banner>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                <div className='flex items-center justify-center'>

                    <form className="w-72 sm:w-96 md:w-7/12 my-auto p-2">
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
                                onFocus={() => setShowDropdown(true)}
                                onBlur={() => setShowDropdown(false)}
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                    setShowDropdown(false);
                                }}
                                required
                                onKeyDown={handleKeyDown}
                            />
                            {showDropdown && (
                                <div className="absolute mt-2 w-full bg-white border border-lgu-green rounded-md shadow-lg">
                                    <ul>
                                        {categories.map((category) => (
                                            <li
                                                key={category}
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                onClick={() => handleCategoryClick(category)}
                                            >
                                                {category}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
                {[USER_TYPES.LguSV, USER_TYPES.Admin].includes(userType) ?
                    <div className='w-fit rounded-full ms-5 my-2 float float-right'>
                        <NavLink
                            to={PATH_NAME.Tourism.Content + "/add"}
                            className='bg-lgu-yellow text-black w-fit p-3 rounded-full'> {/** Button for Creating a post */}
                            +&nbsp;&nbsp;&nbsp;Create A Post
                        </NavLink>
                    </div>
                    :
                    null
                }
                <div className='pt-12'>
                    {contents?.length > 0 ?
                        contents.map((content, index) => {
                            return <TourismCards
                                key={index}
                                content={content}
                                userType={userType}
                                onClick={() => {
                                    navigate(PATH_NAME.Tourism.PlacesToVisitPost + "/" + content.contentID);
                                    window.scrollTo({ top: 0, left: 0 });
                                }}
                            />;
                        })
                        :
                        <div
                            className='flex min-h-screen w-full justify-center'>
                            <div className='w-fit'>
                                <img
                                    src={require("./../../../res/img/waterfall.png")}
                                    className='w-40 h-40 opacity-50 mt-32' />
                                <p className='mt-5 select-none'>No contents to show</p>
                            </div>
                        </div>
                    }
                </div>

                <nav aria-label="Page navigation example">
                    <ul className="list-style-none flex justify-center">
                        <li>
                            <button
                                className={`relative block rounded px-3 py-1.5 text-lg text-black transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={() => {
                                    if (currentPage > 1) {
                                        navigate('/tourism/places-to-visit/1')
                                        window.scrollTo({ top: 0, left: 0 });
                                    }
                                }}
                                aria-label="Start"
                            >
                                <MdKeyboardDoubleArrowLeft />
                            </button>
                        </li>
                        <li>
                            <button
                                className={`relative block rounded px-3 py-1.5 text-lg text-black transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                onClick={() => {
                                    if (currentPage > 1) {
                                        navigate(`/tourism/places-to-visit/${currentPage - 1}`)
                                        window.scrollTo({ top: 0, left: 0 });
                                    }
                                }}
                                aria-label="Previous"
                            >
                                <MdKeyboardArrowLeft />
                            </button>
                        </li>

                        {bottomPageNumbers.map((page, index) => (
                            <li key={index}>
                                <NavLink
                                    to={`/tourism/places-to-visit/${page}`}
                                    onClick={() => {
                                        handlePageChange(page);
                                        window.scrollTo({ top: 0, left: 0 });
                                    }}
                                    className={`relative block rounded px-3 py-1.5 text-lg text-black transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white ${page === currentPage ? 'bg-neutral-200' : ''
                                        }`}
                                >
                                    {page}
                                </NavLink>
                            </li>
                        ))}

                        <li>
                            <button
                                className={`relative block rounded px-3 py-1.5 text-lg text-black transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                onClick={() => {
                                    if (currentPage < totalPages) {
                                        navigate(`/tourism/places-to-visit/${currentPage + 1}`);
                                        window.scrollTo({ top: 0, left: 0 });
                                    }
                                }}
                                aria-label="Next"
                            >
                                <MdKeyboardArrowRight />
                            </button>
                        </li>
                        <li>
                            <button
                                className={`relative block rounded px-3 py-1.5 text-lg text-black transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                onClick={() => {
                                    if (currentPage < totalPages) {
                                        navigate(`/tourism/places-to-visit/${totalPages}`);
                                        window.scrollTo({ top: 0, left: 0 });
                                    }
                                }}
                                aria-label="End"
                            >
                                <MdKeyboardDoubleArrowRight />
                            </button>
                        </li>
                    </ul>
                </nav>


            </div>
            <BackToTop />
        </>

    )
}
