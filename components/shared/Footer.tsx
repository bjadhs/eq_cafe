'use client';
import { Button } from '../ui/button';
import MenuItem from './MenuItem';

const Footer = () => {
  const handelScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='container w-full flex flex-col justify-center items-center gap-4 py-4'>
      <MenuItem isMobile={false} />
      <div className='w-full border-2 border-spacing-4 border-gray-700 border-dashed'></div>
      <div className='flex justify-between items-center w-full py-8'>
        <p className='text-sm font-thin text-white'>
          © 2025 EQ Cafe and Bakehouse. All rights reserved.
        </p>
        <Button onClick={handelScroll} size='sr' variant='route' className=''>
          BACK TO TOP
        </Button>
      </div>
    </div>
  );
};

export default Footer;
