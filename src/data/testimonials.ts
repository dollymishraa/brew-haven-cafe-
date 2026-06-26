export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  review: string;
  rating: number;
  favoriteGame: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Aria Chen',
    avatar: 'https://images.unsplash.com/photo-1631947430066-48c30d57b943?q=80&w=416&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    review: "Brew Haven is my favorite place in the city. The Honey Latte is divine and Pandemic has become our group's obsession. Dolly & Shine created something truly magical here.",
    rating: 5,
    favoriteGame: 'Pandemic',
  },
  {
    id: 2,
    name: 'Marcus Webb',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    review: "I've been to board game cafes all over the world and Brew Haven is in a league of its own. The atmosphere, the coffee, the game selection — absolutely unmatched.",
    rating: 5,
    favoriteGame: 'Gloomhaven',
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    review: 'We hosted our entire team retreat here and everyone loved it. The private gaming room was perfect and the charcuterie board was incredible. Will definitely return.',
    rating: 5,
    favoriteGame: 'Codenames',
  },
  {
    id: 4,
    name: 'James Park',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    review: 'The chess tournaments here are world-class. Friendly competition, great coffee, and the staff genuinely love games. This is what a community space should be.',
    rating: 5,
    favoriteGame: 'Chess',
  },
  {
    id: 5,
    name: 'Luna Martinez',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    review: 'Started coming here with my kids and now the whole family is hooked. Dixit has become our Sunday tradition. The truffle fries are absolutely addictive too.',
    rating: 5,
    favoriteGame: 'Dixit',
  },
  {
    id: 6,
    name: 'Ryan O\'Connor',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    review: "The D&D nights are legendary. Our group has been running a campaign here for six months. The ambiance just makes you feel like you're truly in another world.",
    rating: 5,
    favoriteGame: 'D&D',
  },
];
