'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PhoneFour } from '@/svg/phone-4'
import EmailFour from '@/svg/email-4'
import EmailIcon from '@/svg/email'
import RightArrow from '@/svg/right-arrow'
import commonData from './../../locale/en/common.json'
import { SITE_LOGO, SITE_TITLE } from '@/constants'
import { Motion } from '../motion'
import { FOOTER_CONTENT } from '@/data'

const Footer = () => {
    const { info, phone, email, footer_lisks, social_links, text_copyright, text_theme_pure } = FOOTER_CONTENT

    return (
        <>
            <div className='border-b border-gray-41 py-5 lg:py-10 leading-1-5'>
                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-5'>
                        <Motion effect='fadeInUp' className='md:max-w-[275px] w-full duration-900' transition={{ delay: 0 }}>
                            <Link href='/' target='_self' title={SITE_TITLE} className='block'>
                                <Image
                                    src={SITE_LOGO.DARK.SOURCE}
                                    width={SITE_LOGO.DARK.WIDTH}
                                    height={SITE_LOGO.DARK.HEIGHT}
                                    alt={SITE_TITLE}
                                    title={SITE_TITLE}
                                    loading='lazy'
                                />
                            </Link>
                            <p className='text-16 text-gray-10 mt-4 lg:mt-6 font-urban'>{info}</p>
                            <p className='flex items-center gap-4 mt-4 group'>
                                <PhoneFour />
                                <Link
                                    className='text-18 lg:!text-20 font-medium font-dm text-gray-42 group-hover:text-purple-2 transition-all duration-300'
                                    href={`tel:${phone?.replaceAll(' ', '')}`}
                                    target='_self'
                                    title={phone}
                                >
                                    {phone}
                                </Link>
                            </p>
                            <p className='flex items-center gap-4 mt-2 group'>
                                <EmailFour />
                                <Link
                                    className='text-18 lg:!text-20 font-medium font-dm text-gray-42 group-hover:text-purple-2 transition-all duration-300'
                                    href={`mailto:${email}`}
                                    target='_self'
                                    title={email}
                                >
                                    {email}
                                </Link>
                            </p>
                        </Motion>

                        {footer_lisks.map((item, i) => (
                            <Motion effect='fadeInUp' key={i} transition={{ delay: 0.5 + i * 0.3 }} className='duration-900'>
                                <h4 className='text-22 font-urban text-black-5 font-semibold'>{item.title}</h4>
                                <ul className='mt-4 lg:mt-7 text-16 text-gray-10 font-medium flex flex-col gap-1.5 lg:gap-2.5'>
                                    {item.links.map((link, i) => (
                                        <li key={i} className='hover:pl-1 transition-all duration-300 hover:text-black'>
                                            <Link href={link.link}>{link.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </Motion>
                        ))}

                        <Motion
                            effect='fadeInUp'
                            className='md:max-w-[334px] w-full duration-900'
                            transition={{ delay: 0.5 + footer_lisks.length * 0.3 }}
                        >
                            <h4 className='text-22 font-urban text-black-5 font-semibold'>Our Newsletter</h4>
                            <form onSubmit={(e) => e.preventDefault()} className='relative mt-4 lg:mt-7'>
                                <input
                                    type='text'
                                    placeholder='Business email adress'
                                    className='h-[50px] lg:h-[60px] pl-[55px] pr-20 bg-gray-8 rounded-[40px] text-14 focus:outline-none w-full'
                                />
                                <EmailIcon className='absolute left-6 top-1/2 transform -translate-y-1/2' />
                                <button className='bg-purple-5 rounded-full absolute top-1/2 -translate-y-1/2 right-1.5 lg:w-[50px] lg:h-[50px] w-10 h-10 flex flex-col items-center justify-center text-white rotate-[-45deg] hover:bg-purple-2 hover:shadow-20 transition-all duration-300 '>
                                    <RightArrow />
                                </button>
                            </form>
                            <div className='mt-4 lg:mt-8'>
                                <h4 className='text-18 text-black-5 font-semibold'>Social media</h4>
                                <div className='flex gap-5 mt-4'>
                                    {social_links?.map((social) => {
                                        return (
                                            <Link href={social.link} target='_blank' title={social.name} key={social.name}>
                                                <i
                                                    className={`text-gray-49 hover:text-purple-2 transition-all duration-200 ${social.icon}`}
                                                ></i>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </Motion>
                    </div>
                </div>
            </div>
            <div className='py-5 flex items-center justify-center gap-1 text-15 font-medium text-gray-1 font-urban'>
                <p>
                    {text_copyright}{' '}
                    <a href='#' title='Theme pure' target='_blank' className='text-black'>
                        {text_theme_pure}
                    </a>{' '}
                    - {new Date().getFullYear()}
                </p>
            </div>
        </>
    )
}

export default Footer
