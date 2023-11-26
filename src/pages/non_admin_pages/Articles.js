import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Banner from "../../components/Banner";
import { PATH_NAME } from "../../Variables/GLOBAL_VARIABLE";
import { NavLink } from 'react-router-dom';
import BackToTop from '../../components/BackToTop';

export default function Articles() {
    const articlesPerPage = 5;
    const { page = 1 } = useParams();
    const currentPage = parseInt(page, 10);

    var contents = [
        {
            id: 0,
            pic: require('../../res/img/article.png'),
            title: 'June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',
        },
        {
            id: 1,
            pic: require('../../res/img/article.png'),
            title: 'Article 2',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 2,
            pic: require('../../res/img/article.png'),
            title: 'Article 3',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 3,
            pic: require('../../res/img/article.png'),
            title: 'Article 4',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 4,
            pic: require('../../res/img/article.png'),
            title: 'Article 5',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 5,
            pic: require('../../res/img/article.png'),
            title: 'Article 6',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 6,
            pic: require('../../res/img/article.png'),
            title: 'Article 7',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 7,
            pic: require('../../res/img/article.png'),
            title: 'Article 8',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

        {
            id: 8,
            pic: require('../../res/img/article.png'),
            title: 'Article 9',
            cont: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget felis ullamcorper, euismod neque ut, pellentesque purus. Nullam efficitur, elit id tincidunt tristique, turpis velit venenatis arcu, non finibus lectus tortor in libero. Quisque in ante eu dui hendrerit tristique. Vivamus eleifend diam eu eros sollicitudin, ac elementum urna convallis. Proin a dui eu ipsum hendrerit gravida. Integer in risus in tortor euismod auctor',

        },

    ];

    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;

    const currentArticles = contents.slice(startIndex, endIndex);

    const totalPages = Math.ceil(contents.length / articlesPerPage);

    const navigate = useNavigate();

    const handlePageChange = (newPage) => {
        navigate(`/articles/${newPage}`);
    };


    return (
        <>

            <Banner bannerType="common" src={require("../../res/img/mananap_falls.png")} alt="Mananap Falls" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }, { title: "Tourism" }, { title: "San Vicente Tourism", to: PATH_NAME.Tourism.SanVicente }]}>
                <p>Article</p>
            </Banner>

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                <div>
                    {currentArticles.map((content, index) => (
                        <Link to={`/article/${content.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })} key={index} className="article-link">
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
                                className="relative block rounded px-3 py-1.5 text-lg text-black transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
                                href="#"
                                aria-label="Previous" onClick={() => handlePageChange(currentPage - 1)}>
                                <span aria-hidden="true">&laquo;</span>
                            </NavLink>
                        </li>
                        {[...Array(totalPages).keys()].map((pageNumber) => (
                            <li key={pageNumber}>
                                <NavLink
                                    to={`/articles/${pageNumber + 1}`}
                                    onClick={() => handlePageChange(pageNumber + 1)}
                                    className="relative block rounded px-3 py-1.5 text-lg text-black transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
                                >
                                    {pageNumber + 1}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <NavLink
                                className="relative block rounded px-3 py-1.5 text-lg text-black  transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
                                href="#"
                                aria-label="Next" onClick={() => handlePageChange(currentPage + 1)}
                            ><span aria-hidden="true">&raquo;</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <BackToTop />
        </>
    );
}

export function ArticleContent() {
    const { articleID } = useParams();

    var contents = [
        {
            id: 0,
            pic: require('../../res/img/article.png'),
            title: 'June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders',
            cont:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            desc: "Office of the Mayor. Photo taken by PogsPhotography",
            date: "October 1, 2023",
            time: "9:50 A.M"
        },
        {
            id: 1,
            pic: require('../../res/img/article.png'),
            title: 'June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders',
            cont:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            desc: "Office of the Mayor. Photo taken by PogsPhotography",
            date: "October 1, 2023",
            time: "9:50 A.M"
        },
        {
            id: 2,
            pic: require('../../res/img/article.png'),
            title: 'June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders',
            cont:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            desc: "Office of the Mayor. Photo taken by PogsPhotography",
            date: "October 1, 2023",
            time: "9:50 A.M"
        },
        {
            id: 3,
            pic: require('../../res/img/article.png'),
            title: 'June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders',
            cont:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            desc: "Office of the Mayor. Photo taken by PogsPhotography",
            date: "October 1, 2023",
            time: "9:50 A.M"
        },
        {
            id: 4,
            pic: require('../../res/img/article.png'),
            title: 'June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders',
            cont:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            desc: "Office of the Mayor. Photo taken by PogsPhotography",
            date: "October 1, 2023",
            time: "9:50 A.M"
        },
        {
            id: 5,
            pic: require('../../res/img/article.png'),
            title: 'June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders',
            cont:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            desc: "Office of the Mayor. Photo taken by PogsPhotography",
            date: "October 1, 2023",
            time: "9:50 A.M"
        },
        {
            id: 6,
            pic: require('../../res/img/article.png'),
            title: 'June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders',
            cont:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            desc: "Office of the Mayor. Photo taken by PogsPhotography",
            date: "October 1, 2023",
            time: "9:50 A.M"
        },
        {
            id: 7,
            pic: require('../../res/img/article.png'),
            title: 'June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders',
            cont:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            desc: "Office of the Mayor. Photo taken by PogsPhotography",
            date: "October 1, 2023",
            time: "9:50 A.M"
        },
        {
            id: 8,
            pic: require('../../res/img/article.png'),
            title: 'June 23, 2023 | Monthly Meeting of the Local School Board Attended by All Stakeholders',
            cont:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            desc: "Office of the Mayor. Photo taken by PogsPhotography",
            date: "October 1, 2023",
            time: "9:50 A.M"
        },
    ];

    // Find the article with the matching ID
    const article = contents.find((article) => article.id === parseInt(articleID, 10));

    // Check if the article was found
    if (!article) {
        return (
            <div>
                <p>Article not found.</p>
            </div>
        );
    }

    // Split the content into paragraphs
    const paragraphs = article.cont.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));



    return (

        <>

            <Banner
                bannerType="common"
                src={require('../../res/img/mananap_falls.png')}
                alt="Mananap Falls"
                searchBar={true}
                breadcrumbs={[
                    { title: 'Home', to: PATH_NAME.Home },
                    { title: 'Tourism' },
                    { title: 'San Vicente Tourism', to: PATH_NAME.Tourism.SanVicente },
                ]}
            >
                <p>Article</p>
            </Banner>

            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5'>
                <div className='mb-10'>
                    <h1 className='mt-10 mb-2 font-bold text-4xl'>{article.title}</h1>
                    <p className='text-sm'>{article.date} | {article.time}</p>
                </div>


                <div>

                    <img src={article.pic} alt="Article" className='mx-auto rounded-md w-auto h-96' />
                    <p className='text-sm text-gray-500 text-center pt-2'>{article.desc}</p>

                </div>



                {paragraphs.map((paragraph, index) => (
                    <p key={index} className='leading-6 mt-8 text-justify indent-10'>
                        {paragraph}
                    </p>
                ))}
            </div>



            {/* Media query for screens with a maximum width of 768px */}
            <style>
                {`
                    @media (max-width: 768px) {
                        p {
                        word-wrap: break-word; /* Adjust text wrapping for smaller screens */
                        }
                    }
                `}
            </style>
            <BackToTop />
        </>
    );
}