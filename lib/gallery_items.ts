 export enum GalleryType {
  All = 'All',
  Venue = 'Venue',
  Menu = 'Menu',
  Catering = 'Catering'
}

export interface GalleryItem {
    id: number;
    gallery: GalleryType;
    info: string;
    img: string;
    }

export const galleryItems = [
  {
    id: 1,
    gallery: GalleryType.Venue,
    info: 'EQ-Bakehouse cafe - Brendabella',
    img: '/eq_gallery5.jpg'
  },
  {
    id: 2,
    gallery: GalleryType.Venue,
    info: 'EQ-Bakehouse cafe - Canberra City',
    img: '/eq_gallery5.jpg'
  },
  {
    id: 3,
    gallery: GalleryType.Menu,
    info: 'EQ-Bakehouse menu - Canberra City',
    img: '/eq_menu.jpg'
  },
  {
    id: 4,
    gallery: GalleryType.Menu,
    info: 'EQ-Bakehouse menu - Melbourne City',
    img: '/eq_menu.jpg'
  },
  {
    id: 5,
    gallery: GalleryType.Menu,
    info: 'EQ-Bakehouse menu - Sydney City',
    img: '/eq_menu2.jpg'
  },
  {
    id: 6,
    gallery: GalleryType.Catering,
    info: 'EQ-Bakehouse catering - Canberra City',
    img: '/eq_menu3.jpg'
  },
];

export default galleryItems;