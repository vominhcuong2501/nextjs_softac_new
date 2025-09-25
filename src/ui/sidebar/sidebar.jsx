import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FOOTER_CONTENT } from '@/data'
import { SIDEBAR_CONTENT } from '@/data/sidebar'
import { SITE_LOGO, SITE_TITLE } from '@/constants'

export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <div
        className={`bg-center bg-cover bg-no-repeat fixed top-0 max-w-[80%] sm:max-w-[480px] w-full bottom-0 bg-black !z-20 px-6 py-10 sm:p-[50px] overflow-y-scroll no-scrollbar transition-all duration-500 ease-cubic-bezier-2 ${
          sidebarOpen ? 'right-0 visible opacity-100' : '-right-full invisible opacity-0'
        }`}
      >
        <button
          className='absolute right-0 top-0 transition-all duration-300 ease-cubic-bezier-2 w-[50px] h-[50px] bg-white text-black'
          onClick={() => setSidebarOpen(false)}
        >
          <i className='text-32 fal fa-times'></i>
        </button>
        <Link href='/' target='_self' title={SITE_TITLE} onClick={() => setSidebarOpen(false)}>
          <Image
            src={SITE_LOGO.LIGHT.SOURCE}
            width={SITE_LOGO.LIGHT.WIDTH}
            height={SITE_LOGO.LIGHT.HEIGHT}
            alt={SITE_TITLE}
            title={SITE_TITLE}
            loading='lazy'
            className='max-w-[157px] w-full mx-auto'
          />
        </Link>
        <div className='mobile-menu mean-container'>{/* <MobileMenus /> */}</div>
        <div className='mt-10 text-center'>
          <h4 className='text-24 text-white font-bold capitalize'>{SIDEBAR_CONTENT.text_instagram}</h4>
          <div className='mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[180px] sm:max-w-full w-full mx-auto'>
            {SIDEBAR_CONTENT?.list_images?.map((img) => {
              return (
                <Link href='#' target='_blank' title={img.source} key={img.source}>
                  <Image
                    src={img.source}
                    alt={img.source}
                    title={img.source}
                    width={img.width}
                    height={img.height}
                    loading='lazy'
                  />
                </Link>
              )
            })}
          </div>
        </div>
        <div className='mt-10 text-center'>
          <h4 className='text-24 text-white font-bold capitalize'>{SIDEBAR_CONTENT.text_we_are_here}</h4>
          <Link href='https://www.google.com/maps/@23.506657,90.3443647,7z' target='_blank' className='mt-3 block'>
            <p className='text-white-6' dangerouslySetInnerHTML={{ __html: SIDEBAR_CONTENT.text_address }}></p>
          </Link>
        </div>
        <div className='flex items-center justify-center gap-1 sm:gap-3 mt-10'>
          {FOOTER_CONTENT.social_links?.map((social) => {
            return (
              <Link
                href={social.link}
                target='_blank'
                title={social.name}
                key={social.name}
                className='w-[50px] h-[50px] text-center text-18 bg-white rounded-lg transition-all duration-300 hover:bg-blue group flex flex-col items-center justify-center'
              >
                <i className={`text-blue group-hover:text-white transition-all duration-200 ${social.icon}`}></i>
              </Link>
            )
          })}
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-gray-17 !z-10 transition-all duration-500 ease-in-out ${
          sidebarOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>
    </>
  )
}
