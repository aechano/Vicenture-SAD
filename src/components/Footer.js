import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NO_FOOTER, PATH_NAME } from "../Variables/GLOBAL_VARIABLE";

function Footer() {
    const location = useLocation();
    const [show, setShow] = useState(true);
    useEffect(() => {
        setShow(true);
        NO_FOOTER.every(path => {
            if (path === location.pathname || (path.endsWith("/*") && location.pathname.startsWith(path.replace("/*", "", 1)))) {
                setShow(false);
                return false;
            }
            return true;
        });
    }, [location]);

    return (
        <>
            {show ?
                <div className="w-full bg-lgu-green pt-8">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-5">
                        <div className="relative items-center justify-between">
                            <footer>
                                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                                    <div className="lg:flex lg:justify-between">
                                        <div className="mb-6 md:mb-0">
                                            <NavLink to={PATH_NAME.Home} className="flex items-center" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
                                                <img src={require('./../res/img/logo.png')} className="h-12 w-auto mt-5 pr-2" alt="FlowBite Logo" />
                                                <img src={require('./../res/img/transparency_seal.png')} className="h-12 w-auto mt-5 pr-2" alt="FlowBite Logo" />
                                                <div className="text-white sm:ml-4 mt-5"> {/* Reduced left margin */}
                                                    <span className="block text-lgu-lime text-2xl sm:ml-2 font-bold">
                                                        San Vicente,
                                                    </span>
                                                    <span className="text-lgu-lime text-2xl sm:ml-2 font-bold">
                                                        Camarines Norte
                                                    </span>
                                                </div>

                                            </NavLink>
                                        </div>
                                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                                            <div>
                                                <h2 className="mb-6 text-sm font-semibold text-lgu-lime uppercase dark:text-lgu-lime">Quick Links</h2>
                                                <ul className="text-lgu-lime dark:text-lgu-lime font-medium">
                                                    <li className="mb-2">
                                                        <NavLink to={PATH_NAME.TheTown.About} className="hover:underline" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>The Town</NavLink>
                                                    </li>
                                                    <li className="mb-2">
                                                        <NavLink to={PATH_NAME.Transparency} className="hover:underline" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>Transparency</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={PATH_NAME.Tourism.Tourism} className="hover:underline" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>Tourism</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h2 className="mb-6 text-sm font-semibold text-lgu-lime uppercase dark:text-lgu-lime">Feedbacks</h2>
                                                <ul className="text-lgu-lime dark:text-lgu-lime font-medium">
                                                    <li className="mb-2">
                                                        <NavLink to={PATH_NAME.ContactUs} className="hover:underline" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>Contact Us</NavLink>
                                                    </li>
                                                    <li className="mb-2">
                                                        <NavLink to={PATH_NAME.Survey} className="hover:underline" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>Survey</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to={PATH_NAME.ForumsAndDiscussions} className="hover:underline" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>Forum</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h2 className="mb-6 text-sm font-semibold text-lgu-lime uppercase dark:text-lgu-lime">Contacts</h2>
                                                <ul className="text-lgu-lime dark:text-lgu-lime font-medium">
                                                    <li className="mb-2">
                                                        <p>0912-345-6789</p>
                                                    </li>
                                                    <li>
                                                        <p>username@gmail.com</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-lgu-lime lg:my-8" />
                                    <div className="lg:flex lg:items-center lg:justify-between">
                                        <span className="text-sm text-lgu-lime sm:text-center dark:text-lgu-lime">Copyright Ⓒ 2023. Municipal Government of San Vicente, Camarines Norte | All Rights Reserved.
                                        </span>
                                        <div className="flex mt-4 sm:justify-start lg:mt-0">
                                            <a href="#" className="text-lgu-lime hover:text-gray-900 dark:hover:text-white">
                                                <img
                                                    className="w-auto h-7 pr-2 "
                                                    src={require('./../res/img/x.png')}
                                                />
                                            </a>
                                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                                <img
                                                    className="w-auto h-7 pr-2"
                                                    src={require('./../res/img/facebook.png')}
                                                />
                                            </a>
                                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                                <img
                                                    className="w-auto h-7 pr-2"
                                                    src={require('./../res/img/instagram.png')}
                                                />
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>

                </div>
                :
                null
            }
        </>
    );
}

export default Footer;
