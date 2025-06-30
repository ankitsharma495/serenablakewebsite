"use client";
import React from "react";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative md:min-h-screen flex items-center justify-center md:px-4 px-20 py-20 overflow-hidden md:mx-6 -mx-4 ">
      {/* Background Video Container with Padding */}
      <div className="absolute inset-8 overflow-hidden">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/backvideo.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-8 mt-16 md:mt-auto leading-tight drop-shadow-lg md:px-0 px-5">
          Psychological Care for 
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-8 leading-tight drop-shadow-lg md:px-0 px-5">
          Change, Insight, and Well‑Being
        </h1>
        {/* <div className="w-24 h-1 bg-white mx-auto mb-6 opacity-90"></div> */}
        <p className="text-lg md:text-xl font-serif md:mt-10 mt-18 md:mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md md:text-nowrap md:-translate-x-44 ">
          Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation
        </p>
        <button className="bg-[#94b0b0] text-white md:px-11 px-2 py-5 md:py-9 md:text-lg text-md font-semibold rounded-[50%] hover:bg-[#94b0b2] shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
          SCHEDULE A CONSULTATION
        </button>
      </div>
      </motion.div>

      {/* Fallback Background Image (if video doesn't load) */}
      <div
        className="absolute inset-8 rounded-2xl bg-cover bg-center bg-gray-300"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
          zIndex: -1,
        }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
      </div>
    </section>
  )
}
