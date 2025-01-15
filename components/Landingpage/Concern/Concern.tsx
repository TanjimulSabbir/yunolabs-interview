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
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 gap-5 flex items-end rounded-lg">
                                <div className="text-white bg-gradient-to-t from-black to-transparent w-full rounded-b-lg">
                                    <h2 className="text-lg font-semibold">{title}</h2>
                                </div>
                            </div> */}
        </main>
    )
}
