'use client';

import { FormEvent, useState } from 'react';
import NavLink from 'next/link';
import Image from 'next/image';
import Cart from '@/components/Cart';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/lib/menu_items';
import eq from '@/public/eq.png'; // Ensure this path is correct
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type ReservationData = {
  name: string;
  email: string;
  phone: string;
  outlet: string;
};

const Header = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [outlet, setOutlet] = useState('');

  const [data, setData] = useState<ReservationData | null>(null);
  const pathname = usePathname();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(name, email, phone, outlet);
    setData({ name, email, phone, outlet });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <header className='sticky top-0 z-50 border rounded-md bg-white p-4  flex justify-between items-center shadow-md mx-auto max-width-2xl text-gray-800'>
      <NavLink href='/'>
        <Image src={eq} alt='EQ' width={50} height={50} />
      </NavLink>
      <nav>
        <ul>
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
      </nav>

      <form
        onSubmit={handleSubmit}
        className='flex justify-center items-center gap-4 text-gray-800'
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant='secondary'>Book a Table</Button>
          </DialogTrigger>
          <DialogContent className='md:max-w-[600px] bg-white rounded-full shadow-lg text-black'>
            <DialogHeader className='flex flex-col items-center gap-4'>
              <div className='bg-yellow-500 w-8 h-1 rounded-full'></div>
              <DialogTitle className='text-3xl font-semibold'>
                Table Reservation
              </DialogTitle>
            </DialogHeader>

            <div className='grid grid-cols-3 gap-4 py-4'>
              <div className='col-span-3'>
                <Select>
                  <SelectTrigger
                    onVolumeChange={(e: FormEvent) =>
                      setOutlet((e.target as HTMLSelectElement).value)
                    }
                  >
                    <SelectValue placeholder='Select Outlet' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='deaken'>Deaken</SelectItem>
                    <SelectItem value='dfo'>DFO</SelectItem>
                    <SelectItem value='gungahlin'>Gungahlin</SelectItem>
                    <SelectItem value='brindabella'>Brindabella</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
                type='text'
                id='name'
                value={name}
              />

              <Input
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                type='email'
                id='email'
                value={email}
              />

              <Input
                onChange={(e) => setPhone(e.target.value)}
                placeholder='Number'
                type='number'
                id='phone'
                value={phone}
              />
            </div>

            <DialogFooter className='flex justify-center items-center'>
              {data && (
                <p>
                  Your reservation for {data.name} has been confirmed. We will
                  contact you on {data.email} or {data.phone} for further
                  details.
                </p>
              )}
              <Button variant='secondary' type='submit'>
                Reserve a Table
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>

      <Cart />
    </header>
  );
};

export default Header;
