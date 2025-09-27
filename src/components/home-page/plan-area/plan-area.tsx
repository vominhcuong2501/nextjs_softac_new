'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { DATA_PLAN_AREA } from '@/data';
import { Motion, MotionEffects } from '@/ui';

const { img_box, sub_title, title, image, accordion_data } = DATA_PLAN_AREA
export const PlanArea = () => {

  const [id, setId] = useState<number | undefined>(accordion_data?.[0]?.id)

  const openMobileMenu = (value?: number) => {
    if (id === value) {
      setId(0)
    } else {
      setId(value)
    }
  }


  return (
    <div className="pb-10 lg:pb-[120px]">
      <div className="container flex flex-col-reverse lg:flex-row items-center justify-between gap-5">
        <Motion effect='tpfadeLeft' className="duration-900 lg:max-w-[498px]">
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
          <div className="flex flex-col gap-4 mt-8">
            {accordion_data.map((item) =>
              <div key={item.id} className='bg-gray-8 rounded-2xl p-[30px]'>
                <div className='flex items-center justify-between gap-3' onClick={() => openMobileMenu(item?.id)}>
                  <h3 className='text-22 font-medium text-black'>{item?.question}</h3>
                  <i className={`fa fa-angle-up relative w-[30px] h-[30px] rounded-full bg-black text-center text-white before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 transition-all duration-300 ${id === item?.id ? ' bg-blue' : 'rotate-90'}`}></i>
                </div>
                <div className={`grid overflow-hidden transition-all ${id === item?.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className='min-h-0 overflow-hidden'>
                    <p className='text-17 text-gray-10 mt-7 leading-[28px]'>{item?.answer}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Motion>
        <Motion effect='tpfadeRight' className="duration-900 lg:max-w-[578px]">
          <div className="relative">
            {img_box.map((item) =>
              <Motion
                effect={item?.effect as MotionEffects}
                key={item?.img}
                className={item.cls}
                style={{
                  animationIterationCount: 'infinite',
                  animationDirection: 'alternate',
                  animationFillMode: 'forwards'
                }}
              >
                <Image src={item?.img} width={item?.width} height={item?.height} title={sub_title} alt={sub_title} />
              </Motion>
            )}
          </div>
        </Motion>
      </div>
    </div>
  );
};
