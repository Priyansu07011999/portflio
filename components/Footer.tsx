import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

function Footer() {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading md:max-w-[45vw]'>
                Ready to take <span className='text-pink-400'>Your</span> Programming Journey to next level
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
                Reach out to me today and start doing projects with me
            </p>
            <a href="mailto:1999priyansudash@gmail.com">
                <MagicButton
                    title="Let's get in touch with me"
                    icon={<FaLocationArrow/>}
                    position='right'
                />
            </a>
        </div>
        <div className='flex t-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light my-4'>Copyright © 2024 Priyansu Dash</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer bg-black-100 bg-opacity-75 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180'>
                        <img src={profile.img}  width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer