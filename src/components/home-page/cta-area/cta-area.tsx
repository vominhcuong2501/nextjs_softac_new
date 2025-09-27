import React from 'react'
import Image from 'next/image'
import { DATA_CTA_AREA } from '@/data'
import { Motion, MotionEffects } from '@/ui'

export const CtaArea = () => {
  const { img_box, sub_title, title, des, feature_list, image } = DATA_CTA_AREA

  return (
    <div className='py-10 lg:py-[120px] container flex flex-col lg:flex-row items-center justify-between gap-5'>
      <Motion effect='tpfadeLeft' className='duration-900'>
        <div className='relative'>
          {img_box.map((item) => (
            <Motion
              effect={item?.effect as MotionEffects}
              key={item?.img}
              className={item.cls}
              style={{
                duration: '4000ms',
                animationIterationCount: 'infinite',
                animationDirection: 'alternate',
                animationFillMode: 'forwards'
              }}
            >
              <Image src={item?.img} width={item?.width} height={item?.height} title={sub_title} alt={sub_title} />
            </Motion>
          ))}
        </div>
      </Motion>
      <Motion effect='tpfadeRight' className='duration-900 lg:max-w-[498px]'>
        <Image
          src={image?.source}
          width={image?.width}
          height={image?.height}
          title={sub_title}
          alt={sub_title}
          loading='lazy'
          className='pb-7'
        />
        <span className='text-14 font-medium tracking-[0.12em] uppercase text-black'>{sub_title}</span>
        <h2
          className='text-[35px] lg:text-[50px] font-extralight leading-1-2 tracking-[-0.03em] text-black mt-4'
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        <p className='text-16 leading-1-5 text-gray-1 mt-4' dangerouslySetInnerHTML={{ __html: des }}></p>
        <ul className='flex flex-col gap-4 list-none mt-[30px]'>
          {feature_list.map((list, i) => (
            <li key={i} className='text-17 text-gray-10 pl-9 relative'>
              <i className='far fa-check w-[22px] h-[22px] rounded-full text-center text-10 leading-[22px] text-black absolute top-0 left-0 bg-purple-8 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2'></i>
              {list}
            </li>
          ))}
        </ul>
      </Motion>
    </div>
  )
}
