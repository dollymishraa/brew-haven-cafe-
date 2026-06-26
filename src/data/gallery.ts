export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/KLing_80a18e54-bec7-42a1-9883-544221467bed.jpg', alt: 'Barista pouring latte art', category: 'Coffee' },
  { id: 2, src: '/images/KLing_db66913b-c5a1-4000-b620-68db0594d069.jpg', alt: 'Friends playing board games', category: 'Games' },
  { id: 3, src: '/images/KLing_4e3587ff-25ff-4c5c-9320-16f4984ad66d.jpg', alt: 'Game shelves library', category: 'Games' },
  { id: 4, src: '/images/KLing_c3dd2899-6947-47cb-9fa5-d3e5effe9b66.jpg', alt: 'Cozy cafe interior', category: 'Interior' },
  { id: 5, src: '/images/KLing_369e1e17-bffd-41ee-b569-24d73a5342a9.jpg', alt: 'Catan board game in play', category: 'Games' },
  { id: 6, src: '/images/KLing_11379db3-e2d1-482b-b115-1a6b60798f87.jpg', alt: 'Honey latte art', category: 'Coffee' },
  { id: 7, src: '/images/KLing_43ef3a36-cbf4-400f-9a34-895621e2d275.jpg', alt: 'Chess tournament night', category: 'Events' },
  { id: 8, src: '/images/KLing_678b2a02-5fab-4f1b-9bbe-f720aecc5788.jpg', alt: 'Dice rolling tabletop gaming', category: 'Games' },
  { id: 9, src: '/images/KLing_68acc8d1-9879-4f2d-8f0c-f5666708ebaa.jpg', alt: 'Community trivia night', category: 'Events' },
];
