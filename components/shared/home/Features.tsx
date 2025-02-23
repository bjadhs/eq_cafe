import React from 'react';
import Topic from '../Topic';
import { featureItems } from '@/lib/features_items';
import Image from 'next/image';

const Features = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <Topic title='FEATURES' />
      <h1>Why people choose us?</h1>
      <p className='-mt-4'>
        Choose EQ Cafe and Bakehouse for its cozy atmosphere, delicious food,
        and excellent service.
      </p>
      <div className='grid grid-cols-3 gap-4 mt-12'>
        {featureItems.map((item, index) => {
          return (
            <div key={index} className='flex flex-col items-center gap-2'>
              <Image src={item.icon} alt={item.title} width={60} height={60} />
              <h2 className='mt-6'>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
