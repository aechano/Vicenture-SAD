import React, { useEffect, useState } from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';
import BackToTop from '../../../components/BackToTop';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Awards() {
    const awardsPerPage = 5;
    const { page = 1 } = useParams();
    const currentPage = parseInt(page, 10);

    var contents = [
        {
            id: 0,
            pic: require('../../../res/img/article.png'),
            title: 'November 23, 2023 | Peace and Order Awardee Community',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',
        },
        {
            id: 1,
            pic: require('../../../res/img/article.png'),
            title: 'Drug free Community Award',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 2,
            pic: require('../../../res/img/article.png'),
            title: 'Zero Crime Rate',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 3,
            pic: require('../../../res/img/article.png'),
            title: 'Awards 4',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 4,
            pic: require('../../../res/img/article.png'),
            title: 'Awards 5',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 5,
            pic: require('../../../res/img/article.png'),
            title: 'Awards 6',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 6,
            pic: require('../../../res/img/article.png'),
            title: 'Awards 7',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 7,
            pic: require('../../../res/img/article.png'),
            title: 'Awards 8',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 8,
            pic: require('../../../res/img/article.png'),
            title: 'Awards 9',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

    ];

        // Calculate the start and end indices for the current page
        const startIndex = (currentPage - 1) * awardsPerPage;
        const endIndex = startIndex + awardsPerPage;
    
        const currentAwards = contents.slice(startIndex, endIndex);
    
        const totalPages = Math.ceil(contents.length / awardsPerPage);
    
        const navigate = useNavigate();
        const location = useLocation();
    
        const handlePageChange = (newPage) => {
            navigate(`/awards/${newPage}`);
        };
    
        useEffect(() => {
            if (location.pathname === PATH_NAME.Awards) {
                navigate('/awards/1');
            }
        }, [location.pathname, navigate]);
    
        return (
            <>
    
                <Banner bannerType="common" src={require("../../../res/img/mananap_falls.png")} alt="Mananap Falls" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }, { title: "The Town" }, { title: "Awards", to: PATH_NAME.TheTown.Awards }]}>
                    <p>Awards and Recognition</p>
                </Banner>
    
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                    <div>
                        {currentAwards.map((content, index) => (
                            <Link to={`/awards/${content.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })} key={index} className="awards-link">
                                <div className="pb-5">
                                    <div className="flex flex-col items-center border-b-2 border-black md:flex-row md:mx-auto">
                                        <img
                                            className="object-cover w-full h-96 md:h-auto md:w-52 rounded-sm m-3"
                                            src={content.pic}
                                            alt=""
                                        />
                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
                                                {content.title}
                                            </h2>
                                            <p className="mb-3 font-normal text-gray-700 text-justify">
                                                {content.cont}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul className="list-style-none flex justify-center">
                            <li>
                                <NavLink
                                    className={`relative block rounded px-3 py-1.5 text-lg text-black transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                    to={`/awards/${currentPage - 1}`}
                                    onClick={() => {
                                        if (currentPage > 1) {
                                            handlePageChange(currentPage - 1);
                                            window.scrollTo({ top: 0, left: 0 });
                                        }
                                    }}
                                    aria-label="Previous"
                                >
                                    <span aria-hidden="true">&laquo;</span>
                                </NavLink>
                            </li>
    
                            {[...Array(totalPages).keys()].map((pageNumber) => (
                                <li key={pageNumber}>
                                    <NavLink
                                        to={`/awards/${pageNumber + 1}`}
                                        onClick={() => {
                                            handlePageChange(pageNumber + 1);
                                            window.scrollTo({ top: 0, left: 0 });
                                        }}
                                        className={`relative block rounded px-3 py-1.5 text-lg text-black transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white ${pageNumber + 1 === currentPage ? 'bg-neutral-200' : ''
                                            }`}
                                    >
                                        {pageNumber + 1}
                                    </NavLink>
                                </li>
                            ))}
    
                            <li>
                                <NavLink
                                    className={`relative block rounded px-3 py-1.5 text-lg text-black transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                    to={`/awards/${currentPage + 1}`}
                                    onClick={() => {
                                        if (currentPage < totalPages) {
                                            handlePageChange(currentPage + 1);
                                            window.scrollTo({ top: 0, left: 0 });
                                        }
                                    }}
                                    aria-label="Next"
                                >
                                    <span aria-hidden="true">&raquo;</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <BackToTop />
            </>
        );
    }