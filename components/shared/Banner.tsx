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
    <section className='relative max-w-full backdrop-blur-sm shadow-lg'>
      <Image
        className='object-contain blur-sm opacity-70'
        src='/coffee-banner.jpg'
        alt='Banner'
        width='6016'
        height='4016'
      />

      <div className='absolute -top-10 left-0 right-0 lg:h-screen'>
        <div className='max-w-2xl px-4 mx-auto py-16 lg:h-screen flex flex-col justify-center items-center gap-12 text-center'>
          <div className='flex flex-col gap-2 '>
            <h2 className='text-xl md:text-3xl lg:text-5xl font-bold text-white leading-[20px]'>
              {title}
            </h2>
            <p className='text-[12px] md:text-xs lg:text-lg font-thin'>
              {subtitle}
            </p>
          </div>
          {path?.path !== '/' && (
            <Button size='sr' variant='route' className=''>
              <span onClick={() => (window.location.href = '/')}>Home</span>
              <ChevronRight size={8} />
              <span onClick={() => (window.location.href = `/${path?.path}`)}>
                {path?.name}
              </span>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
