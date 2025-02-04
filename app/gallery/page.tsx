'use client';
import galleryItems, { GalleryType } from '@/lib/gallery_items';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CustomTabsContent from '@/components/CustomTabsContent';
import { useEffect, useState } from 'react';

const Gallery = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const filterGalleryItems = (type: GalleryType) =>
    galleryItems.filter((g) => g.gallery === type);

  const tabs = [
    { value: 'All', items: galleryItems },
    { value: 'Venue', items: filterGalleryItems(GalleryType.Venue) },
    { value: 'Menu', items: filterGalleryItems(GalleryType.Menu) },
    { value: 'Catering', items: filterGalleryItems(GalleryType.Catering) },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, [activeTab]);

  return (
    <div>
      <Tabs
        defaultValue='All'
        className=''
        onValueChange={(value) => {
          setActiveTab(value);
          setIsLoaded(false);
        }}
      >
        <TabsList className='w-full mx-auto gap-4 pb-4'>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.value}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <CustomTabsContent
            key={tab.value}
            value={tab.value}
            galleryItems={tab.items}
            isLoaded={isLoaded}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default Gallery;
