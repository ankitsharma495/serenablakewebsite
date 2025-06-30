"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#areas-of-focus", label: "Services" },
    { href: "#rates", label: "Rates" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      {/* Logo always visible */}
      <div className="w-full pt-12 md:pb-6 px-7 md:px-15 relative">
        <div className="max-w-7xl flex justify-between items-center ">
          <div className="text-2xl font-bold font-serif w-sm ">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={250}
                height={10}
                priority
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>
          {/* Hamburger/X always visible on mobile, fixed at top-right */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#333333] hover:text-[#666666] transition-colors  top-6 right-6 z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Navigation (only on mobile) */}
      <div
        className={`fixed top-[12%] right-0 h-[calc(100vh-10%)] w-70 bg-[#f3f0e8] transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 pt-20">
          <nav className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-xl font-serif hover:text-[#7FB069] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#f3f0e8] bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}
