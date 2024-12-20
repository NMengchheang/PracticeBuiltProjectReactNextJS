"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define an interface for the MenuLink props
interface MenuLinkProps {
  item: {
    path: string;
    icon: React.ReactNode; // Type for React nodes (could be JSX)
    title: string;
  };
}

export default function MenuLink({item} : MenuLinkProps) {

  const pathname = usePathname()

  console.log(pathname);
  console.log('Item path', item.path)
  
  const styleXhover = "hover:bg-custom-gray hover:shadow-custom-green hover:scale-105 duration-300 flex p-5 gap-5 items-center text-xl rounded-lg";
  const styleXactive = "border-b-4 border-[#00df9a] text-[#00df9a] bg-gray-800 rounded-lg";
  return (
    <Link
      href={item.path} 
      className={`${styleXhover} ${pathname === item.path ? styleXactive : ''}`}
    >
      {item.icon}
      {item.title}
    </Link>
  )
}
