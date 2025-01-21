'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { menuItems } from '@/lib/menu_items';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';

const Banner = () => {
  const pathname = usePathname();
  const path = menuItems.find((item) => item.path === pathname);
  const title = path?.title ?? 'EQ Cafe and Bakehouse';
  const subtitle =
    path?.subtitle ?? 'Functions and catering perfectly crafted for you.';
  return (
    <section className='relative max-w-full h-100vh mx-auto'>
      <Image
        className='object-contain '
        src='/coffee-banner.jpg'
        alt='Banner'
        width='6016'
        height='4016'
      />

      <div className='absolute  top-0 left-0 right-0 w-full h-full px-8 mx-auto bg-gray-700/40 flex flex-col justify-center items-center text-center gap-2'>
        <h1 className='text-md  lg:text-7xl font-extrabold text-white'>
          {title}
        </h1>
        <p className='text-sm lg:text-lg font-thin'>{subtitle}</p>
        <Button size='lg' variant='route'>
          <span onClick={() => (window.location.href = '/')}>Home</span>
          <ChevronRight size={24} />
          <span onClick={() => (window.location.href = `/${path?.path}`)}>
            {path?.name}
          </span>
        </Button>
      </div>
    </section>
  );
};

export default Banner;
