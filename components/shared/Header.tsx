'use client';

import NavLink from 'next/link';
import Image from 'next/image';
import { Menu, ShoppingCart } from 'lucide-react';
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
import MenuItem from './MenuItem';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(2);
  const handleIncrement = () => setCount(count + 1);

  return (
    <header className='box sticky top-0 z-50 border-b rounded-b-lg bg-white/90 backdrop-blur py-2 mx-auto max-width-2xl text-gray-800'>
      <nav className='max-w-7xl mx-auto h-10 p-2 sm:px-4 lg:px-6 flex justify-between items-center  gap-8'>
        <NavLink href='/'>
          <Image src={'/eq.png'} alt='EQ' width={60} height={60} />
        </NavLink>

        <MenuItem isMobile={false} setIsOpen={setIsOpen} />

        <div className='flex items-center gap-8'>
          <BookTableDialog />
          <div className='flex items-center gap-2'>
            <Button
              className='relative'
              size='xs'
              variant='ghost'
              onClick={handleIncrement}
            >
              <ShoppingCart size={16} />
              <span className='absolute -top-3 -right-2 h-4 w-4 flex items-center justify-center bg-[#D1B019] border border-gray-400 rounded-full text-[10px] font-semibold text-gray-800'>
                {count}
              </span>
            </Button>
            <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
              <SheetTrigger asChild>
                <Button size='xs' variant='ghost' className='flex lg:hidden'>
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                side='left'
                className='w-[300px] sm:w-[400px] bg-white/80 text-gray-700'
              >
                <SheetHeader>
                  <SheetTitle>
                    <NavLink href='/'>
                      <Image src={'/eq.png'} alt='EQ' width={50} height={50} />
                    </NavLink>
                  </SheetTitle>
                </SheetHeader>
                <MenuItem isMobile={true} setIsOpen={setIsOpen} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
