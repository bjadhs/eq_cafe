'use client';

import Image from 'next/image';
import { TabsContent } from './ui/tabs';
import { GalleryItem } from '@/lib/gallery_items';

interface TabsContentProps {
  value: string;
  galleryItems: GalleryItem[];
  isLoaded: boolean;
}

const CustomTabsContent = ({
  value,
  galleryItems,
  isLoaded,
}: TabsContentProps) => {
  return (
    <TabsContent value={value}>
      <div className='grid grid-cols-3 gap-4'>
        {galleryItems.map((item, index) => (
          <div key={index}>
            <Image
              src={item.img}
              alt={item.info}
              width={300}
              height={200}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isLoaded ? 'scale-100 opacity-100' : 'scale-30 opacity-10'
              }`}
            />
          </div>
        ))}
      </div>
    </TabsContent>
  );
};

export default CustomTabsContent;
