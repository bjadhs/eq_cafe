'use client';
import { FormEvent, useState } from 'react';
// import { usePathname } from 'next/navigation';
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
import { Button } from '../ui/button';

type ReservationData = {
  name: string;
  email: string;
  phone: string;
  outlet: string;
};

const BookTableDialog = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [outlet, setOutlet] = useState('');

  const [data, setData] = useState<ReservationData | null>(null);
  //   const pathname = usePathname();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(name, email, phone, outlet);
    setData({ name, email, phone, outlet });
    setName('');
    setEmail('');
    setPhone('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='flex justify-center items-center gap-4 text-gray-800'
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button size='sm' variant='secondary'>
            Book a Table
          </Button>
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
                contact you on {data.email} or {data.phone} for further details.
              </p>
            )}
            <Button variant='secondary' type='submit'>
              Reserve a Table
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
};

export default BookTableDialog;
