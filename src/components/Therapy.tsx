"use client";
import { motion } from "framer-motion";

export default function AreasOfFocus() {
  return (
    <>
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center font-light"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="rounded-2xl p-12 ">
          <blockquote className="text-2xl md:text-4xl font-light font-serif leading-relaxed text-[#41413f] mb-6 ">
            Therapy can be a space where you invest in yourself—  one of the highest
            forms of self-care.
          </blockquote>
          <p className="space-y-6 text-[18px] leading-8 font-light text-[#41413f]">
            You may be led to therapy by anxiety, depression, relationship stress,
            past or recent trauma, grief and loss, self-esteem issues, or challenges
            with family, parenting, or parental relationships. Whatever the source
            of your stress, you don&rsquo;t have to face it alone. Therapy offers you the
            time and space to work toward wellness and peace.
          </p>
        </div>
      </motion.div>
      <div className="w-[90%] h-0.5 bg-zinc-400 md:translate-x-16 translate-x-5 translate-y-16 opacity-90"></div>
    </>
  );
}
