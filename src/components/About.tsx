"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="md:py-30 md:pb-30 pb-20 px-4 bg-white">
      <motion.div
        className="max-w-7xl mx-auto p-6 md:pl-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="md:text-3xl text-2xl font-serif font-semibold text-[#7e7e6b] mb-8">
          About Dr. Serena Blake
        </h2>
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12">
          {/* Text Section */}
          <div className="lg:w-1/2">
            <div className="space-y-6 text-[17px] leading-8 text-[#7d7d6a] font-light text-justify">
              <p>
                Caring for our mental and emotional well-being can be difficult to prioritize amid the demands of daily life. Therapy offers a meaningful space for reflection, healing, and growth—a space where your experiences, values, and goals can be explored with care and clarity. I believe that lasting change begins with feeling truly seen and supported.
               With eight years of clinical experience and over 500 sessions, I bring a warm, collaborative approach to therapy. As a licensed clinical psychologist (PsyD) based in Los Angeles, I integrate evidence-based practices—including cognitive-behavioral therapy and mindfulness—with a deep respect for your unique story and strengths. My goal is to help you navigate anxiety, strengthen relationships, and move through trauma with resilience and self-compassion.
              </p>
              <p>
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to
                creating a safe, supportive space for you to thrive.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/model.jpg"
              alt="Dr. Serena Blake, PsyD - Licensed Clinical Psychologist"
              width={400}
              height={800}
              className="rounded-md shadow-lg object-cover md:-translate-y-14"
            />
          </div>
        </div>
      </motion.div>
      <div className="w-[90%] h-0.5 bg-zinc-400 md:translate-x-16 translate-x-5 translate-y-16 opacity-90 "></div>
    </section>
  );
}
