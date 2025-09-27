import { DATA_SERVICE_AREA } from '@/data'
import { Motion } from '@/ui'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ServiceArea = () => {
  const { bg_img, sub_title, title, description, btn_text, list_service } = DATA_SERVICE_AREA

  return (
    <div className='overflow-hidden grid lg:grid-cols-2'>
      <Motion
        effect='zoomIn'
        className='relative flex flex-col items-center justify-center text-white py-10 px-5 lg:p-0'
      >
        <Image
          src={bg_img}
          width={975}
          height={800}
          alt={title}
          title={title}
          loading='lazy'
          className='absolute top-0 left-0 z-[-1] w-full object-cover object-center h-full'
        />
        <div className='lg:!max-w-[600px] w-full lg:pr-[60px] lg:!ml-auto text-center lg:text-left'>
          <span className='text-14 font-medium tracking-[0.12em] uppercase'>{sub_title}</span>
          <h3
            className='font-extralight text-[35px] lg:text-[50px] leading-1-2 tracking-[-0.03em] mt-4 lg:mt-8'
            dangerouslySetInnerHTML={{ __html: title }}
          ></h3>
          <p className='text-17 leading-[26px] mt-4 lg:mt-8' dangerouslySetInnerHTML={{ __html: description }}></p>
          <Link className='tp-btn-yellow-lg text-black mt-4 lg:mt-8' href='/service-details'>
            {btn_text}
          </Link>
        </div>
      </Motion>
      <Motion effect='zoomIn' className='grid sm:grid-cols-2'>
        {list_service?.map((item, i) => (
          <div key={i} className='group hover:scale-105 transition-all duration-300'>
            <div className='p-[30px] 2xl:py-10 2xl:px-[60px] relative overflow-hidden'>
              <div
                className={`absolute inset-0 origin-[50%_100%] scale-100 transition-all duration-500 ease-cubic-bezier-7 group-hover:scale-105 group-hover:shadow-46 ${i === 0 || i === 3 ? 'bg-gray-8' : 'bg-white'
                  }`}
              >
                <div
                  className={`absolute z-[2] left-1/2 bottom-0 w-[230%] h-[230%] rounded-full block scale-0 opacity-100 -translate-x-1/2 translate-y-1/2 transition-all duration-500  group-hover:scale-100  ${i === 0 || i === 3 ? 'group-hover:bg-white' : 'group-hover:bg-gray-8'
                    }`}
                ></div>
              </div>
              <div className='translate-y-[50px] group-hover:translate-y-0 transition-all duration-300 relative z-[3]'>
                <div className='tp-service-five-icon'>
                  <Image src={item?.img} alt={item?.title} width={item?.width} height={item?.height} loading='lazy' />
                </div>
                <div className='mt-[30px]'>
                  <Link
                    href='/service-details'
                    target='_self'
                    title={item?.title}
                    className='text-26 font-medium text-black block leading-1-3'
                    dangerouslySetInnerHTML={{ __html: item?.title }}
                  ></Link>
                  <p
                    className='text-gray-10 text-15 leafin-1-5 transition-all duration-300 invisible opacity-0 group-hover:opacity-100 group-hover:visible mt-2'
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></p>
                </div>
              </div>
              <div className='text-right relative z-[4]'>
                <Link
                  href='/service-details'
                  target='_self'
                  title={item?.title}
                  className='w-[55px] h-[55px] shadow-52 rounded-full bg-white inline-block text-center leading-[55px] text-black font-bold transition-all duration-300 group-hover:scale-125 group-hover:bg-blue group-hover:text-white'
                >
                  <i className='far fa-arrow-right'></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Motion>
    </div>
  )
}

