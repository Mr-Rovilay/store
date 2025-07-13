"use client"
import { headerData } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const HeaderMenu = () => {
  const pathname = usePathname()
  return (
    <nav className="hidden md:inline-flex w-1/3 item-center gap-5 text-sm capitalize font-semibold sm:flex-row sm:items-center sm:gap-4">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`text-sm font-medium text-gray-700 hoverEffect hover:text-darkColor relative group ${pathname === item?.href && "w-1/2"}`}
        >
          {item?.title}
          <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-full group-hover:left-0 $${pathname === item?.href && "w-1/2"}`}></span>
        </Link>
      ))}
    </nav>
  )
}

export default HeaderMenu
