'use client';
import { menuItems } from '@/lib/menu_items';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type MenuItemProps = {
  isMobile: boolean;
  setIsOpen?: (isOpen: boolean) => void;
};

const MenuItem = ({ isMobile, setIsOpen }: MenuItemProps) => {
  const handleRouteChange = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <ul
      className={cn(
        isMobile ? 'mt-6 flex flex-col' : 'hidden lg:flex lg:flex-1',
        'container gap-2'
      )}
    >
      {menuItems.map((item) => (
        <li key={item.name}>
          <Link
            onClick={handleRouteChange}
            href={item.path}
            scroll={false}
            className='text-xs font-bold pb-1 tracking-wider capitalize hover:scale-105 transition ease-in-out hover:border-b-4 hover:border-[#D1B019]'
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuItem;
