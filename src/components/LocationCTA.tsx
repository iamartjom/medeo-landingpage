"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, ShoppingBag, Truck, Phone } from "lucide-react";

export default function LocationCTA() {
  return (
    <section id="location" className="w-full bg-[#111111] text-[#FAF8F5] py-24 md:py-36 bg-grain-dark relative overflow-hidden border-t border-[#FFC700]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="font-display text-xs font-black tracking-widest uppercase text-[#111111] bg-[#FFC700] px-4 py-1.5 rounded-full inline-block mb-6">
              ЛОКАЦИЯ И ДОСТАВКА
            </span>

            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#FAF8F5] tracking-tighter uppercase leading-none mb-8">
              ЗАБРАТЬ С СОБОЙ <br />
              <span className="text-[#FFC700]">ИЛИ ЯНДЕКС ЕДА</span>
            </h2>

            <p className="font-sans text-lg text-[#FAF8F5]/80 max-w-xl leading-relaxed mb-10">
              Заглядывайте по пути на работу или прогулку, либо заказывайте быструю доставку через Яндекс Еду прямо к вашей двери.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="https://yandex.ru/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FFC700] text-[#111111] font-display text-sm font-black tracking-wider uppercase rounded-full hover:bg-[#FAF8F5] transition-all duration-300 flex items-center gap-3 shadow-lg active:scale-95"
              >
                <MapPin className="w-4 h-4" />
                <span>МЫ НА КАРТЕ</span>
              </a>

              <a
                href="https://eda.yandex.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-[#FFC700] text-[#FFC700] font-display text-sm font-bold tracking-wider uppercase rounded-full hover:bg-[#FFC700] hover:text-[#111111] transition-all duration-300 flex items-center gap-3 active:scale-95"
              >
                <Truck className="w-4 h-4" />
                <span>ЯНДЕКС ЕДА — ДОСТАВКА</span>
              </a>
            </div>

            {/* QUICK FEATURES */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-[#FAF8F5]/15">
              <div className="flex items-center gap-3">
                <Navigation className="w-5 h-5 text-[#FFC700]" />
                <div>
                  <h5 className="font-display text-xs font-bold uppercase">Яндекс Карты</h5>
                  <p className="font-sans text-[11px] opacity-60">Удобная навигация</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-[#FFC700]" />
                <div>
                  <h5 className="font-display text-xs font-bold uppercase">Самовывоз</h5>
                  <p className="font-sans text-[11px] opacity-60">Без очереди</p>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <Truck className="w-5 h-5 text-[#FFC700]" />
                <div>
                  <h5 className="font-display text-xs font-bold uppercase">Яндекс Еда</h5>
                  <p className="font-sans text-[11px] opacity-60">Быстрая доставка</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT LOCATION CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#1A1A1A] p-8 md:p-10 rounded-3xl border border-[#FFC700]/30 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-[#FAF8F5]/10 pb-6 mb-6">
                <span className="font-display text-xl font-black text-[#FFC700]">MEDEO SPOT</span>
                <span className="w-3 h-3 rounded-full bg-[#388E3C] animate-pulse" />
              </div>

              <div className="space-y-6 font-sans">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#FFC700] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-display text-xs font-bold uppercase text-[#FFC700] block mb-1">АДРЕС</span>
                    <p className="text-base text-[#FAF8F5] font-medium">
                      г. Москва, ул. Центральная, д. 12 <br />
                      <span className="text-xs opacity-60">(Уточняется при открытии)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#FFC700] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-display text-xs font-bold uppercase text-[#FFC700] block mb-1">ЧАСЫ РАБОТЫ</span>
                    <p className="text-base text-[#FAF8F5] font-medium">
                      Пн – Пт: 08:00 – 21:00 <br />
                      Сб – Вс: 09:00 – 22:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#FFC700] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-display text-xs font-bold uppercase text-[#FFC700] block mb-1">СВЯЗЬ</span>
                    <p className="text-base text-[#FAF8F5] font-medium">
                      +7 (999) 000-00-00
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://eda.yandex.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full py-4 bg-[#FFC700] text-[#111111] font-display text-xs font-black tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 hover:bg-[#FAF8F5] transition-all"
              >
                <span>ЗАКАЗАТЬ В ЯНДЕКС ЕДЕ</span>
                <Truck className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
