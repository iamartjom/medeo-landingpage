"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#FAF8F5] text-[#111111] py-20 md:py-28 bg-grain overflow-hidden border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* LEFT ATMOSPHERIC PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-[#111111]/5">
              <Image
                src="/images/barista-about.jpg"
                alt="Дмитрий, основатель MEDEO"
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* RIGHT WARM STORY CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-6 flex flex-col justify-center pl-0 md:pl-6"
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] tracking-tighter uppercase mb-6">
              О НАС
            </h2>

            <div className="font-sans text-sm sm:text-base text-[#111111]/85 space-y-4 font-normal leading-relaxed max-w-lg">
              <p className="font-semibold text-base sm:text-lg text-[#111111]">
                Привет! Я Дмитрий, основатель MEDEO.
              </p>
              <p>
                Когда-то всё началось с простой идеи — создать небольшую, уютную кофейню, куда хочется возвращаться, куда приятно забежать не только за хорошим кофе, но и просто за настроением. Здесь можно немного выдохнуть, поболтать, выпить любимый напиток, попробовать сочный хот-дог или что-нибудь сладкое — и всё это по очень дружелюбным ценам.
              </p>
              <p>
                Мы ещё маленькие, но постепенно растём, пробуем новое и становимся лучше. И для нас действительно важен каждый человек, который открывает нашу дверь. Именно благодаря вам у MEDEO появляется своя история и своя атмосфера.
              </p>
              <p>
                Приходите в гости — будем рады познакомиться, накормить, напоить кофе и просто поболтать. Ждём вас!
              </p>
            </div>

            {/* SIGNATURE ACCENT */}
            <div className="mt-6">
              <span className="font-serif italic text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
                Дмитрий и команда MEDEO
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
