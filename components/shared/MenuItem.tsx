'use client';
import { menuItems } from '@/lib/menu_items';
import { cn } from '@/lib/utils';
import NavLink from 'next/link';
import { useState } from 'react';

type MenuItemProps = {
  isMobile: boolean;
};

const MenuItem = ({ isMobile }: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ul
      className={cn(
        isMobile ? 'mt-6 flex flex-col' : 'hidden lg:flex lg:flex-1',
        'gap-2'
      )}
    >
      {menuItems.map((item) => (
        <li key={item.name}>
          <NavLink
            onClick={() => setIsOpen(!isOpen)}
            href={item.path}
            className='text-xs font-bold pb-1 tracking-wider capitalize  hover:scale-105 transition ease-in-out hover:border-b-4 hover:border-[#D1B019]'
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuItem;
