'use client'

import { MENU_DATA } from '@/data'
import Link from 'next/link'
import React, { useState } from 'react'

export const MobileMenus = ({ handleOpenSidebar }: { handleOpenSidebar: () => void }) => {
    const [navTitle, setNavTitle] = useState<string | undefined>('')
    //openMobileMenu
    const openMobileMenu = (menu?: string) => {
        if (navTitle === menu) {
            setNavTitle('')
        } else {
            setNavTitle(menu)
        }
    }
    return (
        <nav className='mt-10 text-white'>
            <ul className='w-full uppercase'>
                {MENU_DATA.map((menu) => (
                    <React.Fragment key={menu.id}>
                        {menu.has_dropdown && (
                            <li className='relative'>
                                <Link
                                    href={menu.link}
                                    target='_self'
                                    title={menu.title}
                                    className='block py-4 text-14 font-bold leading-1-5 hover:text-theme-3 border-b border-white-3'
                                    onClick={handleOpenSidebar}
                                >
                                    {menu.title}
                                </Link>
                                <div
                                    className={`grid overflow-hidden transition-all ${navTitle === menu.title ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                        }`}
                                >
                                    <ul className='min-h-0 overflow-hidden'>
                                        {menu?.sub_menus?.map((sub) => (
                                            <li key={sub.title}>
                                                <Link
                                                    href={sub.link}
                                                    target='_self'
                                                    title={sub.title}
                                                    className='block py-2.5 px-8 w-[80%] text-14 font-bold leading-1-5 hover:text-theme-3 border-b border-white-3'
                                                    onClick={handleOpenSidebar}
                                                >
                                                    {sub.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a
                                    className={`w-[30px] h-[30px] flex flex-col items-center justify-center border border-white-3 absolute top-3 right-0 hover:text-theme-3 hover:border-theme-3 ${navTitle === menu.title && 'rotate-45 border-theme-3'
                                        }`}
                                    onClick={() => openMobileMenu(menu?.title)}
                                    style={{ fontSize: '18px', cursor: 'pointer' }}
                                >
                                    <i className='fal fa-plus'></i>
                                </a>
                            </li>
                        )}
                        {!menu.has_dropdown && (
                            <li>
                                <Link
                                    href={menu.link}
                                    target='_self'
                                    title={menu.title}
                                    className='block py-4 text-14 font-bold leading-1-5 hover:text-theme-3'
                                    onClick={handleOpenSidebar}
                                >
                                    {menu.title}
                                </Link>
                            </li>
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </nav>
    )
}
