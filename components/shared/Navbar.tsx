'use client';

import { usePathname } from 'next/navigation';
import NavLink from 'next/link';
import Image from 'next/image';
import { Menu, ShoppingCart } from 'lucide-react';
import { menuItems } from '@/lib/menu_items';
import eq from '@/public/eq.png'; // Ensure this path is correct
import { Button } from '@/components/ui/button';

import BookTableDialog from './BookTableDialog';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b rounded-md bg-white/90 backdrop-blur p-4 shadow-md mx-auto max-width-2xl text-gray-800'>
      <nav className='mx-auto max-w-6xl h-12 flex justify-between items-center px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-2'>
          <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
            <SheetTrigger asChild>
              <Button variant='ghost' className=''>
                <Menu className='h-6 w-6' />
              </Button>
            </SheetTrigger>
            <SheetContent
              side='left'
              className='w-[300px] sm:w-[400px] bg-yellow-300 text-gray-700'
            >
              <SheetHeader>
                <SheetTitle>
                  <NavLink href='/'>
                    <Image src={eq} alt='EQ' width={50} height={50} />
                  </NavLink>
                </SheetTitle>
              </SheetHeader>
              <ul className='mt-6 flex flex-col gap-4'>
                {menuItems.map((item) => (
                  <li key={item.name} className='inline-block mx-2'>
                    <NavLink
                      onClick={() => setIsOpen(false)}
                      href={item.path}
                      className={`font-bold pb-2 tracking-wide hover:scale-150 hover:border-b-4  hover:border-yellow-400 active:border-yellow-400 ${
                        pathname === item.path
                          ? 'border-b-4 border-yellow-500'
                          : ''
                      }`}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
          <NavLink href='/'>
            <Image src={eq} alt='EQ' width={50} height={50} />
          </NavLink>
        </div>

        <ul className='hidden lg:flex lg:flex-1 gap-4'>
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

        <div className='relative flex items-center gap-2'>
          <BookTableDialog />

          <Button size='xs'>
            <ShoppingCart className=' text-gray-500' size={32} />
            <span className='absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center bg-indigo-200 border rounded-full text-xs font-bold text-gray-800'>
              2
            </span>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
