import React from 'react';
type TopicProps = {
  title: string;
};

const Topic = ({ title }: TopicProps) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='h-[6px] w-6 bg-[#D1B019] border rounded-full'></div>
      <h3>{title}</h3>
    </div>
  );
};

export default Topic;
