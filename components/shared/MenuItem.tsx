import { menuItems } from '@/lib/menu_items';
import { cn } from '@/lib/utils';
import NavLink from 'next/link';
// import { usePathname } from 'next/navigation';

type MenuItemProps = {
  isMobile: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const MenuItem = ({ isMobile, setIsOpen }: MenuItemProps) => {
  //   const pathname = usePathname();

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
            onClick={() => setIsOpen(false)}
            href={item.path}
            className='font-semibold pb-2 tracking-wide capitalize hover:scale-150 hover:border-b-4  hover:border-[#D1B019]'
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuItem;
