import React from 'react'
import TestimonialCarousel from './TestimonailCarousel'

export default function Testimonial() {
  return (
    <main className='bg-lightBrown container max-w-screen-2xl horizantalPadding mx-auto topBottomPadding'>
       <h1 className='pb-16 text-3xl md:text-5xl text-center text-gray-500'>Don’t just take our word for it</h1>
        <TestimonialCarousel/>
    </main>
  )
}
