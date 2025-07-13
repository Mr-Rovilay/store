"use client";

import { headerData } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex w-1/3 items-center gap-5 capitalize font-semibold sm:flex-row sm:items-center sm:gap-4">
      {headerData?.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={`text-sm font-medium text-gray-700 hover:text-darkColor relative group ${
            pathname === item.href ? 'active' : ''
          }`}
        >
          {item.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor transition-all duration-300 group-hover:w-full group-hover:left-0 ${
              pathname === item.href ? 'w-1/2 left-0' : ''
            }`}
          ></span>
        </Link>
      ))}
    </nav>
  );
};

export default HeaderMenu;