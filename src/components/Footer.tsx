"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] text-[#FAF8F5] py-16 border-t border-[#FFC700]/20 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#FAF8F5]/10">
          {/* BRAND */}
          <div className="md:col-span-1">
            <a href="#" className="font-display text-3xl font-black text-[#FFC700] tracking-tighter inline-block mb-4">
              MEDEO
            </a>
            <p className="text-xs text-[#FAF8F5]/60 max-w-xs leading-relaxed">
              Маленькая кофейня — большая любовь. Кофе, хот-доги, десерты и Яндекс Еда — доставка.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-display text-xs font-extrabold uppercase text-[#FFC700] tracking-wider mb-4">
              НАВИГАЦИЯ
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF8F5]/80 font-medium">
              <li>
                <a href="#menu" className="hover:text-[#FFC700] transition-colors">
                  Меню
                </a>
              </li>
              <li>
                <a href="#autumn" className="hover:text-[#FFC700] transition-colors">
                  Осеннее меню
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FFC700] transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#FFC700] transition-colors">
                  Локация
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL & MAPS */}
          <div>
            <h4 className="font-display text-xs font-extrabold uppercase text-[#FFC700] tracking-wider mb-4">
              ДОСТАВКА И КАРТЫ
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF8F5]/80 font-medium">
              <li>
                <a
                  href="https://eda.yandex.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFC700] transition-colors"
                >
                  Яндекс Еда — Доставка
                </a>
              </li>
              <li>
                <a
                  href="https://yandex.ru/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFC700] transition-colors"
                >
                  Яндекс Карты
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFC700] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFC700] transition-colors"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          {/* INFO */}
          <div>
            <h4 className="font-display text-xs font-extrabold uppercase text-[#FFC700] tracking-wider mb-4">
              ИНФОРМАЦИЯ
            </h4>
            <div className="space-y-2 text-xs text-[#FAF8F5]/70">
              <p>
                <strong className="text-[#FAF8F5]">Адрес:</strong> г. Москва, ул. Центральная, 12
              </p>
              <p>
                <strong className="text-[#FAF8F5]">Часы:</strong> 08:00 – 21:00 ежедневно
              </p>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF8F5]/40 font-mono gap-4">
          <p>© {new Date().getFullYear()} MEDEO Coffee. Все права защищены.</p>
          <p className="tracking-widest uppercase text-[#FFC700]/70 font-display">МАЛЕНЬКАЯ КОФЕЙНЯ — БОЛЬШАЯ ЛЮБОВЬ</p>
        </div>
      </div>
    </footer>
  );
}
