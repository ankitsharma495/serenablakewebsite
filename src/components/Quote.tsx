"use client";
import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="py-30 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center font-light"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="rounded-2xl md:p-12">
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-black mb-6 ">
            I have come to believe that caring for myself is not self‑indulgent. Caring for myself is an act of
            survival.
          </blockquote>
          <cite className="block text-lg font-light text-[#41413f]">—Audre Lorde</cite>
        </div>
      </motion.div>
    </section>
  )
}
