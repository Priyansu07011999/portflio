import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import {testimonials } from '@/data'

function InnerWords() {
  return (
    <div className='py-20'>
        <h1 className='heading'>
            Kind words from {' '}
            <span className='text-pink-400'>
                my heart
            </span>
        </h1>

       <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
            items = {testimonials}
            direction='right'
            speed='normal'
        />
        </div>
    </div>

  )
}

export default InnerWords