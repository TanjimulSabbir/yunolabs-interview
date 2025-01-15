import Image from 'next/image'
import { navlogo } from '@/public/images'
import { LucideMenu } from 'lucide-react'
import { Button } from '../ui/button'

const Navbar: React.FC = () => {

  return (
    <main className='bg-prime py-5'>
      <nav className='flex items-center justify-between p-4'>
        <Image src={navlogo} alt='logo' />
        <LucideMenu />
        <Button>Book now</Button>
      </nav>
    </main>
  )
}

export default Navbar
