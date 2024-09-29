"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoIosArrowDropdown } from "react-icons/io";

const HeaderClient =  ( {sessionuser} : { sessionuser: any | null } ) => {
    const pathname = usePathname();
    const [dropdown, setDropdown] = useState(false);
    const [nav, setNav] = useState(false);

    const handleNav = () => setNav(!nav);
    

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Company", href: "/company" },
        {
            name: "Collections", href: "/collections", children: [
                { name: "Accessories", href: "/collections/accessories" },
                { name: "Cameras & Photography", href: "/collections/cameras-photography" },
                { name: "Laptops", href: "/collections/laptops" },
                { name: "Desktops", href: "/collections/desktops" }
            ]
        },
        { name: "Contact", href: "/contact" },
        { name: "About", href: "/about" },
        { name: "Testing", href: "/Testing" },
        ...(sessionuser
            ? [
                { name: "Logout", href: "/signout"},
                { name: "Deshboard", href: "/dashboard"},
            ]
            : [
                { name: "SignIn", href: "/api/auth/signin" },
                { name: "SignUp", href: "/signup" }
            ]
        )
    ];

    return (
        <div className="navigation fixed w-full top-0 left-0 bg-[#000300] z-9999 transition-custom duration-300 ease-in-out">
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
                <h1 className='w-full text-3xl font-sans font-bold text-[#00df9a]'>Luxury<span className='text-white'>Computer</span> </h1>
                <ul className='hidden md:flex'>
                    {
                        navLinks.map((link) => {
                            const isActive = link.href === "/" ? pathname === link.href : pathname.startsWith(link.href);
                            const baseClasses = "py-1 px-4 relative flex";
                            const activeClasses = "border-b-4 border-[#00df9a] text-[#00df9a]";
                            const inactiveClasses = "text-white";

                            if (link.children) {
                                const isAnyChildActive = link.children.some(child => pathname.startsWith(child.href));

                                return (
                                    <li
                                        key={link.name}
                                        className={`${baseClasses} ${isActive || isAnyChildActive ? activeClasses : inactiveClasses} flex items-center`}
                                        onMouseEnter={() => setDropdown(true)}
                                        onMouseLeave={() => setDropdown(false)}
                                    >
                                        <span className="flex items-center cursor-pointer">
                                            {link.name} <IoIosArrowDropdown className="ml-1 m text-2xl" />
                                        </span>
                                        {dropdown && (
                                            <ul className="absolute left-0 mt-48 w-96 bg-white text-black rounded-sm shadow-lg">
                                                {link.children.map(child => (
                                                    <li key={child.name} className={`hover:bg-gray-100 ${pathname.startsWith(child.href) ? 'bg-gray-200' : ''}`}>
                                                        <Link href={child.href} className="block px-4 py-2">
                                                            {child.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            }

                            return (
                                <li key={link.name}>
                                    <Link href={link.href} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>

                {/* mobile */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-sans font-bold text-[#00df9a] m-4'>React.</h1>
                    <ul className='uppercase p-4'>
                        {
                            navLinks.map((link) => {
                                const isActive = link.href === "/" ? pathname === link.href : pathname.startsWith(link.href);
                                const baseClasses = "p-4 border-b border-gray-600";
                                const PClasses = "p-2.5";
                                const activeClasses = "text-black bg-[#00df9a] hover:bg-green-800 rounded-3xl focus:outline-none";
                                const inactiveClasses = "text-white";

                                if (link.name === "Collections") {
                                    return (
                                        <li key={link.name} className={`${baseClasses}`}>
                                            <div className='flex justify-between items-center' onClick={() => setDropdown(!dropdown)}>
                                                <Link
                                                    href={link.href}
                                                    className={`${PClasses} ${isActive ? activeClasses : inactiveClasses}`}
                                                >
                                                    {link.name}
                                                </Link>
                                                <AiOutlineMenu size={20} className='cursor-pointer' />
                                            </div>
                                            {dropdown && (
                                                <ul className="mt-2 bg-white text-black rounded-lg shadow-lg">
                                                    <li className="hover:bg-gray-100 border-b border-gray-600">
                                                        <Link href="/collections/type1" className="block px-4 py-2">Type 1</Link>
                                                    </li>
                                                </ul>
                                            )}
                                        </li>
                                    );
                                }

                                return (
                                    <li key={link.name} className={`${baseClasses}`}>
                                        <Link
                                            href={link.href}
                                            className={`${PClasses} ${isActive ? activeClasses : inactiveClasses}`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                {/* end mobile */}
            </div>
        </div>
    );
}

export default HeaderClient;