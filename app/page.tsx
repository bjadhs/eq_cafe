import DashLine from '@/components/shared/DashLine';
import Features from '@/components/shared/home/Features';

const HomePage = () => {
  return (
    <div className='flex flex-col items-center gap-8'>
      <Features />
      <DashLine color='border-gray-300' />
    </div>
  );
};

export default HomePage;
