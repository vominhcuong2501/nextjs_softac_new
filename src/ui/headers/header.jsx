'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { DISPLAY_DEVICE, SITE_LOGO, SITE_TITLE } from '@/constants'
import { NavMenu } from '../nav-menu'
import { useDisplay } from '@/hooks'
import commonData from './../../locale/en/common.json'
import { Sidebar } from '../sidebar'

export const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const isMobile = useDisplay(DISPLAY_DEVICE.TABLET)

  return (
    <>
      <header className='bg-white sticky top-0 shadow-1 py-4 lg:py-0'>
        <div className='container flex items-center justify-between gap-5'>
          <Link href='/' target='_self' title={SITE_TITLE}>
            <Image
              src={SITE_LOGO.DARK.SOURCE}
              width={SITE_LOGO.DARK.WIDTH}
              height={SITE_LOGO.DARK.HEIGHT}
              loading='lazy'
              alt={SITE_TITLE}
              title={SITE_TITLE}
            />
          </Link>

          {!isMobile && <NavMenu />}

          <div className='flex items-center gap-6'>
            <Link
              className='bg-yellow-5 text-black relative z-[2] overflow-hidden rounded-full h-[42px] px-8 font-mediumm text-16 text-center leading-[42px] transition-all duration-500 group hidden sm:block'
              href='/register'
            >
              <span className='z-[2] relative transition-all duration-900 text-black group-hover:text-white'>
                {commonData.txt_sign_up_now}
              </span>
              <b className='bg-black absolute z-[1] w-0 h-0 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-900 group-hover:w-[400px] group-hover:h-[400px] group-hover:inline-block'></b>
            </Link>
            <p
              className='lg:hidden w-[45px] h-[45px] rounded-full text-center bg-white text-black text-20 flex flex-col items-center justify-center cursor-pointer shadow-23 sm:shadow-none'
              onClick={() => setSidebarOpen(true)}
            >
              <i className='fal fa-bars'></i>
            </p>
          </div>
        </div>
      </header>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  )
}
