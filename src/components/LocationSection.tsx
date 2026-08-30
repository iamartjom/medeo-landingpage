"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="w-full bg-[#FFC700] text-[#111111] py-20 md:py-28 bg-grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* CENTERED HEADING: МЫ ЗДЕСЬ */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-[#111111] uppercase">
            МЫ ЗДЕСЬ
          </h2>
        </div>

        {/* TWO COLUMNS: MAP PREVIEW LEFT, DETAILS RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* LEFT: YANDEX MAPS CONTAINER PREVIEW */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 relative"
          >
            <div className="relative w-full aspect-[16/10] bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-xl border-2 border-[#111111]/10 p-2">
              <iframe
                title="MEDEO Yandex Maps Location"
                src="https://yandex.ru/map-widget/v1/?ll=76.914567%2C43.225678&z=16"
                width="100%"
                height="100%"
                className="rounded-2xl border-0 w-full h-full grayscale-[20%]"
                loading="lazy"
              />
              
              {/* OVERLAY MAP MARKER CARD */}
              <div className="absolute top-6 left-6 bg-[#111111] text-[#FFC700] px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border border-[#FFC700]/30">
                <MapPin className="w-4 h-4 fill-[#FFC700]" />
                <span className="font-display text-xs font-black tracking-wider uppercase">MEDEO COFFEE</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: CONTACT & HOURS DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 space-y-6"
          >
            <div className="space-y-5 font-sans">
              
              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#111111] text-[#FFC700] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                  <MapPin className="w-5 h-5 fill-[#FFC700]" />
                </div>
                <div>
                  <p className="font-display text-xs font-extrabold uppercase text-[#111111]/60 mb-0.5">АДРЕС</p>
                  <p className="font-sans text-base font-bold text-[#111111]">
                    ул. Тимирязева, 42А, <br />
                    Алматы, Казахстан
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#111111] text-[#FFC700] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                  <Phone className="w-5 h-5 fill-[#FFC700]" />
                </div>
                <div>
                  <p className="font-display text-xs font-extrabold uppercase text-[#111111]/60 mb-0.5">ТЕЛЕФОН</p>
                  <p className="font-sans text-base font-bold text-[#111111]">
                    +7 707 123 45 67
                  </p>
                </div>
              </div>

              {/* HOURS */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#111111] text-[#FFC700] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display text-xs font-extrabold uppercase text-[#111111]/60 mb-0.5">ЧАСЫ РАБОТЫ</p>
                  <p className="font-sans text-sm font-bold text-[#111111]">
                    пн–пт: 08:00 – 22:00 <br />
                    сб–вс: 09:00 – 22:00
                  </p>
                </div>
              </div>

              {/* SOCIAL CIRCLES */}
              <div className="pt-2 flex items-center space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-[#111111] text-[#FFC700] flex items-center justify-center font-display font-extrabold text-xs hover:bg-[#FAF8F5] hover:text-[#111111] transition-colors shadow-md"
                >
                  IG
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="w-10 h-10 rounded-full bg-[#111111] text-[#FFC700] flex items-center justify-center font-display font-extrabold text-xs hover:bg-[#FAF8F5] hover:text-[#111111] transition-colors shadow-md"
                >
                  TG
                </a>
              </div>

            </div>

            {/* BLACK PILL BUTTON: МЫ НА КАРТЕ */}
            <div className="pt-4">
              <a
                href="https://yandex.ru/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#111111] text-[#FFC700] font-display text-xs font-black tracking-wider uppercase rounded-full flex items-center justify-center gap-2 hover:bg-[#FAF8F5] hover:text-[#111111] transition-all shadow-lg active:scale-95"
              >
                <Navigation className="w-4 h-4 fill-[#FFC700]" />
                <span>МЫ НА КАРТЕ</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
