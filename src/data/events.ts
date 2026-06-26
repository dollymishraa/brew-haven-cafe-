export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  capacity: number;
  registered: number;
  price: number;
  category: string;
  
}

export const events: Event[] = [
  {
    id: 1,
    title: 'Weekly Board Game Night',
    description: 'Join us every Friday for our beloved board game night. Open to all skill levels — bring friends or come solo and find your squad.',
    date: 'Every Friday',
    time: '7:00 PM – 11:00 PM',
    image: '/images/KLing_db66913b-c5a1-4000-b620-68db0594d069.jpg',
    capacity: 80,
    registered: 62,
    price: 8,
    category: 'Weekly',
  },
  {
    id: 2,
    title: 'Chess Tournament',
    description: 'Test your strategic mind in our monthly chess tournament. Rated and unrated divisions available. Trophy for first place.',
    date: 'July 12, 2026',
    time: '2:00 PM – 7:00 PM',
    image: '/images/KLing_43ef3a36-cbf4-400f-9a34-895621e2d275.jpg',
    capacity: 32,
    registered: 28,
    price: 15,
    category: 'Tournament',
   
  },
  {
    id: 3,
    title: "D&D Campaign Night",
    description: 'Enter the realm of Faerûn with our Dungeons & Dragons campaign night. Dungeon Master provided — bring your dice, we bring the adventure.',
    date: 'July 18, 2026',
    time: '6:00 PM – 10:00 PM',
    image: '/images/KLing_93876a3d-314b-4e98-a3d5-ce2cbcf75db0.jpg',
    capacity: 20,
    registered: 16,
    price: 20,
    category: 'RPG',
   
  },
  {
    id: 4,
    title: 'Catan Championship',
    description: 'The ultimate Settlers of Catan competition. Trade, build, and settle your way to victory. Multiple rounds, single champion.',
    date: 'July 26, 2026',
    time: '3:00 PM – 9:00 PM',
    image: '/images/KLing_369e1e17-bffd-41ee-b569-24d73a5342a9.jpg',
    capacity: 48,
    registered: 48,
    price: 18,
    category: 'Tournament',
    
  },
  {
    id: 5,
    title: 'Trivia Night',
    description: 'Put your knowledge to the test with our themed trivia nights covering pop culture, history, science, and more. Team entry recommended.',
    date: 'Every Wednesday',
    time: '8:00 PM – 10:00 PM',
    image: '/images/KLing_68acc8d1-9879-4f2d-8f0c-f5666708ebaa.jpg',
    capacity: 60,
    registered: 35,
    price: 5,
    category: 'Weekly',
    
  },
  {
    id: 6,
    title: 'Card Game Battles',
    description: 'Magic: The Gathering, Yu-Gi-Oh, Pokémon — all welcome. Casual and competitive formats. Show up with your deck and compete.',
    date: 'August 2, 2026',
    time: '4:00 PM – 8:00 PM',
    image: '/images/KLing_2f564cb9-1424-41be-9599-57f50b334934.jpg',
    capacity: 40,
    registered: 22,
    price: 10,
    category: 'Tournament',
    
  },
];
