'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/lib/menu_items';

const Banner = () => {
  const pathname = usePathname();
  const path = menuItems.find((item) => item.path === pathname);
  const title = path?.title ?? 'EQ Cafe and Bakehouse';
  const subtitle =
    path?.subtitle ?? 'Functions and catering perfectly crafted for you.';
  return (
    <section className='relative width-full h-100vh mx-auto'>
      <Image
        className='object-cover brightness-50'
        src='/coffee-banner.jpg'
        alt='Banner'
        width='1920'
        height='1080'
        priority
      />
      <div className='absolute left-0 right-0 max-w-3xl mx-auto flex flex-col justify-center items-center'>
        <h1 className='text-3xl lg:text-7xl font-extrabold text-white'>
          {title}
        </h1>
        <p className='text-sm lg:text-lg font-thin'>{subtitle}</p>
      </div>
    </section>
  );
};

export default Banner;
