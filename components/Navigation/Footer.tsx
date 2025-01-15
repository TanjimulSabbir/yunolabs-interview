
import { NavLinks } from '@/data/nav-links';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-lightBlack text-white topPadding">
      <div className="container max-w-screen-2xl mx-auto horizantalPadding grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Navigation */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">Cosmedix</h1>
          <p className="text-sm text-gray-400 mb-6">skin specialists</p>
          <nav className="text-sm flex flex-wrap items-center gap-2">{
            NavLinks.map((navlink) => (
              <p className='flex space-x-1' key={navlink.label}>
                <Link href={navlink.href} className="hover:underline">{navlink.label}</Link>
                </p>
            ))}
          </nav>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-medium mb-4">Contact Us</h2>
          <p className="text-sm mb-2">Phone: <Link href="tel:+0280063344" className="hover:underline">+02 8006 3344</Link></p>
          <p className="text-sm mb-2">Email: <Link href="mailto:robert@cosmedixclinics.com.au" className="hover:underline">robert@cosmedixclinics.com.au</Link></p>
          <p className="text-sm">Address: 169 William Street - Darlinghurst, Sydney, NSW</p>
        </div>

        {/* Opening Hours and Social Media */}
        <div>
          <h2 className="text-lg font-medium mb-4">Opening Hours</h2>
          <p className="text-sm mb-6">9am—6pm</p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>&copy; 2025 — COPYRIGHT</p>
      </div>
    </footer>
  );
};

export default Footer;