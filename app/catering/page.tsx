import CateringBookingForm from '@/components/CateringBookingForm';
import Topic from '@/components/shared/Topic';
import { Info } from 'lucide-react';

const Catering = () => {
  return (
    <div className='flex flex-col items-center gap-4 h-screen'>
      <div className='bg-secondary border-l-4 border-black p-2 flex justify-between items-center  w-full mx-auto'>
        <h3>We accept catering orders with a 24-hour advance notice</h3>
        <Info size={24} />
      </div>
      <h2 className='-tracking-[.1rem] text-xl text-center'>
        Choose your preferred location to book catering from the options below.
      </h2>
      <CateringBookingForm />
      <Topic title='Our Catering Menu' />
    </div>
  );
};

export default Catering;
