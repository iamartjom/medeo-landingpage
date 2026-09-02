"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#FAF8F5] text-[#111111] py-14 md:py-20 bg-grain overflow-hidden border-t border-[#111111]/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT STORY CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#111111] tracking-tighter uppercase mb-4">
              О НАС
            </h2>

            <div className="font-sans text-xs sm:text-sm md:text-[14.5px] text-[#111111]/85 space-y-3 font-normal leading-relaxed max-w-lg">
              <p className="font-bold text-sm sm:text-base text-[#111111]">
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
              <span className="font-serif italic text-lg sm:text-xl font-bold text-[#111111] tracking-tight">
                Дмитрий и команда MEDEO
              </span>
            </div>
          </motion.div>

          {/* RIGHT ATMOSPHERIC 9:16 PORTRAIT PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full aspect-[9/16] max-w-[290px] sm:max-w-[320px] rounded-2xl overflow-hidden shadow-xl border border-[#111111]/10">
              <Image
                src="/images/barista-about.jpg"
                alt="Дмитрий, основатель MEDEO за кофемашиной"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
