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
  id: 'all' | 'drinks' | 'hotdogs' | 'desserts' | 'autumn';
  name: string;
  label: string;
}

export const CATEGORIES: CategoryType[] = [
  { id: 'all', name: 'ВСЁ', label: 'Полное меню' },
  { id: 'drinks', name: 'НАПИТКИ', label: 'Авторский и классический кофе' },
  { id: 'hotdogs', name: 'ХОТ-ДОГИ', label: 'Горячие street-food доги' },
  { id: 'desserts', name: 'ДЕСЕРТЫ', label: 'Свежая выпечка и торты' },
  { id: 'autumn', name: 'ОСЕННЕЕ МЕНЮ', label: 'Сезонный спешл' },
];

export const MENU_ITEMS: MenuItemType[] = [
  // НАПИТКИ
  {
    id: 'espresso',
    name: 'Эспрессо',
    category: 'drinks',
    description: 'Насыщенный плотный шот спешелти арабики с бархатистой пенкой crema',
    price: '— ₽',
    image: '/images/hero/medeo-cup-latte.png',
    badge: 'ХИТ',
    featured: true
  },
  {
    id: 'americano',
    name: 'Американо',
    category: 'drinks',
    description: 'Классический эспрессо с добавлением горячей фильтрованной воды',
    price: '— ₽',
    image: '/images/hero/medeo-cup-latte.png',
  },
  {
    id: 'latte',
    name: 'Латте',
    category: 'drinks',
    description: 'Нежный молочный напиток с шелковистой микропенкой и балансом эспрессо',
    price: '— ₽',
    image: '/images/hero/medeo-cup-latte.png',
    featured: true
  },
  {
    id: 'flat-white',
    name: 'Флет уайт',
    category: 'drinks',
    description: 'Двойной шот ристретто с бархатистым взбитым молоком',
    price: '— ₽',
    image: '/images/hero/medeo-cup-latte.png',
    badge: 'ХИТ'
  },
  {
    id: 'cappuccino',
    name: 'Капучино',
    category: 'drinks',
    description: 'Идеальный баланс эспрессо, взбитого молока и пышной молочной пены',
    price: '— ₽',
    image: '/images/hero/medeo-cup-whipped.png',
  },
  {
    id: 'seasonal-latte',
    name: 'Сезонный Карамельный Латте',
    category: 'drinks',
    description: 'Авторский латте с пышной шапкой взбитых сливок, карамелью и пряной крошкой',
    price: '— ₽',
    image: '/images/hero/medeo-cup-whipped.png',
    badge: 'СЕЗОННОЕ',
    featured: true
  },
  {
    id: 'tea-selection',
    name: 'Чай в ассортименте',
    category: 'drinks',
    description: 'Листовой крупнолистовой чай: чёрный, зелёный, травяной',
    price: '— ₽',
    image: '/images/drinks/drink-placeholder.svg',
  },
  {
    id: 'raspberry-cocoa',
    name: 'Малиновый какао',
    category: 'drinks',
    description: 'Густой ароматный какао с натуральным малиновым пюре',
    price: '— ₽',
    image: '/images/hero/medeo-cup-whipped.png',
    badge: 'НОВИНКА'
  },
  {
    id: 'hot-chocolate',
    name: 'Горячий шоколад',
    category: 'drinks',
    description: 'Плотный премиальный шоколад с пряным сливочным послевкусием',
    price: '— ₽',
    image: '/images/hero/medeo-cup-whipped.png',
  },
  {
    id: 'penguin-milk',
    name: 'Пингвинье молоко',
    category: 'drinks',
    description: 'Фирменный нежный напиток на основе взбитого молока и секретного рецепта',
    price: '— ₽',
    image: '/images/hero/medeo-cup-whipped.png',
    badge: 'ХИТ',
    featured: true
  },

  // ХОТ-ДОГИ
  {
    id: 'greek-dog',
    name: 'Греческий',
    category: 'hotdogs',
    weight: '210 г',
    description: 'Свежая булочка, сочная сосиска гриль, сыр фета, оливки и зелень',
    price: '— ₽',
    image: '/images/hotdogs/hotdog-placeholder.svg',
    badge: 'ХИТ',
    featured: true
  },
  {
    id: 'danish-dog',
    name: 'Датский',
    category: 'hotdogs',
    weight: '200 г',
    description: 'Классика с хрустящим луком фри, маринованными огурчиками и горчицей',
    price: '— ₽',
    image: '/images/hotdogs/hotdog-placeholder.svg',
  },
  {
    id: 'uncle-stepa-dog',
    name: 'Дядя Степа',
    category: 'hotdogs',
    weight: '180 г',
    description: 'Увеличенная сочная сосиска с фирменным сырным соусом',
    price: '— ₽',
    image: '/images/hotdogs/hotdog-placeholder.svg',
  },
  {
    id: 'caprese-dog',
    name: 'Капрезе',
    category: 'hotdogs',
    weight: '210 г',
    description: 'Сочный томатный песто, моцарелла, свежий базилик и сосиска гриль',
    price: '— ₽',
    image: '/images/hotdogs/hotdog-placeholder.svg',
    badge: 'НОВИНКА'
  },
  {
    id: 'mexican-dog',
    name: 'Мексиканский',
    category: 'hotdogs',
    weight: '220 г',
    description: 'Острый халапеньо, кукуруза, соус чили и хрустящие начос',
    price: '— ₽',
    image: '/images/hotdogs/hotdog-placeholder.svg',
    featured: true
  },
  {
    id: 'french-dog',
    name: 'Французский',
    category: 'hotdogs',
    weight: '180 г',
    description: 'Закрытая хрустящая булочка с поджаристой сосиской и пикантным соусом',
    price: '— ₽',
    image: '/images/hotdogs/hotdog-placeholder.svg',
    badge: 'ХИТ'
  },
  {
    id: 'fresh-mresh-dog',
    name: 'Фреш Мреш',
    category: 'hotdogs',
    weight: '210 г',
    description: 'Свежие томаты, огурчик, микрозелень и легкий йогуртовый соус',
    price: '— ₽',
    image: '/images/hotdogs/hotdog-placeholder.svg',
  },
  {
    id: 'khrust-dog',
    name: 'Хруст дог',
    category: 'hotdogs',
    weight: '220 г',
    description: 'Двойная порция хрустящего лука, бекон и дымный соус барбекю',
    price: '— ₽',
    image: '/images/hotdogs/hotdog-placeholder.svg',
    featured: true
  },

  // ОСЕННЕЕ МЕНЮ & ДЕСЕРТЫ
  {
    id: 'caramel-apple-pie',
    name: 'Карамельный Торт Пекан',
    category: 'autumn',
    description: 'Пышный бисквит, соленая домашняя карамель и отборный пекан',
    price: '— ₽',
    image: '/images/hero/medeo-dessert-slice.png',
    badge: 'СЕЗОННОЕ',
    featured: true
  },
  {
    id: 'cinnocake',
    name: 'Синнокейк с орехами',
    category: 'autumn',
    description: 'Торт с карамелью, обжаренным орехом пекан и пряной корицей',
    price: '— ₽',
    image: '/images/hero/medeo-dessert-slice.png',
    badge: 'СЕЗОННОЕ',
    featured: true
  },
  {
    id: 'apple-caramel-cheesecake',
    name: 'Чизкейк Пекан-Шоколад',
    category: 'autumn',
    description: 'Нежный сливочный чизкейк с какао-основой, капельками шоколада и орехом пекан',
    price: '— ₽',
    image: '/images/hero/medeo-dessert-cheesecake.png',
    badge: 'СЕЗОННОЕ',
    featured: true
  },
  {
    id: 'caramel-cinnamon-snail',
    name: 'Улитка с карамелью и пеканом',
    category: 'autumn',
    description: 'Слойка из слоеного сливочного теста с щедрой начинкой из корицы и карамели',
    price: '— ₽',
    image: '/images/hero/medeo-dessert-slice.png',
    badge: 'СЕЗОННОЕ'
  },
  {
    id: 'tiramisu-cake',
    name: 'Торт Шоколадный Пекан',
    category: 'desserts',
    description: 'Классический шоколадно-ореховый десерт с насыщенным кремом',
    price: '— ₽',
    image: '/images/hero/medeo-dessert-cheesecake.png',
    badge: 'ХИТ',
    featured: true
  }
];
