export interface PriceOption {
  volume: string;
  price: string;
}

export interface MenuItemType {
  id: string;
  name: string;
  category: 'drinks' | 'hotdogs' | 'desserts' | 'autumn';
  description?: string;
  weight?: string;
  price: string;
  image: string;
  badge?: 'НОВИНКА' | 'СЕЗОННОЕ' | 'ХИТ';
  featured?: boolean;
  prices?: PriceOption[];
}

export interface CategoryType {
  id: 'drinks' | 'hotdogs' | 'desserts' | 'autumn';
  name: string;
  label: string;
}

export const CATEGORIES: CategoryType[] = [
  { id: 'drinks', name: 'Напитки', label: 'Авторский и классический кофе' },
  { id: 'hotdogs', name: 'Хот-доги', label: 'Горячие street-food доги' },
  { id: 'desserts', name: 'Десерты', label: 'Свежая выпечка и торты' },
  { id: 'autumn', name: 'Сезонное меню', label: 'Сезонный спешел' },
];

export const MENU_ITEMS: MenuItemType[] = [
  // НАПИТКИ (ОБНОВЛЕНЫ ПО НОВОМУ МЕНЮ MEDEO)
  {
    id: 'espresso',
    name: 'Эспрессо',
    category: 'drinks',
    weight: '30 / 60 мл',
    price: 'от 60 ₽',
    image: '/images/hero/menu-espresso.png',
    prices: [
      { volume: '30 мл', price: '60 ₽' },
      { volume: '60 мл', price: '100 ₽' },
    ],
  },
  {
    id: 'americano',
    name: 'Американо',
    category: 'drinks',
    weight: '250 / 350 / 450 мл',
    price: 'от 70 ₽',
    image: '/images/hero/menu-americano.png',
    prices: [
      { volume: '250 мл', price: '70 ₽' },
      { volume: '350 мл', price: '135 ₽' },
      { volume: '450 мл', price: '185 ₽' },
    ],
  },
  {
    id: 'cappuccino',
    name: 'Капучино',
    category: 'drinks',
    weight: '250 / 350 / 450 мл',
    price: 'от 100 ₽',
    image: '/images/hero/menu-cappuccino.png',
    featured: true,
    prices: [
      { volume: '250 мл', price: '100 ₽' },
      { volume: '350 мл', price: '160 ₽' },
      { volume: '450 мл', price: '205 ₽' },
    ],
  },
  {
    id: 'latte',
    name: 'Латте',
    category: 'drinks',
    weight: '250 / 350 / 450 мл',
    price: 'от 100 ₽',
    image: '/images/hero/menu-latte.png',
    featured: true,
    prices: [
      { volume: '250 мл', price: '100 ₽' },
      { volume: '350 мл', price: '160 ₽' },
      { volume: '450 мл', price: '205 ₽' },
    ],
  },
  {
    id: 'flat-white',
    name: 'Флет Уайт',
    category: 'drinks',
    weight: '250 / 350 / 450 мл',
    price: 'от 140 ₽',
    image: '/images/hero/menu-flatwhite.png',
    featured: true,
    prices: [
      { volume: '250 мл', price: '140 ₽' },
      { volume: '350 мл', price: '185 ₽' },
      { volume: '450 мл', price: '220 ₽' },
    ],
  },
  {
    id: 'bumble',
    name: 'Бамбл кофе',
    category: 'drinks',
    weight: '350 / 600 мл',
    price: 'от 413 ₽',
    image: '/images/hero/menu-bumble.png',
    prices: [
      { volume: '350 мл', price: '413 ₽' },
      { volume: '600 мл', price: '449 ₽' },
    ],
  },
  {
    id: 'bumble-grapefruit',
    name: 'Бамбл кофе',
    description: 'на грейпфруте',
    category: 'drinks',
    weight: '350 / 600 мл',
    price: 'от 479 ₽',
    image: '/images/hero/menu-bumble-grapefruit.png',
    prices: [
      { volume: '350 мл', price: '479 ₽' },
      { volume: '600 мл', price: '511 ₽' },
    ],
  },

  // ХОТ-ДОГИ
  {
    id: 'classic-dog',
    name: 'Классический',
    category: 'hotdogs',
    weight: '210 г',
    price: '220 ₽',
    image: '/images/hero/hero-greek-hotdog.png',
    featured: true,
  },
  {
    id: 'danish-dog',
    name: 'Датский',
    category: 'hotdogs',
    weight: '200 г',
    price: '210 ₽',
    image: '/images/hotdogs/hotdog-placeholder.svg',
  },
  {
    id: 'greek-dog',
    name: 'Греческий',
    category: 'hotdogs',
    weight: '210 г',
    price: '240 ₽',
    image: '/images/hero/hero-greek-hotdog.png',
    badge: 'ХИТ',
  },
  {
    id: 'mexican-dog',
    name: 'Мексиканский',
    category: 'hotdogs',
    weight: '220 г',
    price: '230 ₽',
    image: '/images/hotdogs/hotdog-placeholder.svg',
  },

  // ДЕСЕРТЫ & СЕЗОННОЕ
  {
    id: 'pecan-cheesecake',
    name: 'Чизкейк с пеканом',
    category: 'desserts',
    weight: '180 г',
    price: '220 ₽',
    image: '/images/hero/medeo-dessert-cheesecake.png',
    featured: true,
  },
  {
    id: 'brownie',
    name: 'Брауни',
    category: 'desserts',
    weight: '135 г',
    price: '180 ₽',
    image: '/images/hero/hero-brownie-stack.png',
    featured: true,
  },
  {
    id: 'caramel-tarts',
    name: 'Тарталетки с карамелью',
    category: 'autumn',
    weight: '180 г',
    price: '190 ₽',
    image: '/images/hero/hero-caramel-tarts.png',
    badge: 'СЕЗОННОЕ',
    featured: true,
  },
  {
    id: 'caramel-apple-pie',
    name: 'Яблочно-карамельный пирог',
    category: 'autumn',
    weight: '190 г',
    price: '200 ₽',
    image: '/images/hero/medeo-dessert-slice.png',
    badge: 'СЕЗОННОЕ',
  },
];
