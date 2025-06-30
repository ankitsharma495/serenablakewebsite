'use client';

import Link from "next/link";
import { motion } from "framer-motion";

 function Footer() {
  return (
    <footer className="bg-[#f3f0e8] text-center text-gray-800 py-8 px-4 text-base font-light">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-serif font-normal mb-2 font-light">
          Dr. Serena Blake, Ph.D, Clinical Psychologist
        </h2>

        <div className="mb-1">
          <a href="mailto:serena@blakepsychology.com" >
            serena@blakepsychology.com
          </a>
        </div>

        <div className="mb-1">
          Phone: <a href="tel:3235550192" >(323) 555-0192</a>
        </div>

        <div className="mb-1">
          1287 Maplewood Drive, Los Angeles, CA 90026
        </div>

        <div className="my-2">
          <p className="font-medium"><strong>Office Hours:</strong></p>
          <p>In-person: Tue & Thu, 10 AM–6 PM</p>
          <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</p>
        </div>

        <div className="space-x-4 mt-3">
          <Link href="/" >Home</Link>
          <Link href="/about" >About</Link>
          <Link href="/rates-and-insurance" >Rates & Insurance</Link>
          <Link href="/faq" >FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="mt-4">
          <Link href="/" className="underline font-medium">
            Client Portal
          </Link>
        </div>

        <p className="mt-6 text-gray-600 text-base font-light">
          © {new Date().getFullYear()} Dr. Serena Blake, PsyD. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
export default Footer;
