import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon,ChevronDownIcon  } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const navigation = [
  { name: 'Home', href: '/'},
  {
    name: 'The Town',
    href: '/san_vicente',
    subItems: [
      { name: 'About San Vicente', href: '/san_vicente/about'},
      { name: 'Municipality Profile', href: '/san_vicente/profile'},
      { name: 'Municipality Programs', href: '/san_vicente/programs'},
      { name: 'Elected Officials', href: '/san_vicente/elected_officials'},
      { name: 'Offices', href: '/san_vicente/offices'},
      { name: 'Citizen\'s Charter', href: '/san_vicente/citizens_charter'}
    ],
  },
  {
    name: 'Tourism',
    href: '/tourism',
    subItems: [
      { name: 'San Vicente Tourism', href: '/tourism'},
      { name: 'Places to Visit', href: '/tourism/places_to_visit'},
      { name: 'Activities', href: '/tourism/activities'}
    ],
  },
  { name: 'Transparency', href: '/transparency'},
  { name: 'Contact Us', href: '/contacts'},
];

export default function Header(props) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (name) => {
    if (openDropdown === name) {
      // Close the dropdown if it's already open
      setOpenDropdown(null);
    } else {
      // Open the dropdown if it's closed
      setOpenDropdown(name);
    }
  };

  return (
    <>
        {!["/sign-in", "/sign-up"].includes(window.location.pathname) ?
            <>
                <Disclosure as="nav" className="bg-lgu-green fixed top-0 w-full z-50 min-h-20">
                {({ open }) => (
                    <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-20 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex flex-1 items-center justify-between">
                            <div className="flex flex-shrink-0 items-center">
                            <img
                                className="h-12 w-auto"
                                src="https://github.com/aechano/firstReactApp/blob/main/src/385409182_764034482084351_781871156510420035_n.png?raw=true"
                                alt="Your Company"
                            />
                            <span className="text-lgu-lime text-lg ml-2 font-bold">LGU San Vicente</span>
                            </div>
                            <div className="hidden sm:block">
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
                                            className= {
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
                                                className={({isActive}) => {
                                                    return "block px-4 py-2 text-sm text-lgu-lime hover:text-white whitespace-nowrap overflow-hidden text-overflow-ellipsis " +
                                                            (isActive?"font-medium":"")
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
                                        className={({isActive}) => {
                                            return 'rounded-md px-3 py-2 text-sm text-lgu-lime hover:text-white ' + 
                                            (isActive?'font-medium':'')
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
                                        to="#"
                                        className={'block px-4 py-2 text-sm text-gray-700 ' + (active ? 'bg-gray-100' : '')}
                                    >
                                        Your Profile
                                    </NavLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <NavLink
                                        to="#"
                                        className={'block px-4 py-2 text-sm text-gray-700 ' + (active ? 'bg-gray-100' : '')}
                                    >
                                        Messages
                                    </NavLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <NavLink
                                        to="#"
                                        className={'block px-4 py-2 text-sm text-gray-700 ' + (active ? 'bg-gray-100' : '')}
                                    >
                                        Privacy Policy
                                    </NavLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <a
                                        href="/sign-in"
                                        className='block px-4 py-2 text-sm text-gray-700'
                                    >
                                        Sign out
                                    </a>
                                    )}
                                </Menu.Item>
                                </Menu.Items>
                            </Transition>
                            </Menu>
                        </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div>
                        {navigation.map((item) => (
                            <div key={item.name} className="group">
                            <Disclosure.Button
                                as="a"
                                href={item.href}
                                className={'block rounded-md px-3 py-2 text-base font-medium text-lgu-lime hover:text-white'}
                            >
                                {item.name}
                            </Disclosure.Button>
                            </div>
                        ))}
                        </div>
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
                <div className='mt-20'/>
            </>
        :
            null}
        {props.children}
        {!["/sign-in", "/sign-up"].includes(window.location.pathname) ? <Footer/> : null}
    </>
  )
}