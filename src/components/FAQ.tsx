"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, I accept select insurance plans and also offer private pay options. Please contact me directly to verify your specific insurance coverage. I can provide you with a superbill for potential reimbursement from your insurance company if you're out-of-network.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "I offer virtual therapy sessions via secure, HIPAA-compliant video conferencing. Online sessions are available Monday, Wednesday, and Friday from 1 PM–5 PM. Virtual therapy can be just as effective as in-person sessions and offers greater flexibility and convenience.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "I require at least 24 hours notice for session cancellations or rescheduling. Cancellations made with less than 24 hours notice may be subject to the full session fee, unless due to emergency circumstances. This policy helps ensure that appointment times remain available for all clients.",
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <section className="py-20 px-4 bg-[#f3f0e8]">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl text-[#40403e] md:text-4xl font-light font-serif mb-6">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-[#40403e] mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none "
                aria-expanded={openItems.includes(index)}
              >
                <h3 className="text-lg font-light font-serif text-[#40403e]">{item.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-[#94b0b0] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#94b0b0] flex-shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-[#40403e] leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Have more questions?</p>
          <a
            href="#contact"
            className="inline-block bg-[#94b0b0] text-white px-6 py-3 rounded-lg hover:bg-[#7f9a9a] transition-colors font-semibold"
          >
            Get in Touch
          </a>
        </div>
        <div className="w-[90%] h-0.5 bg-zinc-400 md:translate-x-16 translate-x-5 translate-y-16 opacity-90"></div>
      </motion.div>
    </section>
  )
}
