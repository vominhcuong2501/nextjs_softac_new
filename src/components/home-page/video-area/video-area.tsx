'use client'

import React, { useContext, useRef, useState } from 'react'
import { AppContext } from '@/context'
import { Modal } from '@/ui'
import { DATA_VIDEO_AREA } from '@/data'

export const VideoArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const videoEl = useRef(null)

  const { handleMouseEnter, handleMouseLeave } = useContext(AppContext)

  return (
    <>
      <div className='realtive pt-10 lg:pt-[120px]'>
        <div className='container'>
          <h2
            className='text-38 xl:text-60 font-medium leading-1-1 text-center text-black mb-10 tracking-[-0.02em]'
            dangerouslySetInnerHTML={{ __html: DATA_VIDEO_AREA?.title || '' }}
          ></h2>
          <p
            className='scale-100 visible opacity-100 transition-all duration-300'
            onClick={() => setIsVideoOpen(true)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={videoEl}
          >
            <video
              className='max-w-[1290px] h-[300px] lg:h-[600px] w-full object-cover rounded-[30px] cursor-none mx-auto'
              id='myVideo'
              autoPlay
              loop
              playsInline
              muted
              src='http://weblearnbd.net/tphtml/videos/softec/softec-video.mp4'
            ></video>
          </p>
        </div>
      </div>
      <Modal
        isOpen={isVideoOpen}
        handleClose={() => setIsVideoOpen(false)}
        isIconClose
        className='max-w-[820px] w-full px-4'
      >
        <iframe
          id='yEJ9lRdOD_o'
          width='820'
          height='462'
          src='https://www.youtube.com/embed/yEJ9lRdOD_o?si=WFbO2MRRKRdypZTP&rel=0&autoplay=1&mute=1&loop=1&playlist=yEJ9lRdOD_o'
          title='YouTube video player'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allow-fullscreen='true'
          referrerPolicy='strict-origin-when-cross-origin'
          className='h-auto min-h-[193px] md:!min-h-[236px] w-[343px] md:!w-[820px] md:!h-[462px] flex-shrink-0 '
          loading='lazy'
        ></iframe>
      </Modal>
    </>
  )
}
