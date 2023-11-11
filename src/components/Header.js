import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { NavLink, useLocation } from 'react-router-dom';
import Footer from './Footer';
import { NO_HEADER, PATH_NAME } from './../Variables/GLOBAL_VARIABLE';
import 'tailwindcss/tailwind.css';
const navigation = [
    { name: 'Home', href: PATH_NAME.Home },
    {
        name: 'The Town',
        href: PATH_NAME.TheTown.TheTown,
        subItems: [
            { name: 'About San Vicente', href: PATH_NAME.TheTown.About },
            { name: 'Municipality Profile', href: PATH_NAME.TheTown.MunicipalityProfile },
            { name: 'Municipality Programs', href: PATH_NAME.TheTown.MunicipalityPrograms },
            { name: 'Elected Officials', href: PATH_NAME.TheTown.ElectedOfficials },
            { name: 'Offices', href: PATH_NAME.TheTown.Offices },
            { name: 'Citizen\'s Charter', href: PATH_NAME.TheTown.Citizen }
        ],
    },
    {
        name: 'Tourism',
        href: PATH_NAME.Tourism.Tourism,
        subItems: [
            { name: 'San Vicente Tourism', href: PATH_NAME.Tourism.SanVicente },
            { name: 'Places to Visit', href: PATH_NAME.Tourism.PlacesToVisit },
            { name: 'Activities', href: PATH_NAME.Tourism.Activities }
        ],
    },
    { name: 'Services', href: "#" },
    { name: 'Transparency', href: PATH_NAME.Transparency },
    { name: 'Contact Us', href: PATH_NAME.ContactUs },
];

export default function Header(props) {

    const location = useLocation();
    const [show, setShow] = useState(true);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

    const handleDropdown = (name) => {
        if (openDropdown === name) {
            // Close the dropdown if it's already open
            setOpenDropdown(null);
        } else {
            // Open the dropdown if it's closed
            setOpenDropdown(name);
        }
    };

    useEffect(() => {
        setShow(!NO_HEADER.includes(location.pathname));
        console.log("currently in: " + location.pathname);
    }, [location]);

    return (
        <>
            {show ?
                <>
                    <Disclosure as="nav" className="bg-lgu-green fixed top-0 w-full z-50 min-h-20 shadow-sm shadow-white">
                        {({ open }) => (
                            <>
                                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                                    <div className="relative flex h-20 lg:h-28 items-center justify-between">
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
                                            <NavLink to={PATH_NAME.Home} className="flex flex-shrink-0 items-center">
                                                <img
                                                    className="h-12 w-auto hidden lg:block"
                                                    src={require('./../res/img/logo.png')}
                                                    alt="San Vicente Logo"
                                                />
                                                <span className="hidden lg:block text-lgu-lime text-xl ml-10 lg:ml-2 font-bold">SAN VICENTE, <br/>CAMARINES NORTE</span>
                                            </NavLink>
                                            <div className="hidden lg:block">
                                                <div className="flex space-x-4 mr-10">
                                                    {navigation.map((item) =>
                                                        item.subItems ? ( // Check if it's a dropdown item
                                                            <div key={item.name} className="relative group">
                                                                <button
                                                                    onClick={() => handleDropdown(item.name)}
                                                                    className='relative rounded-md px-3 py-2 text-sm text-lgu-lime group inline-flex hover:text-white'
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
                                                                                onClick={() => handleDropdown(item.name)}
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
                                                        ) : (
                                                            <NavLink
                                                                key={item.name}
                                                                to={item.href}
                                                                className={({ isActive }) => {
                                                                    return 'rounded-md px-3 py-2 text-sm text-lgu-lime hover:text-white ' +
                                                                        (isActive ? 'font-medium' : '')
                                                                }}

                                                            >
                                                                {item.name}
                                                            </NavLink>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                type="button"
                                                className="relative p-1 text-lgu-lime hover:text-white"
                                            >
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            {/* Profile dropdown */}
                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="absolute -inset-1.5" />
                                                        <span className="sr-only">Open user menu</span>
                                                        <img
                                                            className="h-10 w-auto rounded-full"
                                                            src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.6435-9/157425982_1304090739970516_233654553417427649_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeHCZHrUlmDBj8vZCwrOoEH2UGHrp6j-YmZQYeunqP5iZnJtfmx7qup-SwxFWNYIq41r11UR4Q3IxPGxN-ASyY0X&_nc_ohc=c7hjr2L9e2kAX-L1kit&_nc_oc=AQn1HuhIrbGNH_IkFyzacoilsey9s74VcBNiGCcnDTkn23Mpqz5sTT0HhfJuX3DxLQ4&_nc_ht=scontent.fmnl3-1.fna&oh=00_AfAg5gXj79gMyTRsnn97HTlQCsoSSeaobFEsrZSfwNXV9w&oe=655713AF"
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
                                                                >
                                                                    Sign out
                                                                </NavLink>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                                <Disclosure.Panel>
                                    <div className="block">
                                        <div className="flex flex-col mr-10">
                                            {navigation.map((item) =>
                                                item.subItems ? ( // Check if it's a dropdown item
                                                    <div key={item.name} className="group">
                                                        <button
                                                            onClick={() => handleDropdown(item.name)}
                                                            className='relative rounded-md px-3 py-2 text-sm text-lgu-lime group inline-flex hover:text-white'
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
                                                            <div className="py-2 bg-lgu-green absolute right-0 rounded-md">
                                                                {item.subItems.map((subItem) => (
                                                                    <NavLink
                                                                        key={subItem.name}
                                                                        to={subItem.href}
                                                                        className={({ isActive }) => {
                                                                            return "block rounded-md px-3 py-2 text-sm text-lgu-lime hover:text-white whitespace-nowrap overflow-hidden text-overflow-ellipsis " +
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
                                                            return 'block rounded-md px-3 py-2 text-sm text-lgu-lime  hover:text-white' +
                                                                (isActive ? 'font-medium' : '')
                                                        }}

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
                </>
                :
                null
            }
            {props.children}
            <Footer />
        </>
    )//<Footer/>
}