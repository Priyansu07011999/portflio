import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d_pin'
import { FaLocationArrow } from 'react-icons/fa'

export default function RecentProject() {
  return (
    <div className='py-20'>
      <h1 className='heading'>
        A small selection of {' '}
        <span className='text-pink-400'>
            Recent Projects
        </span>
      </h1>

      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-4 gap-16 mt-10'>
        {projects.map(({
            id, title, des, img, iconLists, link
        }) => (
            <div key={id} className='sm:h-[41rem] h-[32rem] md:min-h-[48rem] sm:w-[570px] flex items-center justify-center w-[80vw]'>
                <PinContainer
                    title = {link}
                    href = {link}>
                    <div className='relative flex items-center justify-center h-[40vh] sm:w-[570px] w-[80vw] overflow-hidden border-white'>
                        <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                            <img src='/bg.png'/>
                        </div>
                        <img 
                            src={img}
                            alt={title}
                            className='z-10 absolute bottom-0'
                        />
                    </div>
                    <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                        {title}
                    </h1>
                    <p className='lg:text-xl lg:font-normal font-light texxt-sm line-clamp-2'>
                        {des}
                    </p>

                    <div className='flex items-center justify-between mt-7 mb-3'>
                        <div className='flex items-center'>
                            {iconLists.map((icon, index) => (
                                <div className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 -8 h-8 flex justify-center items-center' style={{transform:`translateX(-${5 * index * 2}px)`}}>
                                    <img
                                        src={icon}
                                        alt={icon}
                                        className='p-2'
                                    />
                                </div>
                            ))}
                        </div>

                        <div className='flex items-center justify-center'>
                            <p className='flex lg:text-xl md:text-xs text-sm text-pink-400'>Check live site</p>
                            <FaLocationArrow className='ms-3' color='#CBACF9'/>
                        </div>
                    </div>
                </PinContainer>
            </div>
        ))}
      </div>
    </div>
  )
}
