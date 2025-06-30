"use client";
import { motion } from "framer-motion";

export default function RatesInsurance() {
  return (
    <section id="rates" className="py-20 px-4 bg-[#F5F2ED]">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8 mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-[#40403e] md:text-4xl font-light font-serif mb-6">
              Rates & Insurance
            </h2>
            <div className="w-16 h-1 bg-[#40403e] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-light font-serif mb-2 text-[#40403e]">
                Individual Session
              </h3>
              <p className="text-3xl font-light text-[#7d7d6a]">$200</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-light font-serif mb-2 text-[#40403e]">
                Couples Session
              </h3>
              <p className="text-3xl font-light text-[#7d7d6a]">$240</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-lg mb-4 text-center text-[#7d7d6a]">
              I accept both private pay and select insurance plans. Please
              contact me to verify your coverage.
            </p>
            <p className="text-lg text-center mb-6 text-[#7d7d6a]">
              Both in-person and virtual sessions available to accommodate your
              needs.
            </p>
          </div>
        </div>
      </motion.div>
      <div className="md:p-14 ">
        <p className="text-2xl font-serif font-light text-[#7e7e6a] text-center">
          Currently accepting new clients!
        </p>
      </div>
    </section>
  );
}
