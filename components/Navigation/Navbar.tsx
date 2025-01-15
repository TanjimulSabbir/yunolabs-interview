import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoArrowForwardSharp } from 'react-icons/io5'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Navbar: React.FC = () => {
  const downArrow = ['Home', 'Pages']
  return (
    <main className='bg-gray-50'>
      <nav className='w-full max-w-screen-2xl py-5 mx-auto flex justify-between items-center horizantalPadding'>
        {/* Logo Section */}
        <Image
          src='https://cityscape.wowtheme7.com/assets/logo-DHG6Mbuc.png'
          alt='CityScope Logo'
          width={200}
          height={200}
        />

        <div className='flex w-1/2 justify-between items-center'>
          {/* Navigation Links */}
          <ul className='flex space-x-6 text-black font-semibold'>
            {['Home', 'Pages', 'Project', 'Blog', 'Contact'].map(
              (item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase()}`}
                  className={`flex items-center ${
                    item === 'Home' ? 'space-x-1' : ''
                  } hover:text-orange-500 transition`}
                >
                  <span>{item}</span>
                  {downArrow.includes(item) && <MdOutlineKeyboardArrowDown />}
                </Link>
              )
            )}
          </ul>

          {/* Add Listing Button */}
          <button className='flex items-center space-x-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-5 font-semibold rounded-md shadow-md hover:shadow-lg transition'>
            <span>ADD LISTING</span>
            <IoArrowForwardSharp />
          </button>
        </div>
      </nav>
    </main>
  )
}

export default Navbar
