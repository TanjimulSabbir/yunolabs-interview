import React from 'react'
import ImageCarousel from './ImageCarousel'

export default function Concern() {
    return (
        <main className='container max-w-screen-2xl horizantalPadding mx-auto bottomPadding'>
            <div className='space-y-5 mb-10'>
                <h1 className='text-3xl md:text-5xl text-black'>Concern</h1>
                <p className='text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, soluta quod sequi architecto nostrum sunt quia. Suscipit commodi recusandae ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, soluta quod sequi architecto nostrum sunt quia. Suscipit commodi recusandae ipsaLorem ipsum? dolor sit amet consectetur adipisicing elit. Laboriosam, soluta quod sequi architecto nostrum sunt quia. Suscipit commodi recusandae ipsaLorem ipsum? dolor sit amet consectetur adipisicing elit. Laboriosam, soluta quod sequi architecto nostrum sunt quia. Suscipit commodi recusandae ipsa?</p>
            </div>
            <ImageCarousel />
        </main>
    )
}
