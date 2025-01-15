"use client"
import { navlogo } from '@/public/images';
import { LucideMenu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header className="relative bg-prime horizantalPadding">
      <nav className="container max-w-screen-2xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={navlogo} alt="logo" width={160} height={160} />
        </div>

        {/* Hamburger Menu */}
        {!openMenu ? (
          <LucideMenu
            className="w-7 h-7 cursor-pointer transition-transform hover:scale-110"
            onClick={() => setOpenMenu(true)}
          />
        ) : (
          <X
            className="w-7 h-7 cursor-pointer transition-transform hover:rotate-90"
            onClick={() => setOpenMenu(false)}
          />
        )}

        {/* Book Now Button */}
        <button className="hidden md:block bg-lightBlack text-white border border-black rounded-full py-2 px-5 hover:bg-black transition-all">
          Book now
        </button>
      </nav>

      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-40 bg-white transition-transform duration-500 ${openMenu ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {openMenu && <MobileNavbar setOpenMenu={() => setOpenMenu(false)} />}
      </div>
    </header>
  );
};

export default Navbar;
