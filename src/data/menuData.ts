import type { MenuSection, HappyHourItem } from '@/types';

export const foodSections: MenuSection[] = [
  {
    id: 'tacos',
    title: 'Tacos',
    subtitle: 'All tacos served on house-pressed corn tortillas.',
    items: [
      { id: 'taco-classic', name: 'Classic Street', description: 'Carne asada, white onion, cilantro, salsa verde, lime', price: 3.50 },
      { id: 'taco-pastor', name: 'Al Pastor', description: 'Achiote-marinated pork, grilled pineapple, cilantro, white onion', price: 4.00 },
      { id: 'taco-birria', name: 'Birria', description: 'Slow-braised beef, oaxaca cheese, consomé for dipping', price: 5.50 },
      { id: 'taco-fish', name: 'Baja Fish', description: 'Beer-battered cod, cabbage slaw, pico de gallo, chipotle crema', price: 4.50 },
      { id: 'taco-toni', name: 'The Toni Special', description: 'Slow-smoked brisket, caramelized onions, jalapeño aioli, pickled red onion', price: 5.50, badge: 'House Favorite' },
      { id: 'taco-chicken', name: 'Spicy Chicken', description: 'Adobo-marinated chicken, jalapeño, pickled red onion, avocado', price: 4.00, badge: 'Spicy' },
      { id: 'taco-breakfast', name: 'Breakfast Taco', description: 'Scrambled egg, chorizo, potato, pico de gallo, cotija', price: 4.00 },
      { id: 'taco-shrimp', name: 'Gulf Shrimp', description: 'Grilled shrimp, mango salsa, avocado, tajín crema', price: 5.00 },
      { id: 'taco-veggie', name: 'Veggie', description: 'Roasted portobello, peppers, black beans, cotija, chipotle aioli', price: 3.75 },
      { id: 'taco-buffalo', name: 'Buffalo Cauliflower', description: 'Crispy buffalo cauliflower, blue cheese crumble, celery slaw', price: 4.00 },
    ],
  },
  {
    id: 'bowls',
    title: 'Taco Bowls',
    subtitle: 'Served over cilantro-lime rice with black beans, cotija, and fresh pico. Gluten-free.',
    items: [
      { id: 'bowl-asada', name: 'Carne Asada Bowl', description: 'Grilled steak, guacamole, sour cream, salsa roja', price: 12, badge: 'GF' },
      { id: 'bowl-pastor', name: 'Al Pastor Bowl', description: 'Pork, grilled pineapple, pickled onion, salsa verde', price: 11, badge: 'GF' },
      { id: 'bowl-chicken', name: 'Grilled Chicken Bowl', description: 'Adobo chicken, roasted peppers, avocado, chipotle crema', price: 11, badge: 'GF' },
      { id: 'bowl-shrimp', name: 'Gulf Shrimp Bowl', description: 'Grilled shrimp, mango salsa, tajín crema, avocado', price: 13, badge: 'GF' },
      { id: 'bowl-veggie', name: 'Veggie Bowl', description: 'Roasted mushrooms, peppers, black beans, guacamole, cotija', price: 10, badge: 'GF · V' },
    ],
  },
  {
    id: 'apps',
    title: 'Apps & Dips',
    items: [
      { id: 'app-chips', name: 'Chips & House Salsa', description: 'Made fresh daily', price: 4 },
      { id: 'app-guac', name: 'Fresh Guacamole', description: 'Avocado, lime, jalapeño, white onion, cilantro', price: 7 },
      { id: 'app-queso', name: 'Queso Fundido', description: 'Melted oaxaca cheese, chorizo, fresh tortillas', price: 8 },
      { id: 'app-elote', name: 'Elote', description: 'Mexican street corn, cotija, tajín, chipotle mayo, lime', price: 6 },
      { id: 'app-nachos', name: "Toni's Nachos", description: 'Your choice of protein, queso, pico, jalapeño, sour cream', price: 13 },
    ],
  },
];

export const drinkSections: MenuSection[] = [
  {
    id: 'cocktails',
    title: 'Cocktails',
    items: [
      { id: 'drink-marg', name: 'Classic Margarita', description: 'Tequila, fresh lime, agave — rocks or frozen', price: 10 },
      { id: 'drink-spicymarg', name: 'Spicy Mango Margarita', description: 'Tequila, mango, tajín rim, jalapeño', price: 11 },
      { id: 'drink-ranch', name: 'Ranch Water', description: 'Tequila, fresh lime, Topo Chico', price: 9 },
      { id: 'drink-paloma', name: 'Paloma', description: 'Tequila, fresh grapefruit, lime, salt rim', price: 10 },
      { id: 'drink-michela', name: 'Michelada', description: 'Beer, fresh lime, house hot sauce, tomato, tajín rim', price: 8 },
      { id: 'drink-sangria', name: "Toni's Sangría", description: 'House-made red wine sangria with seasonal fruit', price: 9 },
    ],
  },
  {
    id: 'beer',
    title: 'Bottled & Canned Beer',
    items: [
      { id: 'beer-modelo', name: 'Modelo Especial', description: '', price: 5 },
      { id: 'beer-dos', name: 'Dos Equis Lager', description: '', price: 5 },
      { id: 'beer-tecate', name: 'Tecate', description: '', price: 4 },
      { id: 'beer-shiner', name: 'Shiner Bock', description: '', price: 5 },
    ],
  },
  {
    id: 'taps',
    title: 'Local Craft on Tap',
    subtitle: 'Rotating DFW taps — ask your server about current selections.',
    items: [
      { id: 'tap-peticolas', name: 'Royal Scandal English IPA', description: 'Peticolas Brewing Co. — Dallas, TX', price: 7 },
      { id: 'tap-fourcorners', name: 'Block Party Porter', description: 'Four Corners Brewing Co. — Dallas, TX', price: 7 },
      { id: 'tap-lakewood', name: 'Temptress Milk Stout', description: 'Lakewood Brewing Co. — Garland, TX', price: 8 },
      { id: 'tap-community', name: 'Mosaic IPA', description: 'Community Beer Co. — Dallas, TX', price: 7 },
    ],
  },
  {
    id: 'na',
    title: 'Non-Alcoholic',
    items: [
      { id: 'na-jarritos', name: 'Jarritos', description: 'Mandarin, Tamarind, Watermelon, Lime', price: 3 },
      { id: 'na-horchata', name: 'Horchata', description: '', price: 4 },
      { id: 'na-agua', name: 'Agua Fresca', description: 'Rotating seasonal flavors', price: 4 },
      { id: 'na-soda', name: 'Soft Drinks', description: 'Coke, Diet Coke, Sprite, Dr Pepper', price: 3 },
    ],
  },
];

export const happyHourItems: HappyHourItem[] = [
  { name: 'Draft Beer (any tap)', regular: '$7–$8', happyHour: '$1 off', category: 'drinks' },
  { name: 'Classic Margarita',    regular: '$10',   happyHour: '$7',     category: 'drinks' },
  { name: 'Classic Street Taco',  regular: '$3.50', happyHour: '$2.50',  category: 'food' },
  { name: 'Veggie Taco',          regular: '$3.75', happyHour: '$2.50',  category: 'food' },
  { name: 'Spicy Chicken Taco',   regular: '$4.00', happyHour: '$2.50',  category: 'food' },
  { name: 'Chips & House Salsa',  regular: '$4',    happyHour: '$2',     category: 'food' },
  { name: 'Queso Fundido',        regular: '$8',    happyHour: '$5',     category: 'food' },
];
