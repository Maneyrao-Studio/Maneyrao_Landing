"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Menu, X } from 'lucide-react'
import { useIsContactOpen } from "@/app/hooks/isContactOpenAtom"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [, setIsContactOpen] = useIsContactOpen()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navLinks = [
    { name: "Trabajo", href: "#work" },
    { name: "Nuestra visión", href: "#services" },
    { name: "Acerca de", href: "#about" },
    { name: "Contacto", href: "#contact" },
  ]

  const handleMobileLinkClick = (href: string) => {
    setIsMobileMenuOpen(false)
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.location.href = href
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 ${
          isScrolled ? "py-3 sm:py-4" : "py-4 sm:py-6"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-3 backdrop-blur-md bg-black/40 border border-white/10`}
        >
          <a href="/" className="text-xl sm:text-2xl font-bold tracking-tighter relative z-50">
            Maneyrao<span className="text-blue-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsContactOpen(true)} 
              className="bg-white text-black px-4 lg:px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              ¡Hablemos!
            </button>
          </div>

          <button
            className="md:hidden relative z-50 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" />
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative h-full flex flex-col items-center justify-center gap-8 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleMobileLinkClick(link.href)}
                  className="text-2xl sm:text-3xl font-light text-white hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsContactOpen(true)
                }}
                className="mt-4 bg-white text-black px-8 py-3 rounded-full text-base font-semibold hover:bg-white/90 transition-colors"
              >
                ¡Hablemos!
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}