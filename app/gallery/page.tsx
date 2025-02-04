import galleryItems, { GalleryType } from '@/lib/gallery_items';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

const Gallery = () => {
  const allGalleryItems = galleryItems;
  const venueGalleryItems = galleryItems.filter(
    (g) => g.gallery === GalleryType.Venue
  );
  const menuGalleryItems = galleryItems.filter(
    (g) => g.gallery === GalleryType.Menu
  );
  const cateringGalleryItems = galleryItems.filter(
    (g) => g.gallery === GalleryType.Catering
  );

  return (
    <div>
      <Tabs defaultValue='All' className=''>
        <TabsList className='w-full mx-auto gap-4 pb-4'>
          <TabsTrigger value='All'>All</TabsTrigger>
          <TabsTrigger value='Venue'>Venue</TabsTrigger>
          <TabsTrigger value='Menu'>Menu</TabsTrigger>
          <TabsTrigger value='Catering'>Catering</TabsTrigger>
        </TabsList>

        <TabsContent value='All'>
          <div className='grid grid-cols-3 gap-4'>
            {allGalleryItems.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.img}
                  alt={item.info}
                  width={300}
                  height={200}
                />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value='Venue'>
          <div className='grid grid-cols-3 gap-4'>
            {venueGalleryItems.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.img}
                  alt={item.info}
                  width={300}
                  height={200}
                />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value='Menu'>
          <div className='grid grid-cols-3 gap-4'>
            {menuGalleryItems.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.img}
                  alt={item.info}
                  width={300}
                  height={200}
                />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value='Catering'>
          <div className='grid grid-cols-3 gap-4'>
            {cateringGalleryItems.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.img}
                  alt={item.info}
                  width={300}
                  height={200}
                />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Gallery;
