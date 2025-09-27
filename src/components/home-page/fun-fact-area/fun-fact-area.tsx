import { DATA_FUN_FACT_AREA } from '@/data'
import { CountDown, Motion } from '@/ui'
import React from 'react'

export const FunFactArea = () => {
  const { title, list_content_count } = DATA_FUN_FACT_AREA

  return (
    <Motion effect='fadeInUp' className='container pt-[100px] pb-[60px]'>
      <h2 className='text-20 font-medium text-black text-center'>{title}</h2>
      <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 mt-7 md:mt-0'>
        {list_content_count?.map((item) => (
          <div key={item.id} className='flex items-center md:justify-center py-8 md:py-[60px] gap-5'>
            <h3 className='text-[35px] md:text-[50px] font-bold text-black relative after:content-[""] after:md:w-[100px] after:md:h-[100px] after:w-20 after:h-20 after:bg-gradient-purple after:absolute after:-left-2 after:md:left-[-22px] after:top-1/2 after:-translate-y-1/2 after:rounded-full'>
              <CountDown countTo={item.count} duration={2000} initialValue={0} />
              <span>{item.simble}</span>
            </h3>
            <p
              className='text-16 font-medium text-black leading-1-5'
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        ))}
      </div>
    </Motion>
  )
}
