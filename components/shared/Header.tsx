'use client';

import NavLink from 'next/link';
import Image from 'next/image';
import BookATable from '@/components/BookATable';
import Cart from '@/components/Cart';
import { usePathname } from 'next/navigation';
import { Link } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Catering', path: '/catering' },
    { name: 'Functions', path: '/functions' },
    { name: 'Cakes', path: '/cakes' },
    { name: 'Locations', path: '/locations' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];
  return (
    <header className='border rounded-md bg-white p-4 my-2 flex justify-between items-center shadow-md mx-auto max-width-4xl text-gray-800'>
      <Link href='/'>
        <Image src='/eq.png' alt='EQ' width={100} height={100} />
      </Link>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className='inline-block mx-2'>
              <NavLink
                href={item.path}
                className={`hover:border-b-2 hover:border-yellow-200 active:border-yellow-400 ${
                  pathname === item.path ? 'border-b-2 border-yellow-400' : ''
                }`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex justify-center items-center'>
        <BookATable />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
