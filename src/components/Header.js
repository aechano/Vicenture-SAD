import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon,ChevronDownIcon  } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: true },
  {
    name: 'The Town',
    href: '#',
    current: false,
    subItems: [
      { name: 'About San Vicente', href: '#', current: false },
      { name: 'Municipality Profile', href: '#', current: false },
      { name: 'Municipality Programs', href: '#', current: false },
      { name: 'Elected Officials', href: '#', current: false },
      { name: 'Offices', href: '#', current: false },
      { name: 'Citizen\'s Charter', href: '#', current: false }
    ],
  },
  {
    name: 'Tourism',
    href: '#',
    current: false,
    subItems: [
      { name: 'San Vicente Tourism', href: '#', current: false },
      { name: 'Places to Visit', href: '#', current: false },
      { name: 'Activities', href: '#', current: false }
    ],
  },
  { name: 'Transparency', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
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
    <Disclosure as="nav" className="bg-green-700">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
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
                    className="h-8 w-auto"
                    src="https://github.com/aechano/firstReactApp/blob/main/src/385409182_764034482084351_781871156510420035_n.png?raw=true"
                    alt="Your Company"
                  />
                   <span className="text-green-300 text-lg ml-2 font-bold">LGU San Vicente</span>
                </div>
                <div className="hidden sm:block">
                  <div className="flex space-x-4 mr-10">
                    {navigation.map((item) =>
                        item.subItems ? ( // Check if it's a dropdown item
                          <div key={item.name} className="relative group">
                            <button
                              onClick={() => handleDropdown(item.name)}
                              className={classNames(
                                item.current ? 'text-green-300 hover:text-white'  : 'text-green-300 hover:text-white',
                                'relative rounded-md px-3 py-2 text-sm font-medium group inline-flex'
                              )}
                            >
                              {item.name}
                              <ChevronDownIcon
                                className={classNames(
                                  openDropdown === item.name ? 'transform rotate-180' : '',
                                  'w-au h-5 ml-2 text-green-300 hover:text-white inline-flex  '
                                )}
                              />
                            </button>
                            {openDropdown === item.name && (
                              <div className="py-2 bg-green-700 absolute right-0 rounded-md">
                                {item.subItems.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-4 py-2 text-sm text-green-300 hover:text-white whitespace-nowrap overflow-hidden text-overflow-ellipsis"
                                  >
                                    {subItem.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'text-green-300 hover:text-white' : 'text-green-300 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        )
                      )}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="relative p-1 text-green-300 hover:text-white"
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
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Messages
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Privacy Policy
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
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
                    className={classNames(
                      item.current ? 'text-green-500 hover:text-white' : 'text-green-500 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
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
  )
}