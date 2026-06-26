export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  // Coffee
  { id: 1,  name: 'Signature Espresso',       description: 'Double shot of our house blend, velvety and bold.',                    price: 3.50,  category: 'Coffee',      image: '/images/KLing_b4810905-f51a-4515-859a-7f9aa0acf4ed.jpg', popular: true },
  { id: 2,  name: 'Honey Latte',              description: 'Creamy oat milk latte sweetened with wildflower honey.',                price: 5.50,  category: 'Coffee',      image: '/images/KLing_11379db3-e2d1-482b-b115-1a6b60798f87.jpg', popular: true },
  { id: 3,  name: 'Cappuccino',               description: 'Classic Italian cappuccino with silky microfoam.',                     price: 4.75,  category: 'Coffee',      image: '/images/KLing_ec3f800a-19c2-49ae-99eb-f4f8c774ccc8.jpg' },
  { id: 4,  name: 'Flat White',               description: 'Smooth, strong and velvety — the perfect balance.',                    price: 4.50,  category: 'Coffee',      image: '/images/KLing_641e0dbd-2519-47da-bfec-bb70717a43b9.jpg' },
  { id: 5,  name: 'Brew Haven Blend Pour-Over', description: 'Slow-brewed single origin Ethiopian beans. Bright and floral.',     price: 6.00,  category: 'Coffee',      image: '/images/KLing_798d570d-b276-4a48-ac30-627f8c89b9b5.jpg' },
  // Tea
  { id: 6,  name: 'Jasmine Green Tea',        description: 'Delicate green tea scented with fresh jasmine blossoms.',              price: 3.50,  category: 'Tea',         image: '/images/KLing_db053959-30c8-4ada-a22f-79b54ac9cb5b.jpg' },
  { id: 7,  name: 'Masala Chai',              description: 'Spiced black tea with ginger, cardamom and steamed milk.',             price: 4.25,  category: 'Tea',         image: '/images/KLing_68b568fe-876b-4ee5-957d-6783360c71ba.jpg', popular: true },
  { id: 8,  name: 'Chamomile & Honey',        description: 'Soothing chamomile with wildflower honey and lemon.',                  price: 3.75,  category: 'Tea',         image: '/images/KLing_348625b1-b32e-42f6-8c84-96efdc1d9849.jpg' },
  // Cold Brews
  { id: 9,  name: 'Classic Cold Brew',        description: '18-hour slow-steeped cold brew, bold and smooth.',                    price: 5.00,  category: 'Cold Brews',  image: '/images/KLing_51b8b3da-044d-476a-9243-3e553e380b99.jpg' },
  { id: 10, name: 'Salted Caramel Cold Brew', description: 'Cold brew topped with salted caramel cream cold foam.',               price: 6.50,  category: 'Cold Brews',  image: '/images/KLing_4b4679bc-55dc-4355-a500-5e8c64aef7da.jpg', popular: true },
  { id: 11, name: 'Vanilla Nitro Brew',       description: 'Nitrogen-infused cold brew with smooth vanilla undertones.',          price: 6.00,  category: 'Cold Brews',  image: '/images/KLing_1471592f-c413-44eb-88c4-eeab9b79ad5b.jpg' },
  // Mocktails
  { id: 12, name: 'Lavender Lemonade',        description: 'House-made lemonade with lavender syrup and sparkling water.',        price: 5.50,  category: 'Mocktails',   image: '/images/KLing_3630cd25-a74f-425d-8e32-8caaa7771934.jpg' },
  { id: 13, name: 'Strawberry Basil Smash',   description: 'Muddled strawberry and fresh basil with ginger beer.',                price: 6.00,  category: 'Mocktails',   image: '/images/KLing_1d90882e-2ba3-401c-9714-371c2c96f007.jpg', popular: true },
  { id: 14, name: 'Spiced Apple Cider',       description: 'Warm or chilled spiced apple cider with a cinnamon stick.',           price: 4.75,  category: 'Mocktails',   image: '/images/KLing_cd42d427-9afa-4fa5-81e7-3aa0531eb2fc.jpg' },
  // Pastries
  { id: 15, name: 'Butter Croissant',         description: 'Freshly baked all-butter croissant, golden and flaky.',               price: 3.50,  category: 'Pastries',    image: '/images/KLing_66db26bd-c42e-4f22-93d3-437b57423062.jpg' },
  { id: 16, name: 'Almond Pain au Chocolat',  description: 'Dark chocolate croissant filled with almond frangipane.',             price: 4.25,  category: 'Pastries',    image: '/images/KLing_839e85ee-d573-417a-afa8-38e8a2065a9d.jpg', popular: true },
  { id: 17, name: 'Blueberry Scone',          description: 'Buttermilk scone loaded with fresh blueberries and lemon zest.',      price: 3.75,  category: 'Pastries',    image: '/images/KLing_56e56a93-19fe-47f7-9551-8f0906a124ce.jpg' },
  // Desserts
  { id: 18, name: 'Tiramisu',                 description: "Classic Italian tiramisu with espresso-soaked ladyfingers.",           price: 7.50,  category: 'Desserts',    image: '/images/KLing_6f84ecad-b8d7-4a6b-bd5c-fc5e5b2e0ff3.jpg', popular: true },
  { id: 19, name: 'Dark Chocolate Tart',      description: 'Rich dark chocolate ganache in a buttery tart shell.',                price: 6.50,  category: 'Desserts',    image: '/images/KLing_35028e16-4bee-42fb-b3a9-09b3c5fc6f3c.jpg' },
  { id: 20, name: 'Affogato',                 description: 'Vanilla gelato drowned in a shot of hot espresso.',                   price: 5.50,  category: 'Desserts',    image: '/images/KLing_7a15b5fc-4af9-41de-a0ee-d70f62ebe5c3.jpg' },
  // Pizza
  { id: 21, name: 'Margherita Pizza',         description: 'San Marzano tomatoes, fresh mozzarella, and basil on a thin crust.',  price: 14.00, category: 'Pizza',       image: '/images/KLing_e4bf5535-9dcf-4775-a197-171cb7cd5a1a.jpg' },
  { id: 22, name: 'Truffle Mushroom Pizza',   description: 'Wild mushrooms, truffle oil, fontina and thyme.',                     price: 17.00, category: 'Pizza',       image: '/images/KLing_e4bf5535-9dcf-4775-a197-171cb7cd5a1a.jpg', popular: true },
  { id: 23, name: 'Pepperoni Classic',        description: 'Double pepperoni with house-made tomato sauce and mozzarella.',       price: 15.00, category: 'Pizza',       image: '/images/KLing_a23af5d7-9b9b-42d1-8bd0-7df7cd14bb8b.jpg' },
  // Sandwiches
  { id: 24, name: 'Club Sandwich',            description: 'Triple-decker with turkey, bacon, lettuce, tomato and avocado.',      price: 12.50, category: 'Sandwiches',  image: '/images/KLing_6c1bd42d-2d98-449e-baf1-5d415c593369.jpg' },
  { id: 25, name: 'Grilled Cheese',           description: 'Three-cheese blend on sourdough with caramelized onions.',            price: 9.50,  category: 'Sandwiches',  image: '/images/KLing_6e09f0d1-9f77-44b3-96fb-b783de72ce95.jpg', popular: true },
  { id: 26, name: 'Caprese Panini',           description: 'Fresh mozzarella, heirloom tomatoes, basil pesto on ciabatta.',      price: 10.50, category: 'Sandwiches',  image: '/images/KLing_007a58a7-8ec3-423d-895d-3f164ed22bc0.jpg' },
  // Snacks
  { id: 27, name: 'Truffle Fries',            description: 'Crispy shoestring fries with truffle oil and parmesan.',              price: 8.00,  category: 'Snacks',      image: '/images/KLing_43338a01-d5e9-4f1a-8005-ce897f46b613.jpg', popular: true },
  { id: 28, name: 'Nachos & Guacamole',       description: 'Tortilla chips with homemade guacamole and pico de gallo.',           price: 9.50,  category: 'Snacks',      image: '/images/KLing_52190966-18ed-4834-bc42-ff89df7db3e2.jpg' },
  { id: 29, name: 'Charcuterie Board',        description: 'Artisan meats, aged cheeses, olives, fruit and crackers.',            price: 18.00, category: 'Snacks',      image: '/images/KLing_8bd43fe8-af7d-4c18-92c4-259b84d1c6d3.jpg' },
];

export const menuCategories = ['Coffee', 'Tea', 'Cold Brews', 'Mocktails', 'Pastries', 'Desserts', 'Pizza', 'Sandwiches', 'Snacks'];
