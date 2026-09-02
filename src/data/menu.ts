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
  badge?: string;
  featured?: boolean;
  prices?: PriceOption[];
}

export interface CategoryType {
  id: 'drinks' | 'hotdogs' | 'desserts' | 'autumn';
  name: string;
  label: string;
}

export const CATEGORIES: CategoryType[] = [
  { id: 'hotdogs', name: 'Хот-доги', label: 'Горячие street-food доги' },
  { id: 'drinks', name: 'Напитки', label: 'Авторский и классический кофе' },
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
  {
    id: 'tea',
    name: 'Чай',
    description: 'в ассортименте',
    category: 'drinks',
    weight: '250 / 350 / 450 мл',
    price: 'от 95 ₽',
    image: '/images/hero/menu-tea.png',
    prices: [
      { volume: '250 мл', price: '95 ₽' },
      { volume: '350 мл', price: '150 ₽' },
      { volume: '450 мл', price: '185 ₽' },
    ],
  },
  {
    id: 'hot-chocolate',
    name: 'Горячий шоколад',
    category: 'drinks',
    weight: '250 / 350 / 450 мл',
    price: 'от 115 ₽',
    image: '/images/hero/menu-hot-chocolate.png',
    prices: [
      { volume: '250 мл', price: '115 ₽' },
      { volume: '350 мл', price: '160 ₽' },
      { volume: '450 мл', price: '205 ₽' },
    ],
  },
  {
    id: 'lemonades',
    name: 'Лимонады',
    description: 'в ассортименте',
    category: 'drinks',
    weight: '450 мл',
    price: '210 ₽',
    image: '/images/hero/menu-lemonades.png',
    prices: [
      { volume: '450 мл', price: '210 ₽' },
    ],
  },

  // ХОТ-ДОГИ
  {
    id: 'greek-dog',
    name: 'Греческий дог',
    category: 'hotdogs',
    price: '229 ₽',
    image: '/images/hotdogs/menu-greek-dog.png',
    badge: 'ХИТ',
    featured: true,
  },
  {
    id: 'mexican-dog',
    name: 'Мексиканский дог',
    category: 'hotdogs',
    price: '195 ₽',
    image: '/images/hotdogs/menu-mexican-dog.png',
    featured: true,
  },
  {
    id: 'caprese-dog',
    name: 'Капрезе дог',
    category: 'hotdogs',
    price: '217 ₽',
    image: '/images/hotdogs/menu-italian-dog.png',
    featured: true,
  },
  {
    id: 'caesar-dog',
    name: 'Цезарь дог',
    category: 'hotdogs',
    price: '215 ₽',
    image: '/images/hotdogs/menu-caesar-dog.png',
    featured: true,
  },
  {
    id: 'hrust-dog',
    name: 'Хруст дог',
    category: 'hotdogs',
    price: '229 ₽',
    image: '/images/hotdogs/menu-danish-dog.png',
    featured: true,
  },
  {
    id: 'french-dog',
    name: 'Французский дог',
    category: 'hotdogs',
    price: '180 ₽',
    image: '/images/hotdogs/menu-bavarian-dog.png',
  },
  {
    id: 'uncle-stepa-dog',
    name: 'Дядя Степа дог',
    category: 'hotdogs',
    price: '139 ₽',
    image: '/images/hotdogs/menu-american-dog.png',
  },
  {
    id: 'danish-dog',
    name: 'Датский дог',
    category: 'hotdogs',
    price: '185 ₽',
    image: '/images/hotdogs/menu-fresh-dog.png',
  },
  {
    id: 'fresh-mresh-dog',
    name: 'Фреш Мреш дог',
    category: 'hotdogs',
    price: '205 ₽',
    image: '/images/hotdogs/menu-cheese-dog.png',
  },

  // ДЕСЕРТЫ
  {
    id: 'cheesecake-ny',
    name: 'Чизкейк Нью-Йорк',
    category: 'desserts',
    price: '179 ₽',
    image: '/images/hero/menu-dessert-cheesecake-classic.png',
    featured: true,
  },
  {
    id: 'choco-pecan-cheesecake',
    name: 'Чизкейк',
    description: 'с шоколадом, карамелью и орехами',
    category: 'desserts',
    price: '199 ₽',
    image: '/images/hero/menu-dessert-choco-pecan-cheesecake.png',
    featured: true,
  },
  {
    id: 'caramel-nut-tart',
    name: 'Тарталетка',
    description: 'карамельно-ореховая',
    category: 'desserts',
    price: '199 ₽',
    image: '/images/hero/hero-caramel-tarts.png',
    featured: true,
  },
  {
    id: 'brownie-caramel-hazelnut',
    name: 'Брауни',
    description: 'с карамелью и фундуком',
    category: 'desserts',
    price: '234 ₽',
    image: '/images/hero/hero-brownie-stack.png',
    featured: true,
  },
  {
    id: 'sinnocake-caramel-pecan',
    name: 'Синнокейк',
    description: 'с карамелью, орехами и корицей',
    category: 'desserts',
    price: '215 ₽',
    badge: 'ХИТ ОСЕНИ',
    image: '/images/hero/menu-dessert-sinocake-pecan.png',
    featured: true,
  },
  {
    id: 'cheesecake-apple-caramel',
    name: 'Чизкейк',
    description: 'яблочно-карамельный',
    category: 'desserts',
    price: '235 ₽',
    badge: 'ХИТ ОСЕНИ',
    image: '/images/hero/menu-dessert-apple-caramel-cheesecake.png',
  },
  {
    id: 'sand-mini-pie',
    name: 'Песочный мини-пирог',
    category: 'desserts',
    price: '135 ₽',
    image: '/images/hero/menu-dessert-almond-pie.png',
  },
  {
    id: 'pie-apple-caramel',
    name: 'Пирог',
    description: 'карамельно-яблочный',
    category: 'desserts',
    price: '185 ₽',
    badge: 'ХИТ ОСЕНИ',
    image: '/images/hero/menu-dessert-apple-caramel-pie.png',
  },
  {
    id: 'cake-tiramisu',
    name: 'Торт Тирамису',
    category: 'desserts',
    price: '195 ₽',
    image: '/images/hero/menu-dessert-tiramisu.png',
  },

  // СЕЗОННОЕ МЕНЮ
  {
    id: 'maple-cappuccino',
    name: 'Кленовый капучино',
    category: 'autumn',
    weight: '200 / 300 / 400 мл',
    price: 'от 160 ₽',
    image: '/images/hero/menu-maple-cappuccino.png',
    featured: true,
    prices: [
      { volume: '200 мл', price: '160 ₽' },
      { volume: '300 мл', price: '185 ₽' },
      { volume: '400 мл', price: '225 ₽' },
    ],
  },
  {
    id: 'raspberry-cacao',
    name: 'Какао малиновый',
    category: 'autumn',
    badge: 'ХИТ СЕЗОНА',
    weight: '300 / 400 мл',
    price: 'от 175 ₽',
    image: '/images/hero/menu-raspberry-cacao.png',
    featured: true,
    prices: [
      { volume: '300 мл', price: '175 ₽' },
      { volume: '400 мл', price: '215 ₽' },
    ],
  },
  {
    id: 'salted-caramel-latte',
    name: 'Латте соленая карамель',
    category: 'autumn',
    badge: 'ТОП ПРОДАЖ',
    weight: '300 / 400 мл',
    price: 'от 189 ₽',
    image: '/images/hero/menu-salted-caramel-latte.png',
    featured: true,
    prices: [
      { volume: '300 мл', price: '189 ₽' },
      { volume: '400 мл', price: '228 ₽' },
    ],
  },
  {
    id: 'choco-latte',
    name: 'Шоко-латте',
    category: 'autumn',
    weight: '300 / 400 мл',
    price: 'от 189 ₽',
    image: '/images/hero/menu-choco-latte.png',
    featured: true,
    prices: [
      { volume: '300 мл', price: '189 ₽' },
      { volume: '400 мл', price: '228 ₽' },
    ],
  },
  {
    id: 'caramel-tarts',
    name: 'Тарталетка',
    description: 'карамельно-ореховая',
    category: 'autumn',
    price: '199 ₽',
    image: '/images/hero/hero-caramel-tarts.png',
    badge: 'СЕЗОННОЕ',
  },
  {
    id: 'autumn-sinnocake',
    name: 'Синнокейк',
    description: 'с карамелью, орехами и корицей',
    category: 'autumn',
    price: '215 ₽',
    badge: 'ХИТ ОСЕНИ',
    image: '/images/hero/menu-dessert-sinocake-pecan.png',
  },
  {
    id: 'autumn-cheesecake-apple-caramel',
    name: 'Чизкейк',
    description: 'яблочно-карамельный',
    category: 'autumn',
    price: '235 ₽',
    badge: 'ХИТ ОСЕНИ',
    image: '/images/hero/menu-dessert-apple-caramel-cheesecake.png',
  },
  {
    id: 'autumn-pie-apple-caramel',
    name: 'Пирог',
    description: 'карамельно-яблочный',
    category: 'autumn',
    price: '185 ₽',
    badge: 'ХИТ ОСЕНИ',
    image: '/images/hero/menu-dessert-apple-caramel-pie.png',
  },
];
