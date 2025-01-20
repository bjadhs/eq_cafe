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
    <div className='relative z-0'>
      <Image
        className='fill'
        src='/coffee-banner.jpg'
        alt='Banner'
        width={1920}
        height={200}
        // layout='fill'
        placeholder='blur'
        blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRYZGBgaGBgaGBgYGBgYGBgSGBgZGRgcGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhISHjQhISE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xAA7EAACAQIEBAMFBwQCAwAAAAABAgADEQQhBQYSMUFRImFxgZEHEzKhsRQjQlLB0fDxYnKy4RUWJEP/...' // Low-resolution placeholder image (base64 encoded)
      />
      <div className='absolute top-64 left-0 right-0 max-w-3xl mx-auto flex flex-col justify-center items-center'>
        <h1 className='text-7xl font-extrabold text-white'>{title}</h1>
        <p className='text-lg font-thin'>{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
