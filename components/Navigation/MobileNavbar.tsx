import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { NavLinks } from '@/data/nav-links';

export default function MobileNavbar({ setOpenMenu }: { setOpenMenu: (value: boolean) => void }) {
  return (
    <main className="absolute inset-0 bg-white flex flex-col items-center justify-center transition-all duration-500">
      {/* Close Button */}
      <button
        className="absolute top-6 right-6 bg-white text-black w-10 h-10 rounded-full shadow-lg hover:bg-lightBlack hover:text-white hover:scale-110 transition-transform flex items-center justify-center"
        onClick={() => setOpenMenu(false)}
      >
        <X className="w-6 h-6 text-center" />
      </button>

      {/* Navigation Links */}
      <nav>
        <ul className="flex flex-col items-center gap-6">
          {NavLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <span className="text-gray-800 text-2xl font-semibold tracking-wide hover:text-sky-500 transition-colors">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
