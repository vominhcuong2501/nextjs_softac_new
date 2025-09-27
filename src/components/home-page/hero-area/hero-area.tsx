'use client'

import { gsap } from 'gsap'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { LineShapTwo } from '@/svg'
import { DATA_HERO_AREA } from '@/data'
import { Button, Motion } from '@/ui'

export const HeroArea = () => {
  const {
    txt_offer_the,
    txt_best,
    txt_business,
    txt_management,
    txt_with,
    txt_software,
    txt_description,
    btn_get_started,
    btn_try_a_demo,
    list_images_shape_one,
    list_images_shape_two
  } = DATA_HERO_AREA

  useEffect(() => {
    let tl = gsap.timeline({ default: { ease: 'SlowMo.easeOut' } })
    tl.to('.hero-text-anim-2 i.child-2', { y: '0px', duration: 0.9, opacity: 1, stagger: 0.3, delay: 0.3 })
  })

  return (
    <div className='lg:pt-[270px] lg:pb-[170px] md:pt-[210px] md:pb-[150px] pt-[160px] pb-[100px] relative bg-gray-6 overflow-hidden'>
      {list_images_shape_one?.map((img) => {
        return (
          <Motion key={img?.source} effect={img?.effect as any} className={img?.class}>
            <Image src={img?.source} width={img?.width} height={img?.height} title={img?.title} alt={img?.title} />
          </Motion>
        )
      })}
      <div className='max-w-[1200px] mx-auto px-4'>
        <div>
          <h1 className='font-light sm:font-extralight text-black overflow-hidden xl:text-[65px] lg:text-[55px] md:text-[47px] text-[35px] leading-[0.9] hero-text-anim-2 grid grid-cols-1 tracking-[-0.03em]'>
            <i className='overflow-hidden inline-block'>
              <i className='translate-y-[150px] opacity-0 inline-block pb-5 child-2 not-italic'>
                {txt_offer_the} <br />
              </i>
            </i>
            <i className='overflow-hidden inline-block'>
              <i className='translate-y-[150px] opacity-0 inline-block pb-5 child-2 not-italic overflow-hidden '>
                {txt_best}{' '}
                <span className='relative font-bold tracking-[-0.03em] text-blue-3'>
                  {txt_business}
                  <LineShapTwo className='absolute bottom-0 left-0' />
                </span>
                <br className='md:hidden' />
              </i>
            </i>
            <i className='overflow-hidden inline-block'>
              <i className='translate-y-[150px] opacity-0 inline-block pb-5 child-2 not-italic'>
                <span className='font-bold tracking-[-0.03em]'> {txt_management}</span> {txt_with} <br />
              </i>
            </i>
            <i className='overflow-hidden inline-block'>
              <i className='translate-y-[150px] opacity-0 inline-block pb-5 child-2 not-italic'>{txt_software}</i>
            </i>
          </h1>
          <Motion effect='fadeInUp' transition={{ delay: 0.5 }} className='duration-[0.9s]'>
            <p
              className='text-15 sm:text-16 font-normal text-gray-1 leading-1-5 mt-2'
              dangerouslySetInnerHTML={{ __html: txt_description || '' }}
            ></p>
          </Motion>
          <Motion
            effect='fadeInUp'
            transition={{ delay: 0.5 }}
            className='duration-[0.9s] flex items-center xs:flex-wrap pb-[30px] pt-[46px] mb-5 gap-4'
          >
            <Button className='tp-btn-blue-lg purple-bg circle-effect' href='/'>
              {btn_get_started}
            </Button>
            <Button className='tp-btn-grey' href='/service-details'>
              {btn_try_a_demo}
            </Button>
          </Motion>
        </div>
      </div>
      <div className='sm:absolute top-0 right-0 3xl:top-[-2%] 3xl:right-[-5%] 2xl:top-[-6%] 2xl:right-[-8%] xl:top-[-6%] xl:right-[-20%] lg:top-[-12%] lg:right-[-25%] '>
        {list_images_shape_two?.map((img) => {
          return (
            <Motion key={img?.source} effect={img?.effect as any} className={img?.class} style={img?.style}>
              <Image
                src={img?.source}
                width={img?.width}
                height={img?.height}
                title={img?.title}
                alt={img?.title}
                className={img?.classImage}
              />
            </Motion>
          )
        })}
      </div>
    </div>
  )
}
