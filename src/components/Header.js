import { Fragment, useEffect, useRef, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { API, NO_HEADER, PATH_NAME, USER_TYPES } from './../Variables/GLOBAL_VARIABLE';
import 'tailwindcss/tailwind.css';
import Cookies from 'js-cookie';
import axios from 'axios';

const navigation = [
    {
        access: [...USER_TYPES.General, USER_TYPES.Guest],
        name: 'Home',
        href: PATH_NAME.Home
    },
    {
        access: [...USER_TYPES.General, USER_TYPES.Guest],
        name: 'The Town',
        href: PATH_NAME.TheTown.TheTown,
        subItems: [
            { name: 'About San Vicente', href: PATH_NAME.TheTown.About },
            { name: 'Municipality Profile', href: PATH_NAME.TheTown.MunicipalityProfile },
            { name: 'Municipality Programs', href: PATH_NAME.TheTown.MunicipalityPrograms },
            { name: 'Elected Officials', href: PATH_NAME.TheTown.ElectedOfficials },
            { name: 'Offices', href: PATH_NAME.TheTown.Offices },
            { name: 'Citizen\'s Charter', href: PATH_NAME.TheTown.CitizensCharter }
        ],
    },
    {
        access: [...USER_TYPES.General, USER_TYPES.Guest],
        name: 'Tourism',
        href: PATH_NAME.Tourism.Tourism,
        subItems: [
            { name: 'San Vicente Tourism', href: PATH_NAME.Tourism.SanVicente },
            { name: 'Places to Visit', href: PATH_NAME.Tourism.PlacesToVisit },
            { name: 'Activities', href: PATH_NAME.Tourism.Activities }
        ],
    },
    {
        access: [USER_TYPES.Investor, USER_TYPES.LguSV, USER_TYPES.Admin],
        name: "Invest",
        href: PATH_NAME.Invest.Invest,
        subItems: [
            { name: 'Investment Opportunities', href: PATH_NAME.Invest.InvestmentOpportunities },
            { name: 'Reasons to Investment', href: PATH_NAME.Invest.ReasonsToInvest }
        ]
    },
    {
        access: [...USER_TYPES.General, USER_TYPES.Guest],
        name: 'Services',
        href: PATH_NAME.Services
    },
    {
        access: [...USER_TYPES.General, USER_TYPES.Guest],
        name: 'Transparency',
        href: PATH_NAME.Transparency
    },
    {
        access: [...USER_TYPES.General, USER_TYPES.Guest],
        name: 'Contact Us',
        href: PATH_NAME.ContactUs
    },
];

export default function Header(props) {

    const location = useLocation();
    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    const [adminHeader, setAdminHeader] = useState(true);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
    const [profilePicture, setProfilePicture] = useState(null);

    const notificationDropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (notificationDropdownRef.current && !notificationDropdownRef.current.contains(event.target)) {
            setOpenMobileDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleDropdown = (name) => {
        if (openDropdown === name) {
            // Close the dropdown if it's already open
            setOpenDropdown(null);
        } else {
            // Open the dropdown if it's closed
            setOpenDropdown(name);
        }
    };

    const closeDropdown = () => {
        setOpenDropdown(null);
    };

    useEffect(() => {
        setShow(!NO_HEADER.includes(location.pathname));
        setAdminHeader(!location.pathname.startsWith(PATH_NAME.AdminPages.Admin))
        axios.post(API.analyticsWebpageVisit, { "webpageLink": location.pathname });
    }, [location]);

    function updateUserProfile() {
        axios.get(API.getProfilePFP, {
            headers: {
                "Authorization": `Bearer ${Cookies.get("token")}`
            },
            withCredentials: true
        })
            .then((response) => response.data)
            .then((data) => {
                const byteArray = new Uint8Array(data);
                const decoder = new TextDecoder('utf-8');
                const decodedString = decoder.decode(byteArray);
                const blob = new Blob([byteArray], { type: 'image/png' });
                const file = new File([blob], 'user_profile.png', { type: 'image/png' });
                setProfilePicture(file);
            })
    }
    useEffect(() => {
        var jwt = Cookies.get("token");
        if (jwt) {
            updateUserProfile();
        }
    }, [])
    window.addEventListener('profilePicture', () => { updateUserProfile() });

    return (
        <>
            {show ?
                <>
                    <Disclosure as="nav" className="bg-lgu-green fixed top-0 w-full z-50 min-h-20 ">
                        {({ open }) => (
                            <>
                                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                                    <div className="relative flex h-20 lg:h-24 items-center justify-between">
                                        <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                                            {/* Mobile menu button*/}
                                            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-lgu-lime">
                                                <span className="absolute -inset-0.5" />
                                                <span className="sr-only">Open main menu</span>
                                                {open ? (
                                                    <XMarkIcon className="block h-6 w-6 lg:hidden" aria-hidden="true" />
                                                ) : (
                                                    <Bars3Icon className="block h-6 w-6 lg:hidden" aria-hidden="true" />
                                                )}
                                            </Disclosure.Button>
                                        </div>
                                        <div className="flex flex-1 items-center justify-between">
                                            <NavLink
                                                to={PATH_NAME.Home}
                                                className="flex flex-shrink-0 items-center"
                                                onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                                                <img
                                                    className="h-12 w-auto hidden lg:block"
                                                    src={require('./../res/img/logo.png')}
                                                    alt="San Vicente Logo"
                                                />
                                                <span className="hidden lg:block text-lgu-lime text-xl ml-10 lg:ml-2 font-bold">San Vicente, <br />Camarines Norte</span>
                                            </NavLink>
                                            <div className="hidden lg:block">
                                                <div className="flex space-x-4 mr-5">
                                                    {navigation.map((item) =>
                                                        item.access.includes(props.userType) ?
                                                            item.subItems ? // Check if it's a dropdown item
                                                                <div key={item.name} className="relative group">
                                                                    <button
                                                                        onClick={() => handleDropdown(item.name)}
                                                                        className='relative rounded-md px-1 py-2 text-sm text-lgu-lime group inline-flex hover:text-white'
                                                                    >
                                                                        {item.name}
                                                                        <ChevronDownIcon
                                                                            className={
                                                                                'w-au h-5 ml-2 text-lgu-lime hover:text-white inline-flex ' +
                                                                                (openDropdown === item.name ? 'transform rotate-180' : '')
                                                                            }
                                                                        />
                                                                    </button>
                                                                    {openDropdown === item.name && (
                                                                        <div className="py-2 bg-lgu-green border-2 border-lgu-lime absolute left-0 rounded-md">
                                                                            {item.subItems.map((subItem) => (
                                                                                <NavLink
                                                                                    key={subItem.name}
                                                                                    to={subItem.href}
                                                                                    onClick={() => {
                                                                                        handleDropdown(item.name)
                                                                                        window.scrollTo({ top: 0, left: 0 })
                                                                                    }}
                                                                                    className={({ isActive }) => {
                                                                                        return "block px-4 py-2 text-sm text-lgu-lime hover:text-white whitespace-nowrap overflow-hidden text-overflow-ellipsis " +
                                                                                            (isActive ? "font-medium" : "")
                                                                                    }}

                                                                                >
                                                                                    {subItem.name}
                                                                                </NavLink>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                :
                                                                <NavLink
                                                                    key={item.name}
                                                                    to={item.href}
                                                                    onClick={() => {
                                                                        closeDropdown(); // Close dropdown when a different navigation item is clicked
                                                                        window.scrollTo({ top: 0, left: 0 });
                                                                    }}
                                                                    className={({ isActive }) => {
                                                                        return 'rounded-md px-1 py-2 text-sm text-lgu-lime hover:text-white ' +
                                                                            (isActive ? 'font-medium' : '')
                                                                    }}
                                                                >
                                                                    {item.name}
                                                                </NavLink>
                                                            :
                                                            null
                                                    )}
                                                    {
                                                        props.userType === USER_TYPES.Guest ?
                                                            <NavLink
                                                                to={{
                                                                    pathname: PATH_NAME.Accounts.SignIn,
                                                                    state: { previousPage: location.pathname }
                                                                }}
                                                                onClick={() => {
                                                                    window.scrollTo({ top: 0, left: 0 });
                                                                    Cookies.set("PREVIOUS_LINK", location.pathname);
                                                                }}
                                                                className={({ isActive }) => {
                                                                    return 'rounded-md px-10 py-2 text-sm text-lgu-lime hover:text-white ' +
                                                                        (isActive ? 'font-medium' : '')
                                                                }}
                                                            >
                                                                Sign In
                                                            </NavLink>
                                                            :
                                                            null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            props.userType === USER_TYPES.Guest ?
                                                null
                                                :
                                                <div className="flex items-center">
                                                    <button
                                                        type="button"
                                                        className="relative p-1 text-lgu-lime hover:text-white"
                                                        onClick={() => setOpenMobileDropdown('notifications')}
                                                    >
                                                        <span className="absolute -inset-1.5" />
                                                        <span className="sr-only">View notifications</span>
                                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>

                                                    {/* Notification dropdown */}
                                                    <Transition
                                                        as={Fragment}
                                                        show={openMobileDropdown === 'notifications'}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <div
                                                            ref={notificationDropdownRef}
                                                            className="absolute bottom-[-4rem] right-0 mt-2 w-48 origin-top-right rounded-md bg-green-300 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            {/* Replace the content below with your notification items */}
                                                            <div className="block px-4 py-2 text-sm text-gray-700">
                                                                Notification 1
                                                            </div>
                                                            <div className="block px-4 py-2 text-sm text-gray-700">
                                                                Notification 2
                                                            </div>
                                                        </div>
                                                    </Transition>
                                                    {/* Profile dropdown */}
                                                    <Menu as="div" className="relative ml-3">
                                                        <div>
                                                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                                <span className="absolute -inset-1.5" />
                                                                <span className="sr-only">Open user menu</span>
                                                                <img
                                                                    className="h-10 w-auto rounded-full"
                                                                    src={require("../res/img/icon.png")}
                                                                    alt=""
                                                                />
                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-green-300 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <NavLink
                                                                            to={PATH_NAME.Profile}
                                                                            className={'block px-4 py-2 text-sm text-gray-700 ' + (active ? 'bg-gray-100' : '')}
                                                                        >
                                                                            Your Profile
                                                                        </NavLink>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <NavLink
                                                                            to={PATH_NAME.Messages}
                                                                            className={'block px-4 py-2 text-sm text-gray-700 ' + (active ? 'bg-gray-100' : '')}
                                                                        >
                                                                            Messages
                                                                        </NavLink>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <NavLink
                                                                            to={PATH_NAME.ForumsAndDiscussions}
                                                                            className={'block px-4 py-2 text-sm text-gray-700 ' + (active ? 'bg-gray-100' : '')}
                                                                        >
                                                                            Forum
                                                                        </NavLink>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <NavLink
                                                                            to={PATH_NAME.PrivacyPolicy}
                                                                            className={'block px-4 py-2 text-sm text-gray-700 ' + (active ? 'bg-gray-100' : '')}
                                                                        >
                                                                            Privacy Policy
                                                                        </NavLink>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <NavLink
                                                                            to={PATH_NAME.Accounts.SignIn}
                                                                            className='block px-4 py-2 text-sm text-gray-700'
                                                                            onClick={() => {
                                                                                Cookies.remove("token");
                                                                                Cookies.remove("refresh");
                                                                                window.dispatchEvent(new Event("cookies"));
                                                                                Cookies.set("PREVIOUS_LINK", location.pathname);
                                                                            }}
                                                                        >
                                                                            Sign Out
                                                                        </NavLink>
                                                                    )}
                                                                </Menu.Item>
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </div>
                                        }
                                    </div>
                                </div>
                                <Disclosure.Panel>
                                    <div className="block ml-4">
                                        <div className="flex flex-col mr-5">
                                            {navigation.map((item) =>
                                                item.subItems ? ( // Check if it's a dropdown item
                                                    <div key={item.name} className="group">
                                                        <button
                                                            onClick={() => handleDropdown(item.name)}
                                                            className='relative rounded-md px-1 py-2 text-sm text-lgu-lime group inline-flex hover:text-white'
                                                        >
                                                            {item.name}
                                                            <ChevronDownIcon
                                                                className={
                                                                    'w-au h-5 ml-2 text-lgu-lime hover:text-white inline-flex ' +
                                                                    (openDropdown === item.name ? 'transform rotate-180' : '')
                                                                }
                                                            />
                                                        </button>
                                                        {openDropdown === item.name && (
                                                            <div className="py-2 bg-lgu-green relative ml-4">
                                                                {item.subItems.map((subItem) => (
                                                                    <NavLink
                                                                        key={subItem.name}
                                                                        to={subItem.href} onClick={() => window.scrollTo({ top: 0, left: 0 })}
                                                                        className={({ isActive }) => {
                                                                            return "block rounded-md px-1 py-2 text-sm text-lgu-lime hover:text-white whitespace-nowrap overflow-hidden text-overflow-ellipsis " +
                                                                                (isActive ? "font-medium" : "")
                                                                        }}
                                                                    >
                                                                        {subItem.name}
                                                                    </NavLink>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <NavLink
                                                        key={item.name}
                                                        to={item.href}
                                                        className={({ isActive }) => {
                                                            return 'block rounded-md px-1 py-2 text-sm text-lgu-lime  hover:text-white' +
                                                                (isActive ? 'font-medium' : '')
                                                        }}
                                                        onClick={() => window.scrollTo({ top: 0, left: 0 })}

                                                    >
                                                        {item.name}
                                                    </NavLink>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <div className='mt-20' />
                    {props.userType === USER_TYPES.Admin && adminHeader ?
                        < div className="block w-full h-[50px] bg-lgu-yellow ps-5 pt-2">
                            <p className="select-none">You are logged in as an admin. <span className="text-lgu-green underline leading-[50px] cursor-pointer" onClick={() => navigate(PATH_NAME.AdminPages.Admin)}>Click here to go to admin dashboard</span>.</p>
                        </div>
                        :
                        null
                    }
                </>
                :
                null
            }
            {props.children}
            <Footer />
        </>
    )//<Footer/>
}