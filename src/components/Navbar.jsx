import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '#', current: false },
    { name: 'Blocks', href: '#', current: false },
    { name: 'Pages', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-transparent fixed top-0 z-10 w-screen h-auto border border-b-white border-l-0 border-r-0">
            {({ open }) => (
                <>
                    <div className="mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>

                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">

                                    <div SVG_Icon className="flex items-center relative z-10">
                                        <svg ButtonSmallScreen className="
                                    h-[40px] w-11 pt-1
                                    block lg:hidden" aria-hidden="true" fill="currentColor" viewBox="-10 -25 100 100">
                                            <path
                                                fillRule="evenodd"
                                                d="M0.45953 0.0908813V9.72725H10.9595V37H22.3004V9.72725H32.8004V0.0908813H0.45953ZM47.8332 0.0908813H34.3672V37H45.6399V20.3234L52.0006 36.7272H58.9594L65.3217 20.4307V37H76.5945V0.0908813H63.1284L55.4808 18.7279L47.8332 0.0908813Z"
                                                fill="#FFFFFF"
                                                clipRule="evenodd" /></svg>
                                        <svg ButtonBigScreen className="
                                    h-[40px] w-11 pt-1
                                    hidden lg:block" aria-hidden="true" fill="currentColor" viewBox="-10 -25 100 100">
                                            <path
                                                fillRule="evenodd"
                                                d="M0.45953 0.0908813V9.72725H10.9595V37H22.3004V9.72725H32.8004V0.0908813H0.45953ZM47.8332 0.0908813H34.3672V37H45.6399V20.3234L52.0006 36.7272H58.9594L65.3217 20.4307V37H76.5945V0.0908813H63.1284L55.4808 18.7279L47.8332 0.0908813Z"
                                                fill="#FFFFFF"
                                                clipRule="evenodd" /></svg>
                                    </div>

                                </div>

                                <div Navbar_Buttons className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-white hover:text-black',
                                                    'px-3 py-2 rounded-md text-lg font-bold w-[200px] text-center'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-white hover:text-black',
                                        'block px-3 py-2 rounded-md text-lg font-bold '
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}