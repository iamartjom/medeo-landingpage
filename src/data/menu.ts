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
  // НАПИТКИ
  {
    id: 'espresso',
    name: 'Эспрессо',
    category: 'drinks',
    weight: '200 мл',
    price: '100 ₽',
    image: '/images/hero/medeo-cup-latte.png',
  },
  {
    id: 'americano',
    name: 'Американо',
    category: 'drinks',
    weight: '200 мл',
    price: '120 ₽',
    image: '/images/hero/medeo-cup-latte.png',
  },
  {
    id: 'cappuccino',
    name: 'Капучино',
    category: 'drinks',
    weight: '300 мл',
    price: '160 ₽',
    image: '/images/hero/medeo-cup-whipped.png',
    featured: true,
  },
  {
    id: 'latte',
    name: 'Латте',
    category: 'drinks',
    weight: '300 мл',
    price: '170 ₽',
    image: '/images/hero/medeo-cup-latte.png',
    featured: true,
  },
  {
    id: 'raf',
    name: 'Раф',
    category: 'drinks',
    weight: '300 мл',
    price: '190 ₽',
    image: '/images/hero/medeo-cup-whipped.png',
    badge: 'ХИТ',
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
