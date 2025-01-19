'use client';

import NavLink from 'next/link';
import Image from 'next/image';
import BookATable from '@/components/BookATable';
import Cart from '@/components/Cart';
import { usePathname } from 'next/navigation';
import { Link } from 'lucide-react';
import { menuItems } from '@/lib/menu_items';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className='sticky top-0 z-50 border rounded-md bg-white p-4  flex justify-between items-center shadow-md mx-auto max-width-2xl text-gray-800'>
      <Link href='/'>
        <Image src='/eq.png' alt='EQ' width={100} height={100} />
      </Link>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className='inline-block mx-2'>
              <NavLink
                href={item.path}
                className={`font-bold pb-2 tracking-wide hover:scale-150 hover:border-b-4  hover:border-yellow-400 active:border-yellow-400 ${
                  pathname === item.path ? 'border-b-4 border-yellow-500' : ''
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
